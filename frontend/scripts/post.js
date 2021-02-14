import axios from 'axios';
require("babel-core/register");
require("babel-polyfill");
require('dotenv/config');

const SERVER_URL=process.env.SERVER_URL;

const form = document.querySelector('form');

const formEvent = form.addEventListener('submit', async event => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value;
    const caption = document.querySelector('#caption').value;
    const url = document.querySelector('#url').value;
  
    const meme = {
      "name": name,
      "caption": caption,
      "url": url
    };

    console.log(meme);
  
    const addedMeme = await addMeme(meme);

    alert("Successfully Submitted");
 });

export const addMeme = async meme => {
    try {
      const res = await axios.post(`${SERVER_URL}/memes`, meme);
      const addedMeme = res.data;
  
      console.log(`Added a new Meme!`, addedMeme);
  
      return addedMeme;
    } catch (e) {
      console.error(e);
    }
};