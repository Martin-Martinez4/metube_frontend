import { CodegenConfig } from '@graphql-codegen/cli';
import 'vite/client'

const config: CodegenConfig = {
  schema: `http://${import.meta.env.VITE_API_URL}/query`,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;