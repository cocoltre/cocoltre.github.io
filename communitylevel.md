---
layout: page
title: Community Level
subtitle: How subreddit structure relates to bursts ?
permalink: /communitylevel/
cover-img: /assets/img/reddit-black.png
---

<div class="page-banner banner-foule">
  <div class="page-banner-inner">
    <h1 class="page-title"> Understanding bursts through network structure </h1>
    <p class="page-subtitle"></p>
  </div>
</div>

<a id="top"></a>

# Community Level
First, let's observe how subreddits themselves have an influence on the burst. In this section, we are interested to explore and to understand which subreddits properties distinguish posts that trigger a burst from those that do not.
{: .text-justify}

Our goals are to:

- Identify the key subreddit characteristics that most distinguish bursty from non-bursty posts.
- Understand which of these characteristics best explain or predict the probability of triggering a burst.

<div class="page-outline" markdown="1">

- TOC
{:toc}

</div>

---

### 1. Size of a source subreddit community

Does the size of a subreddit influence the probability of a post to make a burst ?
Let's look into that. What is the effective size of a subreddit ? Is it best described by the number of users it has ? Or by the number of posts it has made ? Indeed, some users are shared between subreddits communities, and some users may post many times in a single subreddit community, so we have to pay attention to these details.
{: .text-justify}

In the following, we will try to answer the initial question with the two definitions.

<div style="display: flex; gap: 0px; max-width: 900px; margin: auto; align-items: flex-start;">

  <!-- Plot (fixed & responsive) -->
  <div style="flex: 1; max-width: 450px; height: 320px; overflow: hidden;">
    <iframe
      src="{{ '/assets/plots/1_distribution_subreddits_size.html' | relative_url }}"
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
          <th>Number of Posts per Subreddit</th>
          <th>Number of Active Users per Subreddit</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Count of Subreddits</td><td>4145</td><td>4145</td></tr>
        <tr><td>Mean</td><td>4.512183</td><td>3.790109</td></tr>
        <tr><td>Std</td><td>26.427213</td><td>18.182336</td></tr>
        <tr><td>Min</td><td>1</td><td>1</td></tr>
        <tr><td>25%</td><td>1</td><td>1</td></tr>
        <tr><td>50%</td><td>1</td><td>1</td></tr>
        <tr><td>75%</td><td>2</td><td>2</td></tr>
        <tr><td>Max</td><td>1159</td><td>707</td></tr>
      </tbody>
    </table>
  </div>

</div>



First, let’s define an “active user” as a user who has posted at least once in a specific subreddit.
{: .text-justify}

Looking at our data, we see that subreddits vary widely in the number of active users and posts they have. Both distributions are extremely left-skewed: most subreddits have very few active users (75% have fewer than 2) and very few posts (75% have fewer than 2 as well). For example, out of 4,145 subreddits, 2,657 have only 1 active user, while only 19 subreddits have more than 100 active users. In other words, 64.1% of subreddits have just a single active user, which explains the strong skewness.
{: .text-justify}

We also see that the distribution of subreddits across number of active users or number of posts is not exactly the same, which makes sense as 1 user can post several times in the same subreddit.
{: .text-justify}

Another key observation: regardless of the number or identity of active users, subreddits show very different burst ratios (the fraction of posts that triggered a burst). The burst ratio allows us to compare communities fairly: it gives the same weight to a subreddit where 1 user made 4 posts and a subreddit where 1 user made just 1 post, focusing on overall subreddit activity rather than individual behavior.
{: .text-justify}

***Can the number of active users or the number of posts in a subreddit influence the probability that a post will trigger a burst?***
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_burst_ratio_users_and_posts_scatter.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Here, we see that the burst ratios vary from 0 to 0.176 (on average 17.6% of all the posts from a community with 81 active users or with 85 posts make a burst). That indicates that the number of active users and posts a subreddit has may influence the burst ratio, thus the probability of a post to make a burst.
{: .text-justify}

Because we have way more subreddits with few users and few posts, it is hard to see in details the burst ratios on this plot. Let's find a better way to visualize.
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_subreddits_clusters.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Okay, now we see a bit better. With a K-means algorithm, we are able to distinguish 3 clusters of subreddits: the subreddits with a low number of posts (~3) or a low number of active users (~3), with a medium number of posts (~203) or a medium number of active users (~113), and with a high number of posts (~902) or a high number of active users (487).
{: .text-justify}

Suprisingly, we see here that if a post is made in a subreddit with a high number of posts, it has more probability to create a burst than in the medium numbered subreddits and way more than in the low numbered subreddits. We also notice that if a post is made in a subreddit with a medium number of active users, it has more probability to create a burst than in the low or high numbered subreddits.
{: .text-justify}

Because our initial distribution is highly skewed and clearly non-normal, we use the Kruskal–Wallis test, a non-parametric method that evaluates whether the medians of multiple groups differ significantly. The results are striking: the p-values are extremely low for both types of sizes (3.2e-38 for post counts and 7.0e-63 for active user counts). This gives us strong statistical evidence that the mean burst ratios differ across the three clusters for both features. In other words, the size of a subreddit, whether measured by the number of posts or by active users, clearly influences the probability of a post generating a burst.
{: .text-justify}

Next, to compare the clusters between the two features, we apply the Mann–Whitney U test, which assesses whether two independent groups come from the same distribution. Testing whether the clusters based on posts differ from those based on active users, we obtain a p-value of 0.7609. This indicates that we cannot reject the hypothesis that the two features provide the same information: statistically, they behave very similarly.
{: .text-justify}

Hmm… given this, maybe the two features are correlated after all. Let’s check and find out!
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/1_users_vs_posts_scatter.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Okay, now the picture becomes clearer.
{: .text-justify}

This plot shows that the number of posts per subreddit is almost perfectly linear with the number of active users. This means that they will have highly similar relationships with other variables in the model.
{: .text-justify}

To formally test this relationship, we ran a Pearson correlation test, which measures the strength of a linear association between two continuous variables. The null hypothesis is that there is no linear correlation between the number of active users and the number of posts per subreddit.
{: .text-justify}

The result is unambiguous: the correlation is highly significant, with a p-value effectively equal to 0. This allows us to confidently reject the null hypothesis and conclude that subreddits with more active users tend to produce proportionally more posts.
{: .text-justify}

Because these two features respond almost identically to changes in subreddit size, they encode the same information about subreddit size. Including both would therefore add redundancy rather than explanatory power. We retain only one of them and choose the number of active users per subreddit, which shows a slightly stronger statistical relationship with burst behavior (lower p-value).
{: .text-justify}

Great, we can thus add the **number of users per subreddit** as our first feature to our model!
{: .text-justify}

---

### 2. Interactions between communities via hyperlinks

The goal now is to analyze how subreddits interact through hyperlinks.

Let's investigate:
- **Who links to whom** (source vs target behavior),
- **How interactions evolve over time**,
- **Which subreddit pairs interact the most**

We then restrict the analysis to burst-labeled posts to answer the following question:

***Do bursts change the structure of subreddit interaction networks?***

This part of the project is exploratory and aims to identify **simple, interpretable community-level features** that can later be used for **burst prediction**.

---

#### 2.1 Dataset Description

In our dataset, each row represents a **hyperlink between two subreddits**, and the `Burst` label is available only for annotated posts.

Let's see what we have in details:  

| Quantity | Count |
|--------|-------|
| Total posts | 831'014 |
| Burst posts | 727 |
| Non-burst posts | 17'976 |
| Unlabeled posts | 812'311 |
| Unique source subreddits | 55'863 |
| Unique target subreddits | 34'026 |

The figure below shows how **hyperlink sentiment (positive vs negative)** overlaps with **burst annotations**, highlighting the strong class imbalance.

<iframe src="{{ '/assets/plots/1_fig1.html' | relative_url }}" width="100%" height="800" style="border:none;"></iframe>

---

#### 2.2 Top Undirected Subreddit Pairs

Let's first examine which **pairs of subreddits interact the most**, ignoring direction (A → B and B → A are counted together).

<iframe src="{{ '/assets/plots/1_fig2.html' | relative_url }}" width="100%" height="750" style="border:none;"></iframe>

Among the **top 20 subreddit pairs**, some exceed **500 interactions**, indicating very strong cross-community activity.

Most of these interactions are **positive**, which is expected given the SNAP dataset’s polarity distribution.  
The pair `drama` ↔ `subredditdrama` stands out with the highest proportion of negative links, which is consistent with their name id.

---

#### 2.3 Source vs. Target Roles Over Time

As all these hyperlinks have a **source** and a **target**...   
We could now think about the question : ***Do subreddits mainly act as sources (linking to others) or targets (being linked to), and whether this changes over time?***

<iframe src="{{ '/assets/plots/1_fig3.html' | relative_url }}" width="100%" height="550" style="border:none;"></iframe>

This very simple plot shows the **monthly source-to-target ratio** for the ten most active subreddits. To understand it, basically :

- **1.0** → only acts as a source  
- **0.0** → only acts as a target  
- **0.5** → balanced behavior  

Nice ! We can clearly observe most top subreddits keep a **very stable role** across time, suggesting persistent structural positions in the network.



Next step could be to summarize this behavior into usable features. Let's compute:

- **Mean source ratio** → represents typical role of the subreddit  
- **Variance** → represents how often the role changes  

<iframe src="{{ '/assets/plots/1_fig4.html' | relative_url }}" width="100%" height="350" style="border:none;"></iframe>

**Key observations:**
- Mean source ratios are strongly polarized near **0 or 1**
- Variance is close to **0 for most subreddits**

We can suggest to keep **only the mean source ratio** as a new feature that will be used by our model, as variance provides little additional information. Indeed variance is nearly zero for the vast majority of communities, so it has limited discriminative value compared to the mean source ratio.  
We already have 3 new features ! Let's continue.

---

### 3. Interactions Leading to Bursts

We now restrict the dataset to posts **with a defined burst label**, keeping only negative hyperlinks.

---

#### 3.1 Burst-Labeled Dataset

| Quantity | Value |
|--------|-------|
| Total labeled posts | 18'703 |
| Burst posts | 727 |
| Non-burst posts | 17'976 |
| Link sentiment | Negative only |

This dataset focuses exclusively on **conflict-driven interactions**.

---

#### 3.2 Monthly Evolution of Bursts

We first compare the number of burst events with the total number of negative hyperlinks over time, just to have a quick idea of the count evolution across time.

<div style="display:flex; justify-content:center;">
  <iframe src="{{ '/assets/plots/1_fig5.html' | relative_url }}" width="100%" height="350" style="border:none;"></iframe>
</div>

Both signals increase over time, reflecting Reddit’s activity growth.  
However, bursts (which counts are at a much lower scale) show **stronger fluctuations**, including a visible drop around **2015**, unlike the smoother growth of negative links.

---

#### 3.3 Source vs. Target Roles for Burst Data

We repeat the role analysis using only burst-labeled interactions.

<iframe src="{{ '/assets/plots/1_fig6.html' | relative_url }}" width="100%" height="550" style="border:none;"></iframe>

Most active subreddits act almost exclusively as **sources**.  
**worldnews** and **news** are notable exceptions, acting primarily as **targets**, suggesting they are frequently referenced by other communities. This is unsurprising: news communities typically avoid targeting other communities to protect their reputation, yet they remain frequently targeted because they cover controversial topics.

---

#### 3.4 Burst-Making Subreddits

We visualize which are the top burst-making communities over time.

<iframe src="{{ '/assets/plots/1_fig7.html' | relative_url }}" width="100%" height="600" style="border:none;"></iframe>

A small group of subreddits (e.g. `SubredditDrama`, `ShitLiberalsSay`, `CircleBroke`) consistently appears across months, indicating that **bursts are concentrated in a few highly active communities**.

---

#### 3.5 Switch from Target to Source

Now, simply out of curiosity, we would like to answer the following question : Do subreddits that are first **targeted** later become **sources** ?

<iframe src="{{ '/assets/plots/1_fig8.html' | relative_url }}" width="100%" height="350" style="border:none;"></iframe>

If we look at the delay distribution, it's pretty clear that most subreddits that switch roles do so within **100 days**.
But then, looking at the fast switch timeline, (when the switch is done under ≤ 7 days after being targeted), we see that their fast transitions occur mainly at the start of the dataset, reflecting missing pre-dataset history rather than true behavior trends. Besides, the number of observations is very low.
This suggests that the effect is likely driven by **dataset boundary effects**, rather than systematic retaliation.

---

### 4. Subreddit Similarity

Can we try to understand how close in subject are the two subreddits ?

<iframe
  src="{{ '/assets/plots/subreddit_similarity_burst_distribution.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>

Here, we can see the distribution of topical similarity between source and target subreddits, measured using cosine similarity.  

Most cross-links connect communities that are already highly similar, with similarity values concentrated toward the upper end of the scale. 
This holds for both mobilizing and non-mobilizing cases. 

It shown that mobilizations are slightly more likely between topically similar communities compared to random pairs. 

But similarity alone does not explain whether a cross-link leads to mobilization. Instead topical alignment appears to be a prerequisite for negative interaction, rather than a driver of escalation.

Clustering the communities could be an interesting idea...

---
### 5. Clustering of the subreddits 

Now we explore community clustering to gain deeper insights into our model's predictions.  

Big Question: 
***How do we group subreddits together? By topic? By size? Neither!***

Instead, we group them by **who participates in them**.  
Think of it like this: if a user bounces between `r/gaming`, `r/pcmasterrace`, and `r/buildapc`, these three communities belong in the same cluster; not because they all talk about games (okay, they do), but because they **share the same people**.

This means our clustering reveals the **invisible network of user overlap** that connects Reddit's communities.

#### 5.1 How We Build the Clusters

We use a mathematical pipeline to turn messy user data into clean, interpretable clusters:

1. **Embed** the data into 300 dimensions (capturing user-subreddit relationships)
2. **Compress** with PCA (keep 95% of the information in ~64 dimensions)
3. **Smooth** with UMAP (further reduce to 20 dimensions while preserving structure)
4. **Cluster** using Spectral Clustering (test 10 to 50 clusters and pick the best one)
5. **Validate** using three quality metrics (making sure we chose wisely)

The result? Each subreddit gets a **cluster membership** telling us which community group it belongs to!


---


#### 5.2 Network vizualisation 


<iframe
  src="{{ '/assets/plots/1_cluster_network.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>

The complete network visualization reveals important patterns about how subreddit clusters interact and generate bursts:

- **Highly variable burst rates across clusters**: Some clusters are significantly more prone to generating bursts than others. For example, cluster 22 exhibits an outgoing burst rate of 22%, demonstrating that certain communities are much more likely to trigger cross-community mobilizations.

- **Size does not determine burst activity**: Interestingly, the largest clusters (in terms of subreddits) are not necessarily the ones with the highest burst rates. Smaller, more tightly-knit communities can be just as (or more) effective at generating bursts, suggesting that community culture and positioning matter more than sheer size.

- **Complex interconnections**: The network shows dense interactions between certain cluster pairs. For instance, clusters 13 and 17 show extensive back-and-forth linking, indicating communities that frequently reference and engage with each other—a pattern likely to amplify burst propagation.

- **Cluster membership as a predictive feature**: These observations suggest that a post's source and target cluster membership are strong indicators of burst likelihood. A post originating from a high-burst cluster (like cluster 22) targeting another active cluster will have different dynamics than one from a low-burst cluster.

**Implication:** Cluster membership can be reliably used as a feature in our predictive model. Posts from specific clusters have demonstrably different burst propensities, making this an informative signal for classification.
We could give to the model a new feature, for each cluster: the membership is 1 when the subreddit that posted is in the cluster, otherwise the membership is 0.



---


### Takeaways we keep to build our final recipe ! 

- The **size, counted in Active Users or Posts, of a Subreddit** can influence the probability of a post to make a burst.
- **Subreddit interaction roles** are highly stable
- Bursts are generated by a **small subset of communities**
- **Mean source ratio** is a strong, interpretable structural feature
- No strong evidence that being targeted directly causes future burst behavior
- **Cluster membership** plays a role in the burst prediction.
These features are retained for downstream burst prediction models.


<p style="text-align:right;">
  <a href="#top"> ⬆ Back to top</a>
</p>

<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/">← Back to introduction</a>
  <a class="btn btn-primary" href="/userlevel/">Next: User level →</a>
</div>
