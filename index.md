---
layout: page
title: The Recipe of a Viral Conflict
subtitle: Understanding Negative Bursts on Reddit
cover-img: /assets/img/reddit-black.png
permalink: /
body_class: coral-bg
---

Imagine scrolling through Reddit and stumbling upon a post like this one:

<div class="reddit-hero">
  <div class="reddit-card">

    <div class="reddit-card-header">
      <div class="reddit-user">
        <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

        <div class="reddit-user-meta">
          <strong>u/dandemonium</strong>
          <span>commented on <a href="#">post</a></span>
        </div>
      </div>

      <div class="reddit-logo">
        <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
      </div>
    </div>

    <div class="reddit-card-body">
      <h2 class="reddit-post-title">
        Ukraine is rioting over the new set of laws that outlaw basic freedoms such as protesting.
        How come the US citizens don't riot over NDAA?
      </h2>

      <p class="reddit-post-body">
        People are saying things such as: how come the Ukrainians are hailed for standing up and rioting against their government, and to use violence up until the point where their government is forced to repeal their tyrannical legislation, but it seems like when Americans talk about revolt, it’s immediately squashed with arguments of "and" and more talk of it being senseless. Are Americans too comfortable, or just too many clueless, uneducated citizens?
      </p>
    </div>


    <div class="reddit-card-footer">
      <span>⬆ upvote</span>
      <span>💬 replies</span>
    </div>

  </div>
</div>




On the 20th of January, 2014, within hours, this post triggered what we call a **negative burst** on Reddit: a sudden surge of reactions and arguments, often hostile or confrontational. What triggers such sudden bursts of negative attention? Is it the topic, the wording, the emotions, or the context?
{: .text-justify}

## Introduction {#top}

### Understanding Negative Bursts on Reddit

What makes some Reddit posts explode into negative bursts, sudden waves of cross-community attention, outrage, or mobilization—while others fade into obscurity? These bursts represent rapid collective reactions that propagate across subreddits, linking otherwise separate communities through conflict or controversy.
{: .text-justify}

Our goal in this project is to uncover the mechanisms behind these viral conflicts. We explore the “recipe” of a negative burst: a combination of content, context, and collective behavior that turns ordinary posts into flashpoints of attention.
{: .text-justify}

To do this, we integrate multiple levels of analysis based on the Reddit Hyperlink Network, which traces how subreddits reference each other through links and comments. Each level captures a different part of the phenomenon.
{: .text-justify}

### How to define a burst

In this work, we adopt the definition of burst proposed by Hamilton et al. in the paper *Community Interaction and Conflict on the Web*[<sup>[1]</sup>](#ref).
{: .text-justify}

A burst, or mobilization, is defined as a case where a cross-link between two communities leads to a significant increase in the number of comments made by members of the source community on the discussion thread of the target post. To distinguish genuine mobilizations from random fluctuations in activity, the authors compare the observed number of comments to a null model that estimates the expected commenting rate in the absence of a cross-link.
{: .text-justify}

A mobilization (or burst) is identified when the increase in comments exceeds the baseline rate observed under the null model, specifically when the after-to-before ratio is greater than 1.6×.
{: .text-justify}

### Research Approach

We adopt a multi-scale perspective, moving from the macro level of subreddit networks to the micro level of words and sentences. Our analyses combine:
{: .text-justify}

- Interaction networks to track the direction, frequency, and intensity of cross-links over time.
- Community embeddings to map structural proximity and polarization between subreddits.
- User embeddings to identify clusters of users and their role in burst diffusion.
- Semantic features (text statistics, sentiment, and LIWC categories) to capture linguistic signals that characterize bursty posts.



<div class="hero">
  <div class="hero-text">
    <p>
    At each level, we use descriptive (visual and statistic dal) or predictive (model-based) analyses. This step-by-step approach allows us to isolate which dimensions—network position, user profile, or linguistic tone—contribute most to the emergence of a burst.
    </p>
    
    <p>
      In fact, at each level we aim not only to analyze what factors appear (or not)
      to contribute the most to a bursty-post, but also to extract different features
      that appear meaningful to discriminate between a post leading to a burst or not.
    </p>

    <p>
      These features will help us to lead a last part on this project, having as goal
      to combine all of these features, train a model, and look if we can predict accurately
      a burst or not. We will also try to understand what features between the whole set
      are the most important for the classification.
    </p>
  </div>

  <div class="hero-img">
    <img src="{{ '/assets/img/marmite.png' | relative_url }}" alt="Final recipe illustration">
  </div>
</div>

<div class="quiz-container">
  <div class="question-section">
    <h3>Was it a burst?</h3>
    <div class="answers">
      <button id="yesBtn">Yes</button>
      <button id="noBtn">No</button>
    </div>
  </div>

  <div class="r