import { Food } from "src/app/shares/Model/Food"
import { Tag } from "src/app/shares/Model/tag"

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 399,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'2',
    name: 'Meatball',
    price: 90,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id:'3',
    name: 'Hamburger',
    price: 150,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 250,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id:'5',
    name: 'Chicken Soup',
    price: 199,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 2.5,
    imageUrl: 'assets/food-5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id:'6',
    name: 'Vegetables Pizza',
    price: 499,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'7',
    name: 'Special Masala Dosa',
    price: 99,
    cookTime: '10-20',
    favorite: false,
    origins: ['india'],
    stars: 3.8,
    imageUrl: 'assets/food-7.jpeg',
    tags: ['FastFood', 'Dosa', 'Lunch', 'Special Masala Dosa'],
  },
  {
    id:'8',
    name: 'Samosa',
    price: 79,
    cookTime: '10-15',
    favorite: true,
    origins: ['india' ,'asia'],
    stars: 4.8,
    imageUrl: 'assets/food-8.jpg',
    tags: ['FastFood', 'Samosa', 'Lunch'],
  },
]


export const sample_tags : Tag[]=  [
    { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]