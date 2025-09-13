import type { DexTrackerActionFactory, DexTrackerTrainerActions } from '../types/actions'
import type { TrainerInfoState } from '../types/state'

const trainerActions: DexTrackerActionFactory<DexTrackerTrainerActions> = (setState, getState) => {
  return {
    updateTrainer(trainer) {
      const newTrainerInfo: TrainerInfoState = {
        nickname: 'Trainer',
        ...getState().trainer,
        ...trainer,
      }
      setState({
        trainer: newTrainerInfo,
      })
    },
  }
}

export default trainerActions
