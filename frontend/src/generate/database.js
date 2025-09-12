import {parts} from "./parts.js";
//kurz,mittel,langstrecke inkludieren und danach filtern können?
//balstungsintensitäöt pro ubung und summioeren ggf eingeben welche intensität man haben will
export const database = [
    {
        name: "Lauf-ABC",
        time: 5,
        description: "Anfersen, Kniehebe-, Seitwärts-, Kreuzlauf, Fußgelenksarbeit...",
        part: parts[0],
        id: "00a"
    }, {
        name: "Einlaufen",
        time: 5,
        description: "800m",
        part: parts[0],
        id: "00b"
    }, {
        name: "Einlaufen",
        time: 10,
        description: "1600m",
        part: parts[0],
        id: "00c"
    }, {
        name: "Einlaufen mit Lauf-ABC",
        time: 10,
        description: "1600m mit Partner/Gruppe, abwechselnd 100m Laufen 100m Übung (ergibt 2 übungen pro 400m)",
        part: parts[0],
        id: "00d"
    }, {
        name: "Koordination",
        time: 5,
        description: "Slalom, Sprünge, Hockstrecksprünge",
        part: parts[0],
        id: "00e"
    },{
        name: "Knotenlauf",
        time: 5,
        description: "800m mit parallel Knoten binden",
        part: parts[0],
        id: "00f"
    }, {
        name: "kurze Sprints",
        time: 10,
        description: "6 * 60m Sprint mit zurück gehen",
        part: parts[1],
        id: "0a0"
    }, {
        name: "mittlere Sprints",
        time: 10,
        description: "4 * 100m mit zurück gehen",
        part: parts[1],
        id: "0b0"
    }, {
        name: "lange Sprints",
        time: 15,
        description: "3 * 200m mit locker die Runde auslaufen und Pause",
        part: parts[1],
        id: "0c0"
    }, {
        name: "lange Sprints",
        time: 10,
        description: "2 * 400m und Pause",
        part: parts[1],
        id: "0d0"
    }, {
        name: "400m Verfolgungslauf",
        time: 5,
        description: "In Zweierpartner mit Zeitabstand (persönliche Zeit erforderlich)",
        part: parts[1],
        id: "0e0"
    }, {
        name: "400m Verfolgungslauf",
        time: 5,
        description: "In Zweierpartner mit Streckenabstand (persönliche Zeit erforderlich)",
        part: parts[1],
        id: "0f0"
    }, {
        name: "400m Verfolgungslauf",
        time: 5,
        description: "In Gruppen mit Zeitabstand (persönliche Zeit erforderlich)",
        part: parts[1],
        id: "0g0"
    }, {
        name: "400m Verfolgungslauf",
        time: 5,
        description: "In Gruppen mit Streckenabstand (persönliche Zeit erforderlich)",
        part: parts[1],
        id: "0h0"
    }, {
        name: "800m Sprint",
        time: 10,
        description: "800m GA 2 (75-85%)",
        part: parts[1],
        id: "0i0"
    }, {
        name: "800m Intervalle",
        time: 10,
        description: "800m Lauf mit 2 * 200m Sprint (Lauf, Sprint, Lauf, Sprint)",
        part: parts[1],
        id: "0j0"
    }, {
        name: "1200m Intervalle",
        time: 15,
        description: "1200m Lauf mit 3 * 400m Sprint (Lauf, Sprint, Lauf, Sprint, Lauf, Sprint)",
        part: parts[1],
        id: "0k0"
    },{
        name: "Lauf",
        time: 15,
        description: "2000m GA 1 (60-70%)",
        part: parts[1],
        id: "0l0"
    }, {
        name: "langlauf",
        time: 25,
        description: "4000m GA 1 (60-70%)",
        part: parts[1],
        id: "0m0"
    }, {
        name: "Planks",
        time: 10,
        description: "2 * (1min Plank, Liegestütze, 2 * 30sek Seitenplank, Crunsh, 1min Rückwärtsplank)",
        part: parts[2],
        id: "a00"
    }, {
        name: "Liegestütze",
        time: 5,
        description: "normal, weit, eng, langsam",
        part: parts[2],
        id: "b00"
    }, {
        name: "Auslaufen",
        time: 5,
        description: "800m",
        part: parts[3],
        id: "000"
    }, {
        name: "Auslaufen",
        time: 10,
        description: "1600m",
        part: parts[3],
        id: "001"
    }, {
        name: "Gehen",
        time: 10,
        description: "400m normales Gehen",
        part: parts[3],
        id: "002"
    },{
        name: "Dehnung",
        time: 5,
        description: "Fokus auf die belasteten Körperteile legen",
        part: parts[3],
        id: "003"
    },
];
