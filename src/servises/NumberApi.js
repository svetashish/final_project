export default class NumberApi {
    async find(number,type) {

        const response = await fetch(`http://numbersapi.com/${number}/${type}?json`);
        const data = await response.json();
        return data.found ? data.text : null;

    }

};
