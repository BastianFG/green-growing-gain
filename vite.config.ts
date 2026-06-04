// Build configuration for TanStack Start + Vite
// The vite-tanstack-config preset includes: tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro, componentTagger (dev-only), VITE_* env injection,
// @ path alias, React/TanStack dedupe, error logger plugins, and sandbox detection.
// Pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
