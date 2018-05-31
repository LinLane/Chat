'use strict';

import Time from "./time";

export default class Message {
    constructor(author, text){
        this.author = author;
        this.text = text;
        this.time = new Time().now();
    }
};