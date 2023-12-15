import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import MiddleContent from "./components/Middle-Content";
import Picture from "./images/variables.jpg";
import Picture2 from "./images/function.jpeg";
import Picture3 from "./images/loc.jpeg";
import Picture4 from "./images/if.png";
import SideNavbar from "./components/Side-Navbar";
import "./App.css";

const concepts = [
  {
    id: "Intro",
    name: "Intro",
    description: `
This is the intro to learning to code using Stone Story RPG game. You should download the game in the app store because that version is free. to download. If you download it through other means, it costs money. Both are the same games, just different costs. Anyway, download it and just play. You have to play until you get the mind stone. Also, one more thing. Remember to have FUN. I built this tutorial so you could have fun while learning coding, not for it to be boring.

[Click here to download Stone Story RPG on the App Store](https://apps.apple.com/pl/app/stone-story-rpg/id1076120218)
    `,
  },

  {
    id: "Variables",
    name: "Variables",
    description: `
Ok. I’m guessing you have at least the mind stone? The mind stone is
needed to code in stone story (The mindstone is in Workstation:
Automate. To use it, you will have to make sure that the Mindstone is
on). Anyway, I’m guessing that you want to learn, so here’s the first
core coding concept. Welcome to variables. Think of a variable as a
box. Let's say your variable is called “number”. It doesn’t have to be
called this, it’s your variable. I’m calling my variable number. This
variable can hold a number. Even though my variable is called number,
it doesn't have to have a number. It can store a picture, some random
words, a random number, or a weapon, but it has to store something.
You call the name of the variable to access whatever is inside of the
variable. You don't have to do exactly as in the pictures, it's your
game and variable. In our game, let's say we do this:

![Picture](/images/variables.jpg)

See how I set my variable called number to 12? Then on the next line I
checked if my health was lower than number(12) and if it was, I drink
my potion, which will fill me all the way back up. There is also a If
statment in here. It's the question mark/potion activator. generally,
a variable is a box that can store something, and can be called to
access whatever is inside the box. If you know how variables work, it
will make coding so much easier. Now that you know what a variable is
and looks like, go make one of your own, without help.
    `,
  },

  {
    id: "If Statements",
    name: "If Statements",
    description: `
If statments are the next core coding concept I want to talk about. If
statements in programming are a way to make a decision. It can only be
asked a true or false question, and it will run blocks of code based
on the outcome. Here's an example.

![Picture3](/images/loc.jpeg)

(To see if the code worked, go to spider cavern. also don't choose to
equip the crossbow if you don't have one.) The ? activates a if check.
The "loc" was checking if the location is = something. In this case I
checked if it was the spider cavern (also called cave). You can use
the same format to check any area. I'm guessing you won't have the
same weapon in the picture, so you could equip a different weapon,
let's say a sword, and that would work just fine. Remember, it's your
If statement. Now I will tell you right now that this is not how
normal if statements look like, but it's the idea of it. They usually
have 2 key words, and not a question mark. The two key words are If,
to start it, and else, to end it. Here’s what a normal one looks like:

![Picture4](/images/if.png)

See how it’s a If and else? I would suggest using a variable, and a If
statement to hopefully, automate a level, without any interactions
from you.
    `,
  },

  {
    id: "Functions",
    name: "Functions",
    description: `
Now, the last core coding concept that I’m going to teach. Functions.
A function is like a ready-to-go set of instructions that does a
specific job. It's used both in math and computer programming. Imagine
you have a magic box. You give it something (input), it does some
secret stuff (processing), and gives you back something else (output).
In programming, functions are like these magical boxes. They help
organize tasks neatly, so you can reuse them whenever you need, making
your programs more organized and easier to understand. Here's what one
looks like in stone story:

![Picture2](/images/function.jpeg)

(You don't have to do this specific function. You could do your own
function if you want. If you do use this function, make sure you call
it with weapons that you do have, because if you call the function and
pass in weapons that you don't have, it won't work.).This also has a
if statement in there, after the func, or function. There is also
supposed to be a closed parenthesis at the end of the "poison shield"
but there isn't enough room, so it gives me a error whenever I run it.
So make sure to always do the correct parentheses. What's in the
parenthese is called parameters. Parameters are values that are
defined when the function is being called. Inside the function, you
can do questions that include the parentheses, so it’s not always the
same output. For example: if the person who calls the function, passes
the first parameter as 5, another time they could call that same
parameter 8, so you would get back different outcomes.
    `,
  },

  {
    id: "Closure",
    name: "Closure",
    description: `
Hope you liked it! I also hope it was fun to learn how to code using
stone story. This language is called stonescript. I built this app in a
language called Javascript, or js for short. I hope you can now code and
automate whatever you want in stone story, or at least figure out how to
automate whatever you want in stone story. You should also be able to
figure out most of the things in a basic file, of any language.
    `,
  },
];

const App = () => {
  const [selectedTab, setSelectedTab] = useState(concepts[0].id); // Default to the first tab

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="App">
      <SideNavbar concepts={concepts} onTabChange={handleTabChange} />
      <MiddleContent selectedTab={selectedTab} concepts={concepts} />
    </div>
  );
};

export default App;
