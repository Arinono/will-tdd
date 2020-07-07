module.exports = {
  extends: [
    '@storyscript'
  ],
  rules: {
   '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'explicit',
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'off', // Disabled until @typescript/eslint supports #private members
        parameterProperties: 'explicit'
      }
    }],
  }
}
