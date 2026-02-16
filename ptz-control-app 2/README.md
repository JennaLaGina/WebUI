# PTZ Control App

Web console React per la configurazione dei controlli PTZ (Pan, Tilt, Zoom) di dispositivi Jabra.

![Preview](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Caratteristiche

- ✨ Interfaccia moderna e responsive
- 🎥 Preview video in tempo reale
- 🎛️ Controlli PTZ interattivi (Pan, Tilt, Zoom)
- 💾 Salvataggio di 3 preset configurabili
- 🔄 Stati hover e active sui controlli
- ✅ Accordion con stati "Not configured" / "Configured"

## 📋 Prerequisiti

- Node.js (v14 o superiore)
- npm o yarn

## 🚀 Installazione

1. Clona il repository:
```bash
git clone https://github.com/TUO-USERNAME/ptz-control-app.git
cd ptz-control-app
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia l'applicazione in modalità sviluppo:
```bash
npm start
```

L'app sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 🏗️ Build per produzione

Per creare una build ottimizzata:

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `build/`.

## 📁 Struttura del progetto

```
ptz-control-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── PTZControl.js
│   ├── styles/
│   │   └── PTZControl.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Funzionalità UI

### Flusso di configurazione

1. **Stato iniziale**: Accordion chiuso con status "Not configured"
2. **Espansione**: Click sull'accordion per espandere e visualizzare il pulsante "Configure"
3. **Configurazione**: 
   - Click su "Configure" apre il modale
   - Attivazione toggle PTZ
   - Visualizzazione preview video e controlli
4. **Interazione**:
   - Controlli con stato hover e active (filled white)
   - Preview nascondibile tramite checkbox
   - Salvataggio preset (1, 2, 3)
5. **Salvataggio**: Il pulsante "Save" si attiva dopo modifiche
6. **Completamento**: Accordion con status "Configured"

### Controlli PTZ

- **Pan left / Pan right**: Movimento orizzontale
- **Tilt up / Tilt down**: Movimento verticale  
- **Zoom in / Zoom out**: Controllo zoom

## 🛠️ Tecnologie utilizzate

- React 18.2.0
- CSS3 con variabili custom
- React Hooks (useState)

## 📝 To-Do / Miglioramenti futuri

- [ ] Integrazione con API reale per controllo PTZ
- [ ] WebRTC per streaming video live
- [ ] Persistenza dei preset nel localStorage
- [ ] Supporto multi-lingua
- [ ] Test unitari con Jest
- [ ] Animazioni avanzate con Framer Motion

## 🤝 Contribuire

I contributi sono benvenuti! Per favore:

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT. Vedi il file `LICENSE` per dettagli.

## 👤 Autore

**Jenny**

## 🙏 Riconoscimenti

- Design UI ispirato alle specifiche Jabra
- Icone e grafica custom

---

⭐ Se questo progetto ti è stato utile, lascia una stella su GitHub!
