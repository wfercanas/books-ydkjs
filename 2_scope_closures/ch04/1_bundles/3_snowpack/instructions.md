# Snowpack

## Scope

This exercise is about bundling a small project using **snowpack**. This project tries to use the simplest configuration so you can just check the process of bundling at its easier to understand form.

## Instructions

### Pre-bundling

1. Navigate in your terminal to /3_snowpack directory.
2. Initialize your project with `npm init -y`
3. Create an **index.html** file.
4. Create a **/src** directory and inside of it an **index.js** file
5. Inside **index.html** file, create a div inside the body with "root" as id.
6. Inside **index.html**, add the following script so we can use lodash: `<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>`
7. Check this website to see what you can do with lodash: https://lodash.com/docs/4.17.15 . Notice how each method belongs to the `_` object.
8. Check what does the `_.join()` method do in lodash.
9. In **index.js**, create a Greeting component. This component is a function that is able to get an array of strings, join them using `_.join()` and insert them into the #root element of the HTML document.
10. Don't export Greeting.
11. Execute `Greeting(["Hello", "World"])` at the end of **index.js**.
12. Add **index.js** as a script in **index.html**
13. Open **index.html** in the browser and check that your greeting is on screen.

### Bundling

1. Install snowpack as a dev dependency `npm install snowpack --save-dev`
2. Install lodash as a dependency of the project: `npm install --save lodash`
3. Create the config file executing `npx snowpack init`
4. In snowpack.config.js, find the buildOptions object and add the `out: 'dist'` property.
5. In snowpack.config.js, find the mount object and add the `src: '/'` property.
6. Delete the script for lodash in **index.html**
7. Check that the greeting is no longer printed on screen.
8. Now `import _ from 'lodash'` in **index.js**
9. Execute `npx snowpack build`.
10. Copy **index.html** and paste it in dist/.
11. Inside the copied **index.html** in dist, change the **src** of the remaining script to `src="index.js"` and add `type="module"`.
12. ❓ **Answer question #1 (Check the next section of this document).**
13. The code looks like it is not being minified, go to snowpack.config.js, add the property `optimize: { minify: true }` after the buildOptions object.
14. Run the build process again.
15. Open preview of **index.html** and check if the project still works.

## Questions

1. Is the code in dist/index.js just like in src/index.js?
2. Did the new config affect the result of the bundle? How?
3. Which of the three versions of joining separate files to make them work together do you see? (ydkjs lecture)
4. How many kB does dist/ use?
5. How many seconds does the build process last?
