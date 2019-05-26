import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {Avatar} from "./Avatar";

describe('<Avatar/>',function(){

    it('<Avtar/> component mounted', function () {
        const wrapper = shallow(<Avatar/>);
        expect(
            wrapper.length
        ).to.equal(1);
    });
    

    it('should have an image to display the gravatar', function () {
        const wrapper = shallow(<Avatar/>);
        expect(wrapper.find('img').length).to.equal(1);
    });


    it('should have props for email and src', function () {
        const myprops={
            email:'abc@gmail.com',
            src:'abc/def.jpg'
        }
        const wrapper = mount(<Avatar {...myprops}/>);
        expect(
            wrapper.prop('email')
        ).to.equal('abc@gmail.com');

        expect(
            wrapper.prop('src')
        ).to.equal('abc/def.jpg');
        
    });

});