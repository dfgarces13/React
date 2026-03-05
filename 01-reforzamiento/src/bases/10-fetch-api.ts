import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'MVMxQUhzD99NhZlYxGPHFFCKSwWlZQIk';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInsideDOM = (url: string) => {
    const imaElement = document.createElement('img');
    imaElement.src = url;

    document.body.append(imaElement);
};

// myRequest.then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.error(err);
// })

myRequest
    .then((response) => response.json())
    .then(({data}: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
    //     const imageUrl = data.data.images.original.url;
        console.log(imageUrl);
        //este codigo lo reemplazo por la función createImageInsideDOM
        // const imaElement = document.createElement('img');
        // imaElement.src = imageUrl;

        createImageInsideDOM(imageUrl);

    //     document.body.append(imaElement);
      })    
    .catch((err) => {
        console.error(err);
    });