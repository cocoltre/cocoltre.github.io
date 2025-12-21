---
layout: page
title: Final Recipe
subtitle: Test it!
permalink: /finalrecipe/
cover-img: /assets/img/reddit-black.png
body_class: coral-bg
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
    <img src="{{ '/assets/img/marmite.png' | relative_url }}" alt="Reddit network illustration">
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

## Want to test it ?

On this project, we analyzed Reddit hyperlinks at different levels.  
From each level, we tried to extract the most meaningful features, that seem to discriminate the most between post leading to a burst and those that do not.  

The final objective of this project was to try to combine all of these features, train a model, and look if we can predict accurately a burst or not. 

We also tried to use this trained model reproduce the comportment of a burst simulator, wanna test it? 

*Disclaimer.* This simulator is for educational / informational purposes only. Please do not use it to intentionally provoke or coordinate harassment, brigading, or cross-community conflicts on Reddit.

<div class="reddit-hero">
  <div class="reddit-card finalrecipe-card">

    <div class="reddit-card-header">
      <div class="reddit-user">
        <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">
        <div class="reddit-user-meta">
          <strong>u/finalrecipe-bot</strong>
          <span>simulated a <a href="#">burst</a></span>
        </div>
      </div>

      <div class="reddit-logo">
        <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
      </div>
    </div>

    <div class="reddit-card-body">
      <h2 class="reddit-post-title">
        Will your post trigger a cross-community conflict?
      </h2>

      <p class="reddit-post-body">
        Fill in partial information about a Reddit post to simulate
        the probability that it will generate a burst of cross-subreddit attention.
      </p>

      <form class="simulator-form" onsubmit="return false;">

        <label for="src">Source subreddit</label>
        <select id="src" name="src"></select>

        <label for="tgt">Target subreddit</label>
        <select id="tgt" name="tgt"></select>


        <label>Date & time</label>
        <input id="dt" type="datetime-local">

        <label>Title</label>
        <input id="title" type="text" placeholder="Post title">

        <label>Body</label>
        <textarea id="body" rows="6" placeholder="Post content"></textarea>

        <button id="predict" class="btn btn-primary">
          Simulate burst probability
        </button>

        <p id="out" class="simulator-output"></p>

      </form>
    </div>

    <div class="reddit-card-footer">
      <span>simulation</span>
      <span>model-based</span>
      <span>probabilistic</span>
    </div>

  </div>
</div>

<script>
const API_BASE = "https://burst-stimulator.onrender.com";

const SUBS = [
  "askreddit", "writingprompts", "circlebroke","pics","iama","subredditdrama", "conspiracy", "drama", "todayilearned","funny","worldnews","bestofoutrageculture","news", "shitliberalssay",
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
  out.textContent = "Computing simulated burst probability...";

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

    
    // by this:
    const pct = 100 * data.probability;      

    let msg = "";
    if (pct < 15) {
      msg = "This post will not burst!";
    } else if (pct < 23) {
      msg = "This post will probably not burst!";
    } else if (pct < 28) {
      msg = "Hmmm, not sure this post will burst or not.";
    } else if (pct < 35) {
      msg = "Ouch, this post will probably burst!";
    } else {
      msg = "Careful!! This post will burst!!";
    }

out.textContent = msg ;

  } catch (e){
    console.error(e);
    out.textContent = "Error: unable to reach the prediction API.";
  }
};
</script>
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

---
<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/postlevel/">← Previous: Post level</a>
  <a class="btn btn-primary" href="/">Back to introduction →</a>
</div>


#### References {#ref}

[1] Srijan Kumar, William L. Hamilton, Jure Leskovec, and Dan Jurafsky. 2018. Community Interaction and Conflict on the Web. In WWW 2018: The 2018 Web Conference, April 23–27, 2018, Lyon, France. ACM, New York, NY, USA, 11 pages. [DOI](https://doi.org/10.1145/3178876.3186141)



All Images : OpenAI. "DALL·E - Image Generation with Text as Input." [DALL·E](https://openai.com/dall-e). OpenAI, 2023

[<sup>[top]</sup>](#top)
