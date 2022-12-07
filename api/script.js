// Get API URL
let url = "https://api.spotify.com/v1/artists/2BpAc5eK7Rz5GAwSp9UYXa/top-tracks?market=us"
console.log(url);
const otherParam ={
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer BQBcQ_B-3zXOLsKHQQfPim8j99iYJ2rtNLyhkNkCdKUMN95vKm-xcTxIpyWuakfKWO2dDSeG1mVjc-hTXoPc_1PXiHzDzV-CMaJhzgOFT5MGUFv0pERkyqgtqjx0MKDMYsMku_eZUWo7n2nWub0ZlQKw52xvhO0E8qsSrZIrqytr30ttJA"
    }
};
fetch(url, otherParam)
    .then(res => res.json())
    .then(convertedData => {
        console.log(convertedData)
        
        let grabCharContainer = document.querySelector('#tracks');
        let tracks = convertedData.tracks
        console.log(tracks)
    
    
        for(let i = 0; i < tracks.length; i++){
            let currTrack = tracks[i].name;
            let currAlbum = tracks[i].album.name;
            console.log(currTrack);

            let createH3Tag = document.createElement('h3');
            createH3Tag.innerHTML = currTrack;
            grabCharContainer.appendChild(createH3Tag);

    }
})

