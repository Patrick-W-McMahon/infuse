import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import ComputerFace from '../ComputerFace';

const props = {};
const wrapper = mount(<ComputerFace {...props} />);

describe('<ComputerFace />', () => {
    it('has h6 title', () => {
        expect(wrapper.find('h6')).to.be.lengthOf(1);
    });
    it('title to be "Computer Player"', () => {
        expect(wrapper.find('h6').text()).to.equal('Computer Player');
    });
    it('renders default face "meh"', () => {
        expect(wrapper.find('i').hasClass(`fa-meh`)).to.equal(true);
    });
});
