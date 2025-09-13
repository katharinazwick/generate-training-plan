import {parts} from "./parts.js";

export const database = [
    {
        name: "Einlaufen",
        time: 5,
        description: "400m",
        part: parts[0],
        intensity: 1,
        id: "0a"
    }, {
        name: "Einlaufen",
        time: 10,
        description: "1600m",
        part: parts[0],
        intensity: 4,
        id: "0b"
    }, {
        name: "Einlaufen mit Lauf-ABC",
        time: 10,
        description: "1600m mit Partner/Gruppe, abwechselnd 150m Laufen 50m Übung (ergibt 2 übungen pro 400m)",
        part: parts[0],
        intensity: 5,
        id: "0c"
    }, {
        name: "Lauf-ABC",
        time: 5,
        description: "Anfersen, Kniehebe-, Seitwärts-, Kreuzlauf, Fußgelenksarbeit...",
        part: parts[0],
        intensity: 1,
        id: "0d"
    }, {
        name: "Koordination",
        time: 5,
        description: "Slalom, Sprünge, Hockstrecksprünge",
        part: parts[0],
        intensity: 4,
        id: "0e"
    }, {
        name: "Knotenlauf",
        time: 5,
        description: "800m mit parallel Knoten binden",
        part: parts[0],
        intensity: 2,
        id: "0f"
    }, {
        name: "Seilspringen",
        time: 5,
        description: "400m, vorwärts, rückwärts, auf einem Bein",
        part: parts[0],
        intensity: 2,
        id: "0g"
    }, {
        name: "Rückwärtslauf",
        time: 5,
        description: "400m",
        part: parts[0],
        intensity: 2,
        id: "0h"
    },
    /////////////
    {
        name: "Reaktionssprints",
        time: 5,
        description: "6 * 30m Sprints auf ein spontanes akustisches Signal",
        part: parts[1],
        intensity: 2,
        id: "aa",
        type: "Kurzstrecke"
    }, {
        name: "kurze Sprints",
        time: 10,
        description: "6 * 60m Sprint mit zurück gehen",
        part: parts[1],
        intensity: 2,
        id: "ab",
        type: "Kurzstrecke"
    }, {
        name: "mittlere Sprints",
        time: 10,
        description: "4 * 100m mit zurück gehen",
        part: parts[1],
        intensity: 3,
        id: "ac",
        type: "Kurzstrecke"
    }, {
        name: "lange Sprints",
        time: 15,
        description: "3 * 200m mit locker die Runde auslaufen und Pause",
        part: parts[1],
        intensity: 4,
        id: "ad",
        type: "Kurzstrecke"
    }, {
        name: "lange Sprints",
        time: 15,
        description: "3 * 200m mit locker die Runde auslaufen und Pause",
        part: parts[1],
        intensity: 4,
        id: "ae",
        type: "Kurzstrecke"
    }, {
        name: "Pyramidensprints",
        time: 10,
        description: "400m, 200m, 100m, 200m, 400m",
        part: parts[1],
        intensity: 4,
        id: "af",
        type: "Mittelstrecke"
    }, {
        name: "Pyramidensprints",
        time: 10,
        description: "100m, 200m, 400m, 200m, 100m",
        part: parts[1],
        intensity: 4,
        id: "ag",
        type: "Mittelstrecke"
    }, {
        name: "Steigerungslauf",
        time: 5,
        description: "2 * 400m (davon 200m GA1 (60-70%), 100m GA2 (75-85%), 100m GA3 (85-95%))",
        part: parts[1],
        intensity: 4,
        id: "ah",
        type: "Mittelstrecke"
    }, {
        name: "Verfolgungslauf",
        time: 5,
        description: "400m in Zweierpartner/Gruppe mit Zeitabstand (persönliche Zeit erforderlich)",
        part: parts[1],
        intensity: 3,
        id: "ai",
        type: "Mittelstrecke"
    }, {
        name: "Verfolgungslauf",
        time: 5,
        description: "400m in Zweierpartner/Gruppe mit Streckenabstand (persönliche Zeit erforderlich)",
        part: parts[1],
        intensity: 3,
        id: "aj",
        type: "Mittelstrecke"
    }, {
        name: "Mittelstrecke",
        time: 10,
        description: "800m GA 2 (75-85%)",
        part: parts[1],
        intensity: 5,
        id: "ak",
        type: "Mittelstrecke"
    }, {
        name: "Intervalle",
        time: 10,
        description: "800m Lauf mit 2 * 200m Sprint (Lauf, Sprint, Lauf, Sprint)",
        part: parts[1],
        intensity: 4,
        id: "al",
        type: "Mittelstrecke"
    }, {
        name: "Steigerungslauf",
        time: 10,
        description: "2 * 800m (davon 400m GA1, 200m GA2, 200m GA3)",
        part: parts[1],
        intensity: 4,
        id: "am",
        type: "Mittelstrecke"
    }, {
        name: "Intervalle",
        time: 15,
        description: "1200m Lauf mit 3 * 400m Sprint (Lauf, Sprint, Lauf, Sprint, Lauf, Sprint)",
        part: parts[1],
        intensity: 5,
        id: "an",
        type: "Mittelstrecke"
    }, {
        name: "Lauf",
        time: 15,
        description: "2000m GA 1 (60-70%)",
        part: parts[1],
        intensity: 2,
        id: "ao",
        type: "Langstrecke"
    }, {
        name: "Lauf",
        time: 15,
        description: "2000m GA 2 (75-85%)",
        part: parts[1],
        intensity: 5,
        id: "ap",
        type: "Langstrecke"
    }, {
        name: "Langlauf",
        time: 25,
        description: "4000m GA 1 (60-70%)",
        part: parts[1],
        intensity: 1,
        id: "aq",
        type: "Langstrecke"
    }, {
        name: "Planks",
        time: 10,
        description: "2 * (1min Plank, Liegestütze, 2 * 30sek Seitenplank, 1min Crunsh, 1min Rückwärtsplank, 1min Pause)",
        part: parts[2],
        intensity: 2,
        id: "a0"
    }, {
        name: "Liegestütze",
        time: 5,
        description: "normal, weit, eng, langsam",
        part: parts[2],
        intensity: 5,
        id: "b0"
    }, {
        name: "Bauchzirkel",
        time: 10,
        description: "4 * (Sit-ups, Bicycle-Crunch, Plank, Pause",
        part: parts[2],
        intensity: 5,
        id: "c0"
    }, {
        name: "Beinkraft",
        time: 5,
        description: "(3 * (20 Kniebeuge, 15 Ausfallschritt pro Bein, ???",
        part: parts[2],
        intensity: 5,
        id: "d0"
    }, {
        name: "Auslaufen",
        time: 5,
        description: "800m",
        part: parts[3],
        intensity: 2,
        id: "00"
    }, {
        name: "Dehnung",
        time: 5,
        description: "Fokus auf die belasteten Körperteile legen",
        part: parts[3],
        intensity: 1,
        id: "01"
    }, {
        name: "Auslaufen",
        time: 10,
        description: "1600m",
        part: parts[3],
        intensity: 3,
        id: "02"
    }, {
        name: "Gehen",
        time: 10,
        description: "400m normales Gehen",
        part: parts[3],
        intensity: 1,
        id: "03"
    }
];
