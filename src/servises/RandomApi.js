export default class RandomApi {
    async find(type) {

        const response = await fetch(`http://numbersapi.com/random/${type}?json`);
        const data = await response.json();
        return data.found ? data : null;

    }

};
