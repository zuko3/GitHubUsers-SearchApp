import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {Avatar} from "./Avatar";
import {Gravatar} from "./Gravatar";
import {Email} from "./Email";

describe('<Gravatar />', () => {

    it('contains an <Avatar/> component', function () {
        const wrapper = mount(<Gravatar/>);
        expect(wrapper.find(Avatar)).to.have.length(1);
    });

    it('contains an <Email/> component', function () {
        const wrapper = mount(<Gravatar/>);
        expect(wrapper.find(Email)).to.have.length(1);
    });

    it('should have an initial email state', function () {
        const wrapper = mount(<Gravatar/>);
        expect(wrapper.state().email).to.equal('someone@example.com');
    });

    it('should have an initial src state', function () {
        const wrapper = mount(<Gravatar/>);
        expect(wrapper.state().src).to.equal('/favicon.ico');
    });


    it('should update the src state on clicking fetch', function () {
        const wrapper = mount(<Gravatar/>);
        wrapper.setState({ email: 'abcdef@ghu.io' });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('email')).to.equal('abcdef@ghu.io');
        expect(wrapper.state('src')).to.equal(`/faviconnnn.ico`);
    });
    

})