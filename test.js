fetch("https://www.basketball-reference.com/boxscores/", {
})
.then(data => data.text()).then(data => console.log(data));

