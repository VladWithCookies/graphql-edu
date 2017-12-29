<template>
  <div class='ui form'>
    <!--<div v-if='article.imageSrc' class='ui fluid image'>
      <img :src='article.imageSrc' />
    </div>-->
    <div class='file-input'>
      <label for='file' class='ui icon button'>
        <i class='file icon' />
        Add image
      </label>
      <input
        @change='uploadImage'
        style='display: none'
        accept='image/*'
        type='file'
        id='file'
      />
    </div>

    <div class='field'>
      <input placeholder='Title' v-model.trim='article.title' />
    </div>

    <div class='field'>
      <textarea v-model.trim='article.content' rows='15' />
    </div>

    <button @click='onSubmit' class='ui inverted purple button'>
      Submit
    </button>
    <button @click='onCancel' class='ui secondary button'>Cancel</button>
  </div>
</template>

<script>
export default {
  props: ['article', 'onSubmit', 'onCancel'],
  methods: {
    uploadImage (e) {
      const files = e.target.files
      let reader = new FileReader()

      if(!files[0]) return

      this.article.imageSrc = ''
      reader.onload = (e) => {
        this.article.imageSrc = e.target.result
      }
      reader.readAsDataURL(files[0])
    }
  }
}
</script>

<style>
.file-input {
  margin: 10px 0;
}
</style>
