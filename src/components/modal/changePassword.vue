<template>
  <div
    class="modal fade"
    id="changePassword"
    tabindex="-1"
    aria-labelledby="changePasswordTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="changePasswordTitle">更改密碼</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4">
          <form action="" class="mb-4">
            <div class="form-outline mb-4" style="">
              <input
                class="form-control"
                type="password"
                id="MDBInput-102844"
              /><label class="form-label" for="MDBInput-102844"
                >請輸入舊密碼</label
              ><!----><!----><!----><!---->
              <div class="form-notch">
                <div class="form-notch-leading" style="width: 9px"></div>
                <div class="form-notch-middle" style="width: 92px"></div>
                <div class="form-notch-trailing"></div>
              </div>
            </div>
            <!----><!----><!----><!----><!----><!----><!----><!----><!---->
            <div class="form-outline mb-4" style="">
              <input
                class="form-control"
                type="password"
                id="newPassword"
              /><label class="form-label" for="newPassword"
                >設定您的新密碼</label
              ><!----><!----><!----><!---->
              <div class="form-notch">
                <div class="form-notch-leading" style="width: 9px"></div>
                <div class="form-notch-middle" style="width: 112px"></div>
                <div class="form-notch-trailing"></div>
              </div>
            </div>
            <div class="form-outline mb-4" style="">
              <input
                class="form-control"
                type="password"
                id="MDBInput-298797"
              /><label class="form-label" for="MDBInput-298797"
                >再次輸入新密碼</label
              ><!----><!----><!----><!---->
              <div class="form-notch">
                <div class="form-notch-leading" style="width: 9px"></div>
                <div class="form-notch-middle" style="width: 112px"></div>
                <div class="form-notch-trailing"></div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button type="button" class="btn btn-primary">儲存變更</button>
        </div>
      </div>
    </div>
  </div>
</template>
