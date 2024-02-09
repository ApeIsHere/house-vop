import hamburger from "./modules/hamburger"
import scroll from "./modules/scroll";
import forms from "./modules/forms";
import checkTextInputs from "./modules/checkTextInputs";
import checkNumInputs from "./modules/checkNumInputs";

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    hamburger();
    scroll();
    forms();
    checkTextInputs('[name="name"]');
    checkNumInputs('[name="phone"]')
});

