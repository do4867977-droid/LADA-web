// Firebase (CDN) shared initialization for all pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import {
  getAnalytics,
  isSupported as isAnalyticsSupported,
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOmIOcMGfkXBMgHFNxmVzbe6XfVre2RKI",
  authDomain: "lada-3f114.firebaseapp.com",
  projectId: "lada-3f114",
  storageBucket: "lada-3f114.firebasestorage.app",
  messagingSenderId: "54892326623",
  appId: "1:54892326623:web:9d6aa3c22ae7ce6c38836a",
  measurementId: "G-MEM6DMVMES",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const analyticsPromise = (async () => {
  try {
    const supported = await isAnalyticsSupported();
    if (!supported) return null;
    return getAnalytics(app);
  } catch {
    return null;
  }
})();

// Optional: expose for debugging in browser console
window.firebaseApp = app;
window.firebaseAuth = auth;
