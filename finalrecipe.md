---
layout: page
title: Final Recipe
subtitle: Summary, takeaways, and future work
permalink: /finalrecipe/
---



<div class="hero">
  <div class="hero-text">
    <h1>The Recipe of a Viral Conflict</h1>
    <p>We study what makes a Reddit post “spill over” across communities — and how to predict it.</p>
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
    <p>The probability that a new post triggers that burst.</p>
  </div>
  <div class="card">
    <h3>Why it matters</h3>
    <p>Conflicts spread fast — understanding the mechanics helps moderation and research.</p>
  </div>
</div>




## Conclusion

In this project, we examined the dynamics behind negative bursts on Reddit—sudden waves of cross-community attention and conflict that transform ordinary posts into viral flashpoints.
{: .text-justify}

(Colle ici ton texte “Conclusion” complet, avec tes paragraphes Community/User/Post.)

## Future work

(Colle ici “Future work” / “Next steps”.)

#### References

(Optionnel : remettre une section refs ici aussi.)

<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/postlevel/">← Previous: Post level</a>
  <a class="btn btn-primary" href="/">Back to introduction →</a>
</div>


<div class="card">
  <h2>Will your post burst?</h2>

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

  <p id="out" style="margin-top:1rem;"></p>
</div>

<script>
const SUBS = ["sub1","sub2","sub3"]; // vos ~20 subs
for (const s of SUBS){
  document.querySelector("#src").add(new Option(s,s));
  document.querySelector("#tgt").add(new Option(s,s));
}

document.querySelector("#predict").onclick = async () => {
  const payload = {
    source: document.querySelector("#src").value,
    target: document.querySelector("#tgt").value,
    datetime: document.querySelector("#dt").value,
    title: document.querySelector("#title").value,
    body: document.querySelector("#body").value
  };

  const r = await fetch("https://YOUR_API/predict", {
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(payload)
  });

  const data = await r.json();
  document.querySelector("#out").textContent =
    `Burst probability: ${(100*data.probability).toFixed(1)}%`;
};
</script>