<script setup>
defineProps(["aliment"]);
defineEmits(["supprimer", "ajouter", "enlever"])
</script>


<template>
        <div class="afficher">
            {{ aliment.afficherNom() }}
            {{ aliment.afficherQte() }}<br>
        </div>
        <div>
            
            <button @click="$emit('enlever', aliment)" class="button">-</button>
            <button @click="$emit('ajouter', aliment)" class="button">+</button>
            <button @click="$emit('supprimer', aliment.id)" class="buttonS">Supprimer</button>
        </div>
    
</template>

<style scoped>
.afficher {
    font-family: Arial, sans-serif;
    margin-top: 10px;
}

#supprimer, #ajouter, #enlever {
    width: 20px;
    height: 20px;
   
}

.button {
    margin-left:15px;
    border: black;
    background: rgb(209, 208, 209); 
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid gray;
    width: 20px;
}

.buttonS{
    margin-left:15px;
    border: black;
    background: rgb(209, 208, 209); 
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid gray;
    width: 100px;
}
</style>



