# CX India Dashboard — Setup & Customisation Guide

## 📁 Files in this project

| File | Purpose |
|---|---|
| `index.html` | The dashboard — **never need to edit this** |
| `config.js` | **The only file you edit** to customise everything |
| `README.md` | This guide |

---

## 🚀 Step 1 — Upload to GitHub

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **"New repository"** → name it `cx-dashboard` → set to **Public** → click **Create**
3. Click **"uploading an existing file"**
4. Drag all 3 files (`index.html`, `config.js`, `README.md`) into the upload area
5. Click **"Commit changes"**

---

## 🌐 Step 2 — Connect Netlify to GitHub

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site" → "Import an existing project"**
3. Choose **GitHub** → authorise Netlify → select your `cx-dashboard` repo
4. Leave all build settings blank (no build command needed)
5. Click **"Deploy site"**

✅ Your dashboard is now live at a URL like `https://cx-dashboard-xyz.netlify.app`

---

## ✏️ Step 3 — How to customise (after every change, Netlify auto-deploys in ~30 seconds)

Open **`config.js`** on GitHub (click the file → click the ✏️ pencil icon to edit).

### Change the colour theme
```js
theme: {
  purpleBase:  "#2D1666",   // ← change this hex code
  orange:      "#FF7722",   // ← and this one
  // ... etc
}
```

### Connect your Google Sheet (live data sync)
1. Open your Google Sheet
2. **File → Share → Publish to web** → "Anyone with link" → Publish
3. Copy the Sheet ID from the URL: `docs.google.com/spreadsheets/d/`**`YOUR_ID_HERE`**`/edit`
4. Find the GID of your tab (shown in the URL when that tab is open: `...#gid=XXXXXXXX`)
5. Paste into `config.js`:
```js
googleSheets: {
  sheetId: "YOUR_SHEET_ID_HERE",
  gid:     "YOUR_TAB_GID_HERE",
}
```

### Change daily target
```js
targets: {
  defaultDailyTarget: 150,   // ← change this number
}
```

### Change team names
```js
teams: {
  teamA: { name: "India",  sheetLabel: "India"  },
  teamB: { name: "Qatar",  sheetLabel: "Qatar"  },
}
```

### Show / hide dashboard sections
```js
sections: {
  showKPIStrip:       true,   // ← set to false to hide
  showStarCard:       true,
  showTargetVsAchiev: true,
  showPerfBars:       true,
  showDonut:          true,
  showContribList:    true,
  showLeaderboard:    true,
}
```

### Show / hide table columns
```js
columns: {
  showCalls:   true,
  showVOC:     true,
  showHold:    false,   // ← hidden
  showAHT:     true,
  showSurveys: true,
  showShare:   true,
  showTarget:  true,
  showStatus:  true,
}
```

### Change VOC / Hold thresholds (what counts as green / red)
```js
targets: {
  vocHigh:  0.85,   // VOC ≥ 85% = green  (was 0.80)
  vocLow:   0.70,   // VOC < 70% = red    (was 0.65)
  holdLow:  0.10,   // Hold ≤ 10% = green (was 0.15)
  holdHigh: 0.25,   // Hold > 25% = red   (was 0.30)
}
```

### Change the Star Contributor scoring weights
```js
starWeights: {
  voc:     50,   // make VOC count more
  calls:   20,
  hold:    20,
  surveys: 10,
  // must add up to 100
}
```

### Update agent count (add more India agents)
Scroll to `fallbackIndia` array and add a new line:
```js
{ id: 5001, name: "New Agent Name", surveys: 0, voc: null, answered: 0, holdPct: 0, aht: null },
```
Also update `agentRowEnd` in the `googleSheets` section to match the new last row.

---

## 🔄 Auto-refresh
The dashboard auto-refreshes live data from Google Sheets every **5 minutes** (configurable via `autoRefreshMinutes`).
A "Refresh now" button in the header forces an instant re-fetch anytime.

---

## ❓ Need help?
- The dashboard always falls back to the built-in data in `config.js` if the Sheet is unreachable.
- Never edit `index.html` — all changes go in `config.js` only.
