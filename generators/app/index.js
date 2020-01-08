'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([{
        type: 'input',
        name: 'title',
        message: 'Your Book Title: ',
      },
      {
        type: 'input',
        name: 'color',
        message: 'Your Color Theme: ',
      },
      {
        type: 'input',
        name: 'authorname',
        message: 'Your Author Name: ',
      }

    ]);
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(), {
        title: this.answers.title,
        color: this.answers.color,
        authorname: this.answers.authorname
      } // user answer `title` used
    );
  }

  install() {
    this.installDependencies();
  }
};
