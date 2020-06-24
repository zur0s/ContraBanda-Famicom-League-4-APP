<p align="center"><img src="https://camo.githubusercontent.com/f76efe49567cbfdfb118abdf30519784351632f5/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f63666c346c6f676f2e706e67"></img></p>

Click the link to watch [Live Demo](https://contrabanda-famicom-league-app.web.app/).

## [](#about-project)ABOUT PROJECT

The CFL \# 4 App is my first major project since I started learning JavaScript with a view to changing my career path. The application was built using React and the Firebase cloud service.

### [](#what-is-the-cfl4-app)WHAT IS THE CFL\#4 APP?

The CFL \# 4 App is a SPA application that was created to manage the ContraBanda Famicom League tournament.

### [](#what-the-hell-is-contrabanda-famicom-league)WHAT THE HELL IS CONTRABANDA FAMICOM LEAGUE?

Time for a lot of explanation! For over 15 years I have been an active member of the community gathered in Poland around the Famicom console. We are called ContraBanda and since 2009 we organize every year FamiCON - a 5-days-fan convention where we play games from our beloved console.

Four years ago, for the first time at our convention, I organized a 8-bit e-sport tournament. Eight teams compete for the Cup and the title of the best players in 8-bit games in Poland.

The tournament consists of 3-person teams that are divided into two groups: green and red. As in sports competitions, the two best teams go into the knockout phase. We then play the semi-finals, the match for the third place and the final.

I think that along with the description of my application, the tournament rules will become transparent to you.

If you want to read more about the tournament, click [here](http://forum.contrabanda.eu/index.php?topic=1096.0) (PL lang).

### [](#why-i-made-this-application)WHY I MADE THIS APPLICATION?

Over a year ago, I decided to change my career path and learn programming at home. After a few months of learning, I needed a stimulus, a project in which I would engage enthusiastically and teach a lot. I decided to create an application in the language I am learning (JS) that would improve the running of my tournament.

React's learning when I creating this project became pleasant for me, although sometimes I came across a huge wall that I had to break somehow (preferably with a jackhammer!)

That's how my first serious application came about. I encourage you to trace it. It can be successfully applied to a similar format of 8-team games! What if there are fans of Atari, Commodore or maybe Se .... no, we don't like Sega!

## [](#installation)INSTALLATION

    $ git clone https://github.com/ zur0s/ContraBanda-Famicom-League-4-APP.git
    $ cd ContraBanda-Famicom-League-4-APP
    $ npm i

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### [](#json-configuration)JSON CONFIGURATION

The application works using Realtime Database in the Firebase service. For this purpose I have prepared the appropriate JSON file that contains the necessary data for the tournament. The file contains data array of arrays with necessary objects. It consists of four main parts:

#### [](#1-games-section-contains-sixteen-objects-with-games-data)1\. GAMES SECTION (contains sixteen objects with games data)

<div class="highlight highlight-source-json">

<pre><span class="pl-s"><span class="pl-pds">"</span>games<span class="pl-pds">"</span></span>: [
    {
      <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Warpman<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-c1">1</span>,
      <span class="pl-s"><span class="pl-pds">"</span>year<span class="pl-pds">"</span></span>: <span class="pl-c1">1985</span>,
      <span class="pl-s"><span class="pl-pds">"</span>developer<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Namco<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>gameMode<span class="pl-pds">"</span></span>: [
        <span class="pl-s"><span class="pl-pds">"</span>TagTeam<span class="pl-pds">"</span></span>,
        <span class="pl-s"><span class="pl-pds">"</span>DeathMatch<span class="pl-pds">"</span></span>
      ]
    },
  <span class="pl-ii">...</span>
  ]</pre>

</div>

#### [](#2-teams-section-contains-eight-objects-with-teams-data)2\. TEAMS SECTION (contains eight objects with teams data)

<div class="highlight highlight-source-json">

<pre> <span class="pl-s"><span class="pl-pds">"</span>teams<span class="pl-pds">"</span></span>: [
    {
      <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-c1">1</span>,
      <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Amarena<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>estDate<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>23-04-2018<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>players<span class="pl-pds">"</span></span>: [
        <span class="pl-s"><span class="pl-pds">"</span>Pieseu<span class="pl-pds">"</span></span>,
        <span class="pl-s"><span class="pl-pds">"</span>Dred<span class="pl-pds">"</span></span>,
        <span class="pl-s"><span class="pl-pds">"</span>Preki<span class="pl-pds">"</span></span>
      ],
      <span class="pl-s"><span class="pl-pds">"</span>genre<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Shumps<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>logo<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>static/amarena.png<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>teamColor<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>#FAB23C<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>stats<span class="pl-pds">"</span></span>: {
        <span class="pl-s"><span class="pl-pds">"</span>averageAge<span class="pl-pds">"</span></span>: <span class="pl-c1">25.6</span>,
        <span class="pl-s"><span class="pl-pds">"</span>galagaRatio<span class="pl-pds">"</span></span>: <span class="pl-c1">0.49</span>,
        <span class="pl-s"><span class="pl-pds">"</span>allMatches<span class="pl-pds">"</span></span>: <span class="pl-c1">6</span>,
        <span class="pl-s"><span class="pl-pds">"</span>allWins<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
        <span class="pl-s"><span class="pl-pds">"</span>allLoses<span class="pl-pds">"</span></span>: <span class="pl-c1">6</span>,
        <span class="pl-s"><span class="pl-pds">"</span>allGames<span class="pl-pds">"</span></span>: <span class="pl-c1">26</span>,
        <span class="pl-s"><span class="pl-pds">"</span>wonGames<span class="pl-pds">"</span></span>: <span class="pl-c1">8</span>,
        <span class="pl-s"><span class="pl-pds">"</span>lostGames<span class="pl-pds">"</span></span>: <span class="pl-c1">18</span>,
        <span class="pl-s"><span class="pl-pds">"</span>winsInRow<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
        <span class="pl-s"><span class="pl-pds">"</span>awards<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Group stage<span class="pl-pds">"</span></span>
      }
    },
    <span class="pl-ii">...</span>
 ]</pre>

</div>

#### [](#3-schedule-data-contains-sixteen-match-objects)3\. SCHEDULE DATA (contains sixteen "match" objects)

<div class="highlight highlight-source-json">

<pre> <span class="pl-s"><span class="pl-pds">"</span>schedule<span class="pl-pds">"</span></span>: [
    {
      <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-c1">1</span>,
      <span class="pl-s"><span class="pl-pds">"</span>group<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>16:00<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>team1<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>PozNinjaki<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>team1ID<span class="pl-pds">"</span></span>: <span class="pl-c1">8</span>,
      <span class="pl-s"><span class="pl-pds">"</span>scoreTeam1<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
      <span class="pl-s"><span class="pl-pds">"</span>team2<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Z Życia Wzięci<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>team2ID<span class="pl-pds">"</span></span>: <span class="pl-c1">7</span>,
      <span class="pl-s"><span class="pl-pds">"</span>scoreTeam2<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
      <span class="pl-s"><span class="pl-pds">"</span>winner<span class="pl-pds">"</span></span>: <span class="pl-c1">null</span>
    },
    <span class="pl-ii">...</span>
 ]</pre>

</div>

#### [](#4-standings-contains-two-array-with-standings-data)4\. STANDINGS (contains two array with standings data)

<div class="highlight highlight-source-json">

<pre><span class="pl-s"><span class="pl-pds">"</span>standings<span class="pl-pds">"</span></span>: [
   [
     {
       <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-c1">8</span>,
       <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>PozNinjaki<span class="pl-pds">"</span></span>,
       <span class="pl-s"><span class="pl-pds">"</span>matches<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>points<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>gamesFor<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>gamesAgainst<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>
     },
     {
       <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-c1">7</span>,
       <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Z Życia Wzięci<span class="pl-pds">"</span></span>,
       <span class="pl-s"><span class="pl-pds">"</span>matches<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>points<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>gamesFor<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>gamesAgainst<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>
     },
     {
       <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-c1">4</span>,
       <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Mecenasi z Piaseczna<span class="pl-pds">"</span></span>,
       <span class="pl-s"><span class="pl-pds">"</span>matches<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>points<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>gamesFor<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>gamesAgainst<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>
     },
     {
       <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-c1">5</span>,
       <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>The Resistance<span class="pl-pds">"</span></span>,
       <span class="pl-s"><span class="pl-pds">"</span>matches<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>points<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>gamesFor<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>,
       <span class="pl-s"><span class="pl-pds">"</span>gamesAgainst<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>
     }
   ],
   <span class="pl-ii">...</span>
]</pre>

</div>

## [](#key-features)KEY FEATURES

The application allows the graphic implementation of the tournament. The user controls the match result, can view various regularly updated statistics. After the group stage of the tournament, the schedule of the final phase is automatically updated. The information bar module allow to show information for teams or audience. User can also start playing the tournament jingle or change theme of the application.

The application consists of three main components: Match App, Game History and Stats Centre. Below is a brief overview of each section.

## [](#how-to-use)HOW TO USE

<g-emoji class="g-emoji" alias="exclamation" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2757.png">❗</g-emoji> The application is built to be displayed on desktops due to its intended use, the appropriate resolution is 1368x768 and higher. It is possible to write media query for mobile devices, but they are not a main target for this app.

#### [](#1-match-app)1\. MATCH APP

This is the root of the application that we can display on the projector screen during the tournament. Let's follow everything that we see on the screen:

#### [](#table-component)TABLE COMPONENT

<p align="center"><img src="https://camo.githubusercontent.com/339ea07b094cf59a30dfb73a2a38afcdf18eac45/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f7461626c6563666c342e706e67"></img></p>

The table component contains an ordered list of teams in each group. Two-stage sorting was used here: by number of points and game balance. The table is updated after each match. The group view changes depending on the match being played. Two places that giving promotion to semifinals are marked in blue.

#### [](#timer-component)TIMER COMPONENT

[![](https://camo.githubusercontent.com/344934217d2afe788944285ada1067eb400ca3f3/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f54696d6572436f6e7461696e65722043464c344150502e706e67)](https://camo.githubusercontent.com/344934217d2afe788944285ada1067eb400ca3f3/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f54696d6572436f6e7461696e65722043464c344150502e706e67)

The clock component displays the current play time. We can choose from three duel lengths: 3 min, 2.5 min and 2 min. Ten seconds before the end of the match, the end-of-match jingle starts playing.

#### [](#schedule-component)SCHEDULE COMPONENT

[![](https://camo.githubusercontent.com/e05d041f41051b657bba65d4149959a9398925f2/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f5363686564756c65436f6e7461696e65722043464c344150502e706e67)](https://camo.githubusercontent.com/e05d041f41051b657bba65d4149959a9398925f2/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f5363686564756c65436f6e7461696e65722043464c344150502e706e67)<a target="_blank" rel="noopener noreferrer" href=""></a>

The schedule component displays a summary of all matches along with the start time and results of completed matches. The current match is also indicated by the LIVE sign.

#### [](#team-component)TEAM COMPONENT

[![](https://camo.githubusercontent.com/b75e1bb49dc12ee2a706916e1aaef76b5f30b092/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f5465616d436f6e7461696e65722043464c344150502e706e67)](https://camo.githubusercontent.com/b75e1bb49dc12ee2a706916e1aaef76b5f30b092/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f5465616d436f6e7461696e65722043464c344150502e706e67)

The two team components display informations about currently competing teams along with their crest.

#### [](#draw-component)DRAW COMPONENT

[![](https://camo.githubusercontent.com/c07f2252a72c004a943a8afd4f1cad231ad6e6b4/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f64726177737461747363666c342e706e67)](https://camo.githubusercontent.com/c07f2252a72c004a943a8afd4f1cad231ad6e6b4/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f64726177737461747363666c342e706e67)

The draw component is located in the central part of the application. It is used to draw the game in which teams will compete. Under the title display section there are controls. The random component can be operated by the mini keyboard with the ENTER (draw) and SPACE (reset) keys. Until the user undertakes the operation of changing the result, the possibility of the draw is blocked (signaled by the color change of the button). After pressing the DRAW button, the title screen is displayed along with the soundtrack of the drawn game. Then players are informed about the mode in which the teams will play. Information about the games drawn is stored in the History Container.

#### [](#score-component)SCORE COMPONENT

[![](https://camo.githubusercontent.com/9943b4b2b3a88f8b6db2fe875f5719390ffe462e/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f53636f7265436f6e7461696e65722043464c344150502e706e67)](https://camo.githubusercontent.com/9943b4b2b3a88f8b6db2fe875f5719390ffe462e/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f53636f7265436f6e7461696e65722043464c344150502e706e67)

The two Score Components are located under Team Components. They are used to control the current result. In the event of a result correction, select Score Confirmation from the menu. There you can lower the value of the team's score. After one of the teams scores 3, confirm the result in the pop-up window in the lower left corner.

#### [](#stats-component)STATS COMPONENT

[![](https://camo.githubusercontent.com/0b15a64881b81939887fb4b87342948d29a408ac/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f5374617473436f6e7461696e657263666c346170702e706e67)](https://camo.githubusercontent.com/0b15a64881b81939887fb4b87342948d29a408ac/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f5374617473436f6e7461696e657263666c346170702e706e67)

The statistics component for each team appears at specific intervals after starting the timer. The type of statistics is displayed randomly, and the statistics themselves are updated after each completed match.

#### [](#infobar-component)INFOBAR COMPONENT

[![](https://camo.githubusercontent.com/b6ac1d0d20dca4b6879c72af7c2504d1b3d138e8/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f496e666f426172436f6e7461696e65722043464c344150502e706e67)](https://camo.githubusercontent.com/b6ac1d0d20dca4b6879c72af7c2504d1b3d138e8/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f496e666f426172436f6e7461696e65722043464c344150502e706e67)

The InfoBar component is located at the bottom of the application and is used to display messages. The bar automatically displays information related to the draw of games. Users can enter their own text using the Message Center module in the application menu.

#### [](#menu)MENU

[![](https://camo.githubusercontent.com/808b8ef34a8c348dd781558999958e6be14b3b0d/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4d656e75436f6e7461696e657243666c346170702e706e67)](https://camo.githubusercontent.com/808b8ef34a8c348dd781558999958e6be14b3b0d/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4d656e75436f6e7461696e657243666c346170702e706e67)

##### [](#score-confirmation)`SCORE CONFIRMATION`

[![](https://camo.githubusercontent.com/55a31404a0c46342452a62ca9144d6fa33057e84/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f53636f7265436f6e6669726d6174696f6e49636f6e2e6a7067)](https://camo.githubusercontent.com/55a31404a0c46342452a62ca9144d6fa33057e84/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f53636f7265436f6e6669726d6174696f6e49636f6e2e6a7067) After clicking that icon a window will appear for changing the match result. Change the result by pressing the "-" button. After one team receives 3 wins, the "SEND" button appears to confirm the result and move to the next round of matches.

[![](https://camo.githubusercontent.com/cb0189950aaa79937b0b7365b1e7eafeaed0c2ab/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f6578706f72746461746163666c342e6a7067)](https://camo.githubusercontent.com/cb0189950aaa79937b0b7365b1e7eafeaed0c2ab/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f6578706f72746461746163666c342e6a7067) Save the tournament status in a json file on your device's disk.

##### [](#message-centre)`MESSAGE CENTRE`

[![](https://camo.githubusercontent.com/91f61aa03fd8849f60436eeb4130b1a9718b4447/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4d65737361676543656e74726549636f6e2e706e67)](https://camo.githubusercontent.com/91f61aa03fd8849f60436eeb4130b1a9718b4447/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4d65737361676543656e74726549636f6e2e706e67) After clicking on this icon, the user can enter any text that will be displayed in InfoBar.

##### [](#draw-stats)`DRAW STATS`

[![](https://camo.githubusercontent.com/4ad1d201f20dfda2d36fee30b4573b2b5299e4a0/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f44726177537461745349636f6e2e706e67)](https://camo.githubusercontent.com/4ad1d201f20dfda2d36fee30b4573b2b5299e4a0/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f44726177537461745349636f6e2e706e67) After clicking that icon, a window will appear containing information on statistics on the number of matches in a given game mode and the number of matches played in a given game until the start of the current match. After clicking the send to InfoBar icon statistics will appear in the information bar.

##### [](#reset-app)`RESET APP`

[![](https://camo.githubusercontent.com/af18454b20418d583af002d7baf71963f9cb83a2/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f526573657449636f6e2e706e67)](https://camo.githubusercontent.com/af18454b20418d583af002d7baf71963f9cb83a2/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f526573657449636f6e2e706e67) Reset the application.

##### [](#change-theme)`CHANGE THEME`

[![](https://camo.githubusercontent.com/cb7cb611c2f6057a21596c631bf8832eae415777/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4368616e67655468656d6549636f6e2e706e67)](https://camo.githubusercontent.com/cb7cb611c2f6057a21596c631bf8832eae415777/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4368616e67655468656d6549636f6e2e706e67) The appearance of the application changes to the theme CFL \# 4 or CFL \# 3\. The default setting is CFL\#4 theme.

##### [](#play-jingle)`PLAY JINGLE!`

[![](https://camo.githubusercontent.com/118a4eb12906b0dc1184c5fcc7127341664b285d/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4a696e676c6549636f6e2e706e67)](https://camo.githubusercontent.com/118a4eb12906b0dc1184c5fcc7127341664b285d/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4a696e676c6549636f6e2e706e67) The tournament jingle is generated.

##### [](#match-history)`MATCH HISTORY`

[![](https://camo.githubusercontent.com/61f5b24bc6245155bdf94440017e270c1d74968a/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4d6174636820486973746f727949636f6e2e706e67)](https://camo.githubusercontent.com/61f5b24bc6245155bdf94440017e270c1d74968a/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f4d6174636820486973746f727949636f6e2e706e67) Go to Match History!

##### [](#stats-centre)`STATS CENTRE`

[![](https://camo.githubusercontent.com/7e568469b0aa9325c4369c39f02d7957938b71e5/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f537461747343656e74726549636f6e2e706e67)](https://camo.githubusercontent.com/7e568469b0aa9325c4369c39f02d7957938b71e5/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f537461747343656e74726549636f6e2e706e67) Go to Stats Centre!

##### [](#fulscreen)`FULSCREEN`

[![](https://camo.githubusercontent.com/835eb00d442aeccb7613fec3183f1dda4bd4773c/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f46756c6c53637265656e49636f6e2e706e67)](https://camo.githubusercontent.com/835eb00d442aeccb7613fec3183f1dda4bd4773c/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f46756c6c53637265656e49636f6e2e706e67) Go to fullscreen mode!

#### [](#2-match-history)2\. MATCH HISTORY

[![](https://camo.githubusercontent.com/ca8bb399deccc7529f4fbcef14865914a343dd3c/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f486973746f7279436f6e7461696e657243464c344150502e706e67)](https://camo.githubusercontent.com/ca8bb399deccc7529f4fbcef14865914a343dd3c/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f486973746f7279436f6e7461696e657243464c344150502e706e67)

The component displays the schedule with the games drawn for each match. Red and green indicate whether the game has been won or lost by the selected team.

#### [](#3-stats-centre)3\. STATS CENTRE

[![](https://camo.githubusercontent.com/7e50c994dfbc48e0945c8b84f1dadaf7ac670c52/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f537461747343656e747265436f6e7461696e65722e706e67)](https://camo.githubusercontent.com/7e50c994dfbc48e0945c8b84f1dadaf7ac670c52/687474703a2f2f7777772e636f6e74726162616e64612e65752f75706c6f61642f686f7374696e672f537461747343656e747265436f6e7461696e65722e706e67)

The component displays statistics for the selected team. The user can choose the type of graph displayed and choose the appropriate parameters.

Statistics are updated after each match.

### [](#match-steps)`MATCH STEPS`

<g-emoji class="g-emoji" alias="exclamation" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2757.png">❗</g-emoji> Warning! Refreshing the browser tab deletes all data.

1.  Draw a game by pressing `DRAW` button.
2.  Select the appropriate length of match time in the Timer and press `START`.
3.  After settling the match, assign a point to the appropriate team. If you make a mistake, use the Score Confirmation section to correct the result.
4.  Draw another game, set time, assign a point. Take the above steps to get 3 points by one of the teams.
5.  After obtaining three points you will be asked to confirm the result with the `SEND` button. After confirming the result, press the `TEAM` button highlighted in green to advance to the next round.

## [](#built-with)BUILT WITH

*   React
*   Redux
*   React Router
*   Recharts
*   React Fullscreen
*   Firebase

### [](#possible-development)POSSIBLE DEVELOPMENT

I would like to develop the project and update it for subsequent editions. I plan to make communication between the graphic representation of the application and LED displays that the Arduino module supports. I would like to use ExpressJS, Socket IO and Johnny5 libraries for this purpose.

There is a lot of learning ahead of me, but the first attempts are promising!

## [](#credits)CREDITS

Sound/FX by [Robi](https://soundcloud.com/robi-35)
