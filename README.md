# NewsAPI-Reader
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

#added one button

## Git Workflow: Commit and Pull Request

### Using Standard Git Commands and GitHub Web Interface

#### Step 1: Commit Changes
1. Stage your changes:
   ```
   git add .
   ```
   (Or stage specific files: `git add <file_path>`)

2. Commit the changes:
   ```
   git commit -m "Your commit message describing the changes"
   ```

#### Step 2: Create and Push a Branch
1. Create a new branch (replace `feature-branch` with your branch name):
   ```
   git checkout -b feature-branch
   ```

2. Push the branch to GitHub:
   ```
   git push -u origin feature-branch
   ```

#### Step 3: Create Pull Request via GitHub Web Interface
1. Go to your repository on GitHub.com
2. Click the "Compare & pull request" button that appears after pushing
3. Fill in the PR title and description
4. Click "Create pull request"

### Using GitHub CLI (gh)

#### Step 1: Commit Changes
1. Stage your changes:
   ```
   git add .
   ```

2. Commit the changes:
   ```
   git commit -m "Your commit message"
   ```

#### Step 2: Create and Push a Branch
1. Create a new branch:
   ```
   git checkout -b blackboxai/feature-branch
   ```

2. Push the branch:
   ```
   git push -u origin blackboxai/feature-branch
   ```

#### Step 3: Create Pull Request
1. Use GitHub CLI to create the PR:
   ```
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   Or interactively:
   ```
   gh pr create
   ```

