![Alt text](documentation/imgs/1.jpg?raw=true "PORTFOLIO-Flowchart")
![Alt text](documentation/imgs/2.jpg?raw=true "PORTFOLIO-Flowchart")
![Alt text](documentation/imgs/3.jpg?raw=true "PORTFOLIO-Flowchart")

# PORTFOLIO-APP

![Last version](https://img.shields.io/github/v/tag/justalk/portfolio-app.svg?style=flat-square)
[![Travis](https://img.shields.io/travis/com/justalk/portfolio-app.svg?style=flat-square)](https://travis-ci.com/github/JustalK/portfolio-app)
[![Coverage Status](https://coveralls.io/repos/github/JustalK/PORTFOLIO-APP/badge.svg?branch=master)](https://coveralls.io/github/JustalK/PORTFOLIO-APP?branch=master)
[![Maintainability Status](https://api.codeclimate.com/v1/badges/74468f5076948fc994c8/maintainability)](https://codeclimate.com/github/JustalK/PORTFOLIO-APP/maintainability)

A project for presenting my professional work to the world in an app published on Google Store (in verification). As a fullstack developer, I have coded both side of the application. The app has been made with `React Native` and `Typescript` the backend is made with `Express` and `MongoDB`.

The entire project follow the official convention for JS. Also, the project is checked by `travis` and the test of `Jest` for checking the continuity. Finally, the robustness of the project is assured by `Coveralls` who checked the coverage of the test.

This project is linked to my other repository [PORTFOLIO](https://github.com/JustalK/PORTFOLIO). It's where I have designed the backend.

## Commands

#### Developing

For running the project, simply use :

```
npm run start
```

It will then run a browser with a QR code that you can use on expo for testing the app.

#### Tools

For linting the code :
```
npm run lint
```

For formatting the code :
```
npm run format
```

#### Building

For building an apk or app-bundle that could be use on Google Store or Apple Store :
```
npm run build-android
npm run build-ios
```

## Organization

The following describe how the project is structured. It's an easy way for discovering the project and the way I organize the code.

#### Dependencies

| Package's Name             | Description                                              |
| :------------------------- | :------------------------------------------------------- |
| axios                      | I use this package for calling the rest API (my backend) |
| expo                       | I use expo for easy testing through my real device. I also use it for creating a apk build or app-bundle                                                  |
| expo-font                  | Use for having access to the custom font inside expo     |
| expo-status-bar            | Use for having access to the status bar inside expo      |
| react                      | For being able to use the react technology               |
| react-dom                  | Use for having access to the DOM of react                |
| react-native               | Use for having access to android functionalities         |
| react-native-tab-view      | Use for having a beautiful way to handle the tabs system between the different screen                                                                    |
| @babel                     | Use for transpiling the entire code                      |
| @types/x                   | For adding certain definition for Typescript             |
| babel-eslint               | Pass the result of babel into eslint                     |
| eslint                     | The linter of the entire code                            |
| eslint-plugin-react        | Add the linting rules of react to the eslint             |
| eslint-plugin-react-native | Add the linting rules of react-native to the eslint      |
| eslint-plugin-prettier     | Add the linting rules of prettier to the eslint          |
| typescript                 | For typing JS and avoiding future error                  |
| prettier                   | For formatting the entire code                           |
| eslint-config-prettier     | For adding the recommended config of prettier            |

#### Organization of the folder

| Folder's Name | Description of the folder                        |
| :------------ | :----------------------------------------------- |
| components    | Regroup the reusable components                  |
| definitions   | Typescript custom definitions                    |
| interfaces    | Regroup the interfaces for Typescript            |
| libs          | Regroup global functions and constants           |
| pages         | Regroup the screens of the App                   |
| services      | Regroup the call to the Api                      |
| styles        | Regroup the less styles of the App               |

## License

MIT - Copyright &copy; [JUSTAL Kevin](http://justalk.online/)
