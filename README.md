## Project Overview

CRM app for [Gora gallery website](https://gora0-8bdf5.web.app/)
There are 2 layers of the app:
🔐 Authentication
📊 Admin Panel ( available only for login users)

Admin will be able to see all gallery items, sort, filter through them, see details and edit single art piece.
Additionally there will be avability to add new item, change main banner content, change settings account ( as password, e-mail );

## Tech/framework used

| Tech                                                    |
| ------------------------------------------------------- |
| [React](https://reactjs.org/)                           |
| [Typescript](https://www.typescriptlang.org/)           |
| [React Router](https://reacttraining.com/react-router/) |
| [Chakra-UI](https://chakra-ui.com/)                     |
| [TanStack Table](https://tanstack.com/table/v8)         |
| [React Hook Form](https://react-hook-form.com/)         |
| [Unit tests](https://reactjs.org/docs/testing.html)     |
| [Eslint](https://eslint.org/)                           |
| [Prettier](https://prettier.io/)                        |
| [Firebase](https://firebase.google.com/)                |

## Installation in short:

```bash

git clone https://github.com/agatagree/gora-crm.git

npm install

create .env file with your private API key

npm run start

npm test
```

<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
