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

    // ===== DIESEL =====
    "2018-2021 Ford 3.0L V6",

    // ===== GM (earlier examples — kept so "4 dot" still works) =====
    "4 dot", "cheesegrater"
  ]

};
