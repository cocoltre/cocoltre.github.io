---
layout: page
title: Community Level
subtitle: How subreddit structure relates to bursts
permalink: /communitylevel/
---


<iframe
  src="{{ '/assets/plots/clusters_bubbles_subreddits.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>

Look like cluster 24 seems to be a kinky one

cluster_16 looks like fan pages   

cluster_25 are images



## Community Level {#communitylevel}
First, let's observe how subreddits themselves have an influence on the burst. In this section, we are interested to explore and to understand which subreddits properties distinguish posts that trigger a burst from those that do not.
{: .text-justify}

Our goals are to:

- Identify the subreddits' differences that differ most between bursty and non-bursty posts.
- Understand which of these differences best explain or predict the probability of triggering a burst.

### Size of a source subreddit community

Does the size of a subreddit influence the probability of a post to make a burst ?
Let's look into that. What is the effective size of a subreddit ? Is it best described by the number of users it has ? Or by the number of posts it has made ? Indeed, some users are shared between subreddits communities, and some users may post many times in a single subreddit community, so we have to pay attention to these details.
{: .text-justify}

In the following, we will try to answer the initial question with the two definitions.
To achieve this, we will take a dataset containing, for each post:
{: .text-justify}

- the source_subreddit, the author, and the burst parameter.

The dataset is derived using handcrafted_features.csv, tokenized_posts.tsv, and snap.tsv, taking the source_subreddit, the author, and the burst parameter. You can generate this dataset by running src/scripts/1_create_dataset_subreddits-users.py
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_top10_subreddits_size.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_distribution_subreddits_size.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_subreddit_size_describe.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

First, let's call an "active user" a user that has already posted in a specific subreddit.
{: .text-justify}

Here, we can see that subreddits have many different amounts of active users, and of posts. The distribution for both sizes is extremely left-skewed, meaning that most of the subreddits have very few active users (75% of them have less than 2) and few posts (75% of them have less than 2 too). For instance, over the 4'145 subreddits that we have, 2'657 subreddits have only 1 user who has been active in it, while only 19 subreddits have more than 100 active users. 
That means that 64.1% of subreddits have only 1 active user, which is huge and explains the skewness.
{: .text-justify}

We also see that the distribution of subreddits across number of active users or number of posts is not exactly the same, which makes sense as 1 user can post several times in the same subreddit.
{: .text-justify}

We also see that no matter their amount nor the identity of active users, they have different burst ratios (the portion of posts that did a burst). This burst ratio helps to put the same weight for a community that has 1 user who made 4 posts and one that has 1 user who made 1 post, and really just look for the global activity of the subreddit (not their own activity).
{: .text-justify}

**Can the number of active users or the number of posts of a subreddit influence the probability of a post to make a burst?**
{: .text-justify}

First, let's first find out about **the number of active users.**
{: .text-justify}

#### The size is the number of active users

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_mean_burst_ratio_by_subreddit_users.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Here, we see that the burst ratios vary from 0 to 0.176 (meaning that on average 17.6% of all the posts from a community with 81 active users make a burst). That indicates that the number of active users a subreddit has may influence the burst ratio, thus the probability of a post to make a burst.
{: .text-justify}

Because we have way more subreddits with few users, it is hard to see in details the burst ratios on this plot. Let's find a better way to visualize.
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_mean_burst_ratio_by_users_cluster.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Okay, now we see a bit better. With a K-means algorithm, we are able to distinguish 3 clusters of subreddits: the subreddits with a low number of active users (~3), with a medium number of active users (~113), and with a high number of active users (~487).
{: .text-justify}

Suprinsingly, we see that if a post is made in a subreddit with a medium number of active users, it has more probability to create a burst than in the low or high numbered subreddits.
{: .text-justify}

As our initial distribution is highly skewed and definitely non normal, it is better to use Kruskal–Wallis statistical test. What we find is amazing: the p-value is extremely low (7.0e-63). Thus, we have strong statistical evidence to say that the mean burst ratios between the 3 clusters is different, ie the number of active users of a subreddit has an influence on the probability of a post to make a burst.
{: .text-justify}

That's great! We can use the column "Nb_users_per_subreddit" as our first feature in our ML model.
{: .text-justify}

#### The size is the number of posts

Now let's see if the number of posts a community has, also has an influence on the probability of a post to make a burst.
Remember our data:
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_top10_subreddits_size.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Here, we can see that subreddits have many different amounts of posts. We also see that no matter the amount of active users nor their identity, they have different burst ratios (the portion of posts that did a burst).
{: .text-justify}

**Can the number of posts of a subreddit influence the probability of it to make a burst ?**
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_mean_burst_ratio_by_subreddit_posts.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Here, we see that the burst ratios vary from 0 to 0.175 (meaning that on average 17.6% of all the posts from a community with 85 posts make a burst). That indicates that the number of posts of a subreddit may influence the burst ratio, thus the probability of a post to make a burst.
{: .text-justify}

Because we have way more subreddits with few posts, it is hard to see in details the burst ratios on this plot. Let's find a better way to visualize.
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_mean_burst_ratio_by_posts_cluster.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Okay, now we see a bit better. With a K-means algorithm, we are able to distinguish 3 clusters of subreddits: the subreddits with a low number of posts (~3), with a medium number of posts (~203), and with a high number of posts (~902).
{: .text-justify}

Suprinsingly, we see here that if a post is made in a subreddit with a high number of posts, it has more probability to create a burst than in the medium numbered subreddits and way more than in the low numbered subreddits.
{: .text-justify}

As our initial distribution is highly skewed and definitely non normal, it is better to use Kruskal–Wallis statistical test. What we find is amazing: the p-value is extremely low (3.2e-38). Thus, we have strong statistical evidence to say that the mean burst ratios between the 3 clusters is different, ie the number of posts of a subreddit has an influence on the probability of a post to make a burst.
{: .text-justify}

That's great! We can use the column "Nb_posts_per_subreddit" as our second feature in our ML model.
{: .text-justify}


### Interactions between communities via hyperlinks

<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/">← Back to introduction</a>
  <a class="btn btn-primary" href="/userlevel/">Next: User level →</a>
</div>