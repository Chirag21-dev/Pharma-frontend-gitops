module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  rules: {
    // ── Code quality ──────────────────────────────────────────────────────
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'prefer-const': 'error',
    'no-var': 'error',

    // ── React ─────────────────────────────────────────────────────────────
    'react/prop-types': 'warn',           // remind devs to add PropTypes
    'react/no-unused-state': 'warn',
    'react/jsx-no-duplicate-props': 'error',
  },
};
