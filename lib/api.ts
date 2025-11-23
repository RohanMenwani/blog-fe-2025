import { ApiResponse, BlogPost, Comment, Rating, RatingStats } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Generic fetch wrapper with error handling
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    throw error;
  }
}

// Blog Posts API
export const postsAPI = {
  // Get all posts
  getAll: async (): Promise<BlogPost[]> => {
    const response = await fetchAPI<BlogPost[]>('/posts');
    return response.data || [];
  },

  // Get single post by slug
  getBySlug: async (slug: string): Promise<BlogPost | null> => {
    try {
      const response = await fetchAPI<BlogPost>(`/posts/${slug}`);
      return response.data || null;
    } catch (error) {
      return null;
    }
  },

  // Create new post (admin feature)
  create: async (title: string, body: string): Promise<BlogPost> => {
    const response = await fetchAPI<BlogPost>('/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
    });
    return response.data!;
  },
};

// Comments API
export const commentsAPI = {
  // Get comments by post slug
  getBySlug: async (slug: string): Promise<Comment[]> => {
    try {
      const response = await fetchAPI<Comment[]>(`/comments/slug/${slug}`);
      return response.data || [];
    } catch (error) {
      return [];
    }
  },

  // Create new comment
  create: async (postId: string, author: string, comment: string): Promise<Comment> => {
    const response = await fetchAPI<Comment>('/comments', {
      method: 'POST',
      body: JSON.stringify({ postId, author, comment }),
    });
    return response.data!;
  },
};

// Ratings API
export const ratingsAPI = {
  // Get ratings by post slug
  getBySlug: async (slug: string): Promise<Rating[]> => {
    try {
      const response = await fetchAPI<Rating[]>(`/ratings/slug/${slug}`);
      return response.data || [];
    } catch (error) {
      return [];
    }
  },

  // Get rating statistics by post slug
  getStatsBySlug: async (slug: string): Promise<RatingStats | null> => {
    try {
      const response = await fetchAPI<RatingStats>(`/ratings/stats/slug/${slug}`);
      return response.data || null;
    } catch (error) {
      return null;
    }
  },

  // Create new rating + review
  create: async (
    postId: string,
    author: string,
    rating: number,
    review?: string
  ): Promise<Rating> => {
    const response = await fetchAPI<Rating>('/ratings', {
      method: 'POST',
      body: JSON.stringify({ postId, author, rating, review }),
    });
    return response.data!;
  },
};
