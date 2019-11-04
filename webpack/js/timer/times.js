import Vue from 'vue';
import axios from 'axios';

var times = new Vue({
    delimiters: ['${', '}'],
    el: "#times",
    data: function () {
        return {
            data: null
        }
    },
    mounted: function () {
        this.getTimes();
    },
    methods: {
        getTimes: function () {
            axios.get('app_dev.php/api/time/timers')
                .then(response => (this.data = response.data))
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})
