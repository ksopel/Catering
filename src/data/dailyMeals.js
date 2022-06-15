// import { collection, doc, setDoc, getDocs } from "firebase/firestore";
// import {db} from "../config.js";
// const dailyMealsRef = collection(db, "dailymeals");
//
//
//
// const querySnapshot = await getDocs(collection(db, "dailymeals"));
// querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
// });


// const dailyMeals = [
//     {
//         id: '1',
//         day: 'Monday',
//         name: 'Pizza',
//         price: '10',
//         description: 'Pizza with cheese'
//     },
//     {
//         id: '2',
//         day: 'Tuesday',
//         name: 'Hamburger',
//         price: '10',
//         description: 'Hamburger with cheese'
//     },
//     {
//         id: '3',
//         day: 'Wednesday',
//         name: 'Falafel',
//         price: '10',
//         description: 'Falafel with cheese'
//     },
//     {
//         id: '4',
//         day: 'Thursday',
//         name: 'Kebab',
//         price: '10',
//         description: 'Vegan kebab with cheese'
//     },
//     {
//         id: '5',
//         day: 'Friday',
//         name: 'Samosa',
//         price: '10',
//         description: 'Samosa without cheese'
//     },
//     {
//         id: '6',
//         day: 'Saturday',
//         name: 'Chips',
//         price: '10',
//         description: 'Chips with cheese'
//     },
//     {
//         id: '7',
//         day: 'Sunday',
//         name: 'Cornflower soup',
//         price: '10',
//         description: 'Vegan Cornflower soup without chips'
//     },
// ]
//
// export default dailyMeals;