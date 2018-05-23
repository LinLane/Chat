'use strict';

export default class ChatFormView {
    constructor(container) {
        this.chatForm = `<div class="chat_window">
                            <div class="chat_header_container">
                                <div class="js-back_icon">    
                                    <img src="img/back_icon.png" class="clock_icon">
                                </div>
                                <div class="chat_header">
                                    test task 
                                </div>
                                <div class="empty_col">
                                </div>
                            </div>
                            <div class="time_block">
                                <div>
                                    <img src="img/clock_icon.png" class="clock_icon">
                                </div>
                                <div class="time_text">
                                    today at 
                                    <span class="time">
                                        
                                    </span>
                                </div>
                            </div>
                            <div class="js-message_container">
                                        
                            </div>
                            <div>
                                <img src="img/send_icon.png" class="js-send_icon">
                            </div>
                            <div>
                                <textarea class="js-new_message" placeholder="Type message. . ."></textarea>
                            </div>

                        </div>`
        this.container = container;
    }
    render() {
        this.container.html(this.chatForm);
    }
}