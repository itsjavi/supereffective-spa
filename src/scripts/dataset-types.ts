import type z from 'zod'
import type { z as z$1 } from 'zod'

declare const abilitySchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    psName: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodNullable<z.ZodString>
    shortDesc: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
  },
  {
    id: string
    name: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
  }
>
type Ability = z.infer<typeof abilitySchema>

declare const boxPresetIndexItemSchema: z.ZodObject<
  {
    id: z.ZodString
    gameSet: z.ZodString
    legacyId: z.ZodNullable<z.ZodString>
    name: z.ZodString
  },
  'strict',
  z.ZodTypeAny,
  {
    id: string
    name: string
    gameSet: string
    legacyId: string | null
  },
  {
    id: string
    name: string
    gameSet: string
    legacyId: string | null
  }
>
type BoxPresetIndexItem = z.infer<typeof boxPresetIndexItemSchema>
declare const boxPresetBoxPokemonSchema: z.ZodUnion<
  [
    z.ZodNullable<z.ZodString>,
    z.ZodObject<
      {
        pid: z.ZodString
        gmax: z.ZodOptional<z.ZodBoolean>
        shinyLocked: z.ZodOptional<z.ZodBoolean>
        shiny: z.ZodOptional<z.ZodBoolean>
      },
      'strip',
      z.ZodTypeAny,
      {
        pid: string
        gmax?: boolean | undefined
        shinyLocked?: boolean | undefined
        shiny?: boolean | undefined
      },
      {
        pid: string
        gmax?: boolean | undefined
        shinyLocked?: boolean | undefined
        shiny?: boolean | undefined
      }
    >,
  ]
>
declare const boxPresetBoxSchema: z.ZodObject<
  {
    title: z.ZodOptional<z.ZodString>
    pokemon: z.ZodArray<
      z.ZodUnion<
        [
          z.ZodNullable<z.ZodString>,
          z.ZodObject<
            {
              pid: z.ZodString
              gmax: z.ZodOptional<z.ZodBoolean>
              shinyLocked: z.ZodOptional<z.ZodBoolean>
              shiny: z.ZodOptional<z.ZodBoolean>
            },
            'strip',
            z.ZodTypeAny,
            {
              pid: string
              gmax?: boolean | undefined
              shinyLocked?: boolean | undefined
              shiny?: boolean | undefined
            },
            {
              pid: string
              gmax?: boolean | undefined
              shinyLocked?: boolean | undefined
              shiny?: boolean | undefined
            }
          >,
        ]
      >,
      'many'
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    pokemon: (
      | string
      | {
          pid: string
          gmax?: boolean | undefined
          shinyLocked?: boolean | undefined
          shiny?: boolean | undefined
        }
      | null
    )[]
    title?: string | undefined
  },
  {
    pokemon: (
      | string
      | {
          pid: string
          gmax?: boolean | undefined
          shinyLocked?: boolean | undefined
          shiny?: boolean | undefined
        }
      | null
    )[]
    title?: string | undefined
  }
>
declare const boxPresetSchema: z.ZodObject<
  {
    id: z.ZodString
    legacyId: z.ZodString
    name: z.ZodString
    version: z.ZodNumber
    gameSet: z.ZodString
    description: z.ZodString
    boxes: z.ZodArray<
      z.ZodObject<
        {
          title: z.ZodOptional<z.ZodString>
          pokemon: z.ZodArray<
            z.ZodUnion<
              [
                z.ZodNullable<z.ZodString>,
                z.ZodObject<
                  {
                    pid: z.ZodString
                    gmax: z.ZodOptional<z.ZodBoolean>
                    shinyLocked: z.ZodOptional<z.ZodBoolean>
                    shiny: z.ZodOptional<z.ZodBoolean>
                  },
                  'strip',
                  z.ZodTypeAny,
                  {
                    pid: string
                    gmax?: boolean | undefined
                    shinyLocked?: boolean | undefined
                    shiny?: boolean | undefined
                  },
                  {
                    pid: string
                    gmax?: boolean | undefined
                    shinyLocked?: boolean | undefined
                    shiny?: boolean | undefined
                  }
                >,
              ]
            >,
            'many'
          >
        },
        'strip',
        z.ZodTypeAny,
        {
          pokemon: (
            | string
            | {
                pid: string
                gmax?: boolean | undefined
                shinyLocked?: boolean | undefined
                shiny?: boolean | undefined
              }
            | null
          )[]
          title?: string | undefined
        },
        {
          pokemon: (
            | string
            | {
                pid: string
                gmax?: boolean | undefined
                shinyLocked?: boolean | undefined
                shiny?: boolean | undefined
              }
            | null
          )[]
          title?: string | undefined
        }
      >,
      'many'
    >
    isHidden: z.ZodOptional<z.ZodBoolean>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    gameSet: string
    legacyId: string
    version: number
    description: string
    boxes: {
      pokemon: (
        | string
        | {
            pid: string
            gmax?: boolean | undefined
            shinyLocked?: boolean | undefined
            shiny?: boolean | undefined
          }
        | null
      )[]
      title?: string | undefined
    }[]
    isHidden?: boolean | undefined
  },
  {
    id: string
    name: string
    gameSet: string
    legacyId: string
    version: number
    description: string
    boxes: {
      pokemon: (
        | string
        | {
            pid: string
            gmax?: boolean | undefined
            shinyLocked?: boolean | undefined
            shiny?: boolean | undefined
          }
        | null
      )[]
      title?: string | undefined
    }[]
    isHidden?: boolean | undefined
  }
>
declare const boxPresetMapSchema: z.ZodRecord<
  z.ZodString,
  z.ZodRecord<
    z.ZodString,
    z.ZodObject<
      {
        id: z.ZodString
        legacyId: z.ZodString
        name: z.ZodString
        version: z.ZodNumber
        gameSet: z.ZodString
        description: z.ZodString
        boxes: z.ZodArray<
          z.ZodObject<
            {
              title: z.ZodOptional<z.ZodString>
              pokemon: z.ZodArray<
                z.ZodUnion<
                  [
                    z.ZodNullable<z.ZodString>,
                    z.ZodObject<
                      {
                        pid: z.ZodString
                        gmax: z.ZodOptional<z.ZodBoolean>
                        shinyLocked: z.ZodOptional<z.ZodBoolean>
                        shiny: z.ZodOptional<z.ZodBoolean>
                      },
                      'strip',
                      z.ZodTypeAny,
                      {
                        pid: string
                        gmax?: boolean | undefined
                        shinyLocked?: boolean | undefined
                        shiny?: boolean | undefined
                      },
                      {
                        pid: string
                        gmax?: boolean | undefined
                        shinyLocked?: boolean | undefined
                        shiny?: boolean | undefined
                      }
                    >,
                  ]
                >,
                'many'
              >
            },
            'strip',
            z.ZodTypeAny,
            {
              pokemon: (
                | string
                | {
                    pid: string
                    gmax?: boolean | undefined
                    shinyLocked?: boolean | undefined
                    shiny?: boolean | undefined
                  }
                | null
              )[]
              title?: string | undefined
            },
            {
              pokemon: (
                | string
                | {
                    pid: string
                    gmax?: boolean | undefined
                    shinyLocked?: boolean | undefined
                    shiny?: boolean | undefined
                  }
                | null
              )[]
              title?: string | undefined
            }
          >,
          'many'
        >
        isHidden: z.ZodOptional<z.ZodBoolean>
      },
      'strip',
      z.ZodTypeAny,
      {
        id: string
        name: string
        gameSet: string
        legacyId: string
        version: number
        description: string
        boxes: {
          pokemon: (
            | string
            | {
                pid: string
                gmax?: boolean | undefined
                shinyLocked?: boolean | undefined
                shiny?: boolean | undefined
              }
            | null
          )[]
          title?: string | undefined
        }[]
        isHidden?: boolean | undefined
      },
      {
        id: string
        name: string
        gameSet: string
        legacyId: string
        version: number
        description: string
        boxes: {
          pokemon: (
            | string
            | {
                pid: string
                gmax?: boolean | undefined
                shinyLocked?: boolean | undefined
                shiny?: boolean | undefined
              }
            | null
          )[]
          title?: string | undefined
        }[]
        isHidden?: boolean | undefined
      }
    >
  >
>
type BoxPresetBoxPokemon = z.infer<typeof boxPresetBoxPokemonSchema>
type BoxPresetBox = z.infer<typeof boxPresetBoxSchema>
type BoxPreset = z.infer<typeof boxPresetSchema>
type BoxPresetMap = Map<string, Map<string, BoxPreset>>
type BoxPresetRecord = Record<string, Record<string, BoxPreset>>

declare const characterSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
  },
  {
    id: string
    name: string
  }
>
type Character = z.infer<typeof characterSchema>

declare const characteristicSchema: z.ZodObject<
  {
    id: z.ZodString
    description: z.ZodString
    highestStat: z.ZodEnum<['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'acc', 'eva']>
    ivs: z.ZodArray<z.ZodNumber, 'many'>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    description: string
    highestStat: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva'
    ivs: number[]
  },
  {
    id: string
    description: string
    highestStat: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva'
    ivs: number[]
  }
>
type Characteristic = z.infer<typeof characteristicSchema>

declare const colorSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    color: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    color: string
  },
  {
    id: string
    name: string
    color: string
  }
>
type Color = z.infer<typeof colorSchema>

declare const nameSchema: z$1.ZodString
declare const slugSchema: z$1.ZodString
declare const generationSchema: z$1.ZodNumber
declare const descriptionSchema: z$1.ZodString
declare const detailSchema: z$1.ZodNullable<z$1.ZodString>
declare const hexColorSchema: z$1.ZodString
declare const statIdSchema: z$1.ZodEnum<['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'acc', 'eva']>
type IDType = string
declare const baseEntitySchema: z$1.ZodObject<
  {
    id: z$1.ZodString
    name: z$1.ZodString
  },
  'strip',
  z$1.ZodTypeAny,
  {
    id: string
    name: string
  },
  {
    id: string
    name: string
  }
>
type BaseEntity = z$1.infer<typeof baseEntitySchema>

declare const gameFeatureSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
  },
  {
    id: string
    name: string
  }
>
type GameFeature = z.infer<typeof gameFeatureSchema>

declare const gameSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    fullName: z.ZodOptional<z.ZodString>
    generation: z.ZodNumber
    type: z.ZodEnum<['superset', 'set', 'game', 'dlc']>
    gameSet: z.ZodNullable<z.ZodString>
    gameSuperSet: z.ZodNullable<z.ZodString>
    codename: z.ZodNullable<z.ZodString>
    releaseDate: z.ZodString
    platforms: z.ZodArray<z.ZodEnum<['gb', 'gbc', 'gba', 'nds', '3ds', 'switch', 'mobile']>, 'many'>
    region: z.ZodNullable<z.ZodString>
    originMark: z.ZodNullable<z.ZodString>
    pokedexes: z.ZodArray<z.ZodString, 'many'>
    features: z.ZodObject<
      {
        training: z.ZodBoolean
        shiny: z.ZodBoolean
        items: z.ZodBoolean
        gender: z.ZodBoolean
        nature: z.ZodBoolean
        ball: z.ZodBoolean
        mega: z.ZodBoolean
        zmove: z.ZodBoolean
        gmax: z.ZodBoolean
        alpha: z.ZodBoolean
        tera: z.ZodBoolean
        ribbons: z.ZodBoolean
        marks: z.ZodBoolean
      },
      'strip',
      z.ZodTypeAny,
      {
        gmax: boolean
        shiny: boolean
        training: boolean
        items: boolean
        gender: boolean
        nature: boolean
        ball: boolean
        mega: boolean
        zmove: boolean
        alpha: boolean
        tera: boolean
        ribbons: boolean
        marks: boolean
      },
      {
        gmax: boolean
        shiny: boolean
        training: boolean
        items: boolean
        gender: boolean
        nature: boolean
        ball: boolean
        mega: boolean
        zmove: boolean
        alpha: boolean
        tera: boolean
        ribbons: boolean
        marks: boolean
      }
    >
    storage: z.ZodObject<
      {
        numBoxes: z.ZodNumber
        boxCapacity: z.ZodNumber
      },
      'strip',
      z.ZodTypeAny,
      {
        numBoxes: number
        boxCapacity: number
      },
      {
        numBoxes: number
        boxCapacity: number
      }
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    type: 'set' | 'superset' | 'game' | 'dlc'
    generation: number
    gameSet: string | null
    gameSuperSet: string | null
    codename: string | null
    releaseDate: string
    platforms: ('gb' | 'gbc' | 'gba' | 'nds' | '3ds' | 'switch' | 'mobile')[]
    region: string | null
    originMark: string | null
    pokedexes: string[]
    features: {
      gmax: boolean
      shiny: boolean
      training: boolean
      items: boolean
      gender: boolean
      nature: boolean
      ball: boolean
      mega: boolean
      zmove: boolean
      alpha: boolean
      tera: boolean
      ribbons: boolean
      marks: boolean
    }
    storage: {
      numBoxes: number
      boxCapacity: number
    }
    fullName?: string | undefined
  },
  {
    id: string
    name: string
    type: 'set' | 'superset' | 'game' | 'dlc'
    generation: number
    gameSet: string | null
    gameSuperSet: string | null
    codename: string | null
    releaseDate: string
    platforms: ('gb' | 'gbc' | 'gba' | 'nds' | '3ds' | 'switch' | 'mobile')[]
    region: string | null
    originMark: string | null
    pokedexes: string[]
    features: {
      gmax: boolean
      shiny: boolean
      training: boolean
      items: boolean
      gender: boolean
      nature: boolean
      ball: boolean
      mega: boolean
      zmove: boolean
      alpha: boolean
      tera: boolean
      ribbons: boolean
      marks: boolean
    }
    storage: {
      numBoxes: number
      boxCapacity: number
    }
    fullName?: string | undefined
  }
>
type Game = z.infer<typeof gameSchema>

declare const itemCategorySchema: z.ZodEnum<
  ['ball', 'medicine', 'battle', 'berry', 'holdable', 'evolution', 'machine', 'treasure', 'ingredient', 'key', 'other']
>
type ItemCategory = z.infer<typeof itemCategorySchema>
declare const itemSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    psName: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodNullable<z.ZodString>
    shortDesc: z.ZodString
    category: z.ZodEnum<
      [
        'ball',
        'medicine',
        'battle',
        'berry',
        'holdable',
        'evolution',
        'machine',
        'treasure',
        'ingredient',
        'key',
        'other',
      ]
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
    category:
      | 'ball'
      | 'medicine'
      | 'battle'
      | 'berry'
      | 'holdable'
      | 'evolution'
      | 'machine'
      | 'treasure'
      | 'ingredient'
      | 'key'
      | 'other'
  },
  {
    id: string
    name: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
    category:
      | 'ball'
      | 'medicine'
      | 'battle'
      | 'berry'
      | 'holdable'
      | 'evolution'
      | 'machine'
      | 'treasure'
      | 'ingredient'
      | 'key'
      | 'other'
  }
>
type Item = z.infer<typeof itemSchema>

declare const languageSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    isoCode: z.ZodString
    locale: z.ZodNullable<z.ZodString>
    urlSlug: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    isoCode: string
    locale: string | null
    urlSlug: string
  },
  {
    id: string
    name: string
    isoCode: string
    locale: string | null
    urlSlug: string
  }
>
type Language = z.infer<typeof languageSchema>

declare const locationSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    gameIds: z.ZodUnion<[z.ZodArray<z.ZodString, 'many'>, z.ZodLiteral<'*'>]>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    gameIds: (string[] | '*') & (string[] | '*' | undefined)
  },
  {
    id: string
    name: string
    gameIds: (string[] | '*') & (string[] | '*' | undefined)
  }
>
type Location = z.infer<typeof locationSchema>

declare const markSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    title: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodString
    conditions: z.ZodString
    chance: z.ZodString
    chanceCharm: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    generation: number
    desc: string
    title: string
    conditions: string
    chance: string
    chanceCharm: string
  },
  {
    id: string
    name: string
    generation: number
    desc: string
    title: string
    conditions: string
    chance: string
    chanceCharm: string
  }
>
type Mark = z.infer<typeof markSchema>

declare const moveSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    psName: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodNullable<z.ZodString>
    shortDesc: z.ZodString
    type: z.ZodString
    power: z.ZodNumber
    accuracy: z.ZodNumber
    pp: z.ZodNumber
    category: z.ZodEnum<['physical', 'special', 'status']>
    priority: z.ZodNumber
    isZ: z.ZodBoolean
    isGmax: z.ZodBoolean
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    type: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
    category: 'status' | 'physical' | 'special'
    power: number
    accuracy: number
    pp: number
    priority: number
    isZ: boolean
    isGmax: boolean
  },
  {
    id: string
    name: string
    type: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
    category: 'status' | 'physical' | 'special'
    power: number
    accuracy: number
    pp: number
    priority: number
    isZ: boolean
    isGmax: boolean
  }
>
type Move = z.infer<typeof moveSchema>

declare const natureSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    raises: z.ZodNullable<z.ZodEnum<['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'acc', 'eva']>>
    lowers: z.ZodNullable<z.ZodEnum<['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'acc', 'eva']>>
    berry: z.ZodNullable<z.ZodString>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    berry: string | null
    raises: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
    lowers: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
  },
  {
    id: string
    name: string
    berry: string | null
    raises: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
    lowers: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
  }
>
type Nature = z.infer<typeof natureSchema>

declare const originMarkSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
  },
  {
    id: string
    name: string
  }
>
type OriginMark = z.infer<typeof originMarkSchema>

declare const pokedexItemIndexSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    region: z.ZodNullable<z.ZodString>
    baseDex: z.ZodNullable<z.ZodString>
    pokeApiId: z.ZodOptional<z.ZodNumber>
  },
  'strict',
  z.ZodTypeAny,
  {
    id: string
    name: string
    region: string | null
    baseDex: string | null
    pokeApiId?: number | undefined
  },
  {
    id: string
    name: string
    region: string | null
    baseDex: string | null
    pokeApiId?: number | undefined
  }
>
type PokedexIndexItem = z.infer<typeof pokedexItemIndexSchema>
declare const pokedexEntrySchema: z.ZodObject<
  {
    id: z.ZodString
    dexNum: z.ZodOptional<z.ZodNumber>
    isForm: z.ZodBoolean
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    isForm: boolean
    dexNum?: number | undefined
  },
  {
    id: string
    isForm: boolean
    dexNum?: number | undefined
  }
>
declare const pokedexSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    region: z.ZodNullable<z.ZodString>
    generation: z.ZodNumber
    gameIds: z.ZodArray<z.ZodString, 'many'>
    baseDex: z.ZodNullable<z.ZodString>
    pokeApiId: z.ZodOptional<z.ZodNumber>
    entries: z.ZodArray<
      z.ZodObject<
        {
          id: z.ZodString
          dexNum: z.ZodOptional<z.ZodNumber>
          isForm: z.ZodBoolean
        },
        'strip',
        z.ZodTypeAny,
        {
          id: string
          isForm: boolean
          dexNum?: number | undefined
        },
        {
          id: string
          isForm: boolean
          dexNum?: number | undefined
        }
      >,
      'many'
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    entries: {
      id: string
      isForm: boolean
      dexNum?: number | undefined
    }[]
    generation: number
    region: string | null
    gameIds: string[]
    baseDex: string | null
    pokeApiId?: number | undefined
  },
  {
    id: string
    name: string
    entries: {
      id: string
      isForm: boolean
      dexNum?: number | undefined
    }[]
    generation: number
    region: string | null
    gameIds: string[]
    baseDex: string | null
    pokeApiId?: number | undefined
  }
>
type Pokedex = z.infer<typeof pokedexSchema>
type PokedexEntry = z.infer<typeof pokedexEntrySchema>

declare const pokemonIndexItemSchema: z.ZodObject<
  {
    id: z.ZodString
    nid: z.ZodString
    name: z.ZodString
    region: z.ZodString
    isForm: z.ZodBoolean
  },
  'strict',
  z.ZodTypeAny,
  {
    id: string
    name: string
    region: string
    isForm: boolean
    nid: string
  },
  {
    id: string
    name: string
    region: string
    isForm: boolean
    nid: string
  }
>
type PokemonIndexItem = z.infer<typeof pokemonIndexItemSchema>
declare const pokemonTextSchema: z.ZodObject<
  {
    name: z.ZodString
    genus: z.ZodString
    flavorText: z.ZodArray<
      z.ZodObject<
        {
          game: z.ZodString
          text: z.ZodString
        },
        'strip',
        z.ZodTypeAny,
        {
          game: string
          text: string
        },
        {
          game: string
          text: string
        }
      >,
      'many'
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    name: string
    genus: string
    flavorText: {
      game: string
      text: string
    }[]
  },
  {
    name: string
    genus: string
    flavorText: {
      game: string
      text: string
    }[]
  }
>
type PokemonText = z.infer<typeof pokemonTextSchema>
declare const pokemonTextIndexSchema: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>>
type PokemonTextIndex = z.infer<typeof pokemonTextIndexSchema>
declare const pokemonTextByLangSchema: z.ZodRecord<
  z.ZodString,
  z.ZodObject<
    {
      name: z.ZodString
      genus: z.ZodString
      flavorText: z.ZodArray<
        z.ZodObject<
          {
            game: z.ZodString
            text: z.ZodString
          },
          'strip',
          z.ZodTypeAny,
          {
            game: string
            text: string
          },
          {
            game: string
            text: string
          }
        >,
        'many'
      >
    },
    'strip',
    z.ZodTypeAny,
    {
      name: string
      genus: string
      flavorText: {
        game: string
        text: string
      }[]
    },
    {
      name: string
      genus: string
      flavorText: {
        game: string
        text: string
      }[]
    }
  >
>
type PokemonTextByLang = z.infer<typeof pokemonTextByLangSchema>
declare const pokemonSchema: z.ZodObject<
  {
    id: z.ZodString
    nid: z.ZodString
    dexNum: z.ZodNumber
    formId: z.ZodNullable<z.ZodString>
    name: z.ZodString
    formName: z.ZodNullable<z.ZodString>
    region: z.ZodString
    generation: z.ZodNumber
    type1: z.ZodString
    type2: z.ZodNullable<z.ZodString>
    /**
     * Forced tera type (e.g. for Ogerpon and Terapagos)
     */
    teraType: z.ZodNullable<z.ZodString>
    color: z.ZodString
    abilities: z.ZodObject<
      {
        primary: z.ZodString
        secondary: z.ZodNullable<z.ZodString>
        hidden: z.ZodNullable<z.ZodString>
      },
      'strict',
      z.ZodTypeAny,
      {
        primary: string
        secondary: string | null
        hidden: string | null
      },
      {
        primary: string
        secondary: string | null
        hidden: string | null
      }
    >
    isDefault: z.ZodBoolean
    isForm: z.ZodBoolean
    isLegendary: z.ZodBoolean
    isMythical: z.ZodBoolean
    isUltraBeast: z.ZodBoolean
    ultraBeastCode: z.ZodNullable<z.ZodString>
    isParadox: z.ZodOptional<z.ZodBoolean>
    paradoxSpecies: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, 'many'>>>
    isConvergent: z.ZodOptional<z.ZodBoolean>
    convergentSpecies: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, 'many'>>>
    isSpecialAbilityForm: z.ZodBoolean
    isCosmeticForm: z.ZodBoolean
    isFemaleForm: z.ZodBoolean
    hasGenderDifferences: z.ZodBoolean
    isBattleOnlyForm: z.ZodBoolean
    isSwitchableForm: z.ZodBoolean
    isFusion: z.ZodBoolean
    fusedWith: z.ZodNullable<z.ZodArray<z.ZodString, 'many'>>
    isMega: z.ZodBoolean
    isPrimal: z.ZodBoolean
    isGmax: z.ZodBoolean
    isRegional: z.ZodBoolean
    canGmax: z.ZodBoolean
    canDynamax: z.ZodBoolean
    canBeAlpha: z.ZodBoolean
    debutIn: z.ZodString
    obtainableIn: z.ZodArray<z.ZodString, 'many'>
    versionExclusiveIn: z.ZodArray<z.ZodString, 'many'>
    eventOnlyIn: z.ZodArray<z.ZodString, 'many'>
    storableIn: z.ZodArray<z.ZodString, 'many'>
    registrableIn: z.ZodArray<z.ZodString, 'many'>
    shinyReleased: z.ZodBoolean
    shinyBase: z.ZodNullable<z.ZodString>
    baseStats: z.ZodObject<
      {
        hp: z.ZodNumber
        atk: z.ZodNumber
        def: z.ZodNumber
        spa: z.ZodNumber
        spd: z.ZodNumber
        spe: z.ZodNumber
      },
      'strict',
      z.ZodTypeAny,
      {
        hp: number
        atk: number
        def: number
        spa: number
        spd: number
        spe: number
      },
      {
        hp: number
        atk: number
        def: number
        spa: number
        spd: number
        spe: number
      }
    >
    weight: z.ZodNumber
    height: z.ZodNumber
    maleRate: z.ZodNumber
    femaleRate: z.ZodNumber
    baseSpecies: z.ZodNullable<z.ZodString>
    baseForms: z.ZodArray<z.ZodString, 'many'>
    forms: z.ZodArray<z.ZodString, 'many'>
    family: z.ZodOptional<z.ZodNullable<z.ZodString>>
    evolvesFrom: z.ZodNullable<
      z.ZodObject<
        {
          pokemon: z.ZodOptional<z.ZodNullable<z.ZodString>>
          level: z.ZodOptional<z.ZodNumber>
          item: z.ZodOptional<z.ZodNullable<z.ZodString>>
          move: z.ZodOptional<z.ZodNullable<z.ZodString>>
          type: z.ZodOptional<z.ZodNullable<z.ZodString>>
          region: z.ZodOptional<z.ZodNullable<z.ZodString>>
          ability: z.ZodOptional<z.ZodNullable<z.ZodString>>
          condition: z.ZodOptional<z.ZodNullable<z.ZodString>>
        },
        'strict',
        z.ZodTypeAny,
        {
          pokemon?: string | null | undefined
          level?: number | undefined
          item?: string | null | undefined
          move?: string | null | undefined
          type?: string | null | undefined
          region?: string | null | undefined
          ability?: string | null | undefined
          condition?: string | null | undefined
        },
        {
          pokemon?: string | null | undefined
          level?: number | undefined
          item?: string | null | undefined
          move?: string | null | undefined
          type?: string | null | undefined
          region?: string | null | undefined
          ability?: string | null | undefined
          condition?: string | null | undefined
        }
      >
    >
    refs: z.ZodObject<
      {
        smogon: z.ZodString
        showdown: z.ZodString
        showdownName: z.ZodString
        serebii: z.ZodString
        bulbapedia: z.ZodString
      },
      'strict',
      z.ZodTypeAny,
      {
        smogon: string
        showdown: string
        showdownName: string
        serebii: string
        bulbapedia: string
      },
      {
        smogon: string
        showdown: string
        showdownName: string
        serebii: string
        bulbapedia: string
      }
    >
  },
  'strict',
  z.ZodTypeAny,
  {
    id: string
    name: string
    generation: number
    color: string
    region: string
    isGmax: boolean
    dexNum: number
    isForm: boolean
    nid: string
    formId: string | null
    formName: string | null
    type1: string
    type2: string | null
    teraType: string | null
    abilities: {
      primary: string
      secondary: string | null
      hidden: string | null
    }
    isDefault: boolean
    isLegendary: boolean
    isMythical: boolean
    isUltraBeast: boolean
    ultraBeastCode: string | null
    isSpecialAbilityForm: boolean
    isCosmeticForm: boolean
    isFemaleForm: boolean
    hasGenderDifferences: boolean
    isBattleOnlyForm: boolean
    isSwitchableForm: boolean
    isFusion: boolean
    fusedWith: string[] | null
    isMega: boolean
    isPrimal: boolean
    isRegional: boolean
    canGmax: boolean
    canDynamax: boolean
    canBeAlpha: boolean
    debutIn: string
    obtainableIn: string[]
    versionExclusiveIn: string[]
    eventOnlyIn: string[]
    storableIn: string[]
    registrableIn: string[]
    shinyReleased: boolean
    shinyBase: string | null
    baseStats: {
      hp: number
      atk: number
      def: number
      spa: number
      spd: number
      spe: number
    }
    weight: number
    height: number
    maleRate: number
    femaleRate: number
    baseSpecies: string | null
    baseForms: string[]
    forms: string[]
    evolvesFrom: {
      pokemon?: string | null | undefined
      level?: number | undefined
      item?: string | null | undefined
      move?: string | null | undefined
      type?: string | null | undefined
      region?: string | null | undefined
      ability?: string | null | undefined
      condition?: string | null | undefined
    } | null
    refs: {
      smogon: string
      showdown: string
      showdownName: string
      serebii: string
      bulbapedia: string
    }
    isParadox?: boolean | undefined
    paradoxSpecies?: string[] | null | undefined
    isConvergent?: boolean | undefined
    convergentSpecies?: string[] | null | undefined
    family?: string | null | undefined
  },
  {
    id: string
    name: string
    generation: number
    color: string
    region: string
    isGmax: boolean
    dexNum: number
    isForm: boolean
    nid: string
    formId: string | null
    formName: string | null
    type1: string
    type2: string | null
    teraType: string | null
    abilities: {
      primary: string
      secondary: string | null
      hidden: string | null
    }
    isDefault: boolean
    isLegendary: boolean
    isMythical: boolean
    isUltraBeast: boolean
    ultraBeastCode: string | null
    isSpecialAbilityForm: boolean
    isCosmeticForm: boolean
    isFemaleForm: boolean
    hasGenderDifferences: boolean
    isBattleOnlyForm: boolean
    isSwitchableForm: boolean
    isFusion: boolean
    fusedWith: string[] | null
    isMega: boolean
    isPrimal: boolean
    isRegional: boolean
    canGmax: boolean
    canDynamax: boolean
    canBeAlpha: boolean
    debutIn: string
    obtainableIn: string[]
    versionExclusiveIn: string[]
    eventOnlyIn: string[]
    storableIn: string[]
    registrableIn: string[]
    shinyReleased: boolean
    shinyBase: string | null
    baseStats: {
      hp: number
      atk: number
      def: number
      spa: number
      spd: number
      spe: number
    }
    weight: number
    height: number
    maleRate: number
    femaleRate: number
    baseSpecies: string | null
    baseForms: string[]
    forms: string[]
    evolvesFrom: {
      pokemon?: string | null | undefined
      level?: number | undefined
      item?: string | null | undefined
      move?: string | null | undefined
      type?: string | null | undefined
      region?: string | null | undefined
      ability?: string | null | undefined
      condition?: string | null | undefined
    } | null
    refs: {
      smogon: string
      showdown: string
      showdownName: string
      serebii: string
      bulbapedia: string
    }
    isParadox?: boolean | undefined
    paradoxSpecies?: string[] | null | undefined
    isConvergent?: boolean | undefined
    convergentSpecies?: string[] | null | undefined
    family?: string | null | undefined
  }
>
type Pokemon = z.infer<typeof pokemonSchema>
declare const pokemonCompactSchema: z.ZodObject<
  Pick<
    {
      id: z.ZodString
      nid: z.ZodString
      dexNum: z.ZodNumber
      formId: z.ZodNullable<z.ZodString>
      name: z.ZodString
      formName: z.ZodNullable<z.ZodString>
      region: z.ZodString
      generation: z.ZodNumber
      type1: z.ZodString
      type2: z.ZodNullable<z.ZodString>
      /**
       * Forced tera type (e.g. for Ogerpon and Terapagos)
       */
      teraType: z.ZodNullable<z.ZodString>
      color: z.ZodString
      abilities: z.ZodObject<
        {
          primary: z.ZodString
          secondary: z.ZodNullable<z.ZodString>
          hidden: z.ZodNullable<z.ZodString>
        },
        'strict',
        z.ZodTypeAny,
        {
          primary: string
          secondary: string | null
          hidden: string | null
        },
        {
          primary: string
          secondary: string | null
          hidden: string | null
        }
      >
      isDefault: z.ZodBoolean
      isForm: z.ZodBoolean
      isLegendary: z.ZodBoolean
      isMythical: z.ZodBoolean
      isUltraBeast: z.ZodBoolean
      ultraBeastCode: z.ZodNullable<z.ZodString>
      isParadox: z.ZodOptional<z.ZodBoolean>
      paradoxSpecies: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, 'many'>>>
      isConvergent: z.ZodOptional<z.ZodBoolean>
      convergentSpecies: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, 'many'>>>
      isSpecialAbilityForm: z.ZodBoolean
      isCosmeticForm: z.ZodBoolean
      isFemaleForm: z.ZodBoolean
      hasGenderDifferences: z.ZodBoolean
      isBattleOnlyForm: z.ZodBoolean
      isSwitchableForm: z.ZodBoolean
      isFusion: z.ZodBoolean
      fusedWith: z.ZodNullable<z.ZodArray<z.ZodString, 'many'>>
      isMega: z.ZodBoolean
      isPrimal: z.ZodBoolean
      isGmax: z.ZodBoolean
      isRegional: z.ZodBoolean
      canGmax: z.ZodBoolean
      canDynamax: z.ZodBoolean
      canBeAlpha: z.ZodBoolean
      debutIn: z.ZodString
      obtainableIn: z.ZodArray<z.ZodString, 'many'>
      versionExclusiveIn: z.ZodArray<z.ZodString, 'many'>
      eventOnlyIn: z.ZodArray<z.ZodString, 'many'>
      storableIn: z.ZodArray<z.ZodString, 'many'>
      registrableIn: z.ZodArray<z.ZodString, 'many'>
      shinyReleased: z.ZodBoolean
      shinyBase: z.ZodNullable<z.ZodString>
      baseStats: z.ZodObject<
        {
          hp: z.ZodNumber
          atk: z.ZodNumber
          def: z.ZodNumber
          spa: z.ZodNumber
          spd: z.ZodNumber
          spe: z.ZodNumber
        },
        'strict',
        z.ZodTypeAny,
        {
          hp: number
          atk: number
          def: number
          spa: number
          spd: number
          spe: number
        },
        {
          hp: number
          atk: number
          def: number
          spa: number
          spd: number
          spe: number
        }
      >
      weight: z.ZodNumber
      height: z.ZodNumber
      maleRate: z.ZodNumber
      femaleRate: z.ZodNumber
      baseSpecies: z.ZodNullable<z.ZodString>
      baseForms: z.ZodArray<z.ZodString, 'many'>
      forms: z.ZodArray<z.ZodString, 'many'>
      family: z.ZodOptional<z.ZodNullable<z.ZodString>>
      evolvesFrom: z.ZodNullable<
        z.ZodObject<
          {
            pokemon: z.ZodOptional<z.ZodNullable<z.ZodString>>
            level: z.ZodOptional<z.ZodNumber>
            item: z.ZodOptional<z.ZodNullable<z.ZodString>>
            move: z.ZodOptional<z.ZodNullable<z.ZodString>>
            type: z.ZodOptional<z.ZodNullable<z.ZodString>>
            region: z.ZodOptional<z.ZodNullable<z.ZodString>>
            ability: z.ZodOptional<z.ZodNullable<z.ZodString>>
            condition: z.ZodOptional<z.ZodNullable<z.ZodString>>
          },
          'strict',
          z.ZodTypeAny,
          {
            pokemon?: string | null | undefined
            level?: number | undefined
            item?: string | null | undefined
            move?: string | null | undefined
            type?: string | null | undefined
            region?: string | null | undefined
            ability?: string | null | undefined
            condition?: string | null | undefined
          },
          {
            pokemon?: string | null | undefined
            level?: number | undefined
            item?: string | null | undefined
            move?: string | null | undefined
            type?: string | null | undefined
            region?: string | null | undefined
            ability?: string | null | undefined
            condition?: string | null | undefined
          }
        >
      >
      refs: z.ZodObject<
        {
          smogon: z.ZodString
          showdown: z.ZodString
          showdownName: z.ZodString
          serebii: z.ZodString
          bulbapedia: z.ZodString
        },
        'strict',
        z.ZodTypeAny,
        {
          smogon: string
          showdown: string
          showdownName: string
          serebii: string
          bulbapedia: string
        },
        {
          smogon: string
          showdown: string
          showdownName: string
          serebii: string
          bulbapedia: string
        }
      >
    },
    | 'id'
    | 'name'
    | 'generation'
    | 'color'
    | 'region'
    | 'dexNum'
    | 'isForm'
    | 'nid'
    | 'formId'
    | 'formName'
    | 'type1'
    | 'type2'
    | 'isDefault'
    | 'isSpecialAbilityForm'
    | 'isCosmeticForm'
    | 'isFemaleForm'
    | 'storableIn'
    | 'baseSpecies'
  >,
  'strict',
  z.ZodTypeAny,
  {
    id: string
    name: string
    generation: number
    color: string
    region: string
    dexNum: number
    isForm: boolean
    nid: string
    formId: string | null
    formName: string | null
    type1: string
    type2: string | null
    isDefault: boolean
    isSpecialAbilityForm: boolean
    isCosmeticForm: boolean
    isFemaleForm: boolean
    storableIn: string[]
    baseSpecies: string | null
  },
  {
    id: string
    name: string
    generation: number
    color: string
    region: string
    dexNum: number
    isForm: boolean
    nid: string
    formId: string | null
    formName: string | null
    type1: string
    type2: string | null
    isDefault: boolean
    isSpecialAbilityForm: boolean
    isCosmeticForm: boolean
    isFemaleForm: boolean
    storableIn: string[]
    baseSpecies: string | null
  }
>
type CompactPokemon = z.infer<typeof pokemonCompactSchema>
type LegacyPokemon = {
  id: string
  nid: string
  dexNum: number
  formId: string | null
  name: string
  formName: string | null
  region: string
  generation: number
  type1: string
  type2: string | null
  /**
   * Forced tera type (e.g. for Ogerpon and Terapagos)
   */
  teraType: string | null
  color: string
  isDefault: boolean
  isForm: boolean
  isSpecialAbilityForm: boolean
  isCosmeticForm: boolean
  isFemaleForm: boolean
  hasGenderDifferences: boolean
  maleRate: number
  femaleRate: number
  isBattleOnlyForm: boolean
  isSwitchableForm: boolean
  isMega: boolean
  isPrimal: boolean
  isGmax: boolean
  canGmax: boolean
  canDynamax: boolean
  canBeAlpha: boolean
  debutIn: string
  obtainableIn: string[]
  versionExclusiveIn: string[]
  eventOnlyIn: string[]
  storableIn: string[]
  shinyReleased: boolean
  shinyBase: string | null
  baseSpecies: string | null
  forms: string[] | null
  refs: {
    /**
     * Bulbapedia URL slug, without `_(Pokémon)` at the end
     */
    bulbapedia: string | null
    /**
     * Serebii URL slug
     */
    serebii: string | null
    /**
     * Smogon URL slug
     */
    smogon: string | null
    /**
     * Showdown! Internal ID
     */
    showdown: string | null
    /**
     * Showdown! Name for the Showdown! Markup Language (team builder)
     */
    showdownName: string | null
  }
}

declare const regionSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    generations: z.ZodArray<z.ZodNumber, 'many'>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    generations: number[]
  },
  {
    id: string
    name: string
    generations: number[]
  }
>
type Region = z.infer<typeof regionSchema>

declare const ribbonSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    title: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodString
    category: z.ZodEnum<['league', 'contest', 'tower', 'memory', 'gift']>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    generation: number
    desc: string
    title: string
    category: 'league' | 'contest' | 'tower' | 'memory' | 'gift'
  },
  {
    id: string
    name: string
    generation: number
    desc: string
    title: string
    category: 'league' | 'contest' | 'tower' | 'memory' | 'gift'
  }
>
type Ribbon = z.infer<typeof ribbonSchema>

declare const pokeTypeIdSchema: z.ZodEnum<
  [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
    'shadow',
    'stellar',
  ]
>
declare const pokeTypeSchema: z.ZodObject<
  {
    id: z.ZodEnum<
      [
        'normal',
        'fire',
        'water',
        'electric',
        'grass',
        'ice',
        'fighting',
        'poison',
        'ground',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dragon',
        'dark',
        'steel',
        'fairy',
        'shadow',
        'stellar',
      ]
    >
    name: z.ZodString
    color: z.ZodString
    isCanonical: z.ZodBoolean
  },
  'strip',
  z.ZodTypeAny,
  {
    id:
      | 'normal'
      | 'fire'
      | 'water'
      | 'electric'
      | 'grass'
      | 'ice'
      | 'fighting'
      | 'poison'
      | 'ground'
      | 'flying'
      | 'psychic'
      | 'bug'
      | 'rock'
      | 'ghost'
      | 'dragon'
      | 'dark'
      | 'steel'
      | 'fairy'
      | 'shadow'
      | 'stellar'
    name: string
    color: string
    isCanonical: boolean
  },
  {
    id:
      | 'normal'
      | 'fire'
      | 'water'
      | 'electric'
      | 'grass'
      | 'ice'
      | 'fighting'
      | 'poison'
      | 'ground'
      | 'flying'
      | 'psychic'
      | 'bug'
      | 'rock'
      | 'ghost'
      | 'dragon'
      | 'dark'
      | 'steel'
      | 'fairy'
      | 'shadow'
      | 'stellar'
    name: string
    color: string
    isCanonical: boolean
  }
>
type PokeType = z.infer<typeof pokeTypeSchema>
type PokeTypeId = z.infer<typeof pokeTypeIdSchema>

declare const pokemonColors: Color[]
declare const pokemonLanguages: Language[]
declare const pokemonNatures: Nature[]
declare const pokemonOriginMarks: OriginMark[]
declare const pokemonRegions: Region[]
declare const pokemonTypes: PokeType[]
declare const pokemonGames: Game[]
declare const pokedexesIndex: PokedexIndexItem[]
declare const pokemonIndex: PokemonIndexItem[]
declare const gameFeatures: GameFeature[]
declare const characteristics: Characteristic[]
declare const pokemonColorsMap: Map<
  string,
  {
    id: string
    name: string
    color: string
  }
>
declare const pokemonLanguagesMap: Map<
  string,
  {
    id: string
    name: string
    isoCode: string
    locale: string | null
    urlSlug: string
  }
>
declare const pokemonNaturesMap: Map<
  string,
  {
    id: string
    name: string
    berry: string | null
    raises: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
    lowers: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
  }
>
declare const pokemonOriginMarksMap: Map<
  string,
  {
    id: string
    name: string
  }
>
declare const pokemonRegionsMap: Map<
  string,
  {
    id: string
    name: string
    generations: number[]
  }
>
declare const pokemonTypesMap: Map<
  string,
  {
    id:
      | 'normal'
      | 'fire'
      | 'water'
      | 'electric'
      | 'grass'
      | 'ice'
      | 'fighting'
      | 'poison'
      | 'ground'
      | 'flying'
      | 'psychic'
      | 'bug'
      | 'rock'
      | 'ghost'
      | 'dragon'
      | 'dark'
      | 'steel'
      | 'fairy'
      | 'shadow'
      | 'stellar'
    name: string
    color: string
    isCanonical: boolean
  }
>
declare const pokemonGamesMap: Map<
  string,
  {
    id: string
    name: string
    type: 'set' | 'superset' | 'game' | 'dlc'
    generation: number
    gameSet: string | null
    gameSuperSet: string | null
    codename: string | null
    releaseDate: string
    platforms: ('gb' | 'gbc' | 'gba' | 'nds' | '3ds' | 'switch' | 'mobile')[]
    region: string | null
    originMark: string | null
    pokedexes: string[]
    features: {
      gmax: boolean
      shiny: boolean
      training: boolean
      items: boolean
      gender: boolean
      nature: boolean
      ball: boolean
      mega: boolean
      zmove: boolean
      alpha: boolean
      tera: boolean
      ribbons: boolean
      marks: boolean
    }
    storage: {
      numBoxes: number
      boxCapacity: number
    }
    fullName?: string | undefined
  }
>
declare const pokedexesIndexMap: Map<
  string,
  {
    id: string
    name: string
    region: string | null
    baseDex: string | null
    pokeApiId?: number | undefined
  }
>
declare const pokemonIndexMap: Map<
  string,
  {
    id: string
    name: string
    region: string
    isForm: boolean
    nid: string
  }
>
declare const gameFeaturesMap: Map<
  string,
  {
    id: string
    name: string
  }
>
declare const characteristicsMap: Map<
  string,
  {
    id: string
    description: string
    highestStat: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva'
    ivs: number[]
  }
>

interface Entity {
  id: string
  name: string
}

declare function getSiblingEntities<R extends Entity = Entity>(
  collection: R[],
  id: string,
): {
  prev: R | null
  next: R | null
}
declare function findResourceByField<R extends Entity = Entity>(
  collection: Array<R>,
  field: keyof R,
  value: string | number | boolean | undefined | null,
): R | undefined
declare function findResourceById<R extends Entity = Entity>(collection: Array<R>, id: string): R | undefined
declare function findResourcesByIds<R extends Entity = Entity>(collection: Array<R>, ids: Array<string>): Array<R>
declare function getResourceByField<R extends Entity = Entity>(
  collection: Array<R>,
  field: keyof R,
  id: string,
  title?: string,
): R
declare function getResourceById<R extends Entity = Entity>(collection: Array<R>, id: string, title?: string): R
declare function findResource<R extends Entity = Entity>(
  dirName: string,
  groupId: string | null | undefined,
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<R | undefined>
declare function getResource<R extends Entity = Entity>(
  dirName: string,
  groupId: string | null | undefined,
  id: string,
  baseUrl: string,
  title?: string,
  params?: NextCompatibleRequestInit,
): Promise<R>

declare function getAllAbilities(baseUrl: string, params?: NextCompatibleRequestInit): Promise<Ability[]>
declare function findAbilityById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Ability | undefined>
declare function getAbilityById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<Ability>
declare function findAbilitiesByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Ability[]>

declare function getAllBoxPresets(baseUrl: string, params?: NextCompatibleRequestInit): Promise<BoxPreset[]>
declare function getBoxPresetById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<BoxPreset>
declare function findBoxPresetById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<BoxPreset | undefined>
declare function findBoxPresetsByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<BoxPreset[]>
declare function fetchBoxPresetIndex(baseUrl: string, params?: NextCompatibleRequestInit): Promise<BoxPresetIndexItem[]>
declare function fetchBoxPreset(
  id: string,
  gameSetId: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<BoxPreset>

declare function getAllCharacters(baseUrl: string, params?: NextCompatibleRequestInit): Promise<Character[]>
declare function getCharacterById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<Character>
declare function findCharacterById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Character | undefined>
declare function findCharactersByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Character[]>

declare function getAllGames(_baseUrl: string): Promise<Game[]>
declare function getGameById(id: string, baseUrl: string): Promise<Game>
declare function findGameById(id: string, baseUrl: string): Promise<Game | undefined>
declare function findGamesByIds(ids: Array<string>, baseUrl: string): Promise<Game[]>

declare function getAllItems(baseUrl: string, params?: NextCompatibleRequestInit): Promise<Item[]>
declare function getItemById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<Item>
declare function findItemById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Item | undefined>
declare function findItemsByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Item[]>

declare function getAllLocations(baseUrl: string, params?: NextCompatibleRequestInit): Promise<Location[]>
declare function getLocationById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<Location>
declare function findLocationById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Location | undefined>
declare function findLocationsByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Location[]>

declare function getAllMarks(baseUrl: string, params?: NextCompatibleRequestInit): Promise<Mark[]>
declare function getMarkById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<Mark>
declare function findMarkById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Mark | undefined>
declare function findMarksByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Mark[]>

declare function getAllMoves(baseUrl: string, params?: NextCompatibleRequestInit): Promise<Move[]>
declare function getMoveById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<Move>
declare function findMoveById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Move | undefined>
declare function findMovesByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Move[]>

declare function getAllPokedexes(baseUrl: string, params?: NextCompatibleRequestInit): Promise<Pokedex[]>
declare function getPokedexById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<Pokedex>
declare function findPokedexById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Pokedex | undefined>
declare function findPokedexesByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Pokedex[]>
declare function fetchPokedexIndex(baseUrl: string): Promise<PokedexIndexItem[]>
declare function fetchPokedex(id: string, regionId: string | null | undefined, baseUrl: string): Promise<Pokedex>

/**
 * @deprecated
 */
interface LegacyRepository<R extends Entity> {
  id: string
  getAll(): Promise<Array<R>>
  getById(id: string): Promise<R>
  findById(id: string): Promise<R | undefined>
  getManyByIds(ids: Array<string>): Promise<Array<R>>
}
interface SearchFilter<R extends Entity> {
  field: keyof R
  value?: string | number | boolean | string[] | number[]
  operator:
    | 'neq'
    | 'eq'
    | 'gt'
    | 'lt'
    | 'gte'
    | 'lte'
    | 'in'
    | 'notin'
    | 'ends'
    | 'starts'
    | 'contains'
    | 'ncontains'
    | 'isnull'
    | 'notnull'
}
/**
 * SearchQuery is a 2D array of SearchFilter.
 * The first level (root) are OR conditions, the second level (nested arrays) are AND.
 *
 * e.g.: [ // people with name John OR age equal to 18 AND lastname equal to Smith:
 *  [{ field: 'name', value: 'John', operator: 'eq' }],
 *  [{ field: 'age', value: 18, operator: 'eq' }, { field: 'lastname', value: 'Smith', operator: 'eq' }]
 * ]
 */
type SearchQuery<R extends Entity> = Array<SearchFilter<R>[]>
interface SearchEngine<R extends Entity> {
  id: string
  search(
    q: string | SearchQuery<R>,
    limit?: number,
    offset?: number,
    sortBy?: keyof R,
    sortDir?: 'asc' | 'desc',
  ): Promise<Array<R>>
}
type SearchEngineIndexHydrator<R extends Entity> = (
  entities: R[],
  searchEngine: SearchEngineIndex<R>,
  repository: LegacyRepository<R>,
) => Promise<void>
type SearchEngineIndex<R extends Entity> = {
  /**
   * Index the given entities
   * @param entities Entities to index
   * @param tokens Array of [fieldName, tokenizer] tuples
   * @returns Promise
   * @example
   * const entities = [{ id: '1', name: 'John Doe' }, { id: '2', name: 'Jane Doe' }]
   * const tokens = [['name', (item) => item.name.split(' ')]]
   * await searchEngine.index(entities, tokens)
   * // Now you can search for entities matching 'John' or 'Doe'
   * const results = await searchEngine.search('John Doe')
   * // results = Set(['1', '2'])
   * const results = await searchEngine.searchWith(entities, 'Jane')
   * // results = [{ id: '2', name: 'Jane Doe' }]
   **/
  index: (entities: R[], tokens: Array<[keyof R | string, (entity: R) => string[] | string | null]>) => Promise<void>
  /**
   * @returns Number of indexed entities
   */
  size: () => Promise<number>
  /**
   * Search for entities matching the given text
   * @param text Full text search query
   * @returns Set of ids of matching entities
   */
  searchIds: (text: string) => Promise<Set<string>>
  /**
   * Search for entities matching the given text
   * @param entities Entities to search in
   * @param text Full text search query
   * @returns The matching entities
   */
  search: (text: string, entities: R[]) => Promise<R[]>
}

declare const defaultSearchIndexHydrator: SearchEngineIndexHydrator<Entity>

declare function createSearchIndex<R extends Entity>(tokenSeparator?: string): SearchEngineIndex<R>

declare function getAllPokemon(baseUrl: string, params?: NextCompatibleRequestInit): Promise<Pokemon[]>
declare function getPokemonById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<Pokemon>
declare function findPokemonById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Pokemon | undefined>
declare function findPokemonByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Pokemon[]>
declare function fetchPokemonIndex(baseUrl: string, params?: NextCompatibleRequestInit): Promise<PokemonIndexItem[]>
declare function fetchPokemon(
  id: string,
  regionId: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Pokemon>
declare function createPlaceholderPokemon(): Pokemon
declare function isPlaceholderPokemon(pkm: Pokemon | CompactPokemon): boolean
declare function hydratePokemonSearchIndex<K extends CompactPokemon | Pokemon>(
  entities: K[],
  searchIndex: SearchEngineIndex<K>,
): Promise<void>

declare function getAllRibbons(baseUrl: string, params?: NextCompatibleRequestInit): Promise<Ribbon[]>
declare function getRibbonById(id: string, baseUrl: string, params?: NextCompatibleRequestInit): Promise<Ribbon>
declare function findRibbonById(
  id: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Ribbon | undefined>
declare function findRibbonsByIds(
  ids: Array<string>,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Ribbon[]>

/**
 * Native RequestInit, compatible with Next.js revalidate tags.
 *
 * @see https://nextjs.org/docs/api-reference/next.config.js/headers
 */
type NextCompatibleRequestInit = RequestInit & {
  next?: {
    tags?: Array<string>
    revalidate?: number
  }
}
type DatasetClientConfig = {
  baseDataUrl: string
  baseImageUrl: string
}
type InMemoryCache<R extends Entity> = {
  collection: Map<string, R[]>
}
interface AssetUrlResolver {
  baseUri: string
  resolveUri(relativePath: string): string
}
interface ImageUrlResolver extends AssetUrlResolver {
  pokemonImg(nid: string, variant?: string, shiny?: boolean): string
  gameImg(id: string, variant?: string): string
  itemImg(id: string, variant?: string): string
  ribbonImg(id: string, variant?: string): string
  markImg(id: string, variant?: string): string
  typeImg(id: string, variant?: string, withBg?: boolean): string
  originMarkImg(id: string): string
}

declare function fetchCollection<R extends Entity = Entity>(
  relativePath: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<Array<R>>
declare function fetchCollectionWithCache<R extends Entity = Entity>(
  cache: InMemoryCache<R>,
  relativePath: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<R[]>
declare function fetchResource<R extends Entity = Entity>(
  relativePath: string,
  baseUrl: string,
  params?: NextCompatibleRequestInit,
): Promise<R>

declare function createDataUrlResolver(baseUrl: string): AssetUrlResolver
declare function createImageUrlResolver(baseUrl: string): ImageUrlResolver

declare function getPokemonTextDataPath(pokemonId?: string): string
declare function getPokemonDataPath(pokemonId: string, regionId: string): string
declare function getPokedexDataPath(pokedexId: string, regionId: string | null | undefined): string

declare const PKM_LATEST_GENERATION = 9
declare const PKM_LATEST_GAMESET = 'sv'
declare const PKM_LATEST_REGION = 'paldea'
declare const PKM_LATEST_POKEDEX = 'paldea'
declare const PKM_SWITCH_GAMESET_IDS: string[]

export {
  abilitySchema,
  baseEntitySchema,
  boxPresetBoxPokemonSchema,
  boxPresetBoxSchema,
  boxPresetIndexItemSchema,
  boxPresetMapSchema,
  boxPresetSchema,
  characteristics,
  characteristicSchema,
  characteristicsMap,
  characterSchema,
  colorSchema,
  createDataUrlResolver,
  createImageUrlResolver,
  createPlaceholderPokemon,
  createSearchIndex,
  defaultSearchIndexHydrator,
  descriptionSchema,
  detailSchema,
  fetchBoxPreset,
  fetchBoxPresetIndex,
  fetchCollection,
  fetchCollectionWithCache,
  fetchPokedex,
  fetchPokedexIndex,
  fetchPokemon,
  fetchPokemonIndex,
  fetchResource,
  findAbilitiesByIds,
  findAbilityById,
  findBoxPresetById,
  findBoxPresetsByIds,
  findCharacterById,
  findCharactersByIds,
  findGameById,
  findGamesByIds,
  findItemById,
  findItemsByIds,
  findLocationById,
  findLocationsByIds,
  findMarkById,
  findMarksByIds,
  findMoveById,
  findMovesByIds,
  findPokedexById,
  findPokedexesByIds,
  findPokemonById,
  findPokemonByIds,
  findResource,
  findResourceByField,
  findResourceById,
  findResourcesByIds,
  findRibbonById,
  findRibbonsByIds,
  gameFeatures,
  gameFeatureSchema,
  gameFeaturesMap,
  gameSchema,
  generationSchema,
  getAbilityById,
  getAllAbilities,
  getAllBoxPresets,
  getAllCharacters,
  getAllGames,
  getAllItems,
  getAllLocations,
  getAllMarks,
  getAllMoves,
  getAllPokedexes,
  getAllPokemon,
  getAllRibbons,
  getBoxPresetById,
  getCharacterById,
  getGameById,
  getItemById,
  getLocationById,
  getMarkById,
  getMoveById,
  getPokedexById,
  getPokedexDataPath,
  getPokemonById,
  getPokemonDataPath,
  getPokemonTextDataPath,
  getResource,
  getResourceByField,
  getResourceById,
  getRibbonById,
  getSiblingEntities,
  hexColorSchema,
  hydratePokemonSearchIndex,
  isPlaceholderPokemon,
  itemCategorySchema,
  itemSchema,
  languageSchema,
  locationSchema,
  markSchema,
  moveSchema,
  nameSchema,
  natureSchema,
  originMarkSchema,
  PKM_LATEST_GAMESET,
  PKM_LATEST_GENERATION,
  PKM_LATEST_POKEDEX,
  PKM_LATEST_REGION,
  PKM_SWITCH_GAMESET_IDS,
  pokedexEntrySchema,
  pokedexesIndex,
  pokedexesIndexMap,
  pokedexItemIndexSchema,
  pokedexSchema,
  pokemonColors,
  pokemonColorsMap,
  pokemonCompactSchema,
  pokemonGames,
  pokemonGamesMap,
  pokemonIndex,
  pokemonIndexItemSchema,
  pokemonIndexMap,
  pokemonLanguages,
  pokemonLanguagesMap,
  pokemonNatures,
  pokemonNaturesMap,
  pokemonOriginMarks,
  pokemonOriginMarksMap,
  pokemonRegions,
  pokemonRegionsMap,
  pokemonSchema,
  pokemonTextByLangSchema,
  pokemonTextIndexSchema,
  pokemonTextSchema,
  pokemonTypes,
  pokemonTypesMap,
  pokeTypeIdSchema,
  pokeTypeSchema,
  regionSchema,
  ribbonSchema,
  slugSchema,
  statIdSchema,
  type Ability,
  type AssetUrlResolver,
  type BaseEntity,
  type BoxPreset,
  type BoxPresetBox,
  type BoxPresetBoxPokemon,
  type BoxPresetIndexItem,
  type BoxPresetMap,
  type BoxPresetRecord,
  type Character,
  type Characteristic,
  type Color,
  type CompactPokemon,
  type DatasetClientConfig,
  type Entity,
  type Game,
  type GameFeature,
  type IDType,
  type ImageUrlResolver,
  type InMemoryCache,
  type Item,
  type ItemCategory,
  type Language,
  type LegacyPokemon,
  type LegacyRepository,
  type Location,
  type Mark,
  type Move,
  type Nature,
  type NextCompatibleRequestInit,
  type OriginMark,
  type Pokedex,
  type PokedexEntry,
  type PokedexIndexItem,
  type Pokemon,
  type PokemonIndexItem,
  type PokemonText,
  type PokemonTextByLang,
  type PokemonTextIndex,
  type PokeType,
  type PokeTypeId,
  type Region,
  type Ribbon,
  type SearchEngine,
  type SearchEngineIndex,
  type SearchEngineIndexHydrator,
  type SearchFilter,
  type SearchQuery,
}
