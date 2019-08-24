import i18n from '@/i18n'

export default class Engine {
    
    static setLanguage = (lang = 'en') => {
        i18n.locale = lang
    }

    static getLanguage = () => {
        return i18n.locale
    }

    static i18n = key => {
        return i18n.t(key)
    }
}