<script setup>
import { reactive, onMounted } from "vue";
import CompartimentItems from "./CompartimentItems.vue";
import FrigoForm from "./FrigoForm.vue";
import Aliment from "../Aliments.js";
import Recherche from "./recherche.vue";
import monFrigo from "./monFrigo.vue";

const mesAliments = reactive([])

// URL de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/9/produits";

function listerFrigo() {
    const fetchOptions = {
        method: "GET"
    };
    fetch(url, fetchOptions)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        console.log(dataJSON);
        mesAliments.splice(0,mesAliments.length) 
        dataJSON.forEach((aliment) =>
        mesAliments.push(new Aliment(aliment.id, aliment.nom, aliment.qte, aliment.photo)))
    })
    .catch((error) => {
        console.log(error);
    })
}
onMounted(() => {
        listerFrigo();
    });



   function handlerAdd(nom, qt) {
  console.log(nom, qt);
  let photo = "https://webmmi.iut-tlse3.fr//~pecatte//frigo//public//images// "+nom;
  
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({nom:nom, qte:qt, photo:photo}),
  };

  fetch(url, fetchOptions)
    .then((reponse) => {
      return reponse.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listerFrigo();
    })
    .catch((error) => console.log(error));
}


function handlerDelete(id) {

  const fetchOptions = {
    method: "DELETE",
  };

  fetch(url+"/"+id, fetchOptions)
    .then((reponse) => {
      return reponse.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listerFrigo();
    })
    .catch((error) => console.log(error));
}


function handlerAjouterUn(aliment) {
  console.log(aliment);
  aliment.plus();


  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify(aliment),
  };


  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
     listerFrigo();
  })
    .catch((error) => console.log(error));
}

function handlerEnleverUn(aliment) {
  console.log(aliment);
  aliment.moins();


  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if(aliment.qte==0){handlerDelete(id)}
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify(aliment),
  };


  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
     listerFrigo();
  })
    .catch((error) => console.log(error));
}
  

function handlerRecherche(mot){
    const urlPers = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/9/produits?search=";
    let fetchOptions = { method: "GET" };


    fetch(urlPers+mot, fetchOptions)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        let aliments = dataJSON.results; // les aliments sont le tableau "results"
        let resHTML = ""; // variable pour contenir le html généré


         // boucle sur le tableau
      for (let a of aliments) {
        resHTML =
         resHTML + "<option>" + a.nom;
      }
         // insérer le HTML dans la liste <ul></ul> du fichier index.html
         document.getElementById("listeAliment").innerHTML = resHTML;
    })
    .catch((error) => {
            // gestion des erreurs
            console.log(error);
   });
  }

</script>




<template>
  <div class="item">
  <FrigoForm @ajout="handlerAdd"></FrigoForm>
  <ul>  
   
      <CompartimentItems
      v-for="aliment of mesAliments"
      :key="aliment.id"
      :aliment="aliment"
      @supprimer="handlerDelete"
      @ajouter="handlerAjouterUn"
      @enlever="handlerEnleverUn"/>
 
  </ul>


  <Recherche @recherche="handlerRecherche"
  :mesAliments="mesAliments"></Recherche>
 
</div>
</template>

<style scoped>
.frigoTitle {
  position: absolute;
  padding-top: 70px;
  left: 20vw;
}


.item {
  margin-left: auto;
  margin-right: 30px;
  padding-top: 7px;
  padding-bottom: 7px;
  width: 50%;
  height: 100%;
  background: rgba(238, 130, 186, 0.025);
  border-radius: 50px;
  text-align: center;
  padding-bottom: 20px;
}

.search {
  position: sticky;
  bottom: 0;
  left: 10px;
  width: 400px;
  background: rgba(238, 130, 186, 0.025);
  border-radius: 60px;
  text-align: center;
}

</style>