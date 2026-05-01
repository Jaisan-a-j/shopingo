import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig(({ command }) => {
  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    base: command === "build" ? "/shopingo/" : "/",
  };
});
