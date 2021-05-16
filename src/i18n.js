import {createI18n} from "vue-i18n";
import ar from './assets/locales/ar.json';
import en from './assets/locales/en.json'
export const i18n = createI18n({
    locale: localStorage.getItem('locale') || 'en',
    messages:{
        ar, en
    }
})