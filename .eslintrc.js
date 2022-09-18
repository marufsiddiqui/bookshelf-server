module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'unicorn'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    /**
     * eslint
     */
    'default-case': 'error',
    'max-classes-per-file': 'off', // Turned off due to graphql files with multiple type-graphql classes
    'max-lines': ['error', 2000],
    'sort-keys': 'off',
    /**
     * @typescript-eslint
     */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/array-type': 'off', // warn
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
        ],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-inferrable-types': 'off', // warn
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/typedef': ['error', { parameter: true, propertyDeclaration: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn', // TODO: should be 'error'

    'import/no-duplicates': 'error',
    'import/export': 'warn',
    'import/no-namespace': 'off',
    'import/first': 'error',
    'import/no-useless-path-segments': [
      'off',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-default-export': 'warn',
    'import/no-extraneous-dependencies': 'warn', // TODO: should be error
    'import/order': 'off', // must be disabled for simple-import-sort to work
    'sort-imports': 'off', // must be disabled for simple-import-sort to work

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Internal MMS packages.
          ['^(@mms)(/.*|$)'],
          // Absolute imports.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    'object-shorthand': ['error', 'always'],
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'off', // disabled because @typescript-eslint/no-unused-expressions is used
    'spaced-comment': 'error',
    eqeqeq: 'error',
    'no-lone-blocks': 'warn',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'warn',
    yoda: 'error',
    'no-useless-return': 'warn',
    'one-var': 'off',
    'prefer-promise-reject-errors': 'warn',
    'no-undef-init': 'error',
    'no-template-curly-in-string': 'off',
    'no-multi-str': 'error',
    'no-return-await': 'warn', // TODO should be error
    'no-return-assign': 'error',
    'no-redeclare': 'error',
    indent: 'off', //turn off for typescript indent
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'no-case-declarations': 'warn',
    'no-empty': 'error',
    'no-console': 'warn',
    'no-duplicate-case': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-inner-declarations': 'error',
    camelcase: 'off',
    'require-yield': 'error',
    'no-undef': 'error',
    'no-dupe-keys': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-parameter-properties': 'off', // used for DI
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    // needs to be disabled because we need to keep optional chaining for your TS type missmatches
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/triple-slash-reference': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    'unicorn/import-style': [
      'error',
      {
        styles: {
          path: {
            named: true,
          },
        },
      },
    ],
    'unicorn/consistent-destructuring': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'warn',
    'unicorn/escape-case': 'error',
    'unicorn/new-for-builtins': 'warn',
    'unicorn/no-abusive-eslint-disable': 'warn',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'warn',
    'unicorn/no-array-reduce': 'warn',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'warn',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-keyword-prefix': 'warn',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-object-as-default-parameter': 'warn',
    'unicorn/no-process-exit': 'warn',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'warn',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'warn',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'warn',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'warn',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'warn',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/require-array-join-separator': 'warn',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/require-post-message-target-origin': 'error',
    'unicorn/throw-new-error': 'error',
  },
}
