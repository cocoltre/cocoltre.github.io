---
layout: page
title: Final Recipe
subtitle: Summary, takeaways, and future work
permalink: /finalrecipe/
---

<div class="hero">
  <div class="hero-text">
    <h1>The Recipe of a Viral Conflict</h1>
    <p>
      We study what makes a Reddit post “spill over” across communities —
      and how to <b>simulate</b> its likelihood.
    </p>
    <a class="btn btn-primary" href="{{ '/index' | relative_url }}">Intro</a>
    <a class="btn btn-primary" href="{{ '/communitylevel' | relative_url }}">Community-level results</a>
    <a class="btn btn-primary" href="{{ '/userlevel' | relative_url }}">User-level results</a>
    <a class="btn btn-primary" href="{{ '/postlevel' | relative_url }}">Post-level results</a>
  </div>
  <div class="hero-img">
    <img src="{{ '/assets/img/hero_reddit.png' | relative_url }}" alt="Reddit network illustration">
  </div>
</div>

<div class="cards">
  <div class="card">
    <h3>What is a burst?</h3>
    <p>A sudden spike of cross-subreddit attention around a link or a post.</p>
  </div>
  <div class="card">
    <h3>What do we predict?</h3>
    <p>
      A <b>simulated probability</b> that a new post could trigger such a burst,
      based on partial information.
    </p>
  </div>
  <div class="card">
    <h3>Why it matters</h3>
    <p>Conflicts spread fast — understanding the mechanics helps moderation and research.</p>
  </div>
</div>

---

## Conclusion

In this project, we examined the dynamics behind negative bursts on Reddit, sudden waves of cross-community attention and conflict that transform ordinary posts into viral flashpoints. By combining community, user, and post-level analyses, we identified both structural and linguistic factors that contribute to the emergence of these mobilizations.
{: .text-justify}

At the community level, bursty subreddits tend to be larger and more active, with a significantly higher number of unique contributors than non-bursty ones. These communities occupy central positions in the Reddit hyperlink network, suggesting that structural visibility and cross-subreddit exposure facilitate the propagation of conflicts.
{: .text-justify}

At the user level, activity patterns revealed that bursts are not evenly distributed: a small fraction of highly active users drive most interactions. Timing also plays a role, as posts made during peak activity hours or from prolific users have a higher likelihood of drawing attention across subreddits.
{: .text-justify}

At the post level, linguistic and semantic analyses showed that bursty posts are longer, lexically richer, and exhibit higher emotional and expressive tone compared to non-bursty ones. These posts tend to provoke engagement by combining strong sentiment with narrative or argumentative cues. However, predictive modeling demonstrated that textual features alone are insufficient to explain virality. Logistic regression models, even after feature decorrelation, achieved limited predictive accuracy, underscoring that contextual and social factors remain essential in understanding collective online behavior.
{: .text-justify}

Overall, our findings suggest that viral conflicts emerge from the interaction between content and context: structural exposure amplifies emotionally charged or rhetorically rich posts, while user dynamics and cross-subreddit links determine how far and fast these conflicts spread.
{: .text-justify}

<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/postlevel/">← Previous: Post level</a>
  <a class="btn btn-primary" href="/">Back to introduction →</a>
</div>

---

<div class="card">
  <h2>Will your post burst?</h2>

  <p style="color:#6b7280;margin-bottom:1rem;">
    ⚠️ This is a <b>what-if simulation</b>, not a perfect prediction.
    The model uses the information provided below and fills missing features
    with typical values observed in our dataset.
  </p>

  <label>Source subreddit</label>
  <select id="src"></select>

  <label>Target subreddit</label>
  <select id="tgt"></select>

  <label>Date & time</label>
  <input id="dt" type="datetime-local">

  <label>Title</label>
  <input id="title" type="text" placeholder="Post title">

  <label>Body</label>
  <textarea id="body" rows="6" placeholder="Post content"></textarea>

  <button id="predict" class="btn btn-primary">Predict</button>

  <p id="out" style="margin-top:1rem;font-weight:700;"></p>
</div>

<script>
/* =========================
   Burst Simulator – frontend
   ========================= */

const API_BASE = "https://burst-stimulator.onrender.com";

const SUBS = [
  "askreddit","pics","iama","todayilearned","funny","worldnews","videos","news",
  "politics","gaming","wtf","adviceanimals","gifs","science","the_donald"
];

const srcSel = document.querySelector("#src");
const tgtSel = document.querySelector("#tgt");
const out = document.querySelector("#out");

for (const s of SUBS){
  srcSel.add(new Option(s, s));
  tgtSel.add(new Option(s, s));
}

srcSel.value = SUBS[0];
tgtSel.value = SUBS[0];

document.querySelector("#predict").onclick = async () => {
  out.textContent = "Computing simulated burst probability…";

  const payload = {
    source: srcSel.value,
    target: tgtSel.value,
    datetime: document.querySelector("#dt").value,
    title: document.querySelector("#title").value || "",
    body: document.querySelector("#body").value || ""
  };

  if (!payload.datetime){
    out.textContent = "Please select a date and time.";
    return;
  }

  try {
    const r = await fetch(`${API_BASE}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!r.ok){
      const err = await r.text();
      throw new Error(err);
    }

    const data = await r.json();
    const pct = (100 * data.probability).toFixed(1);

    out.textContent = `Simulated burst probability: ${pct}%`;

  } catch (e){
    console.error(e);
    out.textContent = "Error: unable to reach the prediction API.";
  }
};
</script>
