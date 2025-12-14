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

### Number of users across communities

Okay, let's look at the number of users for each subreddit and see what that brings us. To achieve this, we will take a dataset containing, for each post :
{: .text-justify}

- the source_subreddit, the author, and the burst parameter.

The dataset is derived using handcrafted_features.csv, tokenized_posts.tsv, and snap.tsv, taking the source_subreddit, the author, and the burst parameter. You can generate this dataset by running src/scripts/1_create_dataset_subreddits-users.py
{: .text-justify}

PLOT

Here, we can see that subreddits have many different amounts of active users (users that have already posted something).
Can the number of users a subreddit influence the probability to make a burst ?
{: .text-justify}

PLOT

Let's call an "active user" a user that has already posted in a specific subreddit. Over the 4'145 subreddits that we have, 2'657 subreddits have only 1 user who has been active in it, while only 19 subreddits have more than 100 active users. That means that only 64.1% of subreddits have only 1 active user.
{: .text-justify}

Will this ratio change depending on if the subreddit has already been used for making a burst?

PLOT

The ratios appear to change a lot.
That probably means that the number of active users in one subreddit may probably have an influence on the ability of the subreddit to trigger a burst. A next step would be to evaluate this statiscally.
{: .text-justify}

We can not be sure that the influence for burst does come from the subreddit itself. Maybe it goes beyond that, and then what matters is the interactions between all subreddits.
{: .text-justify}

We will work on it.
Now, let's move to understand how the subreddits interact through hyperlinks. it will help us to then focus on the interactions before and after a burst.
{: .text-justify}

### Interactions between communities via hyperlinks

<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/">← Back to introduction</a>
  <a class="btn btn-primary" href="/userlevel/">Next: User level →</a>
</div>