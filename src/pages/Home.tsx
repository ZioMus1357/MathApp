import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  console.log("Komponent HOME załadowany");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton /> {/* ← Przycisk otwierający menu */}
          </IonButtons>
          <IonTitle>Witamy w Math App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>O aplikacji</h2>
        <p>Math App to aplikacja e-learningowa z zadaniami maturalnymi z matematyki.</p>
        <p>Wybierz kategorię zadań z menu po lewej stronie, aby rozpocząć naukę.</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
