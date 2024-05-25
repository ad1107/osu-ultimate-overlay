// made by ad1107

let socket = new ReconnectingWebSocket("ws://localhost:24050/ws");
socket.onopen = () => {
  console.log("WebSocket Server Connected!");
};
socket.onclose = (event) => {
  console.log("Socket Closed Connection: ", event);
  socket.send("Client Closed!");
};
socket.onerror = (error) => console.log("Socket Error: ", error);

let contents = {};

fetch("./setting/setting.json")
  .then((response) => response.json())
  .then((json) => Object.assign(contents, json));

let info_section = document.getElementById("info_section");
let style = document.getElementById("style");
let left_box = document.getElementById("left_box");
let right_box = document.getElementById("right_box");

let A1_text = document.getElementById("A1_text");
let A1_number = document.getElementById("A1_number");
let A2_text = document.getElementById("A2_text");
let A2_number = document.getElementById("A2_number");
let B1_text = document.getElementById("B1_text");
let B1_number = document.getElementById("B1_number");
let B2_text = document.getElementById("B2_text");
let B2_number = document.getElementById("B2_number");
let C1_text = document.getElementById("C1_text");
let C1_number = document.getElementById("C1_number");
let C2_text = document.getElementById("C2_text");
let C2_number = document.getElementById("C2_number");
let D1_text = document.getElementById("D1_text");
let D1_number = document.getElementById("D1_number");
let D2_text = document.getElementById("D2_text");
let D2_number = document.getElementById("D2_number");

let title = document.getElementById("title");
let title_mask = document.getElementById("title_mask");
let artist = document.getElementById("artist");
let artist_mask = document.getElementById("artist_mask");
let diff = document.getElementById("diff");
let diff_mask = document.getElementById("diff_mask");

let stateinfo = document.getElementById("stateinfo");

let Z1_text = document.getElementById("Z1_text");
let Z2_text = document.getElementById("Z2_text");
let Z3_text = document.getElementById("Z3_text");
let Z4_text = document.getElementById("Z4_text");
let Z5_text = document.getElementById("Z5_text");
let Z6_text = document.getElementById("Z6_text");

let Z1_shadow = document.getElementById("Z1_shadow");
let Z2_shadow = document.getElementById("Z2_shadow");
let Z3_shadow = document.getElementById("Z3_shadow");
let Z4_shadow = document.getElementById("Z4_shadow");
let Z5_shadow = document.getElementById("Z5_shadow");
let Z6_shadow = document.getElementById("Z6_shadow");

let Z1 = document.getElementById("Z1");
let Z2 = document.getElementById("Z2");
let Z3 = document.getElementById("Z3");
let Z4 = document.getElementById("Z4");
let Z5 = document.getElementById("Z5");
let Z6 = document.getElementById("Z6");

let CS_text = document.getElementById("CS_text");
let AR_text = document.getElementById("AR_text");
let OD_text = document.getElementById("OD_text");
let HP_text = document.getElementById("HP_text");

let CS_shadow = document.getElementById("CS_shadow");
let AR_shadow = document.getElementById("AR_shadow");
let OD_shadow = document.getElementById("OD_shadow");
let HP_shadow = document.getElementById("HP_shadow");

let CS = document.getElementById("CS");
let AR = document.getElementById("AR");
let OD = document.getElementById("OD");
let HP = document.getElementById("HP");

let ur = document.getElementById("ur");

let bar_X1 = document.getElementById("bar_X1");
let bar_X2 = document.getElementById("bar_X2");
let bar_X3 = document.getElementById("bar_X3");
let bar_X4 = document.getElementById("bar_X4");
let bar_X5 = document.getElementById("bar_X5");
let bar_X6 = document.getElementById("bar_X6");

/* Middle bar info:
  MANIA     ||  STANDARD:
  X1: 320         max combo
  X2: 300         300
  X3: 200         100
  X4: 100         sliderbreak
  X5: 50          50
  X6: MISS        MISS
*/

let t_A1, t_A2, t_B1, t_B2, t_C1, t_C2, t_D1, t_D2;

let t_title, t_artist, t_diff, t_mods;

let t_Z1, t_Z2, t_Z3, t_Z4, t_Z5, t_Z6;

let t_CS, t_AR, t_OD, t_HP;

function fade(s, index, hit_value) {
  if ((s.opacity -= 0.05) < 0) {
    s.opacity = 0;
  } else {
    if (index !== hit_value) {
      s.opacity = 1;
    } else {
      setTimeout(fade, 80);
    }
  }
}

function setting() {
  if (contents.transparent == "on") {
    info_section.style.backgroundColor = "transparent";
  } else if (contents.transparent == "off") {
    info_section.style.backgroundColor = "rgba( 26, 26, 26, 0.8 )";
  }
  document.body.style.backgroundColor = contents.background_color;
}

function mstommss(ms) {
  var isNeg = ms < 0;
  if (isNeg) ms = Math.abs(ms);
  var sec = Math.floor(ms / 1000);
  var min = Math.floor(sec / 60);
  sec = sec % 60;
  var res =
    (isNeg ? "-" : "") +
    (min < 10 ? "0" : "") +
    min +
    ":" +
    (sec < 10 ? "0" : "") +
    sec;
  return res;
}

let tH320, tH300, tH200, tH100, tH50, tMiss;
function set_hitcount_bar_mania(total) {
  let tempH300 = Math.floor((tH300 / total) * 586);
  let tempH200 = Math.floor((tH200 / total) * 586);
  let tempH100 = Math.floor((tH100 / total) * 586);
  let tempH50 = Math.floor((tH50 / total) * 586);
  let tempMiss = Math.floor((tMiss / total) * 586);
  let tempH320 = 586 - tempH300 - tempH200 - tempH100 - tempH50 - tempMiss;

  bar_X1.style.width = tempH320 + "px";
  bar_X2.style.width = tempH300 + "px";
  bar_X3.style.width = tempH200 + "px";
  bar_X4.style.width = tempH100 + "px";
  bar_X5.style.width = tempH50 + "px";
  bar_X6.style.width = tempMiss + "px";
}

function set_hitcount_bar(total) {
  let tempH100 = Math.floor((tH100 / total) * 586);
  let tempH50 = Math.floor((tH50 / total) * 586);
  let tempMiss = Math.floor((tMiss / total) * 586);
  let tempH300 = 586 - tempH100 - tempH50 - tempMiss;

  bar_X2.style.width = tempH300 + "px";
  bar_X3.style.width = tempH100 + "px";
  bar_X5.style.width = tempH50 + "px";
  bar_X6.style.width = tempMiss + "px";
}

const modsImgs = {
  nm: "./mods/selection-mod-nomod.png",
  ez: "./mods/selection-mod-easy.png",
  nf: "./mods/selection-mod-nofail.png",
  ht: "./mods/selection-mod-halftime.png",
  hr: "./mods/selection-mod-hardrock.png",
  sd: "./mods/selection-mod-suddendeath.png",
  pf: "./mods/selection-mod-perfect.png",
  dt: "./mods/selection-mod-doubletime.png",
  nc: "./mods/selection-mod-nightcore.png",
  hd: "./mods/selection-mod-hidden.png",
  fl: "./mods/selection-mod-flashlight.png",
  rx: "./mods/selection-mod-relax.png",
  ap: "./mods/selection-mod-relax2.png",
  so: "./mods/selection-mod-spunout.png",
  at: "./mods/selection-mod-autoplay.png",
  cn: "./mods/selection-mod-cinema.png",
  v2: "./mods/selection-mod-scorev2.png",
  tp: "./mods/selection-mod-target.png",
  fi: "./mods/selection-mod-fadein.png",
  "1k": "./mods/selection-mod-key1.png",
  "2k": "./mods/selection-mod-key2.png",
  "3k": "./mods/selection-mod-key3.png",
  "4k": "./mods/selection-mod-key4.png",
  "5k": "./mods/selection-mod-key5.png",
  "6k": "./mods/selection-mod-key6.png",
  "7k": "./mods/selection-mod-key7.png",
  "8k": "./mods/selection-mod-key8.png",
  "9k": "./mods/selection-mod-key9.png",
  mr: "./mods/selection-mod-mirror.png",
  co: "./mods/selection-mod-keycoop.png",
  rd: "./mods/selection-mod-random.png",
};

setTimeout(function () {
  setting();
  socket.onmessage = (event) => {
    try {
      let data = JSON.parse(event.data);
      let menu = data.menu;
      let gameplay = data.gameplay;
      let gameMode = gameplay.gameMode;
      let state = menu.state;

      const states = {
        "-1": "Inactive",
        0: "Main Menu",
        1: "Editor",
        2: "Playing",
        3: "Shutting Down",
        4: "Editor - Song Select",
        5: "Song Select",
        6: "Unknown",
        7: "Results Screen",
        10: "Starting Up",
        11: "Multiplayer Lobby",
        12: "Multiplayer",
        13: "Multiplayer - Song Select",
        14: "Multiplayer - Results Screen",
        15: "osu!direct",
        17: "Ranking Tag Coop",
        18: "Ranking Team",
        19: "Processing Beatmaps",
        22: "Tourney",
      };

      api = contents.api_key;
      uid = contents.uid;

      if (contents.autofade == "on") {
        if (state == 2 || state == 7) {
          document.body.style.opacity = 1;
          info_section.style.opacity = 1;
        }
        if (state !== 2 && state !== 7) {
          document.body.style.opacity = 0;
          info_section.style.opacity = 0;
        }
      } else {
        setTimeout(function () {
          document.body.style.opacity = 1;
          info_section.style.opacity = 1;
        }, 1500);
      }

      if (
        t_title !==
        menu.bm.metadata.artist + " - " + menu.bm.metadata.title
      ) {
        t_title = menu.bm.metadata.title;
        title.innerHTML = t_title;
        title.style.width = "max-content";
        let titleWidth = title.offsetWidth;
        if (titleWidth >= 586) {
          title.classList.add("over");
        } else {
          title.style.width = "586px";
          title.classList.remove("over");
        }
      }

      if (t_artist !== menu.bm.metadata.mapper) {
        t_artist = menu.bm.metadata.artist + " // " + menu.bm.metadata.mapper;
        artist.innerHTML = t_artist;
        artist.style.width = "max-content";
        let artistWidth = artist.offsetWidth;
        if (artistWidth >= 586) {
          artist.classList.add("over");
        } else {
          artist.style.width = "586px";
          artist.classList.remove("over");
        }
      }

      t_diff = "[" + menu.bm.metadata.difficulty + "]";
      diff.innerHTML = t_diff;
      diff.style.width = "max-content";
      let diffWidth = diff.offsetWidth;
      if (diffWidth >= 586) {
        diff.classList.add("over");
      } else {
        diff.style.width = "586px";
        diff.classList.remove("over");
      }

      A1_text.innerHTML = "STAR RATING";
      if (t_A1 !== menu.bm.stats.fullSR) {
        t_A1 = menu.bm.stats.fullSR;
        A1_number.innerHTML = t_A1.toFixed(2);
      }

      A2_text.innerHTML = "ACCURACY";
      if (t_A2 !== gameplay.accuracy) {
        t_A2 = gameplay.accuracy;
        A2_number.innerHTML = t_A2.toFixed(2) + "%";
      }

      B1_text.innerHTML = "PP";
      if (state != 2 && state != 7) {
        B1_text.innerHTML = "MAX PP";
        t_B1 = menu.pp[100];
      } else {
        B1_text.innerHTML = "PP";
        t_B1 = gameplay.pp.current;
      }
      B1_number.innerHTML = t_B1;

      B2_text.innerHTML = "UNSTABLE RATE";
      if (t_B2 !== gameplay.hits.unstableRate) {
        t_B2 = gameplay.hits.unstableRate;
        B2_number.innerHTML = t_B2.toFixed(2);
      }

      C1_text.innerHTML = "BPM";
      minbpm = menu.bm.stats.BPM.min;
      maxbpm = menu.bm.stats.BPM.max;
      if (gameMode == 0 || gameMode == 1) {
        if (minbpm == maxbpm) {
          t_C1 = minbpm;
        } else {
          t_C1 = minbpm + " - " + maxbpm;
        }
      } else {
        t_C1 = "-";
      }
      C1_number.innerHTML = t_C1;

      C2_text.innerHTML = "GAMEMODE";

      if (state == 2 || state == 7) {
        if (gameMode == 0) C2_number.innerHTML = "STANDARD";
        else if (gameMode == 1) C2_number.innerHTML = "TAIKO";
        else if (gameMode == 2) C2_number.innerHTML = "CATCH";
        else if (gameMode == 3) C2_number.innerHTML = "MANIA";
      } else C2_number.innerHTML = "-";

      D1_text.innerHTML = "RATIO";
      if (state == 2 || state == 7) {
        curTotalNote = 0;
        if (gameMode != 3) {
          if (
            curTotalNote !==
            gameplay.hits[300] +
              gameplay.hits[100] +
              gameplay.hits[50] +
              gameplay.hits[0]
          ) {
            curTotalNote =
              gameplay.hits[300] +
              gameplay.hits[100] +
              gameplay.hits[50] +
              gameplay.hits[0];
            let k;
            if (curTotalNote == 0) {
              D1_number.innerHTML = "NaN:1";
            } else if (curTotalNote - gameplay.hits[300] != 0) {
              k = gameplay.hits[300] / (curTotalNote - gameplay.hits[300]);
              D1_number.innerHTML = k.toFixed(2) + ":1";
            } else {
              D1_number.innerHTML = "inf:1";
            }
          }
        } else if (gameMode == 3) {
          if (
            curTotalNote !==
            gameplay.hits.geki +
              gameplay.hits[300] +
              gameplay.hits.katu +
              gameplay.hits[100] +
              gameplay.hits[50] +
              gameplay.hits[0]
          ) {
            curTotalNote =
              gameplay.hits.geki +
              gameplay.hits[300] +
              gameplay.hits.katu +
              gameplay.hits[100] +
              gameplay.hits[50] +
              gameplay.hits[0];
            let k;
            if (curTotalNote == 0) {
              D1_number.innerHTML = "NaN:1";
            } else if (curTotalNote - gameplay.hits.geki != 0) {
              k = gameplay.hits.geki / (curTotalNote - gameplay.hits.geki);
              D1_number.innerHTML = k.toFixed(2) + ":1";
            } else {
              D1_number.innerHTML = "inf:1";
            }
          }
        }
      } else D1_number.innerHTML = "-";

      D2_text.innerHTML = "TIME";
      timemp3 = mstommss(menu.bm.time.mp3 - menu.bm.time.firstObj);
      timefull = mstommss(menu.bm.time.full - menu.bm.time.firstObj);
      timecurrent = mstommss(menu.bm.time.current);
      timeelapsed = mstommss(menu.bm.time.current - menu.bm.time.firstObj);
      if (state == 0 || state == 2 || state == 7) {
        if (menu.bm.time.mp3 != 0) t_D2 = timeelapsed + " / " + timemp3;
        else if (menu.bm.time.full != 0) t_D2 = timeelapsed + " / " + timefull;
        else t_D2 = timeelapsed;
      } else {
        if (menu.bm.time.mp3 != 0) t_D2 = timemp3;
        else if (menu.bm.time.full != 0) t_D2 = timefull;
        else t_D2 = "-";
      }
      D2_number.innerHTML = t_D2;

      if (t_CS !== menu.bm.stats.CS) {
        if (menu.bm.stats.CS != 0) t_CS = menu.bm.stats.CS;
        else t_CS = menu.bm.stats.memoryCS;
        CS.innerHTML = t_CS;
        var s = CS_shadow.style;
        s.opacity = 1;
      }
      if (t_AR !== menu.bm.stats.AR) {
        if (menu.bm.stats.AR != 0) t_AR = menu.bm.stats.AR;
        else t_AR = menu.bm.stats.memoryAR;
        AR.innerHTML = t_AR;
        var s = AR_shadow.style;
        s.opacity = 1;
      }

      if (t_OD !== menu.bm.stats.OD) {
        if (menu.bm.stats.OD != 0) t_OD = menu.bm.stats.OD;
        else t_OD = menu.bm.stats.memoryOD;
        OD.innerHTML = t_OD;
        var s = OD_shadow.style;
        s.opacity = 1;
      }

      if (t_HP !== menu.bm.stats.HP) {
        if (menu.bm.stats.HP != 0) t_HP = menu.bm.stats.HP;
        else t_HP = menu.bm.stats.memoryHP;
        HP.innerHTML = t_HP;
        var s = HP_shadow.style;
        s.opacity = 1;
      }
      if (CS_shadow.style.opacity > 0) {
        setTimeout(function () {
          CS_shadow.style.opacity -= 0.05;
        }, 80);
      }

      if (AR_shadow.style.opacity > 0) {
        setTimeout(function () {
          AR_shadow.style.opacity -= 0.05;
        }, 80);
      }

      if (OD_shadow.style.opacity > 0) {
        setTimeout(function () {
          OD_shadow.style.opacity -= 0.05;
        }, 80);
      }

      if (HP_shadow.style.opacity > 0) {
        setTimeout(function () {
          HP_shadow.style.opacity -= 0.05;
        }, 80);
      }

      if (gameMode == 3) {
        let tTotal = 0;
        if (state !== menu.state) {
          state = menu.state;
          bar_X1.style.width = "0px";
          bar_X2.style.width = "0px";
          bar_X3.style.width = "0px";
          bar_X4.style.width = "0px";
          bar_X5.style.width = "0px";
          bar_X6.style.width = "0px";
        }

        if (
          tTotal !==
          gameplay.hits.geki +
            gameplay.hits[300] +
            gameplay.hits.katu +
            gameplay.hits[100] +
            gameplay.hits[50] +
            gameplay.hits[0]
        ) {
          tTotal =
            gameplay.hits.geki +
            gameplay.hits[300] +
            gameplay.hits.katu +
            gameplay.hits[100] +
            gameplay.hits[50] +
            gameplay.hits[0];
        }

        if (tH320 !== gameplay.hits.geki) {
          tH320 = gameplay.hits.geki;
          if (tTotal != 0) {
            set_hitcount_bar_mania(tTotal);
          }
        }
        if (tH300 !== gameplay.hits[300]) {
          tH300 = gameplay.hits[300];
          if (tTotal != 0) {
            set_hitcount_bar_mania(tTotal);
          }
        }
        if (tH200 !== gameplay.hits.katu) {
          tH200 = gameplay.hits.katu;
          if (tTotal != 0) {
            set_hitcount_bar_mania(tTotal);
          }
        }
        if (tH100 !== gameplay.hits[100]) {
          tH100 = gameplay.hits[100];
          if (tTotal != 0) {
            set_hitcount_bar_mania(tTotal);
          }
        }
        if (tH50 !== gameplay.hits[50]) {
          tH50 = gameplay.hits[50];
          if (tTotal != 0) {
            set_hitcount_bar_mania(tTotal);
          }
        }
        if (tMiss !== gameplay.hits[0]) {
          tMiss = gameplay.hits[0];
          if (tTotal != 0) {
            set_hitcount_bar_mania(tTotal);
          }
        }
      } else {
        let tTotal = 0;
        if (state !== menu.state) {
          state = menu.state;
          bar_X1.style.width = "0px";
          bar_X2.style.width = "0px";
          bar_X3.style.width = "0px";
          bar_X4.style.width = "0px";
          bar_X5.style.width = "0px";
          bar_X6.style.width = "0px";
        }

        if (
          tTotal !==
          gameplay.hits[300] +
            gameplay.hits[100] +
            gameplay.hits[50] +
            gameplay.hits[0]
        ) {
          tTotal =
            gameplay.hits[300] +
            gameplay.hits[100] +
            gameplay.hits[50] +
            gameplay.hits[0];
        }

        if (tH300 !== gameplay.hits[300]) {
          tH300 = gameplay.hits[300];
          if (tTotal != 0) {
            set_hitcount_bar(tTotal);
          }
        }
        if (tH100 !== gameplay.hits[100]) {
          tH100 = gameplay.hits[100];
          if (tTotal != 0) {
            set_hitcount_bar(tTotal);
          }
        }
        if (tH50 !== gameplay.hits[50]) {
          tH50 = gameplay.hits[50];
          if (tTotal != 0) {
            set_hitcount_bar(tTotal);
          }
        }
        if (tMiss !== gameplay.hits[0]) {
          tMiss = gameplay.hits[0];
          if (tTotal != 0) {
            set_hitcount_bar(tTotal);
          }
        }
      }

      if (
        (state != 2 && state != 7) ||
        gameplay.hits.geki +
          gameplay.hits[300] +
          gameplay.hits.katu +
          gameplay.hits[100] +
          gameplay.hits[50] +
          gameplay.hits[0] ==
          0
      ) {
        bar_X1.style.width = "0px";
        bar_X2.style.width = "0px";
        bar_X3.style.width = "0px";
        bar_X4.style.width = "0px";
        bar_X5.style.width = "0px";
        bar_X6.style.width = "0px";
      }

      const stateName = states[state];
      if (stateName) {
        stateinfo.innerHTML = stateName;
      } else {
        stateinfo.innerHTML = "Unknown state";
      }

      if (gameMode == 0) {
        Z1_text.innerHTML = "combo";
        Z1_shadow.innerHTML = "combo";
        Z2_text.innerHTML = "300";
        Z2_shadow.innerHTML = "300";
        Z3_text.innerHTML = "100";
        Z3_shadow.innerHTML = "100";
        Z4_text.innerHTML = "sliderbreak";
        Z4_shadow.innerHTML = "sliderbreak";
        Z5_text.innerHTML = "50";
        Z5_shadow.innerHTML = "50";
        Z6_text.innerHTML = "miss";
        Z6_shadow.innerHTML = "miss";

        if (t_Z1 !== gameplay.combo.max) {
          t_Z1 = gameplay.combo.max;
          Z1.innerHTML = t_Z1;
          var s = Z1_shadow.style;
          s.opacity = 1;
        }

        if (t_Z2 !== gameplay.hits[300]) {
          t_Z2 = gameplay.hits[300];
          Z2.innerHTML = t_Z2;
          var s = Z2_shadow.style;
          s.opacity = 1;
        }
        if (t_Z3 !== gameplay.hits[100]) {
          t_Z3 = gameplay.hits[100];
          Z3.innerHTML = t_Z3;
          var s = Z3_shadow.style;
          s.opacity = 1;
        }

        if (t_Z4 !== gameplay.hits.sliderBreaks) {
          t_Z4 = gameplay.hits.sliderBreaks;
          Z4.innerHTML = t_Z4;
          var s = Z4_shadow.style;
          s.opacity = 1;
        }

        if (t_Z5 !== gameplay.hits[50]) {
          t_Z5 = gameplay.hits[50];
          Z5.innerHTML = t_Z5;
          var s = Z5_shadow.style;
          s.opacity = 1;
        }
        if (t_Z6 !== gameplay.hits[0]) {
          t_Z6 = gameplay.hits[0];
          Z6.innerHTML = t_Z6;
          var s = Z6_shadow.style;
          s.opacity = 1;
        }
      } else {
        Z1_text.innerHTML = "320";
        Z1_shadow.innerHTML = "320";
        Z2_text.innerHTML = "300";
        Z2_shadow.innerHTML = "300";
        Z3_text.innerHTML = "200";
        Z3_shadow.innerHTML = "200";
        Z4_text.innerHTML = "100";
        Z4_shadow.innerHTML = "100";
        Z5_text.innerHTML = "50";
        Z5_shadow.innerHTML = "50";
        Z6_text.innerHTML = "miss";
        Z6_shadow.innerHTML = "miss";

        if (t_Z1 !== gameplay.hits.geki) {
          t_Z1 = gameplay.hits.geki;
          Z1.innerHTML = t_Z1;
          var s = Z1_shadow.style;
          s.opacity = 1;
        }
        if (t_Z2 !== gameplay.hits[300]) {
          t_Z2 = gameplay.hits[300];
          Z2.innerHTML = t_Z2;
          var s = Z2_shadow.style;
          s.opacity = 1;
        }
        if (t_Z3 !== gameplay.hits.katu) {
          t_Z3 = gameplay.hits.katu;
          Z3.innerHTML = t_Z3;
          var s = Z3_shadow.style;
          s.opacity = 1;
        }
        if (t_Z4 !== gameplay.hits[100]) {
          t_Z4 = gameplay.hits[100];
          Z4.innerHTML = t_Z4;
          var s = Z4_shadow.style;
          s.opacity = 1;
        }
        if (t_Z5 !== gameplay.hits[50]) {
          t_Z5 = gameplay.hits[50];
          Z5.innerHTML = t_Z5;
          var s = Z5_shadow.style;
          s.opacity = 1;
        }
        if (t_Z6 !== gameplay.hits[0]) {
          t_Z6 = gameplay.hits[0];
          Z6.innerHTML = t_Z6;
          var s = Z6_shadow.style;
          s.opacity = 1;
        }
      }

      if (Z1_shadow.style.opacity > 0) {
        setTimeout(function () {
          Z1_shadow.style.opacity -= 0.05;
        }, 80);
      }
      if (Z2_shadow.style.opacity > 0) {
        setTimeout(function () {
          Z2_shadow.style.opacity -= 0.05;
        }, 80);
      }
      if (Z3_shadow.style.opacity > 0) {
        setTimeout(function () {
          Z3_shadow.style.opacity -= 0.05;
        }, 80);
      }
      if (Z4_shadow.style.opacity > 0) {
        setTimeout(function () {
          Z4_shadow.style.opacity -= 0.05;
        }, 80);
      }
      if (Z5_shadow.style.opacity > 0) {
        setTimeout(function () {
          Z5_shadow.style.opacity -= 0.05;
        }, 80);
      }
      if (Z6_shadow.style.opacity > 0) {
        setTimeout(function () {
          Z6_shadow.style.opacity -= 0.05;
        }, 80);
      }

      if (t_mods != data.menu.mods.str) {
        t_mods = data.menu.mods.str;
        if (t_mods == "") {
          t_mods = "NM";
        }
        mods.innerHTML = "";
        let modsApplied = t_mods.toLowerCase();

        if (modsApplied.indexOf("nc") != -1) {
          modsApplied = modsApplied.replace("dt", "");
        }
        if (modsApplied.indexOf("pf") != -1) {
          modsApplied = modsApplied.replace("sd", "");
        }
        let modsArr = modsApplied.match(/.{1,2}/g);
        for (let i = 0; i < modsArr.length; i++) {
          let mod = document.createElement("div");
          mod.setAttribute("class", "mod");
          let modImg = document.createElement("img");
          modImg.setAttribute("src", modsImgs[modsArr[i]]);
          mod.appendChild(modImg);
          mods.appendChild(mod);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
}, 100);
