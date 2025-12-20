---
layout: page
title: User Level
subtitle: Who participates and when ?
permalink: /userlevel/
cover-img: /assets/img/baniere.png
---

<div class="page-banner">
  <div class="page-banner-inner">
    <h1 class="page-title">User behavior as a catalyst for bursts</h1>
    <p class="page-subtitle"></p>
  </div>
</div>


## User Level

Once we know from where (from which subreddit) one's talking, let's look at who they are exactly, and when they are talking.
In this section, we are interested to explore and to understand which user properties distinguish posts that trigger a burst from those that do not.
{: .text-justify}

Our goals are to:

- Identify the user properties that differ most between bursty and non-bursty posts.
- Understand which of these properties best explain or predict the probability of triggering a burst.


<div class="page-outline" markdown="1">

- TOC
{:toc}

</div>


### Activity of a user

Does the activity of a user influence the probability of their post to make a burst ?
Let's look into that. What is the effective activity of a user ? Is it best described by the number of subreddits they belong to (ie have already posted in) ? Or by the number of posts they have made ? 
{: .text-justify}

In the following, we will try to answer the initial question with the two definitions.
{: .text-justify}

To achieve this, we will take the same dataset as part 1.1, containing, for each post:

- the source_subreddit, the author, and the burst parameter.

The dataset is derived using handcrafted_features.csv, tokenized_posts.tsv, and snap.tsv, taking the source_subreddit, the author, and the burst parameter. You can generate this dataset by running src/scripts/1_create_dataset_subreddits-users.py
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_top5_users_activity.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_distribution_users_activity.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_users_activity_describe.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Here, we can see that users have many different amounts of subreddits, and of posts. The distribution for both types of activity is extremely left-skewed, meaning that most of the users are active in very few subreddits (minimum 75% of them in only 1) and do few posts (minimum 75% of them make 1 too). We also see that the distribution of users across the number of subreddits or number of posts is not exactly the same, which makes sense as 1 user can post several times in the same subreddit. Suprinsingly, the users that are active in the most subreddits do not necessarily post the most. For instance, over the 14'000 users that we have, 12'855 users have posted in only 1 subreddit, while only 11 users have posted in more than 10 subreddits. That means that 91.8% of users have posted in only 1 subreddit, which explains the highly left-skewness.
{: .text-justify}

We also see that no matter their amount nor the identity of active users, they have different burst ratios (the portion of their posts that did a burst).
{: .text-justify}

**Can the number of subreddits in which a user is being active or the number of posts they make influence the probability of their post to make a burst?**
{: .text-justify}

First, let's first find out about **the number of subreddits.**
{: .text-justify}

#### The activity is the number of subreddits in which they are active

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_mean_burst_ratio_by_users_subreddits.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Here, we see that the burst ratios vary from 0 to 0.043 (meaning that on average 4.3% of all the posts from a user who is active in 5 subreddits make a burst). That indicates that the number of subreddits in which a user is being active may influence the burst ratio, thus the probability of their post to make a burst.
{: .text-justify}

Let's see if the difference is statistically significant.
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_mean_burst_ratio_by_subreddits_cluster.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

With a K-means algorithm, we are able to distinguish 3 clusters of users: the users active in a low number of subreddits (1), in a medium number of subreddits (~2), and in a high number of subreddits (~9).
{: .text-justify}

Suprinsingly, we see that if a post is made by a user who is active in only 1 subreddit, it has more probability to create a burst than if the user is active in more subreddits.
{: .text-justify}

As our initial distribution is highly skewed and definitely non normal, it is better to use Kruskal–Wallis statistical test. What we find is amazing: the p-value is extremely low (6.41e-10). Thus, we have strong statistical evidence to say that the mean burst ratios between the 3 clusters is different, ie the number of subreddits in which a user is active has an influence on the probability of a post to make a burst.
{: .text-justify}

That's great! We can use the column "Nb_subreddits_per_user" as a new feature in our ML model.
{: .text-justify}

#### The activity is the number of posts

Now let's see if the number of posts a user has made has also an influence on the probability of a post to make a burst.
Remember our data:
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_top5_users_activity.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Here, we can see that users make many different amounts of posts. We also see that no matter their amount of the subreddits they belong to nor the identity of active users, they have different burst ratios (the portion of posts that did a burst).
{: .text-justify}

**Can the number of posts of a user influence the probability of it to make a burst ?**
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_mean_burst_ratio_by_users_posts.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Here, we see that the burst ratios vary from 0 to 0.22 (meaning that on average 22% of all the posts from a user who made 22 posts in total make a burst). That indicates that the number of posts of a user may influence the burst ratio, thus the probability of a post to make a burst.
{: .text-justify}

Because we have way more subreddits with few posts, it is hard to see in details the burst ratios on this plot. Let's find a better way to visualize.
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_mean_burst_ratio_by_posts_cluster.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Okay, now we see a bit better. With a K-means algorithm, we are able to distinguish 3 clusters of users: the users with a low number of posts (~3), with a medium number of posts (~12), and with a high number of posts (~58).
{: .text-justify}

Suprinsingly, we see here that if a post is made by a user who posts a low number of posts, it has more probability to create a burst than if created by a user that posts more.
{: .text-justify}

As our initial distribution is highly skewed and definitely non normal, it is better to use Kruskal–Wallis statistical test. What we find is amazing: the p-value is extremely low (2.09e-40). Thus, we have strong statistical evidence to say that the mean burst ratios between the 3 clusters is different, ie the number of posts of a user has an influence on the probability of a post to make a burst.
{: .text-justify}

That's great ! We can use the column "Nb_posts_per_user" as a new feature in our ML model.
{: .text-justify}

### 2. Clustering of the users 

**The Big Question:** How do we group users together? By their posting frequency? By their karma? Neither!

Instead, we group them by **which subreddits they participate in**. Think of it like this: if a user bounces between r/AskReddit, r/funny, and r/IAmA, they belong in the same cluster as other users who frequent these same communities—not because they post the same content, but because they **move in the same circles**.

#### 2.1 The User Clustering Pipeline

User clustering follows a similar mathematical pipeline to subreddit clustering, adapted for user-subreddit participation patterns:

1. **Embed** the data into 300 dimensions (capturing user participation in subreddits)
2. **Compress** with PCA (keep 80% of the information in ~202 dimensions)
3. **Smooth** with UMAP (further reduce to 20 dimensions while preserving structure)
4. **Cluster** using Spectral Clustering (test 10 to 50 clusters and pick the best one)
5. **Validate** using three quality metrics (ensuring robust cluster selection)

The result? Each user gets a **cluster membership** indicating which user community they belong to—a grouping based entirely on their subreddit participation overlap with other users.

#### 2.2 Bar plot visualization

<iframe
  src="{{ '/assets/plots/2_user_cluster_burst_rate.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>

User cluster membership can be reliably used as a feature in our predictive model. Posts from users in specific clusters have demonstrably different burst propensities, making this a powerful signal for classification.




### User Score

<iframe
  src="{{ '/assets/plots/user_score_burst_distribution.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>

Here, you can see the distribution of user scores, where the score measures how similar a user is to the average member of the community using cosine similarity. By hovering over you can see random users belonging to the selected category. The difference in distributions for mobilizing and non-mobilizing cases is statistically significant (p < 0.001), but the effect size is minor, showing that mobilization is not driven by a sharply distinct type of users. Both outcomes are centered around similar similarity values, indicating that users that post negative posts in the first place might be very similar. There is only a slight tendency for mobilization to involve users who are closer to the community average. 

### When should you post ?!?

When is it optimal to post in order to mobilise people ? Time ;) to find out !

<iframe
  src="{{ '/assets/plots/stos_1.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>

The figure shows how the timing of a cross-link relates to whether it triggers mobilization. By hovering over you can see random posts that were posted in that timespan. So we can see that cross-links that lead to a burst of comments from members of the source community are more likely to be created around mid-day, especially from late morning to early afternoon. In contrast, cross-links that do not lead to mobilization are more evenly distributed across the day and occur more frequently in the evening and at night.

To determine whether a cross-link leads to mobilization, we examine commenting activity in a 12-hour window after the link is created. The stronger concentration of mobilization events during mid-day hours suggests that cross-links posted when many users are simultaneously active are more likely to prompt coordinated responses. So time clearly has an impact on burst and with a p-value equal to 8.77e-135 !!!

<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/communitylevel/">← Previous: Community level</a>
  <a class="btn btn-primary" href="/postlevel/">Next: Post level →</a>
</div>
