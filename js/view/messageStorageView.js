'use strict';

import Message from "../model/message";
import MessageView from "./messageView";
import Time from "../model/time";

export default class MessageStorageView {
    constructor(storage) {
        this.storage = storage;
    }
    render() {
        this.storage.map(function (message) {
            var messageView = new MessageView(message.text, message.author, message.time);
            messageView.render(); 
        });
    }
}