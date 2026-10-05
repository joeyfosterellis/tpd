# Tootsie in the Desert (the game)

A match-three game of names in fourteen nights, in Nepali and English. Swap tiles, spell each name in emoji, and open
what the name means, with every version of the line from every TPD side by side.

## Play

Open `index.html` in any browser, on a phone or a computer. No install, no build step.

- Touch a word to read it in Nepali and Brahmi, its TPD, its other languages and mishearings, and where it joins the story.
- Tap any text to turn it into its exact opposite. Tap again to bring the TPD back.
- Drag a tile onto its neighbour, or tap one tile and then the next.
- Keyboard: focus the board, arrows move, Enter selects, then an arrow swaps.
- Match 4 in a line for a ❤️ tile, which clears its row or column.
- Match 5 for the coat of many colours 🌈. Swap it with any tile to clear that whole colour.
- Progress is saved in the browser.

## Files

- `index.html`: the page
- `words.js`: every word on the board, with its emoji, TPD chain and sentences
- `branches.js`: every word in other languages, sound-alikes, mishearings and other lives
- `opposites.js`: tap any text for its exact opposite, tap again to return
- `deva.js`: paints every Devanagari letter hot pink
- `nepali.js`: Nepali for every word and every screen, and Devanagari-to-Brahmi
- `levels.js`: the fourteen nights, every passage and every version, each with its TPD
- `game.js`: the match-three engine and the screens
- `seventy.js`: the 070′ observer. Invisible; read it from the console with `o7o.report()`
- `THEORY-070.md`: 070′ applied to this game
- `MANIFEST.md`: what is SOURCED and what is GENERATED
