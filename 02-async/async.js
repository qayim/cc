//File that contains a function to fetch API/HTTP request and data

//to get the data from axios API
const axios = require("axios");

//function to fetch the data
const fetchData = async (id) => {
    //the result that will hold all the data we take from the API
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return results.data;
}

//to trigger the method and send the desired id
fetchData(1);

module.exports = fetchData;