import { defineConfig } from 'eslint/config'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

export default defineConfig([
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'off'
        },
        ignores: [
            '.next/**',
            'node_modules/**',
            'out/**',
            'coverage/**',
            'public/**'
        ]
    },
    ...nextCoreWebVitals,
    ...nextTypeScript,
    {
        rules: {
            semi: 0,
            'react/no-unknown-property': 'off',
            'react/prop-types': 'off',
            'space-before-function-paren': 0,
            'react-hooks/exhaustive-deps': 'off',
            'react-hooks/use-memo': 'off',
            'react-hooks/immutability': 'off',
            'react-hooks/set-state-in-effect': 'off',
            'react-hooks/static-components': 'off',
            'react-hooks/globals': 'off',
            'react-hooks/refs': 'off',
            'react-hooks/unsupported-syntax': 'off',
            'react-hooks/preserve-manual-memoization': 'off',
            'jsx-a11y/alt-text': 'off',
            '@next/next/no-img-element': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'import/no-anonymous-default-export': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off'
        }
    },
    {
        files: ['**/*.js'],
        rules: {
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-unsafe-return': 'off'
        }
    }
])
