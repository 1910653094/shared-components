/* {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-methods-use-this": "off",
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": [2, { "extensions": [".jsx", ".tsx"] }],
        "react/require-default-props": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    "ignorePatterns": ["dist/"],
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"], // Your TypeScript files extension

            // As mentioned in the comments, you should extend TypeScript plugins here,
            // instead of extending them outside the `overrides`.
            // If you don't want to extend any rules, you don't need an `extends` attribute.
            "extends": ["airbnb-typescript"],
            "parserOptions": {
                "project": ["./tsconfig.json"] // Specify it only for TypeScript files
            }
        }
    ]
} */

//prettier
/* "semi": true,
  "bracketSpacing": true,
  "arrowParens": "always",
  "tabWidth": 2*/

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['*.js'],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: ['airbnb-typescript', 'plugin:react-hooks/recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'react/jsx-no-bind': [
      'error',
      { allowArrowFunctions: true, allowFunctions: true },
    ],
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    // 'no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],

    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '/e2e/**/*.ts',
          '**/*.test.ts',
          '**/*.test.tsx',
          '/__setup__/**/*.ts',
        ],
      },
    ],
  },
};
