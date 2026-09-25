"""Ar Don Go: the descending helix from PINBALL-BLUEPRINT v001, as a Blender script.

Run inside Blender (Scripting tab, Run Script). Blender 4.x.

This is the machine's layout as the blueprint describes it: 68 table slots in
shot order around a vertical axis, radius 2.4 m, theta advancing 360/68 per
slot, each of 22 chutes dropping the ball one step (0.030 m), total drop
0.66 m, and the SHIELD 101 box lift carrying the ball back up from the last
table to the first.

It is the same picture as Diagram 2 on the Do Re Mi page (0 -> 7 -> 0'),
in three dimensions. Set RETURN_ONE_LEVEL_UP = True to get the Diagram 2
reading: the lift lands the ball at 0', directly above 0, and the route does
not close. Leave it False for the blueprint's own reading, where the
zero-drift rule makes frame L+1 identical to frame 1, so 0' = 0.

Assumption: the blueprint's join table (which slots end in a chute) is not in
the files I could reach, so the 22 chutes are spread evenly here. Replace
CHUTE_AFTER_SLOT with the real list from PINBALL-TABLE-PLAN when you have it.
"""

import math
import bpy

# LOOP parameters, as in the blueprint
SLOTS = 68            # tables, in shot order
CHUTES = 22           # drops between tables
RADIUS = 2.4          # metres
STEP_DROP = 0.030     # metres per chute
TABLE_W, TABLE_H = 0.19, 0.11   # metres, nominal table plane
BALL_D = 0.040        # metres

RETURN_ONE_LEVEL_UP = False   # True = Diagram 2 (0' above 0). False = blueprint (0' = 0).

# Evenly spread chutes: slot k has a chute after it if k is in this set.
CHUTE_AFTER_SLOT = set(round((i + 1) * SLOTS / CHUTES) - 1 for i in range(CHUTES))


def clear(name_prefix):
    for o in list(bpy.data.objects):
        if o.name.startswith(name_prefix):
            bpy.data.objects.remove(o, do_unlink=True)


def main():
    clear("ADG_")
    col = bpy.data.collections.get("ADG helix") or bpy.data.collections.new("ADG helix")
    if col.name not in bpy.context.scene.collection.children:
        bpy.context.scene.collection.children.link(col)

    loop = bpy.data.objects.new("ADG_LOOP", None)
    loop.empty_display_type = "PLAIN_AXES"
    loop["length"] = 7530
    loop["step_drop"] = STEP_DROP
    loop["radius"] = RADIUS
    loop["total_drop"] = STEP_DROP * CHUTES
    col.objects.link(loop)

    points = []
    drop = 0.0
    for k in range(SLOTS):
        theta = 2 * math.pi * k / SLOTS
        x, y, z = RADIUS * math.cos(theta), RADIUS * math.sin(theta), -drop
        # table plane, facing the axis
        bpy.ops.mesh.primitive_plane_add(size=1, location=(x, y, z))
        t = bpy.context.active_object
        t.name = f"ADG_T{k:02d}"
        t.scale = (TABLE_W, TABLE_H, 1)
        t.rotation_euler = (math.pi / 2, 0, theta + math.pi / 2)
        for c in t.users_collection:
            c.objects.unlink(t)
        col.objects.link(t)
        points.append((x, y, z))
        if k in CHUTE_AFTER_SLOT:
            drop += STEP_DROP

    # the ball's route: one curve through every slot, then the lift
    curve = bpy.data.curves.new("ADG_BALL_ROUTE", "CURVE")
    curve.dimensions = "3D"
    spline = curve.splines.new("POLY")
    end = list(points)
    if RETURN_ONE_LEVEL_UP:
        # 0': same angle as slot 0, one full drop above where slot 0 sits
        x0, y0, z0 = points[0]
        end.append((x0, y0, z0 + STEP_DROP * CHUTES))
    spline.points.add(len(end) - 1)
    for p, (x, y, z) in zip(spline.points, end):
        p.co = (x, y, z, 1)
    spline.use_cyclic_u = not RETURN_ONE_LEVEL_UP
    route = bpy.data.objects.new("ADG_BALL_ROUTE", curve)
    col.objects.link(route)

    # the lift: SHIELD box rail from the last table back to the first
    lx, ly, lz = points[-1]
    fx, fy, fz = points[0]
    rail = bpy.data.curves.new("ADG_BOX_RAIL", "CURVE")
    rail.dimensions = "3D"
    s = rail.splines.new("POLY")
    s.points.add(1)
    s.points[0].co = (lx, ly, lz, 1)
    top = fz + (STEP_DROP * CHUTES if RETURN_ONE_LEVEL_UP else 0.0)
    s.points[1].co = (fx, fy, top, 1)
    col.objects.link(bpy.data.objects.new("ADG_BOX_RAIL", rail))

    # the ball, at the release point on the head table
    bpy.ops.mesh.primitive_uv_sphere_add(radius=BALL_D / 2, location=(fx, fy, fz + BALL_D / 2))
    ball = bpy.context.active_object
    ball.name = "ADG_BALL"
    for c in ball.users_collection:
        c.objects.unlink(ball)
    col.objects.link(ball)

    print(f"ADG helix: {SLOTS} slots, {CHUTES} chutes, total drop {STEP_DROP * CHUTES:.3f} m, "
          f"{'0 prime above 0' if RETURN_ONE_LEVEL_UP else 'closed loop, 0 prime = 0'}")


main()
