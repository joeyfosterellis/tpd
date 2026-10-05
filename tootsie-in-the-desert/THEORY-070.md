# 070′ applied to Tootsie in the Desert

The theory is REMEMBERED (5 October 2026). Everything below is GENERATED: it maps the theory onto
this game. `seventy.js` runs it invisibly while the game is played.

```
0′ = 0 + H
H  = T₁ + T₂ + T₃ + T₄ + T₅ + T₆ + T₇ + T₀
H ≠ 0, therefore 0′ ≠ 0
```

## X = the player, carrying a name through the fourteen nights

### The states

Positions, not values. 7 is not better than 3.

| State | Nights | Position |
|---|---|---|
| 0 | none | arrival: the name you were born into, not yet chosen |
| 1 | Prologue, Night 1 | origin: the durian, and the name given |
| 2 | Nights 2–3 | the guides: Gladys, and the Queer Jihad |
| 3 | Nights 4–5 | the meeting: the barbershop, and Gomorrah in Al-Gharafa |
| 4 | Nights 6–7 | washing and the dream: Ahmed, and Yousef |
| 5 | Nights 8–9 | transmission: Chinese whispers, and the coat of many colours |
| 6 | Nights 10–11 | fear and prayer: the knock, and Qada Salah |
| 7 | Nights 12–13 | the unknown: God, and Tootsie in the Desert |
| 0′ | the end | you write your name, and pick it in emoji |

The player can open any unlocked night, so arrows can also run backwards (5 → 2). A backward
arrow is not an undo. It is another arrow, and it goes into H like the rest.

### The arrows

Each arrow Tₙ is whatever had to happen to arrive at position n. The observer records it as it
happens:

| Kind | What it is in the game |
|---|---|
| heat | tiles burned away in matches |
| breath | moves spent |
| time | milliseconds lived between arrivals |
| language | words of the TPDs read on the story cards |
| learning | names whose meanings were opened; unknown tiles made known |
| decay | whispers (tiles changing by themselves), shuffles, ghosts and doors released |
| experience | wins, losses, stars, knocks at the door, restarts |

T₀ is the last arrow, from 7 back to 0′.

### Which arrows are reversible

- **Reversible: a swap that makes no match.** The tiles are swapped (T) and swapped back (T⁻¹),
  and the board is as it was.
- **Reversible: text tapped into its exact opposite.** Tap a passage and it flips (T); tap it
  again and the TPD returns (T⁻¹). These two are the only events in the game with an inverse. The observer
  counts these and leaves them out of H ≠ 0, because they leave no trace on the board.
- **Not reversible: everything else.** A matched tile is burned; there is no un-match. A
  whisper changes a tile and nothing whispers it back. A revealed unknown stays known. A read
  passage stays read. Time does not return.
- **Restart looks like an inverse and is not one.** The board comes back. The breath and the
  time spent on it do not. The observer records restarts as experience.
- **So every arrow between states is irreversible.** An arrow has an inverse only if every
  event inside it had one, and every arrow between positions holds at least one match.

### What 0′ carries that 0 did not

At 0 the player has no name in the game. The placeholder is "Habibi".

At 0′ the player carries:

- a name they chose, and that name in emoji
- the names whose meanings they opened (Joey Foster Ellis, Gladys, QUEER, Habibi, Adhan, Ahmed,
  Yousef, Quran, the coat of many colours, A friend, Qada Salah, God, Tootsie in the Desert)
- every version of each line, side by side: Syrian or Lebanese, pomegranate or pineapple,
  "pure translation" or "recitation", faith, love or disregard for the unknown
- the count of tiles burned, words read, whispers, unknowns revealed, nights lost, restarts and
  seconds lived

Then 0′ becomes the next departure. The next cycle's 0 is this 0′, not the first 0. Coming back
to the same nights with the same name is still a new state, because that name has already
been written once.

## The examples, inside the game

- **A clay egg before and after firing.** A tile before and after a match. The match is heat,
  and the tile does not unfire.
- **A person who leaves home and comes back.** The finale screen asks for the name first given
  at 0. The person typing it at 0′ has spent fourteen nights getting there.
- **Sa, the eighth note.** The last night is named like the game itself, Tootsie in the Desert,
  and plays two earlier nights' rules at once: whispers and unknowns.
- **A name said in a new country.** Joey becomes Joseph, then Yousef. In one TPD the man is
  Ahmed; in another he is Mohammed. Each version is kept, because each is the name after an
  arrow.

## Reading the observer

Open the browser console on the game and run:

```js
o7o.report()
```

It returns the current cycle, the position, every arrow so far with its H, whether each arrow is
reversible, and the last 0′ with what it carries. It is saved in the browser and shows nothing
on screen.
