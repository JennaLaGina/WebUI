# 🚀 Guida Setup GitHub

## Passo 1: Inizializza Git

```bash
cd ptz-control-app
git init
```

## Passo 2: Aggiungi i file

```bash
git add .
git commit -m "Initial commit: PTZ Control App"
```

## Passo 3: Crea un nuovo repository su GitHub

1. Vai su [GitHub](https://github.com)
2. Click su **"New repository"** (pulsante verde in alto a destra)
3. Inserisci i dettagli:
   - **Repository name**: `ptz-control-app`
   - **Description**: `Web console React per configurazione PTZ controls Jabra`
   - **Visibility**: Public (o Private se preferisci)
   - **NON** selezionare "Initialize this repository with a README"

## Passo 4: Collega il repository locale a GitHub

Dopo aver creato il repository, GitHub ti mostrerà i comandi. Usa questi:

```bash
git remote add origin https://github.com/TUO-USERNAME/ptz-control-app.git
git branch -M main
git push -u origin main
```

**Sostituisci `TUO-USERNAME` con il tuo username GitHub!**

## Passo 5: Verifica

Vai su `https://github.com/TUO-USERNAME/ptz-control-app` per vedere il tuo progetto online!

---

## 🎯 Setup GitHub Pages (Opzionale)

Per pubblicare l'app su GitHub Pages:

1. Aggiungi al `package.json`:
```json
"homepage": "https://TUO-USERNAME.github.io/ptz-control-app"
```

2. Installa gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Aggiungi gli script nel `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploya:
```bash
npm run deploy
```

5. Vai su Settings → Pages nel tuo repository e verifica che sia attivo!

---

## 📝 Comandi Git Utili

```bash
# Vedere lo status
git status

# Aggiungere modifiche
git add .
git commit -m "Descrizione modifiche"
git push

# Vedere la cronologia
git log

# Creare un nuovo branch
git checkout -b nome-branch

# Tornare al main
git checkout main

# Unire un branch
git merge nome-branch
```

---

## 🔐 Usare SSH invece di HTTPS (Consigliato)

1. Genera una chiave SSH:
```bash
ssh-keygen -t ed25519 -C "tua-email@example.com"
```

2. Aggiungi la chiave a GitHub:
   - Copia la chiave: `cat ~/.ssh/id_ed25519.pub`
   - Vai su GitHub → Settings → SSH and GPG keys → New SSH key
   - Incolla la chiave

3. Cambia remote in SSH:
```bash
git remote set-url origin git@github.com:TUO-USERNAME/ptz-control-app.git
```

---

## ✅ Checklist Pre-Push

- [ ] Codice testato localmente (`npm start`)
- [ ] Build funziona (`npm run build`)
- [ ] README.md aggiornato
- [ ] .gitignore configurato
- [ ] Commit message chiaro
- [ ] Branch corretto (main/master)

---

## 🆘 Problemi Comuni

**Errore: "remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/TUO-USERNAME/ptz-control-app.git
```

**Errore: "authentication failed"**
- Usa un Personal Access Token invece della password
- Vai su GitHub → Settings → Developer settings → Personal access tokens

**Errore: "Updates were rejected"**
```bash
git pull origin main --rebase
git push
```
