import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonCheckbox,
  IonIcon
} from "@ionic/react";
import { chevronDownOutline, chevronUpOutline } from "ionicons/icons";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./ZadaniaKategoria.css"; // Styl animacji

interface Zadanie {
  id: string;
  tresc: string;
  odpowiedz: string;
  rozwiazanie: string;
  dzial: string;
  poziom: string;
}

const ZadaniaKategoria: React.FC = () => {
  const { kategoria } = useParams<{ kategoria: string }>();
  const [zadania, setZadania] = useState<Zadanie[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [pokazOdp, setPokazOdp] = useState<Record<string, boolean>>({});
  const [pokazRozw, setPokazRozw] = useState<Record<string, boolean>>({});
  const [rozwiazane, setRozwiazane] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchZadania = async () => {
      const q = query(collection(db, "zadania"), where("dzial", "==", kategoria));
      const snapshot = await getDocs(q);
      const lista: Zadanie[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Zadanie[];
      setZadania(lista);
    };
    fetchZadania();
  }, [kategoria]);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
    setPokazOdp({});
    setPokazRozw({});
  };

  const toggleOdp = (id: string) => {
    setPokazOdp(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleRozw = (id: string) => {
    setPokazRozw(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleRozwiazane = (id: string) => {
    setRozwiazane(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Zadania: {kategoria}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {zadania.map(zad => {
            const expanded = expandedId === zad.id;
            return (
              <div key={zad.id} className="zadanie-wrapper">
                <IonItem button onClick={() => toggleExpand(zad.id)}>
                  <IonLabel>
                    <h2>{zad.tresc}</h2>
                    <p><strong>Poziom:</strong> {zad.poziom}</p>
                  </IonLabel>
                  <IonCheckbox
                    checked={rozwiazane[zad.id] || false}
                    onIonChange={() => toggleRozwiazane(zad.id)}
                    slot="end"
                  />
                  <IonIcon icon={expanded ? chevronUpOutline : chevronDownOutline} slot="end" />
                </IonItem>
                {expanded && (
                  <div className="panel-animacja">
                    <IonButton expand="block" fill="outline" color="primary" onClick={() => toggleOdp(zad.id)}>
                      {pokazOdp[zad.id] ? "Ukryj odpowiedź" : "Pokaż odpowiedź"}
                    </IonButton>
                    {pokazOdp[zad.id] && (
                      <div className="panel-info">
                        <p><strong>Odpowiedź:</strong> {zad.odpowiedz}</p>
                      </div>
                    )}

                    <IonButton expand="block" fill="outline" color="secondary" onClick={() => toggleRozw(zad.id)}>
                      {pokazRozw[zad.id] ? "Ukryj rozwiązanie" : "Pokaż rozwiązanie"}
                    </IonButton>
                    {pokazRozw[zad.id] && (
                      <div className="panel-info">
                        <p><strong>Rozwiązanie:</strong> {zad.rozwiazanie}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ZadaniaKategoria;
