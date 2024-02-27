<script setup>
import { reactive, onMounted } from "vue";
import FrigoItems from "./FrigoItems.vue";
import FrigoForm from "./FrigoForm.vue";
import Aliment from "../Aliments.js";
import Recherche from "./recherche.vue";

const mesAliments = reactive([])
const AlimentsR = reactive([])

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

  if(aliment.qte==0){handlerDelete(aliment.id)}
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
  
function handlerRecherche(motcle){
  /* on récupère le mot clé nécessaire à la recherche */
  const fetchOptions = { method: "GET" };

  fetch(url + "?search=" + motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      let alimentsTrouves = dataJSON;
      document.getElementById("recherche").innerHTML += "";
      document.getElementById("recherche").innerHTML += "<ul>";
      /* on insère de l'html pour créer une liste de livre correspondant au critère*/
      for (let l of alimentsTrouves) {
        /* pour chaque livres, on récupère ses attributs et on l'incère dans l'html */
        document.getElementById("recherche").innerHTML +=
          "<li>" +
          l.nom +
          " qt " +
          l.qte +
          "</li>";
      }
      /* on oublie pas de fermer la liste */
      document.getElementById("recherche").innerHTML += "</ul>";
    })
    .catch((error) => console.log(error));
}


</script>


<template>
  <div class="lesFonctions">
  <FrigoForm @ajout="handlerAdd"></FrigoForm>
  <ul>  
      <FrigoItems
      v-for="aliment of mesAliments"
      :key="aliment.id"
      :aliment="aliment"
      @supprimer="handlerDelete"
      @ajouter="handlerAjouterUn"
      @enlever="handlerEnleverUn"/>
  </ul>

  <Recherche @recherche="handlerRecherche"
  :nomRecherche="nomRecherche"></Recherche>
 
</div>
</template>

<style scoped>

.lesFonctions {
  margin-left: 30px;
  padding-top: 20px;

  width: 50%;
  height: 80%;
  border-radius: 50px;
  text-align: center;

  
  background-color: rgba(255, 255, 255, 0.8);
  
  border: 1px solid black;
}

</style>