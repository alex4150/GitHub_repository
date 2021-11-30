const todo = {
    activity_id: 410088344
};

fetch('https://api217.crowdtwist.com/v2/users/alexrewards99@gmail.com/activities?api_key=2FJQiWvADwF1NHME8V7B3UmzhzyfGGUn&id_type=email', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
           'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });
