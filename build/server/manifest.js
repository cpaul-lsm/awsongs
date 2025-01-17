const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.DPcL9eVK.js","app":"_app/immutable/entry/app.C_0LUX08.js","imports":["_app/immutable/entry/start.DPcL9eVK.js","_app/immutable/chunks/entry.D8jNUrBP.js","_app/immutable/chunks/runtime.DAUSjKms.js","_app/immutable/chunks/index-client.BUs9hEbT.js","_app/immutable/entry/app.C_0LUX08.js","_app/immutable/chunks/runtime.DAUSjKms.js","_app/immutable/chunks/render.DzTF58AG.js","_app/immutable/chunks/misc.0zgdeyB0.js","_app/immutable/chunks/template.DXirXkmM.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.Yz_L7sOg.js","_app/immutable/chunks/proxy.CoxkSrJ3.js","_app/immutable/chunks/index-client.BUs9hEbT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CMuefb92.js')),
			__memo(() => import('./chunks/1-CrTDIaDw.js')),
			__memo(() => import('./chunks/2-CAW-KqYj.js')),
			__memo(() => import('./chunks/3-CCXYdD-4.js')),
			__memo(() => import('./chunks/4-lLLXzCwg.js')),
			__memo(() => import('./chunks/5-B-eqePt-.js')),
			__memo(() => import('./chunks/6-Yowuj_ef.js')),
			__memo(() => import('./chunks/7-B4sXcs3U.js'))
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
				id: "/api/add-request",
				pattern: /^\/api\/add-request\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BDrXagnw.js'))
			},
			{
				id: "/api/update-request",
				pattern: /^\/api\/update-request\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CU1tUkat.js'))
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
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
