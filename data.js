/* ============================================================
   Voice Grade — DATA FILE
   This is the ONLY file you edit to add/change lists.
   The app (index.html) reads everything from here.
   After editing, just re-upload this file. No app changes needed.
   ============================================================ */

window.VG_DATA = {

  /* ---- Brand codes: spoken brand -> 3-letter code for NO# numbers ----
     e.g. "nissan 45" -> NIS045                                          */
  brandCodes: {
    "bmw":"BMW","chrysler":"CHR","diesel":"DIE","ford":"FRD",
    "gm":"GEM","general motors":"GEM","honda":"HON","hyundai":"HYU",
    "isuzu":"ISU","jaguar":"JAG","mazda":"MAZ","mercedes":"MER",
    "mercedes benz":"MER","mitsubishi":"MIT","nissan":"NIS","subaru":"SUB",
    "suzuki":"SUZ","toyota":"TOY","volkswagen":"VLK","vw":"VLK","volvo":"VOL"
  },

  /* ---- Grades: say any of these to pull up the grade card ---- */
  grades: [
    "aftermarket california only","low grade foreign","low foreign pre",
    "medium foreign","small foreign","large foreign","foreign pre",
    "jumbo pellets","small cast","large cast","xl foreign","high reg",
    "high pre","low reg","low pre","mid reg","mid pre","junk pre","pellets"
  ],

  /* ---- Built-in corrections: fix recurring mishears for EVERY device ----
     "from" is what the speech engine tends to hear; "to" is what you meant.
     These ship to every device (unlike the in-app Corrections list, which is
     per-device). Add recurring ones here as we find them.                    */
  corrections: [
    { from: "prix", to: "pre" },
    { from: "greg", to: "reg" },
    { from: "grainger", to: "ranger" },
    { from: "granger", to: "ranger" },
    { from: "logo", to: "lobo" },
    { from: "winstar", to: "windstar" },
    { from: "youtube", to: "airtube" },
    { from: "crown vic", to: "cv" },
    { from: "crown victoria", to: "cv" },
    { from: "cramps", to: "crimps" },
    { from: "lines", to: "line" },
    { from: "lions", to: "line" },
    { from: "tea bags", to: "t back" },
    { from: "tea back", to: "t back" },
    { from: "tea bag", to: "t back" },
    { from: "offset center", to: "offset sensor" },
    { from: "half", to: "1/2" },
    { from: "4 table", to: "4 tab" }
  ],

  /* ---- NO# search terms ----
     Say one of these and it goes to the No Number tab's search box, spelled
     exactly as written here. Homophones are folded automatically, so "4 dot"
     also matches when heard as "four dot" / "for dot" / "fore dot".

     Simplest form is just the term string, spelled the way your database has it:
        "4 dot",
        "cheesegrater",
        "focus",
     If a term is commonly heard as something the homophone folding won't catch,
     add spoken variants with the object form:
        { term: "cheesegrater", say: ["cheese grater"] },

     >>> THIS is the list to send me — your NO# descriptions, one per line.
         I'll paste them all in here. <<<                                     */
  noTerms: [
    // ===== FORD =====
    "Old F150", "Rear Ford", "Large Ford", "2 Hole", "3 Hole", "F150",
    "Small LOBO", "Small LOBO (Waffle Shields)", "Body Gap LOBO", "Body Gap LOBO (With O2)",
    "Truck", "3 Pipe", "Long LOBO (1 or 2 Waffle Shields)", "Large LOBO (2 Smooth Shields)",
    "LOBO Waffle Pre", "Grenade", "LOBO 1 Line Pre", "LOBO 3 Line Pre",
    "Explorer", "Offset Pipes", "Inlet", "F250 Square",
    "New Truck", "Robin", "Batman",
    "Round Truck (Small)", "Round Truck (Large)", "Round Truck (Skinny)",
    "Ranger/Explorer", "Skinny Pipe", "Wide Mouth", "Ranger Pre", "No Code Ranger Pre",
    "Ranger", "Airtube Cigar", "Cigar", "Ranger Rick",
    "Stop Sign (Bolted Shields)", "Old Widemouth", "Old Explorer", "Explorer Square",
    "Stop Sign (Welded Shields)", "Mustang Pre (With or Without O2)", "Vader",
    "Factory 1/2", "Factory 3/4", "Explorer Pre", "Explorer Big Cell",
    "Iron Man (Short)", "Iron Man Pre", "3 Window", "Iron Man (Long)", "4 Window",
    "Airtube Torpedo (1 or 2 Tubes)", "Oval Pipe Torpedo", "2 Biscuit Torpedo",
    "2 Biscuit Torpedo (With O2)", "3 Biscuit Torpedo", "Factory 2/3 Full",
    "3 Biscuit Torpedo With O2", "4 Biscuit Torpedo", "New Torpedo", "Nuke",
    "New Torpedo (Long)", "Torpedo Pre",
    "With or Without Manifold", "Fusion Pre", "Long Fusion Pre", "Short Fusion Pre",
    "Flat Fusion (Small Biscuit)", "Flat Fusion (Big Biscuit)", "Flat Fusion (Full)",
    "Fusion (Cast Manifold)", "Fusion (Steel Manifold)",
    "Focus", "Airtube", "Small Mouth S", "Small Mouth L", "With Body Sensor",
    "Focus Cast Manifold", "Focus Steel Manifold", "Focus Lightbulb",
    "Old Spoon", "New Spoon (Hard Flange)", "New Spoon",
    "Escape", "Side or Top Sensor", "Hybrid Escape", "Scorpion",
    "Taurus", "Top Pipe", "Taurus Pre", "No Code Taurus Pre", "Taurus/Flex/Explorer",
    "Transit", "Z Pipe", "Thunderbird", "With or Without Airtube",
    "Windstar", "Freestar", "Slanted Sensor", "Straight Sensor",
    "Continental", "Spaceship", "Continental Pre", "Cougar Wedge", "Stop Sign",
    "Ford 500", "Ford 500 Pre", "No Code Ford 500 Pre", "Focus/Fusion", "Small Z Pipe",
    "Boomerang",
    // --- Ford, added from trial feedback (verify spelling against catalog) ---
    "Lobo", "Mustang", "Mustang Pre", "Mustang Back", "Mustang Front",
    "Aerostar", "Town Car", "Town Car Pre", "CV", "Crown Victoria",
    "Airtube Torpedo", "Lightbulb", "Econoline", "Econoline Pre", "Econoline Long",

    // ===== CHRYSLER =====
    "Fishtail Jeep", "Straightedge Jeep", "Straightsides Jeep", "Long Jeep",
    "7in Crimp", "9in Crimp", "11in Crimp", "Jeep", "Airtube Jeep", "Offset Jeep",
    "Back Pre (No O2)", "Front Pre (With O2)", "Crimp", "Jeep Wrangler", "Jeep Liberty",
    "Nitro", "Jeep Liberty With Crimps", "Jeep Liberty With Bump", "Minnow",
    "10 Line Straightedge", "10 Line SE", "10 Line Straightedge With Flex Pipe", "10 Line SE (With Flange)",
    "10 Line Straightedge With Long Neck", "10 Line SE (Long Neck)",
    "11 Line Straightedge", "11 Line SE", "13 Line Straightedge", "13 Line SE",
    "Caravan", "Smooth Straightedge", "Smooth SE", "5 Line Straightedge", "5 Line SE",
    "Flat 6 Line Straightedge", "6 Line SE (Flat)", "T Back 6 Line Straightedge", "6 Line SE (T Back)",
    "Round 6 Line Straightedge", "6 Line SE (Round)", "With Sensor", "6 Line SE",
    "Small Suitcase", "9in Suitcase", "Suitcase", "11in Suitcase", "Large Suitcase",
    "Small Round Suitcase", "Round Suitcase",
    "3 Pipe Jeep", "Fishtail Ram", "Pacifica Pre", "Skinny Ram", "Fat Ram",
    "Ram", "Ram (Offset Sensor)", "Small Ram (With O2)", "Large Ram",
    "Dakota", "Durango", "Durango (2 O2)", "Short Tube",
    "Loose/Tight Material", "Caliber", "Long Tube", "Loose/Loose Material",
    "Avenger/Pacifica", "Split Manifold", "Sebring", "Slanted Flange", "Sebring Pre",
    "Flat Flange", "Neon", "3 Line Straightedge", "3 Line SE", "Intrepid", "Patriot Pre",
    "Fiat 500", "Saxophone", "Long Fishtail", "With Air Tube", "4 Pipe With Resonator",
    "Alfa Romeo 164S",
    "Patriot", "3 Line Shield", "Dart", "Cherokee", "3 Slot",
    "5 Line Shield", "Compass", "200", "5 Slot", "Promaster Pre",
    "Charger", "Jeep Cherokee", "Old Straightedge", "Straightedge", "4 Tab", "Fiat",

    // ===== DIESEL =====
    "2018-2021 Ford 3.0L V6",
    "Duramax", "Duramax (DPF)", "Duramax (DOC)",
    "1994-1999 6.6L", "2003-2007 6.6L", "2008-2010 6.6L", "2011-2016 6.6L", "2017-2021 6.6L",
    "Cummins", "Cummins (DPF)", "Cummins (DOC)", "Cummins (Wire)",
    "1994-2001 5.9L", "2003-2007 5.9L", "2007-2012 6.7L", "2012-2013 6.7L", "2013-2018 6.7L", "2019-2022 6.7L",
    "Ford", "Ford (DPF)", "Ford (DOC)",
    "1998-2002 7.3L", "2003-2007 7.3L", "2008-2010 6.4L",
    "F750 (DPF)", "F750 (DOC)", "2011-2017 6.7L",
    "Ford 6.7 Grading Sheet", "Ford 6.7 DOC", "Single or Double Shield",
    "Ford 6.7 DOC (With Hanger)", "Ford 6.7L DOC", "2023-2026 6.7L",
    "Ford 6.7 (C&C)", "With or Without Hanger",
    "Isuzu", "Small Can", "Big Can", "Long Can", "Cone",
    "International DPF", "Box Truck",
    "Ceramic Price Only-Check for Foil", "Maxxforce", "School Bus", "International DOC",
    "Small Cummins DPF", "~8-10\" Diameter", "Medium Cummins DPF", "~10-12\" Diameter",
    "Large Cummins DPF", "~13\"+ Diameter",
    "DPF", "2010-2017 Mack/Volvo", "2017-Current Mack/Volvo", "Onebox",
    "DOC", "2010-2024 Cummins 6.7L",
    "2010-2015 Cummins 8.9L DOC", "11in Chamber Height", "4in Inlet Pipe",
    "2010-2018 Cummins 11.9L", "13in Chamber Height", "5in Inlet Pipe",
    "DOC 4", "Cummins DOC", "3in Biscuit", "12in Diameter", "3in Inlet", "Pancake",
    "4in Biscuit", "13.5 in Diameter Biscuit", "4in Inlet",
    "Cummins SIC", "Freightliner Filter", "Detroit Onebox DPF",
    "Freightliner Cat", "Detroit Onebox DOC",
    "2011-2014 Jetta TDI", "Filter", "Cat", "No Value",
    "Volvo One Box", "Look Inside for Big Biscuit",
    "International 7", "2016-2019 Nissan Titan 5.0L",
    "2023-2026 Ford 6.7L Filter Assembly", "Freightliner", "Check All 4 Units for Damage",
    "Detroit One Box Combined", "Thin Flanges", "Skinny Purafilter",
    "Thick Flanges", "Fat Purafilter",

    // ===== GM (earlier examples — kept so "4 dot" still works) =====
    "4 dot", "cheesegrater"
  ]

};
