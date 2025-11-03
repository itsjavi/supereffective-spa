import { getFirstDexForGame, getFirstGameForDex } from '@/lib/dataset/pokedexes'
import { localHashUrl } from './urls'

export const routeFactory = {
  home: localHashUrl('/'),
  pokedex: (dexId: string | null | undefined, gameId: string | null | undefined) => {
    if (!gameId && !dexId) {
      throw new Error('routeFactory.pokedex: gameId and dexId are both undefined')
    }

    if (gameId && !dexId) {
      const dex = getFirstDexForGame(gameId)
      return localHashUrl(`/pokedex/${dex?.id}/${gameId}`)
    }

    if (!gameId && dexId) {
      const game = getFirstGameForDex(dexId)
      return localHashUrl(`/pokedex/${dexId}/${game?.id}`)
    }

    return localHashUrl(`/pokedex/${dexId}/${gameId}`)
  },
}
