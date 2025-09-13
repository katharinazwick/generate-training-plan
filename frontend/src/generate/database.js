import {parts} from "./parts.js";

export const database = [
    {
        name: "Einlaufen",
        time: 5,
        description: "400m",
        part: parts[0],
        intensity: 3,
        id: "0a"
    }, {
        name: "Einlaufen",
        time: 10,
        description: "1600m",
        part: parts[0],
        intensity: 3,
        id: "0b"
    }, {
        name: "Einlaufen mit Lauf-ABC",
        time: 10,
        description: "1600m mit Partner/Gruppe, abwechselnd 150m Laufen 50m Übung (ergibt 2 übungen pro 400m)",
        part: parts[0],
        intensity: 3,
        id: "0c"
    }, {
        name: "Lauf-ABC",
        time: 5,
        description: "Anfersen, A skip (ähnlich wie Kniehebe), A skip mit ausstrecken, A skip nach außen, Kreuzlauf...",
        part: parts[0],
        intensity: 4,
        id: "0d"
    }, {
        name: "Koordinations-ABC",
        time: 5,
        description: "Slalom, Sprünge, Hockstrecksprünge, rückwärts, einbeinige Sprünge",
        part: parts[0],
        intensity: 2,
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
        intensity: 3,
        id: "0g"
    }, {
        name: "Rückwärtslauf",
        time: 5,
        description: "400m",
        part: parts[0],
        intensity: 4,
        id: "0h"
    },
    /////////////////////////
    {
        name: "Reaktionssprints",
        time: 5,
        description: "6 * 30m Sprints auf ein spontanes akustisches Signal",
        part: parts[1],
        intensity: 3,
        id: "aa",
        type: "Kurzstrecke"
    }, {
        name: "Reaktionssprints",
        time: 5,
        description: "3 * (Plank vor 3 Hütchen, Tennisball auf angesagt Farbe legen, auf Hepp 30m sprinten)",
        part: parts[1],
        intensity: 3,
        id: "ab",
        type: "Kurzstrecke"
    }, {
        name: "Reaktionssprints",
        time: 5,
        description: "3 * (breitbeinig stehen, A kugelt Tennisball, B versucht diesen einzuholen, max. 60m)",
        part: parts[1],
        intensity: 3,
        id: "ac",
        type: "Kurzstrecke"
    }, {
        name: "kurze Sprints",
        time: 10,
        description: "6 * 60m Sprint mit zurück gehen",
        part: parts[1],
        intensity: 3,
        id: "ad",
        type: "Kurzstrecke"
    }, {
        name: "Hütchensprints",
        time: 10,
        description: "Hütchen auf 60m verteilen und vor sprinten, zurück rückwärts - 3 Einheiten a 2-3min (zB. 10m, 20m, 40m, 60m",
        part: parts[1],
        intensity: 3,
        id: "ae",
        type: "Kurzstrecke"
    }, {
        name: "mittlere Sprints",
        time: 10,
        description: "4 * 100m mit zurück gehen",
        part: parts[1],
        intensity: 4,
        id: "af",
        type: "Kurzstrecke"
    }, {
        name: "mittlere Sprints",
        time: 10,
        description: "3 * 100m Slalomlauf",
        part: parts[1],
        intensity: 4,
        id: "ag",
        type: "Kurzstrecke"
    }, {
        name: "lange Sprints",
        time: 15,
        description: "3 * 200m mit locker die Runde auslaufen und Pause",
        part: parts[1],
        intensity: 4,
        id: "ah",
        type: "Kurzstrecke"
    }, {
        name: "Pyramidensprints",
        time: 10,
        description: "400m, 200m, 100m, 200m, 400m",
        part: parts[1],
        intensity: 4,
        id: "ai",
        type: "Mittelstrecke"
    }, {
        name: "Pyramidensprints",
        time: 10,
        description: "100m, 200m, 400m, 200m, 100m",
        part: parts[1],
        intensity: 4,
        id: "aj",
        type: "Mittelstrecke"
    }, {
        name: "Steigerungslauf",
        time: 5,
        description: "2 * 400m (davon 200m GA1 (60-70%), 100m GA2 (75-85%), 100m GA3 (85-95%))",
        part: parts[1],
        intensity: 4,
        id: "ak",
        type: "Mittelstrecke"
    }, {
        name: "Verfolgungslauf",
        time: 5,
        description: "400m in Zweierpartner/Gruppe mit Zeitabstand (persönliche Zeit erforderlich)",
        part: parts[1],
        intensity: 3,
        id: "al",
        type: "Mittelstrecke"
    }, {
        name: "Verfolgungslauf",
        time: 5,
        description: "400m in Zweierpartner/Gruppe mit Streckenabstand (persönliche Zeit erforderlich)",
        part: parts[1],
        intensity: 3,
        id: "am",
        type: "Mittelstrecke"
    }, {
        name: "Mittelstrecke",
        time: 10,
        description: "800m GA 2 (75-85%)",
        part: parts[1],
        intensity: 4,
        id: "an",
        type: "Mittelstrecke"
    }, {
        name: "Mittelstrecke",
        time: 10,
        description: "800m GA 3 (85-95%)",
        part: parts[1],
        intensity: 5,
        id: "ao",
        type: "Mittelstrecke"
    }, {
        name: "Intervalle",
        time: 10,
        description: "800m Lauf mit 2 * 200m Sprint (Lauf, Sprint, Lauf, Sprint)",
        part: parts[1],
        intensity: 4,
        id: "ap",
        type: "Mittelstrecke"
    }, {
        name: "Steigerungslauf",
        time: 10,
        description: "2 * 800m (davon 400m GA2, 200m GA1^   , 200m GA3)",
        part: parts[1],
        intensity: 4,
        id: "aq",
        type: "Mittelstrecke"
    }, {
        name: "Steigerungslauf",
        time: 10,
        description: "2 * 800m (davon 200m GA1, 400m GA2, 200m GA3)",
        part: parts[1],
        intensity: 4,
        id: "ar",
        type: "Mittelstrecke"
    }, {
        name: "Intervalle",
        time: 15,
        description: "1200m Lauf mit 3 * 400m Sprint (Lauf, Sprint, Lauf, Sprint, Lauf, Sprint)",
        part: parts[1],
        intensity: 4,
        id: "as",
        type: "Mittelstrecke"
    }, {
        name: "Lauf",
        time: 15,
        description: "2000m GA 1 (60-70%)",
        part: parts[1],
        intensity: 2,
        id: "at",
        type: "Langstrecke"
    }, {
        name: "Lauf",
        time: 15,
        description: "2000m GA 2 (75-85%)",
        part: parts[1],
        intensity: 5,
        id: "au",
        type: "Langstrecke"
    }, {
        name: "Langlauf",
        time: 25,
        description: "4000m GA 1 (60-70%)",
        part: parts[1],
        intensity: 1,
        id: "av",
        type: "Langstrecke"
    },
    ///////////////////////////
    {
        name: "Planks",
        time: 10,
        description: "2 * (1min Plank, Liegestütze, 2 * 30sek Seitenplank, 1min Crunsh, 1min Rückwärtsplank, 1min Pause)",
        part: parts[2],
        intensity: 3,
        id: "a0"
    }, {
        name: "Liegestütze",
        time: 5,
        description: "normal, weit, eng, langsam",
        part: parts[2],
        intensity: 4,
        id: "b0"
    }, {
        name: "Bauchzirkel",
        time: 10,
        description: "4 * je 30 (Sit-ups, Plank, Beine halten ggf. mit austrecken)",
        part: parts[2],
        intensity: 3,
        id: "c0"
    }, {
        name: "Zirkel",
        time: 10,
        description: "4 (10 *  Liegestütze, 20 * Beine halten, anziehen und oben/unten ausstrecken, ???? )",
        part: parts[2],
        intensity: 3,
        id: "d0"
    }, {
        name: "Beinkraft",
        time: 5,
        description: "(3 * (20 Kniebeuge, 15 Ausfallschritt pro Bein, ???",
        part: parts[2],
        intensity: 3,
        id: "e0"
    }, {
        name: "Beinkraft",
        time: 5,
        description: "(3 * (sprunghaft wechselnde Ausfallschritte je 15, 5 * aus 90° Stand auf die Knie und in den Stand springen (ohne Hände), 15 Ausfallschritt pro Bein, ????))",
        part: parts[2],
        intensity: 3,
        id: "f0"
    }, {
        name: "Partnerübung Beine/Bauch",
        time: 10,
        description: "2 * (15 * A: Plank B: 20 * Sprünge über Hüfte, A: 20 * Wandsitz B: Kniehebelauf je 20, 15 * A: Plank mit weiten Beinen B: 20 * Steplauf zwischen Beine)",
        part: parts[2],
        intensity: 3,
        id: "g0"
    }, {
        name: "Partnerübung Bauch",
        time: 10,
        description: "2 * (15 * A: Plank B: 20 * hebt Beine drunter und drüber, 20 * beide Sit-up Position Ball seitlich übergeben, 20 * gegenüber sitzen angehobene Beine zusammen und öffnen jeweils verkehrt spiegel)",
        part: parts[2],
        intensity: 3,
        id: "h0"
    }, {
        name: "Partnerübung Oberkörper",
        time: 10,
        description: "3 * (15 * A: steht und hebt B an den Armen an B: liegt zwischen den Beinen, gegenüber Plank und Ball zuschießen mit Oberkörper im Liegestütz halten)",
        part: parts[2],
        intensity: 3,
        id: "i0"
    }, {
        name: "Tripelübung",
        time: 5,
        description: "2 * (A rechts B links, Hände nehmen, in die Hocke damit C drüber springen kann, je 30m)",
        part: parts[2],
        intensity: 4,
        id: "d0"
    }, {
        name: "Koordination",
        time: 5,
        description: "Plank mit Tennisball (von Hand zu Hand werfen), Spiderman mit wechselnden Tennisball  ",
        part: parts[2],
        intensity: 4,
        id: "j0"
    },
    //////////////
    {
        name: "Auslaufen",
        time: 5,
        description: "800m",
        part: parts[3],
        intensity: 3,
        id: "00"
    }, {
        name: "Dehnung",
        time: 5,
        description: "Fokus auf die belasteten Körperteile legen",
        part: parts[3],
        intensity: 4,
        id: "01"
    }, {
        name: "Auslaufen",
        time: 10,
        description: "1600m",
        part: parts[3],
        intensity: 2,
        id: "02"
    }, {
        name: "Gehen",
        time: 10,
        description: "400m normales Gehen",
        part: parts[3],
        intensity: 4,
        id: "03"
    }
];
