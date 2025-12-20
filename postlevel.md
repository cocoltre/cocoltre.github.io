---
layout: page
title: Post Level
subtitle: What is said and how it is said ?
permalink: /postlevel/
cover-img: /assets/img/baniere.png
---
<div class="page-banner">
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

Once we know who and when one’s talking, let's look look at what they're saying.
In this section, we are interested to explore and to understand which textual, linguistic or emotional properties distinguish posts that trigger a burst from those that do not.
{: .text-justify}

Our goals are to:

- Decode the content of every post and understand their value in making a burst.
- Identify the semantic features that differ most between bursty and non-bursty posts.
- Understand which of these features best explain or predict the probability of triggering a burst.

## 1. Words associated with burst

We've been talking about Reddit's posts, but do we even know what they really talk about ? Let's find out ! In this section, we are interested to decode the content of every post and see how they can influence the probability of making a burst.
{: .text-justify}

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
            r/hiphopheads Have a question that you need answered? Was it not answered last week, or did not get a satisfying answer? Or a question that you feel is too small to make a new thread for? Maybe something you think everyone but you knows? Ask that question in this thread. Questions must be on topic, concise, and answerable. Answers must be a real answer that solves the question. Do not ask a question that can be covered in the resources section. Some other resources for any terms you may not understand: for specific lyric questions, for questions about songs and sampling, to look through previous mm threads. An infograph explaining how albums leak. What are the different parts of a song? What are the different parts of a song? Thanks to u for more general questions. For questions on making hiphop, subscribe to this pronunciation guide: rza gza jiz zah jhen aiko juh nay ahh ee ko danny brown s ad lib style nujabes new jah bes.
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
Falcao, Monaco, Batmen, wlw, Agureo... We can try to figure out why some of thewe words led to a burst. For instance, on February 21st 2017, Manchester City beat Monaco in eight-goal thriller during a Champions League game, Radamel Falcao's scored and missed a penalty, and Aguero scored twice. We can imagine the tension after such a game.
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

Mmm that's what we thought, the previous words were overrepresented. But here we are, with some other hard-to-understand-why-they-are-here words: glutamate, aiden, wlw, tsn, rnn... Did you know glutamate could be a source of tension and insults ?
{: .text-justify}

For understanding the overall tendance, maybe we should look at what these words represent. We could continue the analysis using specific features, calculated using the text of the posts.
{: .text-justify}

## 2. Visualize semantic features

Now, let's look at the semantical part, how words are shaped, what they represent, etc. 


For each post,