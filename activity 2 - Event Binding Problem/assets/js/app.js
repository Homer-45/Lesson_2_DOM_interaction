new Vue ({
    el: ".events",
    data: {
        output1: '',
        output2: ''
    },
    methods: {
        showAlert() {
            alert('Hi, this is an ALERT!')
        },
        setOutput2(event) {
            this.output2 = event.target.value
        },
        setOutput1(event) {
            this.output1 = event.target.value
        }
    }
    
})