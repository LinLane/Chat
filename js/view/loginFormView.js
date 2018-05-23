'use strict';

export default class LoginFormView {
    constructor(container) {
        this.loginForm = `<div class="login_window">
                            <div class="main">
                                <h1>Chat</h1>
                                <img class="chat_icon" src="img/chat_icon.png" alt="chat icon">
                            </div>
                            <div class="background_form">
                                <form class="container_form">
                                    <div class="form_content">
                                        <p class="form_header">username</p>
                                        <input class="js-login_input_field" type="text" name="login" value="">
                                        <p class="form_header password_header">password</p>
                                        <input class="password_input_field" type="password" name="password" value="">
                                    </div>
                                    <div class="form_footer">
                                        <div class="container_form_footer">
                                            <button type="button" class="js-start_button">Get Started</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>`
        this.container = container;
    }
    render() {
        this.container.html(this.loginForm);
    }
}