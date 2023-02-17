<template>
  <div class="text-center">
    <img src="/imlogo.png" class="logo" />
    <h1>教師授課意願系統</h1>
    <div class="card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        fill="gray"
        class="bi bi-person"
        viewBox="0 0 16 16"
        style="margin-left: auto; margin-right: auto; display: block"
      >
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
        />
      </svg>
      <div class="card-body">
        <h4 class="card-title mb-4">教職員登入</h4>
        <input
          type="text"
          id="inputAccount"
          placeholder="帳號"
          class="form-control"
          required
          autofocus
          name="account"
        />
        <input
          type="password"
          id="inputPassword"
          style="margin-top: 10px"
          placeholder="密碼"
          class="form-control"
          required
          name="password"
        />
        <!-- <router-link :to="{ name: 'teacher' }"> User </router-link> -->

        <router-link
          :to="{ name: 'teacher' }"
          class="btn btn-warning"
          style="margin-top: 10px"
          >登入</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
