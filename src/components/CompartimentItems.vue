<script setup>
import { defineEmits, defineProps } from "vue";
defineProps(["aliment"]);
defineEmits(["supprimer","ajouterUn","enleverUn"])
</script>


<template>
       
  <li>
        <button @click="$emit('ajouterUn', aliment)">+</button>
        <button @click="$emit('enleverUn', aliment)">-</button>
        <button @click="$emit('supprimer', aliment.id)">Supprimer</button>
        {{ aliment.pourAfficher() }}
             
               <!--<td>
                    <button @click="$emit('ajouter', aliment.id)">plus</button>
                </td>-->
    </li>
           
       
       
</template>


<style>
.aliment {
    width: 80%;
  }




  ul {
  /* afin de retirer les puces de la liste */
  list-style-type: none;
}


    </style>


