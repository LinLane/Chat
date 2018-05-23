'use strict';

import ChatWindow from "../model/chatWindow";

var React = require('react');
var ReactDOM = require('react-dom');

$(document).ready(function (){

    var $container = $(document).find('.flex-container');

    var chat = new ChatWindow($container);
    chat.init();


    // $('.align_container').keypress(function (event){
    //     if(event.keyCode === 13) {
    //         messageHandler();
    //     }
    // });

    // function messageHandler() {
    //     var messageText = $('.new_message').val();
    //     $('.new_message').val('');
    //     var messageAutor = localStorage.getItem('userName');
    //     var message = new Message(messageAutor, messageText);
    //     messageStorage.setMessage(message);
    //     chatWindow.drawNewMessage(message);
    // }


    // function checkChatState() {
    //     $('.align_container').empty();
    //     if (localStorage.getItem('userName') !== null){
    //         $('.align_container').append(chatHTML);
    //     } else {
    //         $('.align_container').append(loginHTML);

    //     }
    // }
    

});