// const minhhaPromise = () => new Promise((resolve, rejects) =>{setTimeout(() => {resolve('OK')}, 2000);
// });

// // async function executaPromise(){
// //     console.log(await minhhaPromise());
// //     console.log(await minhhaPromise());
// //     console.log(await minhhaPromise());
// // }

// const executaPromise = async() =>{
//     console.log(await minhhaPromise());
//     console.log(await minhhaPromise());
//     console.log(await minhhaPromise());
// }
// executaPromise();


import axios from 'axios';

class Api {
    static async getUserInfo(username){
        const response= await axios.get(`https://api.github.com/users/${username}`);

        console.log(response);
    }
}

Api.getUserInfo('spewar');