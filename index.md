---
layout: page
title: The Recipe of a Viral Conflict
subtitle: Understanding Negative Bursts on Reddit
cover-img: /assets/img/reddit.png
---
<div class="right-menu">
  <a href="#communitylevel">Community Level</a><br>
  <a href="#userlevel">User Level</a><br>
  <a href="#wordlevel">Word Level</a>
</div>

## Introduction {#top}

Today, Wikipedia is part of everybody’s life. It is the first source that most people will check when they want to get information. This website is maintained by volunteers through open collaboration, and what makes its strength, can also bring problems. Wikipedia aims to have a neutral point of view and stay strictly factual but can we guarantee this when anyone can become a contributor? A study [<sup>[1]</sup>](#ref) observed that a large number of Wikipedia editors change their behavior and focus on editing controversial topics when promoted to administrators, they might be biased (consciously or not) and influence these articles. This concern about bias in Wikipedia content leads us to consider how such biases might extend to user interactions with the platform, in the Wikispeedia game.  
{: .text-justify}

Wikispeedia is a game where players are tasked with navigating from one Wikipedia article to another using only internal Wikipedia links. The objective of this game is entertainment, but also allowed to gather data on how humans perceive the semantic distance between different concepts. The paths that players take from the start article to the end article, along with the number of clicks and the time taken, offer valuable insights into the way people relate and categorize information[<sup>[3]</sup>](#ref). We will use this insight to understand the effect of potential political bias. Our study aims to examine the political bias within Wikipedia and its potential impact on Wikispeedia players.
{: .text-justify}


Our dataset is an extensive collection derived from the Wikispeedia game, featuring detailed records on how players moved from one Wikipedia article to another, a process we'll refer to as 'the path' in our subsequent analysis. This dataset encompasses 4,604 Wikipedia articles as they existed in 2007, meticulously documenting user navigation and thereby shedding light on patterns in the pursuit of information. It also captures the duration users spend on these paths, providing a window into their engagement levels and the complexity of the topics encountered. Furthermore, the dataset includes categorizations for each article, facilitating focused studies across a variety of knowledge areas. This rich, layered dataset serves as the foundation for our investigation into potential political biases in Wikipedia's content.
{: .text-justify}

<p align="center">
<img src="assets/img/giphy.gif" alt=""/>
</p>

## Community Level {#communitylevel}
Firstly, let’s define political bias : this refers to a tendency to orient or modify information to make a political position more attractive. To define that, plain text of the articles was assessed in relation to two other well-known sites that reproduce Wikipedia in a politically biased way: [Rationalwiki](https://rationalwiki.org/wiki/Main_Page) and [Infogalactic](https://infogalactic.com/info/Main_Page). According to [Media Bias/Fact check](https://mediabiasfactcheck.com/), these websites are respectively recognized as having a <span style="color: lightcoral">left</span>-wing
 and <span style="color: deepskyblue">right</span>-wing
 bias. After training a natural language processing model (BERT embeddings with SVM for classification) on data scraped from these websites, Wikispeedia articles are classified according to the similarity with the collected text. If it's closer to one compared the other, we assume a political bias in the article. The results are shown below: 
 {: .text-justify}

{% include repart_bias_2a1.html %}

We can see that most of articles in Wikispeedia are similar to Infogalactic and therefore classified as <span style="color: deepskyblue">right</span> wing.
{: .text-justify}

Let's characterize this repartition a bit more precisely and dive deeper in the data. A good way to understand this bias is to look the repartition through each categories of articles to see if there is a notable difference.
{: .text-justify}



{% include repart_bias_categ_2a2(2).html %}



Even though most categories have a clear majority of articles with a <span style="color: deepskyblue">right</span> bias, in a few categories, such as chemistry or railway transport, they account for less than 50%. 
{: .text-justify}

It seems that article categories can have a link with the political bias in the way they are written. It can be for many reasons one of which could be that it comes from the articles' authors. Let's think about it. Wikipedia is collaborative website where anyone can write or complete articles. Who takes personal time to write an article on Wikipedia ? It has to be people passionated or at least interested in the subject. In that case, a chemist or someone really interested in chemistry is more likely to write an article in the correponding category.
{: .text-justify}

This concept becomes particularly pertinent when we turn to politically charged topics like political parties, figures, or events. Here, the contributors could be those who hold strong opinions or affiliations, potentially coloring the articles with their biases.
{: .text-justify}

To put this theory to the test, we specifically zoom in on political figures. They present a straightforward case for categorization based on political affiliations. Our method involved manually classifying political personalities based on their party or ideological leanings, using web sources for accuracy. We then correlated this classification with the perceived bias in their Wikipedia articles. The results of this analysis, revealing the intersection of political affiliation and content bias, are presented below.
{: .text-justify}

{% include repart_bias_pol_2a3_1.html %}

{% include repart_bias_pol_2a3_2.html %}

There is a trend of <span style="color: deepskyblue">right</span>-leaning bias across articles about political figures from various affiliations.
We performed a linear regression analysis to investigate the potential correlation between political affiliations and perceived bias in Wikipedia articles. Although the findings were not conclusively indicative due to the limited size of the dataset, we identified one significant result: the 'affiliation_Center' variable showed a positive correlation with a <span style="color: deepskyblue">right</span>-leaning bias in Wikipedia articles (coefficient = 0.3135, p-value = 0.002). This suggests that individuals with a centrist or no political stance may be more likely to have Wikipedia articles that exhibit a <span style="color: deepskyblue">right</span> bias.

We now have a pretty good overview in the political biases in Wikispeedia articles. We now understand that there are some biases in the way articles are written and they might permeate in the content we consume daily. This raises a crucial question: How do these biases translate into interactive online environments, specifically in games like Wikispeedia? In the next section, we delve into the Wikispeedia Analysis to investigate whether the potential biases in Wikipedia articles affect the way players navigate through this game.
{: .text-justify}


## User Level {#userlevel}

In order to measure how bias affect player during the game we first calculated the average bias of each path and analysed the following key metrics : 
- The percentage of back-clicks
- the mean rating
- the finished percentage 
- the mean time people take.


We correlate these metrics with the political bias of articles on the plot below :

To facilitate comparability, we normalized these metrics to a 0-1 range by dividing each value by its respective maximum, allowing for an equal weighting across the diverse scales of data. With this plot we can visualize the biases of each path relative to one another but cannot visualize absolute performance, since the graph does not display the maximum possible value of a feature.

{% include repart_bias_araigne_3a(2).html %}

Well, this graph is interesting. There are significant differences in the way people navigate through Wikipedia depending on the bias of the article. 
The graph clearly shows that paths with an average <span style="color: lightcoral">left</span>-leaning bias tend to be abandoned more frequently, suggesting that players often give up the game when encountering these articles. This might be attributed to difficulties in finding relevant information, leading to confusion. This theory is supported by the observation that the average time spent on <span style="color: lightcoral">left</span>-biased paths is longer compared to those with <span style="color: deepskyblue">right</span> bias or center biases. Additionally, paths featuring a higher proportion of <span style="color: deepskyblue">right</span>-leaning  articles are associated with more successful game outcomes, indicated by better ratings. However, it's important to consider that <span style="color: deepskyblue">right</span>-bias paths also exhibit a higher frequency of back-clicks, implying that users often do not find the information they initially sought.
{: .text-justify}

This analysis is valuable as it offers preliminary insights into how biases in Wikipedia articles might influence user navigation behavior, revealing preferences in information seeking.
{: .text-justify}
We will now delves deeper into the specific choices players make. 

## Word Level {#wordlevel}

In the Wikispeedia game, the players are given a starting article and destination article randomly. But they are also able to choose their own first and last article. It is the first decision players face and it can already show tendencies. Let's first turn our attention to this aspect of the game. 
{: .text-justify}

Here are the articles the most choosen by the players : 

{% include top25_pages_finished_paths2.html %}

Those articles are all very standard but something caught our attention in the graph.. Let's look take a look at the first and last article chosen by players but only for the political people category. Is there a tendency to choose more <span style="color: deepskyblue">right </span> -wing people or <span style="color: lightcoral">left</span>-wing people?
{: .text-justify}

{% include repart_pol_path_3b1(2).html %}

Well... We didn't expect that.
<p align="center">
<img src="assets/img/dolf.gif" alt=""/>
</p>


The data reveals a striking trend: Adolf Hitler appears as a starting or ending point in the Wikispeedia game far more frequently than any other political figure. It's important to note that this graph uses a logarithmic scale, which underscores the significant disparity in these choices. Assuming that the game proposes all the articles at the same rate, this means that people tend to choose him far more often than any other politcal figure for a staring or ending point. This raises a question: does this pattern indicate a substantial interest in Adolf Hitler among Wikispeedia players, or could it simply be a coincidental outcome?
{: .text-justify}

After performing a t-test on the political figures we can confirm that it is statistically significant as our p-value is close to 0 (10<sup>-62</sup>). 
{: .text-justify}


This strongly suggests that the choice of Adolf Hitler as a starting or ending point in the game is not merely a coincidence or a random occurrence. It looks like there is a specific interest or focus on this particular historical figure within the Wikispeedia gaming community. But why Adolf Hitler and not Napoleon or Jules Cesar ? Well we cannot answer that for sure, but Hitler and the Nazi regime have been extensively depicted in movies, documentaries, books, and on internet, since a long time, keeping his memory alive in the public consciousness. Also Hitler is synonymous with extreme ideologies, genocide, and war. Controversial figures often attract more attention, as people seek to understand the motivations and circumstances behind their actions.
{: .text-justify}

For a Wikispeedia player, it can be fun to make the link between a random topic and Adolf Hitler, which represents a challenge in connecting seemingly unrelated extreme subjects.
It's important to note that interest in such a figure does not necessarily equate to support or admiration.
{: .text-justify}

Having gained insights into the initial and final articles chosen by players in Wikispeedia, we now shift our focus to the in-game decisions made during the course of play. 
{: .text-justify}

### Do people tend to go more on right or left biased articles ?

The graph below displays the distribution of article biases chosen by players during their navigation paths:
{: .text-justify}

{% include political_bias_repartition_in_the_paths.html %}


As anticipated, the paths contain a higher proportion of <span style="color: deepskyblue">right</span>-biased  articles, reflecting the overall greater presence of <span style="color: deepskyblue">right</span>-leaning  content in the dataset.
{: .text-justify}

But is it really the proportions we expected ?
The chi-squared test showed a significant difference in political biases distribution ('<span style="color: deepskyblue">right</span> ', 'center', '<span style="color: lightcoral">left</span>') between all articles and those in the paths, with a p-value near 0 (4.49 • 10<sup>-42</sup>). Despite small percentage shifts, this low p-value implies a non-random bias distribution difference.
The large sample size and consistent distribution across categories contribute to the high statistical significance of this difference. We will now focus on the link between a biased article and the next one.

### Does the bias of current article impact the next step in the path ?
{: .text-justify}

To answer that we are going to make the following analysis: We will take a look at all the articles in the paths available and identify their political bias. Then, we will investigate if the next articles chosen by the player tends to align with the same political bias. The key aspect of this analysis is to determine if there's a pattern where players consistently navigate to articles with similar biases, or if the transition from one article to the next reflects a distribution that roughly matches the overall proportions of biases present in our dataset, as represented by the solid line on our graph.
{: .text-justify}

{% include bias_n_3b3.html %}

People tend to pick articles with a <span style="color: deepskyblue">right</span> bias or no bias more than expected, and less articles with a <span style="color: lightcoral">left</span> bias, no matter what article they come from. Do people tend to avoid articles with a <span style="color: lightcoral">left-leaning</span> bias ? 
We cannot say for sure ; other parameters can come into play. We assumed the expected frequencies to be the overall distribution of bias in all the articles. But is the distribution of links similar to the overall frequency ?

{: .text-justify}

{% include boxplot_left.html %}
{% include boxplot_center.html %}
{% include boxplot_right.html %}
{% include coeff_logistic_regression.html %}

After taking a look at the repartition of the links, and doing a few Chi-square tests, we realized that the we cannot associate the difference of repartition bias in links and in article distribution to randomness. On the other hand, the repartition of bias in links and in paths are similar. Thinking about it, if players chose an article randomly from the page they're on, they would pick randomly between the links available. If more links lead to right-biased articles, they will appear more in the overall paths.   
Simply said, this means that if there is a prevalent proportion of articles with a right bias in the paths, it's not because players tend to choose them more willingly, but just because the amount leading to right biased articles is bigger.

### Conclusion

Our exploration into the realm of political biases in Wikipedia and their potential influence on Wikispeedia players has led us to some intriguing observations. There seems to be a pattern where players' choices within the game are influenced by the political tone of the articles. The political bias in a player's path impacts some of the games statistics such as success rate for example. On the other hand, we cannot say that players tend to choose a certain bias more than expected, as the distribution of their choices correspond to the links available to them. It makes sense, as they cannot know the content of the article, or the political bias within before clicking on the link.
{: .text-justify}

However, it's crucial to remember that these are initial observations and not absolute conclusions. Our determinations of the political affiliations of articles are based on a model we created, which, while useful and pretty accurate, is based using texts taken from websites with known politcal stances. This process assumes that articles resembling the content of these websites share the same bias, which may not capture bias accurately. Detecting or characterizing bias in a text is a difficult task, even for humans.
{: .text-justify}

Acknowledging the exploratory nature of our study, it's evident that further research is necessary. A broader dataset would be invaluable in deepening our understanding of the nuances in player behavior and the motivations behind their choices. Future investigations could aim to more accurately determine how these observed biases in navigation might reflect larger patterns in how people interact with information online, particularly in politically sensitive contexts.
{: .text-justify}


#### References {#ref}

[1] : Das, S., Lavoie, A., & Magdon-Ismail, M. (2016). Manipulation among the arbiters of collective intelligence: How Wikipedia administrators mold public opinion. ACM Transactions on the Web (TWEB), 10(4), 1-25.

[2] Hube, C. (2017, April). Bias in wikipedia. In Proceedings of the 26th International Conference on World Wide Web Companion (pp. 717-721).

[3] West, R., Pineau, J., & Precup, D. (2009, June). Wikispeedia: An online game for inferring semantic distances between concepts. In Twenty-First International Joint Conference on Artificial Intelligence.  
  
Cover Image : OpenAI. "DALL·E - Image Generation with Text as Input." [DALL·E](https://openai.com/dall-e). OpenAI, 2023

[<sup>[top]</sup>](#top)
