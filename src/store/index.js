import { reactive } from 'vue'

export const store = reactive({
    user: null,
    authenticate(user) {
        this.user = user;
    },
    nullify() {
        this.user = null;
    }
})