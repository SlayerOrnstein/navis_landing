import { fresh } from '@fresh/plugin-vite';
import MarkdownPlugin from '@goodforyou/vite-plugin-markdown-import';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [fresh(), tailwindcss(), MarkdownPlugin()],
});
