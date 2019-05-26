
import {App2} from './App2';
import React from 'react';
import sinon from 'sinon';  //Standalone test spies, stubs and mocks for JavaScript.
import { expect } from 'chai';  //using chai library as the assertion library
import { mount ,shallow} from 'enzyme';

describe("<App2 />",()=>{

    it('should render three <App2 /> components without exploding', () => {
        const wrapper = mount(<App2 />);
        expect(
            wrapper.length
        ).to.equal(1);
    });

    it('allows us to set props1', () => {
        const wrapper = mount(
            <App2 bar="baz" />
        );
        expect(
            wrapper.props().bar
        ).to.equal('baz');
        
        wrapper.setProps({ 
            bar: 'foo' 
        });
        
        expect(
            wrapper.props().bar
        ).to.equal('foo');
    });


    it('allows us to set props2', () => {
        const wrapper = mount(
            <App2 bar="baz" />
        );
        expect(
            wrapper.prop('bar')
        ).to.equal('baz');
        
        wrapper.setProps({
             bar: 'foo' 
        });
        
        expect(
            wrapper.props().bar
        ).to.equal('foo');
    });

    it('allows us to set Children', () => {
        const wrapper = mount(
            <App2>
                <p>hello</p>
            </App2>
        );
        expect(
            wrapper.contains([<p>hello</p>])
        ).to.equal(true);
        
    });

    it('allows to find certains props in alreday elemnts', () => {
        const wrapper = mount(
            <App2/>
        );
        expect(
            wrapper.find('p').at(0).prop('id')
        ).to.equal("rahulid")
    });


    it('simulates click events', () => {
            const spy = sinon.spy(App2.prototype, 'onButtonClick')
            const wrapper = mount(<App2 />)
            wrapper.find('button').simulate('click')      
            expect(spy.calledOnce).to.equal(true);
            //The spy’s calledOnce property will now equal true allowing us to assert that the div was clicked.
    });

    
    it('should render "done" after 2 seconds', () => {
        const wrapper = mount(<App2/>)
        var  clock = sinon.useFakeTimers()
        clock.tick(2000);
    });

})