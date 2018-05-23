'use strict';


export default class Time {
    constructor() {
    }
    now() {
        return moment();
    }
    diff(date) {
        return moment(date).fromNow();
    }
};