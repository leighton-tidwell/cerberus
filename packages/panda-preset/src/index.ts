import { defineConfig, definePreset, defineSemanticTokens } from '@pandacss/dev'
import { globalCss } from './globalCss'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { patterns } from './patterns'
import {
  actionTokens,
  dangerTokens,
  infoTokens,
  keyframes,
  neutralTokens,
  successTokens,
  textStyles,
  tokens,
  warningTokens,
} from './theme/index'
import { recipes, slotRecipes } from './recipes'

export const cerberusPreset = definePreset({
  globalCss,
  conditions,
  utilities,
  patterns,

  theme: {
    extend: {
      keyframes,
      recipes,
      slotRecipes,
      textStyles,
      tokens,
    },

    semanticTokens: defineSemanticTokens({
      colors: {
        ...neutralTokens,
        ...actionTokens,
        ...infoTokens,
        ...successTokens,
        ...warningTokens,
        ...dangerTokens,
        // ...brandTokens,
      },
    }),
  },
})

export const cerberusConfig = defineConfig({
  preflight: true,
  prefix: 'cerberus',

  jsxFramework: 'react',
  jsxFactory: 'cerberus',

  outdir: 'styled-system',
})

export * from './conditions'
export * from './patterns'
export * from './utilities'
export * from './theme/keyframes'
export * from './theme/textStyles'
export * from './theme/tokens'
export * from './theme/semantic-tokens/index'
export * from './recipes'
export * from './types'

export * from './recipes/shared/helpers'
export * from './recipes/shared/palettes'
export * from './recipes/shared/states'
