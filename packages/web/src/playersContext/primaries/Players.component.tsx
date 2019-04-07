import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { PlayerComponent } from './Player/Player.component';
import { Title } from '@app/web/src/components/Title/Title.component';
import { TAllPlayersPropsContainerProps } from '@app/core/src/playersContext/adapters/primaries/containers/allPlayersContainerFactory.types';

export class PlayersComponent extends Component<
  TAllPlayersPropsContainerProps
> {
  componentDidMount(): void {
    this.props.getAllPlayers();
  }

  render() {
    const { players } = this.props;
    return (
      <BackgroundContainer>
        <Title>{'Best Players '}</Title>
        <ListContainer>
          {players.map((player) => (
            <PlayerComponent
              key={`ID:${player.firstName}.${player.lastName}`}
              player={player}
            />
          ))}
        </ListContainer>
      </BackgroundContainer>
    );
  }
}

const BackgroundContainer = styled.div`
  background-color: #f5f7fa;
  display: flex;
  flex 1;
  flex-direction: column;
`;

const ListContainer = styled.div`
  flex 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
