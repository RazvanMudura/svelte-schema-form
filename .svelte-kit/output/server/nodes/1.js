

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6AD-BDq8.js","_app/immutable/chunks/scheduler.YqzeI4eF.js","_app/immutable/chunks/index.UOys41uS.js","_app/immutable/chunks/singletons.oGMgdjDP.js","_app/immutable/chunks/index.sR6m8Xv2.js"];
export const stylesheets = [];
export const fonts = [];
