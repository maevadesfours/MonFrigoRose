export default class Aliment{
    constructor(id, nom, qte, photo) {
      this._id = id;
      this._nom = nom;
      this._qte = qte;
      this._photo = photo;    }
    
    get id() {
      return this._id;
    }
    get nom() {
      return this._nom;
    }

    get qte() {
      return this._qte;
    }

    get photo() {
      return this._photo;
    }

    set nom(nom) {
      this._nom = nom;
    }

    set qte(qte) {
        this._qte = qte;
    }
    
    moins() {
        this._qte--;
    }
    plus() {
        this._qte++;
    }

    afficherNom() {
      return `Aliment: ${this._nom} |`;
    }
  
    afficherQte() {
      return `Quantité : ${this._qte}`;
    }
  }