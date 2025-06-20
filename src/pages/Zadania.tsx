// src/pages/Zadania.tsx
import React, { useEffect, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonMenuButton, IonButtons } from "@ionic/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams } from "react-router";


interface Zadanie {
  id: string;
  tresc: string;
  odpowiedz: string;
  rozwiazanie: string;
  dzial: string;
  poziom: string;
}

const Zadania: React.FC = () => {
  const { dzial } = useParams<{ dzial?: string }>();
  const [zadania, setZadania] = useState<Zadanie[]>([]);

  useEffect(() => {
    const fetchZadania = async () => {
      try {
        let querySnapshot;
        if (dzial) {
          const q = query(collection(db, "zadania"), where("dzial", "==", dzial));
          querySnapshot = await getDocs(q);
        } else {
          querySnapshot = await getDocs(collection(db, "zadania"));
        }
        const lista = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Zadanie[];
        setZadania(lista);
      } catch (error) {
        console.error("Błąd pobierania zadań:", error);
      }
    };
    fetchZadania();
  }, [dzial]);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Zadania {dzial ? ` - ${dzial}` : ""}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {zadania.map(zad => (
            <IonItem key={zad.id}>
              <IonLabel>
                <h2>{zad.tresc}</h2>
                <p><strong>Dział:</strong> {zad.dzial} | <strong>Poziom:</strong> {zad.poziom}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Zadania;
