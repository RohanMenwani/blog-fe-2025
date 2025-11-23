export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  message?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  body: string;
  slug: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  commentCount?: number;
  averageRating?: number;
  ratingCount?: number;
}

export interface Comment {
  _id: string;
  postId: string;
  author: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface Rating {
  _id: string;
  postId: string;
  author: string;
  rating: number;
  review?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RatingStats {
  postId: string;
  averageRating: number;
  ratingCount: number;
  ratings: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}

// Frontend types 
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
