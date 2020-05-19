<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"><img id="icon" :src="iconSrc"/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              Search
            </b-button>
          </b-nav-form>
          <b-nav-item href="#">Register</b-nav-item>
          <b-nav-item v-b-modal.modal-1>Login</b-nav-item>
          <Modal
            :modal-id="'modal-1'"
            :primary-botton-name="'Login'"
            :primeray-link="'/example.com'"
          />
          <b-nav-item href="#">terms of services</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Modal from '@/components/homescreen/Modal.vue'

export default {
  components: {
    Modal
  },
  props: {
    iconSrc: {
      type: String,
      required: true,
      default: () => {
        return ''
      }
    }
  }
}
</script>

<style scoped>
#icon {
  width: 50px;
  height: 50px;
}
</style>
