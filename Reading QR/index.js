fetch('https://hackattic.com/challenges/reading_qr/problem?access_token=9a818cf05c282f8c', {
    method: 'GET',

})
    .then(res => {
        console.log(res.blob);
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });