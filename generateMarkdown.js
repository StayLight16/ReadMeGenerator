// function to generate markdown for README
function generateMarkdown(answers) {
    return `
# ${answers.project}
## Table of Contents
       * [Email](#Email)
       * [Username](#Username)
       * [Description](#Description)
       * [Instructions](#Instructions)
       * [Usage](#Usage)
       * [Installation](#Installation)
       * [Questions](#Questions)
       * [License](#License)
       
## Description
    ${answers.description}
## Installation
    ${answers.installation}
## Usage 
    ${answers.usage}
## License 
     ${answers.license}
        ![badge](https://img.shields.io/badge/License-${answers.license}-yellow)
## Contributed
    ${answers.contributed} 
## Tested
     ${answers.tested}
## Questions 
     ${answers.questions}
## Username
    ${answers.Github }
## Email 
    ${answers.email}
## Repo
    ${answers.repo}
    
## Demonstration video
    ${answers.demo}
  `;
  }
  module.exports = generateMarkdown;