console.log("Let's get this party started!");

const search_query = document.querySelector("#search_query");
const search_submit = document.querySelector("#giphy_form");
const search_remove = document.querySelector("#remove_gifs");

search_submit.addEventListener("submit", submitListener);
search_remove.addEventListener("click", removeListener);

function submitListener(event) {

    submitForm("43b7X7Fi7jimHMZnfwBdIsf1HYZArk4T", search_query.value);
    event.preventDefault();

}

function removeListener(event) {

    const results = document.querySelector("#gif_results");
    while(results.children.length > 0){
        results.firstChild.remove();
    }

}

async function submitForm(api_key, q){

    const res = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { api_key, q } });
    console.log(res);
    appendGIF(res.data.data[Math.floor(Math.random()* 50)].images.downsized.url);

}

function appendGIF(embed_url) {

    const results_list = document.querySelector("#gif_results");
    let list_entry = document.createElement('li');
    let list_gif = document.createElement('img');

    list_gif.setAttribute('src', embed_url);
    list_entry.append(list_gif);
    list_entry.setAttribute('id', results_list.childElementCount);
    results_list.append(list_entry);

}