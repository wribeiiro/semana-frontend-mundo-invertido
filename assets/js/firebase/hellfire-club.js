import app from './app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export async function subscribe(data) {
    const database = getFirestore(app);
    const hellfireCollection = collection(database, 'hellfire-club');
    const docResponse = await addDoc(hellfireCollection, data);

    return docResponse.id;
}