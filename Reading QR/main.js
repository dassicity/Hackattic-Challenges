console.log("hello");

axios.get('https://cors.io/?https://hackattic.com/challenges/reading_qr/problem?access_token=9a818cf05c282f8c', {
    mode: 'cors',
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': true },
})
    .then(response => {
        console.log(response);
    })
    .catch(er => {
        console.log(er);
    });
