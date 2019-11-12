import Vue from 'vue';
import axios from 'axios';

var times = new Vue({
    delimiters: ['${', '}'],
    el: "#workers",
    data: function () {
        return {
            data: null
        }
    },
    mounted: function () {
        this.getUsers();
    },
    methods: {
        getUsers: function () {
            axios.get('app_dev.php/api/user/users')
                .then(response => (this.data = response.data))
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})
