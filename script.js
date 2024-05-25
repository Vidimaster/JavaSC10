// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

let r1 = new Map(Object.entries(numbers));

r1.forEach((value, key) => {
    if (value >= 3) {
        console.log(`${key} = ${value}`);
    }
});



// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};


Object.entries(post).forEach(([key, value]) => {
    if (key == 'author') {
        console.log(`${value}`)
    };
    if (key == 'comments') {
        console.log(value[0].rating.dislikes);
        console.log(value[1].userId);
        console.log(value[1].text);
    }
});

//const map2 = new Map(Object.entries(post));
//console.log(map2);

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];



products.forEach((price, index) => products[index].price = products[index].price - products[index].price * 0.15);

console.log(products);

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.


const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,

    },
];



const filteredproducts2 = products2.filter(val => {
    return (val.photos !== undefined && val.photos.length > 0);
});

console.log(filteredproducts2);

products2.sort((a, b) => a.price - b.price);
console.log(products2);



//     ** Задание 5 **
//         Дано 2 массива
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];


function createObject(keys, values) {
    const obj = Object.fromEntries(
        keys.map((key, index) => [key, values[index]]),
    );

    return obj;
}


let result = createObject(en, ru);
console.log(result);




// Данная промежуточная аттестация оценивается по системе "зачет" / "не зачет"
// "Зачет" ставится, если слушатель успешно выполнил
// "Незачет" ставится, если слушатель успешно выполнил

// Критерии оценивания:
// 1 - Слушатель создал консоль вывел все значения больше или равные 3.
