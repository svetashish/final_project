export default class NumberApi {
    async find(search) {

        const response = await fetch(`http://numbersapi.com/${search}?json`);
        const data = await response.json();
        return data.text ? data.text : null;

    }

};
