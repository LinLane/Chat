'use strict';

import Message from "./message";
import UserStorage from "./userStorage";
import MessageStorage from "./messageStorage";
import ChatFormView from "../view/chatFormView";
import LoginFormView from "../view/loginFormView";

export default class ChatWindow {
    constructor($container) {
        this.container = $container;
        this.loginNameSelector = '.js-login_input_field';
        this.loginSelector = '.js-start_button';
        this.logoutSelector = '.js-back_icon';
        this.sendMessageSelector = '.js-send_icon';
        this.newMessageText = '.js-new_message';
        this.chat = new ChatFormView(this.container);
        this.login = new LoginFormView(this.container);
        this.userStorage = new UserStorage();
        this.messageStorage = new MessageStorage();
    }
    init() {
        if(this.userStorage.hasInlogin()) {
            this.showChatForm();
        } else {
            this.showLoginForm();
        }
    }
    showLoginForm() {
        this.login.render();
        this.loginHandler(this.loginSelector);
    }
    showChatForm() {
        this.chat.render();
        if(this.messageStorage.check()) {
            this.messageStorage.render();
            this.scrollMessageContainer();
        }
        this.logoutHandler(this.logoutSelector);
        this.messageHandler();
        this.timerHandler();
        this.timerId = setInterval(this.timerHandler, 5000);
    }
    timerHandler() {
        $('.time').html(moment().format('hh:mm a'));
    }
    loginHandler(loginSelector) {
        this.container.find(loginSelector).click(() => {
            var userName = this.container.find(this.loginNameSelector).val();
            this.container.find(this.loginNameSelector).val('');
            this.userStorage.add(userName);
            this.showChatForm();
        });
         
    }
    logoutHandler(logoutSelector) {
        this.container.find(logoutSelector).click(() => {
            clearInterval(this.timerId);
            this.userStorage.remove();
            this.messageStorage.remove();
            this.showLoginForm();
        });
    }
    messageHandler() {
        this.container.unbind("keypress").keypress((event) => {
            if(event.keyCode === 13) {
                this.sendMessage();
            }
        });
        this.container.find(this.sendMessageSelector).click(() => {
            this.sendMessage();
        });
    }
    sendMessage() {
        var messageText = $(this.newMessageText).val();
        $(this.newMessageText).val('');
        var messageAuthor = this.userStorage.get();
        var message = new Message(messageAuthor, messageText);
        message.render();
        this.scrollMessageContainer();
        this.messageStorage.add(message);
    }
    scrollMessageContainer() {
        $('.js-message_container').scrollTop($('.js-message_container').prop('scrollHeight'));
    }
};