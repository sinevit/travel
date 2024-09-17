export class Modal{
    constructor (classes){
        this.classes =classes;
        this.modal ='';
        this.modalContent='';
        this.modalcloseBtn ='';
        this.overlay='';
    }

    buildModal(content){
        //overlay
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay','overlay_modal');
        //modal
        this.modal = this.createDomNode(this.modal, 'div', this.classes);
        //modal content
        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal_content');
        //modal content
        this.modalcloseBtn= this.createDomNode(this.modalcloseBtn, 'span', 'modal_close-icon');

        this.modalcloseBtn.innerHTML ='';
        this.setContent(content);

        this.appendModalElements();

        console.log(this.modal);
    }


    createDomNode(node, element, ...classes){
        node = document.createElement(element);
        node.classList.add('overlay');
        return node
    }

    setContent(content){
        if(typeof content === 'string'){
            this.modalContent.innerHTML =content;
        }else{
            this.modalContent.innerHTML ='';
            this.modalContent.appendChild(content);
        }
    }
    
    appendModalElements(){
        this.modal.append(this.modalcloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    
    }
}