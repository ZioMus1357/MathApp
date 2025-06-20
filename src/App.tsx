// src/App.tsx
import { IonApp, IonContent, IonMenu, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonRouterOutlet, setupIonicReact, IonMenuToggle, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

import Home from './pages/Home';
import Zadania from './pages/Zadania';
import ZadaniaKategoria from './pages/ZadaniaKategoria';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* MENU BOCZNE */}
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink="/home" routerDirection="none">Strona główna</IonItem>
              <IonItem routerLink="/zadania-kategoria/Algebra" routerDirection="none">Algebra</IonItem>
              <IonItem routerLink="/zadania-kategoria/Geometria" routerDirection="none">Geometria</IonItem>
              <IonItem routerLink="/zadania-kategoria/Analiza" routerDirection="none">Analiza</IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* GŁÓWNY WIDOK */}
      <IonRouterOutlet id="main">
        <Route path="/home" component={Home} exact />
        <Route path="/zadania" component={Zadania} exact />
        <Route path="/zadania-kategoria/:kategoria" component={ZadaniaKategoria} exact />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);


export default App;
