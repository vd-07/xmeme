import axios from 'axios';
require("babel-core/register");
require("babel-polyfill");

const SERVER_URL=process.env.SERVER_URL;

const getMemeData = async () => {
    try {

        const res = await axios.get(`${SERVER_URL}/memes`);

        const memeInfo = res.data;

        console.log(memeInfo);

        return memeInfo;

    } catch(e) {

        console.error(e);

    }
};


function createDomElement(tagName, text, className) {

    var createdTag = document.createElement(tagName);

    var createdText = document.createTextNode(text);

    createdTag.appendChild(createdText);

    createdTag.className = className;

    return createdTag;
}

function addMemesToDom(memes) {
    {/* <div class="card">
    <!-- <img src="./images/assassins.png" alt="" /> -->
    <div class="card-info">
    <h2>Name </h2>
    <p>Caption</p>
    <div class="progress">Edit</div>
    </div>
    <h2 class="percentage">Date</h2>
</div> */}
    var memeArea = document.getElementById("cards");

    for(let i = memes.length - 1; i >= 0; i--) {

        // add image
        var image = document.createElement("img");
        image.src = memes[i].url;

        // add card info
        var cardInfo = document.createElement("div");
        cardInfo.className = "card-info";

        // add name 
        var nameHead = createDomElement("h2", memes[i].name);

        // add caption
        var captionBody = createDomElement("p", memes[i].caption);

        var editSec = createDomElement("div", "Edit", "progress");

        cardInfo.appendChild(nameHead);
        cardInfo.appendChild(captionBody);
        cardInfo.appendChild(editSec);

        // add Date
        const date = new Date(memes[i].date);
        var dateAdded = createDomElement("div", date.toDateString(), "percentage");

        var memeCard = document.createElement("div");
        memeCard.className = "card";

        memeCard.appendChild(image);
        memeCard.appendChild(cardInfo);
        memeCard.appendChild(dateAdded);

        // console.log(memeCard);
        console.log(memeArea);

        memeArea.appendChild(memeCard);
    }

};

const main = async () => {
    addMemesToDom(await getMemeData());
};

main();