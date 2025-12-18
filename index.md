---
layout: page
title: The Recipe of a Viral Conflict
subtitle: Understanding Negative Bursts on Reddit
cover-img: /assets/img/reddit.png
permalink: /
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
        People are saying things such as: how come the Ukrainians are hailed for standing up and
      rioting against their government...
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

In this work, we adopt the definition of burst proposed by Hamilton et al. in the paper Community Interaction and Conflict on the Web[<sup>[1]</sup>](#ref).
{: .text-justify}

A burst, or mobilization, is defined as a case where a cross-link between two communities leads to a significant increase in the number of comments made by members of the source community on the discussion thread of the target post. To distinguish genuine mobilizations from random fluctuations in activity, the authors compare the observed number of comments to a null model that estimates the expected commenting rate in the absence of a cross-link.
{: .text-justify}

A mobilization (or burst) is identified when the increase in comments exceeds the baseline rate observed under the null model, specifically when the after-to-before ratio is greater than 1.6×.
{: .text-justify}

### Research Approach

We adopt a multi-scale perspective, moving from the macro level of subreddit networks to the micro level of words and sentences. Our analyses combine:
{: .text-justify}

- Community embeddings to map structural proximity and polarization between subreddits.
- Interaction networks to track the direction, frequency, and intensity of cross-links over time.
- User embeddings to identify clusters of users and their role in burst diffusion.
- Semantic features (text statistics, sentiment, and LIWC categories) to capture linguistic signals that characterize bursty posts.

At each level, we use both descriptive (visual and statistic dal) and predictive (model-based) analyses. This step-by-step approach allows us to isolate which dimensions—network position, user profile, or linguistic tone—contribute most to the emergence of a burst.
{: .text-justify}

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:22px">
  <a class="btn btn-primary" href="/communitylevel/">Start: Community level →</a>
  <a class="btn btn-default" href="/aboutus/">About us</a>
</div>

---

#### References {#ref}

[1] Srijan Kumar, William L. Hamilton, Jure Leskovec, and Dan Jurafsky. 2018. Community Interaction and Conflict on the Web. In WWW 2018: The 2018 Web Conference, April 23–27, 2018, Lyon, France. ACM, New York, NY, USA, 11 pages. [DOI](https://doi.org/10.1145/3178876.3186141)



Cover Image : OpenAI. "DALL·E - Image Generation with Text as Input." [DALL·E](https://openai.com/dall-e). OpenAI, 2023

[<sup>[top]</sup>](#top)
