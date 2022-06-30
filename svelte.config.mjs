import preprocess from "svelte-preprocess";

export default {
  emitCss: false,
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}