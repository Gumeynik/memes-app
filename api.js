class API {
    constructor() {
        this.baseUrl = 'https://api.imgflip.com';
    }

    fetchMemes() {
        return fetch(`${this.baseUrl}/get_memes`)
            .then(response => response.json())
            .then(res => {
                return res.data.memes.map(mem => ({
                    name: mem.name,
                    url: mem.url
                }));
            });
    }
}