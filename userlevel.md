---
layout: page
title: User Level
subtitle: Who participates and when ?
permalink: /userlevel/
cover-img: /assets/img/reddit-black.png
---

<div class="page-banner banner-user">
  <div class="page-banner-inner">
    <h1 class="page-title">User behavior as a catalyst for bursts</h1>
    <p class="page-subtitle"></p>
  </div>
</div>


# User Level

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

--- 

### 1. Activity of a user

Does the activity of a user influence the probability of their post to make a burst ?
Let's look into that. What is the effective activity of a user ? Is it best described by the number of subreddits they belong to (ie have already posted in) ? Or by the number of posts they have made ? 
{: .text-justify}

<div style="display: flex; gap: 0px; max-width: 900px; margin: auto; align-items: flex-start;">

  <!-- Plot (fixed & responsive) -->
  <div style="flex: 1; max-width: 450px; height: 320px; overflow: hidden;">
    <iframe
      src="{{ '/assets/plots/2_distribution_users_activity.html' | relative_url }}"
      style="
        width: 1200px;        /* original width of the Plotly plot */
        height: 800px;        /* original height */
        transform: scale(0.38);  /* shrink factor */
        transform-origin: top left;  /* keep everything aligned */
        border: none;
        display: block;
      ">
    </iframe>
  </div>



  <!-- Table -->
  <div style="flex: 1; font-size: 0.7em;">
    <table>
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Number of Posts per Active User</th>
          <th>Number of Subreddits per Active User</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Count of Active Users</td><td>1400</td><td>1400</td></tr>
        <tr><td>Mean</td><td>1.335929</td><td>1.122143</td></tr>
        <tr><td>Std</td><td>2.181380</td><td>0.584531</td></tr>
        <tr><td>Min</td><td>1</td><td>1</td></tr>
        <tr><td>25%</td><td>1</td><td>1</td></tr>
        <tr><td>50%</td><td>1</td><td>1</td></tr>
        <tr><td>75%</td><td>1</td><td>1</td></tr>
        <tr><td>Max</td><td>105</td><td>19</td></tr>
      </tbody>
    </table>
  </div>

</div>

Here, we see that users vary widely in both the number of subreddits they participate in and the number of posts they make. Both distributions are extremely left-skewed: most users are active in very few subreddits (at least 75% are active in only 1) and make very few posts (at least 75% make only 1).
{: .text-justify}

Interestingly, the distributions for the number of subreddits and the number of posts are not identical, which makes sense, as a single user can post multiple times in the same subreddit. Surprisingly, users who are active in the most subreddits do not necessarily make the most posts. For example, out of 14,000 users, 12,855 have posted in only 1 subreddit, while only 11 users have posted in more than 10 subreddits. This means that 91.8% of users are active in just one subreddit, which explains the extreme left-skewness.
{: .text-justify}

Another key observation: regardless of how many subreddits a user participates in or how many posts they make, users show very different burst ratios (the fraction of their posts that trigger a burst).
{: .text-justify}

**Can the number of subreddits a user is active in, or the number of posts they make, influence the probability that one of their posts will trigger a burst?**
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_burst_ratio_subreddits_and_posts_scatter.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Here, we see that the burst ratios vary from 0 to 0.043 when measuring the number of subreddits per user (meaning that on average 4.3% of all the posts from a user who is active in 5 subreddits make a burst) and from 0 to 0.219 when measuring the number of posts per user (meaning that on average 21.9% of all the posts from a user who have posted 22 times make a burst). That indicates that the number of subreddits in which a user is being active or the number of posts they have released may influence the burst ratio, thus the probability of their post to make a burst.
{: .text-justify}

Because we have way more active users with few subreddits and few posts, it is hard to see in details the burst ratios on this plot. Let's find a better way to visualize.
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_users_clusters.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Okay, now we see a bit better. With a K-means algorithm, we are able to distinguish 3 clusters of active users: the active users with a low number of posts (~3) or a low number of subreddits (1), with a medium number of posts (~12) or a medium number of subreddits (~2), and with a high number of posts (~58) or a high number of subreddits (~9).
{: .text-justify}

Interestingly, we observe that posts made by users with low activity (few posts or few subreddits) are more likely to trigger a burst than posts from medium-activity users, and even more than those from high-activity users.
{: .text-justify}

Because our initial distributions are highly skewed and clearly non-normal, we use the Kruskal–Wallis test, a non-parametric method that evaluates whether the medians of multiple groups differ significantly. The results are striking: the p-values are extremely low for both features (2.09e-40 for post counts and 6.41e-10 for subreddit counts). This provides strong statistical evidence that the mean burst ratios differ across the three clusters for both features. In other words, user activity, whether measured by the number of posts or the number of subreddits, clearly influences the probability of a post generating a burst.
{: .text-justify}

Next, to compare the clusters between the two features, we apply the Mann–Whitney U test, which assesses whether two independent groups come from the same distribution. Testing whether the clusters based on posts differ from those based on active users, we obtain a p-value of 0.1172. This indicates that we cannot reject the hypothesis that the two features provide the same information: statistically, they behave very similarly.
{: .text-justify}

Hmm… given how similarly the two features behave across clusters, maybe they are correlated after all. Let’s check and find out!
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/2_subreddits_vs_posts_scatter.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Okay, now the picture becomes clearer.
{: .text-justify}

This plot shows that the number of posts per active user is almost perfectly linear with the number of subreddits. This means that they will have highly similar relationships with other variables in the model.
{: .text-justify}

To formally test this relationship, we ran a Pearson correlation test, which measures the strength of a linear association between two continuous variables. The null hypothesis is that there is no linear correlation between the number of subreddits and the number of posts per active user.
{: .text-justify}

The result is unambiguous: the correlation is highly significant, with a p-value effectively equal to 0. This allows us to confidently reject the null hypothesis and conclude that active users with more subreddits tend to produce proportionally more posts.
{: .text-justify}

Because these two features respond almost identically to changes in user activity, they encode the same information about user activity. Including both would therefore add redundancy rather than explanatory power. We retain only one of them and choose the number of posts per active user, which shows a slightly stronger statistical relationship with burst behavior (lower p-value).
{: .text-justify}

Great, we can thus add the **number of posts per active user** as our second feature to our model!
{: .text-justify}

---

### 2. A moment where you should post ?

When is it optimal to post in order to mobilise people ? Time ;) to find out !

<iframe
  src="{{ '/assets/plots/stos_1.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>

The figure shows how the timing of a cross-link relates to whether it triggers mobilization.  
By hovering over you can see random posts that were posted in that timespan. So we can see that cross-links that lead to a burst of comments from members of the source community are more likely to be created around mid-day, especially from late morning to early afternoon. In contrast, cross-links that do not lead to mobilization are more evenly distributed across the day and occur more frequently in the evening and at night.

To determine whether a cross-link leads to mobilization, we examine commenting activity in a 12-hour window after the link is created.  

The stronger concentration of mobilization events during mid-day hours suggests that cross-links posted when many users are simultaneously active are more likely to prompt coordinated responses. So time clearly has an impact on burst (and with a p-value equal to 8.77e-135!).   
Let's use this feature for our model!


--- 


### 3. A score for each user ?
Reddit users are very different, they have all different interest, different lifestyles, different comportments,...  
We are interested in a way to characterize an user, relative to the rest of Reddit users.  
Let's compute a new feature, called User score, where the score measures how similar a user is to the average member of the community, and this using cosine similarity.  

<iframe
  src="{{ '/assets/plots/user_score_burst_distribution.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>

Here, you can see the distribution of user scores.  
By hovering over you can see random users belonging to the selected category.  
The difference in distributions for mobilizing and non-mobilizing cases is statistically significant (p < 0.001), but the effect size is minor, showing that mobilization is not driven by a sharply distinct type of users.  
Both outcomes are centered around similar similarity values, indicating that users that post negative posts in the first place might be very similar. There is only a slight tendency for mobilization to involve users who are closer to the community average.  
Let's keep this feature for our model, but it would be nice to perform a clustering of users, to group them together...

--- 

### 4. Clustering of the users 


Now, we're interesting in grouping users together. This could be very interesting to better understand the predictions our model will perform.  


Big Question: ***How do we group users together? By their posting frequency? By their karma? Neither!***

Instead, we group them by **which subreddits they participate in**. Think of it like this: if a user bounces between `r/AskReddit`, `r/funny`, and `r/IAmA`, they belong in the same cluster as other users who frequent these same communities; not because they post the same content, but because they **move in the same circles**.

#### 4.1 How We Build the Clusters

User clustering follows a similar mathematical pipeline to subreddit clustering, adapted for user-subreddit participation patterns:

1. **Embed** the data into 300 dimensions (capturing user participation in subreddits)
2. **Compress** with PCA (keep 80% of the information in ~202 dimensions)
3. **Smooth** with UMAP (further reduce to 20 dimensions while preserving structure)
4. **Cluster** using Spectral Clustering (test 10 to 50 clusters and pick the best one)
5. **Validate** using three quality metrics (ensuring robust cluster selection)

The result? Each user gets a **cluster membership** indicating which user community they belong to—a grouping based entirely on their subreddit participation overlap with other users.

--- 

#### 4.2 Bar plot visualization

<iframe
  src="{{ '/assets/plots/2_user_cluster_burst_rate.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>

User cluster membership can be reliably used as a feature in our predictive model. Posts from users in specific clusters have demonstrably different burst propensities, making this a powerful signal for classification.


### Takeaways we keep to build our final recipe ! 


- **User activity matters**: users active in *fewer* subreddits tend to trigger bursts more often.
- **Low posting frequency correlates with bursts**: users with *fewer total posts* show higher burst ratios.
- **Timing matters**: mobilizing cross-links are more likely around **late morning / early afternoon**.
- **User score helps a bit**: statistically different, but the effect is small → keep it as a weak feature.
- **User clusters are informative**: cluster membership captures “same circles” behavior and predicts burst propensity.

<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/communitylevel/">← Previous: Community level</a>
  <a class="btn btn-primary" href="/postlevel/">Next: Post level →</a>
</div>
