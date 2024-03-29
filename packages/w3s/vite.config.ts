import { configureReact as configure } from "@beardeddudes/vite-config"
import { fileURLToPath, URL } from "url"

export default configure(
  {
    resolve: {
      alias: [
        { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
        { find: "@styles", replacement: fileURLToPath(new URL("./src/styles", import.meta.url)) },
      ],
    },
    server: { hmr: { overlay: true } },
  },
  {
    analytics: { enableDev: true },
    buildInfo: { enabled: true },
    lint: { enabled: true, enableBuild: true, stylelint: false },
    openGraph: { enabled: true },
    react: { swc: { enabled: true }, svg: { enabled: true } },
    fonts: {
      google: {
        display: "auto",
        families: [{ name: "Roboto", styles: "wght@400;500;600;700;800;900" }],
        preconnect: true,
      },
    },
  }
)
