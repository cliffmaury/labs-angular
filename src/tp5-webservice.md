# TP 5
> Intégration des webservices

Nous avons maintenant besoin de faire fonctionner notre application avec des vrais webservice.

Nous allons donc utiliser le module Http d'Angular pour consommer des services Rest.

# Installation du serveur

Le serveur est déjà développé. Il expose un certain nombre de service que nous détaillerons par la suite.

Commençons par l'installer avec la commande suivante :

```bash
npm install --save labs-angular-backend
npm install --save-dev concurrently
```

Ensuite nous allons créer un fichier `server.js` à la racine du projet. Dans ce fichier copiez le code suivant :

```javascript
const labsAngularBackend = require("labs-angular-backend");

new labsAngularBackend.Server().start().catch(er => console.error(er));
```

Pour nous simplifier la vie nous allons rajouter des commandes npm dans le `package.json :`

```json
{
  "script": {
      "start": "npm install && concurrently \"npm run start:server\" \"npm run start:app\"",
      "start:app": "ng serve --proxy-config proxy.conf.json",
      "start:server": "node server.js"
  }
}
```
> npm run start démarrera désormais l'application front et le serveur en même temps.

Il nous reste à configurer le proxy de `ng serve` pour que l'application web puisse consommer les webservices.
Créez un nouveau fichier `proxy.conf.json` et copiez la configuration suivante :

```json
{
  "/api/*": {
    "target": "http://localhost:8080",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug"
  },
  "/socket.io/*": {
    "target": "http://localhost:8080",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug"
  }
}
```

Enfin lancez la commande `npm run start` pour vérifier que l'ensemble fonctionne !

## Les webservices exposés

Voici la liste des webservices :

```bash
┌────────┬───────────────────────────┬─────────────────────────┐
│ Method │ Endpoint                  │ Class method            │
│────────│───────────────────────────│─────────────────────────│
│ ALL    │ /api/                     │ RestCtrl.test()         │
│────────│───────────────────────────│─────────────────────────│
│ GET    │ /api/html                 │ RestCtrl.render()       │
│────────│───────────────────────────│─────────────────────────│
│ POST   │ /api/users/               │ UserCtrl.create()       │
│────────│───────────────────────────│─────────────────────────│
│ GET    │ /api/users/               │ UserCtrl.getList()      │
│────────│───────────────────────────│─────────────────────────│
│ PATCH  │ /api/users/:email/:status │ UserCtrl.updateStatus() │
│────────│───────────────────────────│─────────────────────────│
│ GET    │ /api/users/:idOrEmail     │ UserCtrl.get()          │
│────────│───────────────────────────│─────────────────────────│
│ PUT    │ /api/users/:id            │ UserCtrl.update()       │
│────────│───────────────────────────│─────────────────────────│
│ DELETE │ /api/users/:id            │ UserCtrl.remove()       │
│────────│───────────────────────────│─────────────────────────│
│ POST   │ /api/users/authenticate   │ UserCtrl.authenticate() │
└────────┴───────────────────────────┴─────────────────────────┘
```

Avec les informations dont vous disposez concernant les webservices, vous pouvez integrer 
ces services dans votre application.

Commencez par integrer le service retournant la liste des utilisateurs !
Ensuite vous pouvez intégrer tous les autres services sauf la suppression (en bonus).

**Note :** Dans ce TP, vous n'avez pas pour obligation d'utiliser l'API reactive avec le module Http.
 Vous pouvez directement transformer l'objet Observable retourner par Http en Promise comme suivant :
 
```typescript
http.get(`/api/users`).toPromise() => Promise 
```

> Correction du TP : #resources-tp5-solution


[Suivant](tp6-programmation-reactive-websocket.md)

