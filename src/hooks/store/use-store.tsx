import { useStore } from '../../core/store';

export const useModal = () => {
    const { modals } = useStore();
    return { modals };
};
