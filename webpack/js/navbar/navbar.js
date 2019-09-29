import Vue from 'vue';

var navbar = new Vue({
    el: "#navbar",
    data: function () {
        return {
            state: "paused",
            startTime: Date.now(),
            currentTime: Date.now(),
            interval: null,
        }
    },
    mounted: function () {
        if (localStorage.state === "started") {
            this.state = "started";
        }
        this.interval = setInterval(this.updateCurrentTime, 1000);
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
            localStorage.clear();
        },
        resume: function () {
            this.$data.state = "started";
        },
        updateCurrentTime: function () {
            if (this.$data.state === "started") {
                this.currentTime = Date.now();
            }
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
        }
    }
})
