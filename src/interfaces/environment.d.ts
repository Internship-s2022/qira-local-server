export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      FIREBASE_PRIVATE_KEY: string;
      FIREBASE_CLIENT_EMAIL: string;
      FIREBASE_PROJECT_ID: string;
      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_ACCESS_KEY: string;
      AWS_BUCKET: string;
      AWS_BUCKET_CATEGORIES_IMAGES: string;
      AWS_BUCKET_PRODUCTS_IMAGES: string;
      AWS_BUCKET_PRODUCTS_TECHNICAL_FILE: string;
    }
  }
}
