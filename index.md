---
layout: default
title: The Recipe of a Viral Conflict
subtitle: Understanding Negative Bursts on Reddit
cover-img: /assets/img/reddit.png
---


## Introduction {#top}

### Understanding Negative Bursts on Reddit

What makes some Reddit posts explode into negative bursts, sudden waves of cross-community attention, outrage, or mobilization—while others fade into obscurity? These bursts represent rapid collective reactions that propagate across subreddits, linking otherwise separate communities through conflict or controversy.
{: .text-justify}

Our goal in this project is to uncover the mechanisms behind these viral conflicts. We explore the “recipe” of a negative burst: a combination of content, context, and collective behavior that turns ordinary posts into flashpoints of attention.
{: .text-justify}

To do this, we integrate multiple levels of analysis based on the Reddit Hyperlink Network [<sup>[1]</sup>](#ref), which traces how subreddits reference each other through links and comments. Each level captures a different part of the phenomenon.
{: .text-justify}

### How to define a burst

In this work, we adopt the definition of burst proposed by Hamilton et al. in the paper Community Interaction and Conflict on the Web.
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

At each level, we use both descriptive (visual and statistical) and predictive (model-based) analyses. This step-by-step approach allows us to isolate which dimensions—network position, user profile, or linguistic tone—contribute most to the emergence of a burst.
{: .text-justify}


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

## Post Level {#postlevel}

Once we know who and when one’s talking, let's look look at what they're saying.
In this section, we are interested to explore and to understand which textual, linguistic or emotional properties distinguish posts that trigger a burst from those that do not.
{: .text-justify}

Our goals are to:

- Decode the content of every post and understand their value in making a burst.
- Identify the semantic features that differ most between bursty and non-bursty posts.
- Understand which of these features best explain or predict the probability of triggering a burst.

### Words associated with burst

We've been talking about Reddit's posts, but do we even know what they really talk about ? Let's find out ! In this section, we are interested to decode the content of every post and see how they can influence the probability of making a burst.
{: .text-justify}

Our goals are to:

- Decode the content of every post.
- Understand which words best explain or predict the probability of triggering a burst.

To achieve this, we will take a dataset containing, for each post :

- the source_subreddit, the author, the body's title, the post's body, and the burst parameter.

The dataset is derived using handcrafted_features.csv, tokenized_posts.tsv, and snap.tsv, taking the source_subreddit, the author, the body's title, the post's body, and the burst parameter. You can generate this dataset by running src/scripts/4_create_dataset_words.py
{: .text-justify}

We will also use the dataset glove_word_embeds.txt which contains all the vocabulary and their embeddings.
{: .text-justify}

PLOT

This is what our posts look like for now. Kind of hard to know what the post was about right ?

PLOT

Great, now we can understand a bit better the content of each post. Let's see if that can bring us more information.

PLOT

Here are the words that appear the more frequently in the posts that led to a burst, both in the title of the post, and in the body.
It looks difficult to understand something from it !
{: .text-justify}

The probabilities for the top 10 words in titles and bodies to make a BURST are really close to 1. This makes sense as our dataset is really small (20'702 posts) and the vocabulary is way larger (174'558 different words). Moreover, only 733 of these posts made a burst, which makes only 3.5% of all posts.
Thus, the probability that some posts that made a burst used a word than none other post used must me large (it is 0.33 for using a unique word in their title, and 0.37 in their body).
{: .text-justify}

The single words alone are hard to understand why they would enhance the probability of making a burst... Maybe we should look at what these words represent? We could analyze this using specific features, calculated using the text of the post.
{: .text-justify}

### Conclusion

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

Future work will focus on conducting more robust, and deeper, statistical analyses to better identify which features most effectively explain burst occurrences. If these findings prove meaningful, we may also explore developing a predictive tool capable of estimating whether a post is likely to trigger a burst.
{: .text-justify}


#### References {#ref}

[1] Srijan Kumar, William L. Hamilton, Jure Leskovec, and Dan Jurafsky. 2018. Community Interaction and Conflict on the Web. In WWW 2018: The 2018 Web Conference, April 23–27, 2018, Lyon, France. ACM, New York, NY, USA, 11 pages. [DOI](https://doi.org/10.1145/3178876.3186141)



Cover Image : OpenAI. "DALL·E - Image Generation with Text as Input." [DALL·E](https://openai.com/dall-e). OpenAI, 2023

[<sup>[top]</sup>](#top)
