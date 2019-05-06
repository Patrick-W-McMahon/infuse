import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SelectPanel from '../SelectPanel';

const props = { onSelection: () => {} };
const wrapper = shallow(<SelectPanel {...props} />);
const selections = ['rock','paper','scissors'];

describe('<SelectPanel />', () => {
    it('renders three butttons', () => {
        expect(wrapper.find('button')).to.have.lengthOf(3);
    });
    selections.forEach((selection, index) => {
        it(`Button ${index} is ${selection}`, () => {
            expect(wrapper.find('button').at(index).find('i').hasClass(`fa-hand-${selection}`)).to.equal(true);
        });
    });
    
});
