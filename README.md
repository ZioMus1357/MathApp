# 📚 Math App – Aplikacja e-learningowa z zadaniami maturalnymi z matematyki

Math App to wieloplatformowa aplikacja mobilna stworzona przy użyciu frameworka **Ionic + React**, z wykorzystaniem **Firebase Firestore** jako bazy danych. Umożliwia przeglądanie i rozwiązywanie zadań maturalnych z matematyki, z podziałem na działy oraz poziomy trudności.

---

## ✅ Funkcje aplikacji

- 📂 Podział zadań na działy tematyczne (np. Algebra, Geometria)
- 📋 Wyświetlanie treści zadań oraz poziomu trudności
- 🔽 Rozwijane panele z przyciskami:
  - Pokaż odpowiedź
  - Pokaż rozwiązanie
- ✅ Możliwość oznaczania zadań jako rozwiązane
- 🎨 Estetyczny interfejs i animacje przejść
- 📱 Przystosowanie do widoku mobilnego (PWA i Android)
- ☁️ Integracja z Firebase – dane zadań pobierane z Firestore

---

## 🛠️ Technologie

- **React** + **TypeScript**
- **Ionic Framework**
- **Firebase Firestore** (NoSQL backend)
- **CSS Modules / Ionic Components**

---

## 🚀 Uruchomienie lokalne

```bash
# Zainstaluj zależności
npm install

# Uruchom aplikację w przeglądarce
ionic serve

# Android:
npm run build                             Buduje aplikację webową do dist/
npx cap sync android                      Synchronizuje konfigurację i pluginy
npx cap copy android                      Kopiuje dist/ do folderu Androida
npx cap open android                      Otwiera Android Studio
