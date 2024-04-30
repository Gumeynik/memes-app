class View {
    constructor() {
        this.selectNode = document.querySelector('#memes');
        this.imageNode = document.querySelector('#image');
        this.inputUpNode = document.querySelector('.input-up');
        this.inputDownNode = document.querySelector('.input-down');
        this.textUpNode = document.querySelector('.text-up');
        this.textDownNode = document.querySelector('.text-down');

        this.inputUpNode.addEventListener('input', (event) => {
            this.textUpNode.textContent = event.target.value;
        });
        this.inputDownNode.addEventListener('input', (event) => {
            this.textDownNode.textContent = event.target.value;
        });
    }

    displayMemes(memes) {
        memes.forEach(mem => {
            const option = document.createElement('option');
            option.text = mem.name;
            option.value = mem.url;
            this.selectNode.appendChild(option);
        });
        this.textUpNode.textContent = 'Нельзя просто так';
        this.textDownNode.textContent = 'Взять и....';
        this.selectNode.value = 'https://i.imgflip.com/1bij.jpg';
        this.imageNode.src = 'https://i.imgflip.com/1bij.jpg';
    }

    bindSelectChange(handler) {
        this.selectNode.addEventListener('change', (event) => {
            this.textUpNode.textContent = '';
            this.textDownNode.textContent = '';
            const selectedUrl = event.target.value;
            this.imageNode.src = selectedUrl;
            handler(selectedUrl);
        });
    }
}

// class View {
//     constructor () {
//         this.selectNode = document.querySelector('#memes');
//         this.imageNode = document.querySelector('#image');
//         this.inputUpNode = document.querySelector('#input-up')
//         this.inputDownNode = document.querySelector('#input-down')
//         this.textUpNode = document.querySelector('.text-up')
//         this.textDownNode = document.querySelector('.text-down')
//     }

//     getMemes() {
//         const api = new API();
//         api.fetchMemes()
//             .then(memes => {
//                 memes.forEach(mem => {
//                     const option = document.createElement('option');
//                     option.text = mem.name;
//                     option.value = mem.url;
//                     this.selectNode.appendChild(option); 
//                 });
//                 this.textUpNode.innerHTML = 'Нельзя просто так';
//                 this.textDownNode.innerHTML = 'Взять и....';
//                 this.selectNode.value = 'https://i.imgflip.com/1bij.jpg';
//                 this.selectNode.addEventListener('change', (event) => {
//                     this.textUpNode.innerHTML = '';
//                     this.textDownNode.innerHTML = '';
//                     const selectedUrl = event.target.value; 
//                     this.imageNode.src = selectedUrl;
//                 });
//                 this.imageNode.src = 'https://i.imgflip.com/1bij.jpg';
//             })
//     }
// }

// class View {
//     constructor() {
//         this.selectNode = document.querySelector('#memes');
//         this.imageNode = document.querySelector('#image');
//         this.inputUpNode = document.querySelector('#input-up');
//         this.inputDownNode = document.querySelector('#input-down');
//         this.textUpNode = document.querySelector('.text-up');
//         this.textDownNode = document.querySelector('.text-down');
//     }

//     displayMemes(memes) {
//         memes.forEach(mem => {
//             const option = document.createElement('option');
//             option.text = mem.name;
//             option.value = mem.url;
//             this.selectNode.appendChild(option);
//         });
//         this.textUpNode.textContent = 'Нельзя просто так';
//         this.textDownNode.textContent = 'Взять и....';
//         this.selectNode.value = 'https://i.imgflip.com/1bij.jpg';
//         this.imageNode.src = 'https://i.imgflip.com/1bij.jpg';
//     }

//     bindSelectChange(handler) {
//         this.selectNode.addEventListener('change', (event) => {
//             this.textUpNode.textContent = '';
//             this.textDownNode.textContent = '';
//             const selectedUrl = event.target.value;
//             this.imageNode.src = selectedUrl;
//             handler(selectedUrl);
//         });
//     }
// }