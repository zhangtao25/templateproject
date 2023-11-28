import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cn from "./../locales/cn.json";
import en from "./../locales/en.json";

void i18n.use(initReactI18next).init({
  lng: "cn", // 默认语言
  resources: {
    en: {
      translation: en,
    },
    cn: {
      translation: cn,
    },
    // 其他语言的翻译资源
  },
});

export default i18n;
