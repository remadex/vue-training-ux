const app = new Vue({
    el: "#app",
    data() {
        return {
            msg: "Nos débuts avec VueJS"
        }
    },
    methods: {
        alertMsg() {
            alert(`Voici le message : ${this.msg}`)
        }
    }
})