import { modal } from "./dom.js";

export class Rendex{
    showModal(e){
        e.preventDefault();
        modal.classList.add("modal--show");
    }
    closeModal(e){
        e.preventDefault();
        modal.classList.remove("modal--show");
    }   
}