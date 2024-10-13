<template src="./Main.html"/>
<style lang="scss" src="./Main.scss"/>

<script setup>
import {ref, computed} from 'vue'
import Submain from '../submain/Submain.vue';
import Pagination from '../pagination/Pagination.vue'
import Loading from '../singlecomponents/Loading.vue'
const myFav = ref("")
const postfromAPI = ref([])
const currentPage = ref(1)
const itemsPerPage = ref(2)
let start = ref()
let fin = ref()
const cargando = ref(true)
const changeFav = ((title)=>{
    myFav.value = title
})

const loadPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    postfromAPI.value = await response.json()
   // setTimeout(()=>{
      cargando.value = false
   // },2000)
    
  } catch (error) {
    console.error(error)
  }
}
loadPosts()


const paginatedItems = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    start.value = startIndex
    fin.value = endIndex
      return postfromAPI.value.slice(startIndex, endIndex);
})

const totalPages = computed(() => {
  return postfromAPI.value.length
    ? Math.ceil(postfromAPI.value.length / itemsPerPage.value)
    : 0;
})

const previous=()=> {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    }
const next=()=> {
       if (currentPage.value < totalPages.value) {
         currentPage.value++
       }
    }

</script>