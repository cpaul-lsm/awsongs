export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/.DS_Store","images/aw-logo-burg.png","images/aw-logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BcANvEZy.js",app:"_app/immutable/entry/app.BvTOVWWt.js",imports:["_app/immutable/entry/start.BcANvEZy.js","_app/immutable/chunks/DLtiX1_J.js","_app/immutable/chunks/DKvy5QcI.js","_app/immutable/chunks/Cr2v5_yL.js","_app/immutable/chunks/DtfZhzdL.js","_app/immutable/entry/app.BvTOVWWt.js","_app/immutable/chunks/DKvy5QcI.js","_app/immutable/chunks/BysVNgX5.js","_app/immutable/chunks/NmqIrhUq.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DtlghJB6.js","_app/immutable/chunks/5jkJuy8t.js","_app/immutable/chunks/swhhfC6M.js","_app/immutable/chunks/DyjjeE8C.js","_app/immutable/chunks/Cr2v5_yL.js","_app/immutable/chunks/DtfZhzdL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/request",
				pattern: /^\/request\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/request/r2",
				pattern: /^\/request\/r2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/request/r3",
				pattern: /^\/request\/r3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/tips",
				pattern: /^\/tips\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/watch",
				pattern: /^\/watch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
