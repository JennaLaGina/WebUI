# 🚀 Quick Start Guide - PTZ Control App

## Download del progetto

Hai ricevuto il progetto come archivio compresso `ptz-control-app.tar.gz` oppure come cartella `ptz-control-app/`.

## Installazione Rapida

### 1️⃣ Estrai l'archivio (se necessario)

```bash
tar -xzf ptz-control-app.tar.gz
cd ptz-control-app
```

Oppure se hai già la cartella:
```bash
cd ptz-control-app
```

### 2️⃣ Installa le dipendenze

```bash
npm install
```

### 3️⃣ Avvia l'app

```bash
npm start
```

L'app sarà disponibile su **http://localhost:3000** 🎉

---

## 📤 Carica su GitHub

### Metodo 1: Da interfaccia web GitHub

1. Vai su https://github.com/new
2. Crea un nuovo repository chiamato `ptz-control-app`
3. NON inizializzare con README
4. Segui le istruzioni che GitHub ti mostra

### Metodo 2: Da terminale

```bash
# Inizializza git
git init

# Aggiungi tutti i file
git add .

# Primo commit
git commit -m "Initial commit: PTZ Control App"

# Collega a GitHub (sostituisci TUO-USERNAME!)
git remote add origin https://github.com/TUO-USERNAME/ptz-control-app.git

# Push
git branch -M main
git push -u origin main
```

---

## 📋 Struttura Progetto

```
ptz-control-app/
├── public/
│   └── index.html              # HTML principale
├── src/
│   ├── components/
│   │   └── PTZControl.js       # Componente principale PTZ
│   ├── styles/
│   │   └── PTZControl.css      # Stili del componente
│   ├── App.js                  # App principale
│   ├── App.css                 # Stili app
│   ├── index.js                # Entry point React
│   └── index.css               # Stili globali
├── .gitignore                  # File da ignorare in Git
├── LICENSE                     # Licenza MIT
├── package.json                # Dipendenze e scripts
├── README.md                   # Documentazione completa
└── GITHUB_SETUP.md             # Guida GitHub dettagliata
```

---

## ✅ Checklist

- [ ] Node.js installato (v14+)
- [ ] npm funzionante
- [ ] Progetto estratto
- [ ] Dipendenze installate (`npm install`)
- [ ] App avviata (`npm start`)
- [ ] Browser aperto su localhost:3000
- [ ] Repository GitHub creato
- [ ] Codice pushato su GitHub

---

## 🆘 Aiuto

**Errore "npm not found"**
- Installa Node.js da https://nodejs.org

**Porta 3000 già in uso**
```bash
# Usa un'altra porta
PORT=3001 npm start
```

**Problemi con le dipendenze**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentazione Completa

Per maggiori dettagli, consulta:
- **README.md** - Documentazione completa del progetto
- **GITHUB_SETUP.md** - Guida dettagliata GitHub

---

**Buon lavoro! 🎯**
