// 사용자 타입
export interface User {
  id: string;
  nickname: string;
  email: string;
  profileImage?: string;
  joinDate: Date;
  contributionScore: number;
  location?: {
    latitude: number;
    longitude: number;
  };
}

// 고양이 타입
export interface Cat {
  id: string;
  name?: string;
  ageEstimate?: string;
  colors: string[];
  pattern: string;
  features: string[];
  status: 'healthy' | 'missing' | 'protected' | 'injured';
  embeddingVector?: number[];
  physicalFeatures: {
    size: string;
    age: string;
    specialFeatures: string[];
  };
}

// 목격 기록 타입
export interface Sighting {
  id: string;
  userId: string;
  catId: string;
  photos: string[];
  memo?: string;
  location: {
    latitude: number;
    longitude: number;
  };
  address?: string;
  timestamp: Date;
  aiConfidence?: number;
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
