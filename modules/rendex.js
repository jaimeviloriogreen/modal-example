import { modal } from "./dom.js";

export class Rendex{
    showModal(){
        modal.classList.add("modal--show");
    }
    closeModal(e){
        e.preventDefault();
        modal.classList.remove("modal--show");
    }   
}