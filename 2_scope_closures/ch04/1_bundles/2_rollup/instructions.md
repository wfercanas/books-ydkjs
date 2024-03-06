# Rollup

## Scope

This exercise is about bundling a small project using **rollup**. This project doesn't tries to use the simplest configuration so you can just check the process of bundling at its easier to grasp form.

## Instructions

### Pre-bundling

1. Navigate in your terminal to /2_rollup directory.
2. Initialize your project with `npm init -y`
3. Install rollup as a dev dependency `npm install rollup --save-dev`
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
7. Inside **index.html**, change the **src** of the remaining script to `src="main.js"`. This is because the bundling process will create this file in **dist/**.
8. Run `npx rollup src/index.js -o dist/main.js -f es`. The output will be generated using ES Modules and without a config file.
9. ❓ **Answer question #1 (Check the next section of this document).**
10. Create the file **rollup.config.mjs** in the root directory of the project.
11. In config file, copy the initial config you see in the Initial config section below. This initial config just expresses the same content we used in the previously executed command.
12. Delete main.js and now run `npx rollup --config`. Confirm that the bundle keeps working as in the initial execution.
13. If everything is ok, you can create a new script in **package.json** like this: `"build": "npx rollup --config"`. From now on, we can just execute `npm run build` to achieve the same results.
14. Check main.js and see that the code is not minified. We must install a plugin for that. Run `npm install @rollup/plugin-terser --save-dev`.
15. `import terser from @rollup/plugin-terser` in config file.
16. Add `terser()` to the plugins array in config file. Should look like: `plugins: [terser()]`.
17. Execute `npm run build`.
18. ❓ **Answer question #2.**
19. Open preview of **index.html** and check if the project still works --at this point, your script tag should use the `type=module` attribute to work because we're using import statements--.
20. Rollup only includes in the build our code and that of relative imports, not node_module imports. Because we're importing lodash and rollup excludes it, our project doesn't work. We will need another plugin to fix this.
21. Run `npm install @rollup/plugin-node-resolve --save-dev`.
22. `import nodeResolve from '@rollup/plugin-node-resolve'` and add `nodeResolve()` to plugins array in config file.
23. Run `npm run build`.
24. Our build process now tries to include lodash in the output but we're having problems between CommonJS modules and ES Modules. If you open index.js in node_modules/lodash, you will see that the library uses module.exports (CommonJS operation), while we're using import in main.js (ES operation). To solve this, yes, we need another plugin.
25. Run `npm install @rollup/plugin-commonjs --save-dev`
26. `import commonjs from '@rollup/plugin-commonjs'` and add `commonjs()` to plugins array in config file.
27. Run `npm run build`
28. If you open **index.html** the greeting message should be again on screen.
29. Answer questions 3 to 7

## Questions

1. Is the code in main.js just like in index.js?
2. Did the plugin affect the result of the bundle? How?
3. Which of the three versions of stitching separate files to make them work together do you see? (ydkjs lecture)
4. How many kB does main.js use?
5. How many seconds does the build process last?

## Initial config

```js
export default {
  input: "src/index.js",
  output: {
    file: "dist/main.js",
    format: "es",
  },
  plugins: [],
};
```
