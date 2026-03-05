import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'MVMxQUhzD99NhZlYxGPHFFCKSwWlZQIk';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInsideDOM = (url: string) => {
    const imaElement = document.createElement('img');
    imaElement.src = url;

    document.body.append(imaElement);
};

const getRandomGirUrl = async() => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
    );

    const {data} = (await response.json()) as GiphyRandomResponse;

    return data.images.original.url;
}

getRandomGirUrl().then(
    url => createImageInsideDOM(url)
)