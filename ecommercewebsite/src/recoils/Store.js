import {
    RecoilState,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export const formState = atom({
    key:'isHeaderPresent',
    default: true
})