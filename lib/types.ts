export interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  rating: number;
}

export interface ExploreItem {
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
}

export interface TourGuide {
  name: string;
  avatar: string;
  location: string;
  rating: number;
}

export interface RelatedArticle {
  title: string;
  author: string;
  image: string;
  description: string;
}
