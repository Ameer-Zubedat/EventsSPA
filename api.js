import React from 'react';
import axios from "axios";

const events = [
    {
        ID: "1",
        title: "Ebraheem Birthday",
        category: "Birthday",
        date: "2019-06-25",
        where: "sakhnin"
    },
    {
        ID: "2",
        title: "Ebraheem New Born",
        category: "New Born",
        date: "2019-06-25",
        where: "sakhnin"
    },
    {
        ID: "3",
        title: "Ebraheem Wedding",
        category: "Wedding",
        date: "2026-06-25",
        where: "sakhnin"
    },
    {
        ID: "4",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "5",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "6",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "7",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "8",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    }, 
    {
        ID: "9",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "10",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "11",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "12",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "13",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "14",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "15",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "16",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "17",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "18",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "19",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "20",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "21",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "22",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "23",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "24",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "25",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "26",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "27",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "28",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "29",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    },
    {
        ID: "30",
        title: "Ebraheem Grraduation",
        category: "Party",
        date: "2020-06-15",
        where: "sakhnin"
    }

];
const wishes = [
    {
        "userID": "1",
        "ID": "1",
        "from": "Ameer",
        "wishContent": "Happy birthday wish you all the best",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "2",
        "from": "sally",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "3",
        "from": "Samah seh",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "4",
        "from": "Ibraheem",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "2",
        "ID": "5",
        "from": "Arkan",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "6",
        "from": "sally",
        "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
        "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
        "eventID": "1"
    },
    {
        "userID": "1",
        "ID": "7",
        "from": "Ameer",
        "wishContent": "Best wishes on this wonderful journey, as you build your new lives together.",
        "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
        "eventID": "3"
    },
    {
        "userID": "3",
        "ID": "8",
        "from": "sally",
        "wishContent": "Wishing you joy, love and happiness on your wedding day and as you begin your new life together.",
        "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
        "eventID": "3"
    },
    {
        "userID": "1",
        "ID": "9",
        "from": "Ibraheem",
        "wishContent": "May God grant you all of life's blessings and love's joys",
        "imageURL": "https://images.greetingsisland.com/images/Cards/Events-Occasions/Wedding/previews/Wedding-Wishes.png?auto=format,compress&w=440",
        "eventID": "3"
    },
    {
        "userID": "2",
        "ID": "10",
        "from": "Ameer",
        "wishContent": "Welcome to the world little one, it is a place full of delights and wonders",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "2",
        "ID": "11",
        "from": "Sally",
        "wishContent": "Wishing you much happiness as you welcome your new little bundle of joy into your family",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "3",
        "ID": "12",
        "from": "Sleman",
        "wishContent": "Congratulations! Now is the time to enjoy your baby’s little feet and baby smell. It will not be there forever, and you should take as many pictures as possible. You will want to miss a single precious moment!",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "1",
        "ID": "13",
        "from": "Basel",
        "wishContent": "Wishing you joy and happiness, and plently of wonderful moments together.",
        "imageURL": "https://abestwish.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-01-31-at-1.27.15-PM.jpeg",
        "eventID": "2"
    },
    {
        "userID": "1",
        "ID": "14",
        "from": "Basel",
        "wishContent": "Congratulations on your well-deserved success.",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    },
    {
        "userID": "3",
        "ID": "15",
        "from": "sleman",
        "wishContent": "I’m sure today will be only the first of many proud, successful moments for you",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    },
    {
        "userID": "1",
        "ID": "16",
        "from": "Arkan",
        "wishContent": "Congratulations today and best wishes for all your tomorrows.",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    },
    {
        "userID": "1",
        "ID": "17",
        "from": "Mohamad",
        "wishContent": "Can’t wait to see where life will take you next. Wherever it is, our prayers go with you!",
        "imageURL": "https://image.shutterstock.com/image-vector/congratulations-graduation-background-mortar-board-260nw-288861791.jpg",
        "eventID": "4"
    }
]
const Users = [
    {
        userId: 1,
        userName: 'sally@gmail.com',
        name: 'sally',
        password: '123',
        events: [
            {
                ID: "1",
                title: "Birthday",
                category: "Birthday",
                date: "2019-06-25",
                where: "sakhnin"
            },
            {
                ID: "2",
                title: "Birthday",
                category: "Birthday",
                date: "2019-06-25",
                where: "sakhnin"

            },
            {
                ID: "3",
                title: "Birthday",
                category: "Birthday",
                date: "2019-06-25",
                where: "sakhnin"
            }]
    },
    {
        userId: 2,
        userName: '2@gmail.com',
        name: '2',
        password: '123',
        events: [
            {
                ID: "1",
                title: "Birthday",
                category: "Birthday",
                date: "2019-06-25",
                where: "sakhnin"
            },
            {
                ID: "2",
                title: "Ebraheem Birthday",
                category: "Birthday",
                date: "2019-06-25",
                where: "sakhnin"
            },
            {
                ID: "3",
                title: "Ebraheem Birthday",
                category: "Birthday",
                date: "2019-06-25",
                where: "sakhnin"
            }]
    }
]
const getUserWishesByUserID = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const userWishes = wishes.filter(wish => wish.userID == userId);
            resolve(userWishes);
        }, 500);
    })
}
const getUserEventsByUserID = (userId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const userEvents = Users.filter(user => (user.userId == userId))[0].events;
            resolve(userEvents);
        }, 500);
    })

}

const getEvents = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(events);
        }, 500);
    })
}
const getWishes = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(wishes);
        }, 500);
    });
}
const getEvent = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            const event = events.find(e => e.ID === id);
            resolve(event);
        }, 500);
    });
}
const getWish = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            const wish = wishes.find(w => w.ID === id);
            resolve(wish);
        }, 500);
    });
}
const getUsers = () => {
    return JSON.parse(localStorage.getItem('users'));
}

export {
    getUsers,
    getWishes,
    getEvents,
    getEvent,
    getUserEventsByUserID,
    getUserWishesByUserID,
    getWish
};