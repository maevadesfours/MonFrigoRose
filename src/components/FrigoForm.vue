<script setup>
import {defineEmits, ref } from "vue";

const nom = ref("");
const qte = ref("");

const emit = defineEmits(["ajout"]);

function handlerSubmit(){
  emit ('ajout', nom.value, qte.value);
  nom.value ="";
  qte.value="";
}
</script>

<template>
  <div class="titre">
    <h2>Ajouter dans mon frigo: </h2>
    <form @submit.prevent="handlerSubmit">
      <div class="entrer">
        <input class="ajoutAliment" type="text" v-model="nom" placeholder="Nouvel aliment"/> 
        <input class="ajoutQt" type="text" v-model="qte" placeholder="Quantité"/> 
      </div>
      <input id="button" type="submit" value = "Valider"/>
    </form>
    <div class="titre">
    <h3>Dans mon frigo, il y a : </h3>
  </div>
  </div>
</template>


<style scoped>

.titre{
  margin-bottom: 0vh;
    font-size: bottom;
    color: black;
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
  background-color: rgb(209, 208, 209);
  border: 2px solid #000000;
  width: 120px;
  border-radius: 12px;
  margin-bottom: 40px;
}

</style>