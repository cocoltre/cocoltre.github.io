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

To achieve this, we will take a dataset containing, for each post:

- the source_subreddit, the author, the body's title, the post's body, and the burst parameter.

The dataset is derived using handcrafted_features.csv, tokenized_posts.tsv, and snap.tsv, taking the source_subreddit, the author, the body's title, the post's body, and the burst parameter. You can generate this dataset by running src/scripts/4_create_dataset_words.py
{: .text-justify}

We will also use the dataset glove_word_embeds.txt which contains all the vocabulary and their embeddings.
{: .text-justify}

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/3_top5_posts.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

This is what our posts look like for now. Kind of hard to know what the post was about right ?

<div style="position: relative; width: 100%; max-width: 800px; padding-top: 50%; margin: auto;">
  <iframe
    src="{{ '/assets/plots/3_top5_words.html' | relative_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>

Great, now we can understand a bit better the content of each post. Let's see if that can bring us more information.

TITLE
<img 
  src="{{ '/assets/plots/3_wordcloud1_title.png' | relative_url }}" 
  style="width: 100%; max-width: 800px; height: auto; display: block; margin: auto;" 
  alt="Wordcloud">

BODY
<img 
  src="{{ '/assets/plots/3_wordcloud1_body.png' | relative_url }}" 
  style="width: 100%; max-width: 800px; height: auto; display: block; margin: auto;" 
  alt="Wordcloud">

Here are the words that appear the most frequently in all the posts that led to a burst, both in the title of the post, and in the body.   
Falcao, Monaco, Batmen, wlw, Agureo... We can try to figure out why some of thewe words led to a burst. For instance, on February 21st 2017, Manchester City beat Monaco in eight-goal thriller during a Champions League game, Radamel Falcao's scored and missed a penalty, and Aguero scored twice. We can imagine the tension after such a game.
{: .text-justify}

But still, kind of hard to understand why these words out of all the vocabulary (174'558 different words) are the ones the most tempted to produce a burst... They must have been overrepresented in very few BURST posts.
{: .text-justify}

Let's see if they stay in the top ones, if we look at the words that are present in the most BURST posts (not overall).
{: .text-justify}

TITLE
<img 
  src="{{ '/assets/plots/3_wordcloud2_title.png' | relative_url }}" 
  style="width: 100%; max-width: 800px; height: auto; display: block; margin: auto;" 
  alt="Wordcloud">

BODY
<img 
  src="{{ '/assets/plots/3_wordcloud2_body.png' | relative_url }}" 
  style="width: 100%; max-width: 800px; height: auto; display: block; margin: auto;" 
  alt="Wordcloud">

Mmm that's what we thought, the previous words were overrepresented. But here we are, with some other hard-to-understand-why-they-are-here words: glutamate, aiden, wlw, tsn, rnn... Did you know glutamate could be a source of tension and insults ?
{: .text-justify}

For understanding the overall tendance, maybe we should look at what these words represent. We could continue the analysis using specific features, calculated using the text of the posts.
{: .text-justify}


<iframe
  src="{{ '/assets/plots/semantic_features_treemap.html' | relative_url }}"
  width="100%"
  height="750"
  style="border:none;">
</iframe>

<iframe
  src="{{ '/assets/plots/corr_before.html' | relative_url }}"
  width="100%"
  height="950"
  style="border:none;">
</iframe>

<iframe
  src="{{ '/assets/plots/corr_after.html' | relative_url }}"
  width="100%"
  height="950"
  style="border:none;">
</iframe>



<iframe
  src="{{ '/assets/plots/feature_importance_dropdown.html' | relative_url }}"
  width="100%"
  height="750"
  style="border:none;">
</iframe>




<iframe
  src="{{ '/assets/plots/feature_selection_treemap_dropdown.html' | relative_url }}"
  width="100%"
  height="800"
  style="border:none;">
</iframe>






<iframe
  src="{{ '/assets/plots/model_performance_by_subset.html' | relative_url }}"
  width="100%"
  height="720"
  style="border:none;">
</iframe>


<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/userlevel/">← Previous: User level</a>
  <a class="btn btn-primary" href="/finalrecipe/">Next: Final recipe →</a>
</div>