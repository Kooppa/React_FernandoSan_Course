export const getGifs = async( category ) => {

    //recuerda agregar https:// a las apis
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xN17mO0Y3UEFHEdQhJAknXL54dmN2rkB&q=${ category }&limit=10`
    const resp = await fetch( url );
    //data es el tipo principal del json que se llama
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}