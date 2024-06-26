import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer,
} from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import DefaultTheme from "vitepress/theme";
import naive from 'naive-ui'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("demo-preview", AntDesignContainer);
    app.use(naive)
  },
};
