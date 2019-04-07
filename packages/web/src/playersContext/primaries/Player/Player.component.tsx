import React from 'react';
import styled from 'styled-components';
import { Player } from '@app/core/src/playersContext/domain/entities/Player';
import { ImageRounded } from '@app/web/src/components/ImageRounded/ImageRounded.component';
import { Title } from '@app/web/src/components/Title/Title.component';
import { Card } from '@app/web/src/components/Card/Card.component';
import { Last } from '@app/web/src/components/Last/Last.component';
import { PlayerDataComponent } from '@app/web/src/playersContext/primaries/PlayerData/PlayerData.component';

export const PlayerComponent = ({ player }: { player: Player }) => {
  return (
    <PlayerContainer>
      <Card>
        <Title>{`${player.firstName} ${player.lastName}`}</Title>
        <ListContainer>
          <ImageRounded
            alt={`${player.lastName}.${player.firstName}`}
            src={player.picture}
          />
          <PlayerDataComponent {...player.data} />
        </ListContainer>
        <Last last={player.data.last} />
      </Card>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
margin: 10px 10px 10px 10px;
display: flex;
flex 0.4;
justify-content: center;
flex-direction: column;
`;

const ListContainer = styled.div`
  margin: 10px 10px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
