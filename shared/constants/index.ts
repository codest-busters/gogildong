export const COLORS = {
  PRIMARY: '#FF6B6B',
  PRIMARY_DARK: '#E55A5A',
  SECONDARY: '#4ECDC4',
  BACKGROUND: '#F8F9FA',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: {
    100: '#F8F9FA',
    200: '#E9ECEF',
    300: '#DEE2E6',
    500: '#6C757D',
    700: '#495057',
    900: '#212529'
  }
};

export const API_ENDPOINTS = {
  BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000/api',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    PROFILE: '/auth/profile'
  },
  CATS: {
    LIST: '/cats',
    CREATE: '/cats',
    DETAIL: (id: string) => `/cats/${id}`,
    NEARBY: '/cats/nearby'
  },
  SIGHTINGS: {
    LIST: '/sightings',
    CREATE: '/sightings',
    MY_SIGHTINGS: '/sightings/my'
  }
};

export const CAT_STATUS = {
  HEALTHY: 'healthy',
  MISSING: 'missing', 
  PROTECTED: 'protected',
  INJURED: 'injured'
} as const;
