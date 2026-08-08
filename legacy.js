/* ============================================================
   LEGACY RECORDS
   Seasons your league played BEFORE this Sleeper league existed.
   Sleeper only knows about seasons linked in its own chain, so
   anything older has to be entered once, here, by hand.

   Leave the list empty if your league started in Sleeper.

   "manager" must match the team name shown on the Teams page
   exactly, or the record won't attach to anyone.
   ============================================================ */

window.LEGACY = [

  // {
  //   manager: "Mente13",   // must match the team name on the Teams page
  //   seasons: 4,           // how many seasons these totals cover
  //   wins: 31,
  //   losses: 25,
  //   ties: 0,
  //   points: 6820.44,      // total points scored across those seasons
  //   titles: 1
  // },

];


/* ============================================================
   MERGED ACCOUNTS
   If a manager left and rejoined the league, Sleeper gave them a
   NEW account ID, and the site will treat them as two people.

   The Diagnostics page (/debug) flags anyone this affects.
   Map the OLD id to the CURRENT id to stitch them back together.
   ============================================================ */

window.MERGE = {

  // "old_sleeper_user_id": "current_sleeper_user_id",

};
