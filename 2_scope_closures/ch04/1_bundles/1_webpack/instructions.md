# Webpack

## Scope

This exercise is about bundling a small project using webpack v5. This project doesn't tries to use the leanest to zero configuration of webpack so you can just check the process of bundling at its simplest form.

## Instructions

### Pre-bundling

1. Navigate in your terminal to /1_webpack directory.
2. Initialize your project with `npm init -y`
3. Install webpack as a dev dependency `npm install webpack webpack-cli --save-dev`
4. Create an **index.html** file.
5. Create a **/src** directory and inside of it an **index.js** file
6. Inside **index.html** file, create a div inside the body with "root" as id.
7. Inside **index.html**, add the following script so we can use lodash: `<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>`
8. Check this website to see what you can do with lodash: https://lodash.com/docs/4.17.15 . Notice how each method belongs to the `_` object.
9. Check what does the `_.join()` method do in lodash.
10. In **index.js**, create the Greeting component. This component is a function that is able to get an array of strings, join them using `_.join()` and insert them into the #root element of the HTML document.
11. Don't export Greeting.
12. Execute `Greeting(["Hello", "World"])` at the end of **index.js**.
13. Add **index.js** as a script in **index.html**
14. Open **index.html** in the browser and check that your greeting is on screen.

### Bundling

1. Create a dist/ directory at the root of the project.
2. Since dist/ will be where we'll distribute our project, move **index.html** to that directory
3. Delete the script for lodash in **index.html**
4. Check that the greeting is no longer printed on screen.
5. Install lodash as a dependency of the project: `npm install --save lodash`
6. Now `import _ from 'lodash'` in **index.js**
7. Inside **index.html**, change the **src** of the remaining script to `src="main.js"`. This is because the bundling process will create this file in **dist/** with a minified and optimized version of **src/index.js**
8. Run `npx webpack`
9. If you open **index.html** the greeting message should be again on screen.
10. If you check /dist, there should be a **main.js** file.

## Questions

1. Do you notice something strange in main.js?
2. Which of the three versions of stitching separate files to make them work together do you see? (ydkjs lecture)
3. How many kB does main.js use?
4. How many seconds does the build process last?
5. What happens to main.js if you don't `import _ from 'lodash'` and build the code again?
6. Without lodash, how many kB does main.js use?
