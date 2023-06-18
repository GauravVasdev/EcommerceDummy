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

export const tokenState = atom({
    key:'tokenValue',
    default: ''
})

// export const roleState = atom({
//     key:'tokenValue',
//     default: ''
// })