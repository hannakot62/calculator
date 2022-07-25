# Task

The project is made as an internship task with the following requirements:

[technical_task] (https://github.com/hannakot62/calculator/blob/main/for_readme/task.pdf)

# Description

The main part of the calculator is made via JavaScript. The project allows to handle with different Math operation. Such as:

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

There are two available themes: light and dark

![light-theme](https://raw.githubusercontent.com/hannakot62/calculator/main/for_readme/light.jpg "light-theme")
![dark-theme](https://raw.githubusercontent.com/hannakot62/calculator/main/for_readme/dark.jpg "dark-theme")

The calculator is supported by the rocket animation. When it comes to a successfull calculation the rocket is flying.

![rocket](https://raw.githubusercontent.com/hannakot62/calculator/main/for_readme/light.jpg "rocket")

# How to run the app

каком кверху
npm run build???

# Files & folders desription

The files used are grouped the next way:

- **dist** folder includes all the build stuff????????

* **.husky** folder contains configurations of pre-commit hook???????????

- **node_modules** folder is used for all the configurations needed to prepare app building via webpack environment and testing via Jest

* **.eslintrc.js** file includes eslint rules of checking and formatting the code

* **webpack.config.js** file describes the rules of building the app

* **package.json** and **package-lock.json** files describe all the side dependencies used in the project

* **.gitignore** file contains folder names that shuldn't be push along with the other content

* **src** folder is the main container of the source code. It includes:

  - **index.html** file is responsible for the main page layout
  - **index.js** file is used for connectiong all the code dependecies in the project???
  - **assets** folder contains the calculator's favicon
  - **sass** folder is used for keeping style file named **main.scss**
  - **js** folder is used as source code storage
