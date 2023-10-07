import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { app } from '../firebase_config';

const db = getFirestore(app)
export async function saveEmail(email) {
    const webemailsCol = collection(db, 'webemails');
  
    try {
      const newEmailRef = await addDoc(webemailsCol, {
        email: email,
        timestamp: new Date()
      });
  
      console.log('Email guardado con ID:', newEmailRef.id);
      return newEmailRef.id;
    } catch (error) {
      console.error('Error al guardar el email:', error);
      throw new Error('Error al guardar el email');
    }
  }