const categories = [
    {
        id: 'fish_spawn',
        name: 'Fish Spawn',
        count: 125,
        image: require('../assets/fish-spawn.jpg')
    },
    {
        id: 'fish_seed',
        name: 'Fish Seed',
        count: 425,
        image: require('../assets/fish-seed.jpeg')
    },
    {
        id: 'fish',
        name: 'Fish',
        count: 105,
        image: require('../assets/fish.png')
    },
    {
        id: 'aquarium-fish',
        name: 'Aquarium Fish',
        count: 225,
        image: require('../assets/aquarium-fish.jpg')
    },
];

const profile = {
    username: 'Sumon Fishary',
    location: 'Bankura',
    email: 'sumanfishery@gmail.com',
    avater: require('../assets/profilePic.jpeg')
};

export {
    categories,
    profile
}