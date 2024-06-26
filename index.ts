#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

interface Question {
  question: string;
  choices: string[];
  answer: string;
}

const questions: Question[] = [

  {
    question: chalk.bold.blue("What is the extension of a TypeScript file?"),
    choices: [".ts", ".js", ".css", ".html"],
    answer: ".ts"
  },
  {
    question: chalk.bold.blue('What is the result of 3 * "2" in JavaScript?'),
    choices: ["32", "6", "NaN", '"6"'],
    answer: "6"
  },
  {
    question: chalk.bold.blue("Which of the following is a front-end JavaScript framework?"),
    choices: ["Express", "Django", "Flask", "React"],
    answer: "React"
  },
  {
    question: chalk.bold.blue("JavaScript was created in 10 days then released on?"),
    choices: ["May 23rd 1995", "Nov 24th 1995", "Dec 4th 1995", "Dec 17 1996"],
    answer: "Dec 4th 1995"
  },
  {
    question: chalk.bold.blue('What is the purpose of the "async" and "await" keywords in JavaScript?'),
    choices: ["To make functions asynchronous", "To handle errors in asynchronous code", "To wait for a Promise to be resolved", "To create new Promise objects"],
    answer: "To wait for a Promise to be resolved"
  },
  {
    question: chalk.bold.blue('What is the purpose of the "npm init -y" command?'),
    choices: ["To initialize a new npm package with default settings", "To install a package", "To update npm packages", "To uninstall npm packages"],
    answer: "To initialize a new npm package with default settings"
  },
  {
    question: chalk.bold.blue("Which command is used to initialize a new npm package?"),
    choices: ["npm start", "npm install", "npm init", "npm run"],
    answer: "npm init"
  },
  {
    question: chalk.bold.blue('What does the term "hoisting" refer to in JavaScript?'),
    choices: ["The process of moving variable declarations to the top of their scope", "The process of optimizing code for performance", "The process of converting data types implicitly", "The process of declaring functions inside other functions"],
    answer: "The process of moving variable declarations to the top of their scope"
  },

  {
    question: chalk.bold.blue("Which of the following is not a valid JavaScript data type?"),
    choices: ["boolean", "number", "character", "symbol"],
    answer: "character"
  },
  {
    question: chalk.bold.blue("What does JSON stand for?"),
    choices: ["JavaScript Only Network", "Java Serialized Object Notatio", "Java Server Object Notation", "JavaScript Object Notation"],
    answer: "JavaScript Object Notation"
  },


];

async function startQuiz() {
  let score = 0;
  const userName = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: chalk.bold.yellowBright("What is your name?")
    }
  ]);

  console.log(chalk.bold.cyanBright(`Welcome ${userName.name}! Let's start the Quiz.\n`));

  for (const question of questions) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'userAnswer',
        message: question.question,
        choices: question.choices
      }
    ]);

    if (answer.userAnswer === question.answer) {
      console.log(chalk.greenBright(`Nice work ${userName.name}  That's a legit answer`));
      score++;
    } else {
       console.log(chalk.bold.redBright("Incorrect!"));
    }
  }


  console.log(chalk.bold.yellowBright(`\n${userName.name}, the quiz has ended. Your score is: ${score} / ${questions.length}\n`));
  
}

async function main() {
  await startQuiz();
  console.log(chalk.bold.cyanBright("Thanks for playing!"));
}

main();

