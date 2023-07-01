import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://www.dnd5eapi.co/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/gql/index.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true
      },
    },
  },
};

export default config;
