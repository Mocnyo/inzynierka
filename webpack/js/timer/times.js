import Vue from 'vue';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { Datetime } from "vue-datetime";
import 'vue-datetime/dist/vue-datetime.css';
import { Settings } from 'luxon';

Settings.defaultLocale = 'pl';

var times = new Vue({
    delimiters: ['${', '}'],
    el: "#times",
    data: function () {
        return {
            data: null,
            projects: null,
            date: null
        }
    },
    mounted: function () {
        this.getTimes();
        this.getProjects();
    },
    components: {
        datetime: Datetime,
    },
    methods: {
        getTimes: function () {
            axios.get('app_dev.php/api/time/timers')
                .then(response => (this.data = response.data))
                .catch(function (error) {
                    console.log(error);
                });
        },
        getProjects: function () {
            axios.get('app_dev.php/api/project/projects')
                .then(response => (this.projects = response.data))
                .catch(function (error) {
                    console.log(error);
                });
        },
        handleInput: debounce(function ($teamId, $description, $startTime, $stopTime, $project) {
            $startTime = new Date($startTime);
            $stopTime = new Date($stopTime);

            axios.put('app_dev.php/api/time/timers/'+ $teamId, {
                Timer: {
                    descriptionTask: $description,
                    startTime: {
                        date: {
                            year: $startTime.getFullYear(),
                            month: $startTime.getMonth()+1,
                            day: $startTime.getDate()
                        },
                        time: {
                            hour: $startTime.getHours(),
                            minute: $startTime.getMinutes(),
                            second: $startTime.getSeconds()
                        }
                    },
                    stopTime:{
                        date: {
                            year: $stopTime.getFullYear(),
                            month: $stopTime.getMonth()+1,
                            day: $stopTime.getDate()
                        },
                        time: {
                            hour: $stopTime.getHours(),
                            minute: $stopTime.getMinutes(),
                            second: $stopTime.getSeconds()
                        }
                    },
                    project: $project
                }
            })
                .then(function (response) {
                })
                .catch(function (error) {
                    console.log(error);
                });
        }),
    }
});
