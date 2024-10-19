// IMEZZO

export interface IMezzo {
    tipo: string;
    id: number;
    stato: string;
    prenotazione: string;
    assegnaUtente(utente: IUtente): void;
}

// IUTENTE

export interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    payment: string;
    mezzoPrenotato: string;
    prenotaMezzo(mezzo: IMezzo): void;
}

// ICITTA

export interface ICitta {
    nome: string;
    elencoMezzi: IMezzo [];
    aggiungiMezzo(mezzo: IMezzo) : void;
}