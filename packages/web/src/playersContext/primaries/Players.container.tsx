import { compose } from 'redux';
import { PlayersComponent } from './Players.component';
import { allPlayersContainerFactory } from '@app/core/lib/playersContext/adapters/primaries/containers/allPlayersContainerFactory';

export const PlayersContainer = compose(allPlayersContainerFactory)(
  PlayersComponent,
);
