# Boilerplate code for electron

## Prerequisites for running this project

This project has been tested on Windows 7 & 10 using the following versions without any errors. Newer versions are also likely to work but you can always fallback to the version number specified.

- [NodeJS (v6.4.0)](https://nodejs.org)

- npm (v3.10.3) installed automatically with [NodeJS](https://nodejs.org)

- [Atom text editor](https://atom.io/) with the recommended packages found in the Notes section

- Run the following command
```
-> npm install
```

## What it includes

- [Electron](http://electron.atom.io/)
- [React](https://facebook.github.io/react/docs/getting-started.html)
- [Webpack](http://webpack.github.io/docs/)
- [Babel](https://babeljs.io/) with ES6 & ES7 support
- Hot reloading in development

## Usage
### Development

```
-> npm run dev
```

### Production

```
-> npm run production
```

This bundles the react part of the application into a bundle and minifies the electron part together into a /dist directory. It also starts up the bundled code. Please note that this doesn't have hot reloading capabilites.

### Build

To package the /dist folder into an executable file you can run:

```
-> npm run build-windows
```

Currently this is the only build and it targets 64bit windows.

## Special thanks

The project is based on the following Github repository: [chentsulin/electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate)

## Other helpful links
- [Electron documentation](http://electron.atom.io/docs/)
- [React Components](https://facebook.github.io/react/docs/component-specs.html "Specifications and Lifecycles")
- [ESLint general rules](http://eslint.org/docs/rules/)
- [ESLint react rules](https://github.com/yannickcr/eslint-plugin-react)
- [Electron Fundamentals course](https://www.pluralsight.com/courses/electron-fundamentals)

# Notes
- Be aware that certain packages that this project depends on are subject to updates and could potentially break this build. If this is the case you can either revert said packages to the version specified in the `package.json` file by removing the `^` from the version number or by trying to fix the errors caused by the update.
  
- I recommend the following community packages for atom:
  - [autocomplete-paths](https://atom.io/packages/autocomplete-paths)
  - [file-icons](https://atom.io/packages/file-icons)
  - [highlight-selected](https://atom.io/packages/highlight-selected)
  - [language-babel](https://atom.io/packages/language-babel)
  - [linter](https://atom.io/packages/linter)
  - [linter-eslint](https://atom.io/packages/linter-eslint)
  - [pigments](https://atom.io/packages/pigments)

- Other cool community packages for atom:
  - [docblockr](https://atom.io/packages/docblockr)
  - [emmet](https://atom.io/packages/emmet)
  - [merge-conflicts](https://atom.io/packages/merge-conflicts)
  - [pretty-json](https://atom.io/packages/pretty-json)
  - [todo-show](https://atom.io/packages/todo-show)

- To change the PORT edit the `config` in `package.json`. If you're not building on windows you might also have to change any use of `%npm_package_config_*%` to `$npm_package_config_*`
