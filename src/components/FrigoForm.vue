<script setup>
import { ref } from "vue";

const photo = ref("");
const nom = ref("");
const qte = ref("");

defineEmits(["ajout"]);

</script>

<template>
  <body class="saisie">
    <h4>Ajouter dans mon frigo: </h4>
    <form @submit.prevent="$emit('ajout', nom, qte)" class="saisieFormulaire">
      <div class="entrer">
        <input class="ajoutAliment" type="text" v-model="nom" placeholder="Nouvel aliment"/> 
        <input class="ajoutQt" type="text" v-model="qt" placeholder="Quantité"/> 
      </div>
      <button class="send" type="submit"> Valider </button>
    </form>
  </body>
</template>


<style scoped>

.saisie{
  margin: 20px;
  background-color: rgba(238, 130, 186, 0.025);
}

.formInput{
  padding-left: 40px;
  display: flex;
  justify-content: center;
}

.input{
  display: flex;
  flex-direction: column;
}

.inputA, .inputQ, .inputP {
  border: none;

  background-color: rgb(247, 137, 194, 0.025);
  background-image: url('icons/food.png');
  background-size: 20%;
  background-position: right;
  background-repeat: no-repeat;
  padding-top: 15px;
  width: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.send {
  border: none;
  padding: 15px;
  background: none;
  cursor: pointer;
  align-self: flex; 
}

#valider {
  width: 50px;
  height: 50px; 
}
</style>