import axios from 'axios'

const callApiGet = (endpoint) => {
    return new Promise((resolve, reject) => {
        axios.get(endpoint)
        .then(function(response) {
            resolve(response.data)
        })
    })
}

export default callApiGet