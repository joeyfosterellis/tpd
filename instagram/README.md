# Tootsie in the Desert: Instagram

Twenty slides in six versions, in `slides/<format>-<language>/01.png` to `20.png`:

| | Instagram, 1080 × 1350 (`ig`) | TikTok, 1080 × 1920 (`tt`) |
|---|---|---|
| Nepali + English (`ne`) | `slides/ig-ne/` | `slides/tt-ne/` |
| Sanskrit + English (`sa`) | `slides/ig-sa/` | `slides/tt-sa/` |
| Spanish + Nepali (`es`) | `slides/ig-es/` | `slides/tt-es/` |

One caption per slide in `CAPTIONS-<format>-<language>.md`. TikTok slides keep text clear of the
side buttons and the caption area.

Every night is a poll: where the TPDs disagree, each version is an option, labelled with its TPDs,
and all versions are correct. The same poll is in each caption, for comments or a poll sticker.

Built from the game's own files (`../tootsie-in-the-desert/*.js`) and the archive
(@ababykangaroo, Doha 2013, from ABABYKANGAROO-2013-INDEX.md), so slides, game and archive agree.

- Story lines are SOURCED, each with its TPD.
- Archive posts are SOURCED: timestamp and caption, verbatim, read off Instagram's records.
- The pairing of a post with a night, the captions, the poll questions, and all Nepali, Sanskrit
  and Spanish are GENERATED. Translated story lines are marked GENERATED on the slide.

To rebuild: `node render.js` (needs Playwright and Chromium).
