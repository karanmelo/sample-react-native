<h1>Sample React Native App</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react%20native&message=framework&color=blue&style=flat-square&logo=REACT"/>
  <img src="https://img.shields.io/github/license/karanmelo/sample-react-native?style=flat-square"/>
</p>

> Project status: :warning:


### Topics 

:small_blue_diamond: [Project Description](#project-description)

:small_blue_diamond: [Functionalities](#functionalities)

:small_blue_diamond: [Prerequisites](#prerequisites)

:small_blue_diamond: [Instructions](#instructions)

:small_blue_diamond: [Run](#run)

:small_blue_diamond: [License](#license)


## Project Description 

<p align="justify">
  Example of a React Native project supporting iOS and Android.
</p>


## Functionalities

<p align="left">
:heavy_check_mark: &nbsp Authentication Flow
</p>
<p align="left">
:heavy_check_mark: &nbsp Theme Provider
</p>
<p align="left">
:heavy_check_mark: &nbsp Tab Navigator
</p>
<p align="left">
:heavy_check_mark: &nbsp Setup tab with example password update and logout
</p>

## Prerequisites

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
:warning: [Xcode](https://developer.apple.com/xcode/)

## Instructions

The app user is ```admin``` and password should contains a strong value, with minimum 8 caracters.

## Run
Clone the project: 

```
git clone git@github.com:karanmelo/sample-react-native.git
OR
git clone https://github.com/karanmelo/sample-react-native.git
```
Acces the project:
```
cd sample-react-native
```
Install the dependencies:
```
yarn
```
If you're on a Mac and developing for iOS, you need to install the pods:
```
cd ios
pod install
cd ..
```
Run iOS:
```
yarn ios
```
Run Android:
```
yarn android
```

Create the .env file based on the .env.example file.

## Languages, dependencies and libs used :books:

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [Tab Navigator](https://reactnavigation.org/docs/tab-based-navigation)
- [Vector Icons](https://reactnative.deveact-native-vector-icons/)


## Open tasks

:memo:  Sync theme with device;

:memo:  Home screen;

:memo:  And the sky is not the limit...


## License

Sample React Native App is MIT licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/karanmelo/sample-react-native/blob/master/LICENSE.md
