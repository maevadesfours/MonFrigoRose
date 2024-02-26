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
    
      <input classe="button" type="submit" value = "Valider"/>
    </form>
  </body>
</template>


<style scoped>

.saisie{
  margin: 20px;
  background-color: rgba(238, 130, 186, 0.025);
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
  border: pink;
  background-color: rgb(247, 137, 194, 0.025);
  padding-top: 15px;
  width: 150px;
  border-radius: 10px;
}

.send {
  border: black;
  padding: 10px;
  background: green;
  cursor: pointer;
  align-self: center; 
  border-radius: 10px;
}

</style>