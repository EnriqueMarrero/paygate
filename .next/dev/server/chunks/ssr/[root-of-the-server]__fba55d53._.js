module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/DAVID/paygate/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-primary/20 py-3" : "bg-transparent py-6"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-6 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 bg-primary flex items-center justify-center font-mono font-black text-black text-[10px] industrial-border",
                                        children: "V"
                                    }, void 0, false, {
                                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                        lineNumber: 26,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[10px] tracking-[0.4em] font-black text-white uppercase group-hover:text-primary transition-colors",
                                        children: "VELOCITY_SYS"
                                    }, void 0, false, {
                                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                        lineNumber: 29,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-3 border-l border-white/10 pl-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-mono text-neutral-500 uppercase tracking-widest",
                                        children: "Network_Online"
                                    }, void 0, false, {
                                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                        lineNumber: 35,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/docs",
                                className: "text-[10px] font-mono text-neutral-400 hover:text-primary uppercase tracking-widest transition-colors flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary/40",
                                        children: "01_"
                                    }, void 0, false, {
                                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, this),
                                    " System_Docs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-px bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-neutral-500 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-white",
                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                            lineNumber: 56,
                            columnNumber: 39
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                            lineNumber: 56,
                            columnNumber: 47
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 top-[60px] bg-black z-40 p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/docs",
                        className: "text-xl font-mono text-white uppercase tracking-widest",
                        onClick: ()=>setMobileMenuOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "01"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this),
                            " Docs_"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto flex gap-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                            className: "text-primary"
                        }, void 0, false, {
                            fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                            lineNumber: 67,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
                lineNumber: 62,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DAVID/paygate/src/components/Navbar.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}),
"[project]/DAVID/paygate/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/DAVID/paygate/src/components/VelocityVault.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VelocityVault",
    ()=>VelocityVault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function VelocityVault() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("SYSTEM_IDLE");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unlocked, setUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loading) {
            const sequence = [
                "SCANNING_LOCAL_BUFFER...",
                "INJECTING_SKEW_CORRECTION...",
                "SYNC_ESTABLISHED :: PORT_443",
                "K_EXCHANGE_INITIATED...",
                "LATENCY_CHECK :: 42ms",
                "VERIFYING_HANDSHAKE_HASH...",
                "PROTOCOL_FINALIZED"
            ];
            let i = 0;
            const interval = setInterval(()=>{
                if (i < sequence.length) {
                    setLogs((prev)=>[
                            ...prev,
                            sequence[i]
                        ]);
                    setStatus(sequence[i]);
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(()=>{
                        setUnlocked(true);
                        setLoading(false);
                    }, 800);
                }
            }, 600);
            return ()=>clearInterval(interval);
        }
    }, [
        loading
    ]);
    const startSync = ()=>{
        setLoading(true);
        setLogs([]);
    };
    if (unlocked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "industrial-border bg-black p-8 animate-in fade-in duration-700 h-full flex flex-col justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-2 border-primary flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(0,240,255,0.2)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-8 h-8 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                            lineNumber: 54,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white uppercase tracking-tighter",
                                children: "Sync_Complete"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 57,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-mono text-primary uppercase tracking-widest",
                                children: "Access_Layer_Stabilized"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-primary/5 border border-primary/20 p-6 rounded-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "text-[10px] text-left text-primary/80 font-mono leading-relaxed",
                            children: `// HANDSHAKE_FINAL
{
  status: "verified",
  session_id: "VX_${Math.random().toString(36).substring(7).toUpperCase()}",
  throughput: "unlimited",
  latency: "sub-1ms"
}`
                        }, void 0, false, {
                            fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setUnlocked(false),
                        className: "text-[9px] font-mono text-neutral-500 uppercase hover:text-white transition-colors",
                        children: "[ RESET_LINK ]"
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative industrial-border bg-black overflow-hidden h-full min-h-[450px] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs font-bold font-mono tracking-[0.3em] uppercase text-white/40",
                                    children: "Core::Synchronizer"
                                }, void 0, false, {
                                    fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full", loading ? "bg-primary animate-ping" : "bg-white/10")
                                        }, void 0, false, {
                                            fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                            lineNumber: 92,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-mono font-bold text-white uppercase tracking-widest",
                                            children: loading ? "LINK_NEGOTIATION" : "STANDBY"
                                        }, void 0, false, {
                                            fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                            lineNumber: 93,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                            className: "w-4 h-4 text-neutral-800"
                        }, void 0, false, {
                            fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-6 flex flex-col justify-center items-center text-center space-y-8",
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full space-y-3 font-mono",
                        children: logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] text-primary/60 uppercase tracking-tighter animate-in slide-in-from-left duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "opacity-30 mr-2 text-[7px]",
                                        children: `>>`
                                    }, void 0, false, {
                                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                        lineNumber: 108,
                                        columnNumber: 33
                                    }, this),
                                    " ",
                                    log
                                ]
                            }, i, true, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 107,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] md:text-xs font-mono text-neutral-500 leading-relaxed uppercase tracking-tight max-w-[280px]",
                                children: "Protocol link required for secure dashboard integration. Establish a sub-second sync to bridge the SVM access layer."
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                        lineNumber: 113,
                        columnNumber: 21
                    }, this),
                    !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: startSync,
                        className: "group relative w-full max-w-xs overflow-hidden bg-primary px-8 py-4 text-black transition-all hover:bg-white active:translate-y-px font-black text-[10px] uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(0,240,255,0.1)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                    lineNumber: 128,
                                    columnNumber: 29
                                }, this),
                                "Initialize_Handshake_0.1"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                            lineNumber: 127,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                        lineNumber: 123,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-1 h-1 rounded-full", loading ? "bg-primary animate-pulse" : "bg-neutral-800")
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono text-neutral-500 uppercase tracking-widest",
                                children: status
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                className: "w-3 h-3 text-neutral-800"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono text-neutral-700 uppercase",
                                children: "SYS_SECURE"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DAVID/paygate/src/components/VelocityVault.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
}),
"[project]/DAVID/paygate/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "mt-32 py-8 border-t border-white/5 bg-black text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 text-[9px] font-mono text-neutral-600 uppercase tracking-widest",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "© VELOCITY_PROTOCOL // 2025"
                        }, void 0, false, {
                            fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
                            lineNumber: 12,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-2 w-px bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "SOLANA_MAINNET_READY"
                        }, void 0, false, {
                            fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
                            lineNumber: 14,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1.5 h-1.5 rounded-full bg-primary"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono text-primary uppercase tracking-widest",
                                children: "System_Nominal"
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
                                lineNumber: 20,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/DAVID/paygate/src/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/DAVID/paygate/src/components/ContractAddress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractAddress",
    ()=>ContractAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/DAVID/paygate/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
"use client";
;
;
;
function ContractAddress() {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const CA = "DectFg9dVy4EjVcYvqPXRJ3EHK6E74YDZKDZMfc8pump";
    const handleCopy = ()=>{
        navigator.clipboard.writeText(CA);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-[8px] font-mono text-neutral-600 uppercase tracking-[0.2em]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Asset_Type :: SPL_Token"
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-primary/40",
                        children: "Status :: Verified"
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCopy,
                className: "group relative flex items-center justify-between gap-4 p-3 bg-black border border-white/5 hover:border-primary/30 transition-all rounded-sm industrial-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-primary/10 flex items-center justify-center industrial-border border-primary/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-black text-primary",
                                    children: "$V"
                                }, void 0, false, {
                                    fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[8px] font-mono text-neutral-600 uppercase tracking-widest",
                                        children: "Protocol_Asset"
                                    }, void 0, false, {
                                        fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                                        lineNumber: 32,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-mono font-bold text-white tracking-tighter",
                                        children: [
                                            CA.slice(0, 8),
                                            "...",
                                            CA.slice(-8)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 pl-4 border-l border-white/5",
                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-3 h-3 text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[7px] font-mono text-emerald-400 uppercase tracking-tighter",
                                    children: "Copied"
                                }, void 0, false, {
                                    fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                            lineNumber: 41,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-3 h-3 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$DAVID$2f$paygate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[7px] font-mono text-white uppercase tracking-tighter",
                                    children: "Copy_ID"
                                }, void 0, false, {
                                    fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                                    lineNumber: 48,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/DAVID/paygate/src/components/ContractAddress.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fba55d53._.js.map