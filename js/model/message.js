'use strict';

import MessageView from "../view/messageView";
import Time from "./time";


export default class Message {
    constructor(author, text){
        this.author = author;
        this.text = text;
        // this.id = id;
        this.time = new Time().now();
    }
    render() {
        var messageView = new MessageView(this.text, this.author, this.time);
        messageView.render();
    }
};