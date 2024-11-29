const hobbiesList = (hobbyOne, hobbyTwo, hobbyThree) => {

    const hobbyArray = [];

    hobbyArray.push(hobbyOne, hobbyTwo, hobbyThree);

    let result = {
        hobbies : hobbyArray
    };

    return result;

}

module.exports = {
    hobbies: hobbiesList
}