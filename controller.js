
class Controller {
    constructor() {
        this.api = new API();
        this.model = new Model(this.api);
        this.view = new View();
        this.init();
    }

    init() {
        this.model.fetchMemes()
            .then(memes => this.view.displayMemes(memes));
        this.view.bindSelectChange(this.handleMemeSelect.bind(this));
    }

    handleMemeSelect(selectedUrl) {
        // Обработка выбора мема
        console.log('Выбран мем:', selectedUrl);
    }
}