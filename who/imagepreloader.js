const url = 'https://hohtopp.goforecrew.com/api/images/ID/resized';

export default class {
    constructor(ids) {
        ids.forEach((id) => {
            new Image().src = url.replace('ID', id);
        });
    }

    static getUrlTemplate() {
        return url;
    }
}
