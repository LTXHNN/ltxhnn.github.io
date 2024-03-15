import DefaultTheme from "vitepress/theme";
import "./styles/index.less";
import "./styles/vars.less";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 用于过滤一些组件，不重要
    app.config.compilerOptions.isCustomElement = (tag) => tag.includes("r-");
  },
};
