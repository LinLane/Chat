'use strict';

export default class ChatFormView {
    constructor(container) {
        this.chatForm = `<div class="chat_window">
            <div class="chat_window_container">
                <div class="chat_header">
                        <img class="js-back_icon" src="img/back_icon.png" class="clock_icon">
                        <span>
                            test task 
                        </span></div>
                <div class="time_block">
                    <div class="clock"><img src="img/clock_icon.png" class="clock_icon"></div>
                    <div class="time_text">
                        today at 
                        <span class="time">
                            
                        </span>
                    </div>
                </div>
                <div class="js-message_container">
                            
                </div>
                <img src="img/send_icon.png" class="js-send_icon">
                <textarea class="js-new_message" placeholder="Type message. . ."></textarea>
                </div>
            </div>`
        this.container = container;
    }
    render() {
        this.container.html(this.chatForm);
    }
}