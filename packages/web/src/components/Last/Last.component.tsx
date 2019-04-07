import React from 'react';
import styled from 'styled-components';
import { Text } from '@app/web/src/components/Text/Text.component';

export const Last = ({ last }: { last: number[] }) => (
  <ListContainer>
    {last.map((number, index) =>
      number === 0 ? <Text key={index}>🛑</Text> : <Text key={index}>✅</Text>,
    )}
  </ListContainer>
);

const ListContainer = styled.div`
  margin: 10px 10px 10px 10px;
  display: flex;
  justify-content: center;
`;
