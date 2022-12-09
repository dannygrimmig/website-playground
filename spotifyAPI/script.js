/* Search Artist */

//Artist HTML Form
let inputs = document.getElementById("search").elements; //form inputs
let query = inputs[0].baseURI; //url after input

let searchQuery = "?q="; //base of search query
var searchQueryFields = query.split("="); //split url by = (seperates base url, input 1, input 2)
if(searchQueryFields[1] == undefined || searchQueryFields[1] == ""){searchQueryFields[1] = "tallest man on earth"}; //if no search query -> set to tallest man :)
console.log("form input: "+ searchQueryFields)

var artistFields = searchQueryFields[1].split("&"); //seperate artist from token
var searchQueryURI = encodeURIComponent(artistFields[0]); //enncode to url form
searchQuery += searchQueryURI; //?q=artist
console.log("artistQueaary: "+ searchQuery);

let token = searchQueryFields[2];
console.log("token: " + token);


//GET Params
let searchAPI = "https://api.spotify.com/v1/search"; //search api
let type = "&type=artist"; //search type
let searchURL = searchAPI+searchQuery+type; //Created URL for GET
console.log(searchURL);

//Authentifications... https://developer.spotify.com/console/get-search-item/
const otherParams = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    }
};

//Make GET call...
fetch(searchURL, otherParams)
    .then(res => res.json())
    .then(data => {

        //grab info from data
        let artists = data.artists.items; console.log(artists);
        let name = artists[0].name;
        let artistId = artists[0].id; 
        let image = artists[0].images[0].url; 
        

        //update HTML
        let grabCharContainer = document.querySelector("#artist");

        let createh1Tag = document.createElement("h1");
        let createImgTag = document.createElement("img");
        

        createh1Tag.innerHTML = name;
        createImgTag.src= image;

        grabCharContainer.appendChild(createh1Tag);
        grabCharContainer.appendChild(createImgTag);


        /* Get Artist Top Songs */
            // GET Params
            let topSongAPI = "https://api.spotify.com/v1/artists/"; //topSong API url
            let trackLocation = "/top-tracks?market=us"; //US top track location for url
            let topSongURL = topSongAPI+artistId+trackLocation; //created URL for GET call
            console.log(topSongURL);

            fetch(topSongURL, otherParams)
                .then(res => res.json())
                .then(convertedData => {
                    
                    let tracks = convertedData.tracks
                    console.log(tracks)
                
                    let grabCharContainer = document.querySelector('#tracks');
                    for(let i = 0; i < 6; i++){
                        //grab info from tracks
                        let currTrack = tracks[i].name;
                        let albumImg = tracks[i].album.images[0].url;
                        let preview = tracks[i].preview_url;
                        console.log(preview);

                        //update HTML
                        let createLi = document.createElement("li");

                        let createTrackP = document.createElement("p");
                        let createAlbumImage = document.createElement("img");
                        let createAudioTag = document.createElement("audio");
                        let createSourceTag = document.createElement("source");

                        createTrackP.innerHTML = currTrack;
                        createAlbumImage.src = albumImg;
                        createSourceTag.src = preview;
                        createAudioTag.controls = "controls";
                        createAudioTag.appendChild(createSourceTag);

                        createLi.appendChild(createAlbumImage);
                        createLi.appendChild(createTrackP);
                        createLi.appendChild(createAudioTag);

                        grabCharContainer.appendChild(createLi);


                        // let createliTag = document.createElement("li");
                        // let createAlbImg = document.createElement("img");
                        // let createAudTag = document.createElement("audio");
                        // let createAudSrc = document.createElement("source");

                        // createliTag.innerHTML = currTrack;
                        // createAlbImg.src = albumImg;
                        // createAudTag.controls = 'controls';
                        // createAudSrc.src = preview; 
                        // createAudTag.appendChild(createAudSrc);
                        // console.log(createAudTag);

                        // grabCharContainer.appendChild(createAlbImg);
                        // grabCharContainer.appendChild(createliTag);
                        // grabCharContainer.appendChild(createAudTag);
                }
            })
    })




