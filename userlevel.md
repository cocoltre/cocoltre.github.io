---
layout: page
title: User Level
subtitle: Who participates and when
permalink: /userlevel/
---

<iframe
  src="{{ '/assets/plots/clusters_bubbles_user.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>


## User Level {#userlevel}

Once we know from where (from which subreddit) one's talking, let's look at who they are exactly, and when they are talking.
In this section, we are interested to explore and to understand which user properties distinguish posts that trigger a burst from those that do not.
{: .text-justify}

Our goals are to:

- Identify the user properties that differ most between bursty and non-bursty posts.
- Understand which of these properties best explain or predict the probability of triggering a burst.

### Number of subreddits across users

As for part 1.1, let's look at the number of users for each subreddit and see what that brings us. To achieve this, we will take the same dataset as part 1.1, containing, for each post :

- the source_subreddit, the author, and the burst parameter.

The dataset is derived using handcrafted_features.csv, tokenized_posts.tsv, and snap.tsv, taking the source_subreddit, the author, and the burst parameter. You can generate this dataset by running src/scripts/1_create_dataset_subreddits-users.py
{: .text-justify}

PLOT

We observe that users sometimes post in several subreddits. Does the number of subreddits where they post influence the probability of them making a burst ?
{: .text-justify}

Over the 14'000 users that we have, 12'855 users have posted in only 1 subreddit, while only 11 users have posted in more than 10 subreddits. That means that 91.8% of users have posted in only 1 subreddit.
{: .text-justify}

Will this ratio change depending on if the user has already made a burst?

PLOT

The ratios don't appear to change that much. That probably means that the number of subreddits in which a user has posted may probably not have an influence on the ability of triggering a burst. We still should evaluate this statiscally.
{: .text-justify}

Okay, so maybe what makes a post do a burst is not because of who defines one user... but maybe there is a temporal dimension added to it ?


<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/communitylevel/">← Previous: Community level</a>
  <a class="btn btn-primary" href="/postlevel/">Next: Post level →</a>
</div>