import { getGifs } from "../..//helpers/getGifs"

describe('pruebas con getGifs Fetch', () => {
    test('Debe de traer 10 elementos ', async() => {
        const gifs= await getGifs('One Punch Man');
        expect(gifs.length).toBe(10);
    });
    test('Debe de traer 0 elementos ', async() => {
        const gifs= await getGifs('');
        expect(gifs.length).toBe(0);
    });
})
