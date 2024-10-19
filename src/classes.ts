import { IMezzo, IUtente, ICitta } from "./interfaces";

// MEZZO

export class Mezzo implements IMezzo {
    tipo: "bici" | "scooter" | "monopattino";
    id: number;
    stato: "disponibile" | "in uso";
    prenotazione: string;

    constructor(tipo: "bici" | "scooter" | "monopattino", id: number, stato: "disponibile" | "in uso", prenotazione:string = "") {
        this.tipo = tipo;
        this.id = id;
        this.stato = stato;
        this.prenotazione = prenotazione;
    }

    assegnaUtente(utente: IUtente): void {
        this.stato = "in uso";
        this.prenotazione = utente.nome;
        console.log(`${utente.nome} ${utente.cognome} ha prenotato il mezzo ${this.tipo}`);
    }
}

// UTENTE

export class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    payment: "carta di credito" | "bonifico" | "paypal";
    mezzoPrenotato: string;

    constructor(nome: string, cognome: string, email: string, payment: "carta di credito" | "bonifico" | "paypal", mezzoPrenotato: string = "") {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.payment = payment;
        this.mezzoPrenotato = mezzoPrenotato;
    }

    prenotaMezzo(mezzo: IMezzo): void {
        mezzo.assegnaUtente(this);
        this.mezzoPrenotato = mezzo.tipo;
    }
}

// CITTA

export class Citta implements ICitta {
    nome: "Padova" | "Roma" | "Milano";
    elencoMezzi: IMezzo [];

    constructor( nome: "Padova" | "Roma" | "Milano", elencoMezzi: IMezzo []) {
        this.nome = nome;
        this.elencoMezzi = elencoMezzi;
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.elencoMezzi.push(mezzo);
    }
}