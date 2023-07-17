import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.1ecb6fbf.js","_app/immutable/chunks/scheduler.d2f032b3.js","_app/immutable/chunks/index.4e9dc73d.js","_app/immutable/chunks/stores.6fce859d.js","_app/immutable/chunks/singletons.308faf12.js","_app/immutable/chunks/index.91905744.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
