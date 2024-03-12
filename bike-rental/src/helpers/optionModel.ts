import { ModalOptions } from 'flowbite';

export const options: ModalOptions = {
    backdrop: 'dynamic',
    backdropClasses: 'inset-0 z-40',
    closable: true,
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    }
};