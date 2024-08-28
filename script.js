async function song(){
    let s= await fetch("http://127.0.0.1:5500/Spotify-clone/songs");
    let d= await s.json();
    
}