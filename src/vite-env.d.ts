/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ROADMAP_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}