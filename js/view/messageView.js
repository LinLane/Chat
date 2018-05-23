'use strict';

import Time from "../model/time";

export default class MessageView {
    constructor(text, author, time) {
        this.messageBlock = '<div class="js-sent_message"></div>';
        this.messageText = '<p class="js-text_message">' + text + '</p>';
        this.messageAuthor = '<span class="js-author_message">' + author + '</span>';
        this.messageData = '<div class="js-message_data"></div>';
        this.time = new Time().diff(time);
        this.messageTime = '<span class="js-time_message">' + this.time + '</span> ';
    }
    render() {
        $('.js-message_container').append(this.messageBlock);
        $('.js-sent_message').last().append(this.messageText).append(this.messageData);
        $('.js-message_data').last().append(this.messageAuthor).append(this.messageTime);
    }

}