export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BB6l8gnu.js","app":"_app/immutable/entry/app.DunGKNhA.js","imports":["_app/immutable/entry/start.BB6l8gnu.js","_app/immutable/chunks/scheduler.vYR2bk-x.js","_app/immutable/chunks/singletons.WPUmcVOY.js","_app/immutable/chunks/index.6jBjZWy7.js","_app/immutable/entry/app.DunGKNhA.js","_app/immutable/chunks/scheduler.vYR2bk-x.js","_app/immutable/chunks/index.CEdY4TUy.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
