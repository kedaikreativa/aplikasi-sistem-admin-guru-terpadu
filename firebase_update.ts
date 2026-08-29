// Determine which config to use (Vercel ENV vars or AI Studio Local fallback)
const envConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// If VITE_FIREBASE_API_KEY exists in Env, use it. Otherwise, use local config.
const isUsingEnv = Boolean(envConfig.apiKey);
const firebaseConfig = isUsingEnv ? envConfig : firebaseConfigData;

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Use default database for Env (Vercel) or specific ID for AI Studio
const dbId = isUsingEnv ? "(default)" : (firebaseConfigData.firestoreDatabaseId || "(default)");
export const firestore = getFirestore(app, dbId);
