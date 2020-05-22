<template>
  <b-modal :id="modalId" hide-footer>
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
    </div>
    <b-button
      class="mt-3"
      block
      @click="
        $bvModal.hide('bv-modal-example')
        $store.dispatch('user/getUserProfile', 'hello')
      "
    >
      {{ primaryBottonName }}
    </b-button>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    modalId: {
      type: String,
      required: true,
      default: () => {
        return ''
      }
    },
    primaryBottonName: {
      type: String,
      required: true,
      default: () => {
        return {}
      }
    }
  },
  methods: mapActions(['user/getUserProfile'])
}
</script>
