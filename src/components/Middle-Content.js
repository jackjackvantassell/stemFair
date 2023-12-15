import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDOMServer from "react-dom/server";
import "../css/Middle-Content.css";

const MiddleContent = ({ selectedTab, concepts }) => {
  const selectedConcept = concepts.find(
    (concept) => concept.id === selectedTab
  );

  const renderDescription = () => {
    if (selectedConcept && selectedConcept.description) {
      const descriptionString = ReactDOMServer.renderToStaticMarkup(
        <div>{selectedConcept.description}</div>
      );

      return (
        <ReactMarkdown skipHtml={false} disallowedElements={["img"]}>
          {descriptionString}
        </ReactMarkdown>
      );
    }
    return null;
  };

  return (
    <div className="content">
      {selectedConcept && (
        <div>
          <h2>{selectedConcept.name}</h2>
          {/* <ReactMarkdown>{selectedConcept.description}</ReactMarkdown> */}
          {selectedTab === "Intro" && (
            <div>
              This is the intro to learning to code using Stone Story RPG game.
              You should download the game in the app store because that version
              is free. to download. If you download it through other means, it
              costs money. Both are the same games, just different costs.
              Anyway, download it and just play. You have to play until you get
              the mind stone. Also, one more thing. Remember to have FUN. I
              built this tutorial so you could have fun while learning coding,
              not for it to be boring.
              <p></p>
              <a
                href="https://apps.apple.com/pl/app/stone-story-rpg/id1076120218"
                target="_blank"
                rel="noopener noreferrer"
                className="a-tag"
              >
                Click here to download Stone Story RPG on the App Store
              </a>
            </div>
          )}

          {selectedTab === "Variables" && (
            <div>
              <p>
                Ok. I’m guessing you have at least the mind stone? The mind
                stone is needed to code in stone story (The mindstone is in
                Workstation: Automate. To use it, you will have to make sure
                that the Mindstone is on). Anyway, I’m guessing that you want to
                learn, so here’s the first core coding concept. Welcome to
                variables. Think of a variable as a box. Let's say your variable
                is called “number”. It doesn’t have to be called this, it’s your
                variable. I’m calling my variable number. This variable can hold
                a number. Even though my variable is called number, it doesn't
                have to have a number. It can store a picture, some random
                words, a random number, or a weapon, but it has to store
                something. You call the name of the variable to access whatever
                is inside of the variable. You don't have to do exactly as in
                the pictures, it's your game and variable. In our game, let's
                say we do this:
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/images/variables.jpg`}
                alt="Picture"
              />
              <p>
                See how I set my variable called number to 12? Then on the next
                line I checked if my health was lower than number(12) and if it
                was, I drink my potion, which will fill me all the way back up.
                There is also an If statement in here. It's the question
                mark/potion activator. Generally, a variable is a box that can
                store something and can be called to access whatever is inside
                the box. If you know how variables work, it will make coding so
                much easier. Now that you know what a variable is and looks
                like, go make one of your own, without help.
              </p>
            </div>
          )}

          {selectedTab === "Functions" && (
            <div>
              <p>
                Now, the last core coding concept that I’m going to teach.
                Functions. A function is like a ready-to-go set of instructions
                that does a specific job. It's used both in math and computer
                programming. Imagine you have a magic box. You give it something
                (input), it does some secret stuff (processing), and gives you
                back something else (output). In programming, functions are like
                these magical boxes. They help organize tasks neatly, so you can
                reuse them whenever you need, making your programs more
                organized and easier to understand. Here's what one looks like
                in stone story:
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/images/function.jpeg`}
                alt="Picture2"
              />
              <p>
                You don't have to do this specific function. You could do your
                own function if you want. If you do use this function, make sure
                you call it with weapons that you do have because if you call
                the function and pass in weapons that you don't have, it won't
                work. This also has an If statement in there, after the func, or
                function. There is also supposed to be a closed parenthesis at
                the end of the "poison shield" but there isn't enough room, so
                it gives me an error whenever I run it. So make sure to always
                do the correct parentheses. What's in the parentheses is called
                parameters. Parameters are values that are defined when the
                function is being called. Inside the function, you can do
                questions that include the parentheses, so it’s not always the
                same output. For example: if the person who calls the function
                passes the first parameter as 5, another time they could call
                that same parameter 8, so you would get back different outcomes.
              </p>
            </div>
          )}

          {selectedTab === "If Statements" && (
            <div>
              <p>
                If statments are the next core coding concept I want to talk
                about. If statements in programming are a way to make a
                decision. It can only be asked a true or false question, and it
                will run blocks of code based on the outcome. Here's an example.
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/images/loc.jpeg`}
                alt="Picture3"
              />
              <p>
                To see if the code worked, go to spider cavern. Also, don't
                choose to equip the crossbow if you don't have one. The ?
                activates an if check. The "loc" was checking if the location is
                equal to something. In this case, I checked if it was the spider
                cavern (also called cave). You can use the same format to check
                any area. I'm guessing you won't have the same weapon in the
                picture, so you could equip a different weapon, let's say a
                sword, and that would work just fine. Remember, it's your If
                statement. Now I will tell you right now that this is not how
                normal if statements look like, but it's the idea of it. They
                usually have 2 key words, and not a question mark. The two key
                words are If, to start it, and else, to end it. Here’s what a
                normal one looks like:
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/images/if.png`}
                alt="Picture4"
              />
              <p>
                See how it’s an If and else? I would suggest using a variable
                and an If statement to hopefully automate a level without any
                interactions from you.
              </p>
            </div>
          )}

          {selectedTab === "Closure" && (
            <div>
              <p>
                Hope you liked it! I also hope it was fun to learn how to code
                using Stone Story. This language is called stonescript. I built
                this app in a language called Javascript, or JS for short. I
                hope you can now code and automate whatever you want in Stone
                Story, or at least figure out how to automate whatever you want
                in Stone Story. You should also be able to figure out most of
                the things in a basic file, of any language.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// return (
//   <div>
//     {concepts.map((concept, index) => (
//       <div className="content" key={index} id={concept.id}>
//         <div className="title">{concept.name}</div>
//         <div className="description">{concept.description}</div>
//       </div>
//     ))}
//   </div>
// );

export default MiddleContent;
