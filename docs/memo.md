# memo

---

## get started

```
npx create-react-app app-name --template typescript
```

## ESLint + Prettier + Typescript and React

### 1. To install ESLint:

```
npm install -D eslint
```

- After installing the ESLint we have to initialize the config file:

```
➜ npx eslint --init
```

- Answering some questions about our project

```
? How would you like to use ESLint? … 
  To check syntax only
▸ To check syntax and find problems
  To check syntax, find problems, and enforce code style

```

```
? What type of modules does your project use? … 
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

```
? Which framework does your project use? … 
▸ React
  Vue.js
  None of these
```

```
? Which framework does your project use? … 
▸ React
  Vue.js
  None of these
```

```
? Does your project use TypeScript? ‣ No / <Yes>
```

```
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node
```

- creating a `.eslintrc.json` file

```
? What format do you want your config file to be in? … 
  JavaScript
  YAML
▸ JSON
```
- Following things installed
```
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.32.0",
    "@typescript-eslint/parser": "^5.32.0",
    "eslint": "^7.32.0",
    "eslint-plugin-react": "^7.30.1"
  }
```

### 2. Before continuing we have to install TypeScript plugins related to ESLint and to do so:

```
npm install -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript

// eslint-plugin-import
// @typescript-eslint/parser
// eslint-import-resolver-typescript
```

- If everything went well your eslintrc file should look something like this:

```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest", // or 12
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}

```

### 3. Let’s install prettier and then edit the eslint and prettier configuration files.

- To install Prettier:

```
npm install -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
```

- After installing you have to create the prettierc file:

```
touch .prettierrc
```

- Open your eslintrc file. If you are going to use or you intend to use Jest in your project add the next lines to your ‘env’:

```
{
    "env": {
        "browser": true,
        "es2021": true,
	"jest": true // Add this line!
    },
	...
}
```


- To use prettier alongside with eslint you need to change the extends object:

```
{
	...
	"extends": [
	  "eslint:recommended",
	  "plugin:react/recommended",
	  "plugin:@typescript-eslint/recommended",
	  "prettier" // Add this line!
	],
	...
}

```

- The main part of ESLint is the rules objects. Here you can put any rule you think is good for your project and team.

```
{
	...
	"rules": {
        "react/react-in-jsx-scope": "off",
        "camelcase": "error",
        "spaced-comment": "error",
        "quotes": ["error", "single"],
        "no-duplicate-imports": "error"
  },
	...
}
```

- If you want to learn more about ESLint rules you can check out [rules](https://eslint.org/docs/latest/rules/) page.


- To use the plugins we have installed, update the plugins object in the eslintrc file:

```
"plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
```

- The last thing to set up in ESLint is the eslint-import-resolver-typescript. Just add the settings key in the eslint configuration file.

```
{
	...
	"settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

- Lastly, we are going to set up the .prettierrc file


```
{
  "semi": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxSingleQuote": true,
  "bracketSpacing": true
}
```

- But if you want to learn more check out the [options](https://prettier.io/docs/en/options.html) page.


### 4. Finally, we have to add the scripts in the package.json:

```
{
	...
	"scripts": {
	  ...
	  "lint": "eslint src/**/*.{js,jsx,ts,tsx,json}",
          "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",
          "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
        },
...
}
```