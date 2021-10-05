new Vue({
    el: '.Events',
    data: {
        
            Name: 'Homer Honasan',
            Age: 21,
            url: "https://vuejs.org/images/logo.svg"
          
        
    },
    methods: {
        Five() {
            return this.Age+5;
        },
        Fnumber() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return '0';
            } else {
                return '1';
            }
        }
    }
});