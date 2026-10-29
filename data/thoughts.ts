export type Theme = "life" | "work" | "growth" | "society";

export type Thought = {
  id: string;
  title: string;
  body: string;
  theme: Theme;
  /** 1–10: how much a reasonable person would push back. Sets the position across the map. */
  controversy: number;
  /** 1–10: how sure I am — 10 means I would bet on it. Sets the height on the map. */
  conviction: number;
};

export const thoughts: Thought[] = [
  {
    id: "plane-window",
    title: "look out the plane window",
    body: "you cannot always live maximally, so learn to appreciate the mundane. a view from a plane window, a field being farmed. the small things are where most of life actually happens.",
    theme: "life",
    controversy: 1,
    conviction: 8,
  },
  {
    id: "autobiography",
    title: "write an autobiography worth reading",
    body: "every experience adds another page to your autobiography. make it one people would actually want to read.",
    theme: "life",
    controversy: 2,
    conviction: 7,
  },
  {
    id: "present-solutions",
    title: "bring answers, not problems",
    body: "always share a perspective on what the answer is. even if it's wrong, it gives everyone a productive platform to debate from.",
    theme: "work",
    controversy: 2,
    conviction: 9,
  },
  {
    id: "campfire",
    title: "a business is a campfire",
    body: "you need small branches to get it started, but they burn out fast. you need big logs to keep it going, and fresh wood to keep it alive. in the end it all turns to ash, but it is beautiful while it lasts.",
    theme: "work",
    controversy: 2,
    conviction: 6,
  },
  {
    id: "zoom-out",
    title: "zoom out to zoom in",
    body: "always ask the why behind your work. too much work gets done for work's sake, then gets ignored because it has zero impact.",
    theme: "work",
    controversy: 3,
    conviction: 9,
  },
  {
    id: "experience",
    title: "experience beats teaching",
    body: "the best lessons about yourself and life come from experiences, not teachings. relationships included. you can't think your way there, you have to do something about it.",
    theme: "growth",
    controversy: 3,
    conviction: 8,
  },
  {
    id: "follow-people",
    title: "always follow people",
    body: "work for people you admire, with people you respect, and surround yourself with the best. the work changes, the people compound.",
    theme: "work",
    controversy: 3,
    conviction: 7,
  },
  {
    id: "beware-ok",
    title: "beware of \"it's ok\"",
    body: "the most dangerous place to be is when things are not bad enough to change, but not good enough to love. \"it's good\" is the limbo most people never leave. good is the enemy of great.",
    theme: "growth",
    controversy: 4,
    conviction: 9,
  },
  {
    id: "challenges",
    title: "challenges, not projects",
    body: "less \"i need projects to focus on\", more \"i need challenges to overcome\". projects become random distractions. challenges give you drive.",
    theme: "growth",
    controversy: 4,
    conviction: 6,
  },
  {
    id: "luck",
    title: "there is a recipe for luck",
    body: "luck will always be part of the equation, but you can expand your surface area for it. go broad, embrace randomness, and stand where things are growing fastest.",
    theme: "growth",
    controversy: 4,
    conviction: 8,
  },
  {
    id: "six-shots",
    title: "you get about six shots",
    body: "doing something well takes five to six years. start at 22, slow down around 55, and you get roughly six chances to be great at something. plan life in chapters: the next six years i will be a musician, a corporate weapon, a learner.",
    theme: "growth",
    controversy: 5,
    conviction: 7,
  },
  {
    id: "many-lives",
    title: "live as many lives as possible",
    body: "you can't think your way to the meaning of life. maybe the goal is to maximize experiences and live as many lives as you can. the prerequisites are health, money, and time.",
    theme: "life",
    controversy: 5,
    conviction: 6,
  },
  {
    id: "youth-risk",
    title: "your twenties are for risk",
    body: "youth is valuable because of possibility: more freedom, fewer responsibilities. age slowly trades excitement for contentment, so take the risks while they are cheap.",
    theme: "life",
    controversy: 5,
    conviction: 8,
  },
  {
    id: "passion",
    title: "passion is not optional",
    body: "a cushy job with high pay is not enough if you want something else. any time spent on something you are not passionate about is a waste. the more years you do a job, the more you focus on doing it well and the less you remember why you started.",
    theme: "work",
    controversy: 6,
    conviction: 8,
  },
  {
    id: "taste",
    title: "taste is the last frontier",
    body: "ai climbs a ladder: tasks, then knowledge, then judgment, then taste. capitalism strips out the \"unnecessary\" to cut costs, but humans have always paid for beauty beyond function. as ai makes function abundant, aesthetics become rarer and more valuable.",
    theme: "society",
    controversy: 6,
    conviction: 7,
  },
  {
    id: "big-companies",
    title: "big companies pick popular over best",
    body: "large companies stall when decisions shift from what is best to what is most popular.",
    theme: "work",
    controversy: 7,
    conviction: 7,
  },
  {
    id: "money-circles",
    title: "money and the three circles",
    body: "we all want to grow three circles: the self, our confidants, and everyone who knows us by reputation. the further out you go, the more money it takes and the less it does. it changes your own life instantly, barely buys closeness, and only reaches strangers at vanderbilt scale.",
    theme: "society",
    controversy: 7,
    conviction: 6,
  },
  {
    id: "happiness",
    title: "happiness is when you stop running",
    body: "we spend our lives running toward desire and away from fear. happiness is the moment both vanish: you no longer want to change your state. sadness is when desire is out of reach and fear is far too close.",
    theme: "life",
    controversy: 8,
    conviction: 5,
  },
  {
    id: "suffering",
    title: "suffering is the default",
    body: "meditation is not about reaching joy, it is about clearing away negativity. maybe humans are naturally suffering, and removing the bad matters more than chasing the good.",
    theme: "life",
    controversy: 9,
    conviction: 4,
  },
  {
    id: "prejudice",
    title: "prejudice is taught, not born",
    body: "children are simply curious about people who are different. prejudice mostly comes from two places: propaganda and privilege. travel makes it obvious. people look wildly different, but share the same heart.",
    theme: "society",
    controversy: 9,
    conviction: 8,
  },
];
