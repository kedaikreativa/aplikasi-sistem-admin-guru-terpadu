import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  getDocs,
  getDocFromServer,
  writeBatch
} from "firebase/firestore";
import { 
  Siswa, 
  Mapel, 
  Jadwal, 
  LogAbsensi, 
  DataNilai, 
  JurnalAgenda, 
  SiswaBimbingan, 
  BimbinganWali, 
  Pengaturan 
} from "../types";

// Konfigurasi Firebase Pribadi Hardcode
const firebaseConfig = {
  apiKey: "AIzaSyAwJgHCcCRL3tWDPQaMKR0QS0znWDxuMXE",
  authDomain: "aplikasiguruai.firebaseapp.com",
  projectId: "aplikasiguruai",
  storageBucket: "aplikasiguruai.firebasestorage.app",
  messagingSenderId: "83937950753",
  appId: "1:83937950753:web:53471174f4901a50f2f760"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const firestore = getFirestore(app, "(default)");

// Collections references
export const COLLECTIONS = {
  SISWA: "data_siswa",
  GURU: "data_guru",
  MAPEL: "mapel",
  JADWAL: "jadwal",
  LOG_ABSENSI: "log_absensi",
  DATA_NILAI: "data_nilai",
  JURNAL_AGENDA: "jurnal_agenda",
  SISWA_BIMBINGAN: "siswa_bimbingan",
  BIMBINGAN_WALI: "bimbingan_wali",
  CATATAN_GURU: "catatan_guru",
  ARSIP_PERANGKAT: "arsip_perangkat",
  PENGATURAN: "pengaturan"
};



// Validate Connection to Firestore on startup
async function testConnection() {
  try {
    await getDocFromServer(doc(firestore, "test", "connection"));
  } catch (error) {
    if (error instanceof Error && error.message.includes("offline")) {
      console.warn("Firestore client operating in offline mode.");
    }
  }
}
testConnection();

// Generic Realtime Subscription with offline fallback
export function subscribeCollection<T>(collectionName: string, callback: (data: T[]) => void) {
  const colRef = collection(firestore, collectionName);
  return onSnapshot(
    colRef, 
    (snapshot) => {
      const items: T[] = [];
      snapshot.forEach((docSnap) => {
        items.push({ id: docSnap.id, ...docSnap.data() } as unknown as T);
      });
      callback(items);
    },
    (error) => {
      console.warn(`Firestore subscription notice on ${collectionName}:`, error?.message || error);
    }
  );
}

// Single Document Save/Update
export async function saveDocument(collectionName: string, id: string, data: Record<string, any>) {
  try {
    const docRef = doc(firestore, collectionName, id);
    await setDoc(docRef, { ...data, updatedAt: Date.now() }, { merge: true });
  } catch (err: any) {
    console.error(`Error saving document in ${collectionName}:`, err);
    throw err;
  }
}

// Single Document Delete
export async function deleteDocument(collectionName: string, id: string) {
  try {
    const docRef = doc(firestore, collectionName, id);
    await deleteDoc(docRef);
  } catch (err: any) {
    console.error(`Error deleting document in ${collectionName}:`, err);
    throw err;
  }
}

// Batch Save Documents
export async function batchSaveDocuments(collectionName: string, items: Array<{ id: string; [key: string]: any }>) {
  if (!items || items.length === 0) return;
  try {
    const batch = writeBatch(firestore);
    items.forEach((item) => {
      const docRef = doc(firestore, collectionName, item.id);
      batch.set(docRef, { ...item, updatedAt: Date.now() }, { merge: true });
    });
    await batch.commit();
  } catch (err: any) {
    console.error(`Error batch saving documents in ${collectionName}:`, err);
    throw err;
  }
}

// Pengaturan special helper (Doc ID: "config")
export async function savePengaturan(config: Pengaturan) {
  try {
    const docRef = doc(firestore, COLLECTIONS.PENGATURAN, "config");
    await setDoc(docRef, { ...config, updatedAt: Date.now() }, { merge: true });
  } catch (err: any) {
    console.error("Error saving pengaturan:", err);
    throw err;
  }
}

export function subscribePengaturan(callback: (config: Pengaturan) => void) {
  const docRef = doc(firestore, COLLECTIONS.PENGATURAN, "config");
  return onSnapshot(
    docRef, 
    (docSnap) => {
      if (docSnap.exists()) {
        callback(docSnap.data() as Pengaturan);
      }
    },
    (error) => {
      console.warn("Firestore pengaturan subscription notice:", error?.message || error);
    }
  );
}

// Clear / Wipe All Collections in Database (Except Configuration)
export async function clearAllDatabaseCollections() {
  // Set flag in localStorage and Firestore so auto-seeder never re-populates on any device
  localStorage.setItem("edadmin_database_cleared", "true");

  try {
    const configDocRef = doc(firestore, COLLECTIONS.PENGATURAN, "config");
    await setDoc(configDocRef, { isDatabaseCleared: true, updatedAt: Date.now() }, { merge: true });
  } catch (err) {
    console.warn("Could not set isDatabaseCleared flag in pengaturan collection:", err);
  }

  const collectionsToClear = [
    COLLECTIONS.SISWA,
    COLLECTIONS.MAPEL,
    COLLECTIONS.JADWAL,
    COLLECTIONS.LOG_ABSENSI,
    COLLECTIONS.DATA_NILAI,
    COLLECTIONS.JURNAL_AGENDA,
    COLLECTIONS.SISWA_BIMBINGAN,
    COLLECTIONS.BIMBINGAN_WALI
  ];

  const errors: string[] = [];

  for (const colName of collectionsToClear) {
    try {
      const colRef = collection(firestore, colName);
      const snapshot = await getDocs(colRef);
      if (!snapshot.empty) {
        const docs = snapshot.docs;
        for (let i = 0; i < docs.length; i += 400) {
          const batch = writeBatch(firestore);
          const chunk = docs.slice(i, i + 400);
          chunk.forEach((docSnap) => {
            batch.delete(docSnap.ref);
          });
          await batch.commit();
        }
      }
    } catch (err: any) {
      console.error(`Error clearing collection ${colName}:`, err);
      errors.push(`${colName}: ${err?.message || err}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Sebagian koleksi gagal dihapus: ${errors.join(", ")}`);
  }
}

export const auth = getAuth(app);
