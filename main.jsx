import { useState, useEffect, useRef } from "react";

const ALL_VOCAB = [
  { de: "die Sportsachen", sk: "športové potreby" },
  { de: "stark", sk: "silný" },
  { de: "der Lebensstil", sk: "životný štýl" },
  { de: "die Sportergebnisse", sk: "športové výsledky" },
  { de: "das Angeln", sk: "rybolov" },
  { de: "die Athletik", sk: "atletika" },
  { de: "das Autorennen", sk: "automobilové preteky" },
  { de: "der Basketball", sk: "basketbal" },
  { de: "der Biathlon", sk: "biatlon" },
  { de: "das Boxen", sk: "box" },
  { de: "der Einzelsport", sk: "individuálny šport" },
  { de: "der Eiskunstlauf", sk: "krasokorčuľovanie" },
  { de: "das Fechten", sk: "šerm" },
  { de: "der Floorball", sk: "florbal" },
  { de: "das Golf", sk: "golf" },
  { de: "die Gymnastik", sk: "gymnastika" },
  { de: "der Handball", sk: "hádzaná" },
  { de: "der Mannschaftssport", sk: "kolektívny šport" },
  { de: "das Reiten", sk: "jazda na koni" },
  { de: "das Segeln", sk: "plachtenie" },
  { de: "das Skispringen", sk: "skoky na lyžiach" },
  { de: "das Tauchen", sk: "potápanie" },
  { de: "das Tischtennis", sk: "stolný tenis" },
  { de: "der Volleyball", sk: "volejbal" },
  { de: "anerkannt", sk: "uznávaný" },
  { de: "genießen", sk: "užívať si" },
  { de: "gesellig", sk: "spoločenský" },
  { de: "die Halle", sk: "hala" },
  { de: "kämpfen", sk: "bojovať" },
  { de: "die Kondition", sk: "kondícia" },
  { de: "die Luft", sk: "vzduch" },
  { de: "der Muskel", sk: "sval" },
  { de: "rennen", sk: "bežať" },
  { de: "schießen", sk: "strielať" },
  { de: "die Taktik", sk: "taktika" },
  { de: "das Turnier", sk: "turnaj" },
  { de: "verlieren", sk: "prehrať" },
  { de: "der Wettkampf", sk: "preteky" },
  { de: "der Ball", sk: "lopta" },
  { de: "der Elfmeter", sk: "penalta" },
  { de: "das Foul", sk: "faul" },
  { de: "foulen", sk: "faulovať" },
  { de: "der Gleichstand", sk: "vyrovnaný stav" },
  { de: "der Handschuh", sk: "rukavica" },
  { de: "die Heimatstadt", sk: "rodné mesto" },
  { de: "der Helm", sk: "helma" },
  { de: "die Nationalmannschaft", sk: "národné mužstvo" },
  { de: "das Remis", sk: "remíza" },
  { de: "der Schiedsrichter", sk: "rozhodca" },
  { de: "das Seil", sk: "lano" },
  { de: "die Spielregel", sk: "pravidlo hry" },
  { de: "die Strafe", sk: "trest" },
  { de: "der Stürmer", sk: "útočník" },
  { de: "das Tor", sk: "gól, brána" },
  { de: "der Torwart", sk: "brankár" },
  { de: "der Turnschuh", sk: "teniska" },
  { de: "überspringen", sk: "preskočiť" },
  { de: "das Unentschieden", sk: "remíza" },
  { de: "der Verteidiger", sk: "obranca" },
  { de: "als", sk: "keď (minulý čas)" },
  { de: "die Angst", sk: "strach" },
  { de: "die Funktionswäsche", sk: "funkčná bielizeň" },
  { de: "die Hoffnung", sk: "nádej" },
  { de: "der Neoprenanzug", sk: "neoprénový oblek" },
  { de: "die Nerven", sk: "nervy" },
  { de: "das Netz", sk: "sieť" },
  { de: "der Schläger", sk: "raketa" },
  { de: "der Schützer", sk: "chránič" },
  { de: "das Spielfeld", sk: "hracia plocha" },
  { de: "der Spielschluss", sk: "koniec hry" },
  { de: "die Thermowäsche", sk: "termobielizeň" },
  { de: "das Trikot", sk: "dres" },
  { de: "weinen", sk: "plakať" },
  { de: "wenn", sk: "keď (prítomnosť)" },
  { de: "zaubern", sk: "čarovať" },
  { de: "die Abfahrt", sk: "zjazd" },
  { de: "der Anfänger", sk: "začiatočník" },
  { de: "die Ausrüstung", sk: "výstroj" },
  { de: "die Buchung", sk: "rezervácia" },
  { de: "das Ereignis", sk: "udalosť" },
  { de: "der Fortgeschrittene", sk: "pokročilý" },
  { de: "die Gruppenermäßigung", sk: "skupinová zľava" },
  { de: "der Rabatt", sk: "zľava" },
  { de: "der Skistock", sk: "lyžiarska palica" },
  { de: "der Verein", sk: "klub" },
  { de: "der Verleiher", sk: "požičovňa" },
  { de: "der Zuschauer", sk: "divák" },
  { de: "die Zuschauerin", sk: "diváčka" },
  { de: "der Bach", sk: "potok" },
  { de: "fleißig", sk: "usilovný" },
  { de: "obwohl", sk: "hoci" },
  { de: "die Piste", sk: "zjazdovka" },
  { de: "trainieren", sk: "trénovať" },
  { de: "ändern", sk: "zmeniť" },
  { de: "die Belohnung", sk: "odmena" },
  { de: "die Bewegung", sk: "pohyb" },
  { de: "darstellen", sk: "predstavovať" },
  { de: "der Diabetes", sk: "cukrovka" },
  { de: "die Folge", sk: "následok" },
  { de: "der Grund", sk: "dôvod" },
  { de: "das Herz", sk: "srdce" },
  { de: "der Knochen", sk: "kosť" },
  { de: "der Krebs", sk: "rakovina" },
  { de: "die Milliarde", sk: "miliarda" },
  { de: "mindestens", sk: "najmenej" },
  { de: "passiv", sk: "pasívny" },
  { de: "der Sportplatz", sk: "športové ihrisko" },
  { de: "überhaupt", sk: "vôbec" },
  { de: "übertrieben", sk: "prehnaný" },
  { de: "veröffentlichen", sk: "zverejniť" },
  { de: "zugleich", sk: "zároveň" },
  { de: "der Artikel", sk: "článok" },
  { de: "sich befinden", sk: "nachádzať sa" },
  { de: "eher", sk: "skôr" },
  { de: "das Fitnessstudio", sk: "fitnescentrum" },
  { de: "das Krafttraining", sk: "posilňovanie" },
];

const GROUP_SIZE = 15;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Split into groups of 15
const GROUPS = [];
for (let i = 0; i < ALL_VOCAB.length; i += GROUP_SIZE) {
  GROUPS.push(ALL_VOCAB.slice(i, i + GROUP_SIZE));
}

// Generate a fill-in-the-blanks exercise
function makeFillExercise(word) {
  const letters = word.split("");
  const indicesToHide = [];
  // collect non-space char positions
  const nonSpaceIdx = letters.map((ch, i) => (ch !== " " && ch !== "-" ? i : null)).filter(i => i !== null);
  // hide every other one (odd positions among non-space)
  nonSpaceIdx.forEach((i, pos) => { if (pos % 2 === 1) indicesToHide.push(i); });
  // ensure at least 2 hidden
  if (indicesToHide.length < 2) {
    for (const i of nonSpaceIdx) {
      if (!indicesToHide.includes(i)) { indicesToHide.push(i); if (indicesToHide.length >= 2) break; }
    }
  }
  const hiddenLetters = indicesToHide.map(i => letters[i]);
  // decoys: extra wrong letters, never overlap with needed ones
  const allDecoys = ["x","q","j","y","ü","ö","ä","p","z","b","f","g","h","k","w","v","n","m","t","r"];
  const decoys = shuffle(allDecoys.filter(d => !hiddenLetters.map(l=>l.toLowerCase()).includes(d.toLowerCase()))).slice(0, 3);
  // options = all hidden letters (each instance separately) + decoys, shuffled
  const options = shuffle([...hiddenLetters, ...decoys]);
  return { letters, indicesToHide, hiddenLetters, options };
}

// Generate multiple choice options (wrong answers from the same group + full pool)
function getMCOptions(correct, pool, answerKey, count = 3) {
  const others = pool.filter(w => w[answerKey] !== correct[answerKey]);
  return shuffle(others).slice(0, count);
}

// Pick a random exercise type
function makeExercise(word, groupPool, fullPool) {
  const types = ["mc_de_sk", "mc_sk_de", "type_de", "fill_de"];
  const type = types[Math.floor(Math.random() * types.length)];

  if (type === "mc_de_sk") {
    const wrong = getMCOptions(word, [...groupPool, ...fullPool.slice(0, 20)], "sk");
    return { type, word, options: shuffle([word, ...wrong.slice(0,3)]) };
  }
  if (type === "mc_sk_de") {
    const wrong = getMCOptions(word, [...groupPool, ...fullPool.slice(0, 20)], "de");
    return { type, word, options: shuffle([word, ...wrong.slice(0,3)]) };
  }
  if (type === "type_de") {
    return { type, word };
  }
  if (type === "fill_de") {
    const fill = makeFillExercise(word.de);
    return { type, word, ...fill };
  }
}

// ----- STYLES -----
const C = {
  bg: "#0c0e14",
  card: "#13161f",
  border: "#1e2235",
  text: "#dde1ee",
  muted: "#464c63",
  accent: "#f59e0b",
  green: "#34d399",
  red: "#f87171",
  blue: "#60a5fa",
};

const base = {
  app: {
    minHeight: "100vh",
    background: C.bg,
    color: C.text,
    fontFamily: "'Georgia', 'Times New Roman', serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 16px 56px",
  },
};

// ===== COMPONENTS =====

function ProgressDots({ total, current }) {
  return (
    <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center", margin: "12px 0 20px" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          width: i < current ? 10 : 8,
          height: i < current ? 10 : 8,
          borderRadius: "50%",
          background: i < current ? C.green : i === current ? C.accent : C.border,
          transition: "all 0.3s",
          boxShadow: i === current ? `0 0 8px ${C.accent}` : "none",
        }} />
      ))}
    </div>
  );
}

function MCExercise({ exercise, onResult }) {
  const [chosen, setChosen] = useState(null);
  const isDE = exercise.type === "mc_de_sk";
  const questionKey = isDE ? "de" : "sk";
  const answerKey = isDE ? "sk" : "de";

  const pick = (opt) => {
    if (chosen) return;
    setChosen(opt);
    const ok = opt[answerKey] === exercise.word[answerKey];
    setTimeout(() => onResult(ok), 900);
  };

  return (
    <div>
      <div style={{ fontSize: 11, color: C.muted, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 }}>
        {isDE ? "Nemčina → Slovenčina" : "Slovenčina → Nemčina"} · Vyber správnu možnosť
      </div>
      <div style={{ fontSize: "clamp(22px,5vw,32px)", fontWeight: 700, color: C.text, marginBottom: 24, lineHeight: 1.2 }}>
        {exercise.word[questionKey]}
      </div>
      {exercise.options.map((opt, i) => {
        const isThis = opt[answerKey] === chosen?.[answerKey];
        const isCorrect = opt[answerKey] === exercise.word[answerKey];
        let bg = C.card, border = C.border, col = C.text;
        if (chosen) {
          if (isCorrect) { bg = "rgba(52,211,153,0.1)"; border = C.green; col = C.green; }
          else if (isThis) { bg = "rgba(248,113,113,0.1)"; border = C.red; col = C.red; }
        }
        return (
          <button key={i} onClick={() => pick(opt)} style={{
            display: "block", width: "100%", textAlign: "left",
            background: bg, border: `1.5px solid ${border}`,
            borderRadius: 12, padding: "13px 16px", marginBottom: 8,
            color: col, fontSize: 15, fontWeight: 500, cursor: chosen ? "default" : "pointer",
            transition: "all 0.2s",
          }}>
            {opt[answerKey]}
          </button>
        );
      })}
    </div>
  );
}

function TypeExercise({ exercise, onResult }) {
  const [val, setVal] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ok, setOk] = useState(false);
  const inputRef = useRef();

  useEffect(() => { inputRef.current?.focus(); }, []);

  const submit = () => {
    if (!val.trim() || submitted) return;
    // strict: case-insensitive, article must be correct (der/die/das matters!)
    const correct = val.trim().toLowerCase() === exercise.word.de.toLowerCase();
    setOk(correct);
    setSubmitted(true);
    setTimeout(() => onResult(correct), 1200);
  };

  return (
    <div>
      <div style={{ fontSize: 11, color: C.muted, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 }}>
        Slovenčina → Napíš po nemecky
      </div>
      <div style={{ fontSize: "clamp(22px,5vw,32px)", fontWeight: 700, color: C.text, marginBottom: 24 }}>
        {exercise.word.sk}
      </div>
      <input ref={inputRef} value={val} onChange={e => setVal(e.target.value)}
        onKeyDown={e => e.key === "Enter" && submit()} disabled={submitted}
        placeholder="Napíš nemecký preklad..."
        style={{
          width: "100%", boxSizing: "border-box",
          background: "#0c0e14", border: `2px solid ${submitted ? (ok ? C.green : C.red) : C.border}`,
          borderRadius: 12, padding: "13px 16px", color: C.text,
          fontSize: 16, outline: "none", marginBottom: 10,
          fontFamily: "inherit",
        }}
      />
      {submitted && !ok && (
        <div style={{ fontSize: 14, color: C.muted, marginBottom: 8 }}>
          Správne: <span style={{ color: C.green, fontWeight: 700 }}>{exercise.word.de}</span>
        </div>
      )}
      <button onClick={submit} disabled={!val.trim() || submitted} style={{
        width: "100%", background: val.trim() && !submitted ? C.accent : C.border,
        border: "none", borderRadius: 12, padding: "13px 0",
        color: val.trim() && !submitted ? "#0c0e14" : C.muted,
        fontWeight: 800, fontSize: 15, cursor: val.trim() && !submitted ? "pointer" : "default",
        fontFamily: "inherit",
      }}>
        Potvrdiť →
      </button>
    </div>
  );
}

function FillExercise({ exercise, onResult }) {
  // slots[i] = optionIndex placed in slot i, or null
  const n = exercise.indicesToHide.length;
  const [slots, setSlots] = useState(() => Array(n).fill(null));
  const [checked, setChecked] = useState(false);
  const [ok, setOk] = useState(false);

  const usedOptionIndices = slots.filter(s => s !== null);
  const allPlaced = slots.every(s => s !== null);

  // Click a letter button → fill next empty slot
  const pickLetter = (optIdx) => {
    if (checked) return;
    if (usedOptionIndices.includes(optIdx)) return;
    const nextEmptySlot = slots.findIndex(s => s === null);
    if (nextEmptySlot === -1) return;
    setSlots(prev => { const copy = [...prev]; copy[nextEmptySlot] = optIdx; return copy; });
  };

  // Click a filled slot → remove it (returns letter to pool)
  const removeSlot = (slotIdx) => {
    if (checked) return;
    setSlots(prev => { const copy = [...prev]; copy[slotIdx] = null; return copy; });
  };

  const reset = () => setSlots(Array(n).fill(null));

  const check = () => {
    if (!allPlaced || checked) return;
    // For each slot i, the letter placed is exercise.options[slots[i]]
    // The correct letter is exercise.letters[exercise.indicesToHide[i]]
    const correct = slots.every((optIdx, slotIdx) => {
      const placed = exercise.options[optIdx];
      const expected = exercise.letters[exercise.indicesToHide[slotIdx]];
      return placed?.toLowerCase() === expected?.toLowerCase();
    });
    setOk(correct);
    setChecked(true);
    setTimeout(() => onResult(correct), 1100);
  };

  // Build display: array of display items
  const display = exercise.letters.map((ch, charIdx) => {
    const slotIdx = exercise.indicesToHide.indexOf(charIdx);
    if (slotIdx === -1) return { type: "fixed", ch, charIdx };
    return { type: "blank", charIdx, slotIdx };
  });

  return (
    <div>
      <div style={{ fontSize: 11, color: C.muted, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6 }}>
        Doplň chýbajúce písmená
      </div>
      <div style={{ fontSize: 13, color: C.muted, marginBottom: 16 }}>
        Slovensky: <span style={{ color: C.blue, fontWeight: 600 }}>{exercise.word.sk}</span>
      </div>

      {/* Word display */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 20, alignItems: "flex-end" }}>
        {display.map((item, i) => {
          if (item.ch === " ") return <div key={i} style={{ width: 10 }} />;
          if (item.type === "fixed") return (
            <div key={i} style={{
              minWidth: 22, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, fontWeight: 700, color: C.text, paddingInline: 1,
              borderBottom: `2px solid ${C.border}`,
            }}>{item.ch}</div>
          );
          // blank slot
          const placedOptIdx = slots[item.slotIdx];
          const placedLetter = placedOptIdx !== null ? exercise.options[placedOptIdx] : null;
          const expectedLetter = exercise.letters[item.charIdx];
          const isCorrect = checked && placedLetter?.toLowerCase() === expectedLetter.toLowerCase();
          const isWrong = checked && placedLetter?.toLowerCase() !== expectedLetter.toLowerCase();
          return (
            <div key={i} onClick={() => placedLetter && !checked && removeSlot(item.slotIdx)}
              style={{
                minWidth: 26, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 700, paddingInline: 2,
                borderBottom: `2px solid ${isCorrect ? C.green : isWrong ? C.red : placedLetter ? C.accent : C.muted}`,
                color: isCorrect ? C.green : isWrong ? C.red : placedLetter ? C.accent : C.muted,
                cursor: placedLetter && !checked ? "pointer" : "default",
              }}>
              {placedLetter || "_"}
            </div>
          );
        })}
      </div>

      {checked && !ok && (
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 12 }}>
          Správne: <span style={{ color: C.green, fontWeight: 700 }}>{exercise.word.de}</span>
        </div>
      )}

      {/* Letter buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {exercise.options.map((letter, optIdx) => {
          const isUsed = usedOptionIndices.includes(optIdx);
          return (
            <button key={optIdx} onClick={() => pickLetter(optIdx)} disabled={isUsed || checked}
              style={{
                minWidth: 40, height: 40, borderRadius: 10,
                background: isUsed ? "#0c0e14" : "rgba(245,158,11,0.1)",
                border: `1.5px solid ${isUsed ? C.border : C.accent}`,
                color: isUsed ? C.border : C.accent,
                fontSize: 18, fontWeight: 700, paddingInline: 8,
                cursor: isUsed || checked ? "default" : "pointer",
                transition: "all 0.15s",
              }}>
              {letter}
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        {!checked && <button onClick={reset} style={{
          flex: 1, background: "none", border: `1.5px solid ${C.border}`,
          borderRadius: 12, padding: "11px 0", color: C.muted,
          fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "inherit",
        }}>Vymazať</button>}
        <button onClick={check} disabled={!allPlaced || checked} style={{
          flex: 2, background: allPlaced && !checked ? C.accent : C.border,
          border: "none", borderRadius: 12, padding: "11px 0",
          color: allPlaced && !checked ? "#0c0e14" : C.muted,
          fontWeight: 800, fontSize: 15, cursor: allPlaced && !checked ? "pointer" : "default",
          fontFamily: "inherit",
        }}>Skontrolovať →</button>
      </div>
    </div>
  );
}

// ===== MAIN APP =====
export default function App() {
  const [screen, setScreen] = useState("groups"); // groups | learn | groupDone | allDone
  const [groupIdx, setGroupIdx] = useState(0);
  const [masteredGroups, setMasteredGroups] = useState([]); // indices of mastered groups

  // learning state
  const [queue, setQueue] = useState([]); // words still to master
  const [mastered, setMastered] = useState([]); // mastered in this group
  const [currentEx, setCurrentEx] = useState(null);
  const [feedback, setFeedback] = useState(null); // null | "correct" | "wrong"
  const [roundCorrect, setRoundCorrect] = useState(0);
  const [roundTotal, setRoundTotal] = useState(0);

  const group = GROUPS[groupIdx];

  const buildNextExercise = (q, g) => {
    if (q.length === 0) return null;
    const word = q[0];
    return makeExercise(word, g, ALL_VOCAB.filter(w => !g.includes(w)));
  };

  const startGroup = (idx) => {
    const g = GROUPS[idx];
    const q = shuffle(g);
    setGroupIdx(idx);
    setQueue(q);
    setMastered([]);
    setRoundCorrect(0);
    setRoundTotal(0);
    setFeedback(null);
    setCurrentEx(buildNextExercise(q, g));
    setScreen("learn");
  };

  const handleResult = (correct) => {
    const word = queue[0];
    const newTotal = roundTotal + 1;
    const newCorrect = roundCorrect + (correct ? 1 : 0);
    setRoundTotal(newTotal);
    setRoundCorrect(newCorrect);
    setFeedback(correct ? "correct" : "wrong");

    setTimeout(() => {
      setFeedback(null);
      let newQueue, newMastered;
      if (correct) {
        newMastered = [...mastered, word];
        newQueue = queue.slice(1);
      } else {
        // put at end, randomized a bit
        const rest = queue.slice(1);
        const insertAt = Math.min(rest.length, 2 + Math.floor(Math.random() * 3));
        newQueue = [...rest.slice(0, insertAt), word, ...rest.slice(insertAt)];
        newMastered = mastered;
      }
      setMastered(newMastered);
      setQueue(newQueue);
      setRoundCorrect(newCorrect);
      setRoundTotal(newTotal);

      if (newQueue.length === 0) {
        setMasteredGroups(prev => [...new Set([...prev, groupIdx])]);
        if (masteredGroups.length + 1 >= GROUPS.length && masteredGroups.includes(groupIdx) === false) {
          // check if all done
        }
        setScreen("groupDone");
      } else {
        setCurrentEx(buildNextExercise(newQueue, group));
      }
    }, 400);
  };

  // progress bar
  const groupProgress = group ? Math.round((mastered.length / group.length) * 100) : 0;

  // ---- SCREENS ----

  if (screen === "groups") {
    const allMastered = masteredGroups.length === GROUPS.length;
    return (
      <div style={base.app}>
        <div style={{ fontSize: 28, fontWeight: 900, color: C.accent, letterSpacing: -1, marginBottom: 2 }}>
          Nemčina
        </div>
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 28 }}>
          {ALL_VOCAB.length} slovíčok · {GROUPS.length} skupín po {GROUP_SIZE}
        </div>

        {allMastered && (
          <div style={{
            background: "rgba(52,211,153,0.08)", border: `1px solid ${C.green}`,
            borderRadius: 14, padding: "14px 20px", marginBottom: 20, textAlign: "center",
            color: C.green, fontWeight: 700, maxWidth: 420, width: "100%",
          }}>
            🎉 Zvládol si všetky skupiny!
          </div>
        )}

        <div style={{ width: "100%", maxWidth: 420 }}>
          {GROUPS.map((g, i) => {
            const done = masteredGroups.includes(i);
            return (
              <button key={i} onClick={() => startGroup(i)} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", background: C.card,
                border: `1.5px solid ${done ? C.green : C.border}`,
                borderRadius: 14, padding: "16px 18px", marginBottom: 10,
                cursor: "pointer", textAlign: "left", color: C.text,
                transition: "border-color 0.2s",
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 3 }}>
                    Skupina {i + 1}
                  </div>
                  <div style={{ fontSize: 12, color: C.muted }}>
                    {g[0].de} – {g[g.length - 1].de}
                  </div>
                </div>
                <div style={{
                  fontSize: 13, fontWeight: 700,
                  color: done ? C.green : C.muted,
                }}>
                  {done ? "✓ Hotovo" : `${g.length} slov`}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (screen === "groupDone") {
    const accuracy = roundTotal > 0 ? Math.round((roundCorrect / roundTotal) * 100) : 100;
    const allNowDone = masteredGroups.length === GROUPS.length;
    return (
      <div style={base.app}>
        <div style={{ fontSize: 28, fontWeight: 900, color: C.green, marginBottom: 4 }}>
          Skupina {groupIdx + 1} ✓
        </div>
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 28 }}>Zvládnutá!</div>
        <div style={{
          background: C.card, border: `1px solid ${C.border}`,
          borderRadius: 18, padding: "28px 24px", maxWidth: 380, width: "100%", textAlign: "center",
        }}>
          <div style={{ fontSize: 52, marginBottom: 8 }}>
            {accuracy >= 80 ? "🏆" : accuracy >= 60 ? "💪" : "📚"}
          </div>
          <div style={{ fontSize: 42, fontWeight: 900, color: C.accent, marginBottom: 4 }}>{accuracy}%</div>
          <div style={{ fontSize: 14, color: C.muted, marginBottom: 24 }}>
            {roundCorrect} / {roundTotal} správne
          </div>
          {allNowDone ? (
            <div style={{ color: C.green, fontWeight: 700, marginBottom: 20 }}>
              🎉 Všetky skupiny hotové!
            </div>
          ) : null}
          <button onClick={() => startGroup(groupIdx)} style={{
            width: "100%", background: C.accent, border: "none", borderRadius: 12,
            padding: "13px 0", fontWeight: 800, fontSize: 15, color: "#0c0e14",
            cursor: "pointer", marginBottom: 10, fontFamily: "inherit",
          }}>Zopakovať skupinu</button>
          {groupIdx + 1 < GROUPS.length && (
            <button onClick={() => startGroup(groupIdx + 1)} style={{
              width: "100%", background: "rgba(52,211,153,0.1)", border: `1.5px solid ${C.green}`,
              borderRadius: 12, padding: "13px 0", fontWeight: 700, fontSize: 15, color: C.green,
              cursor: "pointer", marginBottom: 10, fontFamily: "inherit",
            }}>Ďalšia skupina →</button>
          )}
          <button onClick={() => setScreen("groups")} style={{
            width: "100%", background: "none", border: `1.5px solid ${C.border}`,
            borderRadius: 12, padding: "12px 0", fontWeight: 600, fontSize: 14, color: C.muted,
            cursor: "pointer", fontFamily: "inherit",
          }}>← Výber skupín</button>
        </div>
      </div>
    );
  }

  if (screen === "learn" && currentEx) {
    const total = group.length;
    const done = mastered.length;

    return (
      <div style={base.app}>
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: 440, marginBottom: 8 }}>
          <button onClick={() => setScreen("groups")} style={{ background: "none", border: "none", color: C.muted, cursor: "pointer", fontSize: 13, padding: 0, fontFamily: "inherit" }}>
            ← Skupiny
          </button>
          <div style={{ fontSize: 13, color: C.muted }}>Skupina {groupIdx + 1}</div>
          <div style={{ fontSize: 13 }}>
            <span style={{ color: C.green, fontWeight: 700 }}>{done}</span>
            <span style={{ color: C.muted }}> / {total}</span>
          </div>
        </div>

        {/* Progress dots */}
        <ProgressDots total={total} current={done} />

        {/* Progress bar */}
        <div style={{ width: "100%", maxWidth: 440, height: 4, background: C.border, borderRadius: 99, marginBottom: 20, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${groupProgress}%`, background: `linear-gradient(90deg, ${C.accent}, ${C.green})`, transition: "width 0.4s", borderRadius: 99 }} />
        </div>

        {/* Card */}
        <div style={{
          width: "100%", maxWidth: 440,
          background: C.card,
          border: `1.5px solid ${feedback === "correct" ? C.green : feedback === "wrong" ? C.red : C.border}`,
          borderRadius: 20, padding: "24px 20px",
          transition: "border-color 0.25s",
          position: "relative", overflow: "hidden",
        }}>
          {feedback && (
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
              background: feedback === "correct" ? "rgba(52,211,153,0.06)" : "rgba(248,113,113,0.06)",
              borderRadius: 20, pointerEvents: "none",
            }} />
          )}

          {currentEx.type === "mc_de_sk" || currentEx.type === "mc_sk_de"
            ? <MCExercise key={JSON.stringify(currentEx)} exercise={currentEx} onResult={handleResult} />
            : currentEx.type === "type_de"
            ? <TypeExercise key={JSON.stringify(currentEx)} exercise={currentEx} onResult={handleResult} />
            : <FillExercise key={JSON.stringify(currentEx)} exercise={currentEx} onResult={handleResult} />
          }
        </div>

        {feedback && (
          <div style={{
            marginTop: 16, fontSize: 16, fontWeight: 800,
            color: feedback === "correct" ? C.green : C.red,
          }}>
            {feedback === "correct" ? "✓ Správne!" : "✗ Skús znova neskôr"}
          </div>
        )}

        <div style={{ marginTop: 12, fontSize: 12, color: C.muted }}>
          {queue.length} slov zostáva v balíčku
        </div>
      </div>
    );
  }

  return null;
}
