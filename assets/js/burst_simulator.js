// Burst simulator frontend
// Requires window.BURST_API_BASE to be set in the page.

const SUBS = [
  // Replace with your ~20 subreddits
  "sub1","sub2","sub3","sub4","sub5",
  "sub6","sub7","sub8","sub9","sub10",
  "sub11","sub12","sub13","sub14","sub15",
  "sub16","sub17","sub18","sub19","sub20"
];

function clamp(x, lo, hi){ return Math.max(lo, Math.min(hi, x)); }

function labelFromProb(p){
  if (p < 0.33) return "Low burst risk";
  if (p < 0.66) return "Medium burst risk";
  return "High burst risk";
}

function initDropdowns(){
  const src = document.querySelector("#src");
  const tgt = document.querySelector("#tgt");
  for (const s of SUBS){
    src.add(new Option(s, s));
    tgt.add(new Option(s, s));
  }
  src.value = SUBS[0];
  tgt.value = SUBS[0];
}

async function doPredict(){
  const api = (window.BURST_API_BASE || "").replace(/\/+$/, "");
  if (!api){
    alert("Missing API URL: set window.BURST_API_BASE in finalrecipe2.md");
    return;
  }

  const payload = {
    source: document.querySelector("#src").value,
    target: document.querySelector("#tgt").value,
    datetime: document.querySelector("#dt").value,
    title: document.querySelector("#title").value || "",
    body: document.querySelector("#body").value || ""
  };

  // Basic client-side guardrails (still demo-friendly)
  if (!payload.datetime){
    alert("Please pick a date & time.");
    return;
  }

  const btn = document.querySelector("#predict");
  btn.disabled = true;
  btn.textContent = "Predicting...";

  try {
    const r = await fetch(`${api}/predict`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(payload)
    });

    if (!r.ok){
      const txt = await r.text();
      throw new Error(`API error (${r.status}): ${txt}`);
    }

    const data = await r.json();
    const p = clamp(Number(data.probability), 0, 1);
    const pct = (100 * p).toFixed(1);

    document.querySelector("#result").style.display = "block";
    document.querySelector("#bar").style.width = `${pct}%`;
    document.querySelector("#out").textContent =
      `Burst probability (simulated): ${pct}% — ${labelFromProb(p)}`;

    // Optional: show which defaults were used (nice for transparency)
    if (data.defaults_used){
      document.querySelector("#note").textContent =
        `Note: ${data.defaults_used} missing features were filled with typical values.`;
    } else {
      document.querySelector("#note").textContent =
        `Note: This is a what-if simulation using partial inputs + typical defaults.`;
    }

  } catch(e){
    console.error(e);
    alert(`Prediction failed: ${e.message}`);
  } finally {
    btn.disabled = false;
    btn.textContent = "Predict";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initDropdowns();
  document.querySelector("#predict").addEventListener("click", doPredict);
});
