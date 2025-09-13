import { useLocalDatasetQuery } from '@/hooks/useLocalDatasetQuery'
import type { TrPokedex } from '@/lib/dataset/types'
import type { CurrentDexState, PokedexState } from './types/state'
import { useDexTrackerStore } from './useDexTrackerStore'
import { getDexAndGameData } from './utils'

export function useCurrentDexData(): CurrentDexState {
  const [dexes, currentDexId] = useDexTrackerStore((state) => [state.dexes, state.currentFullDexId])
  const currentData = getDexAndGameData(currentDexId)
  const dataFetch = useLocalDatasetQuery<TrPokedex>(`pokedexes/${currentData?.dex.id}`, !!currentData)

  if (!currentDexId || !currentData) {
    return {}
  }

  const { dex, game } = currentData
  const dexState: PokedexState = {
    ...{
      id: currentDexId,
      dexId: dex.id,
      gameId: game.id,
      pokemon: {},
    },
    ...dexes[currentDexId],
  }

  return {
    info: dex,
    game: game,
    state: dexState,
    fullInfoQuery: dataFetch,
  }
}
