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

  grades: [
    "aftermarket california only","low grade foreign","low foreign pre",
    "medium foreign","small foreign","large foreign","foreign pre",
    "jumbo pellets","small cast","large cast","xl foreign","high reg",
    "high pre","low reg","low pre","mid reg","mid pre","junk pre","pellets"
  ],

  noTerms: [
    "4 dot",
    "cheesegrater"
    // ,"focus", "elbow", "crimp", ...
  ]

};
