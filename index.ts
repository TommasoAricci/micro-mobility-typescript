import { Mezzo, Utente, Citta } from "./src/classes";

// ISTANZE MEZZI

let biciElettrica = new Mezzo("bici", 1, "disponibile");
let scooterElettrico = new Mezzo("scooter", 2, "disponibile");
let monopattinoElettrico = new Mezzo("monopattino", 3, "disponibile");

// ISTANZE UTENTI

let user1 = new Utente("Alberto", "Rossi", "alberto.rossi@gmail.com", "carta di credito");
let user2 = new Utente("Giovanni", "Bianchi", "giovanni.bianchi@hotmail.com", "bonifico");
let user3 = new Utente("Mario", "Verdi", "mario.verdi@libero.com", "paypal");

// ISTANZE CITTA'

let PadovaCity = new Citta("Padova", [biciElettrica, scooterElettrico]);
let RomaCity = new Citta("Roma", [monopattinoElettrico]);
let MilanoCity = new Citta("Milano", [biciElettrica, scooterElettrico, monopattinoElettrico]);

// PRENOTAZIONE MEZZI

user1.prenotaMezzo(biciElettrica);
user2.prenotaMezzo(scooterElettrico);
user3.prenotaMezzo(monopattinoElettrico);

// AGGIUNTA MEZZI

PadovaCity.aggiungiMezzo(biciElettrica);
RomaCity.aggiungiMezzo(scooterElettrico);
MilanoCity.aggiungiMezzo(monopattinoElettrico);

console.log(user1);
console.log(biciElettrica);
