---
layout: page
title: Post Level
subtitle: What is said and how it is said ?
permalink: /postlevel/
cover-img: /assets/img/reddit-black.png
---
<div class="page-banner banner-post">
  <div class="page-banner-inner">
    <h1 class="page-title">Meaning, emotion, and form interact to create bursts</h1>
    <p class="page-subtitle"></p>
  </div>
</div>


<style>
.plot-btn {
  padding: 6px 12px;
  margin: 0 4px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  cursor: pointer;
}
.plot-btn.active {
  background: #ddd;
  font-weight: bold;
}
</style>

# Post level
Once we know who and when one’s talking, let's look look at what they're saying.
In this section, we are interested to explore and to understand which textual, linguistic or emotional properties distinguish posts that trigger a burst from those that do not.
{: .text-justify}

Our goals are to:

- Decode the content of every post and understand their value in making a burst.
- Identify the semantic features that differ most between bursty and non-bursty posts.
- Understand which of these features best explain or predict the probability of triggering a burst.

<div class="page-outline" markdown="1">

- TOC
{:toc}

</div>


### 1. Words associated with burst

We've been talking about Reddit's posts, but do we even know what they really talk about ? Let's find out ! In this section, we are interested to decode the content of every post and see how they can influence the probability of making a burst.
{: .text-justify}

We have the tokens for each post, but is this helpful.
<div class="reddit-hero">

  <!-- slider -->
  <div class="reddit-slider">

    <button class="nav-btn prev">‹</button>

    <div class="reddit-track">
      <!-- POST 1 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/Pompsy</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            24663 11637 15133 3218
          </h2>

          <p class="reddit-post-body">
            -1 159833 -1 -1 4104 21 4 412 8 10 107 2791 20 12 24 2791 135 205 92 24 59 4 6407 714 22 4 412 8 10 224 6 134 223 2 78 4 65 1308 7 629 163 10 98 397 28 10 1024 542 8 412 5 17 1308 475 182 16 9 1243 10094 1 34027 1861 182 16 4 227 714 8 14813 0 412 32 24 542 4 412 8 27 16 1352 5 0 876 699 58 61 876 7 67 772 10 85 24 487 7 725 7901 475 7 475 37 996 1 6636 2 150 112 934 1485 3640 26 110595 4990 72 3312 6375 53 13 0 179 574 3 4 452 53 13 0 179 574 3 4 452 683 2 735 -1 7 35 608 475 7 475 9 253 23699 4180 2 17 12078 944 83502 -1 105706 91553 130433 159029 86596 129992 18457 17638 22001 11131 24192 1902 186 1881 16238 540 105544 65 44202 41312
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>

      <!-- POST 2 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/lju1977</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            15981 0 1200
          </h2>

          <p class="reddit-post-body">
            -1 22787 227 -1 -1 0 1200 618 181 10 139 207 13 18526 2421 3 1793 0 1200 0 1200 181 186 68 139 19 3370 193 0 3370 3 10256
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>

      <!-- POST 3 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/Miathermopolis</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            98 3 0 88 7961 4632 4336 1742 15682 315 3 23 141 53 991 1 60 10 241 2 4020
          </h2>

          <p class="reddit-post-body">
            -1 -1 44197 2261 -1 76 20 443 4104 47 132 2 636 35 1066 22 1573 15682 930 397 24367 1 34 13 326 4632 1 797 34 170 15 0 1888 337 52 302 137 49 544 24367 109 35 14 1373
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>


      <!-- POST 4 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/throwoneawayagain</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            202 5 2997 2 10060 10043 1971 1647 207 17 6 337 22 51 600
          </h2>

          <p class="reddit-post-body">
            -1 129630 2343 2308 1250 -1 41 76 20 443 4 202 5 45 2424 653 8 46 10 392 7699 2 4 6421 3 1971 45 6 136 340 10 47 3083 43 0 180 118 2 4 6421 3 11109 7699 76 4554 348 2313 7960 0 90 3 6881 1971 2 78 5932 2070 1 119 28 2 30 789 34 13 167 2698 735 1971 55 35525 1971 1425 2 117 340 16229 819 12 0 578 3 340 4614 1 16066 1463 1716 14 290 2705 5 0 340 1539 87 0 5338 775 287 16 6202 7 253 7699 22 6 12 4 3528 2259 1384 3 16066 512 202 379
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>

      <!-- POST 5 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/TapirLiu</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            18 26 7303 164 3571 11 2920 499 253 849 1 340 499 1539 76 1050 58 6790
          </h2>

          <p class="reddit-post-body">
            -1 -1 -1 -1 27 387 495 1625 194 49 58 2561 9 72 2 78 0 499 936 35 1237 58 1839 152 4 81 184 1396 109 73 499 2054 6 81 498 567 152 4 99 804 1396 69 0 206 735 36 106 0 373 6184 1868 720 76 764 2 117 104 2 90 498 499 2446 189 5 0 356 338 247 76 4557 99 1103 9 4 65 164 76 961 99 52 9 0 164 359 300 1 2444 1 76 62 745 30 121 2 78 157 2388 0 65 164 111 28 12 138 152 4 1396 99 804 69 76 959 9 1 9720 7 373 355 1 111 58 6790 53 3474 100 76 78 22 53 2561 76 27 751 2 267 30 135 164 59 35 1396
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>

      
    </div>

    <button class="nav-btn next">›</button>
  </div>

  <div class="reddit-counter">
    <span class="current">1</span> / <span class="total">5</span>
  </div>
</div>



This is what our posts look like for now. Kind of hard to know what the post was about right ? 

<div class="reddit-hero">

  <!-- slider -->
  <div class="reddit-slider">

    <button class="nav-btn prev">‹</button>

    <div class="reddit-track">
      <!-- POST 1 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/Pompsy</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            Moronic Monday, January 20th
          </h2>

          <p class="reddit-post-body">
            r/hiphopheads [httplink] Have a question that you need answered? Was it not answered last week, or did not get a satisfying answer? Or a question that you feel is too small to make a new thread for? Maybe something you think everyone but you knows? Ask that question in this thread. Questions must be on topic, concise, and answerable. Answers must be a real answer that solves the question. Do not ask a question that can be covered in the resources section. Some other resources for any terms you may not understand: for specific lyric questions, for questions about songs and sampling, to look through previous mm threads. An infograph explaining how albums leak. What are the different parts of a song? What are the different parts of a song? Thanks to u for more general questions. For questions on making hiphop, subscribe to this pronunciation guide: rza gza jiz zah jhen aiko juh nay ahh ee ko danny brown s ad lib style nujabes new jah bes.
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>

      <!-- POST 2 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/lju1977</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            Fearing the truth
          </h2>

          <p class="reddit-post-body">
            r/christianity4real The truth shall set you free. Why are christians afraid of telling the truth? The truth set s people free from sin, including the sin of homosexuality.
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>

      <!-- POST 3 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/Miathermopolis</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            Think of the most embarrassing, hilarious, nasty, etc., fart story of your life. What happened, and were you able to recover?
          </h2>

          <p class="reddit-post-body">
            I was reading [httplink]. Would love to hear more funny or crazy fart stories. Everyone farts, and they are often hilarious, and sometimes they come at the worst possible time. Please help me enjoy farts even more by sharing.
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>


      <!-- POST 4 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/throwoneawayagain</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            Post in suggests to recycle spoiled milk. Explain why this is possible, or just wrong.
          </h2>

          <p class="reddit-post-body">
            r/askscience So I was reading a post in which linked, saying that if you added yogurt to a gallon of milk, which is going bad, you would wake up the next day to a gallon of edible yogurt. I’ve seen recipes detailing the use of sour milk to make cottage cheese and such, but to my knowledge they are using raw u milk. When pasteurized milk starts to go bad, isn’t it the result of bad bacteria and pathogens leaving waste by-products, resulting in the bad taste? Could the prescribed method actually be viable for making yogurt, or is it a potentially dangerous mix of pathogens? Original post below.
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>

      <!-- POST 5 -->
      <div class="reddit-card">

        <div class="reddit-card-header">
          <div class="reddit-user">
            <img src="{{ '/assets/img/batman.svg' | relative_url }}" alt="user avatar">

            <div class="reddit-user-meta">
              <strong>u/TapirLiu</strong>
              <span>commented on <a href="#">post</a></span>
            </div>
          </div>

          <div class="reddit-logo">
            <img src="{{ '/assets/img/reddit-logo.svg' | relative_url }}" alt="Reddit">
          </div>
        </div>

        <div class="reddit-card-body">
          <h2 class="reddit-post-title">
            As an indie game developer with weak art-making ability and bad art taste, I’m some depressed.
          </h2>

          <p class="reddit-post-body">
            Can anyone, especially artists, give me some suggestions on how to make the art feeling more comfortable? Some facts got a very high score, even its art presentation is very simple; however, got a much lower score than the old u one. After the above polished failure release, I decided to go back to use simple art styles again. In the past several months, I devoted much effort on a new game. I spent much time on the game level design and programming, and I also tried my best to make better arts. The new game really, but it still got a score much lower than I expected on. And screenshots for above games and really some depressed. What improvements should I make, or what suggestions I can follow to let my last game get more score?
          </p>
        </div>


        <div class="reddit-card-footer">
          <span>⬆ upvote</span>
          <span>💬 replies</span>
        </div>

      </div>

      
    </div>

    <button class="nav-btn next">›</button>
  </div>

  <div class="reddit-counter">
    <span class="current">1</span> / <span class="total">5</span>
  </div>
</div>

Great, now we can understand a bit better the content of each post. Let's see if that can bring us more information.

<div style="text-align:center; margin-bottom:1rem;">
  <button class="plot-btn active" id="btn-title1" onclick="showPlot1('title')">Title</button>
  <button class="plot-btn" id="btn-body1" onclick="showPlot1('body')">Body</button>
</div>

<img
  id="img-title1"
  src="{{ '/assets/plots/3_wordcloud1_title.png' | relative_url }}"
  style="width:100%; max-width:800px; height:auto; display:block; margin:auto;"
  alt="Wordcloud Title">

<img
  id="img-body1"
  src="{{ '/assets/plots/3_wordcloud1_body.png' | relative_url }}"
  style="width:100%; max-width:800px; height:auto; display:none; margin:auto;"
  alt="Wordcloud Body">

<script>
function showPlot1(which) {
  document.getElementById("img-title1").style.display =
    which === "title" ? "block" : "none";
  document.getElementById("img-body1").style.display =
    which === "body" ? "block" : "none";

  document.getElementById("btn-title1").classList.toggle("active", which === "title");
  document.getElementById("btn-body1").classList.toggle("active", which === "body");
}
</script>



Here are the words that appear the most frequently in all the posts that led to a burst, both in the title of the post, and in the body.   
Falcao, Monaco, Batmen, Agureo... We can try to figure out why some of these words led to a burst. For instance, on February 21st 2017, Manchester City beat Monaco in eight-goal thriller during a Champions League game, Radamel Falcao's scored and missed a penalty, and Aguero scored twice. We can imagine the tension after such a game.
{: .text-justify}

But still, kind of hard to understand why these words out of all the vocabulary (174'558 different words) are the ones the most tempted to produce a burst... They must have been overrepresented in very few BURST posts.
{: .text-justify}

Let's see if they stay in the top ones, if we look at the words that are present in the most BURST posts (not overall).
{: .text-justify}



<div style="text-align:center; margin-bottom:1rem;">
  <button class="plot-btn active" id="btn-title2" onclick="showPlot2('title')">Title</button>
  <button class="plot-btn" id="btn-body2" onclick="showPlot2('body')">Body</button>
</div>

<img
  id="img-title2"
  src="{{ '/assets/plots/3_wordcloud2_title.png' | relative_url }}"
  style="width:100%; max-width:800px; height:auto; display:block; margin:auto;"
  alt="Wordcloud Title">

<img
  id="img-body2"
  src="{{ '/assets/plots/3_wordcloud2_body.png' | relative_url }}"
  style="width:100%; max-width:800px; height:auto; display:none; margin:auto;"
  alt="Wordcloud Body">

<script>
function showPlot2(which) {
  document.getElementById("img-title2").style.display =
    which === "title" ? "block" : "none";
  document.getElementById("img-body2").style.display =
    which === "body" ? "block" : "none";

  document.getElementById("btn-title2").classList.toggle("active", which === "title");
  document.getElementById("btn-body2").classList.toggle("active", which === "body");
}
</script>

Mmm that's what we thought, the previous words were overrepresented. But here we are, with some other hard-to-understand-why-they-are-here words: glutamate, aiden, tsn, rnn... Did you know glutamate could be a source of tension and insults ?
{: .text-justify}

Now, let’s dig deeper: what do these words really tell us? We can find out through a semantic analysis of the posts.
{: .text-justify}

---

### 2. Visualize semantic features

Now, let's look at the semantical part, how words are shaped, what they represent, etc. 


For each post, we have 86 different semantic features! It's a lot, but let's try to explain a bit what they represent. 

- **Textual properties**: The first 18 features represent how the post is constructed. These are mostly surface statistics about the string, not really the “meaning”.   
We have properties of length (number of characters, of words, of sentences,..) or ratios (fraction of whitespaces, digits, uppercase chars,..) and features representing the variety (number of unique words, fraction of stopwords, number of long words,..).
- **VADER computed features**: The 3 next features represent sentiment calculated by VADER library. It describes how much of the text is perceived as positive / neutral / negative.  
- **LIWC computed features**: These 65 features correspond to different themes (adverbs, emotions, social, etc.) where words allow to compute a score for each post, on each oh these themes. LIWC use a dictionnary to compute these scores.

We can visualize these features in a different way: 
<iframe
  src="{{ '/assets/plots/3_semantic_features_treemap.html' | relative_url }}"
  width="100%"
  height="600"
  style="border:none;">
</iframe>


As you can see, it's a LOT !!  
As you remember, we're interested in finding the features that are the most relevant to predict a burst.  
Here, it will make sense to try to find, among these features, the one that are more explainative, instead of inventing or computing new features, right ? 

---

### 3. Feature selection
After the preprocessing of these features, our goal is to select the most informative ones. We explore several simple strategies:  
- **Manual pruning** (human judgement): We look at the correlation matrix to spot features that tell almost the same story. When several features are very similar, we keep one and remove the redundant ones, within each subgroup precedently cited. 
- **Univariate selection** (one feature at a time): For each feature, we compare its typical values in burst posts vs non-burst posts. Features showing a strong difference between the two groups are good candidates.
- **Offline selection** (using the label *burst* directly, but without training a model): We rank features by how strongly they relate to the target *burst*, for example:
    - by their correlation with the *burst* label
    - by mutual information, which can capture more complex relationships (not only linear ones).
- **Online forward selection** (step-by-step with a model): We start with no features, then add them one by one, each time keeping the feature that brings the biggest improvement in prediction. We stop when adding more features no longer helps much.


#### 3.1 Example of selection: Manual Pruning
For example, for the first idea, we are interested in pruning this *big* correlation matrix. 

We try to remove obvious duplicates while preserving interpretable representatives across feature families. In parallel, we considered which features are most relevant to our research question and predictive objective, and which ones can be removed because they are either redundant or weakly connected to our task.

<iframe src="{{ '/assets/plots/3_corr_before.html' | relative_url }}" width="100%" height="700" style="border:none;"> </iframe> 


We try to remove obvious duplicates while preserving interpretable representatives across feature families. In parallel, we considered which features are most relevant to our research question and predictive objective, and which ones can be removed because they are either redundant or weakly connected to our task. 


<iframe src="{{ '/assets/plots/3_corr_after.html' | relative_url }}" width="100%" height="700" style="border:none;"> </iframe>

Pruning clearly breaks up the big correlation blocks, especially those driven by textual properties, and keep a lower number of relevant LIWC thematics features.
So the remaining matrix is less redundant and easier to read. That said, 47 variables is still a lot for a sparse signal like “burst,” and some clusters remain (e.g., LIWC families with overlapping constructs).


---
#### 3.2 Implement each strategy
After applying all of these different ideas, we can look at the top 20 most informartive features, according to each ranking.

Each bar represents how strongly a feature is associated with the burst label according to a given scoring criterion.
Using the dropdown menu, we can switch between methods and observe that some features often appear among the most relevant, while others are specific to a single criterion.

This comparison helps us understand which semantic features are repeatedly highlighted as important, and which ones depend on the selection strategy used.

<iframe
  src="{{ '/assets/plots/3_feature_importance_dropdown.html' | relative_url }}"
  width="100%"
  height="650"
  style="border:none;">
</iframe>

We can also visualize the features kept by each ranking per group, and some different unions of features. 

For instance, if we take:
- the top-20 features from the univariate ranking, and
- the top-20 features from forward selection,  
their union gives 33 features (because 7 features are shared, so it’s 20 + 20 − 7).

<iframe
  src="{{ '/assets/plots/3_feature_selection_treemap_dropdown.html' | relative_url }}"
  width="100%"
  height="650"
  style="border:none;">
</iframe>


A couple of things stand out:
- Mutual information picks only LIWC features in its top-20, meaning it mostly finds signal in the types of words used (themes/categories), rather than in basic text length or sentiment.
- The univariate and correlation rankings end up being almost identical here, which suggests that the features that differ the most between burst vs non-burst are also the ones most directly correlated with the burst label.
- The forward-selected features appear more uniformly distributed about the different subgroups: some are LIWC, some are text properties, without being correlated, and we still have 1 VADER feature to represent the sentiment perceived by the post.
- The manually-selected and the unions of features give a higher number of features. We will try to understand if it's necessary to keep all of them of if we can restrict us to a smaller subset.

---

### 4. Model Analyses
Now that we have several “shortlists” of features, the next question is simple:  

**How many features do we really need to predict a burst?**   
We’d like to keep the feature set as small as possible, while staying as close as possible to the performance of the full 86-feature model!

#### 4.1 Feature sets

Here are all the subsets we will test:  

| Dataset | Number of features |
|---|---:|
| Univariate selection (top 20) | 20 |
| Correlation-based selection (top 20) | 20 |
| Mutual information selection (top 20) | 20 |
| Forward selection (top 20) | 20 |
| Manual selection after correlation-matrix pruning | 47 |
| Univariate + forward union | 33 |
| Univariate + manual union | 59 |
| Forward + manual union | 56 |
| Union of all methods | 69 |
| Full feature set | 86 |


#### 4.2 Models

To avoid conclusions that depend on a single algorithm, we test several standard classifiers:

- Logistic Regression: the “basic” model. Fast, simple, easy to read, but it can miss messy patterns.
- Random Forest: a bunch of decision trees voting together. One tree can be dumb, but 500 trees together are usually solid. 
- Histogram Gradient Boosting: trees too, but built one after another, each new tree fixes the previous mistakes.   
- XGBoost: boosted trees on steroids. Same “fix mistakes step by step” idea, but super optimized and often performs best if tuned.  

We're using PR-AUC and ROC-AUC to evaluate the performances. 
- **ROC-AUC**: “how well the model ranks positives above negatives” overall. A 0.5 performance is equivalent to a model classiying burst randomly, and 1.0 would be perfect.
- **PR-AUC**: “how clean your positives are when positives are rare” (precision vs recall). Usually the more honest metric when burst is rare (our case, based on a quite imbalanced dataset).

#### 4.3 Results 

The results are shown in the plot below.   
The **last column** is the reference: the model trained on **all 86 features**.  
The **first four columns** are the four different **top-20** selections.  
Then we have the **manual-pruned** set (47 features), and finally the different **unions**.



<iframe
  src="{{ '/assets/plots/3_model_performance_by_subset.html' | relative_url }}"
  width="100%"
  height="720"
  style="border:none;">
</iframe>

Across all subsets, **XGBoost is consistently the strongest model**.  

On the feature selection side:  
- **Mutual information** performs the worst here (both ROC-AUC and PR-AUC).  
- **Univariate** and **correlation-based** selection give almost the same results, which makes sense, because they tend to pick very similar (and often redundant) features.
- The most interesting result is the **forward-selected top-20** subset: it gives a clear boost in PR-AUC, and gets very close to the performance of much larger feature sets (unions, and even the full 86-feature set).

The **forward_top20** subset achieves performance that is almost as good as using all 86 features.    
So in practice, we can reduce the feature space by a factor of ~4, while keeping nearly the same predictive power.  

In other words: **these 20 features seem to capture most of the signal needed to detect bursts!**. 

--- 

#### 4.4 But what do these 20 features actually capture?

To better understand *why* the forward-selected top-20 features work so well, we can try to understand what each feature represents in practice, and how it may relate to a Reddit post becoming widely discussed or shared. 



| Feature | What it measures | Why it may contribute to a burst |
|---|---|---|
| Fraction of digits | Proportion of numbers in the text | Numbers often signal evidence, statistics, dates, prices, or scores. These posts are easy to quote, verify, or challenge, which fuels discussion. |
| Fraction of uppercase characters | Use of capital letters | Capitals add emphasis or urgency (sometimes perceived as shouting), often seen in provocative or emotionally charged posts. |
| Fraction of white spaces | Overall spacing and structure | Captures writing style: compact, punchy posts versus long explanations or list-like formats. Structure can affect readability and shareability. |
| Number of long words (≥ 6 chars) | Lexical complexity | Distinguishes more formal, technical explanations from simple rants or memes. Both styles can burst, but in different communities. |
| VADER compound | Overall sentiment polarity | Strongly positive or negative tone often signals enthusiasm or controversy, both of which increase engagement and cross-subreddit attention. |
| LIWC_Pronoun | Overall use of pronouns | Indicates how personal or social the post is. Posts focused on people rather than abstract topics tend to attract more reactions. |
| LIWC_I | First-person singular (“I”) | Personal stories, experiences, or confessions are highly relatable and often spark discussion. |
| LIWC_We | First-person plural (“we”) | Signals group identity or shared experience, which can mobilize communities and create “us vs them” dynamics. |
| LIWC_You | Direct address (“you”) | Creates confrontation or direct engagement with the reader, often increasing emotional response and debate. |
| LIWC_Past | References to the past | Mentions of past events, incidents, or decisions can resurface old controversies and reignite discussions. |
| LIWC_Adverbs | Use of adverbs | Adds intensity, subjectivity, or emphasis (e.g., “clearly”, “extremely”), reinforcing persuasive or emotional narratives. |
| LIWC_Quant | Quantifiers (“all”, “many”, “none”) | Strong generalizations make claims easier to argue for or against, increasing comment activity. |
| LIWC_Social | Social-related words | Language about people, groups, or relationships provides material for social judgment and collective discussion. |
| LIWC_Insight | Thinking and reasoning words | Indicates interpretation or analysis (“think”, “realize”), often used in explanatory or opinionated posts that invite debate. |
| LIWC_Cause | Causal language | Suggests explanations or blame (“because”, “therefore”), which encourages counter-arguments and discussion. |
| LIWC_Motion | Action-related words | Helps build narratives with events and actions, making posts more story-like and engaging. |
| LIWC_Space | Spatial references | Anchors stories in places or contexts, which increases concreteness and memorability. |
| LIWC_Work | Work-related vocabulary | Topics related to jobs, careers, or productivity are broadly relatable and often spark comparison and debate. |
| LIWC_Leisure | Leisure and hobbies | Shared interests (games, sports, entertainment) spread easily across communities. |
| LIWC_Home | Home and everyday life | Familiar, everyday contexts increase identification and cross-community resonance. |


Overall, these features suggest that bursting posts are not just about *what* is said, but *how* it is said:  
emotion, personal stance, social framing, and concrete storytelling all play a key role.


### Takeaways we keep to build our final recipe ! 

- Bursty posts have **distinct lexical “signatures”** (specific words/topics recur in burst cases).
- A compact set of **semantic + linguistic features** is enough to capture most of the signal.
- **Forward-selected top-20 features** performs almost as well as using all 86 → strong dimensionality reduction.
- **XGBoost** is the most consistent model across subsets; **PR-AUC** is the most relevant metric under heavy imbalance.

These 20 features are retained for our burst prediction model.


We're close to the end now, ready to test the model?

<hr>

<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px">
  <a class="btn btn-default" href="/userlevel/">← Previous: User level</a>
  <a class="btn btn-primary" href="/finalrecipe/">Next: Final recipe →</a>
</div>