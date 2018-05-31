'use strict';
import Message from "./message.js";
import MessageStorageView from "../view/messageStorageView.jsx";

export default class MessageStorage {
    constructor() {
        // localStorage.clear();
        if(localStorage.getItem('messageStorage') === null) {
            this.storage = [];
        } else {
            this.storage = JSON.parse(localStorage.getItem('messageStorage'));
        }
    }
    check() {
        if(localStorage.getItem('messageStorage')) {
            return true;
        } else {
            return false;
        }
    }
    add(message) {
        this.storage.push(message);
        localStorage.setItem('messageStorage', JSON.stringify(this.storage));
    }
    get() {
        this.storage = JSON.parse(localStorage.getItem('messageStorage'));
        if(this.storage == null) {
            this.storage = [];
        }
        return this.storage;
    }
    remove() {
        this.storage = [];
        localStorage.removeItem('messageStorage');
    }
    render() {
        var messageStorageView = new MessageStorageView(this.storage);
        messageStorageView.render();
    }
};