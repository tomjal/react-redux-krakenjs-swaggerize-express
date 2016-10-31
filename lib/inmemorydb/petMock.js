module.exports = function () {

    pets = [
        {
            name: 'Max',
            photoUrls: [
                'https://static.pexels.com/photos/179107/pexels-photo-179107.jpeg'
            ],
            tags: [
                'cute',
                'dog'
            ]
        },
        {
            name: 'Charlie',
            photoUrls: [
                'https://static.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317-medium.jpeg'
            ],
            tags: [
                'cute',
                'dog'
            ]
        },
        {
            name: 'Sam',
            photoUrls: [
                'https://static.pexels.com/photos/53966/rabbit-palm-hand-snatch-53966-medium.jpeg'
            ],
            tags: [
                'cute',
                'rabbit'
            ]
        },
        {
            name: 'Ruby',
            photoUrls: [
                'https://static.pexels.com/photos/57416/cat-sweet-kitty-animals-57416-medium.jpeg'
            ],
            tags: [
                'cute',
                'cat'
            ]
        },
        {
            name: 'Lola',
            photoUrls: [
                'https://static.pexels.com/photos/179107/pexels-photo-179107.jpeg'
            ],
            tags: [
                'cute',
                'dog'
            ]
        },
        {
            name: 'Roxy',
            photoUrls: [
                'https://static.pexels.com/photos/130763/pexels-photo-130763-medium.jpeg'
            ],
            tags: [
                'cute',
                'dog'
            ]
        }
    ];

    return pets.map(pet => {
        pet.id = Math.floor(Math.random() * 10000);
        pet.status = 'available';
        return pet;
    });
}