import { shallow } from 'enzyme';
import React from 'react';
import { nadal } from '@app/core/src/common/fixtures/playersContext/players.fixtures';
import { PlayerComponent } from './Player.component';

describe('PlayerComponent component', () => {
  it('should match snapshot', () => {
    // Given
    const wrapper = shallow(<PlayerComponent player={nadal} />);

    // Expect
    expect(wrapper).toMatchSnapshot();
  });
});
