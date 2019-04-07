import React from 'react';
import { shallow } from 'enzyme';
import { PlayerDataComponent } from './PlayerData.component';

describe('PlayerDataComponent component', () => {
  it('should match snapshot', () => {
    // Given
    const wrapper = shallow(
      <PlayerDataComponent
        rank={1}
        points={1000}
        weight={72000}
        height={185}
        age={22}
        last={[1, 1, 1, 1, 1]}
      />,
    );

    // Expect
    expect(wrapper).toMatchSnapshot();
  });
});
