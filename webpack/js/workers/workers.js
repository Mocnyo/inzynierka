import Vue from 'vue';
import axios from 'axios';

var teams = new Vue({
    delimiters: ['${', '}'],
    el: "#workers",
    data: function () {
        return {
            users: null,
            teams: null,
            teamID: 7
        }
    },
    mounted: function () {
        this.getTeams();
        this.getUsers(this.teamID);
    },
    methods: {
        getUsers: function (teamID) {
            axios.get('app_dev.php/api/user/users/'+ teamID +'/users/by/team')
                .then(response => (this.users = response.data))
                .catch(function (error) {
                    console.log(error);
                });
        },
        getTeams: function () {
            axios.get('app_dev.php/api/team/teams')
                .then(response => ([this.teams = response.data, this.teamID = response.data[0].id]))
                .catch(function (error) {
                    console.log(error);
                });
        },
        getUserActive: function ($activeTime) {
            let date = new Date($activeTime);
            let currentDateTime = new Date();
            let twoMinBefore = currentDateTime.setMinutes(currentDateTime.getMinutes() - 2);
            let twoMinAfter = currentDateTime.setMinutes(currentDateTime.getMinutes() + 2);
            if ((date > twoMinBefore) && (date < twoMinAfter)) {
                return true;
            } else {
                return false;
            }
        }
    }
})

