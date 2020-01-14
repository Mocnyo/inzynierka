import Vue from 'vue';
import axios from 'axios';

var navbar = new Vue({
    el: "#navbar",
    delimiters: ['${', '}'],
    data: function () {
        return {
            state: "paused",
            startTime: Date.now(),
            currentTime: Date.now(),
            interval: null,
            description: "",
            projects: null,
            project: null,
            projectName: "empty"
        }
    },
    mounted: function () {
        if (localStorage.state === "started") {
            this.state = "started";
        }
        this.interval = setInterval(this.updateCurrentTime, 1000);
        this.getProjects();
    },
    destroyed: function () {
        clearInterval(this.interval)
    },
    computed: {
        time: function () {
            return this.hours + ':' + this.minutes + ':' + this.seconds;
        },
        milliseconds: function () {
            if (localStorage.startTime) {
                this.startTime = localStorage.startTime;
            }
            return this.currentTime - this.$data.startTime;
        },
        hours: function () {
            var lapsed = this.milliseconds;
            var hrs = Math.floor((lapsed / 1000 / 60 / 60));
            return hrs >= 10 ? hrs : '0' + hrs;
        },
        minutes: function () {
            var lapsed = this.milliseconds;
            var min = Math.floor((lapsed / 1000 / 60) % 60);
            return min >= 10 ? min : '0' + min;
        },
        seconds: function () {
            var lapsed = this.milliseconds;
            var sec = Math.ceil((lapsed / 1000) % 60);
            return sec >= 10 ? sec : '0' + sec;
        }
    },
    methods: {
        reset: function () {
            this.$data.state = "started";
            this.$data.startTime = Date.now();
            this.$data.currentTime = Date.now();
        },
        pause: function () {
            this.$data.state = "paused";
            this.postTime();
            localStorage.clear();
        },
        resume: function () {
            this.$data.state = "started";
        },
        updateCurrentTime: function () {
            if (this.$data.state === "started") {
                this.currentTime = Date.now();
            }
        },
        postTime: function () {
            var startDate = new Date(parseInt(this.startTime));
            var stopDate = new Date(this.currentTime);
            axios.post('app_dev.php/api/time/timers', {
                Timer: {
                    descriptionTask: this.description,
                    startTime: {
                        date: {
                            year: startDate.getFullYear(),
                            month: startDate.getMonth()+1,
                            day: startDate.getDate()
                        },
                        time: {
                            hour: startDate.getHours(),
                            minute: startDate.getMinutes(),
                            second: startDate.getSeconds()
                        }
                    },
                    stopTime:{
                        date: {
                            year: stopDate.getFullYear(),
                            month: stopDate.getMonth()+1,
                            day: stopDate.getDate()
                        },
                        time: {
                            hour: stopDate.getHours(),
                            minute: stopDate.getMinutes(),
                            second: stopDate.getSeconds()
                        }
                    },
                    project: this.project
                }
            })
                .then(function (response) {
                })
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
        }
    },
    watch: {
        time(newTime) {
            localStorage.originalTime = newTime;
        },
        state(newState) {
            localStorage.state = newState;
        },
        startTime(newStartTime) {
            localStorage.startTime = newStartTime;
        },
        projectName(name) {
            localStorage.projectName = name;
        },
        // projectDescription(desc) {
        //     localStorage.description = desc;
        // }
    }
})
