<template>
  <div>
    <b-jumbotron>
      <template #header>{{ msg }}</template>
      <template #lead> BootstrapVue를 적용한 버전 </template>
      <hr class="my-4" />
      <b-button variant="primary" href="/dept/regist">부서 등록</b-button>
      <b-button variant="success" href="/dept/list">부서 목록</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>
