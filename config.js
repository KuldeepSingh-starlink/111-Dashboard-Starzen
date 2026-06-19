// ╔══════════════════════════════════════════════════════════════════════╗
// ║         CX INDIA DASHBOARD — CONFIGURATION FILE                     ║
// ║                                                                      ║
// ║  This is the ONLY file you need to edit to customise your dashboard. ║
// ║  Change any value below, save the file, push to GitHub —            ║
// ║  Netlify will auto-deploy your updated dashboard in ~30 seconds.    ║
// ╚══════════════════════════════════════════════════════════════════════╝

const DASHBOARD_CONFIG = {

  // ─────────────────────────────────────────────────────────────────────
  // 1. BRANDING
  // ─────────────────────────────────────────────────────────────────────
  branding: {
    title:        "CX Inbound — India Team Dashboard",
    subtitle:     "Overall Agent Wise Tracker",
    periodLabel:  "Period: 46174 – 46179",
    teamLabel:    "India Only",
    footerText:   "CX Inbound Dashboard · India Team · Auto-syncs from Google Sheets",
  },

  // ─────────────────────────────────────────────────────────────────────
  // 2. COLOUR THEME
  //    Change hex codes to restyle the entire dashboard instantly.
  //    purpleBase   = main dark colour (header, table header, star card)
  //    purpleMid    = secondary purple (card titles, accents)
  //    purpleLight  = border and background tints
  //    orange       = accent / highlight colour (badges, bar fills, KPI top stripe)
  //    orangeLight  = hover states and subtle tints
  // ─────────────────────────────────────────────────────────────────────
  theme: {
    purpleBase:   "#2D1666",
    purpleDark:   "#1A0A3C",
    purpleMid:    "#4E29A8",
    purpleAccent: "#7C52CC",
    purpleLight:  "#C4AEF0",
    purpleTint:   "#E8E0FA",
    purplePale:   "#F4F0FD",
    orange:       "#FF7722",
    orangeDark:   "#D84E00",
    orangeLight:  "#FF9A55",
    orangePale:   "#FFF2E8",
  },

  // ─────────────────────────────────────────────────────────────────────
  // 3. GOOGLE SHEETS LIVE SYNC
  //    Step 1: Open your Google Sheet
  //    Step 2: File → Share → Publish to web → Anyone with link
  //    Step 3: Copy the Sheet ID from the URL:
  //            docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
  //    Step 4: Find the GID of your target tab (shown at end of URL
  //            when you click the tab: ...#gid=XXXXXXXX)
  //    Step 5: Paste both values below and save this file.
  //
  //    autoRefreshMinutes: how often the dashboard re-fetches live data
  //    agentRowStart / agentRowEnd: which rows in your sheet = India agents
  // ─────────────────────────────────────────────────────────────────────
  googleSheets: {
    sheetId:            "",           // ← PASTE YOUR SHEET ID HERE
    gid:                "0",          // ← PASTE YOUR TAB GID HERE
    agentRowStart:      87,           // India agents start at row 87
    agentRowEnd:        102,          // India agents end at row 102
    autoRefreshMinutes: 5,            // auto-refresh interval (minutes)
  },

  // ─────────────────────────────────────────────────────────────────────
  // 4. PERFORMANCE TARGETS & THRESHOLDS
  //    defaultDailyTarget: default calls/agent shown on load (editable in UI too)
  //    vocHigh / vocLow:   VOC score thresholds for green / red colouring
  //    holdHigh / holdLow: Hold % thresholds (as decimals: 0.15 = 15%)
  //    barColourHigh:      colour when metric is high-performing
  //    barColourMid:       colour when metric is medium
  //    barColourLow:       colour when metric needs attention
  // ─────────────────────────────────────────────────────────────────────
  targets: {
    defaultDailyTarget: 120,
    vocHigh:            0.80,   // VOC ≥ 80% = green
    vocLow:             0.65,   // VOC < 65% = red
    holdLow:            0.15,   // Hold ≤ 15% = green
    holdHigh:           0.30,   // Hold > 30% = red
    barColourHigh:      "#27AE60",
    barColourMid:       "#FF7722",
    barColourLow:       "#E24B4A",
  },

  // ─────────────────────────────────────────────────────────────────────
  // 5. TEAM NAMES
  //    These labels are used in tab headings and filters.
  //    teamA = the team shown by default (India agents, rows 87–102)
  //    teamB = the second team (Qatar)
  // ─────────────────────────────────────────────────────────────────────
  teams: {
    teamA: { name: "India",  sheetLabel: "India"  },
    teamB: { name: "Qatar",  sheetLabel: "Qatar"  },
  },

  // ─────────────────────────────────────────────────────────────────────
  // 6. SECTIONS — show or hide dashboard panels
  //    Set any to false to hide that panel completely.
  // ─────────────────────────────────────────────────────────────────────
  sections: {
    showKPIStrip:       true,
    showStarCard:       true,
    showTargetVsAchiev: true,
    showPerfBars:       true,
    showDonut:          true,
    showContribList:    true,
    showLeaderboard:    true,
  },

  // ─────────────────────────────────────────────────────────────────────
  // 7. LEADERBOARD COLUMNS
  //    Set any to false to hide that column from the table.
  // ─────────────────────────────────────────────────────────────────────
  columns: {
    showCalls:    true,
    showVOC:      true,
    showHold:     true,
    showAHT:      true,
    showSurveys:  true,
    showShare:    true,
    showTarget:   true,
    showStatus:   true,
  },

  // ─────────────────────────────────────────────────────────────────────
  // 8. STAR CONTRIBUTOR SCORING WEIGHTS
  //    The star card picks the top agent by composite score.
  //    Weights must add up to 100.
  //    Increase a weight to make that metric matter more.
  // ─────────────────────────────────────────────────────────────────────
  starWeights: {
    voc:      40,   // VOC satisfaction score
    calls:    30,   // answered calls volume
    hold:     15,   // low hold rate (inverted — lower hold = better)
    surveys:  15,   // survey count
  },

  // ─────────────────────────────────────────────────────────────────────
  // 9. FALLBACK DATA
  //    Used when Google Sheets is not yet connected or unreachable.
  //    This is your current dataset from the uploaded spreadsheet.
  //    You can update these values manually any time,
  //    or leave them as-is once your Sheet is connected (live data takes over).
  // ─────────────────────────────────────────────────────────────────────
  fallbackIndia: [
    { id: 4895, name: "Ankit Joshi",      surveys: 0,  voc: null,   answered: 0,   holdPct: 0.0000, aht: null   },
    { id: 4887, name: "Aryan Pandey",     surveys: 6,  voc: 0.8333, answered: 121, holdPct: 0.2149, aht: 515.0  },
    { id: 4883, name: "Nisha Kumari",     surveys: 0,  voc: null,   answered: 0,   holdPct: 0.0000, aht: null   },
    { id: 4960, name: "Yash Songara",     surveys: 4,  voc: 0.7500, answered: 102, holdPct: 0.2843, aht: 571.6  },
    { id: 4975, name: "Vikash Sharma",    surveys: 6,  voc: 0.5000, answered: 158, holdPct: 0.1013, aht: 447.0  },
    { id: 4966, name: "Pooja Sharma",     surveys: 5,  voc: 0.6000, answered: 128, holdPct: 0.3672, aht: 500.3  },
    { id: 4972, name: "Shaikh Amin",      surveys: 10, voc: 0.8000, answered: 105, holdPct: 0.1524, aht: 610.2  },
    { id: 4957, name: "Domnic Lakra",     surveys: 5,  voc: 0.8000, answered: 125, holdPct: 0.1920, aht: 626.7  },
    { id: 4968, name: "Akshay Chaudhary", surveys: 0,  voc: null,   answered: 59,  holdPct: 0.2881, aht: 439.0  },
    { id: 4969, name: "Kirtika",          surveys: 2,  voc: 0.5000, answered: 133, holdPct: 0.2406, aht: 460.5  },
    { id: 4974, name: "Hani Jaiswal",     surveys: 10, voc: 0.8000, answered: 153, holdPct: 0.2614, aht: 466.6  },
    { id: 4958, name: "Sonali Gautam",    surveys: 8,  voc: 0.7500, answered: 116, holdPct: 0.4397, aht: 573.9  },
    { id: 4967, name: "Shivam Pandey",    surveys: 5,  voc: 0.8000, answered: 122, holdPct: 0.5984, aht: 490.2  },
    { id: 4964, name: "Qumar Jahan",      surveys: 4,  voc: 0.7500, answered: 137, holdPct: 0.2044, aht: 467.2  },
    { id: 4768, name: "Dikshant Joshi",   surveys: 8,  voc: 0.8750, answered: 140, holdPct: 0.1286, aht: 454.2  },
  ],

  fallbackQatar: [
    { id: 9469, name: "Mohamed Minam Anees Hasan Dhinda",       surveys: 15, voc: 0.8667, answered: 380, holdPct: 0.0632, aht: 291.0 },
    { id: 4331, name: "Imad El Idrissy",                        surveys: 1,  voc: 0.0000, answered: 148, holdPct: 0.2635, aht: 426.6 },
    { id: 4398, name: "Matthew Gilbert Arcega Taylor",           surveys: 14, voc: 0.7143, answered: 247, holdPct: 0.1012, aht: 365.5 },
    { id: 4875, name: "Muhammad Awais Afzal",                   surveys: 24, voc: 0.9167, answered: 328, holdPct: 0.1067, aht: 289.9 },
    { id: 7329, name: "Mohammed Muzafeer",                      surveys: 8,  voc: 0.7500, answered: 257, holdPct: 0.0350, aht: 257.4 },
    { id: 8438, name: "Sapna Chaurasia",                        surveys: 10, voc: 0.9000, answered: 346, holdPct: 0.0000, aht: 234.2 },
    { id: 9788, name: "Mohammad Sadiq Zahidullah Khan",          surveys: 20, voc: 0.9000, answered: 429, holdPct: 0.0490, aht: 239.7 },
    { id: 7336, name: "Umar Saleem Abbasi",                     surveys: 6,  voc: 0.6667, answered: 495, holdPct: 0.0747, aht: 260.0 },
    { id: 9492, name: "Hafiz Muhammad Arslan Abdul Rashid",      surveys: 11, voc: 0.4545, answered: 448, holdPct: 0.0424, aht: 247.1 },
    { id: 4036, name: "Huda Mohammed Bashir",                   surveys: 18, voc: 0.8333, answered: 391, holdPct: 0.1202, aht: 279.6 },
    { id: 4435, name: "Tabrez Akhtar Mansoor Ahmad Ansari",     surveys: 15, voc: 1.0000, answered: 389, holdPct: 0.0231, aht: 244.3 },
    { id: 7318, name: "Usman Ali Anjum",                        surveys: 19, voc: 0.8421, answered: 380, holdPct: 0.0000, aht: 257.8 },
    { id: 9791, name: "Hajera Sultana",                         surveys: 16, voc: 0.6875, answered: 380, holdPct: 0.0132, aht: 349.4 },
    { id: 4174, name: "Muhammad Arslan Muhammad Asif Shah",     surveys: 18, voc: 0.8889, answered: 369, holdPct: 0.0461, aht: 233.7 },
    { id: 4723, name: "Shamsaldeen Mohammed Hassan Mohammed",   surveys: 13, voc: 0.7692, answered: 355, holdPct: 0.0704, aht: 356.0 },
  ],

}; // ← DO NOT DELETE THIS LINE
