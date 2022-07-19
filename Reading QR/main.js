console.log("hello");

axios.get('https://cors-anywhere.herokuapp.com/https://hackattic.com/challenges/reading_qr/problem?access_token=9a818cf05c282f8c', {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
})
    .then(response => {
        console.log(response.data.image_url)
        // response.data.image_url.blob();
    })
    // .then(blob => {
    //     console.log(blob);
    // })
    .catch(er => {
        console.log(er);
    });


// fetch('https://cors-anywhere.herokuapp.com/https://hackattic.com/challenges/reading_qr/problem?access_token=9a818cf05c282f8c',)
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });