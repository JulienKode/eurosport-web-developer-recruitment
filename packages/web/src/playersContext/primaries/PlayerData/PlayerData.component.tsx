import React from 'react';
import { PlayerData } from '@app/core/src/playersContext/domain/entities/PlayerData';
import {
  EWeightUnit,
  formatGrams,
} from '@app/core/src/common/formatters/weight';
import { Text } from '@app/web/src/components/Text/Text.component';
import styled from 'styled-components';

export const PlayerDataComponent = ({
  points,
  rank,
  age,
  weight,
  height,
}: PlayerData) => {
  const playerRank = `Rang: ${rank}`;
  const playerPoint = `Point: ${points}`;
  const playerAge = `Age: ${age} ans`;
  const formattedWeight = formatGrams(weight, EWeightUnit.kilograms);
  const playerWeight = `Poids: ${formattedWeight} kg`;
  const playerHeight = `Taille: ${height} cm`;
  return (
    <PlayerDataContainer>
      <Text>{playerRank}</Text>
      <Text>{playerPoint}</Text>
      <Text>{playerAge}</Text>
      <Text>{playerWeight}</Text>
      <Text>{playerHeight}</Text>
    </PlayerDataContainer>
  );
};

const PlayerDataContainer = styled.div`
display: flex;
flex 1;
justify-content: center;
flex-direction: column;
`;
