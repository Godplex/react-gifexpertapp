import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en Item', () => {
    const title='Un titulo';
    const url='https://localhost/algo.jpg';
    const wrapper= shallow(<GifGridItem title={title} url={url}/>);
    test('debe de mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de tener un parrafo con el titulo ', () => {
        const p= wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    });
    test('Debe tener una imagnes con sus propiedasdes igual a la de los props', () => {
        const img= wrapper.find('img');
        //console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    test('Debe de tener animaciones ', () => {
        const div=wrapper.find('div');
        const className=div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })    
})
