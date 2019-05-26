import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {Email} from "./Email";

describe('<Email/>',()=>{

    it('<Email/> component mounted',()=>{
        const wrapper = shallow(<Email/>);
        expect(
            wrapper.length
        ).to.equal(1);
    });

    it('should have an Input elemnt', function () {
        const wrapper = shallow(<Email/>);
        expect(wrapper.find('input').length).to.equal(1);
    });

    it('should have a ButtonElemnt elemnt', function () {
        const wrapper = shallow(<Email/>);
        expect(wrapper.find('button').length).to.equal(1);
    });

    it('should have onchange and onClick handlers', function () {
        const myprops={
            handleEmailChange:()=>{},
            fetchGravatar:()=>{}
        }
        const wrapper = mount(<Email {...myprops}/>);
        
        expect(
            wrapper.prop('handleEmailChange')
        ).to.not.be.undefined;
       
        expect(
            wrapper.prop('fetchGravatar')
        ).to.not.be.undefined;
    });

});