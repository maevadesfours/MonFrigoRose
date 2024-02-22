// une chose
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


    // modifier la quantitee
    set qte(qte) {
      this._qte = qte;
    }
   
    pourAfficher() {
      return `--> ${this._id} (${this._nom} de quantitee:${this._qte})`;
    }
  }
s