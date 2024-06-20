// const hello = () => {
//     console.log("this is import.js from export.js");
// }

// module.exports = hello;


const { hello,hello2,hello3 } = () => {

    // setTimeout(() => {
    //     console.log("2 seconds delay");
    // }, 2000);

    setInterval(() => {
        console.log("2 seconds delay");
    }, 2000);
}

module.exports = hello;
