import {btnClose, btnShow} from "./modules/dom.js";
import {Rendex} from "./modules/rendex.js";

main();

function main(){    
    const {showModal, closeModal} = new Rendex();

    btnShow.addEventListener("click", showModal);
    btnClose.addEventListener("click", closeModal);
}

