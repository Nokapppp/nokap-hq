/* NoKap HQ – configurazione
 * 1) Incolla qui sotto i valori che Firebase ti dà in
 *    Impostazioni progetto → Le tue app → App web → Configurazione SDK.
 *    Non sono password: possono stare in un file pubblico.
 * 2) "admins": chi può gestire il team e approvare. Usa email Google.
 */
window.NOKAP_FIREBASE = {
  apiKey: "AIzaSyAKpjI6_ubDks5CHivI7ZJ3LhYXpAXvAms",
  authDomain: "nokap-hq.firebaseapp.com",
  projectId: "nokap-hq",
  storageBucket: "nokap-hq.firebasestorage.app",
  messagingSenderId: "919967004533",
  appId: "1:919967004533:web:9910bd2b4c6b7565e3453c"
};

window.NOKAP_CONFIG = {
  admins: ["nokapmerch@gmail.com", "lorenzociampana@gmail.com"],
  // solo chi è qui può aggiungere, rinominare o togliere persone dal team
  teamManagers: ["nokapmerch@gmail.com"]
};
