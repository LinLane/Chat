'use strict';

export default class UserStorage {
    constructor() {
        this.user = '';
        this.storageKey = 'userName';
    }
    isLogined() {
        if(localStorage.getItem(this.storageKey)) {
            return true;
        } else {
            return false;
        }
    }
    remove() {
        localStorage.removeItem(this.storageKey);
    }
    add(userName) {
        localStorage.setItem(this.storageKey, userName);
        this.user = userName;
    }
    get() {
        // return this.user;
        return localStorage.getItem('userName');
    }
}