<template>
<div>
  <button type="button" class="btn btn-primary" id="set-avatar">Update avatar</button>

<avatar-cropper
    trigger="#set-avatar"
    upload-url="https://sm.ms/api/upload"
    :uploaded="updateUserAvatar"
    upload-form-name="smfile"
></avatar-cropper>

</div>
</template>
<script>
import AvatarCropper from 'vue-avatar-cropper'

export default {
components: {
      AvatarCropper,
    },
    data() {
      return {
        // updateUserAvatar : '',
      }
    },
    methods: {
      updateUserAvatar(response) {
        console.log(response);
      }
    }
}
</script>


