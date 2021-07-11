import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";
import '@testing-library/jest-dom';
import { GifGrid } from '../components/GifGrid';

describe('Pruebas en GifExpertApp', () => {
    test('Debe mostrar la app correctamente.', () => {
        const wrapper=shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar una lista de categorias ', () => {
        const categories=['One Punch Man','Dragon Ball Z'];
        const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});
