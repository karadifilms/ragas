# Yakshagana Ragas

A static website for playing 77 Yakshagana raga audio clips.

## Project Structure

```
index.html          — Main page (table of ragas, single <audio> element)
style.css           — Responsive styling, active-row highlight
script.js           — Raga data array (77 entries) + playback logic
data/               — 77 .m4a audio files + source main_file.m4a
develop/
  main.py           — Script that sliced main_file.m4a into individual clips using ffmpeg
  statics.py        — Timestamps & raga names (Kannada + English) from original YouTube video
TODO.md             — Open tasks
```

## How It Works

- `script.js` contains a hardcoded array of `{ kannada, english, file }` objects (77 ragas + Mangalam)
- On page load, a `<tr>` is created for each raga and appended to the table
- Clicking a row sets the `<audio>` element's `src` to `data/<file>` and plays it
- Clicking the currently-playing row seeks to the clicked position (click position within row = fraction of audio duration)
- Clicking a different row stops the current and plays the new one
- The active row gets a `.playing` CSS class with a green gradient that fills left-to-right as audio plays (CSS `--progress` variable driven by `timeupdate`)
- A single shared `<button>` (▶/⏸) physically moves into the `.num` cell of the active row; `data-num` on each `.num` td stores the row number so it can be restored when the button moves away
- Spacebar toggles pause/play on desktop

## Data Pipeline

The audio clips were created by:
1. Downloading a single YouTube video as `data/main_file.m4a`
2. Defining timestamps + names in `develop/statics.py`
3. Running `develop/main.py` which uses ffmpeg to slice the file into individual `.m4a` clips
4. Filenames are derived from English names: lowercased, spaces → underscores

## Key Details

- Audio file naming convention: `raag_<english_name_lowercase_underscored>.m4a` (except `amburuhadalanethre.m4a` and `mangalam.m4a`)
- The file `raag_raag_kalyani.m4a` has a double "raag" — this matches the original YouTube data ("Raag Raag Kalyani")
- No build step — open `index.html` directly or serve with any static server
- No dependencies — pure HTML/CSS/JS

## TODO

See TODO.md for open tasks (deployment, audio cleanup, preloading).
