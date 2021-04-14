// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter your project title.",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Invalid entry! Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project.",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log(
            "Invalid entry! Please enter a description of your project!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username.",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Invalid entry! Please enter your GitHub username!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "email",
      message: "Please enter your email address.",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Invalid entry! Please enter your email address!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
      // if there is an error, reject the Promise and send the errpr to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successdul data to the `.then()` method
      resolve({
        ok: true,
        message: "Readme created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
questions();
//init();
//.then((answers) => writeToFile("./README-GEN.md", answers))
