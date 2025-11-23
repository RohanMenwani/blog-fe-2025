import {  ExploreItem, RelatedArticle, TourGuide, Comment} from './types';



export const exploreItems: ExploreItem[] = [
  {
    title: 'Culinary',
    category: 'Culinary',
    date: '13 Jun 2022',
    image: 'exp1',
    description: 'Two women in local sand are chatting during morning...',
  },
  {
    title: 'Travel',
    category: 'Travel',
    date: '22 Jul 2022',
    image: 'exp1',
    description: 'Enjoying the sunset on Padar island together',
  },
  {
    title: 'Travel',
    category: 'Travel',
    date: '22 Jul 2022',
    image: 'exp2',
    description: 'The lush green surroundings of the campgrounds create a...',
  },
];

export const tourGuides: TourGuide[] = [
  {
    name: 'Miranda Rachel',
    avatar: 'tg1',
    location: 'Jombang, Jawa timur',
    rating: 4.0,
  },
  {
    name: 'Danielle Marsh',
    avatar: 'tg2',
    location: 'Wonosobo, Jawa ten...',
    rating: 4.0,
  },
  {
    name: 'Kang Haerin',
    avatar: 'tg3',
    location: 'Bandung, Jawa barat',
    rating: 5.0,
  },
];

export const mockComments: Comment[] = [
  {
    id: '1',
    author: 'Kang Haerin',
    avatar: '/tg3.svg',
    date: '22 Jul 2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ...',
    rating: 5.0,
  },
  {
    id: '2',
    author: 'Kang Haerin',
    avatar: '/tg3.svg',
    date: '22 Jul 2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ...',
    rating: 5.0,
  },
];


export const relatedArticles: RelatedArticle[] = [
  {
    title: 'The Ultimate Guide To Full-Body Workouts',
    author: 'Alex Carter',
    image: '/workout.svg',
    description: 'Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.',
  },
  {
    title: '5 Tips For Better Cardio Sessions',
    author: 'Maya Lee',
    image: '/workout.svg',
    description: 'Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.',
  },
  {
    title: 'Meal Prep Basics For Gym Enthusiasts',
    author: 'Jordan Smith',
    image: '/workout.svg',
    description: 'Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with your nutrition.',
  },
  {
    title: 'Building Core Strength: Exercises And Benefits',
    author: 'Emma Rodriguez',
    image: '/workout.svg',
    description: 'A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core strength.',
  },
];