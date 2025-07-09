(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__d7df46._.js", {

"[externals]/ [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks");

module.exports = mod;
}}),
"[externals]/ [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer");

module.exports = mod;
}}),
"[project]/src/middleware.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_esm__({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/jwt/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
;
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    // Get the token from the request
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getToken"])({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    });
    // console.log("token:", token);
    /*
  token: {
    sub: '67484f6092c08503ebcce706',
    _id: '67484f6092c08503ebcce706',
    username: 'username1',
    role: 'USER',
    iat: 1732792278,
    exp: 1735384278,
    jti: '97e83883-cfce-4df3-af30-865eb3f6b2fb'
  }
  */ // If there's no token and it's a protected route, redirect to sign-in
    if (!token && isProtectedRoute(pathname)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/auth", request.url));
    }
    // If there's a token and user is trying to access sign-in or sign-up, redirect to dashboard
    if (token && pathname === "/auth") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dashboard", request.url));
    }
    // Check for role-based access for protected routes
    if (token && !hasAccess(token, pathname)) {
        // If the token doesn't have the required role, check if there's an updated role in the session
        const updatedToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getToken"])({
            req: request,
            secret: process.env.NEXTAUTH_SECRET,
            raw: true
        });
        if (updatedToken && hasAccess(updatedToken, pathname)) {
            // If the updated token has the required role, allow access
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        // Redirect to access denied page
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/access-denied", request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
// Check if the route is protected
function isProtectedRoute(pathname) {
    const protectedRoutes = [
        "/dashboard",
        "/admin",
        "/admindashboard"
    ];
    return protectedRoutes.some((route)=>pathname.startsWith(route));
}
// Check if the user has access
function hasAccess(token, pathname) {
    const roleAccess = {
        "/admin": [
            "admin"
        ],
        "/admindashboard": [
            "admin"
        ],
        "/dashboard": [
            "user",
            "admin"
        ]
    };
    const userRole = token.role || "user";
    const requiredRoles = Object.entries(roleAccess).find(([route])=>pathname.startsWith(route))?.[1];
    return requiredRoles ? requiredRoles.includes(userRole) : true;
}
const config = {
    matcher: [
        "/dashboard/:path*",
        "/admin/:path*",
        "/auth/:path*",
        "/api/auth/:path*",
        "/api/admin/:path*",
        "/api/content/:path*",
        "/api/brain/create",
        "/admindashboard/:path*"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d7df46._.js.map