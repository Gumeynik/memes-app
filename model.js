class Model {
    constructor(api) {
        this.api = api;
        this.memes = [];
    }

    async fetchMemes() {
        this.memes = await this.api.fetchMemes();
        return this.memes;
    }
}