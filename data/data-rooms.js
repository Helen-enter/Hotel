const rooms = [
    {
        numberRoom: 888,
        stars: 5,
        images: ["../assets/img/Search_room/image-1.jpg"],
        status: 'люкс',
        numberReviews: 145,
        cost: 9990
    },
    {
        numberRoom: 840,
        stars: 4,
        images: ["../assets/img/Search_room/image.jpg"],
        status: '',
        numberReviews: 65,
        cost: 9900
    },
    {
        numberRoom: 980,
        stars: 3,
        images: ["../assets/img/Search_room/image-2.jpg"],
        status: 'люкс',
        numberReviews: 35,
        cost: 8500,
    },
    {
        numberRoom: 856,
        stars: 5,
        images: ["../assets/img/Search_room/image-5.jpg"],
        status: '',
        numberReviews: 19,
        cost: 7300,
    },
    {
        numberRoom: 740,
        stars: 4,
        images: ["../assets/img/Search_room/image-3.jpg"],
        status: '',
        numberReviews: 44,
        cost: 6000,
    },
    {
        numberRoom: 982,
        stars: 3,
        images: ["../assets/img/Search_room/image-4.jpg"],
        status: '',
        numberReviews: 56,
        cost: 5800,
    },
    {
        numberRoom: 678,
        stars: 5,
        images: ["../assets/img/Search_room/image-8.jpg"],
        status: '',
        numberReviews: 45,
        cost: 5500,
    }, {
        numberRoom: 450,
        stars: 4,
        images: ["../assets/img/Search_room/image-6.jpg"],
        status: '',
        numberReviews: 39,
        cost: 5300,
    },
    {
        numberRoom: 350,
        stars: 3,
        images: ["../assets/img/Search_room/image-7.jpg"],
        status: '',
        numberReviews: 77,
        cost: 5000,
    },
    {
        numberRoom: 666,
        stars: 5,
        images: {
            view1: "../assets/img/Search_room/image-10.jpg",
        },
        status: '',
        numberReviews: 25,
        cost: 5000,
    },
    {
        numberRoom: 444,
        stars: 3,
        images: ["../assets/img/Search_room/image-9.jpg"],
        status: '',
        numberReviews: 15,
        cost: 5000,
    },
    {
        numberRoom: 352,
        stars: 3,
        images: ["../assets/img/Search_room/image 2.jpg"],
        status: '',
        numberReviews: 55,
        cost: 5000,
    },
]

const roomsJSON = JSON.stringify(rooms)
console.log(roomsJSON)