import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Icon from './index';

const props = { icon: 'cog' };
const wrapper = shallow(<Icon {...props} />);

describe('<Icon />', () => {
    it('renders one i element', () => {
        expect(wrapper.find('i')).to.have.lengthOf(1);
    });
});
