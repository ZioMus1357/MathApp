// src/components/Menu.tsx
import React from "react";
import {
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import { useHistory } from "react-router";

const kategorie = ["Algebra", "Geometria", "Analiza"]; // Możesz to pobrać dynamicznie z Firestore

const Menu: React.FC = () => {
  const history = useHistory();

  const goTo = (path: string) => {
    history.push(path);
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem button onClick={() => goTo("/")}>
              <IonLabel>Strona startowa</IonLabel>
            </IonItem>
            <IonLabel style={{ marginTop: "1rem", marginLeft: "1rem", fontWeight: "bold" }}>
              Kategorie zadań
            </IonLabel>
            {kategorie.map((kategoria) => (
              <IonItem
                button
                key={kategoria}
                onClick={() => goTo(`/zadania/${encodeURIComponent(kategoria)}`)}
              >
                <IonLabel>{kategoria}</IonLabel>
              </IonItem>
            ))}
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
