---
layout: page
title: Post Level
subtitle: What is said and how it is said
permalink: /postlevel/
---


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


<iframe
  src="{{ '/assets/plots/semantic_features_treemap.html' | relative_url }}"
  width="100%"
  height="750"
  style="border:none;">
</iframe>

<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/userlevel/">← Previous: User level</a>
  <a class="btn btn-primary" href="/finalrecipe/">Next: Final recipe →</a>
</div>