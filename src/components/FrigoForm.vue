<script setup>
import {defineEmits, ref } from "vue";

const nom = ref("");
const qte = ref("");

const emit = defineEmits(["ajout"]);
//nom.value ="";

function handlerSubmit(){
  emit ('ajout', nom.value, qte.value);
  nom.value ="";
  qte.value="";
}
</script>

<template>
  <body class="saisie">
    <h4>Ajouter dans mon frigo: </h4>
    <form @submit.prevent="handlerSubmit">
      <div class="entrer">
        <input class="ajoutAliment" type="text" v-model="nom" placeholder="Nouvel aliment"/> 
        <input class="ajoutQt" type="text" v-model="qte" placeholder="Quantité"/> 
      </div>
      <input id="button" type="submit" value = "Valider"/>
    </form>
  </body>
</template>


<style scoped>

.saisie{
  margin: 20px;
}

.saisieFormulaire{
  padding-left: 60px;
  display: flex;
  justify-content: center;
}

.entrer{
  display: center;
}

.ajoutAliment, .ajoutQt {
  border: black;
  background-color: pink;
  padding-top: 5px;
  width: 150px;
  border-radius: 8px;
  border: 1px solid gray;
}

#button {
  align-self: center; 
  background-color: gray;
  border: 3px solid #000000;
  width: 120px;
  border-radius: 8px;
}

</style>