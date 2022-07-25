# Task

The project is made as an internship task with the following requirements:
[technical_task](https://github.com/hannakot62/calculator/blob/main/for_readme/task.pdf)

# Description

The main part of the calculator is made via JavaScript. The project allows to handle with different Math operations. Such as:

- addition
- substraction
- multiplication
- division
- finding a percentage
- finding the root
- factorial
- exponentiation

The calculator also manages memory function, which is available for:

- reading
- clearing
- addition
- substraction

The calculator is capable of working with brackets, which allows any user not to care about the operation priority.

There are two available themes: light and dark.
![light-theme](https://raw.githubusercontent.com/hannakot62/calculator/main/for_readme/light.jpg "light-theme")
![dark-theme](https://raw.githubusercontent.com/hannakot62/calculator/main/for_readme/dark.jpg "dark-theme")

The calculator is supported by the rocket animation. When it comes to a successfull calculation the rocket is flying.

![rocket](https://raw.githubusercontent.com/hannakot62/calculator/main/for_readme/rocket.jpg "rocket")

# How to run the app

To run the app you should prepare an IDE and write in the terminal **_npm run build_** или как или что ааааа

# Files & folders desription

The files used are grouped the next way:
но это конечно не точно

- **_dist_** folder includes all the build stuff????????

* **_.husky_** folder contains configurations of pre-commit hook???????????

- **_node_modules_** folder is used for all the configurations needed to prepare app building via webpack environment and testing via Jest

* **_.eslintrc.js_** file includes eslint rules of checking and formatting the code

* **_webpack.config.js_** file describes the rules of building the app

* **_package.json_** and **_package-lock.json_** files describe all the side dependencies used in the project

* **_.gitignore_** file contains folder names that shuldn't be push along with the other content

* **_src_** folder is the main container of the source code. It includes:

  - **_index.html_** file is responsible for the main page layout
  - **_index.js_** file is used for connectiong all the code dependecies in the project???
  - **_assets_** folder contains the calculator's favicon
  - **_sass_** folder is used for keeping style file named **_main.scss_**
  - **_js_** folder is used as source code storage
