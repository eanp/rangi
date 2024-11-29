// @bun
var hasAnyProps = function(obj) {
  for (let key in obj)
    return true;
  return false;
};
var mergeDefaultProps = function(props, defaultProps) {
  var result = __create(defaultProps, __descs(props));
  for (let key in defaultProps) {
    if (result[key] !== undefined)
      continue;
    result[key] = defaultProps[key];
  }
  return result;
};
var __create = Object.create;
var __descs = Object.getOwnPropertyDescriptors;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __merge = (props, defaultProps) => {
  return !hasAnyProps(defaultProps) ? props : !hasAnyProps(props) ? defaultProps : mergeDefaultProps(props, defaultProps);
};
var $$typeof = Symbol.for("react.element");

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS((exports, module) => {
  var yo = function(e) {
    return typeof e == "function" ? e : (t) => t.$extends(e);
  };
  var bo = function(e) {
    return e;
  };
  var Eo = function(...e) {
    return (t) => t;
  };
  var M = function(e, t) {
    let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
    return function(o) {
      return !To.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
    };
  };
  var Ru = function(e) {
    let t = { color: Ro[Tu++ % Ro.length], enabled: Jt.enabled(e), namespace: e, log: Jt.log, extend: () => {
    } }, r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (n.length !== 0 && Qt.push([o, ...n]), Qt.length > vu && Qt.shift(), Jt.enabled(o) || i) {
        let l = n.map((c) => typeof c == "string" ? c : Cu(c)), u = `+${Date.now() - Co}ms`;
        Co = Date.now(), globalThis.DEBUG_COLORS ? a(Mr[s](H(o)), ...l, Mr[s](u)) : a(o, ...l, u);
      }
    };
    return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
  };
  var Cu = function(e, t = 2) {
    let r = new Set;
    return JSON.stringify(e, (n, i) => {
      if (typeof i == "object" && i !== null) {
        if (r.has(i))
          return "[Circular *]";
        r.add(i);
      } else if (typeof i == "bigint")
        return i.toString();
      return i;
    }, t);
  };
  var So = function(e = 7500) {
    let t = Qt.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
    return t.length < e ? t : t.slice(-e);
  };
  var Ao = function() {
    Qt.length = 0;
  };
  var Qn = function() {
    let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
    if (!(e && Io.default.existsSync(e)) && process.arch === "ia32")
      throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
  };
  var qr = function(e, t) {
    let r = t === "url";
    return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${$r}.dylib.node` : `${$r}-${e}.dylib.node` : r ? `${$r}.so.node` : `${$r}-${e}.so.node`;
  };
  var pe = function(e) {
    return Object.assign(e, { optional: () => Au(e), and: (t) => j(e, t), or: (t) => Iu(e, t), select: (t) => t === undefined ? Oo(e) : Oo(t, e) });
  };
  var Au = function(e) {
    return pe({ [_e]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return t === undefined ? (Ge(e).forEach((i) => n(i, undefined)), { matched: true, selections: r }) : { matched: Ee(e, t, n), selections: r };
    }, getSelectionKeys: () => Ge(e), matcherType: "optional" }) });
  };
  var j = function(...e) {
    return pe({ [_e]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return { matched: e.every((i) => Ee(i, t, n)), selections: r };
    }, getSelectionKeys: () => Wt(e, Ge), matcherType: "and" }) });
  };
  var Iu = function(...e) {
    return pe({ [_e]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return Wt(e, Ge).forEach((i) => n(i, undefined)), { matched: e.some((i) => Ee(i, t, n)), selections: r };
    }, getSelectionKeys: () => Wt(e, Ge), matcherType: "or" }) });
  };
  var I = function(e) {
    return { [_e]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
  };
  var Oo = function(...e) {
    let t = typeof e[0] == "string" ? e[0] : undefined, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? undefined : e[0];
    return pe({ [_e]: () => ({ match: (n) => {
      let i = { [t ?? Vr]: n };
      return { matched: r === undefined || Ee(r, n, (o, s) => {
        i[o] = s;
      }), selections: i };
    }, getSelectionKeys: () => [t ?? Vr].concat(r === undefined ? [] : Ge(r)) }) });
  };
  var ye = function(e) {
    return typeof e == "number";
  };
  var je = function(e) {
    return typeof e == "string";
  };
  var Ve = function(e) {
    return typeof e == "bigint";
  };
  var mt = function(e) {
    return new Kn(e, Hn);
  };
  var Br = function(e, ...t) {
    ku.warn() && console.warn(`${Ou.warn} ${e}`, ...t);
  };
  async function Lo() {
    let e = Gr.default.platform(), t = process.arch;
    if (e === "freebsd") {
      let s = await Qr("freebsd-version");
      if (s && s.trim().length > 0) {
        let l = /^(\d+)\.?/.exec(s);
        if (l)
          return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
      }
    }
    if (e !== "linux")
      return { platform: e, arch: t };
    let r = await Lu(), n = await Uu(), i = Mu({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await $u(i);
    return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
  }
  var Fu = function(e) {
    let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = mt({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: undefined, familyDistro: undefined, originalDistro: l }));
    return te(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
  };
  async function Lu() {
    let e = "/etc/os-release";
    try {
      let t = await zn.default.readFile(e, { encoding: "utf-8" });
      return Fu(t);
    } catch {
      return { targetDistro: undefined, familyDistro: undefined, originalDistro: undefined };
    }
  }
  var Nu = function(e) {
    let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
    if (t) {
      let r = `${t[1]}.x`;
      return No(r);
    }
  };
  var ko = function(e) {
    let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
    if (t) {
      let r = `${t[1]}${t[2] ?? ".0"}.x`;
      return No(r);
    }
  };
  var No = function(e) {
    let t = (() => {
      if ($o(e))
        return e;
      let r = e.split(".");
      return r[1] = "0", r.join(".");
    })();
    if (_u.includes(t))
      return t;
  };
  var Mu = function(e) {
    return mt(e).with({ familyDistro: "musl" }, () => (te('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (te('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (te('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (te(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
  };
  async function $u(e) {
    let t = 'grep -v "libssl.so.0"', r = await Do(e);
    if (r) {
      te(`Found libssl.so file using platform-specific paths: ${r}`);
      let o = ko(r);
      if (te(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "libssl-specific-path" };
    }
    te('Falling back to "ldconfig" and other generic paths');
    let n = await Qr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
    if (n || (n = await Do(["/lib64", "/usr/lib64", "/lib"])), n) {
      te(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
      let o = ko(n);
      if (te(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "ldconfig" };
    }
    let i = await Qr("openssl version -v");
    if (i) {
      te(`Found openssl binary with version: ${i}`);
      let o = Nu(i);
      if (te(`The parsed openssl version is: ${o}`), o)
        return { libssl: o, strategy: "openssl-binary" };
    }
    return te("Couldn't find any version of libssl or OpenSSL in the system"), {};
  }
  async function Do(e) {
    for (let t of e) {
      let r = await qu(t);
      if (r)
        return r;
    }
  }
  async function qu(e) {
    try {
      return (await zn.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
    } catch (t) {
      if (t.code === "ENOENT")
        return;
      throw t;
    }
  }
  async function nt() {
    let { binaryTarget: e } = await Mo();
    return e;
  }
  var ju = function(e) {
    return e.binaryTarget !== undefined;
  };
  async function Yn() {
    let { memoized: e, ...t } = await Mo();
    return t;
  }
  async function Mo() {
    if (ju(Ur))
      return Promise.resolve({ ...Ur, memoized: true });
    let e = await Lo(), t = Vu(e);
    return Ur = { ...e, binaryTarget: t }, { ...Ur, memoized: false };
  }
  var Vu = function(e) {
    let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
    t === "linux" && !["x64", "arm64"].includes(r) && Br(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${r}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
    let l = "1.1.x";
    if (t === "linux" && i === undefined) {
      let c = mt({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
      Br(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
    }
    let u = "debian";
    if (t === "linux" && o === undefined && te(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), t === "darwin" && r === "arm64")
      return "darwin-arm64";
    if (t === "darwin")
      return "darwin";
    if (t === "win32")
      return "windows";
    if (t === "freebsd")
      return o;
    if (t === "openbsd")
      return "openbsd";
    if (t === "netbsd")
      return "netbsd";
    if (t === "linux" && o === "nixos")
      return "linux-nixos";
    if (t === "linux" && r === "arm64")
      return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
    if (t === "linux" && r === "arm")
      return `linux-arm-openssl-${i || l}`;
    if (t === "linux" && o === "musl") {
      let c = "linux-musl";
      return !i || $o(i) ? c : `${c}-openssl-${i}`;
    }
    return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && Br(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
  };
  async function Bu(e) {
    try {
      return await e();
    } catch {
      return;
    }
  }
  var Qr = function(e) {
    return Bu(async () => {
      let t = await Du(e);
      return te(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
    });
  };
  async function Uu() {
    return typeof Gr.default.machine == "function" ? Gr.default.machine() : (await Qr("uname -m"))?.trim();
  }
  var $o = function(e) {
    return e.startsWith("1.");
  };
  var ii = function(e) {
    return (0, zo.default)(e, e, { fallback: X });
  };
  var Yo = function() {
    return $.default.join(__dirname, "../");
  };
  var li = function(e) {
    if (process.platform === "win32")
      return;
    let t = ai.default.statSync(e), r = t.mode | 64 | 8 | 1;
    if (t.mode === r) {
      Zo(`Execution permissions of ${e} are fine`);
      return;
    }
    let n = r.toString(8).slice(-3);
    Zo(`Have to call chmodPlusX on ${e}`), ai.default.chmodSync(e, n);
  };
  var ui = function(e) {
    let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${ii("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Oe(e.id)}\`).`, s = mt({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
      let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
      return `${r("libssl")}. Please install ${a} and try again.`;
    }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
    return `${o}
${s}

Details: ${t.message}`;
  };
  var rs = function(e) {
    let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
      let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
      if (!a)
        return o;
      let l = a[1], u, c;
      if (l === "\\")
        c = a[0], u = c.replace("\\$", "$");
      else {
        let p = a[2];
        c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
      }
      return o.replace(c, u);
    }, n) ?? n;
    for (let n in e.parsed) {
      let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
      e.parsed[n] = r(i);
    }
    for (let n in e.parsed)
      t[n] = e.parsed[n];
    return e;
  };
  var zt = function({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
    let n = ns(e);
    r.conflictCheck !== "none" && sc(n, t, r.conflictCheck);
    let i = null;
    return is(n?.path, t) || (i = ns(t)), !n && !i && pi("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ce(H("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
  };
  var sc = function(e, t, r) {
    let n = e?.dotenvResult.parsed, i = !is(e?.path, t);
    if (n && t && i && zr.default.existsSync(t)) {
      let o = di.default.parse(zr.default.readFileSync(t)), s = [];
      for (let a in o)
        n[a] === o[a] && s.push(a);
      if (s.length > 0) {
        let a = ht.default.relative(process.cwd(), e.path), l = ht.default.relative(process.cwd(), t);
        if (r === "error") {
          let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c) => `  ${H(c)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
          throw new Error(u);
        } else if (r === "warn") {
          let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => H(c)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
          console.warn(`${ke("warn(prisma)")} ${u}`);
        }
      }
    }
  };
  var ns = function(e) {
    if (ac(e)) {
      pi(`Environment variables loaded from ${e}`);
      let t = di.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : undefined });
      return { dotenvResult: rs(t), message: Oe(`Environment variables loaded from ${ht.default.relative(process.cwd(), e)}`), path: e };
    } else
      pi(`Environment variables not found at ${e}`);
    return null;
  };
  var is = function(e, t) {
    return e && t && ht.default.resolve(e) === ht.default.resolve(t);
  };
  var ac = function(e) {
    return !!(e && zr.default.existsSync(e));
  };
  var Yt = function(e) {
    let t = lc();
    return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : os);
  };
  var lc = function() {
    let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e === "library" ? "library" : e === "binary" ? "binary" : undefined;
  };
  var mi = function(e) {
    return Zt.default.sep === Zt.default.posix.sep ? e : e.split(Zt.default.sep).join(Zt.default.posix.sep);
  };
  var hi = function(e) {
    return String(new gi(e));
  };
  var cc = function(e) {
    let t;
    if (e.length > 0) {
      let r = e.find((n) => n.fromEnvVar !== null);
      r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
    } else
      t = undefined;
    return t;
  };
  var pc = function(e) {
    let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
    return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${dc(n)}`).join(`
`);
  };
  var dc = function(e) {
    return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
  };
  var mc = function(...e) {
    console.log(...e);
  };
  var yi = function(e, ...t) {
    ds.warn() && console.warn(`${Xt.warn} ${e}`, ...t);
  };
  var fc = function(e, ...t) {
    console.info(`${Xt.info} ${e}`, ...t);
  };
  var gc = function(e, ...t) {
    console.error(`${Xt.error} ${e}`, ...t);
  };
  var hc = function(e, ...t) {
    console.log(`${Xt.query} ${e}`, ...t);
  };
  var Yr = function(e, t) {
    if (!e)
      throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
  };
  var Fe = function(e, t) {
    throw new Error(t);
  };
  var Ei = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  var yt = function(e, t) {
    let r = {};
    for (let n of Object.keys(e))
      r[n] = t(e[n], n);
    return r;
  };
  var xi = function(e, t) {
    if (e.length === 0)
      return;
    let r = e[0];
    for (let n = 1;n < e.length; n++)
      t(r, e[n]) < 0 && (r = e[n]);
    return r;
  };
  var w = function(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  };
  var K = function(e) {
    var t, r, n, i = e.length - 1, o = "", s = e[0];
    if (i > 0) {
      for (o += s, t = 1;t < i; t++)
        n = e[t] + "", r = b - n.length, r && (o += We(r)), o += n;
      s = e[t], n = s + "", r = b - n.length, r && (o += We(r));
    } else if (s === 0)
      return "0";
    for (;s % 10 === 0; )
      s /= 10;
    return o + s;
  };
  var ie = function(e, t, r) {
    if (e !== ~~e || e < t || e > r)
      throw Error(Ke + e);
  };
  var rr = function(e, t, r, n) {
    var i, o, s, a;
    for (o = e[0];o >= 10; o /= 10)
      --t;
    return --t < 0 ? (t += b, i = 0) : (i = Math.ceil((t + 1) / b), t %= b), o = G(10, b - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 50000 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == G(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1000 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1000 | 0) == G(10, t - 3) - 1, s;
  };
  var en = function(e, t, r) {
    for (var n, i = [0], o, s = 0, a = e.length;s < a; ) {
      for (o = i.length;o--; )
        i[o] *= t;
      for (i[0] += Pi.indexOf(e.charAt(s++)), n = 0;n < i.length; n++)
        i[n] > r - 1 && (i[n + 1] === undefined && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
    }
    return i.reverse();
  };
  var vc = function(e, t) {
    var r, n, i;
    if (t.isZero())
      return t;
    n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / an(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Et(e, 1, t.times(i), new e(1));
    for (var o = r;o--; ) {
      var s = t.times(t);
      t = s.times(s).minus(s).times(8).plus(1);
    }
    return e.precision -= r, t;
  };
  var y = function(e, t, r, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor;
    e:
      if (t != null) {
        if (p = e.d, !p)
          return e;
        for (i = 1, a = p[0];a >= 10; a /= 10)
          i++;
        if (o = t - i, o < 0)
          o += b, s = t, c = p[d = 0], l = c / G(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / b), a = p.length, d >= a)
          if (n) {
            for (;a++ <= d; )
              p.push(0);
            c = l = 0, i = 1, o %= b, s = o - b + 1;
          } else
            break e;
        else {
          for (c = a = p[d], i = 1;a >= 10; a /= 10)
            i++;
          o %= b, s = o - b + i, l = s < 0 ? 0 : c / G(10, i - s - 1) % 10 | 0;
        }
        if (n = n || t < 0 || p[d + 1] !== undefined || (s < 0 ? c : c % G(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / G(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
          return p.length = 0, u ? (t -= e.e + 1, p[0] = G(10, (b - t % b) % b), e.e = -t || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = G(10, b - o), p[d] = s > 0 ? (c / G(10, i - s) % G(10, s) | 0) * a : 0), u)
          for (;; )
            if (d == 0) {
              for (o = 1, s = p[0];s >= 10; s /= 10)
                o++;
              for (s = p[0] += a, a = 1;s >= 10; s /= 10)
                a++;
              o != a && (e.e++, p[0] == ge && (p[0] = 1));
              break;
            } else {
              if (p[d] += a, p[d] != ge)
                break;
              p[d--] = 0, a = 1;
            }
        for (o = p.length;p[--o] === 0; )
          p.pop();
      }
    return x && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
  };
  var we = function(e, t, r) {
    if (!e.isFinite())
      return Is(e);
    var n, i = e.e, o = K(e.d), s = o.length;
    return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + We(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + We(-i - 1) + o, r && (n = r - s) > 0 && (o += We(n))) : i >= s ? (o += We(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + We(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += We(n))), o;
  };
  var sn = function(e, t) {
    var r = e[0];
    for (t *= b;r >= 10; r /= 10)
      t++;
    return t;
  };
  var nn = function(e, t, r) {
    if (t > Pc)
      throw x = true, r && (e.precision = r), Error(Ps);
    return y(new e(tn), t, 1, true);
  };
  var fe = function(e, t, r) {
    if (t > Ti)
      throw Error(Ps);
    return y(new e(rn), t, r, true);
  };
  var Cs = function(e) {
    var t = e.length - 1, r = t * b + 1;
    if (t = e[t], t) {
      for (;t % 10 == 0; t /= 10)
        r--;
      for (t = e[0];t >= 10; t /= 10)
        r++;
    }
    return r;
  };
  var We = function(e) {
    for (var t = "";e--; )
      t += "0";
    return t;
  };
  var Ss = function(e, t, r, n) {
    var i, o = new e(1), s = Math.ceil(n / b + 4);
    for (x = false;; ) {
      if (r % 2 && (o = o.times(t), Es(o.d, s) && (i = true)), r = ee(r / 2), r === 0) {
        r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
        break;
      }
      t = t.times(t), Es(t.d, s);
    }
    return x = true, o;
  };
  var bs = function(e) {
    return e.d[e.d.length - 1] & 1;
  };
  var As = function(e, t, r) {
    for (var n, i = new e(t[0]), o = 0;++o < t.length; )
      if (n = new e(t[o]), n.s)
        i[r](n) && (i = n);
      else {
        i = n;
        break;
      }
    return i;
  };
  var Ri = function(e, t) {
    var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, g = d.precision;
    if (!e.d || !e.d[0] || e.e > 17)
      return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for (t == null ? (x = false, l = g) : l = t, a = new d(0.03125);e.e > -2; )
      e = e.times(a), p += 5;
    for (n = Math.log(G(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l;; ) {
      if (o = y(o.times(e), l, 1), r = r.times(++c), a = s.plus(N(o, r, l, 1)), K(a.d).slice(0, l) === K(s.d).slice(0, l)) {
        for (i = p;i--; )
          s = y(s.times(s), l, 1);
        if (t == null)
          if (u < 3 && rr(s.d, l - n, f, u))
            d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
          else
            return y(s, d.precision = g, f, x = true);
        else
          return d.precision = g, s;
      }
      s = a;
    }
  };
  var He = function(e, t) {
    var r, n, i, o, s, a, l, u, c, p, d, f = 1, g = 10, h = e, O = h.d, T = h.constructor, S = T.rounding, C = T.precision;
    if (h.s < 0 || !O || !O[0] || !h.e && O[0] == 1 && O.length == 1)
      return new T(O && !O[0] ? -1 / 0 : h.s != 1 ? NaN : O ? 0 : h);
    if (t == null ? (x = false, c = C) : c = t, T.precision = c += g, r = K(O), n = r.charAt(0), Math.abs(o = h.e) < 1500000000000000) {
      for (;n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
        h = h.times(e), r = K(h.d), n = r.charAt(0), f++;
      o = h.e, n > 1 ? (h = new T("0." + r), o++) : h = new T(n + "." + r.slice(1));
    } else
      return u = nn(T, c + 2, C).times(o + ""), h = He(new T(n + "." + r.slice(1)), c - g).plus(u), T.precision = C, t == null ? y(h, C, S, x = true) : h;
    for (p = h, l = s = h = N(h.minus(1), h.plus(1), c, 1), d = y(h.times(h), c, 1), i = 3;; ) {
      if (s = y(s.times(d), c, 1), u = l.plus(N(s, new T(i), c, 1)), K(u.d).slice(0, c) === K(l.d).slice(0, c))
        if (l = l.times(2), o !== 0 && (l = l.plus(nn(T, c + 2, C).times(o + ""))), l = N(l, new T(f), c, 1), t == null)
          if (rr(l.d, c - g, S, a))
            T.precision = c += g, u = s = h = N(p.minus(1), p.plus(1), c, 1), d = y(h.times(h), c, 1), i = a = 1;
          else
            return y(l, T.precision = C, S, x = true);
        else
          return T.precision = C, l;
      l = u, i += 2;
    }
  };
  var Is = function(e) {
    return String(e.s * e.s / 0);
  };
  var Ci = function(e, t) {
    var r, n, i;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0;t.charCodeAt(n) === 48; n++)
      ;
    for (i = t.length;t.charCodeAt(i - 1) === 48; --i)
      ;
    if (t = t.slice(n, i), t) {
      if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % b, r < 0 && (n += b), n < i) {
        for (n && e.d.push(+t.slice(0, n)), i -= b;n < i; )
          e.d.push(+t.slice(n, n += b));
        t = t.slice(n), n = b - t.length;
      } else
        n -= i;
      for (;n--; )
        t += "0";
      e.d.push(+t), x && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
    } else
      e.e = 0, e.d = [0];
    return e;
  };
  var Tc = function(e, t) {
    var r, n, i, o, s, a, l, u, c;
    if (t.indexOf("_") > -1) {
      if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Rs.test(t))
        return Ci(e, t);
    } else if (t === "Infinity" || t === "NaN")
      return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (Ec.test(t))
      r = 16, t = t.toLowerCase();
    else if (bc.test(t))
      r = 2;
    else if (wc.test(t))
      r = 8;
    else
      throw Error(Ke + t);
    for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = Ss(n, new n(r), o, o * 2)), u = en(t, r, ge), c = u.length - 1, o = c;u[o] === 0; --o)
      u.pop();
    return o < 0 ? new n(e.s * 0) : (e.e = sn(u, c), e.d = u, x = false, s && (e = N(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? G(2, l) : it.pow(2, l))), x = true, e);
  };
  var Rc = function(e, t) {
    var r, n = t.d.length;
    if (n < 3)
      return t.isZero() ? t : Et(e, 2, t, t);
    r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / an(5, r)), t = Et(e, 2, t, t);
    for (var i, o = new e(5), s = new e(16), a = new e(20);r--; )
      i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
    return t;
  };
  var Et = function(e, t, r, n, i) {
    var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / b);
    for (x = false, l = r.times(r), a = new e(n);; ) {
      if (s = N(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = N(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== undefined) {
        for (o = p;s.d[o] === a.d[o] && o--; )
          ;
        if (o == -1)
          break;
      }
      o = a, a = n, n = s, s = o, u++;
    }
    return x = true, s.d.length = p + 1, s;
  };
  var an = function(e, t) {
    for (var r = e;--t; )
      r *= e;
    return r;
  };
  var Os = function(e, t) {
    var r, n = t.s < 0, i = fe(e, e.precision, 1), o = i.times(0.5);
    if (t = t.abs(), t.lte(o))
      return Ne = n ? 4 : 1, t;
    if (r = t.divToInt(i), r.isZero())
      Ne = n ? 3 : 2;
    else {
      if (t = t.minus(r.times(i)), t.lte(o))
        return Ne = bs(r) ? n ? 2 : 3 : n ? 4 : 1, t;
      Ne = bs(r) ? n ? 1 : 4 : n ? 3 : 2;
    }
    return t.minus(i).abs();
  };
  var Si = function(e, t, r, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor, g = r !== undefined;
    if (g ? (ie(r, 1, ze), n === undefined ? n = f.rounding : ie(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite())
      c = Is(e);
    else {
      for (c = we(e), s = c.indexOf("."), g ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = en(we(d), 10, i), d.e = d.d.length), p = en(c, 10, i), o = l = p.length;p[--l] == 0; )
        p.pop();
      if (!p[0])
        c = g ? "0p+0" : "0";
      else {
        if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = N(e, d, r, n, 0, i), p = e.d, o = e.e, u = xs), s = p[r], a = i / 2, u = u || p[r + 1] !== undefined, u = n < 4 ? (s !== undefined || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
          for (;++p[--r] > i - 1; )
            p[r] = 0, r || (++o, p.unshift(1));
        for (l = p.length;!p[l - 1]; --l)
          ;
        for (s = 0, c = "";s < l; s++)
          c += Pi.charAt(p[s]);
        if (g) {
          if (l > 1)
            if (t == 16 || t == 8) {
              for (s = t == 16 ? 4 : 3, --l;l % s; l++)
                c += "0";
              for (p = en(c, i, t), l = p.length;!p[l - 1]; --l)
                ;
              for (s = 1, c = "1.";s < l; s++)
                c += Pi.charAt(p[s]);
            } else
              c = c.charAt(0) + "." + c.slice(1);
          c = c + (o < 0 ? "p" : "p+") + o;
        } else if (o < 0) {
          for (;++o; )
            c = "0" + c;
          c = "0." + c;
        } else if (++o > l)
          for (o -= l;o--; )
            c += "0";
        else
          o < l && (c = c.slice(0, o) + "." + c.slice(o));
      }
      c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
    }
    return e.s < 0 ? "-" + c : c;
  };
  var Es = function(e, t) {
    if (e.length > t)
      return e.length = t, true;
  };
  var Cc = function(e) {
    return new this(e).abs();
  };
  var Sc = function(e) {
    return new this(e).acos();
  };
  var Ac = function(e) {
    return new this(e).acosh();
  };
  var Ic = function(e, t) {
    return new this(e).plus(t);
  };
  var Oc = function(e) {
    return new this(e).asin();
  };
  var kc = function(e) {
    return new this(e).asinh();
  };
  var Dc = function(e) {
    return new this(e).atan();
  };
  var _c = function(e) {
    return new this(e).atanh();
  };
  var Fc = function(e, t) {
    e = new this(e), t = new this(t);
    var r, n = this.precision, i = this.rounding, o = n + 4;
    return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = fe(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? fe(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = fe(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(N(e, t, o, 1)), t = fe(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(N(e, t, o, 1)), r;
  };
  var Lc = function(e) {
    return new this(e).cbrt();
  };
  var Nc = function(e) {
    return y(e = new this(e), e.e + 1, 2);
  };
  var Mc = function(e, t, r) {
    return new this(e).clamp(t, r);
  };
  var $c = function(e) {
    if (!e || typeof e != "object")
      throw Error(on + "Object expected");
    var t, r, n, i = e.defaults === true, o = ["precision", 1, ze, "rounding", 0, 8, "toExpNeg", -bt, 0, "toExpPos", 0, bt, "maxE", 0, bt, "minE", -bt, 0, "modulo", 0, 9];
    for (t = 0;t < o.length; t += 3)
      if (r = o[t], i && (this[r] = vi[r]), (n = e[r]) !== undefined)
        if (ee(n) === n && n >= o[t + 1] && n <= o[t + 2])
          this[r] = n;
        else
          throw Error(Ke + r + ": " + n);
    if (r = "crypto", i && (this[r] = vi[r]), (n = e[r]) !== undefined)
      if (n === true || n === false || n === 0 || n === 1)
        if (n)
          if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
            this[r] = true;
          else
            throw Error(vs);
        else
          this[r] = false;
      else
        throw Error(Ke + r + ": " + n);
    return this;
  };
  var qc = function(e) {
    return new this(e).cos();
  };
  var jc = function(e) {
    return new this(e).cosh();
  };
  var ks = function(e) {
    var t, r, n;
    function i(o) {
      var s, a, l, u = this;
      if (!(u instanceof i))
        return new i(o);
      if (u.constructor = i, ws(o)) {
        u.s = o.s, x ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
        return;
      }
      if (l = typeof o, l === "number") {
        if (o === 0) {
          u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
          return;
        }
        if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
          for (s = 0, a = o;a >= 10; a /= 10)
            s++;
          x ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
          return;
        } else if (o * 0 !== 0) {
          o || (u.s = NaN), u.e = NaN, u.d = null;
          return;
        }
        return Ci(u, o.toString());
      } else if (l !== "string")
        throw Error(Ke + o);
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Rs.test(o) ? Ci(u, o) : Tc(u, o);
    }
    if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = $c, i.clone = ks, i.isDecimal = ws, i.abs = Cc, i.acos = Sc, i.acosh = Ac, i.add = Ic, i.asin = Oc, i.asinh = kc, i.atan = Dc, i.atanh = _c, i.atan2 = Fc, i.cbrt = Lc, i.ceil = Nc, i.clamp = Mc, i.cos = qc, i.cosh = jc, i.div = Vc, i.exp = Bc, i.floor = Uc, i.hypot = Gc, i.ln = Qc, i.log = Jc, i.log10 = Hc, i.log2 = Wc, i.max = Kc, i.min = zc, i.mod = Yc, i.mul = Zc, i.pow = Xc, i.random = ep, i.round = tp, i.sign = rp, i.sin = np, i.sinh = ip, i.sqrt = op, i.sub = sp, i.sum = ap, i.tan = lp, i.tanh = up, i.trunc = cp, e === undefined && (e = {}), e && e.defaults !== true)
      for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0;t < n.length; )
        e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return i.config(e), i;
  };
  var Vc = function(e, t) {
    return new this(e).div(t);
  };
  var Bc = function(e) {
    return new this(e).exp();
  };
  var Uc = function(e) {
    return y(e = new this(e), e.e + 1, 3);
  };
  var Gc = function() {
    var e, t, r = new this(0);
    for (x = false, e = 0;e < arguments.length; )
      if (t = new this(arguments[e++]), t.d)
        r.d && (r = r.plus(t.times(t)));
      else {
        if (t.s)
          return x = true, new this(1 / 0);
        r = t;
      }
    return x = true, r.sqrt();
  };
  var ws = function(e) {
    return e instanceof it || e && e.toStringTag === Ts || false;
  };
  var Qc = function(e) {
    return new this(e).ln();
  };
  var Jc = function(e, t) {
    return new this(e).log(t);
  };
  var Wc = function(e) {
    return new this(e).log(2);
  };
  var Hc = function(e) {
    return new this(e).log(10);
  };
  var Kc = function() {
    return As(this, arguments, "lt");
  };
  var zc = function() {
    return As(this, arguments, "gt");
  };
  var Yc = function(e, t) {
    return new this(e).mod(t);
  };
  var Zc = function(e, t) {
    return new this(e).mul(t);
  };
  var Xc = function(e, t) {
    return new this(e).pow(t);
  };
  var ep = function(e) {
    var t, r, n, i, o = 0, s = new this(1), a = [];
    if (e === undefined ? e = this.precision : ie(e, 1, ze), n = Math.ceil(e / b), this.crypto)
      if (crypto.getRandomValues)
        for (t = crypto.getRandomValues(new Uint32Array(n));o < n; )
          i = t[o], i >= 4290000000 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4);o < n; )
          i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 2140000000 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else
        throw Error(vs);
    else
      for (;o < n; )
        a[o++] = Math.random() * 1e7 | 0;
    for (n = a[--o], e %= b, n && e && (i = G(10, b - e), a[o] = (n / i | 0) * i);a[o] === 0; o--)
      a.pop();
    if (o < 0)
      r = 0, a = [0];
    else {
      for (r = -1;a[0] === 0; r -= b)
        a.shift();
      for (n = 1, i = a[0];i >= 10; i /= 10)
        n++;
      n < b && (r -= b - n);
    }
    return s.e = r, s.d = a, s;
  };
  var tp = function(e) {
    return y(e = new this(e), e.e + 1, this.rounding);
  };
  var rp = function(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
  };
  var np = function(e) {
    return new this(e).sin();
  };
  var ip = function(e) {
    return new this(e).sinh();
  };
  var op = function(e) {
    return new this(e).sqrt();
  };
  var sp = function(e, t) {
    return new this(e).sub(t);
  };
  var ap = function() {
    var e = 0, t = arguments, r = new this(t[e]);
    for (x = false;r.s && ++e < t.length; )
      r = r.plus(t[e]);
    return x = true, y(r, this.precision, this.rounding);
  };
  var lp = function(e) {
    return new this(e).tan();
  };
  var up = function(e) {
    return new this(e).tanh();
  };
  var cp = function(e) {
    return y(e = new this(e), e.e + 1, 1);
  };
  var wt = function(e) {
    return e === null ? e : Array.isArray(e) ? e.map(wt) : typeof e == "object" ? pp(e) ? dp(e) : yt(e, wt) : e;
  };
  var pp = function(e) {
    return e !== null && typeof e == "object" && typeof e.$type == "string";
  };
  var dp = function({ $type: e, value: t }) {
    switch (e) {
      case "BigInt":
        return BigInt(t);
      case "Bytes":
        return Buffer.from(t, "base64");
      case "DateTime":
        return new Date(t);
      case "Decimal":
        return new xe(t);
      case "Json":
        return JSON.parse(t);
      default:
        Fe(t, "Unknown tagged value");
    }
  };
  var xt = function(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  };
  var Pt = function(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  };
  var ln = function(e) {
    return e.toString() !== "Invalid Date";
  };
  var vt = function(e) {
    return it.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
  };
  var he = function(e, t, r, n, i) {
    this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
  };
  var gp = function(e) {
    return Ds[e] || mp;
  };
  var _s = function(e) {
    return hp(e, P.languages.javascript);
  };
  var hp = function(e, t) {
    return P.tokenize(e, t).map((n) => he.stringify(n)).join("");
  };
  var Ls = function(e) {
    return (0, Fs.default)(e);
  };
  var Ep = function({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
    return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
  };
  var wp = function({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
    let s = Ep({ message: t, originalMethod: r, isPanic: n, callArguments: i });
    if (!e || typeof window < "u" || true)
      return s;
    let a = e.getLocation();
    if (!a || !a.lineNumber || !a.columnNumber)
      return s;
    let l = Math.max(1, a.lineNumber - 3), u = cn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
    if (u && c) {
      let p = Pp(c), d = xp(c);
      if (!d)
        return s;
      s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
      let f = String(u.lastLineNumber).length;
      if (s.contextLines = u.mapLines((g, h) => o.gray(String(h).padStart(f)) + " " + g).mapLines((g) => o.dim(g)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
        let g = p + f + 1;
        g += 2, s.callArguments = (0, Ms.default)(i, g).slice(g);
      }
    }
    return s;
  };
  var xp = function(e) {
    let t = Object.keys(Je.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
    if (n) {
      let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
      return { code: e.slice(o, i), openingBraceIndex: i };
    }
    return null;
  };
  var Pp = function(e) {
    let t = 0;
    for (let r = 0;r < e.length; r++) {
      if (e.charAt(r) !== " ")
        return t;
      t++;
    }
    return t;
  };
  var vp = function({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
    let a = [""], l = t ? " in" : ":";
    if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Tp(t))), i) {
      a.push("");
      let u = [i.toString()];
      o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
    } else
      a.push(""), o && a.push(o), a.push("");
    return a.push(r), a.join(`
`);
  };
  var Tp = function(e) {
    let t = [e.fileName];
    return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
  };
  var Tt = function(e) {
    let t = e.showColors ? yp : bp, r;
    return r = wp(e, t), vp(r, t);
  };
  var Vs = function(e, t, r) {
    let n = Bs(e), i = Rp(n), o = Sp(i);
    o ? pn(o, t, r) : t.addErrorMessage(() => "Unknown error");
  };
  var Bs = function(e) {
    return e.errors.flatMap((t) => t.kind === "Union" ? Bs(t) : [t]);
  };
  var Rp = function(e) {
    let t = new Map, r = [];
    for (let n of e) {
      if (n.kind !== "InvalidArgumentType") {
        r.push(n);
        continue;
      }
      let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
      o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Cp(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
    }
    return r.push(...t.values()), r;
  };
  var Cp = function(e, t) {
    return [...new Set(e.concat(t))];
  };
  var Sp = function(e) {
    return xi(e, (t, r) => {
      let n = qs(t), i = qs(r);
      return n !== i ? n - i : js(t) - js(r);
    });
  };
  var qs = function(e) {
    let t = 0;
    return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
  };
  var js = function(e) {
    switch (e.kind) {
      case "InvalidArgumentValue":
      case "ValueTooLarge":
        return 20;
      case "InvalidArgumentType":
        return 10;
      case "RequiredArgumentMissing":
        return -10;
      default:
        return 0;
    }
  };
  var pn = function(e, t, r) {
    switch (e.kind) {
      case "MutuallyExclusiveFields":
        Ip(e, t);
        break;
      case "IncludeOnScalar":
        Op(e, t);
        break;
      case "EmptySelection":
        kp(e, t, r);
        break;
      case "UnknownSelectionField":
        Lp(e, t);
        break;
      case "InvalidSelectionValue":
        Np(e, t);
        break;
      case "UnknownArgument":
        Mp(e, t);
        break;
      case "UnknownInputField":
        $p(e, t);
        break;
      case "RequiredArgumentMissing":
        qp(e, t);
        break;
      case "InvalidArgumentType":
        jp(e, t);
        break;
      case "InvalidArgumentValue":
        Vp(e, t);
        break;
      case "ValueTooLarge":
        Bp(e, t);
        break;
      case "SomeFieldsMissing":
        Up(e, t);
        break;
      case "TooManyFieldsGiven":
        Gp(e, t);
        break;
      case "Union":
        Vs(e, t, r);
        break;
      default:
        throw new Error("not implemented: " + e.kind);
    }
  };
  var Ip = function(e, t) {
    let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
  };
  var Op = function(e, t) {
    let [r, n] = ir(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
    if (o && (o.getField(n)?.markAsError(), i))
      for (let s of i.fields)
        s.isRelation && o.addSuggestion(new ue(s.name, "true"));
    t.addErrorMessage((s) => {
      let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
      return i ? a += ` on model ${s.bold(i.name)}. ${or(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
    });
  };
  var kp = function(e, t, r) {
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
      let i = n.getField("omit")?.value.asObject();
      if (i) {
        Dp(e, t, i);
        return;
      }
      if (n.hasField("select")) {
        _p(e, t);
        return;
      }
    }
    if (r?.[xt(e.outputType.name)]) {
      Fp(e, t);
      return;
    }
    t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
  };
  var Dp = function(e, t, r) {
    r.removeAllFields();
    for (let n of e.outputType.fields)
      r.addSuggestion(new ue(n.name, "false"));
    t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
  };
  var _p = function(e, t) {
    let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
    n && (n.removeAllFields(), Ws(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${or(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
  };
  var Fp = function(e, t) {
    let r = new nr;
    for (let i of e.outputType.fields)
      i.isRelation || r.addField(i.name, "false");
    let n = new ue("omit", r).makeRequired();
    if (e.selectionPath.length === 0)
      t.arguments.addSuggestion(n);
    else {
      let [i, o] = ir(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
      if (a) {
        let l = a?.value.asObject() ?? new At;
        l.addSuggestion(n), a.value = l;
      }
    }
    t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
  };
  var Lp = function(e, t) {
    let r = Hs(e.selectionPath, t);
    if (r.parentKind !== "unknown") {
      r.field.markAsError();
      let n = r.parent;
      switch (r.parentKind) {
        case "select":
          Ws(n, e.outputType);
          break;
        case "include":
          Qp(n, e.outputType);
          break;
        case "omit":
          Jp(n, e.outputType);
          break;
      }
    }
    t.addErrorMessage((n) => {
      let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
      return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(or(n)), i.join(" ");
    });
  };
  var Np = function(e, t) {
    let r = Hs(e.selectionPath, t);
    r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
  };
  var Mp = function(e, t) {
    let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && (n.getField(r)?.markAsError(), Wp(n, e.arguments)), t.addErrorMessage((i) => Qs(i, r, e.arguments.map((o) => o.name)));
  };
  var $p = function(e, t) {
    let [r, n] = ir(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (i) {
      i.getDeepField(e.argumentPath)?.markAsError();
      let o = i.getDeepFieldValue(r)?.asObject();
      o && Ks(o, e.inputType);
    }
    t.addErrorMessage((o) => Qs(o, n, e.inputType.fields.map((s) => s.name)));
  };
  var Qs = function(e, t, r) {
    let n = [`Unknown argument \`${e.red(t)}\`.`], i = Kp(t, r);
    return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(or(e)), n.join(" ");
  };
  var qp = function(e, t) {
    let r;
    t.addErrorMessage((l) => r?.value instanceof W && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (!n)
      return;
    let [i, o] = ir(e.argumentPath), s = new nr, a = n.getDeepFieldValue(i)?.asObject();
    if (a)
      if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields)
          s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new ue(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(Js).join(" | ");
        a.addSuggestion(new ue(o, l).makeRequired());
      }
  };
  var Js = function(e) {
    return e.kind === "list" ? `${Js(e.elementType)}[]` : e.name;
  };
  var jp = function(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = gn("or", e.argument.typeNames.map((s) => i.green(s)));
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
  };
  var Vp = function(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
        let s = gn("or", e.argument.typeNames.map((a) => i.green(a)));
        o.push(` Expected ${s}.`);
      }
      return o.join("");
    });
  };
  var Bp = function(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
    if (n) {
      let s = n.getDeepField(e.argumentPath)?.value;
      s?.markAsError(), s instanceof W && (i = s.text);
    }
    t.addErrorMessage((o) => {
      let s = ["Unable to fit value"];
      return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
    });
  };
  var Up = function(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
      let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
      i && Ks(i, e.inputType);
    }
    t.addErrorMessage((i) => {
      let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${gn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(or(i)), o.join(" ");
    });
  };
  var Gp = function(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
    if (n) {
      let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
      o && (o.markAsError(), i = Object.keys(o.getFields()));
    }
    t.addErrorMessage((o) => {
      let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${gn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
    });
  };
  var Ws = function(e, t) {
    for (let r of t.fields)
      e.hasField(r.name) || e.addSuggestion(new ue(r.name, "true"));
  };
  var Qp = function(e, t) {
    for (let r of t.fields)
      r.isRelation && !e.hasField(r.name) && e.addSuggestion(new ue(r.name, "true"));
  };
  var Jp = function(e, t) {
    for (let r of t.fields)
      !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new ue(r.name, "true"));
  };
  var Wp = function(e, t) {
    for (let r of t)
      e.hasField(r.name) || e.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
  };
  var Hs = function(e, t) {
    let [r, n] = ir(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
    if (!i)
      return { parentKind: "unknown", fieldName: n };
    let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
    return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
  };
  var Ks = function(e, t) {
    if (t.kind === "object")
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
  };
  var ir = function(e) {
    let t = [...e], r = t.pop();
    if (!r)
      throw new Error("unexpected empty path");
    return [t, r];
  };
  var or = function({ green: e, enabled: t }) {
    return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
  };
  var gn = function(e, t) {
    if (t.length === 1)
      return t[0];
    let r = [...t], n = r.pop();
    return `${r.join(", ")} ${e} ${n}`;
  };
  var Kp = function(e, t) {
    let r = 1 / 0, n;
    for (let i of t) {
      let o = (0, Gs.default)(e, i);
      o > Hp || o < r && (r = o, n = i);
    }
    return n;
  };
  var zs = function(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  };
  var It = function(e) {
    return e instanceof sr;
  };
  var Oi = function(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  };
  var Ot = function(e) {
    return new ki(Zs(e));
  };
  var Zs = function(e) {
    let t = new At;
    for (let [r, n] of Object.entries(e)) {
      let i = new bn(r, Xs(n));
      t.addField(i);
    }
    return t;
  };
  var Xs = function(e) {
    if (typeof e == "string")
      return new W(JSON.stringify(e));
    if (typeof e == "number" || typeof e == "boolean")
      return new W(String(e));
    if (typeof e == "bigint")
      return new W(`${e}n`);
    if (e === null)
      return new W("null");
    if (e === undefined)
      return new W("undefined");
    if (vt(e))
      return new W(`new Prisma.Decimal("${e.toFixed()}")`);
    if (e instanceof Uint8Array)
      return Buffer.isBuffer(e) ? new W(`Buffer.alloc(${e.byteLength})`) : new W(`new Uint8Array(${e.byteLength})`);
    if (e instanceof Date) {
      let t = ln(e) ? e.toISOString() : "Invalid Date";
      return new W(`new Date("${t}")`);
    }
    return e instanceof Me ? new W(`Prisma.${e._getName()}`) : It(e) ? new W(`prisma.${zs(e.modelName)}.\$fields.${e.name}`) : Array.isArray(e) ? zp(e) : typeof e == "object" ? Zs(e) : new W(Object.prototype.toString.call(e));
  };
  var zp = function(e) {
    let t = new St;
    for (let r of e)
      t.addItem(Xs(r));
    return t;
  };
  var En = function(e, t) {
    let r = t === "pretty" ? Us : fn, n = e.renderAllMessages(r), i = new Rt(0, { colors: r }).write(e).toString();
    return { message: n, args: i };
  };
  var wn = function({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
    let a = Ot(e);
    for (let p of t)
      pn(p, a, s);
    let { message: l, args: u } = En(a, r), c = Tt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
    throw new J(c, { clientVersion: o });
  };
  var pr = function(e) {
    let t;
    return { get() {
      return t || (t = { value: e() }), t.value;
    } };
  };
  var Te = function(e) {
    return e.replace(/^./, (t) => t.toLowerCase());
  };
  var ta = function(e, t, r) {
    let n = Te(r);
    return !t.result || !(t.result.$allModels || t.result[n]) ? e : Yp({ ...e, ...ea(t.name, e, t.result.$allModels), ...ea(t.name, e, t.result[n]) });
  };
  var Yp = function(e) {
    let t = new ve, r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
    return yt(e, (n) => ({ ...n, needs: r(n.name, new Set) }));
  };
  var ea = function(e, t, r) {
    return r ? yt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Zp(t, o, i) })) : {};
  };
  var Zp = function(e, t, r) {
    let n = e?.[t]?.compute;
    return n ? (i) => r({ ...i, [t]: n(i) }) : r;
  };
  var ra = function(e, t) {
    if (!t)
      return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (e[n.name])
        for (let i of n.needs)
          r[i] = true;
    return r;
  };
  var na = function(e, t) {
    if (!t)
      return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (!e[n.name])
        for (let i of n.needs)
          delete r[i];
    return r;
  };
  var Re = function(e) {
    return e instanceof dr;
  };
  var vn = function({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = kt.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
    let p = new Di({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
    return { modelName: e, action: Xp[t], query: mr(r, p) };
  };
  var mr = function({ select: e, include: t, ...r } = {}, n) {
    let i;
    return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: aa(r, n), selection: ed(e, t, i, n) };
  };
  var ed = function(e, t, r, n) {
    return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), id(e, n)) : td(n, t, r);
  };
  var td = function(e, t, r) {
    let n = {};
    return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && rd(n, t, e), e.isPreviewFeatureOn("omitApi") && nd(n, r, e), n;
  };
  var rd = function(e, t, r) {
    for (let [n, i] of Object.entries(t)) {
      if (Re(i))
        continue;
      let o = r.nestSelection(n);
      if (_i(i, o), i === false || i === undefined) {
        e[n] = false;
        continue;
      }
      let s = r.findField(n);
      if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
        e[n] = mr(i === true ? {} : i, o);
        continue;
      }
      if (i === true) {
        e[n] = true;
        continue;
      }
      e[n] = mr(i, o);
    }
  };
  var nd = function(e, t, r) {
    let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = na(i, n);
    for (let [s, a] of Object.entries(o)) {
      if (Re(a))
        continue;
      _i(a, r.nestSelection(s));
      let l = r.findField(s);
      n?.[s] && !l || (e[s] = !a);
    }
  };
  var id = function(e, t) {
    let r = {}, n = t.getComputedFields(), i = ra(e, n);
    for (let [o, s] of Object.entries(i)) {
      if (Re(s))
        continue;
      let a = t.nestSelection(o);
      _i(s, a);
      let l = t.findField(o);
      if (!(n?.[o] && !l)) {
        if (s === false || s === undefined || Re(s)) {
          r[o] = false;
          continue;
        }
        if (s === true) {
          l?.kind === "object" ? r[o] = mr({}, a) : r[o] = true;
          continue;
        }
        r[o] = mr(s, a);
      }
    }
    return r;
  };
  var sa = function(e, t) {
    if (e === null)
      return null;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
      return e;
    if (typeof e == "bigint")
      return { $type: "BigInt", value: String(e) };
    if (Pt(e)) {
      if (ln(e))
        return { $type: "DateTime", value: e.toISOString() };
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
    }
    if (It(e))
      return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
    if (Array.isArray(e))
      return od(e, t);
    if (ArrayBuffer.isView(e))
      return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
    if (sd(e))
      return e.values;
    if (vt(e))
      return { $type: "Decimal", value: e.toFixed() };
    if (e instanceof Me) {
      if (e !== yn.instances[e._getName()])
        throw new Error("Invalid ObjectEnumValue");
      return { $type: "Enum", value: e._getName() };
    }
    if (ad(e))
      return e.toJSON();
    if (typeof e == "object")
      return aa(e, t);
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
  };
  var aa = function(e, t) {
    if (e.$type)
      return { $type: "Raw", value: e };
    let r = {};
    for (let n in e) {
      let i = e[n], o = t.nestArgument(n);
      Re(i) || (i !== undefined ? r[n] = sa(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: oa }));
    }
    return r;
  };
  var od = function(e, t) {
    let r = [];
    for (let n = 0;n < e.length; n++) {
      let i = t.nestArgument(String(n)), o = e[n];
      if (o === undefined || Re(o)) {
        let s = o === undefined ? "undefined" : "Prisma.skip";
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
      }
      r.push(sa(o, i));
    }
    return r;
  };
  var sd = function(e) {
    return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
  };
  var ad = function(e) {
    return typeof e == "object" && e !== null && typeof e.toJSON == "function";
  };
  var _i = function(e, t) {
    e === undefined && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: oa });
  };
  var la = function(e) {
    return { models: Fi(e.models), enums: Fi(e.enums), types: Fi(e.types) };
  };
  var Fi = function(e) {
    let t = {};
    for (let { name: r, ...n } of e)
      t[r] = n;
    return t;
  };
  var ua = function(e, t) {
    let r = pr(() => ld(t));
    Object.defineProperty(e, "dmmf", { get: () => r.get() });
  };
  var ld = function(e) {
    return { datamodel: { models: Li(e.models), enums: Li(e.enums), types: Li(e.types) } };
  };
  var Li = function(e) {
    return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
  };
  var ca = function(e) {
    return (...t) => new Mi(e, t);
  };
  var pa = function(e) {
    return e != null && e[Tn] === Tn;
  };
  var fr = function(e) {
    return { ok: false, error: e, map() {
      return fr(e);
    }, flatMap() {
      return fr(e);
    } };
  };
  var Ce = function(e, t) {
    return async (...r) => {
      try {
        return await t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return fr({ kind: "GenericJs", id: i });
      }
    };
  };
  var pd = function(e, t) {
    return (...r) => {
      try {
        return t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return fr({ kind: "GenericJs", id: i });
      }
    };
  };
  var da = function(e, t = ",", r = "", n = "") {
    if (e.length === 0)
      throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    return new oe([r, ...Array(e.length - 1).fill(t), n], e);
  };
  var ji = function(e) {
    return new oe([e], []);
  };
  var Vi = function(e, ...t) {
    return new oe(e, t);
  };
  var gr = function(e) {
    return { getKeys() {
      return Object.keys(e);
    }, getPropertyValue(t) {
      return e[t];
    } };
  };
  var re = function(e, t) {
    return { getKeys() {
      return [e];
    }, getPropertyValue() {
      return t();
    } };
  };
  var ot = function(e) {
    let t = new ve;
    return { getKeys() {
      return e.getKeys();
    }, getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    }, getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    } };
  };
  var Cn = function(e) {
    let t = new Set(e);
    return { getOwnPropertyDescriptor: () => Rn, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
  };
  var Se = function(e, t) {
    let r = dd(t), n = new Set, i = new Proxy(e, { get(o, s) {
      if (n.has(s))
        return o[s];
      let a = r.get(s);
      return a ? a.getPropertyValue(s) : o[s];
    }, has(o, s) {
      if (n.has(s))
        return true;
      let a = r.get(s);
      return a ? a.has?.(s) ?? true : Reflect.has(o, s);
    }, ownKeys(o) {
      let s = ga(Reflect.ownKeys(o), r), a = ga(Array.from(r.keys()), r);
      return [...new Set([...s, ...a, ...n])];
    }, set(o, s, a) {
      return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
    }, getOwnPropertyDescriptor(o, s) {
      let a = Reflect.getOwnPropertyDescriptor(o, s);
      if (a && !a.configurable)
        return a;
      let l = r.get(s);
      return l ? l.getPropertyDescriptor ? { ...Rn, ...l?.getPropertyDescriptor(s) } : Rn : a;
    }, defineProperty(o, s, a) {
      return n.add(s), Reflect.defineProperty(o, s, a);
    } });
    return i[fa] = function() {
      let o = { ...this };
      return delete o[fa], o;
    }, i;
  };
  var dd = function(e) {
    let t = new Map;
    for (let r of e) {
      let n = r.getKeys();
      for (let i of n)
        t.set(i, r);
    }
    return t;
  };
  var ga = function(e, t) {
    return e.filter((r) => t.get(r)?.has?.(r) ?? true);
  };
  var _t = function(e) {
    return { getKeys() {
      return e;
    }, has() {
      return false;
    }, getPropertyValue() {
    } };
  };
  var Ft = function(e, t) {
    return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : undefined };
  };
  var ha = function(e) {
    if (e === undefined)
      return "";
    let t = Ot(e);
    return new Rt(0, { colors: fn }).write(t).toString();
  };
  var st = function({ error: e, user_facing_error: t }, r, n) {
    return t.error_code ? new V(fd(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new B(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
  };
  var fd = function(e, t) {
    let r = e.message;
    return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === md && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
  };
  var ya = function(e) {
    var t = e.split(`
`);
    return t.reduce(function(r, n) {
      var i = yd(n) || Ed(n) || Pd(n) || Cd(n) || Td(n);
      return i && r.push(i), r;
    }, []);
  };
  var yd = function(e) {
    var t = gd.exec(e);
    if (!t)
      return null;
    var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = hd.exec(t[2]);
    return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || hr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
  };
  var Ed = function(e) {
    var t = bd.exec(e);
    return t ? { file: t[2], methodName: t[1] || hr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
  };
  var Pd = function(e) {
    var t = wd.exec(e);
    if (!t)
      return null;
    var r = t[3] && t[3].indexOf(" > eval") > -1, n = xd.exec(t[3]);
    return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || hr, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
  };
  var Td = function(e) {
    var t = vd.exec(e);
    return t ? { file: t[3], methodName: t[1] || hr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
  };
  var Cd = function(e) {
    var t = Rd.exec(e);
    return t ? { file: t[2], methodName: t[1] || hr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
  };
  var Ze = function(e) {
    return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite : new Bi : new Ui;
  };
  var Lt = function(e = {}) {
    let t = Ad(e);
    return Object.entries(t).reduce((n, [i, o]) => (ba[i] !== undefined ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
  };
  var Ad = function(e = {}) {
    return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
  };
  var Sn = function(e = {}) {
    return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
  };
  var Ea = function(e, t) {
    let r = Sn(e);
    return t({ action: "aggregate", unpacker: r, argsMapper: Lt })(e);
  };
  var Id = function(e = {}) {
    let { select: t, ...r } = e;
    return typeof t == "object" ? Lt({ ...r, _count: t }) : Lt({ ...r, _count: { _all: true } });
  };
  var Od = function(e = {}) {
    return typeof e.select == "object" ? (t) => Sn(e)(t)._count : (t) => Sn(e)(t)._count._all;
  };
  var wa = function(e, t) {
    return t({ action: "count", unpacker: Od(e), argsMapper: Id })(e);
  };
  var kd = function(e = {}) {
    let t = Lt(e);
    if (Array.isArray(t.by))
      for (let r of t.by)
        typeof r == "string" && (t.select[r] = true);
    else
      typeof t.by == "string" && (t.select[t.by] = true);
    return t;
  };
  var Dd = function(e = {}) {
    return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
      r._count = r._count._all;
    }), t);
  };
  var xa = function(e, t) {
    return t({ action: "groupBy", unpacker: Dd(e), argsMapper: kd })(e);
  };
  var Pa = function(e, t, r) {
    if (t === "aggregate")
      return (n) => Ea(n, r);
    if (t === "count")
      return (n) => wa(n, r);
    if (t === "groupBy")
      return (n) => xa(n, r);
  };
  var va = function(e, t) {
    let r = t.fields.filter((i) => !i.relationName), n = wi(r, (i) => i.name);
    return new Proxy({}, { get(i, o) {
      if (o in i || typeof o == "symbol")
        return i[o];
      let s = n[o];
      if (s)
        return new sr(e, o, s.type, s.isList, s.kind === "enum");
    }, ...Cn(Object.keys(n)) });
  };
  var _d = function(e, t) {
    return e === undefined || t === undefined ? [] : [...t, "select", e];
  };
  var Fd = function(e, t, r) {
    return t === undefined ? e ?? {} : Ra(t, r, e || true);
  };
  var Qi = function(e, t, r, n, i, o) {
    let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
    return (l) => {
      let u = Ze(e._errorFormat), c = _d(n, i), p = Fd(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = Ld(e, t);
      return new Proxy(d, { get(g, h) {
        if (!f.includes(h))
          return g[h];
        let T = [a[h].type, r, h], S = [c, p];
        return Qi(e, ...T, ...S);
      }, ...Cn([...f, ...Object.getOwnPropertyNames(d)]) });
    };
  };
  var Ld = function(e, t) {
    return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
  };
  var Ca = function(e, t, r, n) {
    return e === Je.ModelAction.findFirstOrThrow || e === Je.ModelAction.findUniqueOrThrow ? Nd(t, r, n) : n;
  };
  var Nd = function(e, t, r) {
    return async (n) => {
      if ("rejectOnNotFound" in n.args) {
        let o = Tt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
        throw new J(o, { clientVersion: t });
      }
      return await r(n).catch((o) => {
        throw o instanceof V && o.code === "P2025" ? new Le(`No ${e} found`, t) : o;
      });
    };
  };
  var Ji = function(e, t) {
    let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [qd(e, t), Vd(e, t), gr(r), re("name", () => t), re("$name", () => t), re("$parent", () => e._appliedParent)];
    return Se({}, n);
  };
  var qd = function(e, t) {
    let r = Te(t), n = Object.keys(Je.ModelAction).concat("count");
    return { getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = i, s = (l) => e._request(l);
      s = Ca(o, t, e._clientVersion, s);
      let a = (l) => (u) => {
        let c = Ze(e._errorFormat);
        return e._createPrismaPromise((p) => {
          let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
          return s({ ...d, ...l });
        });
      };
      return Md.includes(o) ? Qi(e, t, a) : jd(i) ? Pa(e, i, a) : a({});
    } };
  };
  var jd = function(e) {
    return $d.includes(e);
  };
  var Vd = function(e, t) {
    return ot(re("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return va(t, r);
    }));
  };
  var Sa = function(e) {
    return e.replace(/^./, (t) => t.toUpperCase());
  };
  var yr = function(e) {
    let t = [Bd(e), re(Wi, () => e), re("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
    return r && t.push(gr(r)), Se(e, t);
  };
  var Bd = function(e) {
    let t = Object.keys(e._runtimeDataModel.models), r = t.map(Te), n = [...new Set(t.concat(r))];
    return ot({ getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = Sa(i);
      if (e._runtimeDataModel.models[o] !== undefined)
        return Ji(e, o);
      if (e._runtimeDataModel.models[i] !== undefined)
        return Ji(e, i);
    }, getPropertyDescriptor(i) {
      if (!r.includes(i))
        return { enumerable: false };
    } });
  };
  var Aa = function(e) {
    return e[Wi] ? e[Wi] : e;
  };
  var Ia = function(e) {
    if (typeof e == "function")
      return e(this);
    if (e.client?.__AccelerateEngine) {
      let r = e.client.__AccelerateEngine;
      this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
    }
    let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: undefined }, $on: { value: undefined } });
    return yr(t);
  };
  var Oa = function({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
    let o = i.getAllComputedFields(t);
    if (!o)
      return e;
    let s = [], a = [];
    for (let l of Object.values(o)) {
      if (n) {
        if (n[l.name])
          continue;
        let u = l.needs.filter((c) => n[c]);
        u.length > 0 && a.push(_t(u));
      } else if (r) {
        if (!r[l.name])
          continue;
        let u = l.needs.filter((c) => !r[c]);
        u.length > 0 && a.push(_t(u));
      }
      Ud(e, l.needs) && s.push(Gd(l, Se(e, s)));
    }
    return s.length > 0 || a.length > 0 ? Se(e, [...s, ...a]) : e;
  };
  var Ud = function(e, t) {
    return t.every((r) => Ei(e, r));
  };
  var Gd = function(e, t) {
    return ot(re(e.name, () => e.compute(t)));
  };
  var An = function({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
    if (Array.isArray(t)) {
      for (let s = 0;s < t.length; s++)
        t[s] = An({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
      return t;
    }
    let o = e(t, i, r) ?? t;
    return r.include && ka({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && ka({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
  };
  var ka = function({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
    for (let [o, s] of Object.entries(e)) {
      if (!s || t[o] == null || Re(s))
        continue;
      let l = n.models[r].fields.find((c) => c.name === o);
      if (!l || l.kind !== "object" || !l.relationName)
        continue;
      let u = typeof s == "object" ? s : {};
      t[o] = An({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
    }
  };
  var Da = function({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
    return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : An({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => {
      let c = Te(l);
      return Oa({ result: a, modelName: c, select: u.select, omit: u.select ? undefined : { ...o?.[c], ...u.omit }, extensions: n });
    } });
  };
  var _a = function(e) {
    if (e instanceof oe)
      return Qd(e);
    if (Array.isArray(e)) {
      let r = [e[0]];
      for (let n = 1;n < e.length; n++)
        r[n] = br(e[n]);
      return r;
    }
    let t = {};
    for (let r in e)
      t[r] = br(e[r]);
    return t;
  };
  var Qd = function(e) {
    return new oe(e.strings, e.values);
  };
  var br = function(e) {
    if (typeof e != "object" || e == null || e instanceof Me || It(e))
      return e;
    if (vt(e))
      return new xe(e.toFixed());
    if (Pt(e))
      return new Date(+e);
    if (ArrayBuffer.isView(e))
      return e.slice(0);
    if (Array.isArray(e)) {
      let t = e.length, r;
      for (r = Array(t);t--; )
        r[t] = br(e[t]);
      return r;
    }
    if (typeof e == "object") {
      let t = {};
      for (let r in e)
        r === "__proto__" ? Object.defineProperty(t, r, { value: br(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = br(e[r]);
      return t;
    }
    Fe(e, "Unknown value");
  };
  var La = function(e, t, r, n = 0) {
    return e._createPrismaPromise((i) => {
      let o = t.customDataProxyFetch;
      return "transaction" in t && i !== undefined && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: _a(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = qa(o, l), a.args = s, La(e, a, r, n + 1);
      } });
    });
  };
  var Na = function(e, t) {
    let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
    if (e._extensions.isEmpty())
      return e._executeRequest(t);
    let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
    return La(e, t, s);
  };
  var Ma = function(e) {
    return (t) => {
      let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
      return n.length ? $a(r, n, 0, e) : e(r);
    };
  };
  var $a = function(e, t, r, n) {
    if (r === t.length)
      return n(e);
    let i = e.customDataProxyFetch, o = e.requests[0].transaction;
    return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : undefined } : undefined }, __internalParams: e, query(s, a = e) {
      let l = a.customDataProxyFetch;
      return a.customDataProxyFetch = qa(i, l), $a(a, t, r + 1, n);
    } });
  };
  var qa = function(e = Fa, t = Fa) {
    return (r) => e(t(r));
  };
  var Ba = function({ postinstall: e, ciName: t, clientVersion: r }) {
    if (ja("checkPlatformCaching:postinstall", e), ja("checkPlatformCaching:ciName", t), e === true && t && t in Va) {
      let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Va[t]}-build`;
      throw console.error(n), new R(n, r);
    }
  };
  var Ua = function(e, t) {
    return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
  };
  var Ga = function() {
    return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Jd ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === Wd ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
  };
  var In = function() {
    let e = Ga();
    return { id: e, prettyName: Hd[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
  };
  var On = function(e) {
    let { runtimeBinaryTarget: t } = e;
    return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Kd(e)}`;
  };
  var Kd = function(e) {
    let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
    return hi({ ...t, binaryTargets: o });
  };
  var Xe = function(e) {
    let { runtimeBinaryTarget: t } = e;
    return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
  };
  var et = function(e) {
    let { searchedLocations: t } = e;
    return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
  };
  var Qa = function(e) {
    let { runtimeBinaryTarget: t } = e;
    return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${On(e)}

${et(e)}`;
  };
  var kn = function(e) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
  };
  var Dn = function(e) {
    let { errorStack: t } = e;
    return t?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
  };
  var Ja = function(e) {
    let { queryEngineName: t } = e;
    return `${Xe(e)}${Dn(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${kn("engine-not-found-bundler-investigation")}

${et(e)}`;
  };
  var Wa = function(e) {
    let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
    return `${Xe(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${t}".
${On(e)}

${et(e)}`;
  };
  var Ha = function(e) {
    let { queryEngineName: t } = e;
    return `${Xe(e)}${Dn(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${kn("engine-not-found-tooling-investigation")}

${et(e)}`;
  };
  async function za(e, t) {
    let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath;
    if (r !== undefined)
      return r;
    let { enginePath: n, searchedLocations: i } = await Zd(e, t);
    if (zd("enginePath", n), n !== undefined && e === "binary" && li(n), n !== undefined)
      return t.prismaPath = n;
    let o = await nt(), s = t.generator?.binaryTargets ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(Yd()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: Ya(e, o), expectedLocation: Er.default.relative(process.cwd(), t.dirname), errorStack: new Error().stack }, p;
    throw a && l ? p = Wa(c) : l ? p = Qa(c) : u ? p = Ja(c) : p = Ha(c), new R(p, t.clientVersion);
  }
  async function Zd(engineType, config) {
    let binaryTarget = await nt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, Er.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, Er.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
    __filename.includes("resolveEnginePath") && searchLocations.push(Yo());
    for (let e of searchLocations) {
      let t = Ya(engineType, binaryTarget), r = Er.default.join(e, t);
      if (searchedLocations.push(e), Ka.default.existsSync(r))
        return { enginePath: r, searchedLocations };
    }
    return { enginePath: undefined, searchedLocations };
  }
  function Ya(e, t) {
    return e === "library" ? qr(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
  }
  function Za(e) {
    return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
  }
  function Xa(e) {
    return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
  }
  function tl({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
    return (0, el.default)({ user: t, repo: r, template: n, title: e, body: i });
  }
  function rl({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
    let a = So(6000 - (s?.length ?? 0)), l = Xa((0, Hi.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Hi.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Za(s) : ""}
\`\`\`
`), p = tl({ title: r, body: c });
    return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p)}

If you want the Prisma team to look into it, please open the link above \uD83D\uDE4F
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
  }
  function Nt({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
    let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
    if (o === undefined ? i = undefined : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== undefined && i === undefined)
      throw new R(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
    if (i === undefined)
      throw new R("error: Missing URL environment variable, value, or override.", n);
    return i;
  }
  function A(e, t) {
    return { ...e, isRetryable: t };
  }
  async function tm(e) {
    let t;
    try {
      t = await e.text();
    } catch {
      return { type: "EmptyError" };
    }
    try {
      let r = JSON.parse(t);
      if (typeof r == "string")
        switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
      if (typeof r == "object" && r !== null) {
        if ("is_panic" in r && "message" in r && "error_code" in r)
          return { type: "QueryEngineError", body: r };
        if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
          let n = Object.values(r)[0].reason;
          return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
        }
      }
      return { type: "UnknownJsonError", body: r };
    } catch {
      return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
    }
  }
  async function Or(e, t) {
    if (e.ok)
      return;
    let r = { clientVersion: t, response: e }, n = await tm(e);
    if (n.type === "QueryEngineError")
      throw new V(n.body.message, { code: n.body.error_code, clientVersion: t });
    if (n.type === "DataProxyError") {
      if (n.body === "InternalDataProxyError")
        throw new $t(r, "Internal Data Proxy error");
      if ("EngineNotStarted" in n.body) {
        if (n.body.EngineNotStarted.reason === "SchemaMissing")
          return new ut(r);
        if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
          throw new vr(r);
        if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
          throw new Pr(r, i, o);
        }
        if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
          throw new R(i, t, o);
        }
        if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
          let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
          throw new xr(r, i);
        }
      }
      if ("InteractiveTransactionMisrouted" in n.body) {
        let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
        throw new Rr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
      }
      if ("InvalidRequestError" in n.body)
        throw new Cr(r, n.body.InvalidRequestError.reason);
    }
    if (e.status === 401 || e.status === 403)
      throw new Ar(r, qt(Xi, n));
    if (e.status === 404)
      return new Sr(r, qt(Yi, n));
    if (e.status === 429)
      throw new Ir(r, qt(eo, n));
    if (e.status === 504)
      throw new Tr(r, qt(zi, n));
    if (e.status >= 500)
      throw new $t(r, qt(Zi, n));
    if (e.status >= 400)
      throw new wr(r, qt(Ki, n));
  }
  function qt(e, t) {
    return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
  }
  function nl(e) {
    let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
    return new Promise((i) => setTimeout(() => i(n), n));
  }
  function il(e) {
    let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
    for (let p = 0;p < o; p = p + 3)
      c = t[p] << 16 | t[p + 1] << 8 | t[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, r += $e[s] + $e[a] + $e[l] + $e[u];
    return i == 1 ? (c = t[o], s = (c & 252) >> 2, a = (c & 3) << 4, r += $e[s] + $e[a] + "==") : i == 2 && (c = t[o] << 8 | t[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, r += $e[s] + $e[a] + $e[l] + "="), r;
  }
  function ol(e) {
    if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
      throw new R("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
  }
  function rm(e) {
    return e[0] * 1000 + e[1] / 1e6;
  }
  function sl(e) {
    return new Date(rm(e));
  }
  async function ct(e, t, r = (n) => n) {
    let n = t.clientVersion;
    try {
      return typeof fetch == "function" ? await r(fetch)(e, t) : await r(to)(e, t);
    } catch (i) {
      let o = i.message ?? "Unknown error";
      throw new kr(o, { clientVersion: n });
    }
  }
  function im(e) {
    return { ...e.headers, "Content-Type": "application/json" };
  }
  function om(e) {
    return { method: e.method, headers: im(e) };
  }
  function sm(e, t) {
    return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new ro(t.headers) };
  }
  async function to(e, t = {}) {
    let r = am("https"), n = om(t), i = [], { origin: o } = new URL(e);
    return new Promise((s, a) => {
      let l = r.request(e, n, (u) => {
        let { statusCode: c, headers: { location: p } } = u;
        c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(to(`${o}${p}`, t)) : s(to(p, t))), u.on("data", (d) => i.push(d)), u.on("end", () => s(sm(i, u))), u.on("error", a);
      });
      l.on("error", a), l.end(t.body ?? "");
    });
  }
  async function um(e, t) {
    let r = al["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
    if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
      return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
      return n;
    let [i, o] = n?.split("-") ?? [];
    if (o === undefined && lm.test(i))
      return i;
    if (o !== undefined || n === "0.0.0" || n === "in-memory") {
      if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
        return "0.0.0";
      let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c = cm(`<=${a}.${l}.${u}`), p = await ct(c, { clientVersion: n });
      if (!p.ok)
        throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
      let d = await p.text();
      ll("length of body fetched from unpkg.com", d.length);
      let f;
      try {
        f = JSON.parse(d);
      } catch (g) {
        throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), g;
      }
      return f.version;
    }
    throw new lt("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
  }
  async function ul(e, t) {
    let r = await um(e, t);
    return ll("version", r), r;
  }
  function cm(e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
  }
  function pl(e) {
    if (e?.kind === "itx")
      return e.options.id;
  }
  function pm() {
    let e = globalThis;
    return e[oo] === undefined && (e[oo] = {}), e[oo];
  }
  function dm(e) {
    let t = pm();
    if (t[e] !== undefined)
      return t[e];
    let r = dl.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
    return process.platform !== "win32" && (i = so.default.constants.dlopen.RTLD_LAZY | so.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
  }
  function fm(e) {
    return e.item_type === "query" && "query" in e;
  }
  function gm(e) {
    return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
  }
  function hm(e) {
    return typeof e == "object" && e !== null && e.error_code !== undefined;
  }
  function lo(e, t) {
    return rl({ binaryTarget: e.binaryTarget, title: t, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery });
  }
  function hl({ copyEngine: e = true }, t) {
    let r;
    try {
      r = Nt({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion });
    } catch {
    }
    let n = !!(r?.startsWith("prisma://") || r?.startsWith("prisma+postgres://"));
    e && n && tr("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
    let i = Yt(t.generator), o = n || !e, s = !!t.adapter, a = i === "library", l = i === "binary";
    if (o && s || s && false) {
      let u;
      throw e ? r?.startsWith("prisma://") ? u = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : u = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : u = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new J(u.join(`
`), { clientVersion: t.clientVersion });
    }
    if (o)
      return new Dr(t);
    if (a)
      return new _r(t);
    throw new J("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
  }
  function Fn({ generator: e }) {
    return e?.previewFeatures ?? [];
  }
  function jt(e) {
    try {
      return El(e, "fast");
    } catch {
      return El(e, "slow");
    }
  }
  function El(e, t) {
    return JSON.stringify(e.map((r) => xl(r, t)));
  }
  function xl(e, t) {
    return Array.isArray(e) ? e.map((r) => xl(r, t)) : typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Pt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : xe.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : ym(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? Pl(e) : e;
  }
  function ym(e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
  }
  function Pl(e) {
    if (typeof e != "object" || e === null)
      return e;
    if (typeof e.toJSON == "function")
      return e.toJSON();
    if (Array.isArray(e))
      return e.map(wl);
    let t = {};
    for (let r of Object.keys(e))
      t[r] = wl(e[r]);
    return t;
  }
  function wl(e) {
    return typeof e == "bigint" ? e.toString() : Pl(e);
  }
  function uo(e, t, r, n) {
    if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Em.exec(t))
      throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
  function po(e) {
    return function(r) {
      let n, i = (o = e) => {
        try {
          return o === undefined || o?.kind === "itx" ? n ??= Sl(r(o)) : Sl(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
      return { then(o, s) {
        return i().then(o, s);
      }, catch(o) {
        return i().catch(o);
      }, finally(o) {
        return i().finally(o);
      }, requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      }, [Symbol.toStringTag]: "PrismaPromise" };
    };
  }
  function Sl(e) {
    return typeof e.then == "function" ? e : Promise.resolve(e);
  }
  function Il(e) {
    return e.includes("tracing") ? new mo : Al;
  }
  function Ol(e, t = () => {
  }) {
    let r, n = new Promise((i) => r = i);
    return { then(i) {
      return --e === 0 && r(t()), i?.(n);
    } };
  }
  function kl(e) {
    return typeof e == "string" ? e : e.reduce((t, r) => {
      let n = typeof r == "string" ? r : r.level;
      return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
    }, undefined);
  }
  function Nn(e) {
    return typeof e.batchRequestIdx == "number";
  }
  function Dl(e) {
    if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
      return;
    let t = [];
    return e.modelName && t.push(e.modelName), e.query.arguments && t.push(fo(e.query.arguments)), t.push(fo(e.query.selection)), t.join("");
  }
  function fo(e) {
    return `(${Object.keys(e).sort().map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${fo(n)})` : r;
    }).join(" ")})`;
  }
  function go(e) {
    return wm[e];
  }
  function pt(e, t) {
    if (t === null)
      return t;
    switch (e) {
      case "bigint":
        return BigInt(t);
      case "bytes":
        return Buffer.from(t, "base64");
      case "decimal":
        return new xe(t);
      case "datetime":
      case "date":
        return new Date(t);
      case "time":
        return new Date(`1970-01-01T${t}Z`);
      case "bigint-array":
        return t.map((r) => pt("bigint", r));
      case "bytes-array":
        return t.map((r) => pt("bytes", r));
      case "decimal-array":
        return t.map((r) => pt("decimal", r));
      case "datetime-array":
        return t.map((r) => pt("datetime", r));
      case "date-array":
        return t.map((r) => pt("date", r));
      case "time-array":
        return t.map((r) => pt("time", r));
      default:
        return t;
    }
  }
  function _l(e) {
    let t = [], r = xm(e);
    for (let n = 0;n < e.rows.length; n++) {
      let i = e.rows[n], o = { ...r };
      for (let s = 0;s < i.length; s++)
        o[e.columns[s]] = pt(e.types[s], i[s]);
      t.push(o);
    }
    return t;
  }
  function xm(e) {
    let t = {};
    for (let r = 0;r < e.columns.length; r++)
      t[e.columns[r]] = null;
    return t;
  }
  function vm(e) {
    if (e) {
      if (e.kind === "batch")
        return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
      if (e.kind === "itx")
        return { kind: "itx", options: Ll(e) };
      Fe(e, "Unknown transaction kind");
    }
  }
  function Ll(e) {
    return { id: e.id, payload: e.payload };
  }
  function Tm(e, t) {
    return Nn(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
  }
  function Rm(e) {
    return e.code === "P2009" || e.code === "P2012";
  }
  function Nl(e) {
    if (e.kind === "Union")
      return { kind: "Union", errors: e.errors.map(Nl) };
    if (Array.isArray(e.selectionPath)) {
      let [, ...t] = e.selectionPath;
      return { ...e, selectionPath: t };
    }
    return e;
  }
  function Gl(e, t) {
    for (let [r, n] of Object.entries(e)) {
      if (!ql.includes(r)) {
        let i = Vt(r, ql);
        throw new F(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
      }
      Sm[r](n, t);
    }
    if (e.datasourceUrl && e.datasources)
      throw new F('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
  }
  function Vt(e, t) {
    if (t.length === 0 || typeof e != "string")
      return "";
    let r = Am(e, t);
    return r ? ` Did you mean "${r}"?` : "";
  }
  function Am(e, t) {
    if (t.length === 0)
      return null;
    let r = t.map((i) => ({ value: i, distance: (0, Ul.default)(e, i) }));
    r.sort((i, o) => i.distance < o.distance ? -1 : 1);
    let n = r[0];
    return n.distance < 3 ? n.value : null;
  }
  function Im(e, t) {
    return Bl(t.models, e) ?? Bl(t.types, e);
  }
  function Bl(e, t) {
    let r = Object.keys(e).find((n) => xt(n) === t);
    if (r)
      return e[r];
  }
  function Om(e, t) {
    let r = Ot(e);
    for (let o of t)
      switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
    let { message: n, args: i } = En(r, "colorless");
    return `Error validating "omit" option:

${i}

${n}`;
  }
  function Ql(e) {
    return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
      let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
        o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
      }, l = (u) => {
        o || (o = true, r(u));
      };
      for (let u = 0;u < e.length; u++)
        e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!Nn(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
    });
  }
  function Yl(e) {

    class t {
      constructor(n) {
        this._originalClient = this;
        this._middlewares = new Ln;
        this._createPrismaPromise = po();
        this.$extends = Ia;
        e = n?.__internal?.configOverride?.(e) ?? e, Ba(e), n && Gl(n, e);
        let i = new Kl.EventEmitter().on("error", () => {
        });
        this._extensions = kt.empty(), this._previewFeatures = Fn(e), this._clientVersion = e.clientVersion ?? $l, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Il(this._previewFeatures);
        let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Fr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Fr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
        if (n?.adapter) {
          s = qi(n.adapter);
          let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
          if (s.provider !== l)
            throw new R(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
          if (n.datasources || n.datasourceUrl !== undefined)
            throw new R("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
        }
        let a = !s && zt(o, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
        try {
          let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
          c && L.enable("prisma:client");
          let p = Fr.default.resolve(e.dirname, e.relativePath);
          zl.default.existsSync(p) || (p = e.dirname), tt("dirname", e.dirname), tt("relativePath", e.relativePath), tt("cwd", p);
          let d = u.engine || {};
          if (l.errorFormat ? this._errorFormat = l.errorFormat : this._errorFormat = "minimal", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: Fr.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: d.binaryPath ?? undefined, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && kl(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Ua(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2000, timeout: l.transactionOptions?.timeout ?? 5000, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Nt, getBatchRequestPayload: Ft, prismaGraphQLToJSError: st, PrismaClientUnknownRequestError: B, PrismaClientInitializationError: R, PrismaClientKnownRequestError: V, debug: L("prisma:client:accelerateEngine"), engineVersion: Wl.version, clientVersion: e.clientVersion } }, tt("clientVersion", e.clientVersion), this._engine = hl(e, this._engineConfig), this._requestHandler = new $n(this, i), l.log)
            for (let f of l.log) {
              let g = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              g && this.$on(g, (h) => {
                er.log(`${er.tags[g] ?? ""}`, h.message || h.query);
              });
            }
          this._metrics = new Dt(this._engine);
        } catch (l) {
          throw l.clientVersion = this._clientVersion, l;
        }
        return this._appliedParent = yr(this);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClient";
      }
      $use(n) {
        this._middlewares.use(n);
      }
      $on(n, i) {
        n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
      }
      $connect() {
        try {
          return this._engine.start();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        }
      }
      async $disconnect() {
        try {
          await this._engine.stop();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        } finally {
          Ao();
        }
      }
      $executeRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: co({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $executeRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined) {
            let [s, a] = Jl(n, i);
            return uo(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
          }
          throw new J("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
        });
      }
      $executeRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => (uo(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
      }
      $runCommandRaw(n) {
        if (e.activeProvider !== "mongodb")
          throw new J(`The ${e.activeProvider} provider does not support \$runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
        return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: yl, callsite: Ze(this._errorFormat), transaction: i }));
      }
      async $queryRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: co({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $queryRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined)
            return this.$queryRawInternal(o, "$queryRaw", ...Jl(n, i));
          throw new J("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
        });
      }
      $queryRawTyped(n) {
        return this._createPrismaPromise((i) => {
          if (!this._hasPreviewFlag("typedSql"))
            throw new J("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
          return this.$queryRawInternal(i, "$queryRawTyped", n);
        });
      }
      $queryRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
      }
      _transactionWithArray({ promises: n, options: i }) {
        let o = _m.nextId(), s = Ol(n.length), a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
          let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
          return l.requestTransaction?.(p) ?? l;
        });
        return Ql(a);
      }
      async _transactionWithCallback({ callback: n, options: i }) {
        let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
        try {
          let u = { kind: "itx", ...a };
          l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
        } catch (u) {
          throw await this._engine.transaction("rollback", o, a).catch(() => {
          }), u;
        }
        return l;
      }
      _createItxClient(n) {
        return yr(Se(Aa(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => po(n)), re(Dm, () => n.id), _t(vl)]));
      }
      $transaction(n, i) {
        let o;
        typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = () => {
          throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
        } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
        let s = { name: "transaction", attributes: { method: "$transaction" } };
        return this._tracingHelper.runInChildSpan(s, o);
      }
      _request(n) {
        n.otelParentCtx = this._tracingHelper.getActiveContext();
        let i = n.middlewareArgsMapper ?? km, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
          let c = this._middlewares.get(++a);
          if (c)
            return this._tracingHelper.runInChildSpan(s.middleware, (O) => c(u, (T) => (O?.end(), l(T))));
          let { runInTransaction: p, args: d, ...f } = u, g = { ...n, ...f };
          d && (g.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== undefined && p === false && delete g.transaction;
          let h = await Na(this, g);
          return g.model ? Da({ result: h, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : h;
        };
        return this._tracingHelper.runInChildSpan(s.operation, () => new Hl.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
      }
      async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
        try {
          n = u ? u(n) : n;
          let g = { name: "serialize" }, h = this._tracingHelper.runInChildSpan(g, () => vn({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
          return L.enabled("prisma:client") && (tt("Prisma Client call:"), tt(`prisma.${i}(${ha(n)})`), tt("Generated request:"), tt(JSON.stringify(h, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: h, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
        } catch (g) {
          throw g.clientVersion = this._clientVersion, g;
        }
      }
      get $metrics() {
        if (!this._hasPreviewFlag("metrics"))
          throw new J("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
        return this._metrics;
      }
      _hasPreviewFlag(n) {
        return !!this._engineConfig.previewFeatures?.includes(n);
      }
      $applyPendingMigrations() {
        return this._engine.applyPendingMigrations();
      }
    }
    return t;
  }
  function Jl(e, t) {
    return Fm(e) ? [new oe(e, t), Rl] : [e, Cl];
  }
  function Fm(e) {
    return Array.isArray(e) && Array.isArray(e.raw);
  }
  function Zl(e) {
    return new Proxy(e, { get(t, r) {
      if (r in t)
        return t[r];
      if (!Lm.has(r))
        throw new TypeError(`Invalid enum value: ${String(r)}`);
    } });
  }
  function Xl(e) {
    zt(e, { conflictCheck: "warn" });
  }
  var __dirname = "/Users/eanpraha/pre25/rangi/node_modules/@prisma/client/runtime", __filename = "/Users/eanpraha/pre25/rangi/node_modules/@prisma/client/runtime/library.js";
  var eu = Object.create;
  var Nr = Object.defineProperty;
  var tu = Object.getOwnPropertyDescriptor;
  var ru = Object.getOwnPropertyNames;
  var nu = Object.getPrototypeOf;
  var iu = Object.prototype.hasOwnProperty;
  var Z = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Ut = (e, t) => {
    for (var r in t)
      Nr(e, r, { get: t[r], enumerable: true });
  };
  var ho = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let i of ru(t))
        !iu.call(e, i) && i !== r && Nr(e, i, { get: () => t[i], enumerable: !(n = tu(t, i)) || n.enumerable });
    return e;
  };
  var k = (e, t, r) => (r = e != null ? eu(nu(e)) : {}, ho(t || !e || !e.__esModule ? Nr(r, "default", { value: e, enumerable: true }) : r, e));
  var ou = (e) => ho(Nr({}, "__esModule", { value: true }), e);
  var jo = Z((pf, Zn) => {
    var v = Zn.exports;
    Zn.exports.default = v;
    var D = "\x1B[", Ht = "\x1B]", ft = "\x07", Jr = ";", qo = true;
    v.cursorTo = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      return typeof t != "number" ? D + (e + 1) + "G" : D + (t + 1) + ";" + (e + 1) + "H";
    };
    v.cursorMove = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      let r = "";
      return e < 0 ? r += D + -e + "D" : e > 0 && (r += D + e + "C"), t < 0 ? r += D + -t + "A" : t > 0 && (r += D + t + "B"), r;
    };
    v.cursorUp = (e = 1) => D + e + "A";
    v.cursorDown = (e = 1) => D + e + "B";
    v.cursorForward = (e = 1) => D + e + "C";
    v.cursorBackward = (e = 1) => D + e + "D";
    v.cursorLeft = D + "G";
    v.cursorSavePosition = qo ? "\x1B7" : D + "s";
    v.cursorRestorePosition = qo ? "\x1B8" : D + "u";
    v.cursorGetPosition = D + "6n";
    v.cursorNextLine = D + "E";
    v.cursorPrevLine = D + "F";
    v.cursorHide = D + "?25l";
    v.cursorShow = D + "?25h";
    v.eraseLines = (e) => {
      let t = "";
      for (let r = 0;r < e; r++)
        t += v.eraseLine + (r < e - 1 ? v.cursorUp() : "");
      return e && (t += v.cursorLeft), t;
    };
    v.eraseEndLine = D + "K";
    v.eraseStartLine = D + "1K";
    v.eraseLine = D + "2K";
    v.eraseDown = D + "J";
    v.eraseUp = D + "1J";
    v.eraseScreen = D + "2J";
    v.scrollUp = D + "S";
    v.scrollDown = D + "T";
    v.clearScreen = "\x1Bc";
    v.clearTerminal = process.platform === "win32" ? `${v.eraseScreen}${D}0f` : `${v.eraseScreen}${D}3J${D}H`;
    v.beep = ft;
    v.link = (e, t) => [Ht, "8", Jr, Jr, t, ft, e, Ht, "8", Jr, Jr, ft].join("");
    v.image = (e, t = {}) => {
      let r = `${Ht}1337;File=inline=1`;
      return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + ft;
    };
    v.iTerm = { setCwd: (e = process.cwd()) => `${Ht}50;CurrentDir=${e}${ft}`, annotation: (e, t = {}) => {
      let r = `${Ht}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
      if ((n || i) && !(n && i && typeof t.length < "u"))
        throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + ft;
    } };
  });
  var Xn = Z((df, Vo) => {
    Vo.exports = (e, t = process.argv) => {
      let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
      return n !== -1 && (i === -1 || n < i);
    };
  });
  var Go = Z((mf, Uo) => {
    var Gu = import.meta.require("os"), Bo = import.meta.require("tty"), de = Xn(), { env: Q } = process, Qe;
    de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Qe = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Qe = 1);
    "FORCE_COLOR" in Q && (Q.FORCE_COLOR === "true" ? Qe = 1 : Q.FORCE_COLOR === "false" ? Qe = 0 : Qe = Q.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(Q.FORCE_COLOR, 10), 3));
    function ei(e) {
      return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
    }
    function ti(e, t) {
      if (Qe === 0)
        return 0;
      if (de("color=16m") || de("color=full") || de("color=truecolor"))
        return 3;
      if (de("color=256"))
        return 2;
      if (e && !t && Qe === undefined)
        return 0;
      let r = Qe || 0;
      if (Q.TERM === "dumb")
        return r;
      if (process.platform === "win32") {
        let n = Gu.release().split(".");
        return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
      }
      if ("CI" in Q)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => (n in Q)) || Q.CI_NAME === "codeship" ? 1 : r;
      if ("TEAMCITY_VERSION" in Q)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Q.TEAMCITY_VERSION) ? 1 : 0;
      if (Q.COLORTERM === "truecolor")
        return 3;
      if ("TERM_PROGRAM" in Q) {
        let n = parseInt((Q.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (Q.TERM_PROGRAM) {
          case "iTerm.app":
            return n >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(Q.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Q.TERM) || ("COLORTERM" in Q) ? 1 : r;
    }
    function Qu(e) {
      let t = ti(e, e && e.isTTY);
      return ei(t);
    }
    Uo.exports = { supportsColor: Qu, stdout: ei(ti(true, Bo.isatty(1))), stderr: ei(ti(true, Bo.isatty(2))) };
  });
  var Wo = Z((ff, Jo) => {
    var Ju = Go(), gt = Xn();
    function Qo(e) {
      if (/^\d{3,4}$/.test(e)) {
        let r = /(\d{1,2})(\d{2})/.exec(e);
        return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
      }
      let t = (e || "").split(".").map((r) => parseInt(r, 10));
      return { major: t[0], minor: t[1], patch: t[2] };
    }
    function ri(e) {
      let { env: t } = process;
      if ("FORCE_HYPERLINK" in t)
        return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
      if (gt("no-hyperlink") || gt("no-hyperlinks") || gt("hyperlink=false") || gt("hyperlink=never"))
        return false;
      if (gt("hyperlink=true") || gt("hyperlink=always") || "NETLIFY" in t)
        return true;
      if (!Ju.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
        return false;
      if ("TERM_PROGRAM" in t) {
        let r = Qo(t.TERM_PROGRAM_VERSION);
        switch (t.TERM_PROGRAM) {
          case "iTerm.app":
            return r.major === 3 ? r.minor >= 1 : r.major > 3;
          case "WezTerm":
            return r.major >= 20200620;
          case "vscode":
            return r.major > 1 || r.major === 1 && r.minor >= 72;
        }
      }
      if ("VTE_VERSION" in t) {
        if (t.VTE_VERSION === "0.50.0")
          return false;
        let r = Qo(t.VTE_VERSION);
        return r.major > 0 || r.minor >= 50;
      }
      return false;
    }
    Jo.exports = { supportsHyperlink: ri, stdout: ri(process.stdout), stderr: ri(process.stderr) };
  });
  var Ko = Z((gf, Kt) => {
    var Wu = jo(), ni = Wo(), Ho = (e, t, { target: r = "stdout", ...n } = {}) => ni[r] ? Wu.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
    Kt.exports = (e, t, r = {}) => Ho(e, t, r);
    Kt.exports.stderr = (e, t, r = {}) => Ho(e, t, { target: "stderr", ...r });
    Kt.exports.isSupported = ni.stdout;
    Kt.exports.stderr.isSupported = ni.stderr;
  });
  var oi = Z((Rf, Hu) => {
    Hu.exports = { name: "@prisma/engines-version", version: "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "605197351a3c8bdd595af2d2a9bc3025bca48ea2" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
  });
  var si = Z((Wr) => {
    Object.defineProperty(Wr, "__esModule", { value: true });
    Wr.enginesVersion = undefined;
    Wr.enginesVersion = oi().prisma.enginesVersion;
  });
  var Xo = Z((Gf, Yu) => {
    Yu.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
  });
  var ts = Z((Qf, Kr) => {
    var Zu = import.meta.require("fs"), es = import.meta.require("path"), Xu = import.meta.require("os"), ec = Xo(), tc = ec.version, rc = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function nc(e) {
      let t = {}, r = e.toString();
      r = r.replace(/\r\n?/mg, `
`);
      let n;
      for (;(n = rc.exec(r)) != null; ) {
        let i = n[1], o = n[2] || "";
        o = o.trim();
        let s = o[0];
        o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
      }
      return t;
    }
    function ci(e) {
      console.log(`[dotenv@${tc}][DEBUG] ${e}`);
    }
    function ic(e) {
      return e[0] === "~" ? es.join(Xu.homedir(), e.slice(1)) : e;
    }
    function oc(e) {
      let t = es.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
      e && (e.path != null && (t = ic(e.path)), e.encoding != null && (r = e.encoding));
      try {
        let o = Hr.parse(Zu.readFileSync(t, { encoding: r }));
        return Object.keys(o).forEach(function(s) {
          Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && ci(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
        }), { parsed: o };
      } catch (o) {
        return n && ci(`Failed to load ${t} ${o.message}`), { error: o };
      }
    }
    var Hr = { config: oc, parse: nc };
    Kr.exports.config = Hr.config;
    Kr.exports.parse = Hr.parse;
    Kr.exports = Hr;
  });
  var as = Z((Zf, ss) => {
    ss.exports = (e) => {
      let t = e.match(/^[ \t]*(?=\S)/gm);
      return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
    };
  });
  var us = Z((Xf, ls) => {
    var uc = as();
    ls.exports = (e) => {
      let t = uc(e);
      if (t === 0)
        return e;
      let r = new RegExp(`^[ \\t]{${t}}`, "gm");
      return e.replace(r, "");
    };
  });
  var fi = Z((og, cs) => {
    cs.exports = (e, t = 1, r) => {
      if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
        throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
      if (typeof t != "number")
        throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
      if (typeof r.indent != "string")
        throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
      if (t === 0)
        return e;
      let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return e.replace(n, r.indent.repeat(t));
    };
  });
  var fs = Z((lg, ms) => {
    ms.exports = ({ onlyFirst: e = false } = {}) => {
      let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t, e ? undefined : "g");
    };
  });
  var bi = Z((ug, gs) => {
    var yc = fs();
    gs.exports = (e) => typeof e == "string" ? e.replace(yc(), "") : e;
  });
  var hs = Z((dg, Zr) => {
    Zr.exports = (e = {}) => {
      let t;
      if (e.repoUrl)
        t = e.repoUrl;
      else if (e.user && e.repo)
        t = `https://github.com/${e.user}/${e.repo}`;
      else
        throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
      let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
      for (let i of n) {
        let o = e[i];
        if (o !== undefined) {
          if (i === "labels" || i === "projects") {
            if (!Array.isArray(o))
              throw new TypeError(`The \`${i}\` option should be an array`);
            o = o.join(",");
          }
          r.searchParams.set(i, o);
        }
      }
      return r.toString();
    };
    Zr.exports.default = Zr.exports;
  });
  var Ai = Z((Th, $s) => {
    $s.exports = function() {
      function e(t, r, n, i, o) {
        return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
      }
      return function(t, r) {
        if (t === r)
          return 0;
        if (t.length > r.length) {
          var n = t;
          t = r, r = n;
        }
        for (var i = t.length, o = r.length;i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
          i--, o--;
        for (var s = 0;s < i && t.charCodeAt(s) === r.charCodeAt(s); )
          s++;
        if (i -= s, o -= s, i === 0 || o < 3)
          return o;
        var a = 0, l, u, c, p, d, f, g, h, O, T, S, C, E = [];
        for (l = 0;l < i; l++)
          E.push(l + 1), E.push(t.charCodeAt(s + l));
        for (var me = E.length - 1;a < o - 3; )
          for (O = r.charCodeAt(s + (u = a)), T = r.charCodeAt(s + (c = a + 1)), S = r.charCodeAt(s + (p = a + 2)), C = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0;l < me; l += 2)
            g = E[l], h = E[l + 1], u = e(g, u, c, O, h), c = e(u, c, p, T, h), p = e(c, p, d, S, h), f = e(p, d, f, C, h), E[l] = f, d = p, p = c, c = u, u = g;
        for (;a < o; )
          for (O = r.charCodeAt(s + (u = a)), f = ++a, l = 0;l < me; l += 2)
            g = E[l], E[l] = f = e(g, u, f, O, E[l + 1]), u = g;
        return f;
      };
    }();
  });
  var Nm = {};
  Ut(Nm, { Debug: () => Gn, Decimal: () => xe, Extensions: () => jn, MetricsClient: () => Dt, NotFoundError: () => Le, PrismaClientInitializationError: () => R, PrismaClientKnownRequestError: () => V, PrismaClientRustPanicError: () => le, PrismaClientUnknownRequestError: () => B, PrismaClientValidationError: () => J, Public: () => Vn, Sql: () => oe, defineDmmfProperty: () => ua, deserializeJsonResponse: () => wt, dmmfToRuntimeDataModel: () => la, empty: () => ma, getPrismaClient: () => Yl, getRuntime: () => In, join: () => da, makeStrictEnum: () => Zl, makeTypedQueryFactory: () => ca, objectEnumValues: () => yn, raw: () => ji, serializeJsonQuery: () => vn, skip: () => Pn, sqltag: () => Vi, warnEnvConflicts: () => Xl, warnOnce: () => tr });
  module.exports = ou(Nm);
  var jn = {};
  Ut(jn, { defineExtension: () => yo, getExtensionContext: () => bo });
  var Vn = {};
  Ut(Vn, { validator: () => Eo });
  var Mr = {};
  Ut(Mr, { $: () => To, bgBlack: () => gu, bgBlue: () => Eu, bgCyan: () => xu, bgGreen: () => yu, bgMagenta: () => wu, bgRed: () => hu, bgWhite: () => Pu, bgYellow: () => bu, black: () => pu, blue: () => rt, bold: () => H, cyan: () => De, dim: () => Oe, gray: () => Gt, green: () => qe, grey: () => fu, hidden: () => uu, inverse: () => lu, italic: () => au, magenta: () => du, red: () => ce, reset: () => su, strikethrough: () => cu, underline: () => X, white: () => mu, yellow: () => ke });
  var Bn;
  var wo;
  var xo;
  var Po;
  var vo = true;
  typeof process < "u" && ({ FORCE_COLOR: Bn, NODE_DISABLE_COLORS: wo, NO_COLOR: xo, TERM: Po } = process.env || {}, vo = process.stdout && process.stdout.isTTY);
  var To = { enabled: !wo && xo == null && Po !== "dumb" && (Bn != null && Bn !== "0" || vo) };
  var su = M(0, 0);
  var H = M(1, 22);
  var Oe = M(2, 22);
  var au = M(3, 23);
  var X = M(4, 24);
  var lu = M(7, 27);
  var uu = M(8, 28);
  var cu = M(9, 29);
  var pu = M(30, 39);
  var ce = M(31, 39);
  var qe = M(32, 39);
  var ke = M(33, 39);
  var rt = M(34, 39);
  var du = M(35, 39);
  var De = M(36, 39);
  var mu = M(37, 39);
  var Gt = M(90, 39);
  var fu = M(90, 39);
  var gu = M(40, 49);
  var hu = M(41, 49);
  var yu = M(42, 49);
  var bu = M(43, 49);
  var Eu = M(44, 49);
  var wu = M(45, 49);
  var xu = M(46, 49);
  var Pu = M(47, 49);
  var vu = 100;
  var Ro = ["green", "yellow", "blue", "magenta", "cyan", "red"];
  var Qt = [];
  var Co = Date.now();
  var Tu = 0;
  var Un = typeof process < "u" ? process.env : {};
  globalThis.DEBUG ??= Un.DEBUG ?? "";
  globalThis.DEBUG_COLORS ??= Un.DEBUG_COLORS ? Un.DEBUG_COLORS === "true" : true;
  var Jt = { enable(e) {
    typeof e == "string" && (globalThis.DEBUG = e);
  }, disable() {
    let e = globalThis.DEBUG;
    return globalThis.DEBUG = "", e;
  }, enabled(e) {
    let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
    return r && !n;
  }, log: (...e) => {
    let [t, r, ...n] = e;
    (console.warn ?? console.log)(`${t} ${r}`, ...n);
  }, formatters: {} };
  var Gn = new Proxy(Ru, { get: (e, t) => Jt[t], set: (e, t, r) => Jt[t] = r });
  var L = Gn;
  var Io = k(import.meta.require("fs"));
  var Jn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
  var $r = "libquery_engine";
  var _o = k(import.meta.require("child_process"));
  var zn = k(import.meta.require("fs/promises"));
  var Gr = k(import.meta.require("os"));
  var _e = Symbol.for("@ts-pattern/matcher");
  var Su = Symbol.for("@ts-pattern/isVariadic");
  var Vr = "@ts-pattern/anonymous-select-key";
  var Wn = (e) => !!(e && typeof e == "object");
  var jr = (e) => e && !!e[_e];
  var Ee = (e, t, r) => {
    if (jr(e)) {
      let n = e[_e](), { matched: i, selections: o } = n.match(t);
      return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
    }
    if (Wn(e)) {
      if (!Wn(t))
        return false;
      if (Array.isArray(e)) {
        if (!Array.isArray(t))
          return false;
        let n = [], i = [], o = [];
        for (let s of e.keys()) {
          let a = e[s];
          jr(a) && a[Su] ? o.push(a) : o.length ? i.push(a) : n.push(a);
        }
        if (o.length) {
          if (o.length > 1)
            throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
          if (t.length < n.length + i.length)
            return false;
          let s = t.slice(0, n.length), a = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
          return n.every((u, c) => Ee(u, s[c], r)) && i.every((u, c) => Ee(u, a[c], r)) && (o.length === 0 || Ee(o[0], l, r));
        }
        return e.length === t.length && e.every((s, a) => Ee(s, t[a], r));
      }
      return Object.keys(e).every((n) => {
        let i = e[n];
        return ((n in t) || jr(o = i) && o[_e]().matcherType === "optional") && Ee(i, t[n], r);
        var o;
      });
    }
    return Object.is(t, e);
  };
  var Ge = (e) => {
    var t, r, n;
    return Wn(e) ? jr(e) ? (t = (r = (n = e[_e]()).getSelectionKeys) == null ? undefined : r.call(n)) != null ? t : [] : Array.isArray(e) ? Wt(e, Ge) : Wt(Object.values(e), Ge) : [];
  };
  var Wt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
  var Km = pe(I(function(e) {
    return true;
  }));
  var Be = (e) => Object.assign(pe(e), { startsWith: (t) => {
    return Be(j(e, (r = t, I((n) => je(n) && n.startsWith(r)))));
    var r;
  }, endsWith: (t) => {
    return Be(j(e, (r = t, I((n) => je(n) && n.endsWith(r)))));
    var r;
  }, minLength: (t) => Be(j(e, ((r) => I((n) => je(n) && n.length >= r))(t))), length: (t) => Be(j(e, ((r) => I((n) => je(n) && n.length === r))(t))), maxLength: (t) => Be(j(e, ((r) => I((n) => je(n) && n.length <= r))(t))), includes: (t) => {
    return Be(j(e, (r = t, I((n) => je(n) && n.includes(r)))));
    var r;
  }, regex: (t) => {
    return Be(j(e, (r = t, I((n) => je(n) && !!n.match(r)))));
    var r;
  } });
  var zm = Be(I(je));
  var be = (e) => Object.assign(pe(e), { between: (t, r) => be(j(e, ((n, i) => I((o) => ye(o) && n <= o && i >= o))(t, r))), lt: (t) => be(j(e, ((r) => I((n) => ye(n) && n < r))(t))), gt: (t) => be(j(e, ((r) => I((n) => ye(n) && n > r))(t))), lte: (t) => be(j(e, ((r) => I((n) => ye(n) && n <= r))(t))), gte: (t) => be(j(e, ((r) => I((n) => ye(n) && n >= r))(t))), int: () => be(j(e, I((t) => ye(t) && Number.isInteger(t)))), finite: () => be(j(e, I((t) => ye(t) && Number.isFinite(t)))), positive: () => be(j(e, I((t) => ye(t) && t > 0))), negative: () => be(j(e, I((t) => ye(t) && t < 0))) });
  var Ym = be(I(ye));
  var Ue = (e) => Object.assign(pe(e), { between: (t, r) => Ue(j(e, ((n, i) => I((o) => Ve(o) && n <= o && i >= o))(t, r))), lt: (t) => Ue(j(e, ((r) => I((n) => Ve(n) && n < r))(t))), gt: (t) => Ue(j(e, ((r) => I((n) => Ve(n) && n > r))(t))), lte: (t) => Ue(j(e, ((r) => I((n) => Ve(n) && n <= r))(t))), gte: (t) => Ue(j(e, ((r) => I((n) => Ve(n) && n >= r))(t))), positive: () => Ue(j(e, I((t) => Ve(t) && t > 0))), negative: () => Ue(j(e, I((t) => Ve(t) && t < 0))) });
  var Zm = Ue(I(Ve));
  var Xm = pe(I(function(e) {
    return typeof e == "boolean";
  }));
  var ef = pe(I(function(e) {
    return typeof e == "symbol";
  }));
  var tf = pe(I(function(e) {
    return e == null;
  }));
  var rf = pe(I(function(e) {
    return e != null;
  }));
  var Hn = { matched: false, value: undefined };
  var Kn = class e {
    constructor(t, r) {
      this.input = undefined, this.state = undefined, this.input = t, this.state = r;
    }
    with(...t) {
      if (this.state.matched)
        return this;
      let r = t[t.length - 1], n = [t[0]], i;
      t.length === 3 && typeof t[1] == "function" ? i = t[1] : t.length > 2 && n.push(...t.slice(1, t.length - 1));
      let o = false, s = {}, a = (u, c) => {
        o = true, s[u] = c;
      }, l = !n.some((u) => Ee(u, this.input, a)) || i && !i(this.input) ? Hn : { matched: true, value: r(o ? Vr in s ? s[Vr] : s : this.input, this.input) };
      return new e(this.input, l);
    }
    when(t, r) {
      if (this.state.matched)
        return this;
      let n = !!t(this.input);
      return new e(this.input, n ? { matched: true, value: r(this.input, this.input) } : Hn);
    }
    otherwise(t) {
      return this.state.matched ? this.state.value : t(this.input);
    }
    exhaustive() {
      if (this.state.matched)
        return this.state.value;
      let t;
      try {
        t = JSON.stringify(this.input);
      } catch {
        t = this.input;
      }
      throw new Error(`Pattern matching error: no pattern matches value ${t}`);
    }
    run() {
      return this.exhaustive();
    }
    returnType() {
      return this;
    }
  };
  var Fo = import.meta.require("util");
  var Ou = { warn: ke("prisma:warn") };
  var ku = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var Du = (0, Fo.promisify)(_o.default.exec);
  var te = L("prisma:get-platform");
  var _u = ["1.0.x", "1.1.x", "3.0.x"];
  var Ur = {};
  var zo = k(Ko());
  var Ku = k(si());
  var $ = k(import.meta.require("path"));
  var zu = k(si());
  var Lf = L("prisma:engines");
  var Nf = "libquery-engine";
  $.default.join(__dirname, "../query-engine-darwin");
  $.default.join(__dirname, "../query-engine-darwin-arm64");
  $.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
  $.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
  $.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
  $.default.join(__dirname, "../query-engine-linux-static-x64");
  $.default.join(__dirname, "../query-engine-linux-static-arm64");
  $.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
  $.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
  $.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
  $.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
  $.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
  $.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
  $.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
  $.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../query_engine-windows.dll.node");
  var ai = k(import.meta.require("fs"));
  var Zo = L("chmodPlusX");
  var di = k(ts());
  var zr = k(import.meta.require("fs"));
  var ht = k(import.meta.require("path"));
  var pi = L("prisma:tryLoadEnv");
  var os = "library";
  var Je;
  ((t) => {
    let e;
    ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.createManyAndReturn = "createManyAndReturn", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
  })(Je ||= {});
  var Zt = k(import.meta.require("path"));
  var ps = k(fi());
  var gi = class {
    constructor(t) {
      this.config = t;
    }
    toString() {
      let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: cc(t.binaryTargets) }));
      return `generator ${t.name} {
${(0, ps.default)(pc(n), 2)}
}`;
    }
  };
  var er = {};
  Ut(er, { error: () => gc, info: () => fc, log: () => mc, query: () => hc, should: () => ds, tags: () => Xt, warn: () => yi });
  var Xt = { error: ce("prisma:error"), warn: ke("prisma:warn"), info: De("prisma:info"), query: rt("prisma:query") };
  var ds = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var wi = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
  var ys = new Set;
  var tr = (e, t, ...r) => {
    ys.has(e) || (ys.add(e), yi(t, ...r));
  };
  var V = class extends Error {
    constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
      super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientKnownRequestError";
    }
  };
  w(V, "PrismaClientKnownRequestError");
  var Le = class extends V {
    constructor(t, r) {
      super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
    }
  };
  w(Le, "NotFoundError");
  var R = class e extends Error {
    constructor(t, r, n) {
      super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientInitializationError";
    }
  };
  w(R, "PrismaClientInitializationError");
  var le = class extends Error {
    constructor(t, r) {
      super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientRustPanicError";
    }
  };
  w(le, "PrismaClientRustPanicError");
  var B = class extends Error {
    constructor(t, { clientVersion: r, batchRequestIdx: n }) {
      super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientUnknownRequestError";
    }
  };
  w(B, "PrismaClientUnknownRequestError");
  var J = class extends Error {
    constructor(r, { clientVersion: n }) {
      super(r);
      this.name = "PrismaClientValidationError";
      this.clientVersion = n;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientValidationError";
    }
  };
  w(J, "PrismaClientValidationError");
  var bt = 9000000000000000;
  var ze = 1e9;
  var Pi = "0123456789abcdef";
  var tn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  var rn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  var vi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -bt, maxE: bt, crypto: false };
  var xs;
  var Ne;
  var x = true;
  var on = "[DecimalError] ";
  var Ke = on + "Invalid argument: ";
  var Ps = on + "Precision limit exceeded";
  var vs = on + "crypto unavailable";
  var Ts = "[object Decimal]";
  var ee = Math.floor;
  var G = Math.pow;
  var bc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  var Ec = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  var wc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  var Rs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var ge = 1e7;
  var b = 7;
  var xc = 9007199254740991;
  var Pc = tn.length - 1;
  var Ti = rn.length - 1;
  var m = { toStringTag: Ts };
  m.absoluteValue = m.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), y(e);
  };
  m.ceil = function() {
    return y(new this.constructor(this), this.e + 1, 2);
  };
  m.clampedTo = m.clamp = function(e, t) {
    var r, n = this, i = n.constructor;
    if (e = new i(e), t = new i(t), !e.s || !t.s)
      return new i(NaN);
    if (e.gt(t))
      throw Error(Ke + t);
    return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
  };
  m.comparedTo = m.cmp = function(e) {
    var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
    if (!s || !a)
      return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
    if (!s[0] || !a[0])
      return s[0] ? l : a[0] ? -u : 0;
    if (l !== u)
      return l;
    if (o.e !== e.e)
      return o.e > e.e ^ l < 0 ? 1 : -1;
    for (n = s.length, i = a.length, t = 0, r = n < i ? n : i;t < r; ++t)
      if (s[t] !== a[t])
        return s[t] > a[t] ^ l < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
  };
  m.cosine = m.cos = function() {
    var e, t, r = this, n = r.constructor;
    return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = vc(n, Os(n, r)), n.precision = e, n.rounding = t, y(Ne == 2 || Ne == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
  };
  m.cubeRoot = m.cbrt = function() {
    var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
    if (!c.isFinite() || c.isZero())
      return new p(c);
    for (x = false, o = c.s * G(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = K(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = G(r, 1 / 3), e = ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3;; )
      if (a = n, l = a.times(a).times(a), u = l.plus(c), n = N(u.plus(c).times(a), u.plus(l), s + 2, 1), K(a.d).slice(0, s) === (r = K(n.d)).slice(0, s))
        if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
          if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
            n = a;
            break;
          }
          s += 4, i = 1;
        } else {
          (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
          break;
        }
    return x = true, y(n, e, p.rounding, t);
  };
  m.decimalPlaces = m.dp = function() {
    var e, t = this.d, r = NaN;
    if (t) {
      if (e = t.length - 1, r = (e - ee(this.e / b)) * b, e = t[e], e)
        for (;e % 10 == 0; e /= 10)
          r--;
      r < 0 && (r = 0);
    }
    return r;
  };
  m.dividedBy = m.div = function(e) {
    return N(this, new this.constructor(e));
  };
  m.dividedToIntegerBy = m.divToInt = function(e) {
    var t = this, r = t.constructor;
    return y(N(t, new r(e), 0, 1, 1), r.precision, r.rounding);
  };
  m.equals = m.eq = function(e) {
    return this.cmp(e) === 0;
  };
  m.floor = function() {
    return y(new this.constructor(this), this.e + 1, 3);
  };
  m.greaterThan = m.gt = function(e) {
    return this.cmp(e) > 0;
  };
  m.greaterThanOrEqualTo = m.gte = function(e) {
    var t = this.cmp(e);
    return t == 1 || t === 0;
  };
  m.hyperbolicCosine = m.cosh = function() {
    var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
    if (!o.isFinite())
      return new s(o.s ? 1 / 0 : NaN);
    if (o.isZero())
      return a;
    r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / an(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = Et(s, 1, o.times(t), new s(1), true);
    for (var l, u = e, c = new s(8);u--; )
      l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
    return y(o, s.precision = r, s.rounding = n, true);
  };
  m.hyperbolicSine = m.sinh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    if (!i.isFinite() || i.isZero())
      return new o(i);
    if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
      i = Et(o, 2, i, i, true);
    else {
      e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / an(5, e)), i = Et(o, 2, i, i, true);
      for (var s, a = new o(5), l = new o(16), u = new o(20);e--; )
        s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
    }
    return o.precision = t, o.rounding = r, y(i, t, r, true);
  };
  m.hyperbolicTangent = m.tanh = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, N(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
  };
  m.inverseCosine = m.acos = function() {
    var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
    return n !== -1 ? n === 0 ? t.isNeg() ? fe(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? fe(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = fe(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
  };
  m.inverseHyperbolicCosine = m.acosh = function() {
    var e, t, r = this, n = r.constructor;
    return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, x = false, r = r.times(r).minus(1).sqrt().plus(r), x = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
  };
  m.inverseHyperbolicSine = m.asinh = function() {
    var e, t, r = this, n = r.constructor;
    return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, x = false, r = r.times(r).plus(1).sqrt().plus(r), x = true, n.precision = e, n.rounding = t, r.ln());
  };
  m.inverseHyperbolicTangent = m.atanh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, t, true) : (o.precision = r = n - i.e, i = N(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
  };
  m.inverseSine = m.asin = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = fe(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
  };
  m.inverseTangent = m.atan = function() {
    var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
    if (u.isFinite()) {
      if (u.isZero())
        return new c(u);
      if (u.abs().eq(1) && p + 4 <= Ti)
        return s = fe(c, p + 4, d).times(0.25), s.s = u.s, s;
    } else {
      if (!u.s)
        return new c(NaN);
      if (p + 4 <= Ti)
        return s = fe(c, p + 4, d).times(0.5), s.s = u.s, s;
    }
    for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / b + 2 | 0), e = r;e; --e)
      u = u.div(u.times(u).plus(1).sqrt().plus(1));
    for (x = false, t = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u;e !== -1; )
      if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== undefined)
        for (e = t;s.d[e] === o.d[e] && e--; )
          ;
    return r && (s = s.times(2 << r - 1)), x = true, y(s, c.precision = p, c.rounding = d, true);
  };
  m.isFinite = function() {
    return !!this.d;
  };
  m.isInteger = m.isInt = function() {
    return !!this.d && ee(this.e / b) > this.d.length - 2;
  };
  m.isNaN = function() {
    return !this.s;
  };
  m.isNegative = m.isNeg = function() {
    return this.s < 0;
  };
  m.isPositive = m.isPos = function() {
    return this.s > 0;
  };
  m.isZero = function() {
    return !!this.d && this.d[0] === 0;
  };
  m.lessThan = m.lt = function(e) {
    return this.cmp(e) < 0;
  };
  m.lessThanOrEqualTo = m.lte = function(e) {
    return this.cmp(e) < 1;
  };
  m.logarithm = m.log = function(e) {
    var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
    if (e == null)
      e = new c(10), t = true;
    else {
      if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
        return new c(NaN);
      t = e.eq(10);
    }
    if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
      return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
    if (t)
      if (r.length > 1)
        o = true;
      else {
        for (i = r[0];i % 10 === 0; )
          i /= 10;
        o = i !== 1;
      }
    if (x = false, a = p + f, s = He(u, a), n = t ? nn(c, a + 10) : He(e, a), l = N(s, n, a, 1), rr(l.d, i = p, d))
      do
        if (a += 10, s = He(u, a), n = t ? nn(c, a + 10) : He(e, a), l = N(s, n, a, 1), !o) {
          +K(l.d).slice(i + 1, i + 15) + 1 == 100000000000000 && (l = y(l, p + 1, 0));
          break;
        }
      while (rr(l.d, i += 10, d));
    return x = true, y(l, p, d);
  };
  m.minus = m.sub = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.constructor;
    if (e = new g(e), !f.d || !e.d)
      return !f.s || !e.s ? e = new g(NaN) : f.d ? e.s = -e.s : e = new g(e.d || f.s !== e.s ? f : NaN), e;
    if (f.s != e.s)
      return e.s = -e.s, f.plus(e);
    if (u = f.d, d = e.d, a = g.precision, l = g.rounding, !u[0] || !d[0]) {
      if (d[0])
        e.s = -e.s;
      else if (u[0])
        e = new g(f);
      else
        return new g(l === 3 ? -0 : 0);
      return x ? y(e, a, l) : e;
    }
    if (r = ee(e.e / b), c = ee(f.e / b), u = u.slice(), o = c - r, o) {
      for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o;n--; )
        t.push(0);
      t.reverse();
    } else {
      for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0;n < s; n++)
        if (u[n] != d[n]) {
          p = u[n] < d[n];
          break;
        }
      o = 0;
    }
    for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s;n > 0; --n)
      u[s++] = 0;
    for (n = d.length;n > o; ) {
      if (u[--n] < d[n]) {
        for (i = n;i && u[--i] === 0; )
          u[i] = ge - 1;
        --u[i], u[n] += ge;
      }
      u[n] -= d[n];
    }
    for (;u[--s] === 0; )
      u.pop();
    for (;u[0] === 0; u.shift())
      --r;
    return u[0] ? (e.d = u, e.e = sn(u, r), x ? y(e, a, l) : e) : new g(l === 3 ? -0 : 0);
  };
  m.modulo = m.mod = function(e) {
    var t, r = this, n = r.constructor;
    return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? y(new n(r), n.precision, n.rounding) : (x = false, n.modulo == 9 ? (t = N(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = N(r, e, 0, n.modulo, 1), t = t.times(e), x = true, r.minus(t));
  };
  m.naturalExponential = m.exp = function() {
    return Ri(this);
  };
  m.naturalLogarithm = m.ln = function() {
    return He(this);
  };
  m.negated = m.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, y(e);
  };
  m.plus = m.add = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
    if (e = new d(e), !p.d || !e.d)
      return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
    if (p.s != e.s)
      return e.s = -e.s, p.minus(e);
    if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
      return c[0] || (e = new d(p)), x ? y(e, a, l) : e;
    if (o = ee(p.e / b), n = ee(e.e / b), u = u.slice(), i = o - n, i) {
      for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse();i--; )
        r.push(0);
      r.reverse();
    }
    for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0;i; )
      t = (u[--i] = u[i] + c[i] + t) / ge | 0, u[i] %= ge;
    for (t && (u.unshift(t), ++n), s = u.length;u[--s] == 0; )
      u.pop();
    return e.d = u, e.e = sn(u, n), x ? y(e, a, l) : e;
  };
  m.precision = m.sd = function(e) {
    var t, r = this;
    if (e !== undefined && e !== !!e && e !== 1 && e !== 0)
      throw Error(Ke + e);
    return r.d ? (t = Cs(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
  };
  m.round = function() {
    var e = this, t = e.constructor;
    return y(new t(e), e.e + 1, t.rounding);
  };
  m.sine = m.sin = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Rc(n, Os(n, r)), n.precision = e, n.rounding = t, y(Ne > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  m.squareRoot = m.sqrt = function() {
    var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
    if (u !== 1 || !a || !a[0])
      return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
    for (x = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = K(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3;; )
      if (o = n, n = o.plus(N(s, o, r + 2, 1)).times(0.5), K(o.d).slice(0, r) === (t = K(n.d)).slice(0, r))
        if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
          if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
            n = o;
            break;
          }
          r += 4, i = 1;
        } else {
          (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
          break;
        }
    return x = true, y(n, l, c.rounding, e);
  };
  m.tangent = m.tan = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = N(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, y(Ne == 2 || Ne == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  m.times = m.mul = function(e) {
    var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
    if (e.s *= c.s, !d || !d[0] || !f || !f[0])
      return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
    for (r = ee(c.e / b) + ee(e.e / b), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s;n--; )
      o.push(0);
    for (n = u;--n >= 0; ) {
      for (t = 0, i = l + n;i > n; )
        a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % ge | 0, t = a / ge | 0;
      o[i] = (o[i] + t) % ge | 0;
    }
    for (;!o[--s]; )
      o.pop();
    return t ? ++r : o.shift(), e.d = o, e.e = sn(o, r), x ? y(e, p.precision, p.rounding) : e;
  };
  m.toBinary = function(e, t) {
    return Si(this, 2, e, t);
  };
  m.toDecimalPlaces = m.toDP = function(e, t) {
    var r = this, n = r.constructor;
    return r = new n(r), e === undefined ? r : (ie(e, 0, ze), t === undefined ? t = n.rounding : ie(t, 0, 8), y(r, e + r.e + 1, t));
  };
  m.toExponential = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = we(n, true) : (ie(e, 0, ze), t === undefined ? t = i.rounding : ie(t, 0, 8), n = y(new i(n), e + 1, t), r = we(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  m.toFixed = function(e, t) {
    var r, n, i = this, o = i.constructor;
    return e === undefined ? r = we(i) : (ie(e, 0, ze), t === undefined ? t = o.rounding : ie(t, 0, 8), n = y(new o(i), e + i.e + 1, t), r = we(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
  };
  m.toFraction = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.d, h = f.constructor;
    if (!g)
      return new h(f);
    if (u = r = new h(1), n = l = new h(0), t = new h(n), o = t.e = Cs(g) - f.e - 1, s = o % b, t.d[0] = G(10, s < 0 ? b + s : s), e == null)
      e = o > 0 ? t : u;
    else {
      if (a = new h(e), !a.isInt() || a.lt(u))
        throw Error(Ke + a);
      e = a.gt(t) ? o > 0 ? t : u : a;
    }
    for (x = false, a = new h(K(g)), c = h.precision, h.precision = o = g.length * b * 2;p = N(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
      r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
    return i = N(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = N(u, n, o, 1).minus(f).abs().cmp(N(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], h.precision = c, x = true, d;
  };
  m.toHexadecimal = m.toHex = function(e, t) {
    return Si(this, 16, e, t);
  };
  m.toNearest = function(e, t) {
    var r = this, n = r.constructor;
    if (r = new n(r), e == null) {
      if (!r.d)
        return r;
      e = new n(1), t = n.rounding;
    } else {
      if (e = new n(e), t === undefined ? t = n.rounding : ie(t, 0, 8), !r.d)
        return e.s ? r : e;
      if (!e.d)
        return e.s && (e.s = r.s), e;
    }
    return e.d[0] ? (x = false, r = N(r, e, 0, t, 1).times(e), x = true, y(r)) : (e.s = r.s, r = e), r;
  };
  m.toNumber = function() {
    return +this;
  };
  m.toOctal = function(e, t) {
    return Si(this, 8, e, t);
  };
  m.toPower = m.pow = function(e) {
    var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0])
      return new l(G(+a, u));
    if (a = new l(a), a.eq(1))
      return a;
    if (n = l.precision, o = l.rounding, e.eq(1))
      return y(a, n, o);
    if (t = ee(e.e / b), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= xc)
      return i = Ss(l, a, r, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
    if (s = a.s, s < 0) {
      if (t < e.d.length - 1)
        return new l(NaN);
      if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
        return a.s = s, a;
    }
    return r = G(+a, u), t = r == 0 || !isFinite(r) ? ee(u * (Math.log("0." + K(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (x = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = Ri(e.times(He(a, n + r)), n), i.d && (i = y(i, n + 5, 1), rr(i.d, n, o) && (t = n + 10, i = y(Ri(e.times(He(a, t + r)), t), t + 5, 1), +K(i.d).slice(n + 1, n + 15) + 1 == 100000000000000 && (i = y(i, n + 1, 0)))), i.s = s, x = true, l.rounding = o, y(i, n, o));
  };
  m.toPrecision = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = we(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ie(e, 1, ze), t === undefined ? t = i.rounding : ie(t, 0, 8), n = y(new i(n), e, t), r = we(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  m.toSignificantDigits = m.toSD = function(e, t) {
    var r = this, n = r.constructor;
    return e === undefined ? (e = n.precision, t = n.rounding) : (ie(e, 1, ze), t === undefined ? t = n.rounding : ie(t, 0, 8)), y(new n(r), e, t);
  };
  m.toString = function() {
    var e = this, t = e.constructor, r = we(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + r : r;
  };
  m.truncated = m.trunc = function() {
    return y(new this.constructor(this), this.e + 1, 1);
  };
  m.valueOf = m.toJSON = function() {
    var e = this, t = e.constructor, r = we(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() ? "-" + r : r;
  };
  var N = function() {
    function e(n, i, o) {
      var s, a = 0, l = n.length;
      for (n = n.slice();l--; )
        s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
      return a && n.unshift(a), n;
    }
    function t(n, i, o, s) {
      var a, l;
      if (o != s)
        l = o > s ? 1 : -1;
      else
        for (a = l = 0;a < o; a++)
          if (n[a] != i[a]) {
            l = n[a] > i[a] ? 1 : -1;
            break;
          }
      return l;
    }
    function r(n, i, o, s) {
      for (var a = 0;o--; )
        n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
      for (;!n[0] && n.length > 1; )
        n.shift();
    }
    return function(n, i, o, s, a, l) {
      var u, c, p, d, f, g, h, O, T, S, C, E, me, ae, Bt, U, ne, Ie, z2, dt, Lr = n.constructor, qn = n.s == i.s ? 1 : -1, Y = n.d, _ = i.d;
      if (!Y || !Y[0] || !_ || !_[0])
        return new Lr(!n.s || !i.s || (Y ? _ && Y[0] == _[0] : !_) ? NaN : Y && Y[0] == 0 || !_ ? qn * 0 : qn / 0);
      for (l ? (f = 1, c = n.e - i.e) : (l = ge, f = b, c = ee(n.e / f) - ee(i.e / f)), z2 = _.length, ne = Y.length, T = new Lr(qn), S = T.d = [], p = 0;_[p] == (Y[p] || 0); p++)
        ;
      if (_[p] > (Y[p] || 0) && c--, o == null ? (ae = o = Lr.precision, s = Lr.rounding) : a ? ae = o + (n.e - i.e) + 1 : ae = o, ae < 0)
        S.push(1), g = true;
      else {
        if (ae = ae / f + 2 | 0, p = 0, z2 == 1) {
          for (d = 0, _ = _[0], ae++;(p < ne || d) && ae--; p++)
            Bt = d * l + (Y[p] || 0), S[p] = Bt / _ | 0, d = Bt % _ | 0;
          g = d || p < ne;
        } else {
          for (d = l / (_[0] + 1) | 0, d > 1 && (_ = e(_, d, l), Y = e(Y, d, l), z2 = _.length, ne = Y.length), U = z2, C = Y.slice(0, z2), E = C.length;E < z2; )
            C[E++] = 0;
          dt = _.slice(), dt.unshift(0), Ie = _[0], _[1] >= l / 2 && ++Ie;
          do
            d = 0, u = t(_, C, z2, E), u < 0 ? (me = C[0], z2 != E && (me = me * l + (C[1] || 0)), d = me / Ie | 0, d > 1 ? (d >= l && (d = l - 1), h = e(_, d, l), O = h.length, E = C.length, u = t(h, C, O, E), u == 1 && (d--, r(h, z2 < O ? dt : _, O, l))) : (d == 0 && (u = d = 1), h = _.slice()), O = h.length, O < E && h.unshift(0), r(C, h, E, l), u == -1 && (E = C.length, u = t(_, C, z2, E), u < 1 && (d++, r(C, z2 < E ? dt : _, E, l))), E = C.length) : u === 0 && (d++, C = [0]), S[p++] = d, u && C[0] ? C[E++] = Y[U] || 0 : (C = [Y[U]], E = 1);
          while ((U++ < ne || C[0] !== undefined) && ae--);
          g = C[0] !== undefined;
        }
        S[0] || S.shift();
      }
      if (f == 1)
        T.e = c, xs = g;
      else {
        for (p = 1, d = S[0];d >= 10; d /= 10)
          p++;
        T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, g);
      }
      return T;
    };
  }();
  m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
  m[Symbol.toStringTag] = "Decimal";
  var it = m.constructor = ks(vi);
  tn = new it(tn);
  rn = new it(rn);
  var xe = it;
  var Ms = k(fi());
  var Ns = k(import.meta.require("fs"));
  var Ds = { keyword: De, entity: De, value: (e) => H(rt(e)), punctuation: rt, directive: De, function: De, variable: (e) => H(rt(e)), string: (e) => H(qe(e)), boolean: ke, number: De, comment: Gt };
  var mp = (e) => e;
  var un = {};
  var fp = 0;
  var P = { manual: un.Prism && un.Prism.manual, disableWorkerMessageHandler: un.Prism && un.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
    if (e instanceof he) {
      let t = e;
      return new he(t.type, P.util.encode(t.content), t.alias);
    } else
      return Array.isArray(e) ? e.map(P.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
  }, type: function(e) {
    return Object.prototype.toString.call(e).slice(8, -1);
  }, objId: function(e) {
    return e.__id || Object.defineProperty(e, "__id", { value: ++fp }), e.__id;
  }, clone: function e(t, r) {
    let n, i, o = P.util.type(t);
    switch (r = r || {}, o) {
      case "Object":
        if (i = P.util.objId(t), r[i])
          return r[i];
        n = {}, r[i] = n;
        for (let s in t)
          t.hasOwnProperty(s) && (n[s] = e(t[s], r));
        return n;
      case "Array":
        return i = P.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
          n[a] = e(s, r);
        }), n);
      default:
        return t;
    }
  } }, languages: { extend: function(e, t) {
    let r = P.util.clone(P.languages[e]);
    for (let n in t)
      r[n] = t[n];
    return r;
  }, insertBefore: function(e, t, r, n) {
    n = n || P.languages;
    let i = n[e], o = {};
    for (let a in i)
      if (i.hasOwnProperty(a)) {
        if (a == t)
          for (let l in r)
            r.hasOwnProperty(l) && (o[l] = r[l]);
        r.hasOwnProperty(a) || (o[a] = i[a]);
      }
    let s = n[e];
    return n[e] = o, P.languages.DFS(P.languages, function(a, l) {
      l === s && a != e && (this[a] = o);
    }), o;
  }, DFS: function e(t, r, n, i) {
    i = i || {};
    let o = P.util.objId;
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        r.call(t, s, t[s], n || s);
        let a = t[s], l = P.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
      }
  } }, plugins: {}, highlight: function(e, t, r) {
    let n = { code: e, grammar: t, language: r };
    return P.hooks.run("before-tokenize", n), n.tokens = P.tokenize(n.code, n.grammar), P.hooks.run("after-tokenize", n), he.stringify(P.util.encode(n.tokens), n.language);
  }, matchGrammar: function(e, t, r, n, i, o, s) {
    for (let h in r) {
      if (!r.hasOwnProperty(h) || !r[h])
        continue;
      if (h == s)
        return;
      let O = r[h];
      O = P.util.type(O) === "Array" ? O : [O];
      for (let T = 0;T < O.length; ++T) {
        let S = O[T], C = S.inside, E = !!S.lookbehind, me = !!S.greedy, ae = 0, Bt = S.alias;
        if (me && !S.pattern.global) {
          let U = S.pattern.toString().match(/[imuy]*$/)[0];
          S.pattern = RegExp(S.pattern.source, U + "g");
        }
        S = S.pattern || S;
        for (let U = n, ne = i;U < t.length; ne += t[U].length, ++U) {
          let Ie = t[U];
          if (t.length > e.length)
            return;
          if (Ie instanceof he)
            continue;
          if (me && U != t.length - 1) {
            S.lastIndex = ne;
            var p = S.exec(e);
            if (!p)
              break;
            var c = p.index + (E ? p[1].length : 0), d = p.index + p[0].length, a = U, l = ne;
            for (let _ = t.length;a < _ && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
              l += t[a].length, c >= l && (++U, ne = l);
            if (t[U] instanceof he)
              continue;
            u = a - U, Ie = e.slice(ne, l), p.index -= ne;
          } else {
            S.lastIndex = 0;
            var p = S.exec(Ie), u = 1;
          }
          if (!p) {
            if (o)
              break;
            continue;
          }
          E && (ae = p[1] ? p[1].length : 0);
          var c = p.index + ae, p = p[0].slice(ae), d = c + p.length, f = Ie.slice(0, c), g = Ie.slice(d);
          let z2 = [U, u];
          f && (++U, ne += f.length, z2.push(f));
          let dt = new he(h, C ? P.tokenize(p, C) : p, Bt, p, me);
          if (z2.push(dt), g && z2.push(g), Array.prototype.splice.apply(t, z2), u != 1 && P.matchGrammar(e, t, r, U, ne, true, h), o)
            break;
        }
      }
    }
  }, tokenize: function(e, t) {
    let r = [e], n = t.rest;
    if (n) {
      for (let i in n)
        t[i] = n[i];
      delete t.rest;
    }
    return P.matchGrammar(e, r, t, 0, 0, false), r;
  }, hooks: { all: {}, add: function(e, t) {
    let r = P.hooks.all;
    r[e] = r[e] || [], r[e].push(t);
  }, run: function(e, t) {
    let r = P.hooks.all[e];
    if (!(!r || !r.length))
      for (var n = 0, i;i = r[n++]; )
        i(t);
  } }, Token: he };
  P.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
  P.languages.javascript = P.languages.extend("clike", { "class-name": [P.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
  P.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
  P.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: P.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: P.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: P.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: P.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
  P.languages.markup && P.languages.markup.tag.addInlined("script", "javascript");
  P.languages.js = P.languages.javascript;
  P.languages.typescript = P.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
  P.languages.ts = P.languages.typescript;
  he.stringify = function(e, t) {
    return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
      return he.stringify(r, t);
    }).join("") : gp(e.type)(e.content);
  };
  var Fs = k(us());
  var cn = class e {
    static read(t) {
      let r;
      try {
        r = Ns.default.readFileSync(t, "utf-8");
      } catch {
        return null;
      }
      return e.fromContent(r);
    }
    static fromContent(t) {
      let r = t.split(/\r?\n/);
      return new e(1, r);
    }
    constructor(t, r) {
      this.firstLineNumber = t, this.lines = r;
    }
    get lastLineNumber() {
      return this.firstLineNumber + this.lines.length - 1;
    }
    mapLineAt(t, r) {
      if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
        return this;
      let n = t - this.firstLineNumber, i = [...this.lines];
      return i[n] = r(i[n]), new e(this.firstLineNumber, i);
    }
    mapLines(t) {
      return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
    }
    lineAt(t) {
      return this.lines[t - this.firstLineNumber];
    }
    prependSymbolAt(t, r) {
      return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
    }
    slice(t, r) {
      let n = this.lines.slice(t - 1, r).join(`
`);
      return new e(t, Ls(n).split(`
`));
    }
    highlight() {
      let t = _s(this.toString());
      return new e(this.firstLineNumber, t.split(`
`));
    }
    toString() {
      return this.lines.join(`
`);
    }
  };
  var yp = { red: ce, gray: Gt, dim: Oe, bold: H, underline: X, highlightSource: (e) => e.highlight() };
  var bp = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
  var Gs = k(Ai());
  var ue = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.isRequired = false;
    }
    makeRequired() {
      return this.isRequired = true, this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
    }
  };
  var Rt = class {
    constructor(t = 0, r) {
      this.context = r;
      this.lines = [];
      this.currentLine = "";
      this.currentIndent = 0;
      this.currentIndent = t;
    }
    write(t) {
      return typeof t == "string" ? this.currentLine += t : t.write(this), this;
    }
    writeJoined(t, r, n = (i, o) => o.write(i)) {
      let i = r.length - 1;
      for (let o = 0;o < r.length; o++)
        n(r[o], this), o !== i && this.write(t);
      return this;
    }
    writeLine(t) {
      return this.write(t).newLine();
    }
    newLine() {
      this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = undefined;
      let t = this.afterNextNewLineCallback;
      return this.afterNextNewLineCallback = undefined, t?.(), this;
    }
    withIndent(t) {
      return this.indent(), t(this), this.unindent(), this;
    }
    afterNextNewline(t) {
      return this.afterNextNewLineCallback = t, this;
    }
    indent() {
      return this.currentIndent++, this;
    }
    unindent() {
      return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(t) {
      return this.marginSymbol = t, this;
    }
    toString() {
      return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
      return this.currentLine.length;
    }
    indentedCurrentLine() {
      let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
      return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
    }
  };
  var dn = class {
    constructor(t) {
      this.value = t;
    }
    write(t) {
      t.write(this.value);
    }
    markAsError() {
      this.value.markAsError();
    }
  };
  var mn = (e) => e;
  var fn = { bold: mn, red: mn, green: mn, dim: mn, enabled: false };
  var Us = { bold: H, red: ce, green: qe, dim: Oe, enabled: true };
  var Ct = { write(e) {
    e.writeLine(",");
  } };
  var Pe = class {
    constructor(t) {
      this.contents = t;
      this.isUnderlined = false;
      this.color = (t2) => t2;
    }
    underline() {
      return this.isUnderlined = true, this;
    }
    setColor(t) {
      return this.color = t, this;
    }
    write(t) {
      let r = t.getCurrentLineLength();
      t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
        t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
      });
    }
  };
  var Ye = class {
    constructor() {
      this.hasError = false;
    }
    markAsError() {
      return this.hasError = true, this;
    }
  };
  var St = class extends Ye {
    constructor() {
      super(...arguments);
      this.items = [];
    }
    addItem(r) {
      return this.items.push(new dn(r)), this;
    }
    getField(r) {
      return this.items[r];
    }
    getPrintWidth() {
      return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
    }
    write(r) {
      if (this.items.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithItems(r);
    }
    writeEmpty(r) {
      let n = new Pe("[]");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithItems(r) {
      let { colors: n } = r.context;
      r.writeLine("[").withIndent(() => r.writeJoined(Ct, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(n.red("~".repeat(this.getPrintWidth())));
      });
    }
    asObject() {
    }
  };
  var At = class e extends Ye {
    constructor() {
      super(...arguments);
      this.fields = {};
      this.suggestions = [];
    }
    addField(r) {
      this.fields[r.name] = r;
    }
    addSuggestion(r) {
      this.suggestions.push(r);
    }
    getField(r) {
      return this.fields[r];
    }
    getDeepField(r) {
      let [n, ...i] = r, o = this.getField(n);
      if (!o)
        return;
      let s = o;
      for (let a of i) {
        let l;
        if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof St && (l = s.value.getField(Number(a))), !l)
          return;
        s = l;
      }
      return s;
    }
    getDeepFieldValue(r) {
      return r.length === 0 ? this : this.getDeepField(r)?.value;
    }
    hasField(r) {
      return !!this.getField(r);
    }
    removeAllFields() {
      this.fields = {};
    }
    removeField(r) {
      delete this.fields[r];
    }
    getFields() {
      return this.fields;
    }
    isEmpty() {
      return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r) {
      return this.getField(r)?.value;
    }
    getDeepSubSelectionValue(r) {
      let n = this;
      for (let i of r) {
        if (!(n instanceof e))
          return;
        let o = n.getSubSelectionValue(i);
        if (!o)
          return;
        n = o;
      }
      return n;
    }
    getDeepSelectionParent(r) {
      let n = this.getSelectionParent();
      if (!n)
        return;
      let i = n;
      for (let o of r) {
        let s = i.value.getFieldValue(o);
        if (!s || !(s instanceof e))
          return;
        let a = s.getSelectionParent();
        if (!a)
          return;
        i = a;
      }
      return i;
    }
    getSelectionParent() {
      let r = this.getField("select")?.value.asObject();
      if (r)
        return { kind: "select", value: r };
      let n = this.getField("include")?.value.asObject();
      if (n)
        return { kind: "include", value: n };
    }
    getSubSelectionValue(r) {
      return this.getSelectionParent()?.value.fields[r].value;
    }
    getPrintWidth() {
      let r = Object.values(this.fields);
      return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
    }
    write(r) {
      let n = Object.values(this.fields);
      if (n.length === 0 && this.suggestions.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithContents(r, n);
    }
    asObject() {
      return this;
    }
    writeEmpty(r) {
      let n = new Pe("{}");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithContents(r, n) {
      r.writeLine("{").withIndent(() => {
        r.writeJoined(Ct, [...n, ...this.suggestions]).newLine();
      }), r.write("}"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
      });
    }
  };
  var W = class extends Ye {
    constructor(r) {
      super();
      this.text = r;
    }
    getPrintWidth() {
      return this.text.length;
    }
    write(r) {
      let n = new Pe(this.text);
      this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
    }
    asObject() {
    }
  };
  var nr = class {
    constructor() {
      this.fields = [];
    }
    addField(t, r) {
      return this.fields.push({ write(n) {
        let { green: i, dim: o } = n.context.colors;
        n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
      } }), this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.writeLine(r("{")).withIndent(() => {
        t.writeJoined(Ct, this.fields).newLine();
      }).write(r("}")).addMarginSymbol(r("+"));
    }
  };
  var Hp = 3;
  var sr = class {
    constructor(t, r, n, i, o) {
      this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
    }
    _toGraphQLInputType() {
      let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
      return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
  };
  var hn = Symbol();
  var Ii = new WeakMap;
  var Me = class {
    constructor(t) {
      t === hn ? Ii.set(this, `Prisma.${this._getName()}`) : Ii.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Ii.get(this);
    }
  };
  var ar = class extends Me {
    _getNamespace() {
      return "NullTypes";
    }
  };
  var lr = class extends ar {
  };
  Oi(lr, "DbNull");
  var ur = class extends ar {
  };
  Oi(ur, "JsonNull");
  var cr = class extends ar {
  };
  Oi(cr, "AnyNull");
  var yn = { classes: { DbNull: lr, JsonNull: ur, AnyNull: cr }, instances: { DbNull: new lr(hn), JsonNull: new ur(hn), AnyNull: new cr(hn) } };
  var Ys = ": ";
  var bn = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = false;
    }
    markAsError() {
      this.hasError = true;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + Ys.length;
    }
    write(t) {
      let r = new Pe(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Ys).write(this.value);
    }
  };
  var ki = class {
    constructor(t) {
      this.errorMessages = [];
      this.arguments = t;
    }
    write(t) {
      t.write(this.arguments);
    }
    addErrorMessage(t) {
      this.errorMessages.push(t);
    }
    renderAllMessages(t) {
      return this.errorMessages.map((r) => r(t)).join(`
`);
    }
  };
  var ve = class {
    constructor() {
      this._map = new Map;
    }
    get(t) {
      return this._map.get(t)?.value;
    }
    set(t, r) {
      this._map.set(t, { value: r });
    }
    getOrCreate(t, r) {
      let n = this._map.get(t);
      if (n)
        return n.value;
      let i = r();
      return this.set(t, i), i;
    }
  };
  var xn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new ve;
      this.modelExtensionsCache = new ve;
      this.queryCallbacksCache = new ve;
      this.clientExtensions = pr(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      this.batchCallbacks = pr(() => {
        let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
        return r2 ? t2.concat(r2) : t2;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => ta(this.previous?.getAllComputedFields(t), this.extension, t));
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Te(t);
        return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== undefined && (o[t][r] !== undefined && i.push(o[t][r]), o[t].$allOperations !== undefined && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== undefined && (o.$allModels[r] !== undefined && i.push(o.$allModels[r]), o.$allModels.$allOperations !== undefined && i.push(o.$allModels.$allOperations)), o[r] !== undefined && i.push(o[r]), o.$allOperations !== undefined && i.push(o.$allOperations), n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  };
  var kt = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e;
    }
    static single(t) {
      return new e(new xn(t));
    }
    isEmpty() {
      return this.head === undefined;
    }
    append(t) {
      return new e(new xn(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
  var ia = Symbol();
  var dr = class {
    constructor(t) {
      if (t !== ia)
        throw new Error("Skip instance can not be constructed directly");
    }
    ifUndefined(t) {
      return t === undefined ? Pn : t;
    }
  };
  var Pn = new dr(ia);
  var Xp = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
  var oa = "explicitly `undefined` values are not allowed";
  var Di = class e {
    constructor(t) {
      this.params = t;
      this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
    }
    throwValidationError(t) {
      wn({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
    }
    getSelectionPath() {
      return this.params.selectionPath;
    }
    getArgumentPath() {
      return this.params.argumentPath;
    }
    getArgumentName() {
      return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
      if (!(!this.params.modelName || !this.modelOrType))
        return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
    }
    isRawAction() {
      return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
    }
    isPreviewFeatureOn(t) {
      return this.params.previewFeatures.includes(t);
    }
    getComputedFields() {
      if (this.params.modelName)
        return this.params.extensions.getAllComputedFields(this.params.modelName);
    }
    findField(t) {
      return this.modelOrType?.fields.find((r) => r.name === t);
    }
    nestSelection(t) {
      let r = this.findField(t), n = r?.kind === "object" ? r.type : undefined;
      return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
    }
    getGlobalOmit() {
      return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[xt(this.params.modelName)] ?? {} : {};
    }
    shouldApplyGlobalOmit() {
      switch (this.params.action) {
        case "findFirst":
        case "findFirstOrThrow":
        case "findUniqueOrThrow":
        case "findMany":
        case "upsert":
        case "findUnique":
        case "createManyAndReturn":
        case "create":
        case "update":
        case "delete":
          return true;
        case "executeRaw":
        case "aggregateRaw":
        case "runCommandRaw":
        case "findRaw":
        case "createMany":
        case "deleteMany":
        case "groupBy":
        case "updateMany":
        case "count":
        case "aggregate":
        case "queryRaw":
          return false;
        default:
          Fe(this.params.action, "Unknown action");
      }
    }
    nestArgument(t) {
      return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
    }
  };
  var Dt = class {
    constructor(t) {
      this._engine = t;
    }
    prometheus(t) {
      return this._engine.metrics({ format: "prometheus", ...t });
    }
    json(t) {
      return this._engine.metrics({ format: "json", ...t });
    }
  };
  var Ni = new WeakMap;
  var Tn = "$$PrismaTypedSql";
  var Mi = class {
    constructor(t, r) {
      Ni.set(this, { sql: t, values: r }), Object.defineProperty(this, Tn, { value: Tn });
    }
    get sql() {
      return Ni.get(this).sql;
    }
    get values() {
      return Ni.get(this).values;
    }
  };
  var $i = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (;this.registeredErrors[r] !== undefined; )
        r++;
      return this.registeredErrors[r] = { error: t }, r;
    }
  };
  var qi = (e) => {
    let t = new $i, r = Ce(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: Ce(t, e.queryRaw.bind(e)), executeRaw: Ce(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map((s) => ud(t, s)) };
    return e.getConnectionInfo && (n.getConnectionInfo = pd(t, e.getConnectionInfo.bind(e))), n;
  };
  var ud = (e, t) => {
    let r = Ce(e, t.startTransaction.bind(t));
    return { adapterName: t.adapterName, provider: t.provider, queryRaw: Ce(e, t.queryRaw.bind(t)), executeRaw: Ce(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => cd(e, o)) };
  };
  var cd = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: Ce(e, t.queryRaw.bind(t)), executeRaw: Ce(e, t.executeRaw.bind(t)), commit: Ce(e, t.commit.bind(t)), rollback: Ce(e, t.rollback.bind(t)) });
  var Wl = k(oi());
  var Hl = import.meta.require("async_hooks");
  var Kl = import.meta.require("events");
  var zl = k(import.meta.require("fs"));
  var Fr = k(import.meta.require("path"));
  var oe = class e {
    constructor(t, r) {
      if (t.length - 1 !== r.length)
        throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
      let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
      this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
      let i = 0, o = 0;
      for (;i < r.length; ) {
        let s = r[i++], a = t[i];
        if (s instanceof e) {
          this.strings[o] += s.strings[0];
          let l = 0;
          for (;l < s.values.length; )
            this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
          this.strings[o] += a;
        } else
          this.values[o++] = s, this.strings[o] = a;
      }
    }
    get sql() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `?${this.strings[r++]}`;
      return n;
    }
    get statement() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `:${r}${this.strings[r++]}`;
      return n;
    }
    get text() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `\$${r}${this.strings[r++]}`;
      return n;
    }
    inspect() {
      return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
    }
  };
  var ma = ji("");
  var Rn = { enumerable: true, configurable: true, writable: true };
  var fa = Symbol.for("nodejs.util.inspect.custom");
  var md = "P2037";
  var hr = "<unknown>";
  var gd = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var hd = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var bd = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var wd = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
  var xd = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var vd = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
  var Rd = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var Bi = class {
    getLocation() {
      return null;
    }
  };
  var Ui = class {
    constructor() {
      this._error = new Error;
    }
    getLocation() {
      let t = this._error.stack;
      if (!t)
        return null;
      let n = ya(t).find((i) => {
        if (!i.file)
          return false;
        let o = mi(i.file);
        return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
      });
      return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
    }
  };
  var ba = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
  var Ta = (e) => Array.isArray(e) ? e : e.split(".");
  var Gi = (e, t) => Ta(t).reduce((r, n) => r && r[n], e);
  var Ra = (e, t, r) => Ta(t).reduceRight((n, i, o, s) => Object.assign({}, Gi(e, s.slice(0, o)), { [i]: n }), r);
  var Md = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
  var $d = ["aggregate", "count", "groupBy"];
  var Wi = Symbol();
  var Fa = (e) => e;
  var ja = L("prisma:client");
  var Va = { Vercel: "vercel", "Netlify CI": "netlify" };
  var Jd = "Cloudflare-Workers";
  var Wd = "node";
  var Hd = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
  var Ka = k(import.meta.require("fs"));
  var Er = k(import.meta.require("path"));
  var zd = L("prisma:client:engines:resolveEnginePath");
  var Yd = () => new RegExp("runtime[\\\\/]library\\.m?js$");
  var Hi = k(bi());
  var el = k(hs());
  var _n = class extends Error {
    constructor(t, r) {
      super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
    }
    get [Symbol.toStringTag]() {
      return this.name;
    }
  };
  var se = class extends _n {
    constructor(t, r) {
      super(t, r), this.isRetryable = r.isRetryable ?? true;
    }
  };
  var Mt = class extends se {
    constructor(r) {
      super("This request must be retried", A(r, true));
      this.name = "ForcedRetryError";
      this.code = "P5001";
    }
  };
  w(Mt, "ForcedRetryError");
  var at = class extends se {
    constructor(r, n) {
      super(r, A(n, false));
      this.name = "InvalidDatasourceError";
      this.code = "P6001";
    }
  };
  w(at, "InvalidDatasourceError");
  var lt = class extends se {
    constructor(r, n) {
      super(r, A(n, false));
      this.name = "NotImplementedYetError";
      this.code = "P5004";
    }
  };
  w(lt, "NotImplementedYetError");
  var q = class extends se {
    constructor(t, r) {
      super(t, r), this.response = r.response;
      let n = this.response.headers.get("prisma-request-id");
      if (n) {
        let i = `(The request id was: ${n})`;
        this.message = this.message + " " + i;
      }
    }
  };
  var ut = class extends q {
    constructor(r) {
      super("Schema needs to be uploaded", A(r, true));
      this.name = "SchemaMissingError";
      this.code = "P5005";
    }
  };
  w(ut, "SchemaMissingError");
  var Ki = "This request could not be understood by the server";
  var wr = class extends q {
    constructor(r, n, i) {
      super(n || Ki, A(r, false));
      this.name = "BadRequestError";
      this.code = "P5000";
      i && (this.code = i);
    }
  };
  w(wr, "BadRequestError");
  var xr = class extends q {
    constructor(r, n) {
      super("Engine not started: healthcheck timeout", A(r, true));
      this.name = "HealthcheckTimeoutError";
      this.code = "P5013";
      this.logs = n;
    }
  };
  w(xr, "HealthcheckTimeoutError");
  var Pr = class extends q {
    constructor(r, n, i) {
      super(n, A(r, true));
      this.name = "EngineStartupError";
      this.code = "P5014";
      this.logs = i;
    }
  };
  w(Pr, "EngineStartupError");
  var vr = class extends q {
    constructor(r) {
      super("Engine version is not supported", A(r, false));
      this.name = "EngineVersionNotSupportedError";
      this.code = "P5012";
    }
  };
  w(vr, "EngineVersionNotSupportedError");
  var zi = "Request timed out";
  var Tr = class extends q {
    constructor(r, n = zi) {
      super(n, A(r, false));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
  w(Tr, "GatewayTimeoutError");
  var Xd = "Interactive transaction error";
  var Rr = class extends q {
    constructor(r, n = Xd) {
      super(n, A(r, false));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
  w(Rr, "InteractiveTransactionError");
  var em = "Request parameters are invalid";
  var Cr = class extends q {
    constructor(r, n = em) {
      super(n, A(r, false));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
  w(Cr, "InvalidRequestError");
  var Yi = "Requested resource does not exist";
  var Sr = class extends q {
    constructor(r, n = Yi) {
      super(n, A(r, false));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
  w(Sr, "NotFoundError");
  var Zi = "Unknown server error";
  var $t = class extends q {
    constructor(r, n, i) {
      super(n || Zi, A(r, true));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i;
    }
  };
  w($t, "ServerError");
  var Xi = "Unauthorized, check your connection string";
  var Ar = class extends q {
    constructor(r, n = Xi) {
      super(n, A(r, false));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
  w(Ar, "UnauthorizedError");
  var eo = "Usage exceeded, retry again later";
  var Ir = class extends q {
    constructor(r, n = eo) {
      super(n, A(r, true));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
  w(Ir, "UsageExceededError");
  var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var al = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
  var kr = class extends se {
    constructor(r, n) {
      super(`Cannot fetch data from service:
${r}`, A(n, true));
      this.name = "RequestError";
      this.code = "P5010";
    }
  };
  w(kr, "RequestError");
  var am = typeof import.meta.require < "u" ? import.meta.require : () => {
  };
  var ro = class {
    constructor(t = {}) {
      this.headers = new Map;
      for (let [r, n] of Object.entries(t))
        if (typeof n == "string")
          this.headers.set(r, n);
        else if (Array.isArray(n))
          for (let i of n)
            this.headers.set(r, i);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      return this.headers.get(t) ?? null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, i] of this.headers)
        t.call(r, i, n, this);
    }
  };
  var lm = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
  var ll = L("prisma:client:dataproxyEngine");
  var cl = 3;
  var no = L("prisma:client:dataproxyEngine");
  var io = class {
    constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
      this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
      this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
    }
  };
  var Dr = class {
    constructor(t) {
      this.name = "DataProxyEngine";
      ol(t), this.config = t, this.env = { ...t.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = il(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== undefined && await this.startPromise, this.startPromise = (async () => {
        let [t, r] = this.extractHostAndApiKey();
        this.host = t, this.headerBuilder = new io({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await ul(t, this.config), no("host", this.host);
      })(), await this.startPromise;
    }
    async stop() {
    }
    propagateResponseExtensions(t) {
      t?.logs?.length && t.logs.forEach((r) => {
        switch (r.level) {
          case "debug":
          case "error":
          case "trace":
          case "warn":
          case "info":
            break;
          case "query": {
            let n = typeof r.attributes.query == "string" ? r.attributes.query : "";
            if (!this.tracingHelper.isEnabled()) {
              let [i] = n.split("/* traceparent");
              n = i;
            }
            this.logEmitter.emit("query", { query: n, timestamp: sl(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
          }
        }
      }), t?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the remote query engine');
    }
    async url(t) {
      return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: true };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await ct(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
        r.ok || no("schema response status", r.status);
        let n = await Or(r, this.clientVersion);
        if (n)
          throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: new Date, target: "" }), n;
        this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: new Date, target: "" });
      });
    }
    request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
      return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
    }
    async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
      let o = n?.kind === "itx" ? n.options : undefined, s = Ft(t, n), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r });
      return a.map((u) => ("errors" in u) && u.errors.length > 0 ? st(u.errors[0], this.clientVersion, this.config.activeProvider) : { data: u, elapsed: l });
    }
    requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
      return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
        let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
        o(s);
        let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
        a.ok || no("graphql response status", a.status), await this.handleError(await Or(a, this.clientVersion));
        let l = await a.json(), u = l.extensions;
        if (u && this.propagateResponseExtensions(u), l.errors)
          throw l.errors.length === 1 ? st(l.errors[0], this.config.clientVersion, this.config.activeProvider) : new B(l.errors, { clientVersion: this.config.clientVersion });
        return l;
      } });
    }
    async transaction(t, r, n) {
      let i = { start: "starting", commit: "committing", rollback: "rolling back" };
      return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
        if (t === "start") {
          let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
          o(a);
          let l = await ct(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
          await this.handleError(await Or(l, this.clientVersion));
          let u = await l.json(), c = u.extensions;
          c && this.propagateResponseExtensions(c);
          let p = u.id, d = u["data-proxy"].endpoint;
          return { id: p, payload: { endpoint: d } };
        } else {
          let s = `${n.payload.endpoint}/${t}`;
          o(s);
          let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
          await this.handleError(await Or(a, this.clientVersion));
          let u = (await a.json()).extensions;
          u && this.propagateResponseExtensions(u);
          return;
        }
      } });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = Nt({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
      try {
        i = new URL(n);
      } catch {
        throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      }
      let { protocol: o, host: s, searchParams: a } = i;
      if (o !== "prisma:" && o !== "prisma+postgres:")
        throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      let l = a.get("api_key");
      if (l === null || l.length < 1)
        throw new at(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
      return [s, l];
    }
    metrics() {
      throw new lt("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
    }
    async withRetry(t) {
      for (let r = 0;; r++) {
        let n = (i) => {
          this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: new Date, target: "" });
        };
        try {
          return await t.callback({ logHttpCall: n });
        } catch (i) {
          if (!(i instanceof se) || !i.isRetryable)
            throw i;
          if (r >= cl)
            throw i instanceof Mt ? i.cause : i;
          this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${cl} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: new Date, target: "" });
          let o = await nl(r);
          this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: new Date, target: "" });
        }
      }
    }
    async handleError(t) {
      if (t instanceof ut)
        throw await this.uploadSchema(), new Mt({ clientVersion: this.clientVersion, cause: t });
      if (t)
        throw t;
    }
    applyPendingMigrations() {
      throw new Error("Method not implemented.");
    }
  };
  var so = k(import.meta.require("os"));
  var dl = k(import.meta.require("path"));
  var oo = Symbol("PrismaLibraryEngineCache");
  var ml = { async loadLibrary(e) {
    let t = await Yn(), r = await za("library", e);
    try {
      return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => dm(r));
    } catch (n) {
      let i = ui({ e: n, platformInfo: t, id: r });
      throw new R(i, e.clientVersion);
    }
  } };
  var ao;
  var fl = { async loadLibrary(e) {
    let { clientVersion: t, adapter: r, engineWasm: n } = e;
    if (r === undefined)
      throw new R(`The \`adapter\` option for \`PrismaClient\` is required in this context (${In().prettyName})`, t);
    if (n === undefined)
      throw new R("WASM engine was unexpectedly `undefined`", t);
    ao === undefined && (ao = (async () => {
      let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
      if (s == null)
        throw new R("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
      let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a);
      return o.__wbg_set_wasm(l.exports), o.QueryEngine;
    })());
    let i = await ao;
    return { debugPanic() {
      return Promise.reject("{}");
    }, dmmf() {
      return Promise.resolve("{}");
    }, version() {
      return { commit: "unknown", version: "unknown" };
    }, QueryEngine: i };
  } };
  var mm = "P2036";
  var Ae = L("prisma:client:libraryEngine");
  var gl = [...Jn, "native"];
  var _r = class {
    constructor(t, r) {
      this.name = "LibraryEngine";
      this.libraryLoader = r ?? ml, t.engineWasm !== undefined && (this.libraryLoader = r ?? fl), this.config = t, this.libraryStarted = false, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, t.enableDebugLogs && (this.logLevel = "debug");
      let n = Object.keys(t.overrideDatasources)[0], i = t.overrideDatasources[n]?.url;
      n !== undefined && i !== undefined && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
    }
    async applyPendingMigrations() {
      throw new Error("Cannot call this method from this type of engine instance");
    }
    async transaction(t, r, n) {
      await this.start();
      let i = JSON.stringify(r), o;
      if (t === "start") {
        let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
        o = await this.engine?.startTransaction(a, i);
      } else
        t === "commit" ? o = await this.engine?.commitTransaction(n.id, i) : t === "rollback" && (o = await this.engine?.rollbackTransaction(n.id, i));
      let s = this.parseEngineResponse(o);
      if (hm(s)) {
        let a = this.getExternalAdapterError(s);
        throw a ? a.error : new V(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
      }
      return s;
    }
    async instantiateLibrary() {
      if (Ae("internalSetup"), this.libraryInstantiationPromise)
        return this.libraryInstantiationPromise;
      Qn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
    }
    async getCurrentBinaryTarget() {
      {
        if (this.binaryTarget)
          return this.binaryTarget;
        let t = await nt();
        if (!gl.includes(t))
          throw new R(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(H(t))}. Possible binaryTargets: ${qe(gl.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
        return t;
      }
    }
    parseEngineResponse(t) {
      if (!t)
        throw new B("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
      try {
        return JSON.parse(t);
      } catch {
        throw new B("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
      }
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
        try {
          let t = new WeakRef(this), { adapter: r } = this.config;
          r && Ae("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
            t.deref()?.logger(n);
          }, r);
        } catch (t) {
          let r = t, n = this.parseInitError(r.message);
          throw typeof n == "string" ? r : new R(n.message, this.config.clientVersion, n.error_code);
        }
      }
    }
    logger(t) {
      let r = this.parseEngineResponse(t);
      if (r) {
        if ("span" in r) {
          this.config.tracingHelper.createEngineSpan(r);
          return;
        }
        r.level = r?.level.toLowerCase() ?? "unknown", fm(r) ? this.logEmitter.emit("query", { timestamp: new Date, query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : gm(r) ? this.loggerRustPanic = new le(lo(this, `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: new Date, message: r.message, target: r.module_path });
      }
    }
    parseInitError(t) {
      try {
        return JSON.parse(t);
      } catch {
      }
      return t;
    }
    parseRequestError(t) {
      try {
        return JSON.parse(t);
      } catch {
      }
      return t;
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
    }
    async start() {
      if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
        return Ae(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
      if (this.libraryStarted)
        return;
      let t = async () => {
        Ae("library starting");
        try {
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, Ae("library started");
        } catch (r) {
          let n = this.parseInitError(r.message);
          throw typeof n == "string" ? r : new R(n.message, this.config.clientVersion, n.error_code);
        } finally {
          this.libraryStartingPromise = undefined;
        }
      };
      return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
    }
    async stop() {
      if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
        return Ae("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted)
        return;
      let t = async () => {
        await new Promise((n) => setTimeout(n, 5)), Ae("library stopping");
        let r = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = undefined, Ae("library stopped");
      };
      return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
    }
    version() {
      return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
    }
    debugPanic(t) {
      return this.library?.debugPanic(t);
    }
    async request(t, { traceparent: r, interactiveTransaction: n }) {
      Ae(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t);
      try {
        await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
        let s = this.parseEngineResponse(await this.executingQueryPromise);
        if (s.errors)
          throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        if (this.loggerRustPanic)
          throw this.loggerRustPanic;
        return { data: s, elapsed: 0 };
      } catch (s) {
        if (s instanceof R)
          throw s;
        if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:"))
          throw new le(lo(this, s.message), this.config.clientVersion);
        let a = this.parseRequestError(s.message);
        throw typeof a == "string" ? s : new B(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
      }
    }
    async requestBatch(t, { transaction: r, traceparent: n }) {
      Ae("requestBatch");
      let i = Ft(t, r);
      await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), pl(r));
      let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
      if (s.errors)
        throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
      let { batchResult: a, errors: l } = s;
      if (Array.isArray(a))
        return a.map((u) => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u, elapsed: 0 });
      throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
    }
    buildQueryError(t) {
      if (t.user_facing_error.is_panic)
        return new le(lo(this, t.user_facing_error.message), this.config.clientVersion);
      let r = this.getExternalAdapterError(t.user_facing_error);
      return r ? r.error : st(t, this.config.clientVersion, this.config.activeProvider);
    }
    getExternalAdapterError(t) {
      if (t.error_code === mm && this.config.adapter) {
        let r = t.meta?.id;
        Yr(typeof r == "number", "Malformed external JS error received from the engine");
        let n = this.config.adapter.errorRegistry.consumeError(r);
        return Yr(n, "External error with reported id was not registered"), n;
      }
    }
    async metrics(t) {
      await this.start();
      let r = await this.engine.metrics(JSON.stringify(t));
      return t.format === "prometheus" ? r : this.parseEngineResponse(r);
    }
  };
  var yl = (e) => ({ command: e });
  var bl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
  var bm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
  var vl = bm;
  var Em = /^(\s*alter\s)/i;
  var Tl = L("prisma:client");
  var co = ({ clientMethod: e, activeProvider: t }) => (r) => {
    let n = "", i;
    if (pa(r))
      n = r.sql, i = { values: jt(r.values), __prismaRawParameters__: true };
    else if (Array.isArray(r)) {
      let [o, ...s] = r;
      n = o, i = { values: jt(s || []), __prismaRawParameters__: true };
    } else
      switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: jt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: jt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = bl(r), i = { values: jt(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
    return i?.values ? Tl(`prisma.${e}(${n}, ${i.values})`) : Tl(`prisma.${e}(${n})`), { query: n, parameters: i };
  };
  var Rl = { requestArgsToMiddlewareArgs(e) {
    return [e.strings, ...e.values];
  }, middlewareArgsToRequestArgs(e) {
    let [t, ...r] = e;
    return new oe(t, r);
  } };
  var Cl = { requestArgsToMiddlewareArgs(e) {
    return [e];
  }, middlewareArgsToRequestArgs(e) {
    return e[0];
  } };
  var Al = { isEnabled() {
    return false;
  }, getTraceParent() {
    return "00-10-10-00";
  }, async createEngineSpan() {
  }, getActiveContext() {
  }, runInChildSpan(e, t) {
    return t();
  } };
  var mo = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Al;
    }
  };
  var Ln = class {
    constructor() {
      this._middlewares = [];
    }
    use(t) {
      this._middlewares.push(t);
    }
    get(t) {
      return this._middlewares[t];
    }
    has(t) {
      return !!this._middlewares[t];
    }
    length() {
      return this._middlewares.length;
    }
  };
  var Fl = k(bi());
  var wm = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
  var Mn = class {
    constructor(t) {
      this.options = t;
      this.tickActive = false;
      this.batches = {};
    }
    request(t) {
      let r = this.options.batchBy(t);
      return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
        this.dispatchBatches(), this.tickActive = false;
      }))), new Promise((n, i) => {
        this.batches[r].push({ request: t, resolve: n, reject: i });
      })) : this.options.singleLoader(t);
    }
    dispatchBatches() {
      for (let t in this.batches) {
        let r = this.batches[t];
        delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
          n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
        }).catch((n) => {
          r[0].reject(n);
        }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
          if (n instanceof Error)
            for (let i = 0;i < r.length; i++)
              r[i].reject(n);
          else
            for (let i = 0;i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
        }).catch((n) => {
          for (let i = 0;i < r.length; i++)
            r[i].reject(n);
        }));
      }
    }
    get [Symbol.toStringTag]() {
      return "DataLoader";
    }
  };
  var Pm = L("prisma:client:request_handler");
  var $n = class {
    constructor(t, r) {
      this.logEmitter = r, this.client = t, this.dataloader = new Mn({ batchLoader: Ma(async ({ requests: n, customDataProxyFetch: i }) => {
        let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => go(p.protocolQuery.action));
        return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: vm(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
          if (p instanceof Error)
            return p;
          try {
            return this.mapQueryEngineResult(n[d], p);
          } catch (f) {
            return f;
          }
        });
      }), singleLoader: async (n) => {
        let i = n.transaction?.kind === "itx" ? Ll(n.transaction) : undefined, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: go(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
        return this.mapQueryEngineResult(n, o);
      }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Dl(n.protocolQuery), batchOrder(n, i) {
        return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
      } });
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
        this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r);
      return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: new Date }), r;
      }
    }
    handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
      if (Pm(t), Tm(t, i) || t instanceof Le)
        throw t;
      if (t instanceof V && Rm(t)) {
        let u = Nl(t.meta);
        wn({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
      }
      let l = t.message;
      if (n && (l = Tt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
        let u = s ? { modelName: s, ...t.meta } : t.meta;
        throw new V(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
      } else {
        if (t.isPanic)
          throw new le(l, this.client._clientVersion);
        if (t instanceof B)
          throw new B(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
        if (t instanceof R)
          throw new R(l, this.client._clientVersion);
        if (t instanceof le)
          throw new le(l, this.client._clientVersion);
      }
      throw t.clientVersion = this.client._clientVersion, t;
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Fl.default)(t) : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t))
        return t;
      let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = Gi(o, s), l = i === "queryRaw" ? _l(a) : wt(a);
      return n ? n(l) : l;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
  var Ml = "5.22.0";
  var $l = Ml;
  var Ul = k(Ai());
  var F = class extends Error {
    constructor(t) {
      super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientConstructorValidationError";
    }
  };
  w(F, "PrismaClientConstructorValidationError");
  var ql = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
  var jl = ["pretty", "colorless", "minimal"];
  var Vl = ["info", "query", "warn", "error"];
  var Sm = { datasources: (e, { datasourceNames: t }) => {
    if (e) {
      if (typeof e != "object" || Array.isArray(e))
        throw new F(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
      for (let [r, n] of Object.entries(e)) {
        if (!t.includes(r)) {
          let i = Vt(r, t) || ` Available datasources: ${t.join(", ")}`;
          throw new F(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
        }
        if (typeof n != "object" || Array.isArray(n))
          throw new F(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
        if (n && typeof n == "object")
          for (let [i, o] of Object.entries(n)) {
            if (i !== "url")
              throw new F(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string")
              throw new F(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
      }
    }
  }, adapter: (e, t) => {
    if (e === null)
      return;
    if (e === undefined)
      throw new F('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
    if (!Fn(t).includes("driverAdapters"))
      throw new F('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
    if (Yt() === "binary")
      throw new F('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
  }, datasourceUrl: (e) => {
    if (typeof e < "u" && typeof e != "string")
      throw new F(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
  }, errorFormat: (e) => {
    if (e) {
      if (typeof e != "string")
        throw new F(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
      if (!jl.includes(e)) {
        let t = Vt(e, jl);
        throw new F(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
      }
    }
  }, log: (e) => {
    if (!e)
      return;
    if (!Array.isArray(e))
      throw new F(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
    function t(r) {
      if (typeof r == "string" && !Vl.includes(r)) {
        let n = Vt(r, Vl);
        throw new F(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
      }
    }
    for (let r of e) {
      t(r);
      let n = { level: t, emit: (i) => {
        let o = ["stdout", "event"];
        if (!o.includes(i)) {
          let s = Vt(i, o);
          throw new F(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
        }
      } };
      if (r && typeof r == "object")
        for (let [i, o] of Object.entries(r))
          if (n[i])
            n[i](o);
          else
            throw new F(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
    }
  }, transactionOptions: (e) => {
    if (!e)
      return;
    let t = e.maxWait;
    if (t != null && t <= 0)
      throw new F(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
    let r = e.timeout;
    if (r != null && r <= 0)
      throw new F(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
  }, omit: (e, t) => {
    if (typeof e != "object")
      throw new F('"omit" option is expected to be an object.');
    if (e === null)
      throw new F('"omit" option can not be `null`');
    let r = [];
    for (let [n, i] of Object.entries(e)) {
      let o = Im(n, t.runtimeDataModel);
      if (!o) {
        r.push({ kind: "UnknownModel", modelKey: n });
        continue;
      }
      for (let [s, a] of Object.entries(i)) {
        let l = o.fields.find((u) => u.name === s);
        if (!l) {
          r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
          continue;
        }
        if (l.relationName) {
          r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
          continue;
        }
        typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
      }
    }
    if (r.length > 0)
      throw new F(Om(e, r));
  }, __internal: (e) => {
    if (!e)
      return;
    let t = ["debug", "engine", "configOverride"];
    if (typeof e != "object")
      throw new F(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
    for (let [r] of Object.entries(e))
      if (!t.includes(r)) {
        let n = Vt(r, t);
        throw new F(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
  } };
  var tt = L("prisma:client");
  typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
  var km = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
  var Dm = Symbol.for("prisma.client.transaction.id");
  var _m = { id: 0, nextId() {
    return ++this.id;
  } };
  var Lm = new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
  /*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  */
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS((exports) => {
  var __dirname = "/Users/eanpraha/pre25/rangi/node_modules/.prisma/client";
  Object.defineProperty(exports, "__esModule", { value: true });
  var {
    PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
    PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
    PrismaClientRustPanicError: PrismaClientRustPanicError2,
    PrismaClientInitializationError: PrismaClientInitializationError2,
    PrismaClientValidationError: PrismaClientValidationError2,
    NotFoundError: NotFoundError2,
    getPrismaClient: getPrismaClient2,
    sqltag: sqltag2,
    empty: empty2,
    join: join2,
    raw: raw3,
    skip: skip2,
    Decimal: Decimal2,
    Debug: Debug2,
    objectEnumValues: objectEnumValues2,
    makeStrictEnum: makeStrictEnum2,
    Extensions: Extensions2,
    warnOnce: warnOnce2,
    defineDmmfProperty: defineDmmfProperty2,
    Public: Public2,
    getRuntime: getRuntime2
  } = require_library();
  var Prisma = {};
  exports.Prisma = Prisma;
  exports.$Enums = {};
  Prisma.prismaVersion = {
    client: "5.22.0",
    engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
  };
  Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
  Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
  Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
  Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
  Prisma.PrismaClientValidationError = PrismaClientValidationError2;
  Prisma.NotFoundError = NotFoundError2;
  Prisma.Decimal = Decimal2;
  Prisma.sql = sqltag2;
  Prisma.empty = empty2;
  Prisma.join = join2;
  Prisma.raw = raw3;
  Prisma.validator = Public2.validator;
  Prisma.getExtensionContext = Extensions2.getExtensionContext;
  Prisma.defineExtension = Extensions2.defineExtension;
  Prisma.DbNull = objectEnumValues2.instances.DbNull;
  Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
  Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
  Prisma.NullTypes = {
    DbNull: objectEnumValues2.classes.DbNull,
    JsonNull: objectEnumValues2.classes.JsonNull,
    AnyNull: objectEnumValues2.classes.AnyNull
  };
  var path = import.meta.require("path");
  exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
    Serializable: "Serializable"
  });
  exports.Prisma.UserScalarFieldEnum = {
    id: "id",
    name: "name",
    email: "email",
    password: "password",
    token: "token",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  };
  exports.Prisma.SessionScalarFieldEnum = {
    id: "id",
    expiredAt: "expiredAt",
    user_id: "user_id"
  };
  exports.Prisma.PostScalarFieldEnum = {
    id: "id",
    title: "title",
    content: "content",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    user_id: "user_id"
  };
  exports.Prisma.SortOrder = {
    asc: "asc",
    desc: "desc"
  };
  exports.Prisma.NullsOrder = {
    first: "first",
    last: "last"
  };
  exports.Prisma.ModelName = {
    User: "User",
    Session: "Session",
    Post: "Post"
  };
  var config2 = {
    generator: {
      name: "client",
      provider: {
        fromEnvVar: null,
        value: "prisma-client-js"
      },
      output: {
        value: "/Users/eanpraha/pre25/rangi/node_modules/@prisma/client",
        fromEnvVar: null
      },
      config: {
        engineType: "library"
      },
      binaryTargets: [
        {
          fromEnvVar: null,
          value: "darwin",
          native: true
        }
      ],
      previewFeatures: [],
      sourceFilePath: "/Users/eanpraha/pre25/rangi/prisma/schema.prisma"
    },
    relativeEnvPaths: {
      rootEnvPath: null,
      schemaEnvPath: "../../../.env"
    },
    relativePath: "../../../prisma",
    clientVersion: "5.22.0",
    engineVersion: "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
    datasourceNames: [
      "db"
    ],
    activeProvider: "sqlite",
    postinstall: false,
    inlineDatasources: {
      db: {
        url: {
          fromEnvVar: "DATABASE_URL",
          value: null
        }
      }
    },
    inlineSchema: "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = \"prisma-client-js\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id        String   @id()\n  name      String\n  email     String   @unique\n  password  String\n  token     String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @default(now())\n\n  session Session[]\n  post    Post[]\n\n  @@map(\"users\")\n}\n\nmodel Session {\n  id        String    @id()\n  expiredAt DateTime?\n  user_id   String\n\n  user User @relation(fields: [user_id], references: [id], onDelete: Cascade)\n\n  @@map(\"sessions\")\n}\n\nmodel Post {\n  id        String   @id()\n  title     String\n  content   String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @default(now())\n\n  user_id String\n\n  user User @relation(fields: [user_id], references: [id])\n\n  @@map(\"posts\")\n}\n",
    inlineSchemaHash: "5acd24e025b091d33e0bcedfb64c4b7e9c9db29b1681bcccdd7dc6214ead85e2",
    copyEngine: true
  };
  var fs = import.meta.require("fs");
  config2.dirname = __dirname;
  if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
    const alternativePaths = [
      "node_modules/.prisma/client",
      ".prisma/client"
    ];
    const alternativePath = alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
    }) ?? alternativePaths[0];
    config2.dirname = path.join(process.cwd(), alternativePath);
    config2.isBundled = true;
  }
  config2.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"PostToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Session\":{\"dbName\":\"sessions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiredAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Post\":{\"dbName\":\"posts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PostToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}");
  defineDmmfProperty2(exports.Prisma, config2.runtimeDataModel);
  config2.engineWasm = undefined;
  var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
  warnEnvConflicts2({
    rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
  });
  var PrismaClient = getPrismaClient2(config2);
  exports.PrismaClient = PrismaClient;
  Object.assign(exports, Prisma);
  path.join(__dirname, "libquery_engine-darwin.dylib.node");
  path.join(process.cwd(), "node_modules/.prisma/client/libquery_engine-darwin.dylib.node");
  path.join(__dirname, "schema.prisma");
  path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
});

// node_modules/.prisma/client/default.js
var require_default = __commonJS((exports, module) => {
  module.exports = { ...require_client() };
});

// node_modules/@prisma/client/default.js
var require_default2 = __commonJS((exports, module) => {
  module.exports = {
    ...require_default()
  };
});

// node_modules/logform/format.js
var require_format = __commonJS((exports, module) => {
  class InvalidFormatError extends Error {
    constructor(formatFn) {
      super(`Format functions must be synchronous taking a two arguments: (info, opts)
Found: ${formatFn.toString().split("\n")[0]}\n`);
      Error.captureStackTrace(this, InvalidFormatError);
    }
  }
  module.exports = (formatFn) => {
    if (formatFn.length > 2) {
      throw new InvalidFormatError(formatFn);
    }
    function Format(options = {}) {
      this.options = options;
    }
    Format.prototype.transform = formatFn;
    function createFormatWrap(opts) {
      return new Format(opts);
    }
    createFormatWrap.Format = Format;
    return createFormatWrap;
  };
});

// node_modules/@colors/colors/lib/styles.js
var require_styles = __commonJS((exports, module) => {
  var styles = {};
  module["exports"] = styles;
  var codes = {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],
    brightRed: [91, 39],
    brightGreen: [92, 39],
    brightYellow: [93, 39],
    brightBlue: [94, 39],
    brightMagenta: [95, 39],
    brightCyan: [96, 39],
    brightWhite: [97, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    bgGray: [100, 49],
    bgGrey: [100, 49],
    bgBrightRed: [101, 49],
    bgBrightGreen: [102, 49],
    bgBrightYellow: [103, 49],
    bgBrightBlue: [104, 49],
    bgBrightMagenta: [105, 49],
    bgBrightCyan: [106, 49],
    bgBrightWhite: [107, 49],
    blackBG: [40, 49],
    redBG: [41, 49],
    greenBG: [42, 49],
    yellowBG: [43, 49],
    blueBG: [44, 49],
    magentaBG: [45, 49],
    cyanBG: [46, 49],
    whiteBG: [47, 49]
  };
  Object.keys(codes).forEach(function(key) {
    var val = codes[key];
    var style = styles[key] = [];
    style.open = "\x1B[" + val[0] + "m";
    style.close = "\x1B[" + val[1] + "m";
  });
});

// node_modules/@colors/colors/lib/system/has-flag.js
var require_has_flag = __commonJS((exports, module) => {
  module.exports = function(flag, argv) {
    argv = argv || process.argv || [];
    var terminatorPos = argv.indexOf("--");
    var prefix = /^-{1,2}/.test(flag) ? "" : "--";
    var pos = argv.indexOf(prefix + flag);
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };
});

// node_modules/@colors/colors/lib/system/supports-colors.js
var require_supports_colors = __commonJS((exports, module) => {
  var translateLevel = function(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  };
  var supportsColor = function(stream) {
    if (forceColor === false) {
      return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
    if (stream && !stream.isTTY && forceColor !== true) {
      return 0;
    }
    var min = forceColor ? 1 : 0;
    if (process.platform === "win32") {
      var osRelease = os.release().split(".");
      if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(sign) {
        return sign in env;
      }) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if ("TERM_PROGRAM" in env) {
      var version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Hyper":
          return 3;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    if (env.TERM === "dumb") {
      return min;
    }
    return min;
  };
  var getSupportLevel = function(stream) {
    var level = supportsColor(stream);
    return translateLevel(level);
  };
  var os = import.meta.require("os");
  var hasFlag = require_has_flag();
  var env = process.env;
  var forceColor = undefined;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
    forceColor = false;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = true;
  }
  if ("FORCE_COLOR" in env) {
    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
  }
  module.exports = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel(process.stdout),
    stderr: getSupportLevel(process.stderr)
  };
});

// node_modules/@colors/colors/lib/custom/trap.js
var require_trap = __commonJS((exports, module) => {
  module["exports"] = function runTheTrap(text, options) {
    var result = "";
    text = text || "Run the trap, drop the bass";
    text = text.split("");
    var trap = {
      a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
      b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
      c: ["\xA9", "\u023B", "\u03FE"],
      d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
      e: [
        "\xCB",
        "\u0115",
        "\u018E",
        "\u0258",
        "\u03A3",
        "\u03BE",
        "\u04BC",
        "\u0A6C"
      ],
      f: ["\u04FA"],
      g: ["\u0262"],
      h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
      i: ["\u0F0F"],
      j: ["\u0134"],
      k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
      l: ["\u0139"],
      m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
      n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
      o: [
        "\xD8",
        "\xF5",
        "\xF8",
        "\u01FE",
        "\u0298",
        "\u047A",
        "\u05DD",
        "\u06DD",
        "\u0E4F"
      ],
      p: ["\u01F7", "\u048E"],
      q: ["\u09CD"],
      r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
      s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
      t: ["\u0141", "\u0166", "\u0373"],
      u: ["\u01B1", "\u054D"],
      v: ["\u05D8"],
      w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
      x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
      y: ["\xA5", "\u04B0", "\u04CB"],
      z: ["\u01B5", "\u0240"]
    };
    text.forEach(function(c) {
      c = c.toLowerCase();
      var chars = trap[c] || [" "];
      var rand = Math.floor(Math.random() * chars.length);
      if (typeof trap[c] !== "undefined") {
        result += trap[c][rand];
      } else {
        result += c;
      }
    });
    return result;
  };
});

// node_modules/@colors/colors/lib/custom/zalgo.js
var require_zalgo = __commonJS((exports, module) => {
  module["exports"] = function zalgo(text, options) {
    text = text || "   he is here   ";
    var soul = {
      up: [
        "\u030D",
        "\u030E",
        "\u0304",
        "\u0305",
        "\u033F",
        "\u0311",
        "\u0306",
        "\u0310",
        "\u0352",
        "\u0357",
        "\u0351",
        "\u0307",
        "\u0308",
        "\u030A",
        "\u0342",
        "\u0313",
        "\u0308",
        "\u034A",
        "\u034B",
        "\u034C",
        "\u0303",
        "\u0302",
        "\u030C",
        "\u0350",
        "\u0300",
        "\u0301",
        "\u030B",
        "\u030F",
        "\u0312",
        "\u0313",
        "\u0314",
        "\u033D",
        "\u0309",
        "\u0363",
        "\u0364",
        "\u0365",
        "\u0366",
        "\u0367",
        "\u0368",
        "\u0369",
        "\u036A",
        "\u036B",
        "\u036C",
        "\u036D",
        "\u036E",
        "\u036F",
        "\u033E",
        "\u035B",
        "\u0346",
        "\u031A"
      ],
      down: [
        "\u0316",
        "\u0317",
        "\u0318",
        "\u0319",
        "\u031C",
        "\u031D",
        "\u031E",
        "\u031F",
        "\u0320",
        "\u0324",
        "\u0325",
        "\u0326",
        "\u0329",
        "\u032A",
        "\u032B",
        "\u032C",
        "\u032D",
        "\u032E",
        "\u032F",
        "\u0330",
        "\u0331",
        "\u0332",
        "\u0333",
        "\u0339",
        "\u033A",
        "\u033B",
        "\u033C",
        "\u0345",
        "\u0347",
        "\u0348",
        "\u0349",
        "\u034D",
        "\u034E",
        "\u0353",
        "\u0354",
        "\u0355",
        "\u0356",
        "\u0359",
        "\u035A",
        "\u0323"
      ],
      mid: [
        "\u0315",
        "\u031B",
        "\u0300",
        "\u0301",
        "\u0358",
        "\u0321",
        "\u0322",
        "\u0327",
        "\u0328",
        "\u0334",
        "\u0335",
        "\u0336",
        "\u035C",
        "\u035D",
        "\u035E",
        "\u035F",
        "\u0360",
        "\u0362",
        "\u0338",
        "\u0337",
        "\u0361",
        " \u0489"
      ]
    };
    var all = [].concat(soul.up, soul.down, soul.mid);
    function randomNumber(range) {
      var r = Math.floor(Math.random() * range);
      return r;
    }
    function isChar(character) {
      var bool = false;
      all.filter(function(i) {
        bool = i === character;
      });
      return bool;
    }
    function heComes(text2, options2) {
      var result = "";
      var counts;
      var l;
      options2 = options2 || {};
      options2["up"] = typeof options2["up"] !== "undefined" ? options2["up"] : true;
      options2["mid"] = typeof options2["mid"] !== "undefined" ? options2["mid"] : true;
      options2["down"] = typeof options2["down"] !== "undefined" ? options2["down"] : true;
      options2["size"] = typeof options2["size"] !== "undefined" ? options2["size"] : "maxi";
      text2 = text2.split("");
      for (l in text2) {
        if (isChar(l)) {
          continue;
        }
        result = result + text2[l];
        counts = { up: 0, down: 0, mid: 0 };
        switch (options2.size) {
          case "mini":
            counts.up = randomNumber(8);
            counts.mid = randomNumber(2);
            counts.down = randomNumber(8);
            break;
          case "maxi":
            counts.up = randomNumber(16) + 3;
            counts.mid = randomNumber(4) + 1;
            counts.down = randomNumber(64) + 3;
            break;
          default:
            counts.up = randomNumber(8) + 1;
            counts.mid = randomNumber(6) / 2;
            counts.down = randomNumber(8) + 1;
            break;
        }
        var arr = ["up", "mid", "down"];
        for (var d in arr) {
          var index = arr[d];
          for (var i = 0;i <= counts[index]; i++) {
            if (options2[index]) {
              result = result + soul[index][randomNumber(soul[index].length)];
            }
          }
        }
      }
      return result;
    }
    return heComes(text, options);
  };
});

// node_modules/@colors/colors/lib/maps/america.js
var require_america = __commonJS((exports, module) => {
  module["exports"] = function(colors) {
    return function(letter, i, exploded) {
      if (letter === " ")
        return letter;
      switch (i % 3) {
        case 0:
          return colors.red(letter);
        case 1:
          return colors.white(letter);
        case 2:
          return colors.blue(letter);
      }
    };
  };
});

// node_modules/@colors/colors/lib/maps/zebra.js
var require_zebra = __commonJS((exports, module) => {
  module["exports"] = function(colors) {
    return function(letter, i, exploded) {
      return i % 2 === 0 ? letter : colors.inverse(letter);
    };
  };
});

// node_modules/@colors/colors/lib/maps/rainbow.js
var require_rainbow = __commonJS((exports, module) => {
  module["exports"] = function(colors) {
    var rainbowColors = ["red", "yellow", "green", "blue", "magenta"];
    return function(letter, i, exploded) {
      if (letter === " ") {
        return letter;
      } else {
        return colors[rainbowColors[i++ % rainbowColors.length]](letter);
      }
    };
  };
});

// node_modules/@colors/colors/lib/maps/random.js
var require_random = __commonJS((exports, module) => {
  module["exports"] = function(colors) {
    var available = [
      "underline",
      "inverse",
      "grey",
      "yellow",
      "red",
      "green",
      "blue",
      "white",
      "cyan",
      "magenta",
      "brightYellow",
      "brightRed",
      "brightGreen",
      "brightBlue",
      "brightWhite",
      "brightCyan",
      "brightMagenta"
    ];
    return function(letter, i, exploded) {
      return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 2))]](letter);
    };
  };
});

// node_modules/@colors/colors/lib/colors.js
var require_colors = __commonJS((exports, module) => {
  var build = function(_styles) {
    var builder = function builder() {
      return applyStyle.apply(builder, arguments);
    };
    builder._styles = _styles;
    builder.__proto__ = proto;
    return builder;
  };
  var applyStyle = function() {
    var args = Array.prototype.slice.call(arguments);
    var str = args.map(function(arg) {
      if (arg != null && arg.constructor === String) {
        return arg;
      } else {
        return util2.inspect(arg);
      }
    }).join(" ");
    if (!colors.enabled || !str) {
      return str;
    }
    var newLinesPresent = str.indexOf("\n") != -1;
    var nestedStyles = this._styles;
    var i = nestedStyles.length;
    while (i--) {
      var code = ansiStyles[nestedStyles[i]];
      str = code.open + str.replace(code.closeRe, code.open) + code.close;
      if (newLinesPresent) {
        str = str.replace(newLineRegex, function(match) {
          return code.close + match + code.open;
        });
      }
    }
    return str;
  };
  var init = function() {
    var ret = {};
    Object.keys(styles).forEach(function(name) {
      ret[name] = {
        get: function() {
          return build([name]);
        }
      };
    });
    return ret;
  };
  var colors = {};
  module["exports"] = colors;
  colors.themes = {};
  var util2 = import.meta.require("util");
  var ansiStyles = colors.styles = require_styles();
  var defineProps = Object.defineProperties;
  var newLineRegex = new RegExp(/[\r\n]+/g);
  colors.supportsColor = require_supports_colors().supportsColor;
  if (typeof colors.enabled === "undefined") {
    colors.enabled = colors.supportsColor() !== false;
  }
  colors.enable = function() {
    colors.enabled = true;
  };
  colors.disable = function() {
    colors.enabled = false;
  };
  colors.stripColors = colors.strip = function(str) {
    return ("" + str).replace(/\x1B\[\d+m/g, "");
  };
  var stylize = colors.stylize = function stylize(str, style) {
    if (!colors.enabled) {
      return str + "";
    }
    var styleMap = ansiStyles[style];
    if (!styleMap && style in colors) {
      return colors[style](str);
    }
    return styleMap.open + str + styleMap.close;
  };
  var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
  var escapeStringRegexp = function(str) {
    if (typeof str !== "string") {
      throw new TypeError("Expected a string");
    }
    return str.replace(matchOperatorsRe, "\\$&");
  };
  var styles = function() {
    var ret = {};
    ansiStyles.grey = ansiStyles.gray;
    Object.keys(ansiStyles).forEach(function(key) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      ret[key] = {
        get: function() {
          return build(this._styles.concat(key));
        }
      };
    });
    return ret;
  }();
  var proto = defineProps(function colors() {
  }, styles);
  colors.setTheme = function(theme) {
    if (typeof theme === "string") {
      console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller\'s) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + \'/../themes/generic-logging.js\'); The new syntax looks like colors.setTheme(require(__dirname + \'/../themes/generic-logging.js\'));");
      return;
    }
    for (var style in theme) {
      (function(style2) {
        colors[style2] = function(str) {
          if (typeof theme[style2] === "object") {
            var out = str;
            for (var i in theme[style2]) {
              out = colors[theme[style2][i]](out);
            }
            return out;
          }
          return colors[theme[style2]](str);
        };
      })(style);
    }
  };
  var sequencer = function sequencer(map2, str) {
    var exploded = str.split("");
    exploded = exploded.map(map2);
    return exploded.join("");
  };
  colors.trap = require_trap();
  colors.zalgo = require_zalgo();
  colors.maps = {};
  colors.maps.america = require_america()(colors);
  colors.maps.zebra = require_zebra()(colors);
  colors.maps.rainbow = require_rainbow()(colors);
  colors.maps.random = require_random()(colors);
  for (map in colors.maps) {
    (function(map2) {
      colors[map2] = function(str) {
        return sequencer(colors.maps[map2], str);
      };
    })(map);
  }
  var map;
  defineProps(colors, init());
});

// node_modules/@colors/colors/safe.js
var require_safe = __commonJS((exports, module) => {
  var colors = require_colors();
  module["exports"] = colors;
});

// node_modules/triple-beam/config/cli.js
var require_cli = __commonJS((exports) => {
  exports.levels = {
    error: 0,
    warn: 1,
    help: 2,
    data: 3,
    info: 4,
    debug: 5,
    prompt: 6,
    verbose: 7,
    input: 8,
    silly: 9
  };
  exports.colors = {
    error: "red",
    warn: "yellow",
    help: "cyan",
    data: "grey",
    info: "green",
    debug: "blue",
    prompt: "grey",
    verbose: "cyan",
    input: "grey",
    silly: "magenta"
  };
});

// node_modules/triple-beam/config/npm.js
var require_npm = __commonJS((exports) => {
  exports.levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  };
  exports.colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "green",
    verbose: "cyan",
    debug: "blue",
    silly: "magenta"
  };
});

// node_modules/triple-beam/config/syslog.js
var require_syslog = __commonJS((exports) => {
  exports.levels = {
    emerg: 0,
    alert: 1,
    crit: 2,
    error: 3,
    warning: 4,
    notice: 5,
    info: 6,
    debug: 7
  };
  exports.colors = {
    emerg: "red",
    alert: "yellow",
    crit: "red",
    error: "red",
    warning: "red",
    notice: "yellow",
    info: "green",
    debug: "blue"
  };
});

// node_modules/triple-beam/config/index.js
var require_config = __commonJS((exports) => {
  Object.defineProperty(exports, "cli", {
    value: require_cli()
  });
  Object.defineProperty(exports, "npm", {
    value: require_npm()
  });
  Object.defineProperty(exports, "syslog", {
    value: require_syslog()
  });
});

// node_modules/triple-beam/index.js
var require_triple_beam = __commonJS((exports) => {
  Object.defineProperty(exports, "LEVEL", {
    value: Symbol.for("level")
  });
  Object.defineProperty(exports, "MESSAGE", {
    value: Symbol.for("message")
  });
  Object.defineProperty(exports, "SPLAT", {
    value: Symbol.for("splat")
  });
  Object.defineProperty(exports, "configs", {
    value: require_config()
  });
});

// node_modules/logform/colorize.js
var require_colorize = __commonJS((exports, module) => {
  var colors = require_safe();
  var { LEVEL, MESSAGE } = require_triple_beam();
  colors.enabled = true;
  var hasSpace = /\s+/;

  class Colorizer {
    constructor(opts = {}) {
      if (opts.colors) {
        this.addColors(opts.colors);
      }
      this.options = opts;
    }
    static addColors(clrs) {
      const nextColors = Object.keys(clrs).reduce((acc, level) => {
        acc[level] = hasSpace.test(clrs[level]) ? clrs[level].split(hasSpace) : clrs[level];
        return acc;
      }, {});
      Colorizer.allColors = Object.assign({}, Colorizer.allColors || {}, nextColors);
      return Colorizer.allColors;
    }
    addColors(clrs) {
      return Colorizer.addColors(clrs);
    }
    colorize(lookup, level, message) {
      if (typeof message === "undefined") {
        message = level;
      }
      if (!Array.isArray(Colorizer.allColors[lookup])) {
        return colors[Colorizer.allColors[lookup]](message);
      }
      for (let i = 0, len = Colorizer.allColors[lookup].length;i < len; i++) {
        message = colors[Colorizer.allColors[lookup][i]](message);
      }
      return message;
    }
    transform(info, opts) {
      if (opts.all && typeof info[MESSAGE] === "string") {
        info[MESSAGE] = this.colorize(info[LEVEL], info.level, info[MESSAGE]);
      }
      if (opts.level || opts.all || !opts.message) {
        info.level = this.colorize(info[LEVEL], info.level);
      }
      if (opts.all || opts.message) {
        info.message = this.colorize(info[LEVEL], info.level, info.message);
      }
      return info;
    }
  }
  module.exports = (opts) => new Colorizer(opts);
  module.exports.Colorizer = module.exports.Format = Colorizer;
});

// node_modules/logform/levels.js
var require_levels = __commonJS((exports, module) => {
  var { Colorizer } = require_colorize();
  module.exports = (config2) => {
    Colorizer.addColors(config2.colors || config2);
    return config2;
  };
});

// node_modules/logform/align.js
var require_align = __commonJS((exports, module) => {
  var format = require_format();
  module.exports = format((info) => {
    info.message = `\t${info.message}`;
    return info;
  });
});

// node_modules/logform/errors.js
var require_errors = __commonJS((exports, module) => {
  var format = require_format();
  var { LEVEL, MESSAGE } = require_triple_beam();
  module.exports = format((einfo, { stack, cause }) => {
    if (einfo instanceof Error) {
      const info = Object.assign({}, einfo, {
        level: einfo.level,
        [LEVEL]: einfo[LEVEL] || einfo.level,
        message: einfo.message,
        [MESSAGE]: einfo[MESSAGE] || einfo.message
      });
      if (stack)
        info.stack = einfo.stack;
      if (cause)
        info.cause = einfo.cause;
      return info;
    }
    if (!(einfo.message instanceof Error))
      return einfo;
    const err = einfo.message;
    Object.assign(einfo, err);
    einfo.message = err.message;
    einfo[MESSAGE] = err.message;
    if (stack)
      einfo.stack = err.stack;
    if (cause)
      einfo.cause = err.cause;
    return einfo;
  });
});

// node_modules/logform/pad-levels.js
var require_pad_levels = __commonJS((exports, module) => {
  var { configs, LEVEL, MESSAGE } = require_triple_beam();

  class Padder {
    constructor(opts = { levels: configs.npm.levels }) {
      this.paddings = Padder.paddingForLevels(opts.levels, opts.filler);
      this.options = opts;
    }
    static getLongestLevel(levels) {
      const lvls = Object.keys(levels).map((level) => level.length);
      return Math.max(...lvls);
    }
    static paddingForLevel(level, filler, maxLength) {
      const targetLen = maxLength + 1 - level.length;
      const rep = Math.floor(targetLen / filler.length);
      const padding = `${filler}${filler.repeat(rep)}`;
      return padding.slice(0, targetLen);
    }
    static paddingForLevels(levels, filler = " ") {
      const maxLength = Padder.getLongestLevel(levels);
      return Object.keys(levels).reduce((acc, level) => {
        acc[level] = Padder.paddingForLevel(level, filler, maxLength);
        return acc;
      }, {});
    }
    transform(info, opts) {
      info.message = `${this.paddings[info[LEVEL]]}${info.message}`;
      if (info[MESSAGE]) {
        info[MESSAGE] = `${this.paddings[info[LEVEL]]}${info[MESSAGE]}`;
      }
      return info;
    }
  }
  module.exports = (opts) => new Padder(opts);
  module.exports.Padder = module.exports.Format = Padder;
});

// node_modules/logform/cli.js
var require_cli2 = __commonJS((exports, module) => {
  var { Colorizer } = require_colorize();
  var { Padder } = require_pad_levels();
  var { configs, MESSAGE } = require_triple_beam();

  class CliFormat {
    constructor(opts = {}) {
      if (!opts.levels) {
        opts.levels = configs.cli.levels;
      }
      this.colorizer = new Colorizer(opts);
      this.padder = new Padder(opts);
      this.options = opts;
    }
    transform(info, opts) {
      this.colorizer.transform(this.padder.transform(info, opts), opts);
      info[MESSAGE] = `${info.level}:${info.message}`;
      return info;
    }
  }
  module.exports = (opts) => new CliFormat(opts);
  module.exports.Format = CliFormat;
});

// node_modules/logform/combine.js
var require_combine = __commonJS((exports, module) => {
  var cascade = function(formats) {
    if (!formats.every(isValidFormat)) {
      return;
    }
    return (info) => {
      let obj = info;
      for (let i = 0;i < formats.length; i++) {
        obj = formats[i].transform(obj, formats[i].options);
        if (!obj) {
          return false;
        }
      }
      return obj;
    };
  };
  var isValidFormat = function(fmt) {
    if (typeof fmt.transform !== "function") {
      throw new Error([
        "No transform function found on format. Did you create a format instance?",
        "const myFormat = format(formatFn);",
        "const instance = myFormat();"
      ].join("\n"));
    }
    return true;
  };
  var format = require_format();
  module.exports = (...formats) => {
    const combinedFormat = format(cascade(formats));
    const instance = combinedFormat();
    instance.Format = combinedFormat.Format;
    return instance;
  };
  module.exports.cascade = cascade;
});

// node_modules/safe-stable-stringify/index.js
var require_safe_stable_stringify = __commonJS((exports, module) => {
  var strEscape = function(str) {
    if (str.length < 5000 && !strEscapeSequencesRegExp.test(str)) {
      return `"${str}"`;
    }
    return JSON.stringify(str);
  };
  var sort = function(array, comparator) {
    if (array.length > 200 || comparator) {
      return array.sort(comparator);
    }
    for (let i = 1;i < array.length; i++) {
      const currentValue = array[i];
      let position = i;
      while (position !== 0 && array[position - 1] > currentValue) {
        array[position] = array[position - 1];
        position--;
      }
      array[position] = currentValue;
    }
    return array;
  };
  var isTypedArrayWithEntries = function(value) {
    return typedArrayPrototypeGetSymbolToStringTag.call(value) !== undefined && value.length !== 0;
  };
  var stringifyTypedArray = function(array, separator, maximumBreadth) {
    if (array.length < maximumBreadth) {
      maximumBreadth = array.length;
    }
    const whitespace = separator === "," ? "" : " ";
    let res = `"0":${whitespace}${array[0]}`;
    for (let i = 1;i < maximumBreadth; i++) {
      res += `${separator}"${i}":${whitespace}${array[i]}`;
    }
    return res;
  };
  var getCircularValueOption = function(options) {
    if (hasOwnProperty.call(options, "circularValue")) {
      const circularValue = options.circularValue;
      if (typeof circularValue === "string") {
        return `"${circularValue}"`;
      }
      if (circularValue == null) {
        return circularValue;
      }
      if (circularValue === Error || circularValue === TypeError) {
        return {
          toString() {
            throw new TypeError("Converting circular structure to JSON");
          }
        };
      }
      throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined');
    }
    return '"[Circular]"';
  };
  var getDeterministicOption = function(options) {
    let value;
    if (hasOwnProperty.call(options, "deterministic")) {
      value = options.deterministic;
      if (typeof value !== "boolean" && typeof value !== "function") {
        throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');
      }
    }
    return value === undefined ? true : value;
  };
  var getBooleanOption = function(options, key) {
    let value;
    if (hasOwnProperty.call(options, key)) {
      value = options[key];
      if (typeof value !== "boolean") {
        throw new TypeError(`The "${key}" argument must be of type boolean`);
      }
    }
    return value === undefined ? true : value;
  };
  var getPositiveIntegerOption = function(options, key) {
    let value;
    if (hasOwnProperty.call(options, key)) {
      value = options[key];
      if (typeof value !== "number") {
        throw new TypeError(`The "${key}" argument must be of type number`);
      }
      if (!Number.isInteger(value)) {
        throw new TypeError(`The "${key}" argument must be an integer`);
      }
      if (value < 1) {
        throw new RangeError(`The "${key}" argument must be >= 1`);
      }
    }
    return value === undefined ? Infinity : value;
  };
  var getItemCount = function(number) {
    if (number === 1) {
      return "1 item";
    }
    return `${number} items`;
  };
  var getUniqueReplacerSet = function(replacerArray) {
    const replacerSet = new Set;
    for (const value of replacerArray) {
      if (typeof value === "string" || typeof value === "number") {
        replacerSet.add(String(value));
      }
    }
    return replacerSet;
  };
  var getStrictOption = function(options) {
    if (hasOwnProperty.call(options, "strict")) {
      const value = options.strict;
      if (typeof value !== "boolean") {
        throw new TypeError('The "strict" argument must be of type boolean');
      }
      if (value) {
        return (value2) => {
          let message = `Object can not safely be stringified. Received type ${typeof value2}`;
          if (typeof value2 !== "function")
            message += ` (${value2.toString()})`;
          throw new Error(message);
        };
      }
    }
  };
  var configure = function(options) {
    options = { ...options };
    const fail = getStrictOption(options);
    if (fail) {
      if (options.bigint === undefined) {
        options.bigint = false;
      }
      if (!("circularValue" in options)) {
        options.circularValue = Error;
      }
    }
    const circularValue = getCircularValueOption(options);
    const bigint = getBooleanOption(options, "bigint");
    const deterministic = getDeterministicOption(options);
    const comparator = typeof deterministic === "function" ? deterministic : undefined;
    const maximumDepth = getPositiveIntegerOption(options, "maximumDepth");
    const maximumBreadth = getPositiveIntegerOption(options, "maximumBreadth");
    function stringifyFnReplacer(key, parent, stack, replacer, spacer, indentation) {
      let value = parent[key];
      if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
        value = value.toJSON(key);
      }
      value = replacer.call(parent, key, value);
      switch (typeof value) {
        case "string":
          return strEscape(value);
        case "object": {
          if (value === null) {
            return "null";
          }
          if (stack.indexOf(value) !== -1) {
            return circularValue;
          }
          let res = "";
          let join2 = ",";
          const originalIndentation = indentation;
          if (Array.isArray(value)) {
            if (value.length === 0) {
              return "[]";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Array]"';
            }
            stack.push(value);
            if (spacer !== "") {
              indentation += spacer;
              res += `\n${indentation}`;
              join2 = `,\n${indentation}`;
            }
            const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
            let i = 0;
            for (;i < maximumValuesToStringify - 1; i++) {
              const tmp2 = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
              res += tmp2 !== undefined ? tmp2 : "null";
              res += join2;
            }
            const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
            res += tmp !== undefined ? tmp : "null";
            if (value.length - 1 > maximumBreadth) {
              const removedKeys = value.length - maximumBreadth - 1;
              res += `${join2}"... ${getItemCount(removedKeys)} not stringified"`;
            }
            if (spacer !== "") {
              res += `\n${originalIndentation}`;
            }
            stack.pop();
            return `[${res}]`;
          }
          let keys = Object.keys(value);
          const keyLength = keys.length;
          if (keyLength === 0) {
            return "{}";
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Object]"';
          }
          let whitespace = "";
          let separator = "";
          if (spacer !== "") {
            indentation += spacer;
            join2 = `,\n${indentation}`;
            whitespace = " ";
          }
          const maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
          if (deterministic && !isTypedArrayWithEntries(value)) {
            keys = sort(keys, comparator);
          }
          stack.push(value);
          for (let i = 0;i < maximumPropertiesToStringify; i++) {
            const key2 = keys[i];
            const tmp = stringifyFnReplacer(key2, value, stack, replacer, spacer, indentation);
            if (tmp !== undefined) {
              res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
              separator = join2;
            }
          }
          if (keyLength > maximumBreadth) {
            const removedKeys = keyLength - maximumBreadth;
            res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`;
            separator = join2;
          }
          if (spacer !== "" && separator.length > 1) {
            res = `\n${indentation}${res}\n${originalIndentation}`;
          }
          stack.pop();
          return `{${res}}`;
        }
        case "number":
          return isFinite(value) ? String(value) : fail ? fail(value) : "null";
        case "boolean":
          return value === true ? "true" : "false";
        case "undefined":
          return;
        case "bigint":
          if (bigint) {
            return String(value);
          }
        default:
          return fail ? fail(value) : undefined;
      }
    }
    function stringifyArrayReplacer(key, value, stack, replacer, spacer, indentation) {
      if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
        value = value.toJSON(key);
      }
      switch (typeof value) {
        case "string":
          return strEscape(value);
        case "object": {
          if (value === null) {
            return "null";
          }
          if (stack.indexOf(value) !== -1) {
            return circularValue;
          }
          const originalIndentation = indentation;
          let res = "";
          let join2 = ",";
          if (Array.isArray(value)) {
            if (value.length === 0) {
              return "[]";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Array]"';
            }
            stack.push(value);
            if (spacer !== "") {
              indentation += spacer;
              res += `\n${indentation}`;
              join2 = `,\n${indentation}`;
            }
            const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
            let i = 0;
            for (;i < maximumValuesToStringify - 1; i++) {
              const tmp2 = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
              res += tmp2 !== undefined ? tmp2 : "null";
              res += join2;
            }
            const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
            res += tmp !== undefined ? tmp : "null";
            if (value.length - 1 > maximumBreadth) {
              const removedKeys = value.length - maximumBreadth - 1;
              res += `${join2}"... ${getItemCount(removedKeys)} not stringified"`;
            }
            if (spacer !== "") {
              res += `\n${originalIndentation}`;
            }
            stack.pop();
            return `[${res}]`;
          }
          stack.push(value);
          let whitespace = "";
          if (spacer !== "") {
            indentation += spacer;
            join2 = `,\n${indentation}`;
            whitespace = " ";
          }
          let separator = "";
          for (const key2 of replacer) {
            const tmp = stringifyArrayReplacer(key2, value[key2], stack, replacer, spacer, indentation);
            if (tmp !== undefined) {
              res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
              separator = join2;
            }
          }
          if (spacer !== "" && separator.length > 1) {
            res = `\n${indentation}${res}\n${originalIndentation}`;
          }
          stack.pop();
          return `{${res}}`;
        }
        case "number":
          return isFinite(value) ? String(value) : fail ? fail(value) : "null";
        case "boolean":
          return value === true ? "true" : "false";
        case "undefined":
          return;
        case "bigint":
          if (bigint) {
            return String(value);
          }
        default:
          return fail ? fail(value) : undefined;
      }
    }
    function stringifyIndent(key, value, stack, spacer, indentation) {
      switch (typeof value) {
        case "string":
          return strEscape(value);
        case "object": {
          if (value === null) {
            return "null";
          }
          if (typeof value.toJSON === "function") {
            value = value.toJSON(key);
            if (typeof value !== "object") {
              return stringifyIndent(key, value, stack, spacer, indentation);
            }
            if (value === null) {
              return "null";
            }
          }
          if (stack.indexOf(value) !== -1) {
            return circularValue;
          }
          const originalIndentation = indentation;
          if (Array.isArray(value)) {
            if (value.length === 0) {
              return "[]";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Array]"';
            }
            stack.push(value);
            indentation += spacer;
            let res2 = `\n${indentation}`;
            const join3 = `,\n${indentation}`;
            const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
            let i = 0;
            for (;i < maximumValuesToStringify - 1; i++) {
              const tmp2 = stringifyIndent(String(i), value[i], stack, spacer, indentation);
              res2 += tmp2 !== undefined ? tmp2 : "null";
              res2 += join3;
            }
            const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation);
            res2 += tmp !== undefined ? tmp : "null";
            if (value.length - 1 > maximumBreadth) {
              const removedKeys = value.length - maximumBreadth - 1;
              res2 += `${join3}"... ${getItemCount(removedKeys)} not stringified"`;
            }
            res2 += `\n${originalIndentation}`;
            stack.pop();
            return `[${res2}]`;
          }
          let keys = Object.keys(value);
          const keyLength = keys.length;
          if (keyLength === 0) {
            return "{}";
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Object]"';
          }
          indentation += spacer;
          const join2 = `,\n${indentation}`;
          let res = "";
          let separator = "";
          let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
          if (isTypedArrayWithEntries(value)) {
            res += stringifyTypedArray(value, join2, maximumBreadth);
            keys = keys.slice(value.length);
            maximumPropertiesToStringify -= value.length;
            separator = join2;
          }
          if (deterministic) {
            keys = sort(keys, comparator);
          }
          stack.push(value);
          for (let i = 0;i < maximumPropertiesToStringify; i++) {
            const key2 = keys[i];
            const tmp = stringifyIndent(key2, value[key2], stack, spacer, indentation);
            if (tmp !== undefined) {
              res += `${separator}${strEscape(key2)}: ${tmp}`;
              separator = join2;
            }
          }
          if (keyLength > maximumBreadth) {
            const removedKeys = keyLength - maximumBreadth;
            res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`;
            separator = join2;
          }
          if (separator !== "") {
            res = `\n${indentation}${res}\n${originalIndentation}`;
          }
          stack.pop();
          return `{${res}}`;
        }
        case "number":
          return isFinite(value) ? String(value) : fail ? fail(value) : "null";
        case "boolean":
          return value === true ? "true" : "false";
        case "undefined":
          return;
        case "bigint":
          if (bigint) {
            return String(value);
          }
        default:
          return fail ? fail(value) : undefined;
      }
    }
    function stringifySimple(key, value, stack) {
      switch (typeof value) {
        case "string":
          return strEscape(value);
        case "object": {
          if (value === null) {
            return "null";
          }
          if (typeof value.toJSON === "function") {
            value = value.toJSON(key);
            if (typeof value !== "object") {
              return stringifySimple(key, value, stack);
            }
            if (value === null) {
              return "null";
            }
          }
          if (stack.indexOf(value) !== -1) {
            return circularValue;
          }
          let res = "";
          const hasLength = value.length !== undefined;
          if (hasLength && Array.isArray(value)) {
            if (value.length === 0) {
              return "[]";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Array]"';
            }
            stack.push(value);
            const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
            let i = 0;
            for (;i < maximumValuesToStringify - 1; i++) {
              const tmp2 = stringifySimple(String(i), value[i], stack);
              res += tmp2 !== undefined ? tmp2 : "null";
              res += ",";
            }
            const tmp = stringifySimple(String(i), value[i], stack);
            res += tmp !== undefined ? tmp : "null";
            if (value.length - 1 > maximumBreadth) {
              const removedKeys = value.length - maximumBreadth - 1;
              res += `,"... ${getItemCount(removedKeys)} not stringified"`;
            }
            stack.pop();
            return `[${res}]`;
          }
          let keys = Object.keys(value);
          const keyLength = keys.length;
          if (keyLength === 0) {
            return "{}";
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Object]"';
          }
          let separator = "";
          let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
          if (hasLength && isTypedArrayWithEntries(value)) {
            res += stringifyTypedArray(value, ",", maximumBreadth);
            keys = keys.slice(value.length);
            maximumPropertiesToStringify -= value.length;
            separator = ",";
          }
          if (deterministic) {
            keys = sort(keys, comparator);
          }
          stack.push(value);
          for (let i = 0;i < maximumPropertiesToStringify; i++) {
            const key2 = keys[i];
            const tmp = stringifySimple(key2, value[key2], stack);
            if (tmp !== undefined) {
              res += `${separator}${strEscape(key2)}:${tmp}`;
              separator = ",";
            }
          }
          if (keyLength > maximumBreadth) {
            const removedKeys = keyLength - maximumBreadth;
            res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`;
          }
          stack.pop();
          return `{${res}}`;
        }
        case "number":
          return isFinite(value) ? String(value) : fail ? fail(value) : "null";
        case "boolean":
          return value === true ? "true" : "false";
        case "undefined":
          return;
        case "bigint":
          if (bigint) {
            return String(value);
          }
        default:
          return fail ? fail(value) : undefined;
      }
    }
    function stringify2(value, replacer, space) {
      if (arguments.length > 1) {
        let spacer = "";
        if (typeof space === "number") {
          spacer = " ".repeat(Math.min(space, 10));
        } else if (typeof space === "string") {
          spacer = space.slice(0, 10);
        }
        if (replacer != null) {
          if (typeof replacer === "function") {
            return stringifyFnReplacer("", { "": value }, [], replacer, spacer, "");
          }
          if (Array.isArray(replacer)) {
            return stringifyArrayReplacer("", value, [], getUniqueReplacerSet(replacer), spacer, "");
          }
        }
        if (spacer.length !== 0) {
          return stringifyIndent("", value, [], spacer, "");
        }
      }
      return stringifySimple("", value, []);
    }
    return stringify2;
  };
  var { hasOwnProperty } = Object.prototype;
  var stringify = configure();
  stringify.configure = configure;
  stringify.stringify = stringify;
  stringify.default = stringify;
  exports.stringify = stringify;
  exports.configure = configure;
  module.exports = stringify;
  var strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;
  var typedArrayPrototypeGetSymbolToStringTag = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)), Symbol.toStringTag).get;
});

// node_modules/logform/json.js
var require_json = __commonJS((exports, module) => {
  var replacer = function(key, value) {
    if (typeof value === "bigint")
      return value.toString();
    return value;
  };
  var format = require_format();
  var { MESSAGE } = require_triple_beam();
  var stringify = require_safe_stable_stringify();
  module.exports = format((info, opts) => {
    const jsonStringify = stringify.configure(opts);
    info[MESSAGE] = jsonStringify(info, opts.replacer || replacer, opts.space);
    return info;
  });
});

// node_modules/logform/label.js
var require_label = __commonJS((exports, module) => {
  var format = require_format();
  module.exports = format((info, opts) => {
    if (opts.message) {
      info.message = `[${opts.label}] ${info.message}`;
      return info;
    }
    info.label = opts.label;
    return info;
  });
});

// node_modules/logform/logstash.js
var require_logstash = __commonJS((exports, module) => {
  var format = require_format();
  var { MESSAGE } = require_triple_beam();
  var jsonStringify = require_safe_stable_stringify();
  module.exports = format((info) => {
    const logstash = {};
    if (info.message) {
      logstash["@message"] = info.message;
      delete info.message;
    }
    if (info.timestamp) {
      logstash["@timestamp"] = info.timestamp;
      delete info.timestamp;
    }
    logstash["@fields"] = info;
    info[MESSAGE] = jsonStringify(logstash);
    return info;
  });
});

// node_modules/logform/metadata.js
var require_metadata = __commonJS((exports, module) => {
  var fillExcept = function(info, fillExceptKeys, metadataKey) {
    const savedKeys = fillExceptKeys.reduce((acc, key) => {
      acc[key] = info[key];
      delete info[key];
      return acc;
    }, {});
    const metadata = Object.keys(info).reduce((acc, key) => {
      acc[key] = info[key];
      delete info[key];
      return acc;
    }, {});
    Object.assign(info, savedKeys, {
      [metadataKey]: metadata
    });
    return info;
  };
  var fillWith = function(info, fillWithKeys, metadataKey) {
    info[metadataKey] = fillWithKeys.reduce((acc, key) => {
      acc[key] = info[key];
      delete info[key];
      return acc;
    }, {});
    return info;
  };
  var format = require_format();
  module.exports = format((info, opts = {}) => {
    let metadataKey = "metadata";
    if (opts.key) {
      metadataKey = opts.key;
    }
    let fillExceptKeys = [];
    if (!opts.fillExcept && !opts.fillWith) {
      fillExceptKeys.push("level");
      fillExceptKeys.push("message");
    }
    if (opts.fillExcept) {
      fillExceptKeys = opts.fillExcept;
    }
    if (fillExceptKeys.length > 0) {
      return fillExcept(info, fillExceptKeys, metadataKey);
    }
    if (opts.fillWith) {
      return fillWith(info, opts.fillWith, metadataKey);
    }
    return info;
  });
});

// node_modules/ms/index.js
var require_ms = __commonJS((exports, module) => {
  var parse = function(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "weeks":
      case "week":
      case "w":
        return n * w;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return;
    }
  };
  var fmtShort = function(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
      return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
      return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
      return Math.round(ms / s) + "s";
    }
    return ms + "ms";
  };
  var fmtLong = function(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
      return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
      return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
      return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
  };
  var plural = function(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
  };
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
});

// node_modules/logform/ms.js
var require_ms2 = __commonJS((exports, module) => {
  var format = require_format();
  var ms = require_ms();
  module.exports = format((info) => {
    const curr = +new Date;
    exports.diff = curr - (exports.prevTime || curr);
    exports.prevTime = curr;
    info.ms = `+${ms(exports.diff)}`;
    return info;
  });
});

// node_modules/logform/pretty-print.js
var require_pretty_print = __commonJS((exports, module) => {
  var inspect = import.meta.require("util").inspect;
  var format = require_format();
  var { LEVEL, MESSAGE, SPLAT } = require_triple_beam();
  module.exports = format((info, opts = {}) => {
    const stripped = Object.assign({}, info);
    delete stripped[LEVEL];
    delete stripped[MESSAGE];
    delete stripped[SPLAT];
    info[MESSAGE] = inspect(stripped, false, opts.depth || null, opts.colorize);
    return info;
  });
});

// node_modules/logform/printf.js
var require_printf = __commonJS((exports, module) => {
  var { MESSAGE } = require_triple_beam();

  class Printf {
    constructor(templateFn) {
      this.template = templateFn;
    }
    transform(info) {
      info[MESSAGE] = this.template(info);
      return info;
    }
  }
  module.exports = (opts) => new Printf(opts);
  module.exports.Printf = module.exports.Format = Printf;
});

// node_modules/logform/simple.js
var require_simple = __commonJS((exports, module) => {
  var format = require_format();
  var { MESSAGE } = require_triple_beam();
  var jsonStringify = require_safe_stable_stringify();
  module.exports = format((info) => {
    const stringifiedRest = jsonStringify(Object.assign({}, info, {
      level: undefined,
      message: undefined,
      splat: undefined
    }));
    const padding = info.padding && info.padding[info.level] || "";
    if (stringifiedRest !== "{}") {
      info[MESSAGE] = `${info.level}:${padding} ${info.message} ${stringifiedRest}`;
    } else {
      info[MESSAGE] = `${info.level}:${padding} ${info.message}`;
    }
    return info;
  });
});

// node_modules/logform/splat.js
var require_splat = __commonJS((exports, module) => {
  var util2 = import.meta.require("util");
  var { SPLAT } = require_triple_beam();
  var formatRegExp = /%[scdjifoO%]/g;
  var escapedPercent = /%%/g;

  class Splatter {
    constructor(opts) {
      this.options = opts;
    }
    _splat(info, tokens) {
      const msg = info.message;
      const splat = info[SPLAT] || info.splat || [];
      const percents = msg.match(escapedPercent);
      const escapes = percents && percents.length || 0;
      const expectedSplat = tokens.length - escapes;
      const extraSplat = expectedSplat - splat.length;
      const metas = extraSplat < 0 ? splat.splice(extraSplat, -1 * extraSplat) : [];
      const metalen = metas.length;
      if (metalen) {
        for (let i = 0;i < metalen; i++) {
          Object.assign(info, metas[i]);
        }
      }
      info.message = util2.format(msg, ...splat);
      return info;
    }
    transform(info) {
      const msg = info.message;
      const splat = info[SPLAT] || info.splat;
      if (!splat || !splat.length) {
        return info;
      }
      const tokens = msg && msg.match && msg.match(formatRegExp);
      if (!tokens && (splat || splat.length)) {
        const metas = splat.length > 1 ? splat.splice(0) : splat;
        const metalen = metas.length;
        if (metalen) {
          for (let i = 0;i < metalen; i++) {
            Object.assign(info, metas[i]);
          }
        }
        return info;
      }
      if (tokens) {
        return this._splat(info, tokens);
      }
      return info;
    }
  }
  module.exports = (opts) => new Splatter(opts);
});

// node_modules/fecha/lib/fecha.umd.js
var require_fecha_umd = __commonJS((exports, module) => {
  (function(global2, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global2.fecha = {});
  })(exports, function(exports2) {
    var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
    var twoDigitsOptional = "\\d\\d?";
    var twoDigits = "\\d\\d";
    var threeDigits = "\\d{3}";
    var fourDigits = "\\d{4}";
    var word = "[^\\s]+";
    var literal = /\[([^]*?)\]/gm;
    function shorten(arr, sLen) {
      var newArr = [];
      for (var i = 0, len = arr.length;i < len; i++) {
        newArr.push(arr[i].substr(0, sLen));
      }
      return newArr;
    }
    var monthUpdate = function(arrName) {
      return function(v, i18n) {
        var lowerCaseArr = i18n[arrName].map(function(v2) {
          return v2.toLowerCase();
        });
        var index = lowerCaseArr.indexOf(v.toLowerCase());
        if (index > -1) {
          return index;
        }
        return null;
      };
    };
    function assign(origObj) {
      var args = [];
      for (var _i = 1;_i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      for (var _a = 0, args_1 = args;_a < args_1.length; _a++) {
        var obj = args_1[_a];
        for (var key in obj) {
          origObj[key] = obj[key];
        }
      }
      return origObj;
    }
    var dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var monthNamesShort = shorten(monthNames, 3);
    var dayNamesShort = shorten(dayNames, 3);
    var defaultI18n = {
      dayNamesShort,
      dayNames,
      monthNamesShort,
      monthNames,
      amPm: ["am", "pm"],
      DoFn: function(dayOfMonth) {
        return dayOfMonth + ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3 ? 0 : (dayOfMonth - dayOfMonth % 10 !== 10 ? 1 : 0) * dayOfMonth % 10];
      }
    };
    var globalI18n = assign({}, defaultI18n);
    var setGlobalDateI18n = function(i18n) {
      return globalI18n = assign(globalI18n, i18n);
    };
    var regexEscape = function(str) {
      return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
    };
    var pad = function(val, len) {
      if (len === undefined) {
        len = 2;
      }
      val = String(val);
      while (val.length < len) {
        val = "0" + val;
      }
      return val;
    };
    var formatFlags = {
      D: function(dateObj) {
        return String(dateObj.getDate());
      },
      DD: function(dateObj) {
        return pad(dateObj.getDate());
      },
      Do: function(dateObj, i18n) {
        return i18n.DoFn(dateObj.getDate());
      },
      d: function(dateObj) {
        return String(dateObj.getDay());
      },
      dd: function(dateObj) {
        return pad(dateObj.getDay());
      },
      ddd: function(dateObj, i18n) {
        return i18n.dayNamesShort[dateObj.getDay()];
      },
      dddd: function(dateObj, i18n) {
        return i18n.dayNames[dateObj.getDay()];
      },
      M: function(dateObj) {
        return String(dateObj.getMonth() + 1);
      },
      MM: function(dateObj) {
        return pad(dateObj.getMonth() + 1);
      },
      MMM: function(dateObj, i18n) {
        return i18n.monthNamesShort[dateObj.getMonth()];
      },
      MMMM: function(dateObj, i18n) {
        return i18n.monthNames[dateObj.getMonth()];
      },
      YY: function(dateObj) {
        return pad(String(dateObj.getFullYear()), 4).substr(2);
      },
      YYYY: function(dateObj) {
        return pad(dateObj.getFullYear(), 4);
      },
      h: function(dateObj) {
        return String(dateObj.getHours() % 12 || 12);
      },
      hh: function(dateObj) {
        return pad(dateObj.getHours() % 12 || 12);
      },
      H: function(dateObj) {
        return String(dateObj.getHours());
      },
      HH: function(dateObj) {
        return pad(dateObj.getHours());
      },
      m: function(dateObj) {
        return String(dateObj.getMinutes());
      },
      mm: function(dateObj) {
        return pad(dateObj.getMinutes());
      },
      s: function(dateObj) {
        return String(dateObj.getSeconds());
      },
      ss: function(dateObj) {
        return pad(dateObj.getSeconds());
      },
      S: function(dateObj) {
        return String(Math.round(dateObj.getMilliseconds() / 100));
      },
      SS: function(dateObj) {
        return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
      },
      SSS: function(dateObj) {
        return pad(dateObj.getMilliseconds(), 3);
      },
      a: function(dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
      },
      A: function(dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
      },
      ZZ: function(dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60) * 100 + Math.abs(offset) % 60, 4);
      },
      Z: function(dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2) + ":" + pad(Math.abs(offset) % 60, 2);
      }
    };
    var monthParse = function(v) {
      return +v - 1;
    };
    var emptyDigits = [null, twoDigitsOptional];
    var emptyWord = [null, word];
    var amPm = [
      "isPm",
      word,
      function(v, i18n) {
        var val = v.toLowerCase();
        if (val === i18n.amPm[0]) {
          return 0;
        } else if (val === i18n.amPm[1]) {
          return 1;
        }
        return null;
      }
    ];
    var timezoneOffset = [
      "timezoneOffset",
      "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
      function(v) {
        var parts = (v + "").match(/([+-]|\d\d)/gi);
        if (parts) {
          var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
          return parts[0] === "+" ? minutes : -minutes;
        }
        return 0;
      }
    ];
    var parseFlags = {
      D: ["day", twoDigitsOptional],
      DD: ["day", twoDigits],
      Do: ["day", twoDigitsOptional + word, function(v) {
        return parseInt(v, 10);
      }],
      M: ["month", twoDigitsOptional, monthParse],
      MM: ["month", twoDigits, monthParse],
      YY: [
        "year",
        twoDigits,
        function(v) {
          var now = new Date;
          var cent = +("" + now.getFullYear()).substr(0, 2);
          return +("" + (+v > 68 ? cent - 1 : cent) + v);
        }
      ],
      h: ["hour", twoDigitsOptional, undefined, "isPm"],
      hh: ["hour", twoDigits, undefined, "isPm"],
      H: ["hour", twoDigitsOptional],
      HH: ["hour", twoDigits],
      m: ["minute", twoDigitsOptional],
      mm: ["minute", twoDigits],
      s: ["second", twoDigitsOptional],
      ss: ["second", twoDigits],
      YYYY: ["year", fourDigits],
      S: ["millisecond", "\\d", function(v) {
        return +v * 100;
      }],
      SS: ["millisecond", twoDigits, function(v) {
        return +v * 10;
      }],
      SSS: ["millisecond", threeDigits],
      d: emptyDigits,
      dd: emptyDigits,
      ddd: emptyWord,
      dddd: emptyWord,
      MMM: ["month", word, monthUpdate("monthNamesShort")],
      MMMM: ["month", word, monthUpdate("monthNames")],
      a: amPm,
      A: amPm,
      ZZ: timezoneOffset,
      Z: timezoneOffset
    };
    var globalMasks = {
      default: "ddd MMM DD YYYY HH:mm:ss",
      shortDate: "M/D/YY",
      mediumDate: "MMM D, YYYY",
      longDate: "MMMM D, YYYY",
      fullDate: "dddd, MMMM D, YYYY",
      isoDate: "YYYY-MM-DD",
      isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
      shortTime: "HH:mm",
      mediumTime: "HH:mm:ss",
      longTime: "HH:mm:ss.SSS"
    };
    var setGlobalDateMasks = function(masks) {
      return assign(globalMasks, masks);
    };
    var format = function(dateObj, mask, i18n) {
      if (mask === undefined) {
        mask = globalMasks["default"];
      }
      if (i18n === undefined) {
        i18n = {};
      }
      if (typeof dateObj === "number") {
        dateObj = new Date(dateObj);
      }
      if (Object.prototype.toString.call(dateObj) !== "[object Date]" || isNaN(dateObj.getTime())) {
        throw new Error("Invalid Date pass to format");
      }
      mask = globalMasks[mask] || mask;
      var literals = [];
      mask = mask.replace(literal, function($0, $1) {
        literals.push($1);
        return "@@@";
      });
      var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
      mask = mask.replace(token, function($0) {
        return formatFlags[$0](dateObj, combinedI18nSettings);
      });
      return mask.replace(/@@@/g, function() {
        return literals.shift();
      });
    };
    function parse(dateStr, format2, i18n) {
      if (i18n === undefined) {
        i18n = {};
      }
      if (typeof format2 !== "string") {
        throw new Error("Invalid format in fecha parse");
      }
      format2 = globalMasks[format2] || format2;
      if (dateStr.length > 1000) {
        return null;
      }
      var today = new Date;
      var dateInfo = {
        year: today.getFullYear(),
        month: 0,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        isPm: null,
        timezoneOffset: null
      };
      var parseInfo = [];
      var literals = [];
      var newFormat = format2.replace(literal, function($0, $1) {
        literals.push(regexEscape($1));
        return "@@@";
      });
      var specifiedFields = {};
      var requiredFields = {};
      newFormat = regexEscape(newFormat).replace(token, function($0) {
        var info = parseFlags[$0];
        var field2 = info[0], regex = info[1], requiredField = info[3];
        if (specifiedFields[field2]) {
          throw new Error("Invalid format. " + field2 + " specified twice in format");
        }
        specifiedFields[field2] = true;
        if (requiredField) {
          requiredFields[requiredField] = true;
        }
        parseInfo.push(info);
        return "(" + regex + ")";
      });
      Object.keys(requiredFields).forEach(function(field2) {
        if (!specifiedFields[field2]) {
          throw new Error("Invalid format. " + field2 + " is required in specified format");
        }
      });
      newFormat = newFormat.replace(/@@@/g, function() {
        return literals.shift();
      });
      var matches = dateStr.match(new RegExp(newFormat, "i"));
      if (!matches) {
        return null;
      }
      var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
      for (var i = 1;i < matches.length; i++) {
        var _a = parseInfo[i - 1], field = _a[0], parser = _a[2];
        var value = parser ? parser(matches[i], combinedI18nSettings) : +matches[i];
        if (value == null) {
          return null;
        }
        dateInfo[field] = value;
      }
      if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
        dateInfo.hour = +dateInfo.hour + 12;
      } else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
        dateInfo.hour = 0;
      }
      var dateTZ;
      if (dateInfo.timezoneOffset == null) {
        dateTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
        var validateFields = [
          ["month", "getMonth"],
          ["day", "getDate"],
          ["hour", "getHours"],
          ["minute", "getMinutes"],
          ["second", "getSeconds"]
        ];
        for (var i = 0, len = validateFields.length;i < len; i++) {
          if (specifiedFields[validateFields[i][0]] && dateInfo[validateFields[i][0]] !== dateTZ[validateFields[i][1]]()) {
            return null;
          }
        }
      } else {
        dateTZ = new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
        if (dateInfo.month > 11 || dateInfo.month < 0 || dateInfo.day > 31 || dateInfo.day < 1 || dateInfo.hour > 23 || dateInfo.hour < 0 || dateInfo.minute > 59 || dateInfo.minute < 0 || dateInfo.second > 59 || dateInfo.second < 0) {
          return null;
        }
      }
      return dateTZ;
    }
    var fecha = {
      format,
      parse,
      defaultI18n,
      setGlobalDateI18n,
      setGlobalDateMasks
    };
    exports2.assign = assign;
    exports2.default = fecha;
    exports2.format = format;
    exports2.parse = parse;
    exports2.defaultI18n = defaultI18n;
    exports2.setGlobalDateI18n = setGlobalDateI18n;
    exports2.setGlobalDateMasks = setGlobalDateMasks;
    Object.defineProperty(exports2, "__esModule", { value: true });
  });
});

// node_modules/logform/timestamp.js
var require_timestamp = __commonJS((exports, module) => {
  var fecha = require_fecha_umd();
  var format = require_format();
  module.exports = format((info, opts = {}) => {
    if (opts.format) {
      info.timestamp = typeof opts.format === "function" ? opts.format() : fecha.format(new Date, opts.format);
    }
    if (!info.timestamp) {
      info.timestamp = new Date().toISOString();
    }
    if (opts.alias) {
      info[opts.alias] = info.timestamp;
    }
    return info;
  });
});

// node_modules/logform/uncolorize.js
var require_uncolorize = __commonJS((exports, module) => {
  var colors = require_safe();
  var format = require_format();
  var { MESSAGE } = require_triple_beam();
  module.exports = format((info, opts) => {
    if (opts.level !== false) {
      info.level = colors.strip(info.level);
    }
    if (opts.message !== false) {
      info.message = colors.strip(String(info.message));
    }
    if (opts.raw !== false && info[MESSAGE]) {
      info[MESSAGE] = colors.strip(String(info[MESSAGE]));
    }
    return info;
  });
});

// node_modules/logform/index.js
var require_logform = __commonJS((exports) => {
  var exposeFormat = function(name, requireFormat) {
    Object.defineProperty(format, name, {
      get() {
        return requireFormat();
      },
      configurable: true
    });
  };
  var format = exports.format = require_format();
  exports.levels = require_levels();
  exposeFormat("align", function() {
    return require_align();
  });
  exposeFormat("errors", function() {
    return require_errors();
  });
  exposeFormat("cli", function() {
    return require_cli2();
  });
  exposeFormat("combine", function() {
    return require_combine();
  });
  exposeFormat("colorize", function() {
    return require_colorize();
  });
  exposeFormat("json", function() {
    return require_json();
  });
  exposeFormat("label", function() {
    return require_label();
  });
  exposeFormat("logstash", function() {
    return require_logstash();
  });
  exposeFormat("metadata", function() {
    return require_metadata();
  });
  exposeFormat("ms", function() {
    return require_ms2();
  });
  exposeFormat("padLevels", function() {
    return require_pad_levels();
  });
  exposeFormat("prettyPrint", function() {
    return require_pretty_print();
  });
  exposeFormat("printf", function() {
    return require_printf();
  });
  exposeFormat("simple", function() {
    return require_simple();
  });
  exposeFormat("splat", function() {
    return require_splat();
  });
  exposeFormat("timestamp", function() {
    return require_timestamp();
  });
  exposeFormat("uncolorize", function() {
    return require_uncolorize();
  });
});

// node_modules/winston/lib/winston/common.js
var require_common = __commonJS((exports) => {
  var { format } = import.meta.require("util");
  exports.warn = {
    deprecated(prop) {
      return () => {
        throw new Error(format("{ %s } was removed in winston@3.0.0.", prop));
      };
    },
    useFormat(prop) {
      return () => {
        throw new Error([
          format("{ %s } was removed in winston@3.0.0.", prop),
          "Use a custom winston.format = winston.format(function) instead."
        ].join("\n"));
      };
    },
    forFunctions(obj, type, props) {
      props.forEach((prop) => {
        obj[prop] = exports.warn[type](prop);
      });
    },
    forProperties(obj, type, props) {
      props.forEach((prop) => {
        const notice = exports.warn[type](prop);
        Object.defineProperty(obj, prop, {
          get: notice,
          set: notice
        });
      });
    }
  };
});

// node_modules/winston/package.json
var require_package = __commonJS((exports, module) => {
  module.exports = {
    name: "winston",
    description: "A logger for just about everything.",
    version: "3.17.0",
    author: "Charlie Robbins <charlie.robbins@gmail.com>",
    maintainers: [
      "David Hyde <dabh@alumni.stanford.edu>"
    ],
    repository: {
      type: "git",
      url: "https://github.com/winstonjs/winston.git"
    },
    keywords: [
      "winston",
      "logger",
      "logging",
      "logs",
      "sysadmin",
      "bunyan",
      "pino",
      "loglevel",
      "tools",
      "json",
      "stream"
    ],
    dependencies: {
      "@dabh/diagnostics": "^2.0.2",
      "@colors/colors": "^1.6.0",
      async: "^3.2.3",
      "is-stream": "^2.0.0",
      logform: "^2.7.0",
      "one-time": "^1.0.0",
      "readable-stream": "^3.4.0",
      "safe-stable-stringify": "^2.3.1",
      "stack-trace": "0.0.x",
      "triple-beam": "^1.3.0",
      "winston-transport": "^4.9.0"
    },
    devDependencies: {
      "@babel/cli": "^7.23.9",
      "@babel/core": "^7.24.0",
      "@babel/preset-env": "^7.24.0",
      "@dabh/eslint-config-populist": "^4.4.0",
      "@types/node": "^20.11.24",
      "abstract-winston-transport": "^0.5.1",
      assume: "^2.2.0",
      "cross-spawn-async": "^2.2.5",
      eslint: "^8.57.0",
      hock: "^1.4.1",
      mocha: "^10.3.0",
      nyc: "^17.1.0",
      rimraf: "5.0.1",
      split2: "^4.1.0",
      "std-mocks": "^2.0.0",
      through2: "^4.0.2",
      "winston-compat": "^0.1.5"
    },
    main: "./lib/winston.js",
    browser: "./dist/winston",
    types: "./index.d.ts",
    scripts: {
      lint: "eslint lib/*.js lib/winston/*.js lib/winston/**/*.js --resolve-plugins-relative-to ./node_modules/@dabh/eslint-config-populist",
      test: "rimraf test/fixtures/logs/* && mocha",
      "test:coverage": "nyc npm run test:unit",
      "test:unit": "mocha test/unit",
      "test:integration": "mocha test/integration",
      build: "rimraf dist && babel lib -d dist",
      prepublishOnly: "npm run build"
    },
    engines: {
      node: ">= 12.0.0"
    },
    license: "MIT"
  };
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS((exports, module) => {
  var copyProps = function(src, dst) {
    for (var key in src) {
      dst[key] = src[key];
    }
  };
  var SafeBuffer = function(arg, encodingOrOffset, length) {
    return Buffer2(arg, encodingOrOffset, length);
  };
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var buffer = import.meta.require("buffer");
  var Buffer2 = buffer.Buffer;
  if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
    module.exports = buffer;
  } else {
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
  }
  SafeBuffer.prototype = Object.create(Buffer2.prototype);
  copyProps(Buffer2, SafeBuffer);
  SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      throw new TypeError("Argument must not be a number");
    }
    return Buffer2(arg, encodingOrOffset, length);
  };
  SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    var buf = Buffer2(size);
    if (fill !== undefined) {
      if (typeof encoding === "string") {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
    } else {
      buf.fill(0);
    }
    return buf;
  };
  SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return Buffer2(size);
  };
  SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return buffer.SlowBuffer(size);
  };
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS((exports) => {
  var _normalizeEncoding = function(enc) {
    if (!enc)
      return "utf8";
    var retried;
    while (true) {
      switch (enc) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return enc;
        default:
          if (retried)
            return;
          enc = ("" + enc).toLowerCase();
          retried = true;
      }
    }
  };
  var normalizeEncoding = function(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
      throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
  };
  var StringDecoder = function(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch (this.encoding) {
      case "utf16le":
        this.text = utf16Text;
        this.end = utf16End;
        nb = 4;
        break;
      case "utf8":
        this.fillLast = utf8FillLast;
        nb = 4;
        break;
      case "base64":
        this.text = base64Text;
        this.end = base64End;
        nb = 3;
        break;
      default:
        this.write = simpleWrite;
        this.end = simpleEnd;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer2.allocUnsafe(nb);
  };
  var utf8CheckByte = function(byte) {
    if (byte <= 127)
      return 0;
    else if (byte >> 5 === 6)
      return 2;
    else if (byte >> 4 === 14)
      return 3;
    else if (byte >> 3 === 30)
      return 4;
    return byte >> 6 === 2 ? -1 : -2;
  };
  var utf8CheckIncomplete = function(self2, buf, i) {
    var j = buf.length - 1;
    if (j < i)
      return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0)
        self2.lastNeed = nb - 1;
      return nb;
    }
    if (--j < i || nb === -2)
      return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0)
        self2.lastNeed = nb - 2;
      return nb;
    }
    if (--j < i || nb === -2)
      return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
      if (nb > 0) {
        if (nb === 2)
          nb = 0;
        else
          self2.lastNeed = nb - 3;
      }
      return nb;
    }
    return 0;
  };
  var utf8CheckExtraBytes = function(self2, buf, p) {
    if ((buf[0] & 192) !== 128) {
      self2.lastNeed = 0;
      return "\uFFFD";
    }
    if (self2.lastNeed > 1 && buf.length > 1) {
      if ((buf[1] & 192) !== 128) {
        self2.lastNeed = 1;
        return "\uFFFD";
      }
      if (self2.lastNeed > 2 && buf.length > 2) {
        if ((buf[2] & 192) !== 128) {
          self2.lastNeed = 2;
          return "\uFFFD";
        }
      }
    }
  };
  var utf8FillLast = function(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined)
      return r;
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, p, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
  };
  var utf8Text = function(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed)
      return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
  };
  var utf8End = function(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed)
      return r + "\uFFFD";
    return r;
  };
  var utf16Text = function(buf, i) {
    if ((buf.length - i) % 2 === 0) {
      var r = buf.toString("utf16le", i);
      if (r) {
        var c = r.charCodeAt(r.length - 1);
        if (c >= 55296 && c <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
          return r.slice(0, -1);
        }
      }
      return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i, buf.length - 1);
  };
  var utf16End = function(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
      var end = this.lastTotal - this.lastNeed;
      return r + this.lastChar.toString("utf16le", 0, end);
    }
    return r;
  };
  var base64Text = function(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0)
      return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
      this.lastChar[0] = buf[buf.length - 1];
    } else {
      this.lastChar[0] = buf[buf.length - 2];
      this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
  };
  var base64End = function(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed)
      return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r;
  };
  var simpleWrite = function(buf) {
    return buf.toString(this.encoding);
  };
  var simpleEnd = function(buf) {
    return buf && buf.length ? this.write(buf) : "";
  };
  var Buffer2 = require_safe_buffer().Buffer;
  var isEncoding = Buffer2.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch (encoding && encoding.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  exports.StringDecoder = StringDecoder;
  StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0)
      return "";
    var r;
    var i;
    if (this.lastNeed) {
      r = this.fillLast(buf);
      if (r === undefined)
        return "";
      i = this.lastNeed;
      this.lastNeed = 0;
    } else {
      i = 0;
    }
    if (i < buf.length)
      return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
  };
  StringDecoder.prototype.end = utf8End;
  StringDecoder.prototype.text = utf8Text;
  StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
  };
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS((exports, module) => {
  var ownKeys = function(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  };
  var _objectSpread = function(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  };
  var _defineProperty = function(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  };
  var _classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var _defineProperties = function(target, props) {
    for (var i = 0;i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  };
  var _createClass = function(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  };
  var _toPropertyKey = function(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  };
  var _toPrimitive = function(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  };
  var copyBuffer = function(src, target, offset) {
    Buffer2.prototype.copy.call(src, target, offset);
  };
  var _require = import.meta.require("buffer");
  var Buffer2 = _require.Buffer;
  var _require2 = import.meta.require("util");
  var inspect = _require2.inspect;
  var custom2 = inspect && inspect.custom || "inspect";
  module.exports = function() {
    function BufferList() {
      _classCallCheck(this, BufferList);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    _createClass(BufferList, [{
      key: "push",
      value: function push(v) {
        var entry = {
          data: v,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v) {
        var entry = {
          data: v,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join(s) {
        if (this.length === 0)
          return "";
        var p = this.head;
        var ret = "" + p.data;
        while (p = p.next)
          ret += s + p.data;
        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      }
    }, {
      key: "consume",
      value: function consume(n, hasStrings) {
        var ret;
        if (n < this.head.data.length) {
          ret = this.head.data.slice(0, n);
          this.head.data = this.head.data.slice(n);
        } else if (n === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n) : this._getBuffer(n);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      }
    }, {
      key: "_getString",
      value: function _getString(n) {
        var p = this.head;
        var c = 1;
        var ret = p.data;
        n -= ret.length;
        while (p = p.next) {
          var str = p.data;
          var nb = n > str.length ? str.length : n;
          if (nb === str.length)
            ret += str;
          else
            ret += str.slice(0, n);
          n -= nb;
          if (n === 0) {
            if (nb === str.length) {
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p;
              p.data = str.slice(nb);
            }
            break;
          }
          ++c;
        }
        this.length -= c;
        return ret;
      }
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n) {
        var ret = Buffer2.allocUnsafe(n);
        var p = this.head;
        var c = 1;
        p.data.copy(ret);
        n -= p.data.length;
        while (p = p.next) {
          var buf = p.data;
          var nb = n > buf.length ? buf.length : n;
          buf.copy(ret, ret.length - n, 0, nb);
          n -= nb;
          if (n === 0) {
            if (nb === buf.length) {
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p;
              p.data = buf.slice(nb);
            }
            break;
          }
          ++c;
        }
        this.length -= c;
        return ret;
      }
    }, {
      key: custom2,
      value: function value(_, options) {
        return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
          depth: 0,
          customInspect: false
        }));
      }
    }]);
    return BufferList;
  }();
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS((exports, module) => {
  var destroy = function(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err) {
        if (!this._writableState) {
          process.nextTick(emitErrorNT, this, err);
        } else if (!this._writableState.errorEmitted) {
          this._writableState.errorEmitted = true;
          process.nextTick(emitErrorNT, this, err);
        }
      }
      return this;
    }
    if (this._readableState) {
      this._readableState.destroyed = true;
    }
    if (this._writableState) {
      this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err2) {
      if (!cb && err2) {
        if (!_this._writableState) {
          process.nextTick(emitErrorAndCloseNT, _this, err2);
        } else if (!_this._writableState.errorEmitted) {
          _this._writableState.errorEmitted = true;
          process.nextTick(emitErrorAndCloseNT, _this, err2);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      } else if (cb) {
        process.nextTick(emitCloseNT, _this);
        cb(err2);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    });
    return this;
  };
  var emitErrorAndCloseNT = function(self2, err) {
    emitErrorNT(self2, err);
    emitCloseNT(self2);
  };
  var emitCloseNT = function(self2) {
    if (self2._writableState && !self2._writableState.emitClose)
      return;
    if (self2._readableState && !self2._readableState.emitClose)
      return;
    self2.emit("close");
  };
  var undestroy = function() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  };
  var emitErrorNT = function(self2, err) {
    self2.emit("error", err);
  };
  var errorOrDestroy = function(stream, err) {
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy)
      stream.destroy(err);
    else
      stream.emit("error", err);
  };
  module.exports = {
    destroy,
    undestroy,
    errorOrDestroy
  };
});

// node_modules/readable-stream/errors.js
var require_errors2 = __commonJS((exports, module) => {
  var createErrorType = function(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }

    class NodeError extends Base {
      constructor(arg1, arg2, arg3) {
        super(getMessage(arg1, arg2, arg3));
      }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
  };
  var oneOf = function(expected, thing) {
    if (Array.isArray(expected)) {
      const len = expected.length;
      expected = expected.map((i) => String(i));
      if (len > 2) {
        return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
      } else if (len === 2) {
        return `one of ${thing} ${expected[0]} or ${expected[1]}`;
      } else {
        return `of ${thing} ${expected[0]}`;
      }
    } else {
      return `of ${thing} ${String(expected)}`;
    }
  };
  var startsWith = function(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
  var endsWith = function(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  };
  var includes = function(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  };
  var codes = {};
  createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    let determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    let msg;
    if (endsWith(name, " argument")) {
      msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
    } else {
      const type = includes(name, ".") ? "property" : "argument";
      msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, "type")}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
  }, TypeError);
  createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
    return "The " + name + " method is not implemented";
  });
  createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  createErrorType("ERR_STREAM_DESTROYED", function(name) {
    return "Cannot call " + name + " after a stream was destroyed";
  });
  createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
  createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
  }, TypeError);
  createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  exports.codes = codes;
});

// node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS((exports, module) => {
  var highWaterMarkFrom = function(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  };
  var getHighWaterMark = function(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
      if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
        var name = isDuplex ? duplexKey : "highWaterMark";
        throw new ERR_INVALID_OPT_VALUE(name, hwm);
      }
      return Math.floor(hwm);
    }
    return state.objectMode ? 16 : 16 * 1024;
  };
  var ERR_INVALID_OPT_VALUE = require_errors2().codes.ERR_INVALID_OPT_VALUE;
  module.exports = {
    getHighWaterMark
  };
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS((exports, module) => {
  if (typeof Object.create === "function") {
    module.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    module.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor;
        ctor.prototype.constructor = ctor;
      }
    };
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS((exports, module) => {
  try {
    util2 = import.meta.require("util");
    if (typeof util2.inherits !== "function")
      throw "";
    module.exports = util2.inherits;
  } catch (e) {
    module.exports = require_inherits_browser();
  }
  var util2;
});

// node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS((exports, module) => {
  var once = function(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      for (var _len = arguments.length, args = new Array(_len), _key = 0;_key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback.apply(this, args);
    };
  };
  var noop = function() {
  };
  var isRequest = function(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  };
  var eos = function(stream, opts, callback) {
    if (typeof opts === "function")
      return eos(stream, null, opts);
    if (!opts)
      opts = {};
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
      if (!stream.writable)
        onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
      writable = false;
      writableEnded = true;
      if (!readable)
        callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
      readable = false;
      readableEnded = true;
      if (!writable)
        callback.call(stream);
    };
    var onerror = function onerror(err) {
      callback.call(stream, err);
    };
    var onclose = function onclose() {
      var err;
      if (readable && !readableEnded) {
        if (!stream._readableState || !stream._readableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE;
        return callback.call(stream, err);
      }
      if (writable && !writableEnded) {
        if (!stream._writableState || !stream._writableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE;
        return callback.call(stream, err);
      }
    };
    var onrequest = function onrequest() {
      stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
      stream.on("complete", onfinish);
      stream.on("abort", onclose);
      if (stream.req)
        onrequest();
      else
        stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
      stream.on("end", onlegacyfinish);
      stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false)
      stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
      stream.removeListener("complete", onfinish);
      stream.removeListener("abort", onclose);
      stream.removeListener("request", onrequest);
      if (stream.req)
        stream.req.removeListener("finish", onfinish);
      stream.removeListener("end", onlegacyfinish);
      stream.removeListener("close", onlegacyfinish);
      stream.removeListener("finish", onfinish);
      stream.removeListener("end", onend);
      stream.removeListener("error", onerror);
      stream.removeListener("close", onclose);
    };
  };
  var ERR_STREAM_PREMATURE_CLOSE = require_errors2().codes.ERR_STREAM_PREMATURE_CLOSE;
  module.exports = eos;
});

// node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS((exports, module) => {
  var _defineProperty = function(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  };
  var _toPropertyKey = function(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  };
  var _toPrimitive = function(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  };
  var createIterResult = function(value, done) {
    return {
      value,
      done
    };
  };
  var readAndResolve = function(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
      var data = iter[kStream].read();
      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult(data, false));
      }
    }
  };
  var onReadable = function(iter) {
    process.nextTick(readAndResolve, iter);
  };
  var wrapForNext = function(lastPromise, iter) {
    return function(resolve, reject) {
      lastPromise.then(function() {
        if (iter[kEnded]) {
          resolve(createIterResult(undefined, true));
          return;
        }
        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  };
  var _Object$setPrototypeO;
  var finished = require_end_of_stream();
  var kLastResolve = Symbol("lastResolve");
  var kLastReject = Symbol("lastReject");
  var kError = Symbol("error");
  var kEnded = Symbol("ended");
  var kLastPromise = Symbol("lastPromise");
  var kHandlePromise = Symbol("handlePromise");
  var kStream = Symbol("stream");
  var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },
    next: function next() {
      var _this = this;
      var error = this[kError];
      if (error !== null) {
        return Promise.reject(error);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult(undefined, true));
      }
      if (this[kStream].destroyed) {
        return new Promise(function(resolve, reject) {
          process.nextTick(function() {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve(createIterResult(undefined, true));
            }
          });
        });
      }
      var lastPromise = this[kLastPromise];
      var promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        var data = this[kStream].read();
        if (data !== null) {
          return Promise.resolve(createIterResult(data, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
  }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    return new Promise(function(resolve, reject) {
      _this2[kStream].destroy(null, function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(createIterResult(undefined, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);
  var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
      value: stream,
      writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kEnded, {
      value: stream._readableState.endEmitted,
      writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
      value: function value(resolve, reject) {
        var data = iterator[kStream].read();
        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(data, false));
        } else {
          iterator[kLastResolve] = resolve;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var reject = iterator[kLastReject];
        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }
        iterator[kError] = err;
        return;
      }
      var resolve = iterator[kLastResolve];
      if (resolve !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(undefined, true));
      }
      iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
  };
  module.exports = createReadableStreamAsyncIterator;
});

// node_modules/readable-stream/lib/internal/streams/from.js
var require_from = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var ownKeys = function(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  };
  var _objectSpread = function(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  };
  var _defineProperty = function(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  };
  var _toPropertyKey = function(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  };
  var _toPrimitive = function(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  };
  var from = function(Readable, iterable, opts) {
    var iterator;
    if (iterable && typeof iterable.next === "function") {
      iterator = iterable;
    } else if (iterable && iterable[Symbol.asyncIterator])
      iterator = iterable[Symbol.asyncIterator]();
    else if (iterable && iterable[Symbol.iterator])
      iterator = iterable[Symbol.iterator]();
    else
      throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
    var readable = new Readable(_objectSpread({
      objectMode: true
    }, opts));
    var reading = false;
    readable._read = function() {
      if (!reading) {
        reading = true;
        next();
      }
    };
    function next() {
      return _next2.apply(this, arguments);
    }
    function _next2() {
      _next2 = _asyncToGenerator(function* () {
        try {
          var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value, done = _yield$iterator$next.done;
          if (done) {
            readable.push(null);
          } else if (readable.push(yield value)) {
            next();
          } else {
            reading = false;
          }
        } catch (err) {
          readable.destroy(err);
        }
      });
      return _next2.apply(this, arguments);
    }
    return readable;
  };
  var ERR_INVALID_ARG_TYPE = require_errors2().codes.ERR_INVALID_ARG_TYPE;
  module.exports = from;
});

// node_modules/readable-stream/lib/_stream_readable.js
var require__stream_readable = __commonJS((exports, module) => {
  var _uint8ArrayToBuffer = function(chunk) {
    return Buffer2.from(chunk);
  };
  var _isUint8Array = function(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  };
  var prependListener = function(emitter, event, fn) {
    if (typeof emitter.prependListener === "function")
      return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  };
  var ReadableState = function(options, stream, isDuplex) {
    Duplex = Duplex || require__stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList;
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder)
        StringDecoder = require_string_decoder().StringDecoder;
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  };
  var Readable = function(options) {
    Duplex = Duplex || require__stream_duplex();
    if (!(this instanceof Readable))
      return new Readable(options);
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function")
        this._read = options.read;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
    }
    Stream.call(this);
  };
  var readableAddChunk = function(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else {
      var er;
      if (!skipChunkCheck)
        er = chunkInvalid(state, chunk);
      if (er) {
        errorOrDestroy(stream, er);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state.endEmitted)
            errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT);
          else
            addChunk(stream, state, chunk, true);
        } else if (state.ended) {
          errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF);
        } else if (state.destroyed) {
          return false;
        } else {
          state.reading = false;
          if (state.decoder && !encoding) {
            chunk = state.decoder.write(chunk);
            if (state.objectMode || chunk.length !== 0)
              addChunk(stream, state, chunk, false);
            else
              maybeReadMore(stream, state);
          } else {
            addChunk(stream, state, chunk, false);
          }
        }
      } else if (!addToFront) {
        state.reading = false;
        maybeReadMore(stream, state);
      }
    }
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
  };
  var addChunk = function(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
      state.awaitDrain = 0;
      stream.emit("data", chunk);
    } else {
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront)
        state.buffer.unshift(chunk);
      else
        state.buffer.push(chunk);
      if (state.needReadable)
        emitReadable(stream);
    }
    maybeReadMore(stream, state);
  };
  var chunkInvalid = function(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  };
  var computeNewHighWaterMark = function(n) {
    if (n >= MAX_HWM) {
      n = MAX_HWM;
    } else {
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  };
  var howMuchToRead = function(n, state) {
    if (n <= 0 || state.length === 0 && state.ended)
      return 0;
    if (state.objectMode)
      return 1;
    if (n !== n) {
      if (state.flowing && state.length)
        return state.buffer.head.data.length;
      else
        return state.length;
    }
    if (n > state.highWaterMark)
      state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length)
      return n;
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  };
  var onEofChunk = function(stream, state) {
    debug("onEofChunk");
    if (state.ended)
      return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;
    if (state.sync) {
      emitReadable(stream);
    } else {
      state.needReadable = false;
      if (!state.emittedReadable) {
        state.emittedReadable = true;
        emitReadable_(stream);
      }
    }
  };
  var emitReadable = function(stream) {
    var state = stream._readableState;
    debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug("emitReadable", state.flowing);
      state.emittedReadable = true;
      process.nextTick(emitReadable_, stream);
    }
  };
  var emitReadable_ = function(stream) {
    var state = stream._readableState;
    debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
      stream.emit("readable");
      state.emittedReadable = false;
    }
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
  };
  var maybeReadMore = function(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      process.nextTick(maybeReadMore_, stream, state);
    }
  };
  var maybeReadMore_ = function(stream, state) {
    while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
      var len = state.length;
      debug("maybeReadMore read 0");
      stream.read(0);
      if (len === state.length)
        break;
    }
    state.readingMore = false;
  };
  var pipeOnDrain = function(src) {
    return function pipeOnDrainFunctionResult() {
      var state = src._readableState;
      debug("pipeOnDrain", state.awaitDrain);
      if (state.awaitDrain)
        state.awaitDrain--;
      if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
        state.flowing = true;
        flow(src);
      }
    };
  };
  var updateReadableListening = function(self2) {
    var state = self2._readableState;
    state.readableListening = self2.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) {
      state.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  };
  var nReadingNextTick = function(self2) {
    debug("readable nexttick read 0");
    self2.read(0);
  };
  var resume = function(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      process.nextTick(resume_, stream, state);
    }
  };
  var resume_ = function(stream, state) {
    debug("resume", state.reading);
    if (!state.reading) {
      stream.read(0);
    }
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading)
      stream.read(0);
  };
  var flow = function(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while (state.flowing && stream.read() !== null)
      ;
  };
  var fromList = function(n, state) {
    if (state.length === 0)
      return null;
    var ret;
    if (state.objectMode)
      ret = state.buffer.shift();
    else if (!n || n >= state.length) {
      if (state.decoder)
        ret = state.buffer.join("");
      else if (state.buffer.length === 1)
        ret = state.buffer.first();
      else
        ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      ret = state.buffer.consume(n, state.decoder);
    }
    return ret;
  };
  var endReadable = function(stream) {
    var state = stream._readableState;
    debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
      state.ended = true;
      process.nextTick(endReadableNT, state, stream);
    }
  };
  var endReadableNT = function(state, stream) {
    debug("endReadableNT", state.endEmitted, state.length);
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit("end");
      if (state.autoDestroy) {
        var wState = stream._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  };
  var indexOf = function(xs, x) {
    for (var i = 0, l = xs.length;i < l; i++) {
      if (xs[i] === x)
        return i;
    }
    return -1;
  };
  module.exports = Readable;
  var Duplex;
  Readable.ReadableState = ReadableState;
  var EE = import.meta.require("events").EventEmitter;
  var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream = import.meta.require("stream");
  var Buffer2 = import.meta.require("buffer").Buffer;
  var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  var debugUtil = import.meta.require("util");
  var debug;
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
  } else {
    debug = function debug() {
    };
  }
  var BufferList = require_buffer_list();
  var destroyImpl = require_destroy();
  var _require = require_state();
  var getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = require_errors2().codes;
  var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
  var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
  var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
  var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  var StringDecoder;
  var createReadableStreamAsyncIterator;
  var from;
  require_inherits()(Readable, Stream);
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  Object.defineProperty(Readable.prototype, "destroyed", {
    enumerable: false,
    get: function get() {
      if (this._readableState === undefined) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set: function set(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder)
      StringDecoder = require_string_decoder().StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    var p = this._readableState.buffer.head;
    var content = "";
    while (p !== null) {
      content += decoder.write(p.data);
      p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== "")
      this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  Readable.prototype.read = function(n) {
    debug("read", n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0)
      state.emittedReadable = false;
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
      debug("read: emitReadable", state.length, state.ended);
      if (state.length === 0 && state.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n = howMuchToRead(n, state);
    if (n === 0 && state.ended) {
      if (state.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state.needReadable;
    debug("need readable", doRead);
    if (state.length === 0 || state.length - n < state.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }
    if (state.ended || state.reading) {
      doRead = false;
      debug("reading or ended", doRead);
    } else if (doRead) {
      debug("do read");
      state.reading = true;
      state.sync = true;
      if (state.length === 0)
        state.needReadable = true;
      this._read(state.highWaterMark);
      state.sync = false;
      if (!state.reading)
        n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0)
      ret = fromList(n, state);
    else
      ret = null;
    if (ret === null) {
      state.needReadable = state.length <= state.highWaterMark;
      n = 0;
    } else {
      state.length -= n;
      state.awaitDrain = 0;
    }
    if (state.length === 0) {
      if (!state.ended)
        state.needReadable = true;
      if (nOrig !== n && state.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit("data", ret);
    return ret;
  };
  Readable.prototype._read = function(n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted)
      process.nextTick(endFn);
    else
      src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug("onunpipe");
      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src.removeListener("end", onend);
      src.removeListener("end", unpipe);
      src.removeListener("data", ondata);
      cleanedUp = true;
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      var ret = dest.write(chunk);
      debug("dest.write", ret);
      if (ret === false) {
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug("false write response, pause", state.awaitDrain);
          state.awaitDrain++;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0)
        errorOrDestroy(dest, er);
    }
    prependListener(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src.unpipe(dest);
    }
    dest.emit("pipe", src);
    if (!state.flowing) {
      debug("pipe resume");
      src.resume();
    }
    return dest;
  };
  Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state.pipesCount === 0)
      return this;
    if (state.pipesCount === 1) {
      if (dest && dest !== state.pipes)
        return this;
      if (!dest)
        dest = state.pipes;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest)
        dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      for (var i = 0;i < len; i++)
        dests[i].emit("unpipe", this, {
          hasUnpiped: false
        });
      return this;
    }
    var index = indexOf(state.pipes, dest);
    if (index === -1)
      return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1)
      state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
      state.readableListening = this.listenerCount("readable") > 0;
      if (state.flowing !== false)
        this.resume();
    } else if (ev === "readable") {
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.flowing = false;
        state.emittedReadable = false;
        debug("on readable", state.length, state.reading);
        if (state.length) {
          emitReadable(this);
        } else if (!state.reading) {
          process.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === undefined) {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
      debug("resume");
      state.flowing = !state.readableListening;
      resume(this, state);
    }
    state.paused = false;
    return this;
  };
  Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
      debug("wrapped end");
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length)
          _this.push(chunk);
      }
      _this.push(null);
    });
    stream.on("data", function(chunk) {
      debug("wrapped data");
      if (state.decoder)
        chunk = state.decoder.write(chunk);
      if (state.objectMode && (chunk === null || chunk === undefined))
        return;
      else if (!state.objectMode && (!chunk || !chunk.length))
        return;
      var ret = _this.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i in stream) {
      if (this[i] === undefined && typeof stream[i] === "function") {
        this[i] = function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i);
      }
    }
    for (var n = 0;n < kProxyEvents.length; n++) {
      stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    }
    this._read = function(n2) {
      debug("wrapped _read", n2);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === undefined) {
        createReadableStreamAsyncIterator = require_async_iterator();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    enumerable: false,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, "readableBuffer", {
    enumerable: false,
    get: function get() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, "readableFlowing", {
    enumerable: false,
    get: function get() {
      return this._readableState.flowing;
    },
    set: function set(state) {
      if (this._readableState) {
        this._readableState.flowing = state;
      }
    }
  });
  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, "readableLength", {
    enumerable: false,
    get: function get() {
      return this._readableState.length;
    }
  });
  if (typeof Symbol === "function") {
    Readable.from = function(iterable, opts) {
      if (from === undefined) {
        from = require_from();
      }
      return from(Readable, iterable, opts);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require__stream_duplex = __commonJS((exports, module) => {
  var Duplex = function(options) {
    if (!(this instanceof Duplex))
      return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false)
        this.readable = false;
      if (options.writable === false)
        this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  };
  var onend = function() {
    if (this._writableState.ended)
      return;
    process.nextTick(onEndNT, this);
  };
  var onEndNT = function(self2) {
    self2.end();
  };
  var objectKeys = Object.keys || function(obj) {
    var keys2 = [];
    for (var key in obj)
      keys2.push(key);
    return keys2;
  };
  module.exports = Duplex;
  var Readable = require__stream_readable();
  var Writable = require__stream_writable();
  require_inherits()(Duplex, Readable);
  {
    keys = objectKeys(Writable.prototype);
    for (v = 0;v < keys.length; v++) {
      method = keys[v];
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    }
  }
  var keys;
  var method;
  var v;
  Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex.prototype, "writableBuffer", {
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex.prototype, "writableLength", {
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  Object.defineProperty(Duplex.prototype, "destroyed", {
    enumerable: false,
    get: function get() {
      if (this._readableState === undefined || this._writableState === undefined) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      if (this._readableState === undefined || this._writableState === undefined) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
});

// node_modules/util-deprecate/node.js
var require_node = __commonJS((exports, module) => {
  module.exports = import.meta.require("util").deprecate;
});

// node_modules/readable-stream/lib/_stream_writable.js
var require__stream_writable = __commonJS((exports, module) => {
  var CorkedRequest = function(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
      onCorkedFinish(_this, state);
    };
  };
  var _uint8ArrayToBuffer = function(chunk) {
    return Buffer2.from(chunk);
  };
  var _isUint8Array = function(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  };
  var nop = function() {
  };
  var WritableState = function(options, stream, isDuplex) {
    Duplex = Duplex || require__stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  };
  var Writable = function(options) {
    Duplex = Duplex || require__stream_duplex();
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this))
      return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function")
        this._write = options.write;
      if (typeof options.writev === "function")
        this._writev = options.writev;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
      if (typeof options.final === "function")
        this._final = options.final;
    }
    Stream.call(this);
  };
  var writeAfterEnd = function(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END;
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
  };
  var validChunk = function(stream, state, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES;
    } else if (typeof chunk !== "string" && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy(stream, er);
      process.nextTick(cb, er);
      return false;
    }
    return true;
  };
  var decodeChunk = function(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer2.from(chunk, encoding);
    }
    return chunk;
  };
  var writeOrBuffer = function(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    if (!ret)
      state.needDrain = true;
    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
  };
  var doWrite = function(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed)
      state.onwrite(new ERR_STREAM_DESTROYED("write"));
    else if (writev)
      stream._writev(chunk, state.onwrite);
    else
      stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  };
  var onwriteError = function(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
      process.nextTick(cb, er);
      process.nextTick(finishMaybe, stream, state);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
    } else {
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
      finishMaybe(stream, state);
    }
  };
  var onwriteStateUpdate = function(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  };
  var onwrite = function(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function")
      throw new ERR_MULTIPLE_CALLBACK;
    onwriteStateUpdate(state);
    if (er)
      onwriteError(stream, state, sync, er, cb);
    else {
      var finished = needFinish(state) || stream.destroyed;
      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }
      if (sync) {
        process.nextTick(afterWrite, stream, state, finished, cb);
      } else {
        afterWrite(stream, state, finished, cb);
      }
    }
  };
  var afterWrite = function(stream, state, finished, cb) {
    if (!finished)
      onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  };
  var onwriteDrain = function(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit("drain");
    }
  };
  var clearBuffer = function(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l = state.bufferedRequestCount;
      var buffer = new Array(l);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;
      while (entry) {
        buffer[count] = entry;
        if (!entry.isBuf)
          allBuffers = false;
        entry = entry.next;
        count += 1;
      }
      buffer.allBuffers = allBuffers;
      doWrite(stream, state, true, state.length, buffer, "", holder.finish);
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
      state.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        state.bufferedRequestCount--;
        if (state.writing) {
          break;
        }
      }
      if (entry === null)
        state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  };
  var needFinish = function(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  };
  var callFinal = function(stream, state) {
    stream._final(function(err) {
      state.pendingcb--;
      if (err) {
        errorOrDestroy(stream, err);
      }
      state.prefinished = true;
      stream.emit("prefinish");
      finishMaybe(stream, state);
    });
  };
  var prefinish = function(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
      if (typeof stream._final === "function" && !state.destroyed) {
        state.pendingcb++;
        state.finalCalled = true;
        process.nextTick(callFinal, stream, state);
      } else {
        state.prefinished = true;
        stream.emit("prefinish");
      }
    }
  };
  var finishMaybe = function(stream, state) {
    var need = needFinish(state);
    if (need) {
      prefinish(stream, state);
      if (state.pendingcb === 0) {
        state.finished = true;
        stream.emit("finish");
        if (state.autoDestroy) {
          var rState = stream._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }
    return need;
  };
  var endWritable = function(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished)
        process.nextTick(cb);
      else
        stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
  };
  var onCorkedFinish = function(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state.corkedRequestsFree.next = corkReq;
  };
  module.exports = Writable;
  var Duplex;
  Writable.WritableState = WritableState;
  var internalUtil = {
    deprecate: require_node()
  };
  var Stream = import.meta.require("stream");
  var Buffer2 = import.meta.require("buffer").Buffer;
  var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  var destroyImpl = require_destroy();
  var _require = require_state();
  var getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = require_errors2().codes;
  var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
  var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
  var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
  var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
  var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
  var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
  var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
  var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  require_inherits()(Writable, Stream);
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object))
          return true;
        if (this !== Writable)
          return false;
        return object && object._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance(object) {
      return object instanceof this;
    };
  }
  Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE);
  };
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer2.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf)
      encoding = "buffer";
    else if (!encoding)
      encoding = state.defaultEncoding;
    if (typeof cb !== "function")
      cb = nop;
    if (state.ending)
      writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
      state.corked--;
      if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
        clearBuffer(this, state);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string")
      encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
      throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableBuffer", {
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== undefined)
      this.write(chunk, encoding);
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }
    if (!state.ending)
      endWritable(this, state, cb);
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableLength", {
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  Object.defineProperty(Writable.prototype, "destroyed", {
    enumerable: false,
    get: function get() {
      if (this._writableState === undefined) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set: function set(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable.prototype.destroy = destroyImpl.destroy;
  Writable.prototype._undestroy = destroyImpl.undestroy;
  Writable.prototype._destroy = function(err, cb) {
    cb(err);
  };
});

// node_modules/winston-transport/modern.js
var require_modern = __commonJS((exports, module) => {
  var util2 = import.meta.require("util");
  var Writable = require__stream_writable();
  var { LEVEL } = require_triple_beam();
  var TransportStream = module.exports = function TransportStream(options = {}) {
    Writable.call(this, { objectMode: true, highWaterMark: options.highWaterMark });
    this.format = options.format;
    this.level = options.level;
    this.handleExceptions = options.handleExceptions;
    this.handleRejections = options.handleRejections;
    this.silent = options.silent;
    if (options.log)
      this.log = options.log;
    if (options.logv)
      this.logv = options.logv;
    if (options.close)
      this.close = options.close;
    this.once("pipe", (logger) => {
      this.levels = logger.levels;
      this.parent = logger;
    });
    this.once("unpipe", (src) => {
      if (src === this.parent) {
        this.parent = null;
        if (this.close) {
          this.close();
        }
      }
    });
  };
  util2.inherits(TransportStream, Writable);
  TransportStream.prototype._write = function _write(info, enc, callback) {
    if (this.silent || info.exception === true && !this.handleExceptions) {
      return callback(null);
    }
    const level = this.level || this.parent && this.parent.level;
    if (!level || this.levels[level] >= this.levels[info[LEVEL]]) {
      if (info && !this.format) {
        return this.log(info, callback);
      }
      let errState;
      let transformed;
      try {
        transformed = this.format.transform(Object.assign({}, info), this.format.options);
      } catch (err) {
        errState = err;
      }
      if (errState || !transformed) {
        callback();
        if (errState)
          throw errState;
        return;
      }
      return this.log(transformed, callback);
    }
    this._writableState.sync = false;
    return callback(null);
  };
  TransportStream.prototype._writev = function _writev(chunks, callback) {
    if (this.logv) {
      const infos = chunks.filter(this._accept, this);
      if (!infos.length) {
        return callback(null);
      }
      return this.logv(infos, callback);
    }
    for (let i = 0;i < chunks.length; i++) {
      if (!this._accept(chunks[i]))
        continue;
      if (chunks[i].chunk && !this.format) {
        this.log(chunks[i].chunk, chunks[i].callback);
        continue;
      }
      let errState;
      let transformed;
      try {
        transformed = this.format.transform(Object.assign({}, chunks[i].chunk), this.format.options);
      } catch (err) {
        errState = err;
      }
      if (errState || !transformed) {
        chunks[i].callback();
        if (errState) {
          callback(null);
          throw errState;
        }
      } else {
        this.log(transformed, chunks[i].callback);
      }
    }
    return callback(null);
  };
  TransportStream.prototype._accept = function _accept(write2) {
    const info = write2.chunk;
    if (this.silent) {
      return false;
    }
    const level = this.level || this.parent && this.parent.level;
    if (info.exception === true || !level || this.levels[level] >= this.levels[info[LEVEL]]) {
      if (this.handleExceptions || info.exception !== true) {
        return true;
      }
    }
    return false;
  };
  TransportStream.prototype._nop = function _nop() {
    return;
  };
});

// node_modules/winston-transport/legacy.js
var require_legacy = __commonJS((exports, module) => {
  var util2 = import.meta.require("util");
  var { LEVEL } = require_triple_beam();
  var TransportStream = require_modern();
  var LegacyTransportStream = module.exports = function LegacyTransportStream(options = {}) {
    TransportStream.call(this, options);
    if (!options.transport || typeof options.transport.log !== "function") {
      throw new Error("Invalid transport, must be an object with a log method.");
    }
    this.transport = options.transport;
    this.level = this.level || options.transport.level;
    this.handleExceptions = this.handleExceptions || options.transport.handleExceptions;
    this._deprecated();
    function transportError(err) {
      this.emit("error", err, this.transport);
    }
    if (!this.transport.__winstonError) {
      this.transport.__winstonError = transportError.bind(this);
      this.transport.on("error", this.transport.__winstonError);
    }
  };
  util2.inherits(LegacyTransportStream, TransportStream);
  LegacyTransportStream.prototype._write = function _write(info, enc, callback) {
    if (this.silent || info.exception === true && !this.handleExceptions) {
      return callback(null);
    }
    if (!this.level || this.levels[this.level] >= this.levels[info[LEVEL]]) {
      this.transport.log(info[LEVEL], info.message, info, this._nop);
    }
    callback(null);
  };
  LegacyTransportStream.prototype._writev = function _writev(chunks, callback) {
    for (let i = 0;i < chunks.length; i++) {
      if (this._accept(chunks[i])) {
        this.transport.log(chunks[i].chunk[LEVEL], chunks[i].chunk.message, chunks[i].chunk, this._nop);
        chunks[i].callback();
      }
    }
    return callback(null);
  };
  LegacyTransportStream.prototype._deprecated = function _deprecated() {
    console.error([
      `${this.transport.name} is a legacy winston transport. Consider upgrading: `,
      "- Upgrade docs: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md"
    ].join("\n"));
  };
  LegacyTransportStream.prototype.close = function close() {
    if (this.transport.close) {
      this.transport.close();
    }
    if (this.transport.__winstonError) {
      this.transport.removeListener("error", this.transport.__winstonError);
      this.transport.__winstonError = null;
    }
  };
});

// node_modules/winston-transport/index.js
var require_winston_transport = __commonJS((exports, module) => {
  module.exports = require_modern();
  module.exports.LegacyTransportStream = require_legacy();
});

// node_modules/winston/lib/winston/transports/console.js
var require_console = __commonJS((exports, module) => {
  var os = import.meta.require("os");
  var { LEVEL, MESSAGE } = require_triple_beam();
  var TransportStream = require_winston_transport();
  module.exports = class Console extends TransportStream {
    constructor(options = {}) {
      super(options);
      this.name = options.name || "console";
      this.stderrLevels = this._stringArrayToSet(options.stderrLevels);
      this.consoleWarnLevels = this._stringArrayToSet(options.consoleWarnLevels);
      this.eol = typeof options.eol === "string" ? options.eol : os.EOL;
      this.forceConsole = options.forceConsole || false;
      this._consoleLog = console.log.bind(console);
      this._consoleWarn = console.warn.bind(console);
      this._consoleError = console.error.bind(console);
      this.setMaxListeners(30);
    }
    log(info, callback) {
      setImmediate(() => this.emit("logged", info));
      if (this.stderrLevels[info[LEVEL]]) {
        if (console._stderr && !this.forceConsole) {
          console._stderr.write(`${info[MESSAGE]}${this.eol}`);
        } else {
          this._consoleError(info[MESSAGE]);
        }
        if (callback) {
          callback();
        }
        return;
      } else if (this.consoleWarnLevels[info[LEVEL]]) {
        if (console._stderr && !this.forceConsole) {
          console._stderr.write(`${info[MESSAGE]}${this.eol}`);
        } else {
          this._consoleWarn(info[MESSAGE]);
        }
        if (callback) {
          callback();
        }
        return;
      }
      if (console._stdout && !this.forceConsole) {
        console._stdout.write(`${info[MESSAGE]}${this.eol}`);
      } else {
        this._consoleLog(info[MESSAGE]);
      }
      if (callback) {
        callback();
      }
    }
    _stringArrayToSet(strArray, errMsg) {
      if (!strArray)
        return {};
      errMsg = errMsg || "Cannot make set from type other than Array of string elements";
      if (!Array.isArray(strArray)) {
        throw new Error(errMsg);
      }
      return strArray.reduce((set, el) => {
        if (typeof el !== "string") {
          throw new Error(errMsg);
        }
        set[el] = true;
        return set;
      }, {});
    }
  };
});

// node_modules/async/internal/isArrayLike.js
var require_isArrayLike = __commonJS((exports, module) => {
  var isArrayLike = function(value) {
    return value && typeof value.length === "number" && value.length >= 0 && value.length % 1 === 0;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isArrayLike;
  module.exports = exports.default;
});

// node_modules/async/internal/initialParams.js
var require_initialParams = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = function(fn) {
    return function(...args) {
      var callback = args.pop();
      return fn.call(this, args, callback);
    };
  };
  module.exports = exports.default;
});

// node_modules/async/internal/setImmediate.js
var require_setImmediate = __commonJS((exports) => {
  var fallback = function(fn) {
    setTimeout(fn, 0);
  };
  var wrap = function(defer) {
    return (fn, ...args) => defer(() => fn(...args));
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fallback = fallback;
  exports.wrap = wrap;
  var hasQueueMicrotask = exports.hasQueueMicrotask = typeof queueMicrotask === "function" && queueMicrotask;
  var hasSetImmediate = exports.hasSetImmediate = typeof setImmediate === "function" && setImmediate;
  var hasNextTick = exports.hasNextTick = typeof process === "object" && typeof process.nextTick === "function";
  var _defer;
  if (hasQueueMicrotask) {
    _defer = queueMicrotask;
  } else if (hasSetImmediate) {
    _defer = setImmediate;
  } else if (hasNextTick) {
    _defer = process.nextTick;
  } else {
    _defer = fallback;
  }
  exports.default = wrap(_defer);
});

// node_modules/async/asyncify.js
var require_asyncify = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var asyncify = function(func) {
    if ((0, _wrapAsync.isAsync)(func)) {
      return function(...args) {
        const callback = args.pop();
        const promise = func.apply(this, args);
        return handlePromise(promise, callback);
      };
    }
    return (0, _initialParams2.default)(function(args, callback) {
      var result;
      try {
        result = func.apply(this, args);
      } catch (e) {
        return callback(e);
      }
      if (result && typeof result.then === "function") {
        return handlePromise(result, callback);
      } else {
        callback(null, result);
      }
    });
  };
  var handlePromise = function(promise, callback) {
    return promise.then((value) => {
      invokeCallback(callback, null, value);
    }, (err) => {
      invokeCallback(callback, err && (err instanceof Error || err.message) ? err : new Error(err));
    });
  };
  var invokeCallback = function(callback, error, value) {
    try {
      callback(error, value);
    } catch (err) {
      (0, _setImmediate2.default)((e) => {
        throw e;
      }, err);
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = asyncify;
  var _initialParams = require_initialParams();
  var _initialParams2 = _interopRequireDefault(_initialParams);
  var _setImmediate = require_setImmediate();
  var _setImmediate2 = _interopRequireDefault(_setImmediate);
  var _wrapAsync = require_wrapAsync();
  module.exports = exports.default;
});

// node_modules/async/internal/wrapAsync.js
var require_wrapAsync = __commonJS((exports) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var isAsync2 = function(fn) {
    return fn[Symbol.toStringTag] === "AsyncFunction";
  };
  var isAsyncGenerator = function(fn) {
    return fn[Symbol.toStringTag] === "AsyncGenerator";
  };
  var isAsyncIterable = function(obj) {
    return typeof obj[Symbol.asyncIterator] === "function";
  };
  var wrapAsync = function(asyncFn) {
    if (typeof asyncFn !== "function")
      throw new Error("expected a function");
    return isAsync2(asyncFn) ? (0, _asyncify2.default)(asyncFn) : asyncFn;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isAsyncIterable = exports.isAsyncGenerator = exports.isAsync = undefined;
  var _asyncify = require_asyncify();
  var _asyncify2 = _interopRequireDefault(_asyncify);
  exports.default = wrapAsync;
  exports.isAsync = isAsync2;
  exports.isAsyncGenerator = isAsyncGenerator;
  exports.isAsyncIterable = isAsyncIterable;
});

// node_modules/async/internal/awaitify.js
var require_awaitify = __commonJS((exports, module) => {
  var awaitify = function(asyncFn, arity) {
    if (!arity)
      arity = asyncFn.length;
    if (!arity)
      throw new Error("arity is undefined");
    function awaitable(...args) {
      if (typeof args[arity - 1] === "function") {
        return asyncFn.apply(this, args);
      }
      return new Promise((resolve, reject) => {
        args[arity - 1] = (err, ...cbArgs) => {
          if (err)
            return reject(err);
          resolve(cbArgs.length > 1 ? cbArgs : cbArgs[0]);
        };
        asyncFn.apply(this, args);
      });
    }
    return awaitable;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = awaitify;
  module.exports = exports.default;
});

// node_modules/async/internal/parallel.js
var require_parallel = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _isArrayLike = require_isArrayLike();
  var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
  var _wrapAsync = require_wrapAsync();
  var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
  var _awaitify = require_awaitify();
  var _awaitify2 = _interopRequireDefault(_awaitify);
  exports.default = (0, _awaitify2.default)((eachfn, tasks, callback) => {
    var results = (0, _isArrayLike2.default)(tasks) ? [] : {};
    eachfn(tasks, (task, key, taskCb) => {
      (0, _wrapAsync2.default)(task)((err, ...result) => {
        if (result.length < 2) {
          [result] = result;
        }
        results[key] = result;
        taskCb(err);
      });
    }, (err) => callback(err, results));
  }, 3);
  module.exports = exports.default;
});

// node_modules/async/internal/once.js
var require_once = __commonJS((exports, module) => {
  var once = function(fn) {
    function wrapper(...args) {
      if (fn === null)
        return;
      var callFn = fn;
      fn = null;
      callFn.apply(this, args);
    }
    Object.assign(wrapper, fn);
    return wrapper;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = once;
  module.exports = exports.default;
});

// node_modules/async/internal/getIterator.js
var require_getIterator = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = function(coll) {
    return coll[Symbol.iterator] && coll[Symbol.iterator]();
  };
  module.exports = exports.default;
});

// node_modules/async/internal/iterator.js
var require_iterator = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var createArrayIterator = function(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
      return ++i < len ? { value: coll[i], key: i } : null;
    };
  };
  var createES2015Iterator = function(iterator) {
    var i = -1;
    return function next() {
      var item = iterator.next();
      if (item.done)
        return null;
      i++;
      return { value: item.value, key: i };
    };
  };
  var createObjectIterator = function(obj) {
    var okeys = obj ? Object.keys(obj) : [];
    var i = -1;
    var len = okeys.length;
    return function next() {
      var key = okeys[++i];
      if (key === "__proto__") {
        return next();
      }
      return i < len ? { value: obj[key], key } : null;
    };
  };
  var createIterator = function(coll) {
    if ((0, _isArrayLike2.default)(coll)) {
      return createArrayIterator(coll);
    }
    var iterator = (0, _getIterator2.default)(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createIterator;
  var _isArrayLike = require_isArrayLike();
  var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
  var _getIterator = require_getIterator();
  var _getIterator2 = _interopRequireDefault(_getIterator);
  module.exports = exports.default;
});

// node_modules/async/internal/onlyOnce.js
var require_onlyOnce = __commonJS((exports, module) => {
  var onlyOnce = function(fn) {
    return function(...args) {
      if (fn === null)
        throw new Error("Callback was already called.");
      var callFn = fn;
      fn = null;
      callFn.apply(this, args);
    };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = onlyOnce;
  module.exports = exports.default;
});

// node_modules/async/internal/breakLoop.js
var require_breakLoop = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var breakLoop = {};
  exports.default = breakLoop;
  module.exports = exports.default;
});

// node_modules/async/internal/asyncEachOfLimit.js
var require_asyncEachOfLimit = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var asyncEachOfLimit = function(generator, limit, iteratee, callback) {
    let done = false;
    let canceled = false;
    let awaiting = false;
    let running = 0;
    let idx = 0;
    function replenish() {
      if (running >= limit || awaiting || done)
        return;
      awaiting = true;
      generator.next().then(({ value, done: iterDone }) => {
        if (canceled || done)
          return;
        awaiting = false;
        if (iterDone) {
          done = true;
          if (running <= 0) {
            callback(null);
          }
          return;
        }
        running++;
        iteratee(value, idx, iterateeCallback);
        idx++;
        replenish();
      }).catch(handleError);
    }
    function iterateeCallback(err, result) {
      running -= 1;
      if (canceled)
        return;
      if (err)
        return handleError(err);
      if (err === false) {
        done = true;
        canceled = true;
        return;
      }
      if (result === _breakLoop2.default || done && running <= 0) {
        done = true;
        return callback(null);
      }
      replenish();
    }
    function handleError(err) {
      if (canceled)
        return;
      awaiting = false;
      done = true;
      callback(err);
    }
    replenish();
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = asyncEachOfLimit;
  var _breakLoop = require_breakLoop();
  var _breakLoop2 = _interopRequireDefault(_breakLoop);
  module.exports = exports.default;
});

// node_modules/async/internal/eachOfLimit.js
var require_eachOfLimit = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _once = require_once();
  var _once2 = _interopRequireDefault(_once);
  var _iterator = require_iterator();
  var _iterator2 = _interopRequireDefault(_iterator);
  var _onlyOnce = require_onlyOnce();
  var _onlyOnce2 = _interopRequireDefault(_onlyOnce);
  var _wrapAsync = require_wrapAsync();
  var _asyncEachOfLimit = require_asyncEachOfLimit();
  var _asyncEachOfLimit2 = _interopRequireDefault(_asyncEachOfLimit);
  var _breakLoop = require_breakLoop();
  var _breakLoop2 = _interopRequireDefault(_breakLoop);
  exports.default = (limit) => {
    return (obj, iteratee, callback) => {
      callback = (0, _once2.default)(callback);
      if (limit <= 0) {
        throw new RangeError("concurrency limit cannot be less than 1");
      }
      if (!obj) {
        return callback(null);
      }
      if ((0, _wrapAsync.isAsyncGenerator)(obj)) {
        return (0, _asyncEachOfLimit2.default)(obj, limit, iteratee, callback);
      }
      if ((0, _wrapAsync.isAsyncIterable)(obj)) {
        return (0, _asyncEachOfLimit2.default)(obj[Symbol.asyncIterator](), limit, iteratee, callback);
      }
      var nextElem = (0, _iterator2.default)(obj);
      var done = false;
      var canceled = false;
      var running = 0;
      var looping = false;
      function iterateeCallback(err, value) {
        if (canceled)
          return;
        running -= 1;
        if (err) {
          done = true;
          callback(err);
        } else if (err === false) {
          done = true;
          canceled = true;
        } else if (value === _breakLoop2.default || done && running <= 0) {
          done = true;
          return callback(null);
        } else if (!looping) {
          replenish();
        }
      }
      function replenish() {
        looping = true;
        while (running < limit && !done) {
          var elem = nextElem();
          if (elem === null) {
            done = true;
            if (running <= 0) {
              callback(null);
            }
            return;
          }
          running += 1;
          iteratee(elem.value, elem.key, (0, _onlyOnce2.default)(iterateeCallback));
        }
        looping = false;
      }
      replenish();
    };
  };
  module.exports = exports.default;
});

// node_modules/async/eachOfLimit.js
var require_eachOfLimit2 = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var eachOfLimit = function(coll, limit, iteratee, callback) {
    return (0, _eachOfLimit3.default)(limit)(coll, (0, _wrapAsync2.default)(iteratee), callback);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _eachOfLimit2 = require_eachOfLimit();
  var _eachOfLimit3 = _interopRequireDefault(_eachOfLimit2);
  var _wrapAsync = require_wrapAsync();
  var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
  var _awaitify = require_awaitify();
  var _awaitify2 = _interopRequireDefault(_awaitify);
  exports.default = (0, _awaitify2.default)(eachOfLimit, 4);
  module.exports = exports.default;
});

// node_modules/async/eachOfSeries.js
var require_eachOfSeries = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var eachOfSeries = function(coll, iteratee, callback) {
    return (0, _eachOfLimit2.default)(coll, 1, iteratee, callback);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _eachOfLimit = require_eachOfLimit2();
  var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);
  var _awaitify = require_awaitify();
  var _awaitify2 = _interopRequireDefault(_awaitify);
  exports.default = (0, _awaitify2.default)(eachOfSeries, 3);
  module.exports = exports.default;
});

// node_modules/async/series.js
var require_series = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var series = function(tasks, callback) {
    return (0, _parallel3.default)(_eachOfSeries2.default, tasks, callback);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = series;
  var _parallel2 = require_parallel();
  var _parallel3 = _interopRequireDefault(_parallel2);
  var _eachOfSeries = require_eachOfSeries();
  var _eachOfSeries2 = _interopRequireDefault(_eachOfSeries);
  module.exports = exports.default;
});

// node_modules/readable-stream/lib/_stream_transform.js
var require__stream_transform = __commonJS((exports, module) => {
  var afterTransform = function(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) {
      return this.emit("error", new ERR_MULTIPLE_CALLBACK);
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null)
      this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      this._read(rs.highWaterMark);
    }
  };
  var Transform = function(options) {
    if (!(this instanceof Transform))
      return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
      afterTransform: afterTransform.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === "function")
        this._transform = options.transform;
      if (typeof options.flush === "function")
        this._flush = options.flush;
    }
    this.on("prefinish", prefinish);
  };
  var prefinish = function() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) {
      this._flush(function(er, data) {
        done(_this, er, data);
      });
    } else {
      done(this, null, null);
    }
  };
  var done = function(stream, er, data) {
    if (er)
      return stream.emit("error", er);
    if (data != null)
      stream.push(data);
    if (stream._writableState.length)
      throw new ERR_TRANSFORM_WITH_LENGTH_0;
    if (stream._transformState.transforming)
      throw new ERR_TRANSFORM_ALREADY_TRANSFORMING;
    return stream.push(null);
  };
  module.exports = Transform;
  var _require$codes = require_errors2().codes;
  var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
  var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
  var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
  var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
  var Duplex = require__stream_duplex();
  require_inherits()(Transform, Duplex);
  Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };
  Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
  };
  Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
        this._read(rs.highWaterMark);
    }
  };
  Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
      cb(err2);
    });
  };
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require__stream_passthrough = __commonJS((exports, module) => {
  var PassThrough = function(options) {
    if (!(this instanceof PassThrough))
      return new PassThrough(options);
    Transform.call(this, options);
  };
  module.exports = PassThrough;
  var Transform = require__stream_transform();
  require_inherits()(PassThrough, Transform);
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
});

// node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS((exports, module) => {
  var once = function(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      callback.apply(undefined, arguments);
    };
  };
  var noop = function(err) {
    if (err)
      throw err;
  };
  var isRequest = function(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  };
  var destroyer = function(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on("close", function() {
      closed = true;
    });
    if (eos === undefined)
      eos = require_end_of_stream();
    eos(stream, {
      readable: reading,
      writable: writing
    }, function(err) {
      if (err)
        return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function(err) {
      if (closed)
        return;
      if (destroyed)
        return;
      destroyed = true;
      if (isRequest(stream))
        return stream.abort();
      if (typeof stream.destroy === "function")
        return stream.destroy();
      callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
  };
  var call = function(fn) {
    fn();
  };
  var pipe = function(from, to) {
    return from.pipe(to);
  };
  var popCallback = function(streams) {
    if (!streams.length)
      return noop;
    if (typeof streams[streams.length - 1] !== "function")
      return noop;
    return streams.pop();
  };
  var pipeline = function() {
    for (var _len = arguments.length, streams = new Array(_len), _key = 0;_key < _len; _key++) {
      streams[_key] = arguments[_key];
    }
    var callback = popCallback(streams);
    if (Array.isArray(streams[0]))
      streams = streams[0];
    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS("streams");
    }
    var error;
    var destroys = streams.map(function(stream, i) {
      var reading = i < streams.length - 1;
      var writing = i > 0;
      return destroyer(stream, reading, writing, function(err) {
        if (!error)
          error = err;
        if (err)
          destroys.forEach(call);
        if (reading)
          return;
        destroys.forEach(call);
        callback(error);
      });
    });
    return streams.reduce(pipe);
  };
  var eos;
  var _require$codes = require_errors2().codes;
  var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
  var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
  module.exports = pipeline;
});

// node_modules/readable-stream/readable.js
var require_readable = __commonJS((exports, module) => {
  var Stream = import.meta.require("stream");
  if (process.env.READABLE_STREAM === "disable" && Stream) {
    module.exports = Stream.Readable;
    Object.assign(module.exports, Stream);
    module.exports.Stream = Stream;
  } else {
    exports = module.exports = require__stream_readable();
    exports.Stream = Stream || exports;
    exports.Readable = exports;
    exports.Writable = require__stream_writable();
    exports.Duplex = require__stream_duplex();
    exports.Transform = require__stream_transform();
    exports.PassThrough = require__stream_passthrough();
    exports.finished = require_end_of_stream();
    exports.pipeline = require_pipeline();
  }
});

// node_modules/@dabh/diagnostics/diagnostics.js
var require_diagnostics = __commonJS((exports, module) => {
  var use = function(adapter) {
    if (~adapters.indexOf(adapter))
      return false;
    adapters.push(adapter);
    return true;
  };
  var set = function(custom2) {
    logger = custom2;
  };
  var enabled = function(namespace) {
    var async = [];
    for (var i = 0;i < adapters.length; i++) {
      if (adapters[i].async) {
        async.push(adapters[i]);
        continue;
      }
      if (adapters[i](namespace))
        return true;
    }
    if (!async.length)
      return false;
    return new Promise(function pinky(resolve) {
      Promise.all(async.map(function prebind(fn) {
        return fn(namespace);
      })).then(function resolved(values) {
        resolve(values.some(Boolean));
      });
    });
  };
  var modify = function(fn) {
    if (~modifiers.indexOf(fn))
      return false;
    modifiers.push(fn);
    return true;
  };
  var write2 = function() {
    logger.apply(logger, arguments);
  };
  var process2 = function(message) {
    for (var i = 0;i < modifiers.length; i++) {
      message = modifiers[i].apply(modifiers[i], arguments);
    }
    return message;
  };
  var introduce = function(fn, options) {
    var has = Object.prototype.hasOwnProperty;
    for (var key in options) {
      if (has.call(options, key)) {
        fn[key] = options[key];
      }
    }
    return fn;
  };
  var nope = function(options) {
    options.enabled = false;
    options.modify = modify;
    options.set = set;
    options.use = use;
    return introduce(function diagnopes() {
      return false;
    }, options);
  };
  var yep = function(options) {
    function diagnostics() {
      var args = Array.prototype.slice.call(arguments, 0);
      write2.call(write2, options, process2(args, options));
      return true;
    }
    options.enabled = true;
    options.modify = modify;
    options.set = set;
    options.use = use;
    return introduce(diagnostics, options);
  };
  var adapters = [];
  var modifiers = [];
  var logger = function devnull() {
  };
  module.exports = function create(diagnostics) {
    diagnostics.introduce = introduce;
    diagnostics.enabled = enabled;
    diagnostics.process = process2;
    diagnostics.modify = modify;
    diagnostics.write = write2;
    diagnostics.nope = nope;
    diagnostics.yep = yep;
    diagnostics.set = set;
    diagnostics.use = use;
    return diagnostics;
  };
});

// node_modules/@dabh/diagnostics/node/production.js
var require_production = __commonJS((exports, module) => {
  var create = require_diagnostics();
  var diagnostics = create(function prod(namespace, options) {
    options = options || {};
    options.namespace = namespace;
    options.prod = true;
    options.dev = false;
    if (!(options.force || prod.force))
      return prod.nope(options);
    return prod.yep(options);
  });
  module.exports = diagnostics;
});

// node_modules/@dabh/diagnostics/node/index.js
var require_node2 = __commonJS((exports, module) => {
  if (true) {
    module.exports = require_production();
  } else {
  }
});

// node_modules/winston/lib/winston/tail-file.js
var require_tail_file = __commonJS((exports, module) => {
  var noop = function() {
  };
  var fs = import.meta.require("fs");
  var { StringDecoder } = import.meta.require("string_decoder");
  var { Stream } = require_readable();
  module.exports = (options, iter) => {
    const buffer = Buffer.alloc(64 * 1024);
    const decode = new StringDecoder("utf8");
    const stream = new Stream;
    let buff = "";
    let pos = 0;
    let row = 0;
    if (options.start === -1) {
      delete options.start;
    }
    stream.readable = true;
    stream.destroy = () => {
      stream.destroyed = true;
      stream.emit("end");
      stream.emit("close");
    };
    fs.open(options.file, "a+", "0644", (err, fd) => {
      if (err) {
        if (!iter) {
          stream.emit("error", err);
        } else {
          iter(err);
        }
        stream.destroy();
        return;
      }
      (function read() {
        if (stream.destroyed) {
          fs.close(fd, noop);
          return;
        }
        return fs.read(fd, buffer, 0, buffer.length, pos, (error, bytes) => {
          if (error) {
            if (!iter) {
              stream.emit("error", error);
            } else {
              iter(error);
            }
            stream.destroy();
            return;
          }
          if (!bytes) {
            if (buff) {
              if (options.start == null || row > options.start) {
                if (!iter) {
                  stream.emit("line", buff);
                } else {
                  iter(null, buff);
                }
              }
              row++;
              buff = "";
            }
            return setTimeout(read, 1000);
          }
          let data = decode.write(buffer.slice(0, bytes));
          if (!iter) {
            stream.emit("data", data);
          }
          data = (buff + data).split(/\n+/);
          const l = data.length - 1;
          let i = 0;
          for (;i < l; i++) {
            if (options.start == null || row > options.start) {
              if (!iter) {
                stream.emit("line", data[i]);
              } else {
                iter(null, data[i]);
              }
            }
            row++;
          }
          buff = data[l];
          pos += bytes;
          return read();
        });
      })();
    });
    if (!iter) {
      return stream;
    }
    return stream.destroy;
  };
});

// node_modules/winston/lib/winston/transports/file.js
var require_file = __commonJS((exports, module) => {
  var fs = import.meta.require("fs");
  var path = import.meta.require("path");
  var asyncSeries = require_series();
  var zlib = import.meta.require("zlib");
  var { MESSAGE } = require_triple_beam();
  var { Stream, PassThrough } = require_readable();
  var TransportStream = require_winston_transport();
  var debug = require_node2()("winston:file");
  var os = import.meta.require("os");
  var tailFile = require_tail_file();
  module.exports = class File2 extends TransportStream {
    constructor(options = {}) {
      super(options);
      this.name = options.name || "file";
      function throwIf(target, ...args) {
        args.slice(1).forEach((name) => {
          if (options[name]) {
            throw new Error(`Cannot set ${name} and ${target} together`);
          }
        });
      }
      this._stream = new PassThrough;
      this._stream.setMaxListeners(30);
      this._onError = this._onError.bind(this);
      if (options.filename || options.dirname) {
        throwIf("filename or dirname", "stream");
        this._basename = this.filename = options.filename ? path.basename(options.filename) : "winston.log";
        this.dirname = options.dirname || path.dirname(options.filename);
        this.options = options.options || { flags: "a" };
      } else if (options.stream) {
        console.warn("options.stream will be removed in winston@4. Use winston.transports.Stream");
        throwIf("stream", "filename", "maxsize");
        this._dest = this._stream.pipe(this._setupStream(options.stream));
        this.dirname = path.dirname(this._dest.path);
      } else {
        throw new Error("Cannot log to file without filename or stream.");
      }
      this.maxsize = options.maxsize || null;
      this.rotationFormat = options.rotationFormat || false;
      this.zippedArchive = options.zippedArchive || false;
      this.maxFiles = options.maxFiles || null;
      this.eol = typeof options.eol === "string" ? options.eol : os.EOL;
      this.tailable = options.tailable || false;
      this.lazy = options.lazy || false;
      this._size = 0;
      this._pendingSize = 0;
      this._created = 0;
      this._drain = false;
      this._opening = false;
      this._ending = false;
      this._fileExist = false;
      if (this.dirname)
        this._createLogDirIfNotExist(this.dirname);
      if (!this.lazy)
        this.open();
    }
    finishIfEnding() {
      if (this._ending) {
        if (this._opening) {
          this.once("open", () => {
            this._stream.once("finish", () => this.emit("finish"));
            setImmediate(() => this._stream.end());
          });
        } else {
          this._stream.once("finish", () => this.emit("finish"));
          setImmediate(() => this._stream.end());
        }
      }
    }
    log(info, callback = () => {
    }) {
      if (this.silent) {
        callback();
        return true;
      }
      if (this._drain) {
        this._stream.once("drain", () => {
          this._drain = false;
          this.log(info, callback);
        });
        return;
      }
      if (this._rotate) {
        this._stream.once("rotate", () => {
          this._rotate = false;
          this.log(info, callback);
        });
        return;
      }
      if (this.lazy) {
        if (!this._fileExist) {
          if (!this._opening) {
            this.open();
          }
          this.once("open", () => {
            this._fileExist = true;
            this.log(info, callback);
            return;
          });
          return;
        }
        if (this._needsNewFile(this._pendingSize)) {
          this._dest.once("close", () => {
            if (!this._opening) {
              this.open();
            }
            this.once("open", () => {
              this.log(info, callback);
              return;
            });
            return;
          });
          return;
        }
      }
      const output = `${info[MESSAGE]}${this.eol}`;
      const bytes = Buffer.byteLength(output);
      function logged() {
        this._size += bytes;
        this._pendingSize -= bytes;
        debug("logged %s %s", this._size, output);
        this.emit("logged", info);
        if (this._rotate) {
          return;
        }
        if (this._opening) {
          return;
        }
        if (!this._needsNewFile()) {
          return;
        }
        if (this.lazy) {
          this._endStream(() => {
            this.emit("fileclosed");
          });
          return;
        }
        this._rotate = true;
        this._endStream(() => this._rotateFile());
      }
      this._pendingSize += bytes;
      if (this._opening && !this.rotatedWhileOpening && this._needsNewFile(this._size + this._pendingSize)) {
        this.rotatedWhileOpening = true;
      }
      const written = this._stream.write(output, logged.bind(this));
      if (!written) {
        this._drain = true;
        this._stream.once("drain", () => {
          this._drain = false;
          callback();
        });
      } else {
        callback();
      }
      debug("written", written, this._drain);
      this.finishIfEnding();
      return written;
    }
    query(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      options = normalizeQuery(options);
      const file = path.join(this.dirname, this.filename);
      let buff = "";
      let results = [];
      let row = 0;
      const stream = fs.createReadStream(file, {
        encoding: "utf8"
      });
      stream.on("error", (err) => {
        if (stream.readable) {
          stream.destroy();
        }
        if (!callback) {
          return;
        }
        return err.code !== "ENOENT" ? callback(err) : callback(null, results);
      });
      stream.on("data", (data) => {
        data = (buff + data).split(/\n+/);
        const l = data.length - 1;
        let i = 0;
        for (;i < l; i++) {
          if (!options.start || row >= options.start) {
            add(data[i]);
          }
          row++;
        }
        buff = data[l];
      });
      stream.on("close", () => {
        if (buff) {
          add(buff, true);
        }
        if (options.order === "desc") {
          results = results.reverse();
        }
        if (callback)
          callback(null, results);
      });
      function add(buff2, attempt) {
        try {
          const log = JSON.parse(buff2);
          if (check(log)) {
            push(log);
          }
        } catch (e) {
          if (!attempt) {
            stream.emit("error", e);
          }
        }
      }
      function push(log) {
        if (options.rows && results.length >= options.rows && options.order !== "desc") {
          if (stream.readable) {
            stream.destroy();
          }
          return;
        }
        if (options.fields) {
          log = options.fields.reduce((obj, key) => {
            obj[key] = log[key];
            return obj;
          }, {});
        }
        if (options.order === "desc") {
          if (results.length >= options.rows) {
            results.shift();
          }
        }
        results.push(log);
      }
      function check(log) {
        if (!log) {
          return;
        }
        if (typeof log !== "object") {
          return;
        }
        const time = new Date(log.timestamp);
        if (options.from && time < options.from || options.until && time > options.until || options.level && options.level !== log.level) {
          return;
        }
        return true;
      }
      function normalizeQuery(options2) {
        options2 = options2 || {};
        options2.rows = options2.rows || options2.limit || 10;
        options2.start = options2.start || 0;
        options2.until = options2.until || new Date;
        if (typeof options2.until !== "object") {
          options2.until = new Date(options2.until);
        }
        options2.from = options2.from || options2.until - 24 * 60 * 60 * 1000;
        if (typeof options2.from !== "object") {
          options2.from = new Date(options2.from);
        }
        options2.order = options2.order || "desc";
        return options2;
      }
    }
    stream(options = {}) {
      const file = path.join(this.dirname, this.filename);
      const stream = new Stream;
      const tail = {
        file,
        start: options.start
      };
      stream.destroy = tailFile(tail, (err, line) => {
        if (err) {
          return stream.emit("error", err);
        }
        try {
          stream.emit("data", line);
          line = JSON.parse(line);
          stream.emit("log", line);
        } catch (e) {
          stream.emit("error", e);
        }
      });
      return stream;
    }
    open() {
      if (!this.filename)
        return;
      if (this._opening)
        return;
      this._opening = true;
      this.stat((err, size) => {
        if (err) {
          return this.emit("error", err);
        }
        debug("stat done: %s { size: %s }", this.filename, size);
        this._size = size;
        this._dest = this._createStream(this._stream);
        this._opening = false;
        this.once("open", () => {
          if (!this._stream.emit("rotate")) {
            this._rotate = false;
          }
        });
      });
    }
    stat(callback) {
      const target = this._getFile();
      const fullpath = path.join(this.dirname, target);
      fs.stat(fullpath, (err, stat2) => {
        if (err && err.code === "ENOENT") {
          debug("ENOENT\xA0ok", fullpath);
          this.filename = target;
          return callback(null, 0);
        }
        if (err) {
          debug(`err ${err.code} ${fullpath}`);
          return callback(err);
        }
        if (!stat2 || this._needsNewFile(stat2.size)) {
          return this._incFile(() => this.stat(callback));
        }
        this.filename = target;
        callback(null, stat2.size);
      });
    }
    close(cb) {
      if (!this._stream) {
        return;
      }
      this._stream.end(() => {
        if (cb) {
          cb();
        }
        this.emit("flush");
        this.emit("closed");
      });
    }
    _needsNewFile(size) {
      size = size || this._size;
      return this.maxsize && size >= this.maxsize;
    }
    _onError(err) {
      this.emit("error", err);
    }
    _setupStream(stream) {
      stream.on("error", this._onError);
      return stream;
    }
    _cleanupStream(stream) {
      stream.removeListener("error", this._onError);
      stream.destroy();
      return stream;
    }
    _rotateFile() {
      this._incFile(() => this.open());
    }
    _endStream(callback = () => {
    }) {
      if (this._dest) {
        this._stream.unpipe(this._dest);
        this._dest.end(() => {
          this._cleanupStream(this._dest);
          callback();
        });
      } else {
        callback();
      }
    }
    _createStream(source) {
      const fullpath = path.join(this.dirname, this.filename);
      debug("create stream start", fullpath, this.options);
      const dest = fs.createWriteStream(fullpath, this.options).on("error", (err) => debug(err)).on("close", () => debug("close", dest.path, dest.bytesWritten)).on("open", () => {
        debug("file open ok", fullpath);
        this.emit("open", fullpath);
        source.pipe(dest);
        if (this.rotatedWhileOpening) {
          this._stream = new PassThrough;
          this._stream.setMaxListeners(30);
          this._rotateFile();
          this.rotatedWhileOpening = false;
          this._cleanupStream(dest);
          source.end();
        }
      });
      debug("create stream ok", fullpath);
      return dest;
    }
    _incFile(callback) {
      debug("_incFile", this.filename);
      const ext = path.extname(this._basename);
      const basename = path.basename(this._basename, ext);
      const tasks = [];
      if (this.zippedArchive) {
        tasks.push(function(cb) {
          const num = this._created > 0 && !this.tailable ? this._created : "";
          this._compressFile(path.join(this.dirname, `${basename}${num}${ext}`), path.join(this.dirname, `${basename}${num}${ext}.gz`), cb);
        }.bind(this));
      }
      tasks.push(function(cb) {
        if (!this.tailable) {
          this._created += 1;
          this._checkMaxFilesIncrementing(ext, basename, cb);
        } else {
          this._checkMaxFilesTailable(ext, basename, cb);
        }
      }.bind(this));
      asyncSeries(tasks, callback);
    }
    _getFile() {
      const ext = path.extname(this._basename);
      const basename = path.basename(this._basename, ext);
      const isRotation = this.rotationFormat ? this.rotationFormat() : this._created;
      return !this.tailable && this._created ? `${basename}${isRotation}${ext}` : `${basename}${ext}`;
    }
    _checkMaxFilesIncrementing(ext, basename, callback) {
      if (!this.maxFiles || this._created < this.maxFiles) {
        return setImmediate(callback);
      }
      const oldest = this._created - this.maxFiles;
      const isOldest = oldest !== 0 ? oldest : "";
      const isZipped = this.zippedArchive ? ".gz" : "";
      const filePath = `${basename}${isOldest}${ext}${isZipped}`;
      const target = path.join(this.dirname, filePath);
      fs.unlink(target, callback);
    }
    _checkMaxFilesTailable(ext, basename, callback) {
      const tasks = [];
      if (!this.maxFiles) {
        return;
      }
      const isZipped = this.zippedArchive ? ".gz" : "";
      for (let x = this.maxFiles - 1;x > 1; x--) {
        tasks.push(function(i, cb) {
          let fileName = `${basename}${i - 1}${ext}${isZipped}`;
          const tmppath = path.join(this.dirname, fileName);
          fs.exists(tmppath, (exists) => {
            if (!exists) {
              return cb(null);
            }
            fileName = `${basename}${i}${ext}${isZipped}`;
            fs.rename(tmppath, path.join(this.dirname, fileName), cb);
          });
        }.bind(this, x));
      }
      asyncSeries(tasks, () => {
        fs.rename(path.join(this.dirname, `${basename}${ext}${isZipped}`), path.join(this.dirname, `${basename}1${ext}${isZipped}`), callback);
      });
    }
    _compressFile(src, dest, callback) {
      fs.access(src, fs.F_OK, (err) => {
        if (err) {
          return callback();
        }
        var gzip = zlib.createGzip();
        var inp = fs.createReadStream(src);
        var out = fs.createWriteStream(dest);
        out.on("finish", () => {
          fs.unlink(src, callback);
        });
        inp.pipe(gzip).pipe(out);
      });
    }
    _createLogDirIfNotExist(dirPath) {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    }
  };
});

// node_modules/winston/lib/winston/transports/http.js
var require_http = __commonJS((exports, module) => {
  var http = import.meta.require("http");
  var https = import.meta.require("https");
  var { Stream } = require_readable();
  var TransportStream = require_winston_transport();
  var { configure } = require_safe_stable_stringify();
  module.exports = class Http extends TransportStream {
    constructor(options = {}) {
      super(options);
      this.options = options;
      this.name = options.name || "http";
      this.ssl = !!options.ssl;
      this.host = options.host || "localhost";
      this.port = options.port;
      this.auth = options.auth;
      this.path = options.path || "";
      this.maximumDepth = options.maximumDepth;
      this.agent = options.agent;
      this.headers = options.headers || {};
      this.headers["content-type"] = "application/json";
      this.batch = options.batch || false;
      this.batchInterval = options.batchInterval || 5000;
      this.batchCount = options.batchCount || 10;
      this.batchOptions = [];
      this.batchTimeoutID = -1;
      this.batchCallback = {};
      if (!this.port) {
        this.port = this.ssl ? 443 : 80;
      }
    }
    log(info, callback) {
      this._request(info, null, null, (err, res) => {
        if (res && res.statusCode !== 200) {
          err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
        }
        if (err) {
          this.emit("warn", err);
        } else {
          this.emit("logged", info);
        }
      });
      if (callback) {
        setImmediate(callback);
      }
    }
    query(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      options = {
        method: "query",
        params: this.normalizeQuery(options)
      };
      const auth = options.params.auth || null;
      delete options.params.auth;
      const path = options.params.path || null;
      delete options.params.path;
      this._request(options, auth, path, (err, res, body2) => {
        if (res && res.statusCode !== 200) {
          err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
        }
        if (err) {
          return callback(err);
        }
        if (typeof body2 === "string") {
          try {
            body2 = JSON.parse(body2);
          } catch (e) {
            return callback(e);
          }
        }
        callback(null, body2);
      });
    }
    stream(options = {}) {
      const stream = new Stream;
      options = {
        method: "stream",
        params: options
      };
      const path = options.params.path || null;
      delete options.params.path;
      const auth = options.params.auth || null;
      delete options.params.auth;
      let buff = "";
      const req = this._request(options, auth, path);
      stream.destroy = () => req.destroy();
      req.on("data", (data) => {
        data = (buff + data).split(/\n+/);
        const l = data.length - 1;
        let i = 0;
        for (;i < l; i++) {
          try {
            stream.emit("log", JSON.parse(data[i]));
          } catch (e) {
            stream.emit("error", e);
          }
        }
        buff = data[l];
      });
      req.on("error", (err) => stream.emit("error", err));
      return stream;
    }
    _request(options, auth, path, callback) {
      options = options || {};
      auth = auth || this.auth;
      path = path || this.path || "";
      if (this.batch) {
        this._doBatch(options, callback, auth, path);
      } else {
        this._doRequest(options, callback, auth, path);
      }
    }
    _doBatch(options, callback, auth, path) {
      this.batchOptions.push(options);
      if (this.batchOptions.length === 1) {
        const me = this;
        this.batchCallback = callback;
        this.batchTimeoutID = setTimeout(function() {
          me.batchTimeoutID = -1;
          me._doBatchRequest(me.batchCallback, auth, path);
        }, this.batchInterval);
      }
      if (this.batchOptions.length === this.batchCount) {
        this._doBatchRequest(this.batchCallback, auth, path);
      }
    }
    _doBatchRequest(callback, auth, path) {
      if (this.batchTimeoutID > 0) {
        clearTimeout(this.batchTimeoutID);
        this.batchTimeoutID = -1;
      }
      const batchOptionsCopy = this.batchOptions.slice();
      this.batchOptions = [];
      this._doRequest(batchOptionsCopy, callback, auth, path);
    }
    _doRequest(options, callback, auth, path) {
      const headers = Object.assign({}, this.headers);
      if (auth && auth.bearer) {
        headers.Authorization = `Bearer ${auth.bearer}`;
      }
      const req = (this.ssl ? https : http).request({
        ...this.options,
        method: "POST",
        host: this.host,
        port: this.port,
        path: `/${path.replace(/^\//, "")}`,
        headers,
        auth: auth && auth.username && auth.password ? `${auth.username}:${auth.password}` : "",
        agent: this.agent
      });
      req.on("error", callback);
      req.on("response", (res) => res.on("end", () => callback(null, res)).resume());
      const jsonStringify = configure({
        ...this.maximumDepth && { maximumDepth: this.maximumDepth }
      });
      req.end(Buffer.from(jsonStringify(options, this.options.replacer), "utf8"));
    }
  };
});

// node_modules/is-stream/index.js
var require_is_stream = __commonJS((exports, module) => {
  var isStream = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
  isStream.writable = (stream) => isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
  isStream.readable = (stream) => isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
  isStream.duplex = (stream) => isStream.writable(stream) && isStream.readable(stream);
  isStream.transform = (stream) => isStream.duplex(stream) && typeof stream._transform === "function";
  module.exports = isStream;
});

// node_modules/winston/lib/winston/transports/stream.js
var require_stream = __commonJS((exports, module) => {
  var isStream = require_is_stream();
  var { MESSAGE } = require_triple_beam();
  var os = import.meta.require("os");
  var TransportStream = require_winston_transport();
  module.exports = class Stream extends TransportStream {
    constructor(options = {}) {
      super(options);
      if (!options.stream || !isStream(options.stream)) {
        throw new Error("options.stream is required.");
      }
      this._stream = options.stream;
      this._stream.setMaxListeners(Infinity);
      this.isObjectMode = options.stream._writableState.objectMode;
      this.eol = typeof options.eol === "string" ? options.eol : os.EOL;
    }
    log(info, callback) {
      setImmediate(() => this.emit("logged", info));
      if (this.isObjectMode) {
        this._stream.write(info);
        if (callback) {
          callback();
        }
        return;
      }
      this._stream.write(`${info[MESSAGE]}${this.eol}`);
      if (callback) {
        callback();
      }
      return;
    }
  };
});

// node_modules/winston/lib/winston/transports/index.js
var require_transports = __commonJS((exports) => {
  Object.defineProperty(exports, "Console", {
    configurable: true,
    enumerable: true,
    get() {
      return require_console();
    }
  });
  Object.defineProperty(exports, "File", {
    configurable: true,
    enumerable: true,
    get() {
      return require_file();
    }
  });
  Object.defineProperty(exports, "Http", {
    configurable: true,
    enumerable: true,
    get() {
      return require_http();
    }
  });
  Object.defineProperty(exports, "Stream", {
    configurable: true,
    enumerable: true,
    get() {
      return require_stream();
    }
  });
});

// node_modules/winston/lib/winston/config/index.js
var require_config2 = __commonJS((exports) => {
  var logform = require_logform();
  var { configs } = require_triple_beam();
  exports.cli = logform.levels(configs.cli);
  exports.npm = logform.levels(configs.npm);
  exports.syslog = logform.levels(configs.syslog);
  exports.addColors = logform.levels;
});

// node_modules/async/eachOf.js
var require_eachOf = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var eachOfArrayLike = function(coll, iteratee, callback) {
    callback = (0, _once2.default)(callback);
    var index = 0, completed = 0, { length } = coll, canceled = false;
    if (length === 0) {
      callback(null);
    }
    function iteratorCallback(err, value) {
      if (err === false) {
        canceled = true;
      }
      if (canceled === true)
        return;
      if (err) {
        callback(err);
      } else if (++completed === length || value === _breakLoop2.default) {
        callback(null);
      }
    }
    for (;index < length; index++) {
      iteratee(coll[index], index, (0, _onlyOnce2.default)(iteratorCallback));
    }
  };
  var eachOfGeneric = function(coll, iteratee, callback) {
    return (0, _eachOfLimit2.default)(coll, Infinity, iteratee, callback);
  };
  var eachOf = function(coll, iteratee, callback) {
    var eachOfImplementation = (0, _isArrayLike2.default)(coll) ? eachOfArrayLike : eachOfGeneric;
    return eachOfImplementation(coll, (0, _wrapAsync2.default)(iteratee), callback);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _isArrayLike = require_isArrayLike();
  var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
  var _breakLoop = require_breakLoop();
  var _breakLoop2 = _interopRequireDefault(_breakLoop);
  var _eachOfLimit = require_eachOfLimit2();
  var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);
  var _once = require_once();
  var _once2 = _interopRequireDefault(_once);
  var _onlyOnce = require_onlyOnce();
  var _onlyOnce2 = _interopRequireDefault(_onlyOnce);
  var _wrapAsync = require_wrapAsync();
  var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
  var _awaitify = require_awaitify();
  var _awaitify2 = _interopRequireDefault(_awaitify);
  exports.default = (0, _awaitify2.default)(eachOf, 3);
  module.exports = exports.default;
});

// node_modules/async/internal/withoutIndex.js
var require_withoutIndex = __commonJS((exports, module) => {
  var _withoutIndex = function(iteratee) {
    return (value, index, callback) => iteratee(value, callback);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _withoutIndex;
  module.exports = exports.default;
});

// node_modules/async/forEach.js
var require_forEach = __commonJS((exports, module) => {
  var _interopRequireDefault = function(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  };
  var eachLimit = function(coll, iteratee, callback) {
    return (0, _eachOf2.default)(coll, (0, _withoutIndex2.default)((0, _wrapAsync2.default)(iteratee)), callback);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _eachOf = require_eachOf();
  var _eachOf2 = _interopRequireDefault(_eachOf);
  var _withoutIndex = require_withoutIndex();
  var _withoutIndex2 = _interopRequireDefault(_withoutIndex);
  var _wrapAsync = require_wrapAsync();
  var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
  var _awaitify = require_awaitify();
  var _awaitify2 = _interopRequireDefault(_awaitify);
  exports.default = (0, _awaitify2.default)(eachLimit, 3);
  module.exports = exports.default;
});

// node_modules/fn.name/index.js
var require_fn = __commonJS((exports, module) => {
  var toString = Object.prototype.toString;
  module.exports = function name(fn) {
    if (typeof fn.displayName === "string" && fn.constructor.name) {
      return fn.displayName;
    } else if (typeof fn.name === "string" && fn.name) {
      return fn.name;
    }
    if (typeof fn === "object" && fn.constructor && typeof fn.constructor.name === "string")
      return fn.constructor.name;
    var named = fn.toString(), type = toString.call(fn).slice(8, -1);
    if (type === "Function") {
      named = named.substring(named.indexOf("(") + 1, named.indexOf(")"));
    } else {
      named = type;
    }
    return named || "anonymous";
  };
});

// node_modules/one-time/index.js
var require_one_time = __commonJS((exports, module) => {
  var name = require_fn();
  module.exports = function one(fn) {
    var called = 0, value;
    function onetime() {
      if (called)
        return value;
      called = 1;
      value = fn.apply(this, arguments);
      fn = null;
      return value;
    }
    onetime.displayName = name(fn);
    return onetime;
  };
});

// node_modules/stack-trace/lib/stack-trace.js
var require_stack_trace = __commonJS((exports) => {
  var CallSite = function(properties) {
    for (var property in properties) {
      this[property] = properties[property];
    }
  };
  exports.get = function(belowFn) {
    var oldLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = Infinity;
    var dummyObject = {};
    var v8Handler = Error.prepareStackTrace;
    Error.prepareStackTrace = function(dummyObject2, v8StackTrace2) {
      return v8StackTrace2;
    };
    Error.captureStackTrace(dummyObject, belowFn || exports.get);
    var v8StackTrace = dummyObject.stack;
    Error.prepareStackTrace = v8Handler;
    Error.stackTraceLimit = oldLimit;
    return v8StackTrace;
  };
  exports.parse = function(err) {
    if (!err.stack) {
      return [];
    }
    var self2 = this;
    var lines = err.stack.split("\n").slice(1);
    return lines.map(function(line) {
      if (line.match(/^\s*[-]{4,}$/)) {
        return self2._createParsedCallSite({
          fileName: line,
          lineNumber: null,
          functionName: null,
          typeName: null,
          methodName: null,
          columnNumber: null,
          native: null
        });
      }
      var lineMatch = line.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
      if (!lineMatch) {
        return;
      }
      var object = null;
      var method = null;
      var functionName = null;
      var typeName = null;
      var methodName = null;
      var isNative = lineMatch[5] === "native";
      if (lineMatch[1]) {
        functionName = lineMatch[1];
        var methodStart = functionName.lastIndexOf(".");
        if (functionName[methodStart - 1] == ".")
          methodStart--;
        if (methodStart > 0) {
          object = functionName.substr(0, methodStart);
          method = functionName.substr(methodStart + 1);
          var objectEnd = object.indexOf(".Module");
          if (objectEnd > 0) {
            functionName = functionName.substr(objectEnd + 1);
            object = object.substr(0, objectEnd);
          }
        }
        typeName = null;
      }
      if (method) {
        typeName = object;
        methodName = method;
      }
      if (method === "<anonymous>") {
        methodName = null;
        functionName = null;
      }
      var properties = {
        fileName: lineMatch[2] || null,
        lineNumber: parseInt(lineMatch[3], 10) || null,
        functionName,
        typeName,
        methodName,
        columnNumber: parseInt(lineMatch[4], 10) || null,
        native: isNative
      };
      return self2._createParsedCallSite(properties);
    }).filter(function(callSite) {
      return !!callSite;
    });
  };
  var strProperties = [
    "this",
    "typeName",
    "functionName",
    "methodName",
    "fileName",
    "lineNumber",
    "columnNumber",
    "function",
    "evalOrigin"
  ];
  var boolProperties = [
    "topLevel",
    "eval",
    "native",
    "constructor"
  ];
  strProperties.forEach(function(property) {
    CallSite.prototype[property] = null;
    CallSite.prototype["get" + property[0].toUpperCase() + property.substr(1)] = function() {
      return this[property];
    };
  });
  boolProperties.forEach(function(property) {
    CallSite.prototype[property] = false;
    CallSite.prototype["is" + property[0].toUpperCase() + property.substr(1)] = function() {
      return this[property];
    };
  });
  exports._createParsedCallSite = function(properties) {
    return new CallSite(properties);
  };
});

// node_modules/winston/lib/winston/exception-stream.js
var require_exception_stream = __commonJS((exports, module) => {
  var { Writable } = require_readable();
  module.exports = class ExceptionStream extends Writable {
    constructor(transport) {
      super({ objectMode: true });
      if (!transport) {
        throw new Error("ExceptionStream requires a TransportStream instance.");
      }
      this.handleExceptions = true;
      this.transport = transport;
    }
    _write(info, enc, callback) {
      if (info.exception) {
        return this.transport.log(info, callback);
      }
      callback();
      return true;
    }
  };
});

// node_modules/winston/lib/winston/exception-handler.js
var require_exception_handler = __commonJS((exports, module) => {
  var os = import.meta.require("os");
  var asyncForEach = require_forEach();
  var debug = require_node2()("winston:exception");
  var once = require_one_time();
  var stackTrace = require_stack_trace();
  var ExceptionStream = require_exception_stream();
  module.exports = class ExceptionHandler {
    constructor(logger) {
      if (!logger) {
        throw new Error("Logger is required to handle exceptions");
      }
      this.logger = logger;
      this.handlers = new Map;
    }
    handle(...args) {
      args.forEach((arg) => {
        if (Array.isArray(arg)) {
          return arg.forEach((handler2) => this._addHandler(handler2));
        }
        this._addHandler(arg);
      });
      if (!this.catcher) {
        this.catcher = this._uncaughtException.bind(this);
        process.on("uncaughtException", this.catcher);
      }
    }
    unhandle() {
      if (this.catcher) {
        process.removeListener("uncaughtException", this.catcher);
        this.catcher = false;
        Array.from(this.handlers.values()).forEach((wrapper) => this.logger.unpipe(wrapper));
      }
    }
    getAllInfo(err) {
      let message = null;
      if (err) {
        message = typeof err === "string" ? err : err.message;
      }
      return {
        error: err,
        level: "error",
        message: [
          `uncaughtException: ${message || "(no error message)"}`,
          err && err.stack || "  No stack trace"
        ].join("\n"),
        stack: err && err.stack,
        exception: true,
        date: new Date().toString(),
        process: this.getProcessInfo(),
        os: this.getOsInfo(),
        trace: this.getTrace(err)
      };
    }
    getProcessInfo() {
      return {
        pid: process.pid,
        uid: process.getuid ? process.getuid() : null,
        gid: process.getgid ? process.getgid() : null,
        cwd: process.cwd(),
        execPath: process.execPath,
        version: process.version,
        argv: process.argv,
        memoryUsage: process.memoryUsage()
      };
    }
    getOsInfo() {
      return {
        loadavg: os.loadavg(),
        uptime: os.uptime()
      };
    }
    getTrace(err) {
      const trace = err ? stackTrace.parse(err) : stackTrace.get();
      return trace.map((site) => {
        return {
          column: site.getColumnNumber(),
          file: site.getFileName(),
          function: site.getFunctionName(),
          line: site.getLineNumber(),
          method: site.getMethodName(),
          native: site.isNative()
        };
      });
    }
    _addHandler(handler2) {
      if (!this.handlers.has(handler2)) {
        handler2.handleExceptions = true;
        const wrapper = new ExceptionStream(handler2);
        this.handlers.set(handler2, wrapper);
        this.logger.pipe(wrapper);
      }
    }
    _uncaughtException(err) {
      const info = this.getAllInfo(err);
      const handlers = this._getExceptionHandlers();
      let doExit = typeof this.logger.exitOnError === "function" ? this.logger.exitOnError(err) : this.logger.exitOnError;
      let timeout;
      if (!handlers.length && doExit) {
        console.warn("winston: exitOnError cannot be true with no exception handlers.");
        console.warn("winston: not exiting process.");
        doExit = false;
      }
      function gracefulExit() {
        debug("doExit", doExit);
        debug("process._exiting", process._exiting);
        if (doExit && !process._exiting) {
          if (timeout) {
            clearTimeout(timeout);
          }
          process.exit(1);
        }
      }
      if (!handlers || handlers.length === 0) {
        return process.nextTick(gracefulExit);
      }
      asyncForEach(handlers, (handler2, next) => {
        const done = once(next);
        const transport = handler2.transport || handler2;
        function onDone(event) {
          return () => {
            debug(event);
            done();
          };
        }
        transport._ending = true;
        transport.once("finish", onDone("finished"));
        transport.once("error", onDone("error"));
      }, () => doExit && gracefulExit());
      this.logger.log(info);
      if (doExit) {
        timeout = setTimeout(gracefulExit, 3000);
      }
    }
    _getExceptionHandlers() {
      return this.logger.transports.filter((wrap) => {
        const transport = wrap.transport || wrap;
        return transport.handleExceptions;
      });
    }
  };
});

// node_modules/winston/lib/winston/rejection-stream.js
var require_rejection_stream = __commonJS((exports, module) => {
  var { Writable } = require_readable();
  module.exports = class RejectionStream extends Writable {
    constructor(transport) {
      super({ objectMode: true });
      if (!transport) {
        throw new Error("RejectionStream requires a TransportStream instance.");
      }
      this.handleRejections = true;
      this.transport = transport;
    }
    _write(info, enc, callback) {
      if (info.rejection) {
        return this.transport.log(info, callback);
      }
      callback();
      return true;
    }
  };
});

// node_modules/winston/lib/winston/rejection-handler.js
var require_rejection_handler = __commonJS((exports, module) => {
  var os = import.meta.require("os");
  var asyncForEach = require_forEach();
  var debug = require_node2()("winston:rejection");
  var once = require_one_time();
  var stackTrace = require_stack_trace();
  var RejectionStream = require_rejection_stream();
  module.exports = class RejectionHandler {
    constructor(logger) {
      if (!logger) {
        throw new Error("Logger is required to handle rejections");
      }
      this.logger = logger;
      this.handlers = new Map;
    }
    handle(...args) {
      args.forEach((arg) => {
        if (Array.isArray(arg)) {
          return arg.forEach((handler2) => this._addHandler(handler2));
        }
        this._addHandler(arg);
      });
      if (!this.catcher) {
        this.catcher = this._unhandledRejection.bind(this);
        process.on("unhandledRejection", this.catcher);
      }
    }
    unhandle() {
      if (this.catcher) {
        process.removeListener("unhandledRejection", this.catcher);
        this.catcher = false;
        Array.from(this.handlers.values()).forEach((wrapper) => this.logger.unpipe(wrapper));
      }
    }
    getAllInfo(err) {
      let message = null;
      if (err) {
        message = typeof err === "string" ? err : err.message;
      }
      return {
        error: err,
        level: "error",
        message: [
          `unhandledRejection: ${message || "(no error message)"}`,
          err && err.stack || "  No stack trace"
        ].join("\n"),
        stack: err && err.stack,
        rejection: true,
        date: new Date().toString(),
        process: this.getProcessInfo(),
        os: this.getOsInfo(),
        trace: this.getTrace(err)
      };
    }
    getProcessInfo() {
      return {
        pid: process.pid,
        uid: process.getuid ? process.getuid() : null,
        gid: process.getgid ? process.getgid() : null,
        cwd: process.cwd(),
        execPath: process.execPath,
        version: process.version,
        argv: process.argv,
        memoryUsage: process.memoryUsage()
      };
    }
    getOsInfo() {
      return {
        loadavg: os.loadavg(),
        uptime: os.uptime()
      };
    }
    getTrace(err) {
      const trace = err ? stackTrace.parse(err) : stackTrace.get();
      return trace.map((site) => {
        return {
          column: site.getColumnNumber(),
          file: site.getFileName(),
          function: site.getFunctionName(),
          line: site.getLineNumber(),
          method: site.getMethodName(),
          native: site.isNative()
        };
      });
    }
    _addHandler(handler2) {
      if (!this.handlers.has(handler2)) {
        handler2.handleRejections = true;
        const wrapper = new RejectionStream(handler2);
        this.handlers.set(handler2, wrapper);
        this.logger.pipe(wrapper);
      }
    }
    _unhandledRejection(err) {
      const info = this.getAllInfo(err);
      const handlers = this._getRejectionHandlers();
      let doExit = typeof this.logger.exitOnError === "function" ? this.logger.exitOnError(err) : this.logger.exitOnError;
      let timeout;
      if (!handlers.length && doExit) {
        console.warn("winston: exitOnError cannot be true with no rejection handlers.");
        console.warn("winston: not exiting process.");
        doExit = false;
      }
      function gracefulExit() {
        debug("doExit", doExit);
        debug("process._exiting", process._exiting);
        if (doExit && !process._exiting) {
          if (timeout) {
            clearTimeout(timeout);
          }
          process.exit(1);
        }
      }
      if (!handlers || handlers.length === 0) {
        return process.nextTick(gracefulExit);
      }
      asyncForEach(handlers, (handler2, next) => {
        const done = once(next);
        const transport = handler2.transport || handler2;
        function onDone(event) {
          return () => {
            debug(event);
            done();
          };
        }
        transport._ending = true;
        transport.once("finish", onDone("finished"));
        transport.once("error", onDone("error"));
      }, () => doExit && gracefulExit());
      this.logger.log(info);
      if (doExit) {
        timeout = setTimeout(gracefulExit, 3000);
      }
    }
    _getRejectionHandlers() {
      return this.logger.transports.filter((wrap) => {
        const transport = wrap.transport || wrap;
        return transport.handleRejections;
      });
    }
  };
});

// node_modules/winston/lib/winston/profiler.js
var require_profiler = __commonJS((exports, module) => {
  class Profiler {
    constructor(logger) {
      const Logger = require_logger();
      if (typeof logger !== "object" || Array.isArray(logger) || !(logger instanceof Logger)) {
        throw new Error("Logger is required for profiling");
      } else {
        this.logger = logger;
        this.start = Date.now();
      }
    }
    done(...args) {
      if (typeof args[args.length - 1] === "function") {
        console.warn("Callback function no longer supported as of winston@3.0.0");
        args.pop();
      }
      const info = typeof args[args.length - 1] === "object" ? args.pop() : {};
      info.level = info.level || "info";
      info.durationMs = Date.now() - this.start;
      return this.logger.write(info);
    }
  }
  module.exports = Profiler;
});

// node_modules/winston/lib/winston/logger.js
var require_logger = __commonJS((exports, module) => {
  var getLevelValue = function(levels, level) {
    const value = levels[level];
    if (!value && value !== 0) {
      return null;
    }
    return value;
  };
  var { Stream, Transform } = require_readable();
  var asyncForEach = require_forEach();
  var { LEVEL, SPLAT } = require_triple_beam();
  var isStream = require_is_stream();
  var ExceptionHandler = require_exception_handler();
  var RejectionHandler = require_rejection_handler();
  var LegacyTransportStream = require_legacy();
  var Profiler = require_profiler();
  var { warn } = require_common();
  var config2 = require_config2();
  var formatRegExp = /%[scdjifoO%]/g;

  class Logger extends Transform {
    constructor(options) {
      super({ objectMode: true });
      this.configure(options);
    }
    child(defaultRequestMetadata) {
      const logger = this;
      return Object.create(logger, {
        write: {
          value: function(info) {
            const infoClone = Object.assign({}, defaultRequestMetadata, info);
            if (info instanceof Error) {
              infoClone.stack = info.stack;
              infoClone.message = info.message;
            }
            logger.write(infoClone);
          }
        }
      });
    }
    configure({
      silent,
      format,
      defaultMeta,
      levels,
      level = "info",
      exitOnError = true,
      transports,
      colors,
      emitErrs,
      formatters,
      padLevels,
      rewriters,
      stripColors,
      exceptionHandlers,
      rejectionHandlers
    } = {}) {
      if (this.transports.length) {
        this.clear();
      }
      this.silent = silent;
      this.format = format || this.format || require_json()();
      this.defaultMeta = defaultMeta || null;
      this.levels = levels || this.levels || config2.npm.levels;
      this.level = level;
      if (this.exceptions) {
        this.exceptions.unhandle();
      }
      if (this.rejections) {
        this.rejections.unhandle();
      }
      this.exceptions = new ExceptionHandler(this);
      this.rejections = new RejectionHandler(this);
      this.profilers = {};
      this.exitOnError = exitOnError;
      if (transports) {
        transports = Array.isArray(transports) ? transports : [transports];
        transports.forEach((transport) => this.add(transport));
      }
      if (colors || emitErrs || formatters || padLevels || rewriters || stripColors) {
        throw new Error([
          "{ colors, emitErrs, formatters, padLevels, rewriters, stripColors } were removed in winston@3.0.0.",
          "Use a custom winston.format(function) instead.",
          "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md"
        ].join("\n"));
      }
      if (exceptionHandlers) {
        this.exceptions.handle(exceptionHandlers);
      }
      if (rejectionHandlers) {
        this.rejections.handle(rejectionHandlers);
      }
    }
    isLevelEnabled(level) {
      const givenLevelValue = getLevelValue(this.levels, level);
      if (givenLevelValue === null) {
        return false;
      }
      const configuredLevelValue = getLevelValue(this.levels, this.level);
      if (configuredLevelValue === null) {
        return false;
      }
      if (!this.transports || this.transports.length === 0) {
        return configuredLevelValue >= givenLevelValue;
      }
      const index = this.transports.findIndex((transport) => {
        let transportLevelValue = getLevelValue(this.levels, transport.level);
        if (transportLevelValue === null) {
          transportLevelValue = configuredLevelValue;
        }
        return transportLevelValue >= givenLevelValue;
      });
      return index !== -1;
    }
    log(level, msg, ...splat) {
      if (arguments.length === 1) {
        level[LEVEL] = level.level;
        this._addDefaultMeta(level);
        this.write(level);
        return this;
      }
      if (arguments.length === 2) {
        if (msg && typeof msg === "object") {
          msg[LEVEL] = msg.level = level;
          this._addDefaultMeta(msg);
          this.write(msg);
          return this;
        }
        msg = { [LEVEL]: level, level, message: msg };
        this._addDefaultMeta(msg);
        this.write(msg);
        return this;
      }
      const [meta] = splat;
      if (typeof meta === "object" && meta !== null) {
        const tokens = msg && msg.match && msg.match(formatRegExp);
        if (!tokens) {
          const info = Object.assign({}, this.defaultMeta, meta, {
            [LEVEL]: level,
            [SPLAT]: splat,
            level,
            message: msg
          });
          if (meta.message)
            info.message = `${info.message} ${meta.message}`;
          if (meta.stack)
            info.stack = meta.stack;
          if (meta.cause)
            info.cause = meta.cause;
          this.write(info);
          return this;
        }
      }
      this.write(Object.assign({}, this.defaultMeta, {
        [LEVEL]: level,
        [SPLAT]: splat,
        level,
        message: msg
      }));
      return this;
    }
    _transform(info, enc, callback) {
      if (this.silent) {
        return callback();
      }
      if (!info[LEVEL]) {
        info[LEVEL] = info.level;
      }
      if (!this.levels[info[LEVEL]] && this.levels[info[LEVEL]] !== 0) {
        console.error("[winston] Unknown logger level: %s", info[LEVEL]);
      }
      if (!this._readableState.pipes) {
        console.error("[winston] Attempt to write logs with no transports, which can increase memory usage: %j", info);
      }
      try {
        this.push(this.format.transform(info, this.format.options));
      } finally {
        this._writableState.sync = false;
        callback();
      }
    }
    _final(callback) {
      const transports = this.transports.slice();
      asyncForEach(transports, (transport, next) => {
        if (!transport || transport.finished)
          return setImmediate(next);
        transport.once("finish", next);
        transport.end();
      }, callback);
    }
    add(transport) {
      const target = !isStream(transport) || transport.log.length > 2 ? new LegacyTransportStream({ transport }) : transport;
      if (!target._writableState || !target._writableState.objectMode) {
        throw new Error("Transports must WritableStreams in objectMode. Set { objectMode: true }.");
      }
      this._onEvent("error", target);
      this._onEvent("warn", target);
      this.pipe(target);
      if (transport.handleExceptions) {
        this.exceptions.handle();
      }
      if (transport.handleRejections) {
        this.rejections.handle();
      }
      return this;
    }
    remove(transport) {
      if (!transport)
        return this;
      let target = transport;
      if (!isStream(transport) || transport.log.length > 2) {
        target = this.transports.filter((match) => match.transport === transport)[0];
      }
      if (target) {
        this.unpipe(target);
      }
      return this;
    }
    clear() {
      this.unpipe();
      return this;
    }
    close() {
      this.exceptions.unhandle();
      this.rejections.unhandle();
      this.clear();
      this.emit("close");
      return this;
    }
    setLevels() {
      warn.deprecated("setLevels");
    }
    query(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      options = options || {};
      const results = {};
      const queryObject = Object.assign({}, options.query || {});
      function queryTransport(transport, next) {
        if (options.query && typeof transport.formatQuery === "function") {
          options.query = transport.formatQuery(queryObject);
        }
        transport.query(options, (err, res) => {
          if (err) {
            return next(err);
          }
          if (typeof transport.formatResults === "function") {
            res = transport.formatResults(res, options.format);
          }
          next(null, res);
        });
      }
      function addResults(transport, next) {
        queryTransport(transport, (err, result) => {
          if (next) {
            result = err || result;
            if (result) {
              results[transport.name] = result;
            }
            next();
          }
          next = null;
        });
      }
      asyncForEach(this.transports.filter((transport) => !!transport.query), addResults, () => callback(null, results));
    }
    stream(options = {}) {
      const out = new Stream;
      const streams = [];
      out._streams = streams;
      out.destroy = () => {
        let i = streams.length;
        while (i--) {
          streams[i].destroy();
        }
      };
      this.transports.filter((transport) => !!transport.stream).forEach((transport) => {
        const str = transport.stream(options);
        if (!str) {
          return;
        }
        streams.push(str);
        str.on("log", (log) => {
          log.transport = log.transport || [];
          log.transport.push(transport.name);
          out.emit("log", log);
        });
        str.on("error", (err) => {
          err.transport = err.transport || [];
          err.transport.push(transport.name);
          out.emit("error", err);
        });
      });
      return out;
    }
    startTimer() {
      return new Profiler(this);
    }
    profile(id, ...args) {
      const time = Date.now();
      if (this.profilers[id]) {
        const timeEnd = this.profilers[id];
        delete this.profilers[id];
        if (typeof args[args.length - 2] === "function") {
          console.warn("Callback function no longer supported as of winston@3.0.0");
          args.pop();
        }
        const info = typeof args[args.length - 1] === "object" ? args.pop() : {};
        info.level = info.level || "info";
        info.durationMs = time - timeEnd;
        info.message = info.message || id;
        return this.write(info);
      }
      this.profilers[id] = time;
      return this;
    }
    handleExceptions(...args) {
      console.warn("Deprecated: .handleExceptions() will be removed in winston@4. Use .exceptions.handle()");
      this.exceptions.handle(...args);
    }
    unhandleExceptions(...args) {
      console.warn("Deprecated: .unhandleExceptions() will be removed in winston@4. Use .exceptions.unhandle()");
      this.exceptions.unhandle(...args);
    }
    cli() {
      throw new Error([
        "Logger.cli() was removed in winston@3.0.0",
        "Use a custom winston.formats.cli() instead.",
        "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md"
      ].join("\n"));
    }
    _onEvent(event, transport) {
      function transportEvent(err) {
        if (event === "error" && !this.transports.includes(transport)) {
          this.add(transport);
        }
        this.emit(event, err, transport);
      }
      if (!transport["__winston" + event]) {
        transport["__winston" + event] = transportEvent.bind(this);
        transport.on(event, transport["__winston" + event]);
      }
    }
    _addDefaultMeta(msg) {
      if (this.defaultMeta) {
        Object.assign(msg, this.defaultMeta);
      }
    }
  }
  Object.defineProperty(Logger.prototype, "transports", {
    configurable: false,
    enumerable: true,
    get() {
      const { pipes } = this._readableState;
      return !Array.isArray(pipes) ? [pipes].filter(Boolean) : pipes;
    }
  });
  module.exports = Logger;
});

// node_modules/winston/lib/winston/create-logger.js
var require_create_logger = __commonJS((exports, module) => {
  var isLevelEnabledFunctionName = function(level) {
    return "is" + level.charAt(0).toUpperCase() + level.slice(1) + "Enabled";
  };
  var { LEVEL } = require_triple_beam();
  var config2 = require_config2();
  var Logger = require_logger();
  var debug = require_node2()("winston:create-logger");
  module.exports = function(opts = {}) {
    opts.levels = opts.levels || config2.npm.levels;

    class DerivedLogger extends Logger {
      constructor(options) {
        super(options);
      }
    }
    const logger = new DerivedLogger(opts);
    Object.keys(opts.levels).forEach(function(level) {
      debug('Define prototype method for "%s"', level);
      if (level === "log") {
        console.warn('Level "log" not defined: conflicts with the method "log". Use a different level name.');
        return;
      }
      DerivedLogger.prototype[level] = function(...args) {
        const self2 = this || logger;
        if (args.length === 1) {
          const [msg] = args;
          const info = msg && msg.message && msg || { message: msg };
          info.level = info[LEVEL] = level;
          self2._addDefaultMeta(info);
          self2.write(info);
          return this || logger;
        }
        if (args.length === 0) {
          self2.log(level, "");
          return self2;
        }
        return self2.log(level, ...args);
      };
      DerivedLogger.prototype[isLevelEnabledFunctionName(level)] = function() {
        return (this || logger).isLevelEnabled(level);
      };
    });
    return logger;
  };
});

// node_modules/winston/lib/winston/container.js
var require_container = __commonJS((exports, module) => {
  var createLogger = require_create_logger();
  module.exports = class Container {
    constructor(options = {}) {
      this.loggers = new Map;
      this.options = options;
    }
    add(id, options) {
      if (!this.loggers.has(id)) {
        options = Object.assign({}, options || this.options);
        const existing = options.transports || this.options.transports;
        if (existing) {
          options.transports = Array.isArray(existing) ? existing.slice() : [existing];
        } else {
          options.transports = [];
        }
        const logger = createLogger(options);
        logger.on("close", () => this._delete(id));
        this.loggers.set(id, logger);
      }
      return this.loggers.get(id);
    }
    get(id, options) {
      return this.add(id, options);
    }
    has(id) {
      return !!this.loggers.has(id);
    }
    close(id) {
      if (id) {
        return this._removeLogger(id);
      }
      this.loggers.forEach((val, key) => this._removeLogger(key));
    }
    _removeLogger(id) {
      if (!this.loggers.has(id)) {
        return;
      }
      const logger = this.loggers.get(id);
      logger.close();
      this._delete(id);
    }
    _delete(id) {
      this.loggers.delete(id);
    }
  };
});

// node_modules/winston/lib/winston.js
var require_winston = __commonJS((exports) => {
  var logform = require_logform();
  var { warn } = require_common();
  exports.version = require_package().version;
  exports.transports = require_transports();
  exports.config = require_config2();
  exports.addColors = logform.levels;
  exports.format = logform.format;
  exports.createLogger = require_create_logger();
  exports.Logger = require_logger();
  exports.ExceptionHandler = require_exception_handler();
  exports.RejectionHandler = require_rejection_handler();
  exports.Container = require_container();
  exports.Transport = require_winston_transport();
  exports.loggers = new exports.Container;
  var defaultLogger = exports.createLogger();
  Object.keys(exports.config.npm.levels).concat([
    "log",
    "query",
    "stream",
    "add",
    "remove",
    "clear",
    "profile",
    "startTimer",
    "handleExceptions",
    "unhandleExceptions",
    "handleRejections",
    "unhandleRejections",
    "configure",
    "child"
  ]).forEach((method) => exports[method] = (...args) => defaultLogger[method](...args));
  Object.defineProperty(exports, "level", {
    get() {
      return defaultLogger.level;
    },
    set(val) {
      defaultLogger.level = val;
    }
  });
  Object.defineProperty(exports, "exceptions", {
    get() {
      return defaultLogger.exceptions;
    }
  });
  Object.defineProperty(exports, "rejections", {
    get() {
      return defaultLogger.rejections;
    }
  });
  ["exitOnError"].forEach((prop) => {
    Object.defineProperty(exports, prop, {
      get() {
        return defaultLogger[prop];
      },
      set(val) {
        defaultLogger[prop] = val;
      }
    });
  });
  Object.defineProperty(exports, "default", {
    get() {
      return {
        exceptionHandlers: defaultLogger.exceptionHandlers,
        rejectionHandlers: defaultLogger.rejectionHandlers,
        transports: defaultLogger.transports
      };
    }
  });
  warn.deprecated(exports, "setLevels");
  warn.forFunctions(exports, "useFormat", ["cli"]);
  warn.forProperties(exports, "useFormat", ["padLevels", "stripColors"]);
  warn.forFunctions(exports, "deprecated", [
    "addRewriter",
    "addFilter",
    "clone",
    "extend"
  ]);
  warn.forProperties(exports, "deprecated", ["emitErrs", "levelLength"]);
});

// node_modules/hono/dist/utils/body.js
async function parseFormData(request2, options) {
  const formData = await request2.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
var convertFormDataToBodyData = function(formData, options) {
  const form = Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
};
var parseBody = async (request2, options = Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request2 instanceof HonoRequest ? request2.raw.headers : request2.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request2, { all, dot });
  }
  return {};
};
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== undefined) {
    if (Array.isArray(form[key])) {
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1;i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1;j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request2) => {
  const url = request2.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (;i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? undefined : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request2) => {
  const result = getPath(request2);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? undefined : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? undefined : nextKeyIndex : valueIndex);
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? undefined : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request2, path = "/", matchResult = [[]]) {
    this.raw = request2;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : undefined;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? undefined;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body2) => {
        if (anyCachedKey === "json") {
          body2 = JSON.stringify(body2);
        }
        return new Response(body2)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var escapeRe = /[&<>'"]/;
var stringBufferToString = async (buffer, callbacks) => {
  let str = "";
  callbacks ||= [];
  const resolvedBuffer = await Promise.all(buffer);
  for (let i = resolvedBuffer.length - 1;; i--) {
    str += resolvedBuffer[i];
    i--;
    if (i < 0) {
      break;
    }
    let r = resolvedBuffer[i];
    if (typeof r === "object") {
      callbacks.push(...r.callbacks || []);
    }
    const isEscaped = r.isEscaped;
    r = await (typeof r === "object" ? r.toString() : r);
    if (typeof r === "object") {
      callbacks.push(...r.callbacks || []);
    }
    if (r.isEscaped ?? isEscaped) {
      str += r;
    } else {
      const buf = [str];
      escapeToBuffer(r, buf);
      str = buf[0];
    }
  }
  return raw2(str, callbacks);
};
var escapeToBuffer = (str, buffer) => {
  const match = str.search(escapeRe);
  if (match === -1) {
    buffer[0] += str;
    return;
  }
  let escape;
  let index;
  let lastIndex = 0;
  for (index = match;index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escape = "&quot;";
        break;
      case 39:
        escape = "&#39;";
        break;
      case 38:
        escape = "&amp;";
        break;
      case 60:
        escape = "&lt;";
        break;
      case 62:
        escape = "&gt;";
        break;
      default:
        continue;
    }
    buffer[0] += str.substring(lastIndex, index) + escape;
    lastIndex = index + 1;
  }
  buffer[0] += str.substring(lastIndex, index);
};
var resolveCallbackSync = (str) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return str;
  }
  const buffer = [str];
  const context = {};
  callbacks.forEach((c) => c({ phase: HtmlEscapedCallbackPhase.Stringify, buffer, context }));
  return buffer[0];
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))).then(() => buffer[0]));
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
};
var Context = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === undefined) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= new Map;
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : undefined;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers;
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.#newResponse(text, arg, headers) : this.#newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body2 = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.#newResponse(body2, arg, headers) : this.#newResponse(body2, arg);
  };
  html = (html2, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html2 === "object") {
      return resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html22) => {
        return typeof arg === "number" ? this.#newResponse(html22, arg, headers) : this.#newResponse(html22, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers;
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response;
    return this.#notFoundHandler(this);
  };
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    const isContext = context2 instanceof Context;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (isContext) {
          context2.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || undefined;
      }
      if (!handler) {
        if (isContext && context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      } else {
        try {
          res = await handler(context2, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && isContext && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
  };
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app) {
    const subApp = this.basePath(path);
    app.routes.map((r) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = undefined;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request3) => {
        const url3 = new URL(request3.url);
        url3.pathname = url3.pathname.slice(pathPrefixLength) || "/";
        return new Request(url3, request3);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request3, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request3, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request3, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request3, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context3 = await composed(c);
        if (!context3.finalized) {
          throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
        }
        return context3.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request3, ...rest) => {
    return this.#dispatch(request3, rest[1], rest[0], request3.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(new Request(/^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`, requestInit), Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, undefined, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/node.js
var compareKey = function(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
};
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
var Node = class {
  #index;
  #varIndex;
  #children = Object.create(null);
  insert(tokens, index, paramMap, context3, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== undefined) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some((k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node;
        if (name !== "") {
          node.#varIndex = context3.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some((k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node;
      }
    }
    node.insert(restTokens, index, paramMap, context3, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node;
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0;; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1;i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1;j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== undefined) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== undefined) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var buildWildcardRegExp = function(path) {
  return wildcardRegExpCache[path] ??= new RegExp(path === "*" ? "" : `^${path.replace(/\/\*$|([.\\+*[^\]$()])/g, (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)")}\$`);
};
var clearWildcardRegExpCache = function() {
  wildcardRegExpCache = Object.create(null);
};
var buildMatcherFromPreprocessedRoutes = function(routes) {
  const trie2 = new Trie;
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length);
  const staticMap = Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length;i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie2.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = Object.create(null);
      paramCount -= 1;
      for (;paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie2.buildRegExp();
  for (let i = 0, len = handlerData.length;i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length;j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length;k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
};
var findMiddleware = function(middleware, path) {
  if (!middleware) {
    return;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return;
};
var emptyParam = [];
var nullMatcher = [/^$/, [], Object.create(null)];
var wildcardRegExpCache = Object.create(null);
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push([handler, paramCount]));
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length;i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = undefined;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]]));
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (;i < len; i++) {
      const router5 = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length;i2 < len2; i2++) {
          router5.add(...routes[i2]);
        }
        res = router5.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router5.match.bind(router5);
      this.#routers = [router5];
      this.#routes = undefined;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var Node2 = class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = Object.create(null);
  constructor(method, handler, children) {
    this.#children = children || Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length;i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.#children).includes(p)) {
        curNode = curNode.#children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[p] = new Node2;
      const pattern = getPattern(p);
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[p];
    }
    const m = Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node3, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node3.#methods.length;i < len; i++) {
      const m = node3.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== undefined) {
        handlerSet.params = Object.create(null);
        for (let i2 = 0, len2 = handlerSet.possibleKeys.length;i2 < len2; i2++) {
          const key = handlerSet.possibleKeys[i2];
          const processed = processedSet[handlerSet.score];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.score] = true;
        }
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length;i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length;j < len2; j++) {
        const node3 = curNodes[j];
        const nextNode = node3.#children[part];
        if (nextNode) {
          nextNode.#params = node3.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(...this.#getHandlerSets(nextNode.#children["*"], method, node3.#params, Object.create(null)));
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node3.#params, Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node3.#patterns.length;k < len3; k++) {
          const pattern = node3.#patterns[k];
          const params = { ...node3.#params };
          if (pattern === "*") {
            const astNode = node3.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node3.#params, Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node3.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.#getHandlerSets(child, method, node3.#params, params));
            continue;
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node3.#params));
              if (child.#children["*"]) {
                handlerSets.push(...this.#getHandlerSets(child.#children["*"], method, params, node3.#params));
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2;
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length;i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter, new TrieRouter]
    });
  }
};

// node_modules/hono/dist/adapter/bun/serve-static.js
import {stat} from "fs/promises";

// node_modules/hono/dist/utils/compress.js
var COMPRESSIBLE_CONTENT_TYPE_REGEX = /^\s*(?:text\/[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i;

// node_modules/hono/dist/utils/filepath.js
var getFilePath = (options) => {
  let filename = options.filename;
  const defaultDocument = options.defaultDocument || "index.html";
  if (filename.endsWith("/")) {
    filename = filename.concat(defaultDocument);
  } else if (!filename.match(/\.[a-zA-Z0-9_-]+$/)) {
    filename = filename.concat("/" + defaultDocument);
  }
  const path = getFilePathWithoutDefaultDocument({
    root: options.root,
    filename
  });
  return path;
};
var getFilePathWithoutDefaultDocument = (options) => {
  let root = options.root || "";
  let filename = options.filename;
  if (/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(filename)) {
    return;
  }
  filename = filename.replace(/^\.?[\/\\]/, "");
  filename = filename.replace(/\\/, "/");
  root = root.replace(/\/$/, "");
  let path = root ? root + "/" + filename : filename;
  path = path.replace(/^\.?\//, "");
  if (root[0] !== "/" && path[0] === "/") {
    return;
  }
  return path;
};

// node_modules/hono/dist/utils/mime.js
var getMimeType = (filename, mimes = baseMimes) => {
  const regexp = /\.([a-zA-Z0-9]+?)$/;
  const match = filename.match(regexp);
  if (!match) {
    return;
  }
  let mimeType = mimes[match[1]];
  if (mimeType && mimeType.startsWith("text") || mimeType === "application/json") {
    mimeType += "; charset=utf-8";
  }
  return mimeType;
};
var _baseMimes = {
  aac: "audio/aac",
  avi: "video/x-msvideo",
  avif: "image/avif",
  av1: "video/av1",
  bin: "application/octet-stream",
  bmp: "image/bmp",
  css: "text/css",
  csv: "text/csv",
  eot: "application/vnd.ms-fontobject",
  epub: "application/epub+zip",
  gif: "image/gif",
  gz: "application/gzip",
  htm: "text/html",
  html: "text/html",
  ico: "image/x-icon",
  ics: "text/calendar",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "text/javascript",
  json: "application/json",
  jsonld: "application/ld+json",
  map: "application/json",
  mid: "audio/x-midi",
  midi: "audio/x-midi",
  mjs: "text/javascript",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpeg: "video/mpeg",
  oga: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  opus: "audio/opus",
  otf: "font/otf",
  pdf: "application/pdf",
  png: "image/png",
  rtf: "application/rtf",
  svg: "image/svg+xml",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "video/mp2t",
  ttf: "font/ttf",
  txt: "text/plain",
  wasm: "application/wasm",
  webm: "video/webm",
  weba: "audio/webm",
  webp: "image/webp",
  woff: "font/woff",
  woff2: "font/woff2",
  xhtml: "application/xhtml+xml",
  xml: "application/xml",
  zip: "application/zip",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  gltf: "model/gltf+json",
  glb: "model/gltf-binary"
};
var baseMimes = _baseMimes;

// node_modules/hono/dist/middleware/serve-static/index.js
var ENCODINGS = {
  br: ".br",
  zstd: ".zst",
  gzip: ".gz"
};
var ENCODINGS_ORDERED_KEYS = Object.keys(ENCODINGS);
var DEFAULT_DOCUMENT = "index.html";
var defaultPathResolve = (path) => path;
var serveStatic = (options) => {
  let isAbsoluteRoot = false;
  let root;
  if (options.root) {
    if (options.root.startsWith("/")) {
      isAbsoluteRoot = true;
      root = new URL(`file://${options.root}`).pathname;
    } else {
      root = options.root;
    }
  }
  return async (c, next) => {
    if (c.finalized) {
      await next();
      return;
    }
    let filename = options.path ?? decodeURI(c.req.path);
    filename = options.rewriteRequestPath ? options.rewriteRequestPath(filename) : filename;
    if (!filename.endsWith("/") && options.isDir) {
      const path2 = getFilePathWithoutDefaultDocument({
        filename,
        root
      });
      if (path2 && await options.isDir(path2)) {
        filename += "/";
      }
    }
    let path = getFilePath({
      filename,
      root,
      defaultDocument: DEFAULT_DOCUMENT
    });
    if (!path) {
      return await next();
    }
    if (isAbsoluteRoot) {
      path = "/" + path;
    }
    const getContent = options.getContent;
    const pathResolve = options.pathResolve ?? defaultPathResolve;
    path = pathResolve(path);
    let content = await getContent(path, c);
    if (!content) {
      let pathWithoutDefaultDocument = getFilePathWithoutDefaultDocument({
        filename,
        root
      });
      if (!pathWithoutDefaultDocument) {
        return await next();
      }
      pathWithoutDefaultDocument = pathResolve(pathWithoutDefaultDocument);
      if (pathWithoutDefaultDocument !== path) {
        content = await getContent(pathWithoutDefaultDocument, c);
        if (content) {
          path = pathWithoutDefaultDocument;
        }
      }
    }
    if (content instanceof Response) {
      return c.newResponse(content.body, content);
    }
    if (content) {
      const mimeType = options.mimes && getMimeType(path, options.mimes) || getMimeType(path);
      c.header("Content-Type", mimeType || "application/octet-stream");
      if (options.precompressed && (!mimeType || COMPRESSIBLE_CONTENT_TYPE_REGEX.test(mimeType))) {
        const acceptEncodingSet = new Set(c.req.header("Accept-Encoding")?.split(",").map((encoding) => encoding.trim()));
        for (const encoding of ENCODINGS_ORDERED_KEYS) {
          if (!acceptEncodingSet.has(encoding)) {
            continue;
          }
          const compressedContent = await getContent(path + ENCODINGS[encoding], c);
          if (compressedContent) {
            content = compressedContent;
            c.header("Content-Encoding", encoding);
            c.header("Vary", "Accept-Encoding", { append: true });
            break;
          }
        }
      }
      await options.onFound?.(path, c);
      return c.body(content);
    }
    await options.onNotFound?.(path, c);
    await next();
    return;
  };
};

// node_modules/hono/dist/adapter/bun/serve-static.js
var serveStatic2 = (options) => {
  return async function serveStatic2(c, next) {
    const getContent = async (path) => {
      path = path.startsWith("/") ? path : `./${path}`;
      const file = Bun.file(path);
      return await file.exists() ? file : null;
    };
    const pathResolve = (path) => {
      return path.startsWith("/") ? path : `./${path}`;
    };
    const isDir = async (path) => {
      let isDir2;
      try {
        const stats = await stat(path);
        isDir2 = stats.isDirectory();
      } catch {
      }
      return isDir2;
    };
    return serveStatic({
      ...options,
      getContent,
      pathResolve,
      isDir
    })(c, next);
  };
};

// node_modules/hono/dist/helper/ssg/middleware.js
var X_HONO_DISABLE_SSG_HEADER_KEY = "x-hono-disable-ssg";
var SSG_DISABLED_RESPONSE = (() => {
  try {
    return new Response("SSG is disabled", {
      status: 404,
      headers: { [X_HONO_DISABLE_SSG_HEADER_KEY]: "true" }
    });
  } catch {
    return null;
  }
})();
// node_modules/hono/dist/adapter/bun/ssg.js
var { write } = Bun;

// node_modules/hono/dist/helper/websocket/index.js
var WSContext = class {
  #init;
  constructor(init) {
    this.#init = init;
    this.raw = init.raw;
    this.url = init.url ? new URL(init.url) : null;
    this.protocol = init.protocol ?? null;
  }
  send(source, options) {
    this.#init.send(source, options ?? {});
  }
  raw;
  binaryType = "arraybuffer";
  get readyState() {
    return this.#init.readyState;
  }
  url;
  protocol;
  close(code, reason) {
    this.#init.close(code, reason);
  }
};

// src/model/user-model.ts
function toUserResponse(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token: user.token || "-",
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
}

// node_modules/zod/lib/index.mjs
var setErrorMap = function(map) {
  overrideErrorMap = map;
};
var getErrorMap = function() {
  return overrideErrorMap;
};
var addIssueToContext = function(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      overrideMap,
      overrideMap === errorMap ? undefined : errorMap
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var processCreateParams = function(params) {
  if (!params)
    return {};
  const { errorMap, invalid_type_error, required_error, description } = params;
  if (errorMap && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap)
    return { errorMap, description };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== undefined ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message !== null && message !== undefined ? message : required_error) !== null && _a !== undefined ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== undefined ? message : invalid_type_error) !== null && _b !== undefined ? _b : ctx.defaultError };
  };
  return { errorMap: customMap, description };
};
var timeRegexSource = function(args) {
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
};
var timeRegex = function(args) {
  return new RegExp(`^${timeRegexSource(args)}\$`);
};
var datetimeRegex = function(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}\$`);
};
var isValidIP = function(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
};
var floatSafeRemainder = function(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
};
var deepPartialify = function(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
};
var mergeValues = function(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
};
var createZodEnum = function(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
};
var custom = function(check, params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== undefined ? _a : fatal) !== null && _b !== undefined ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error;
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

class ZodError extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== undefined) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];

class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === undefined ? undefined : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache;
var _ZodNativeEnum_cache;

class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};

class ZodType {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus,
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === undefined ? undefined : params.async) !== null && _a !== undefined ? _a : false,
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap,
        async: true
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+\$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}\$`);

class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      offset: (_a = options === null || options === undefined ? undefined : options.offset) !== null && _a !== undefined ? _a : false,
      local: (_b = options === null || options === undefined ? undefined : options.local) !== null && _b !== undefined ? _b : false,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === undefined ? undefined : options.position,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== undefined ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === undefined ? undefined : _b.call(_a, issue, ctx).message) !== null && _c !== undefined ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== undefined ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [undefined, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map;
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map;
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map;
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set;
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};

class ZodEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, undefined);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
_ZodEnum_cache = new WeakMap;
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, undefined);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
_ZodNativeEnum_cache = new WeakMap;
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};

class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// src/validation/user-validation.ts
class UserValidation {
  static REGISTER = z.object({
    email: z.string().email(),
    password: z.string().min(1).max(100),
    name: z.string().min(1).max(100)
  });
  static LOGIN = z.object({
    email: z.string().email(),
    password: z.string().min(1).max(100)
  });
  static TOKEN = z.string().min(1);
  static UPDATE = z.object({
    password: z.string().min(1).max(100).optional(),
    name: z.string().min(1).max(100).optional()
  });
}

// src/application/database.ts
var client = __toESM(require_default2(), 1);

// src/application/logging.ts
var winston = __toESM(require_winston(), 1);
var logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({})
  ]
});

// src/application/database.ts
var prismaClient = new client.PrismaClient({
  log: [
    {
      emit: "event",
      level: "query"
    },
    {
      emit: "event",
      level: "error"
    },
    {
      emit: "event",
      level: "info"
    },
    {
      emit: "event",
      level: "warn"
    }
  ]
});
prismaClient.$on("query", (e) => {
  logger.info(e);
});
prismaClient.$on("error", (e) => {
  logger.error(e);
});
prismaClient.$on("info", (e) => {
  logger.info(e);
});
prismaClient.$on("warn", (e) => {
  logger.warn(e);
});

// node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  res;
  status;
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      const newResponse = new Response(this.res.body, {
        status: this.status,
        headers: this.res.headers
      });
      return newResponse;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// src/service/user-service.ts
class UserService {
  static async register(request3) {
    request3 = UserValidation.REGISTER.parse(request3);
    const totalUserWithSameEmail = await prismaClient.user.count({
      where: {
        email: request3.email
      }
    });
    if (totalUserWithSameEmail != 0) {
      throw new HTTPException(400, {
        message: "Email already exists"
      });
    }
    request3.password = await Bun.password.hash(request3.password, {
      algorithm: "argon2d"
    });
    const user = await prismaClient.user.create({
      data: { ...request3, id: crypto.randomUUID() }
    });
    return toUserResponse(user);
  }
  static async login(request3) {
    request3 = UserValidation.LOGIN.parse(request3);
    let user = await prismaClient.user.findUnique({
      where: {
        email: request3.email
      }
    });
    if (!user) {
      throw new HTTPException(401, {
        message: "email or password is wrong"
      });
    }
    const isPasswordValid = await Bun.password.verify(request3.password, user.password, "argon2d");
    if (!isPasswordValid) {
      throw new HTTPException(401, {
        message: "email or password is wrong"
      });
    }
    user = await prismaClient.user.update({
      where: {
        email: request3.email
      },
      data: {
        token: crypto.randomUUID(),
        updatedAt: new Date
      }
    });
    const response = toUserResponse(user);
    response.token = user.token;
    return response;
  }
  static async get(token) {
    const result = UserValidation.TOKEN.safeParse(token);
    if (result.error) {
      throw new HTTPException(401, {
        message: "Unauthorized"
      });
    }
    token = result.data;
    const user = await prismaClient.user.findFirst({
      where: {
        token
      }
    });
    if (!user) {
      throw new HTTPException(401, {
        message: "Unauthorized"
      });
    }
    return user;
  }
  static async update(user, request3) {
    request3 = UserValidation.UPDATE.parse(request3);
    if (request3.name) {
      user.name = request3.name;
    }
    if (request3.password) {
      user.password = await Bun.password.hash(request3.password, {
        algorithm: "argon2d"
      });
    }
    user = await prismaClient.user.update({
      where: {
        email: user.email
      },
      data: user
    });
    return toUserResponse(user);
  }
  static async logout(user) {
    await prismaClient.user.update({
      where: {
        email: user.email
      },
      data: {
        token: null
      }
    });
    return true;
  }
  static async getSession(session_token) {
    const result = UserValidation.TOKEN.safeParse(session_token);
    if (result.error || !session_token) {
      return false;
    }
    const session = await prismaClient.session.findFirst({
      where: {
        id: session_token
      }
    });
    if (!session) {
      return false;
    }
    console.log("session");
    console.log(session);
    return session;
  }
  static async getUserBySession(id) {
    const result = UserValidation.TOKEN.safeParse(id);
    if (result.error) {
      throw new HTTPException(401, {
        message: "Unauthorized"
      });
    }
    const user = await prismaClient.user.findFirst({
      where: {
        id
      }
    });
    if (!user) {
      throw new HTTPException(401, {
        message: "Unauthorized"
      });
    }
    return user;
  }
  static async deleteSession(session_token) {
    const result = UserValidation.TOKEN.safeParse(session_token);
    if (result.error || !session_token) {
      return false;
    }
    await prismaClient.session.deleteMany({
      where: {
        id: session_token
      }
    });
    return true;
  }
}

// node_modules/hono/dist/utils/cookie.js
var algorithm = { name: "HMAC", hash: "SHA-256" };
var getCryptoKey = async (secret) => {
  const secretBuf = typeof secret === "string" ? new TextEncoder().encode(secret) : secret;
  return await crypto.subtle.importKey("raw", secretBuf, algorithm, false, ["sign", "verify"]);
};
var makeSignature = async (value, secret) => {
  const key = await getCryptoKey(secret);
  const signature = await crypto.subtle.sign(algorithm.name, key, new TextEncoder().encode(value));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
};
var verifySignature = async (base64Signature, value, secret) => {
  try {
    const signatureBinStr = atob(base64Signature);
    const signature = new Uint8Array(signatureBinStr.length);
    for (let i = 0, len = signatureBinStr.length;i < len; i++) {
      signature[i] = signatureBinStr.charCodeAt(i);
    }
    return await crypto.subtle.verify(algorithm, secret, signature, new TextEncoder().encode(value));
  } catch {
    return false;
  }
};
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var parse = (cookie, name) => {
  if (name && cookie.indexOf(name) === -1) {
    return {};
  }
  const pairs = cookie.trim().split(";");
  const parsedCookie = {};
  for (let pairStr of pairs) {
    pairStr = pairStr.trim();
    const valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1) {
      continue;
    }
    const cookieName = pairStr.substring(0, valueStartPos).trim();
    if (name && name !== cookieName || !validCookieNameRegEx.test(cookieName)) {
      continue;
    }
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"')) {
      cookieValue = cookieValue.slice(1, -1);
    }
    if (validCookieValueRegEx.test(cookieValue)) {
      parsedCookie[cookieName] = decodeURIComponent_(cookieValue);
      if (name) {
        break;
      }
    }
  }
  return parsedCookie;
};
var parseSigned = async (cookie, secret, name) => {
  const parsedCookie = {};
  const secretKey = await getCryptoKey(secret);
  for (const [key, value] of Object.entries(parse(cookie, name))) {
    const signatureStartPos = value.lastIndexOf(".");
    if (signatureStartPos < 1) {
      continue;
    }
    const signedValue = value.substring(0, signatureStartPos);
    const signature = value.substring(signatureStartPos + 1);
    if (signature.length !== 44 || !signature.endsWith("=")) {
      continue;
    }
    const isVerified = await verifySignature(signature, signedValue, secretKey);
    parsedCookie[key] = isVerified ? signedValue : false;
  }
  return parsedCookie;
};
var _serialize = (name, value, opt = {}) => {
  let cookie = `${name}=${value}`;
  if (name.startsWith("__Secure-") && !opt.secure) {
    throw new Error("__Secure- Cookie must have Secure attributes");
  }
  if (name.startsWith("__Host-")) {
    if (!opt.secure) {
      throw new Error("__Host- Cookie must have Secure attributes");
    }
    if (opt.path !== "/") {
      throw new Error('__Host- Cookie must have Path attributes with "/"');
    }
    if (opt.domain) {
      throw new Error("__Host- Cookie must not have Domain attributes");
    }
  }
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    if (opt.maxAge > 34560000) {
      throw new Error("Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration.");
    }
    cookie += `; Max-Age=${opt.maxAge | 0}`;
  }
  if (opt.domain && opt.prefix !== "host") {
    cookie += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    cookie += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    if (opt.expires.getTime() - Date.now() > 34560000000) {
      throw new Error("Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future.");
    }
    cookie += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1)}`;
  }
  if (opt.partitioned) {
    if (!opt.secure) {
      throw new Error("Partitioned Cookie must have Secure attributes");
    }
    cookie += "; Partitioned";
  }
  return cookie;
};
var serialize = (name, value, opt) => {
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};
var serializeSigned = async (name, value, secret, opt = {}) => {
  const signature = await makeSignature(value, secret);
  value = `${value}.${signature}`;
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};

// node_modules/hono/dist/helper/cookie/index.js
var getCookie = (c, key, prefix) => {
  const cookie2 = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie2) {
      return;
    }
    let finalKey = key;
    if (prefix === "secure") {
      finalKey = "__Secure-" + key;
    } else if (prefix === "host") {
      finalKey = "__Host-" + key;
    }
    const obj2 = parse(cookie2, finalKey);
    return obj2[finalKey];
  }
  if (!cookie2) {
    return {};
  }
  const obj = parse(cookie2);
  return obj;
};
var getSignedCookie = async (c, secret, key, prefix) => {
  const cookie2 = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie2) {
      return;
    }
    let finalKey = key;
    if (prefix === "secure") {
      finalKey = "__Secure-" + key;
    } else if (prefix === "host") {
      finalKey = "__Host-" + key;
    }
    const obj2 = await parseSigned(cookie2, secret, finalKey);
    return obj2[finalKey];
  }
  if (!cookie2) {
    return {};
  }
  const obj = await parseSigned(cookie2, secret);
  return obj;
};
var setCookie = (c, name, value, opt) => {
  let cookie2;
  if (opt?.prefix === "secure") {
    cookie2 = serialize("__Secure-" + name, value, { path: "/", ...opt, secure: true });
  } else if (opt?.prefix === "host") {
    cookie2 = serialize("__Host-" + name, value, {
      ...opt,
      path: "/",
      secure: true,
      domain: undefined
    });
  } else {
    cookie2 = serialize(name, value, { path: "/", ...opt });
  }
  c.header("Set-Cookie", cookie2, { append: true });
};
var setSignedCookie = async (c, name, value, secret, opt) => {
  let cookie2;
  if (opt?.prefix === "secure") {
    cookie2 = await serializeSigned("__Secure-" + name, value, secret, {
      path: "/",
      ...opt,
      secure: true
    });
  } else if (opt?.prefix === "host") {
    cookie2 = await serializeSigned("__Host-" + name, value, secret, {
      ...opt,
      path: "/",
      secure: true,
      domain: undefined
    });
  } else {
    cookie2 = await serializeSigned(name, value, secret, { path: "/", ...opt });
  }
  c.header("set-cookie", cookie2, { append: true });
};
var deleteCookie = (c, name, opt) => {
  const deletedCookie = getCookie(c, name);
  setCookie(c, name, "", { ...opt, maxAge: 0 });
  return deletedCookie;
};

// src/middleware/auth-middleware.ts
var secret_session_key = Bun.env.SECRET_SESSION_KEY ?? "";
var authMiddleware = async (c, next) => {
  const token = c.req.header("Authorization");
  c.res.headers.append("X-Status", "Debug message");
  const user = await UserService.get(token);
  c.set("user", user);
  await next();
};
var webAuthMiddleware = async (c, next) => {
  const sessionId = await getSignedCookie(c, secret_session_key, "x-hono-session");
  if (!sessionId) {
    return c.redirect("/login");
  }
  const session = await UserService.getSession(sessionId);
  if (!session) {
    return c.redirect("/login");
  }
  const user = await UserService.getUserBySession(session.user_id);
  c.set("user", user);
  await next();
};

// src/controller/user-controller.ts
var userController = new Hono2;
userController.post("/api/users", async (c) => {
  const request3 = await c.req.json();
  const response = await UserService.register(request3);
  return c.json({
    data: response
  });
});
userController.post("/api/users/login", async (c) => {
  const request3 = await c.req.json();
  const response = await UserService.login(request3);
  return c.json({
    data: response
  });
});
userController.use(authMiddleware);
userController.get("/api/users/current", async (c) => {
  const user = c.get("user");
  return c.json({
    data: toUserResponse(user)
  });
});
userController.patch("/api/users/current", async (c) => {
  const user = c.get("user");
  const request3 = await c.req.json();
  const response = await UserService.update(user, request3);
  return c.json({
    data: response
  });
});
userController.delete("/api/users/current", async (c) => {
  const user = c.get("user");
  const response = await UserService.logout(user);
  return c.json({
    data: response
  });
});

// node_modules/hono/dist/middleware/request-id/request-id.js
var requestId = ({
  limitLength = 255,
  headerName = "X-Request-Id",
  generator = () => crypto.randomUUID()
} = {}) => {
  return async function requestId2(c, next) {
    let reqId = headerName ? c.req.header(headerName) : undefined;
    if (!reqId || reqId.length > limitLength || /[^\w\-]/.test(reqId)) {
      reqId = generator(c);
    }
    c.set("requestId", reqId);
    if (headerName) {
      c.header(headerName, reqId);
    }
    await next();
  };
};

// src/model/post-model.ts
function toPostResponse(post) {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt
  };
}

// src/validation/post-validation.ts
class PostValidation {
  static CREATE = z.object({
    title: z.string().min(1).max(1000),
    content: z.string().min(1).max(1e4)
  });
  static GET = z.string().uuid();
  static UPDATE = z.object({
    id: z.string().uuid(),
    title: z.string().min(1).max(1000),
    content: z.string().min(1).max(1e4)
  });
  static DELETE = z.string().uuid();
  static SEARCH = z.object({
    title: z.string().min(1).max(1000).optional(),
    content: z.string().min(1).max(1e4).optional(),
    page: z.number().min(1).positive(),
    size: z.number().min(1).max(100).positive()
  });
}

// src/utils/page-utils.ts
var generatePagination = (currentPage, totalPages) => {
  const SIBLINGS_COUNT = 2;
  const numbersArray = [];
  const paginationArray = [];
  for (let page = 1;page <= totalPages; page++) {
    if (page === 1 || page === totalPages || page >= currentPage - SIBLINGS_COUNT && page <= currentPage + SIBLINGS_COUNT) {
      numbersArray.push(page);
    }
  }
  let previousNumber = null;
  for (const currentNumber of numbersArray) {
    if (previousNumber !== null) {
      if (currentNumber - previousNumber === 2) {
        paginationArray.push(previousNumber + 1);
      } else if (currentNumber - previousNumber > 1) {
        paginationArray.push("...");
      }
    }
    paginationArray.push(currentNumber);
    previousNumber = currentNumber;
  }
  return paginationArray;
};

// src/service/post-service.ts
class PostService {
  static async create(user, request3) {
    request3 = PostValidation.CREATE.parse(request3);
    let data = {
      ...request3,
      ...{ user_id: user.id }
    };
    const post = await prismaClient.post.create({
      data: { ...data, id: crypto.randomUUID() }
    });
    return toPostResponse(post);
  }
  static async get(user, postId) {
    postId = PostValidation.GET.parse(postId);
    const post = await this.postMustExists(user, postId);
    return toPostResponse(post);
  }
  static async postMustExists(user, postId) {
    const post = await prismaClient.post.findFirst({
      where: {
        id: postId
      }
    });
    if (!post) {
      throw new HTTPException(404, {
        message: "Post is not found"
      });
    }
    return post;
  }
  static async update(user, request3) {
    request3 = PostValidation.UPDATE.parse(request3);
    await this.postMustExists(user, request3.id);
    const post = await prismaClient.post.update({
      where: {
        id: request3.id
      },
      data: {
        ...request3
      }
    });
    return toPostResponse(post);
  }
  static async delete(user, postId) {
    postId = PostValidation.DELETE.parse(postId);
    await this.postMustExists(user, postId);
    await prismaClient.post.delete({
      where: {
        user_id: user.id,
        id: postId
      }
    });
    return true;
  }
  static async search(user, request3) {
    request3 = PostValidation.SEARCH.parse(request3);
    const filters = [];
    if (request3.title) {
      filters.push({
        title: {
          contains: request3.title
        }
      });
    }
    if (request3.content) {
      filters.push({
        content: {
          contains: request3.content
        }
      });
    }
    const skip2 = (request3.page - 1) * request3.size;
    const posts = await prismaClient.post.findMany({
      where: {
        user_id: user.id,
        AND: filters
      },
      take: request3.size,
      skip: skip2
    });
    const total = await prismaClient.post.count({
      where: {
        user_id: user.id,
        AND: filters
      }
    });
    const current_page = request3.page;
    const size = request3.size;
    const total_page = Math.ceil(total / request3.size);
    const pagination_meta = generatePagination(current_page, total_page);
    return {
      data: posts.map((post) => toPostResponse(post)),
      meta: { current_page, size, total_page, pagination_meta }
    };
  }
}

// src/controller/post-controller.ts
var postController = new Hono2;
postController.use(authMiddleware);
postController.post("/api/post", async (c) => {
  const user = c.get("user");
  const request3 = await c.req.json();
  const response = await PostService.create(user, request3);
  return c.json({
    data: response
  });
});
postController.get("/api/post/:id", async (c) => {
  const user = c.get("user");
  const postId = c.req.param("id");
  const response = await PostService.get(user, postId);
  return c.json({
    data: response
  });
});
postController.put("/api/post/:id", async (c) => {
  const user = c.get("user");
  const postId = c.req.param("id");
  const request3 = await c.req.json();
  request3.id = postId;
  const response = await PostService.update(user, request3);
  return c.json({
    data: response
  });
});
postController.delete("/api/post/:id", async (c) => {
  const user = c.get("user");
  const postId = c.req.param("id");
  const response = await PostService.delete(user, postId);
  return c.json({
    data: response
  });
});
postController.get("/api/posts", async (c) => {
  const user = c.get("user");
  const request3 = {
    title: c.req.query("title"),
    content: c.req.query("content"),
    page: c.req.query("page") ? Number(c.req.query("page")) : 1,
    size: c.req.query("size") ? Number(c.req.query("size")) : 10
  };
  const response = await PostService.search(user, request3);
  return c.json(response);
});

// node_modules/hono/dist/helper/html/index.js
var html3 = (strings, ...values) => {
  const buffer = [""];
  for (let i = 0, len = strings.length - 1;i < len; i++) {
    buffer[0] += strings[i];
    const children = Array.isArray(values[i]) ? values[i].flat(Infinity) : [values[i]];
    for (let i2 = 0, len2 = children.length;i2 < len2; i2++) {
      const child = children[i2];
      if (typeof child === "string") {
        escapeToBuffer(child, buffer);
      } else if (typeof child === "number") {
        buffer[0] += child;
      } else if (typeof child === "boolean" || child === null || child === undefined) {
        continue;
      } else if (typeof child === "object" && child.isEscaped) {
        if (child.callbacks) {
          buffer.unshift("", child);
        } else {
          const tmp = child.toString();
          if (tmp instanceof Promise) {
            buffer.unshift("", tmp);
          } else {
            buffer[0] += tmp;
          }
        }
      } else if (child instanceof Promise) {
        buffer.unshift("", child);
      } else {
        escapeToBuffer(child.toString(), buffer);
      }
    }
  }
  buffer[0] += strings[strings.length - 1];
  return buffer.length === 1 ? "callbacks" in buffer ? raw2(resolveCallbackSync(raw2(buffer[0], buffer.callbacks))) : raw2(buffer[0]) : stringBufferToString(buffer, buffer.callbacks);
};

// node_modules/hono/dist/jsx/constants.js
var DOM_RENDERER = Symbol("RENDERER");
var DOM_ERROR_HANDLER = Symbol("ERROR_HANDLER");
var DOM_STASH = Symbol("STASH");
var DOM_INTERNAL_TAG = Symbol("INTERNAL");
var DOM_MEMO = Symbol("MEMO");
var PERMALINK = Symbol("PERMALINK");

// node_modules/hono/dist/jsx/dom/utils.js
var setInternalTagFlag = (fn) => {
  fn[DOM_INTERNAL_TAG] = true;
  return fn;
};

// node_modules/hono/dist/jsx/dom/context.js
var createContextProviderFunction = (values) => ({ value, children }) => {
  if (!children) {
    return;
  }
  const props = {
    children: [
      {
        tag: setInternalTagFlag(() => {
          values.push(value);
        }),
        props: {}
      }
    ]
  };
  if (Array.isArray(children)) {
    props.children.push(...children.flat());
  } else {
    props.children.push(children);
  }
  props.children.push({
    tag: setInternalTagFlag(() => {
      values.pop();
    }),
    props: {}
  });
  const res = { tag: "", props, type: "" };
  res[DOM_ERROR_HANDLER] = (err) => {
    values.pop();
    throw err;
  };
  return res;
};
var createContext = (defaultValue) => {
  const values = [defaultValue];
  const context4 = createContextProviderFunction(values);
  context4.values = values;
  context4.Provider = context4;
  globalContexts.push(context4);
  return context4;
};

// node_modules/hono/dist/jsx/context.js
var globalContexts = [];
var createContext2 = (defaultValue) => {
  const values = [defaultValue];
  const context5 = (props) => {
    values.push(props.value);
    let string;
    try {
      string = props.children ? (Array.isArray(props.children) ? new JSXFragmentNode("", {}, props.children) : props.children).toString() : "";
    } finally {
      values.pop();
    }
    if (string instanceof Promise) {
      return string.then((resString) => raw2(resString, resString.callbacks));
    } else {
      return raw2(string);
    }
  };
  context5.values = values;
  context5.Provider = context5;
  context5[DOM_RENDERER] = createContextProviderFunction(values);
  globalContexts.push(context5);
  return context5;
};
var useContext = (context5) => {
  return context5.values.at(-1);
};

// node_modules/hono/dist/jsx/intrinsic-element/common.js
var deDupeKeyMap = {
  title: [],
  script: ["src"],
  style: ["data-href"],
  link: ["href"],
  meta: ["name", "httpEquiv", "charset", "itemProp"]
};
var domRenderers = {};
var dataPrecedenceAttr = "data-precedence";

// node_modules/hono/dist/jsx/intrinsic-element/components.js
var exports_components = {};
__export(exports_components, {
  title: () => {
    {
      return title;
    }
  },
  style: () => {
    {
      return style;
    }
  },
  script: () => {
    {
      return script;
    }
  },
  meta: () => {
    {
      return meta;
    }
  },
  link: () => {
    {
      return link;
    }
  },
  input: () => {
    {
      return input;
    }
  },
  form: () => {
    {
      return form;
    }
  },
  button: () => {
    {
      return button;
    }
  }
});

// node_modules/hono/dist/jsx/children.js
var toArray = (children) => Array.isArray(children) ? children : [children];

// node_modules/hono/dist/jsx/intrinsic-element/components.js
var metaTagMap = new WeakMap;
var insertIntoHead = (tagName, tag, props, precedence) => ({ buffer, context: context6 }) => {
  if (!buffer) {
    return;
  }
  const map = metaTagMap.get(context6) || {};
  metaTagMap.set(context6, map);
  const tags = map[tagName] ||= [];
  let duped = false;
  const deDupeKeys = deDupeKeyMap[tagName];
  if (deDupeKeys.length > 0) {
    LOOP:
      for (const [, tagProps] of tags) {
        for (const key of deDupeKeys) {
          if ((tagProps?.[key] ?? null) === props?.[key]) {
            duped = true;
            break LOOP;
          }
        }
      }
  }
  if (duped) {
    buffer[0] = buffer[0].replaceAll(tag, "");
  } else if (deDupeKeys.length > 0) {
    tags.push([tag, props, precedence]);
  } else {
    tags.unshift([tag, props, precedence]);
  }
  if (buffer[0].indexOf("</head>") !== -1) {
    let insertTags;
    if (precedence === undefined) {
      insertTags = tags.map(([tag2]) => tag2);
    } else {
      const precedences = [];
      insertTags = tags.map(([tag2, , precedence2]) => {
        let order = precedences.indexOf(precedence2);
        if (order === -1) {
          precedences.push(precedence2);
          order = precedences.length - 1;
        }
        return [tag2, order];
      }).sort((a, b) => a[1] - b[1]).map(([tag2]) => tag2);
    }
    insertTags.forEach((tag2) => {
      buffer[0] = buffer[0].replaceAll(tag2, "");
    });
    buffer[0] = buffer[0].replace(/(?=<\/head>)/, insertTags.join(""));
  }
};
var returnWithoutSpecialBehavior = (tag, children2, props) => raw2(new JSXNode(tag, props, toArray(children2 ?? [])).toString());
var documentMetadataTag = (tag, children2, props, sort) => {
  if ("itemProp" in props) {
    return returnWithoutSpecialBehavior(tag, children2, props);
  }
  let { precedence, blocking, ...restProps } = props;
  precedence = sort ? precedence ?? "" : undefined;
  if (sort) {
    restProps[dataPrecedenceAttr] = precedence;
  }
  const string = new JSXNode(tag, restProps, toArray(children2 || [])).toString();
  if (string instanceof Promise) {
    return string.then((resString) => raw2(string, [
      ...resString.callbacks || [],
      insertIntoHead(tag, resString, restProps, precedence)
    ]));
  } else {
    return raw2(string, [insertIntoHead(tag, string, restProps, precedence)]);
  }
};
var title = ({ children: children2, ...props }) => {
  const nameSpaceContext = getNameSpaceContext();
  if (nameSpaceContext) {
    const context6 = useContext(nameSpaceContext);
    if (context6 === "svg" || context6 === "head") {
      return new JSXNode("title", props, toArray(children2 ?? []));
    }
  }
  return documentMetadataTag("title", children2, props, false);
};
var script = ({
  children: children2,
  ...props
}) => {
  const nameSpaceContext = getNameSpaceContext();
  if (["src", "async"].some((k) => !props[k]) || nameSpaceContext && useContext(nameSpaceContext) === "head") {
    return returnWithoutSpecialBehavior("script", children2, props);
  }
  return documentMetadataTag("script", children2, props, false);
};
var style = ({
  children: children2,
  ...props
}) => {
  if (!["href", "precedence"].every((k) => (k in props))) {
    return returnWithoutSpecialBehavior("style", children2, props);
  }
  props["data-href"] = props.href;
  delete props.href;
  return documentMetadataTag("style", children2, props, true);
};
var link = ({ children: children2, ...props }) => {
  if (["onLoad", "onError"].some((k) => (k in props)) || props.rel === "stylesheet" && (!("precedence" in props) || ("disabled" in props))) {
    return returnWithoutSpecialBehavior("link", children2, props);
  }
  return documentMetadataTag("link", children2, props, "precedence" in props);
};
var meta = ({ children: children2, ...props }) => {
  const nameSpaceContext = getNameSpaceContext();
  if (nameSpaceContext && useContext(nameSpaceContext) === "head") {
    return returnWithoutSpecialBehavior("meta", children2, props);
  }
  return documentMetadataTag("meta", children2, props, false);
};
var newJSXNode = (tag, { children: children2, ...props }) => new JSXNode(tag, props, toArray(children2 ?? []));
var form = (props) => {
  if (typeof props.action === "function") {
    props.action = PERMALINK in props.action ? props.action[PERMALINK] : undefined;
  }
  return newJSXNode("form", props);
};
var formActionableElement = (tag, props) => {
  if (typeof props.formAction === "function") {
    props.formAction = PERMALINK in props.formAction ? props.formAction[PERMALINK] : undefined;
  }
  return newJSXNode(tag, props);
};
var input = (props) => formActionableElement("input", props);
var button = (props) => formActionableElement("button", props);

// node_modules/hono/dist/jsx/utils.js
var normalizeElementKeyMap = new Map([
  ["className", "class"],
  ["htmlFor", "for"],
  ["crossOrigin", "crossorigin"],
  ["httpEquiv", "http-equiv"],
  ["itemProp", "itemprop"],
  ["fetchPriority", "fetchpriority"],
  ["noModule", "nomodule"],
  ["formAction", "formaction"]
]);
var normalizeIntrinsicElementKey = (key) => normalizeElementKeyMap.get(key) || key;
var styleObjectForEach = (style2, fn) => {
  for (const [k, v] of Object.entries(style2)) {
    const key = k[0] === "-" || !/[A-Z]/.test(k) ? k : k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    fn(key, v == null ? null : typeof v === "number" ? !key.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/) ? `${v}px` : `${v}` : v);
  }
};

// node_modules/hono/dist/jsx/base.js
var nameSpaceContext = undefined;
var getNameSpaceContext = () => nameSpaceContext;
var toSVGAttributeName = (key) => /[A-Z]/.test(key) && key.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/) ? key.replace(/([A-Z])/g, "-$1").toLowerCase() : key;
var emptyTags = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var booleanAttributes = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "download",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
var childrenToStringToBuffer = (children2, buffer) => {
  for (let i = 0, len = children2.length;i < len; i++) {
    const child = children2[i];
    if (typeof child === "string") {
      escapeToBuffer(child, buffer);
    } else if (typeof child === "boolean" || child === null || child === undefined) {
      continue;
    } else if (child instanceof JSXNode) {
      child.toStringToBuffer(buffer);
    } else if (typeof child === "number" || child.isEscaped) {
      buffer[0] += child;
    } else if (child instanceof Promise) {
      buffer.unshift("", child);
    } else {
      childrenToStringToBuffer(child, buffer);
    }
  }
};
var JSXNode = class {
  tag;
  props;
  key;
  children;
  isEscaped = true;
  localContexts;
  constructor(tag, props, children2) {
    this.tag = tag;
    this.props = props;
    this.children = children2;
  }
  get type() {
    return this.tag;
  }
  get ref() {
    return this.props.ref || null;
  }
  toString() {
    const buffer = [""];
    this.localContexts?.forEach(([context7, value]) => {
      context7.values.push(value);
    });
    try {
      this.toStringToBuffer(buffer);
    } finally {
      this.localContexts?.forEach(([context7]) => {
        context7.values.pop();
      });
    }
    return buffer.length === 1 ? "callbacks" in buffer ? resolveCallbackSync(raw2(buffer[0], buffer.callbacks)).toString() : buffer[0] : stringBufferToString(buffer, buffer.callbacks);
  }
  toStringToBuffer(buffer) {
    const tag = this.tag;
    const props = this.props;
    let { children: children2 } = this;
    buffer[0] += `<${tag}`;
    const normalizeKey = nameSpaceContext && useContext(nameSpaceContext) === "svg" ? (key) => toSVGAttributeName(normalizeIntrinsicElementKey(key)) : (key) => normalizeIntrinsicElementKey(key);
    for (let [key, v] of Object.entries(props)) {
      key = normalizeKey(key);
      if (key === "children") {
      } else if (key === "style" && typeof v === "object") {
        let styleStr = "";
        styleObjectForEach(v, (property, value) => {
          if (value != null) {
            styleStr += `${styleStr ? ";" : ""}${property}:${value}`;
          }
        });
        buffer[0] += ' style="';
        escapeToBuffer(styleStr, buffer);
        buffer[0] += '"';
      } else if (typeof v === "string") {
        buffer[0] += ` ${key}="`;
        escapeToBuffer(v, buffer);
        buffer[0] += '"';
      } else if (v === null || v === undefined) {
      } else if (typeof v === "number" || v.isEscaped) {
        buffer[0] += ` ${key}="${v}"`;
      } else if (typeof v === "boolean" && booleanAttributes.includes(key)) {
        if (v) {
          buffer[0] += ` ${key}=""`;
        }
      } else if (key === "dangerouslySetInnerHTML") {
        if (children2.length > 0) {
          throw "Can only set one of `children` or `props.dangerouslySetInnerHTML`.";
        }
        children2 = [raw2(v.__html)];
      } else if (v instanceof Promise) {
        buffer[0] += ` ${key}="`;
        buffer.unshift('"', v);
      } else if (typeof v === "function") {
        if (!key.startsWith("on")) {
          throw `Invalid prop '${key}' of type 'function' supplied to '${tag}'.`;
        }
      } else {
        buffer[0] += ` ${key}="`;
        escapeToBuffer(v.toString(), buffer);
        buffer[0] += '"';
      }
    }
    if (emptyTags.includes(tag) && children2.length === 0) {
      buffer[0] += "/>";
      return;
    }
    buffer[0] += ">";
    childrenToStringToBuffer(children2, buffer);
    buffer[0] += `</${tag}>`;
  }
};
var JSXFunctionNode = class extends JSXNode {
  toStringToBuffer(buffer) {
    const { children: children2 } = this;
    const res = this.tag.call(null, {
      ...this.props,
      children: children2.length <= 1 ? children2[0] : children2
    });
    if (typeof res === "boolean" || res == null) {
      return;
    } else if (res instanceof Promise) {
      if (globalContexts.length === 0) {
        buffer.unshift("", res);
      } else {
        const currentContexts = globalContexts.map((c) => [c, c.values.at(-1)]);
        buffer.unshift("", res.then((childRes) => {
          if (childRes instanceof JSXNode) {
            childRes.localContexts = currentContexts;
          }
          return childRes;
        }));
      }
    } else if (res instanceof JSXNode) {
      res.toStringToBuffer(buffer);
    } else if (typeof res === "number" || res.isEscaped) {
      buffer[0] += res;
      if (res.callbacks) {
        buffer.callbacks ||= [];
        buffer.callbacks.push(...res.callbacks);
      }
    } else {
      escapeToBuffer(res, buffer);
    }
  }
};
var JSXFragmentNode = class extends JSXNode {
  toStringToBuffer(buffer) {
    childrenToStringToBuffer(this.children, buffer);
  }
};
var jsx = (tag, props, ...children2) => {
  props ??= {};
  if (children2.length) {
    props.children = children2.length === 1 ? children2[0] : children2;
  }
  const key = props.key;
  delete props["key"];
  const node4 = jsxFn(tag, props, children2);
  node4.key = key;
  return node4;
};
var initDomRenderer = false;
var jsxFn = (tag, props, children2) => {
  if (!initDomRenderer) {
    for (const k in domRenderers) {
      exports_components[k][DOM_RENDERER] = domRenderers[k];
    }
    initDomRenderer = true;
  }
  if (typeof tag === "function") {
    return new JSXFunctionNode(tag, props, children2);
  } else if (exports_components[tag]) {
    return new JSXFunctionNode(exports_components[tag], props, children2);
  } else if (tag === "svg" || tag === "head") {
    nameSpaceContext ||= createContext2("");
    return new JSXNode(tag, props, [
      new JSXFunctionNode(nameSpaceContext, {
        value: tag
      }, children2)
    ]);
  } else {
    return new JSXNode(tag, props, children2);
  }
};
var Fragment = ({
  children: children2
}) => {
  return new JSXFragmentNode("", {
    children: children2
  }, Array.isArray(children2) ? children2 : children2 ? [children2] : []);
};

// node_modules/hono/dist/jsx/dom/intrinsic-element/components.js
var exports_components2 = {};
__export(exports_components2, {
  title: () => {
    {
      return title2;
    }
  },
  style: () => {
    {
      return style2;
    }
  },
  script: () => {
    {
      return script2;
    }
  },
  meta: () => {
    {
      return meta2;
    }
  },
  link: () => {
    {
      return link2;
    }
  },
  input: () => {
    {
      return input2;
    }
  },
  form: () => {
    {
      return form2;
    }
  },
  composeRef: () => {
    {
      return composeRef;
    }
  },
  clearCache: () => {
    {
      return clearCache;
    }
  },
  button: () => {
    {
      return button2;
    }
  }
});

// node_modules/hono/dist/jsx/dom/render.js
var HONO_PORTAL_ELEMENT = "_hp";
var eventAliasMap = {
  Change: "Input",
  DoubleClick: "DblClick"
};
var nameSpaceMap = {
  svg: "2000/svg",
  math: "1998/Math/MathML"
};
var buildDataStack = [];
var refCleanupMap = new WeakMap;
var nameSpaceContext2 = undefined;
var getNameSpaceContext2 = () => nameSpaceContext2;
var isNodeString = (node4) => ("t" in node4);
var eventCache = {
  onClick: ["click", false]
};
var getEventSpec = (key) => {
  if (!key.startsWith("on")) {
    return;
  }
  if (eventCache[key]) {
    return eventCache[key];
  }
  const match = key.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);
  if (match) {
    const [, eventName, capture] = match;
    return eventCache[key] = [(eventAliasMap[eventName] || eventName).toLowerCase(), !!capture];
  }
  return;
};
var toAttributeName = (element, key) => nameSpaceContext2 && element instanceof SVGElement && /[A-Z]/.test(key) && ((key in element.style) || key.match(/^(?:o|pai|str|u|ve)/)) ? key.replace(/([A-Z])/g, "-$1").toLowerCase() : key;
var applyProps = (container, attributes, oldAttributes) => {
  attributes ||= {};
  for (let key in attributes) {
    const value = attributes[key];
    if (key !== "children" && (!oldAttributes || oldAttributes[key] !== value)) {
      key = normalizeIntrinsicElementKey(key);
      const eventSpec = getEventSpec(key);
      if (eventSpec) {
        if (oldAttributes?.[key] !== value) {
          if (oldAttributes) {
            container.removeEventListener(eventSpec[0], oldAttributes[key], eventSpec[1]);
          }
          if (value != null) {
            if (typeof value !== "function") {
              throw new Error(`Event handler for "${key}" is not a function`);
            }
            container.addEventListener(eventSpec[0], value, eventSpec[1]);
          }
        }
      } else if (key === "dangerouslySetInnerHTML" && value) {
        container.innerHTML = value.__html;
      } else if (key === "ref") {
        let cleanup;
        if (typeof value === "function") {
          cleanup = value(container) || (() => value(null));
        } else if (value && "current" in value) {
          value.current = container;
          cleanup = () => value.current = null;
        }
        refCleanupMap.set(container, cleanup);
      } else if (key === "style") {
        const style2 = container.style;
        if (typeof value === "string") {
          style2.cssText = value;
        } else {
          style2.cssText = "";
          if (value != null) {
            styleObjectForEach(value, style2.setProperty.bind(style2));
          }
        }
      } else {
        if (key === "value") {
          const nodeName = container.nodeName;
          if (nodeName === "INPUT" || nodeName === "TEXTAREA" || nodeName === "SELECT") {
            container.value = value === null || value === undefined || value === false ? null : value;
            if (nodeName === "TEXTAREA") {
              container.textContent = value;
              continue;
            } else if (nodeName === "SELECT") {
              if (container.selectedIndex === -1) {
                container.selectedIndex = 0;
              }
              continue;
            }
          }
        } else if (key === "checked" && container.nodeName === "INPUT" || key === "selected" && container.nodeName === "OPTION") {
          container[key] = value;
        }
        const k = toAttributeName(container, key);
        if (value === null || value === undefined || value === false) {
          container.removeAttribute(k);
        } else if (value === true) {
          container.setAttribute(k, "");
        } else if (typeof value === "string" || typeof value === "number") {
          container.setAttribute(k, value);
        } else {
          container.setAttribute(k, value.toString());
        }
      }
    }
  }
  if (oldAttributes) {
    for (let key in oldAttributes) {
      const value = oldAttributes[key];
      if (key !== "children" && !(key in attributes)) {
        key = normalizeIntrinsicElementKey(key);
        const eventSpec = getEventSpec(key);
        if (eventSpec) {
          container.removeEventListener(eventSpec[0], value, eventSpec[1]);
        } else if (key === "ref") {
          refCleanupMap.get(container)?.();
        } else {
          container.removeAttribute(toAttributeName(container, key));
        }
      }
    }
  }
};
var invokeTag = (context9, node4) => {
  node4[DOM_STASH][0] = 0;
  buildDataStack.push([context9, node4]);
  const func = node4.tag[DOM_RENDERER] || node4.tag;
  const props = func.defaultProps ? {
    ...func.defaultProps,
    ...node4.props
  } : node4.props;
  try {
    return [func.call(null, props)];
  } finally {
    buildDataStack.pop();
  }
};
var getNextChildren = (node4, container, nextChildren, childrenToRemove, callbacks) => {
  if (node4.vR?.length) {
    childrenToRemove.push(...node4.vR);
    delete node4.vR;
  }
  if (typeof node4.tag === "function") {
    node4[DOM_STASH][1][STASH_EFFECT]?.forEach((data) => callbacks.push(data));
  }
  node4.vC.forEach((child) => {
    if (isNodeString(child)) {
      nextChildren.push(child);
    } else {
      if (typeof child.tag === "function" || child.tag === "") {
        child.c = container;
        const currentNextChildrenIndex = nextChildren.length;
        getNextChildren(child, container, nextChildren, childrenToRemove, callbacks);
        if (child.s) {
          for (let i = currentNextChildrenIndex;i < nextChildren.length; i++) {
            nextChildren[i].s = true;
          }
          child.s = false;
        }
      } else {
        nextChildren.push(child);
        if (child.vR?.length) {
          childrenToRemove.push(...child.vR);
          delete child.vR;
        }
      }
    }
  });
};
var findInsertBefore = (node4) => {
  for (;; node4 = node4.tag === HONO_PORTAL_ELEMENT || !node4.vC || !node4.pP ? node4.nN : node4.vC[0]) {
    if (!node4) {
      return null;
    }
    if (node4.tag !== HONO_PORTAL_ELEMENT && node4.e) {
      return node4.e;
    }
  }
};
var removeNode = (node4) => {
  if (!isNodeString(node4)) {
    node4[DOM_STASH]?.[1][STASH_EFFECT]?.forEach((data) => data[2]?.());
    refCleanupMap.get(node4.e)?.();
    if (node4.p === 2) {
      node4.vC?.forEach((n) => n.p = 2);
    }
    node4.vC?.forEach(removeNode);
  }
  if (!node4.p) {
    node4.e?.remove();
    delete node4.e;
  }
  if (typeof node4.tag === "function") {
    updateMap.delete(node4);
    fallbackUpdateFnArrayMap.delete(node4);
    delete node4[DOM_STASH][3];
    node4.a = true;
  }
};
var apply = (node4, container, isNew) => {
  node4.c = container;
  applyNodeObject(node4, container, isNew);
};
var findChildNodeIndex = (childNodes, child) => {
  if (!child) {
    return;
  }
  for (let i = 0, len = childNodes.length;i < len; i++) {
    if (childNodes[i] === child) {
      return i;
    }
  }
  return;
};
var cancelBuild = Symbol();
var applyNodeObject = (node4, container, isNew) => {
  const next = [];
  const remove = [];
  const callbacks = [];
  getNextChildren(node4, container, next, remove, callbacks);
  remove.forEach(removeNode);
  const childNodes = isNew ? undefined : container.childNodes;
  let offset;
  let insertBeforeNode = null;
  if (isNew) {
    offset = -1;
  } else if (!childNodes.length) {
    offset = 0;
  } else {
    const offsetByNextNode = findChildNodeIndex(childNodes, findInsertBefore(node4.nN));
    if (offsetByNextNode !== undefined) {
      insertBeforeNode = childNodes[offsetByNextNode];
      offset = offsetByNextNode;
    } else {
      offset = findChildNodeIndex(childNodes, next.find((n) => n.tag !== HONO_PORTAL_ELEMENT && n.e)?.e) ?? -1;
    }
    if (offset === -1) {
      isNew = true;
    }
  }
  for (let i = 0, len = next.length;i < len; i++, offset++) {
    const child = next[i];
    let el;
    if (child.s && child.e) {
      el = child.e;
      child.s = false;
    } else {
      const isNewLocal = isNew || !child.e;
      if (isNodeString(child)) {
        if (child.e && child.d) {
          child.e.textContent = child.t;
        }
        child.d = false;
        el = child.e ||= document.createTextNode(child.t);
      } else {
        el = child.e ||= child.n ? document.createElementNS(child.n, child.tag) : document.createElement(child.tag);
        applyProps(el, child.props, child.pP);
        applyNodeObject(child, el, isNewLocal);
      }
    }
    if (child.tag === HONO_PORTAL_ELEMENT) {
      offset--;
    } else if (isNew) {
      if (!el.parentNode) {
        container.appendChild(el);
      }
    } else if (childNodes[offset] !== el && childNodes[offset - 1] !== el) {
      if (childNodes[offset + 1] === el) {
        container.appendChild(childNodes[offset]);
      } else {
        container.insertBefore(el, insertBeforeNode || childNodes[offset] || null);
      }
    }
  }
  if (node4.pP) {
    delete node4.pP;
  }
  if (callbacks.length) {
    const useLayoutEffectCbs = [];
    const useEffectCbs = [];
    callbacks.forEach(([, useLayoutEffectCb, , useEffectCb, useInsertionEffectCb]) => {
      if (useLayoutEffectCb) {
        useLayoutEffectCbs.push(useLayoutEffectCb);
      }
      if (useEffectCb) {
        useEffectCbs.push(useEffectCb);
      }
      useInsertionEffectCb?.();
    });
    useLayoutEffectCbs.forEach((cb) => cb());
    if (useEffectCbs.length) {
      requestAnimationFrame(() => {
        useEffectCbs.forEach((cb) => cb());
      });
    }
  }
};
var fallbackUpdateFnArrayMap = new WeakMap;
var build = (context9, node4, children3) => {
  const buildWithPreviousChildren = !children3 && node4.pC;
  if (children3) {
    node4.pC ||= node4.vC;
  }
  let foundErrorHandler;
  try {
    children3 ||= typeof node4.tag == "function" ? invokeTag(context9, node4) : toArray(node4.props.children);
    if (children3[0]?.tag === "" && children3[0][DOM_ERROR_HANDLER]) {
      foundErrorHandler = children3[0][DOM_ERROR_HANDLER];
      context9[5].push([context9, foundErrorHandler, node4]);
    }
    const oldVChildren = buildWithPreviousChildren ? [...node4.pC] : node4.vC ? [...node4.vC] : undefined;
    const vChildren = [];
    let prevNode;
    for (let i = 0;i < children3.length; i++) {
      if (Array.isArray(children3[i])) {
        children3.splice(i, 1, ...children3[i].flat());
      }
      let child = buildNode(children3[i]);
      if (child) {
        if (typeof child.tag === "function" && !child.tag[DOM_INTERNAL_TAG]) {
          if (globalContexts.length > 0) {
            child[DOM_STASH][2] = globalContexts.map((c) => [c, c.values.at(-1)]);
          }
          if (context9[5]?.length) {
            child[DOM_STASH][3] = context9[5].at(-1);
          }
        }
        let oldChild;
        if (oldVChildren && oldVChildren.length) {
          const i2 = oldVChildren.findIndex(isNodeString(child) ? (c) => isNodeString(c) : child.key !== undefined ? (c) => c.key === child.key && c.tag === child.tag : (c) => c.tag === child.tag);
          if (i2 !== -1) {
            oldChild = oldVChildren[i2];
            oldVChildren.splice(i2, 1);
          }
        }
        if (oldChild) {
          if (isNodeString(child)) {
            if (oldChild.t !== child.t) {
              oldChild.t = child.t;
              oldChild.d = true;
            }
            child = oldChild;
          } else {
            const pP = oldChild.pP = oldChild.props;
            oldChild.props = child.props;
            oldChild.f ||= child.f || node4.f;
            if (typeof child.tag === "function") {
              oldChild[DOM_STASH][2] = child[DOM_STASH][2] || [];
              oldChild[DOM_STASH][3] = child[DOM_STASH][3];
              if (!oldChild.f && ((oldChild.o || oldChild) === child.o || oldChild.tag[DOM_MEMO]?.(pP, oldChild.props))) {
                oldChild.s = true;
              }
            }
            child = oldChild;
          }
        } else if (!isNodeString(child) && nameSpaceContext2) {
          const ns = useContext(nameSpaceContext2);
          if (ns) {
            child.n = ns;
          }
        }
        if (!isNodeString(child) && !child.s) {
          build(context9, child);
          delete child.f;
        }
        vChildren.push(child);
        if (prevNode && !prevNode.s && !child.s) {
          for (let p = prevNode;p && !isNodeString(p); p = p.vC?.at(-1)) {
            p.nN = child;
          }
        }
        prevNode = child;
      }
    }
    node4.vR = buildWithPreviousChildren ? [...node4.vC, ...oldVChildren || []] : oldVChildren || [];
    node4.vC = vChildren;
    if (buildWithPreviousChildren) {
      delete node4.pC;
    }
  } catch (e) {
    node4.f = true;
    if (e === cancelBuild) {
      if (foundErrorHandler) {
        return;
      } else {
        throw e;
      }
    }
    const [errorHandlerContext, errorHandler2, errorHandlerNode] = node4[DOM_STASH]?.[3] || [];
    if (errorHandler2) {
      const fallbackUpdateFn = () => update([0, false, context9[2]], errorHandlerNode);
      const fallbackUpdateFnArray = fallbackUpdateFnArrayMap.get(errorHandlerNode) || [];
      fallbackUpdateFnArray.push(fallbackUpdateFn);
      fallbackUpdateFnArrayMap.set(errorHandlerNode, fallbackUpdateFnArray);
      const fallback = errorHandler2(e, () => {
        const fnArray = fallbackUpdateFnArrayMap.get(errorHandlerNode);
        if (fnArray) {
          const i = fnArray.indexOf(fallbackUpdateFn);
          if (i !== -1) {
            fnArray.splice(i, 1);
            return fallbackUpdateFn();
          }
        }
      });
      if (fallback) {
        if (context9[0] === 1) {
          context9[1] = true;
        } else {
          build(context9, errorHandlerNode, [fallback]);
          if ((errorHandler2.length === 1 || context9 !== errorHandlerContext) && errorHandlerNode.c) {
            apply(errorHandlerNode, errorHandlerNode.c, false);
            return;
          }
        }
        throw cancelBuild;
      }
    }
    throw e;
  } finally {
    if (foundErrorHandler) {
      context9[5].pop();
    }
  }
};
var buildNode = (node4) => {
  if (node4 === undefined || node4 === null || typeof node4 === "boolean") {
    return;
  } else if (typeof node4 === "string" || typeof node4 === "number") {
    return { t: node4.toString(), d: true };
  } else {
    if ("vR" in node4) {
      node4 = {
        tag: node4.tag,
        props: node4.props,
        key: node4.key,
        f: node4.f,
        type: node4.tag,
        ref: node4.props.ref,
        o: node4.o || node4
      };
    }
    if (typeof node4.tag === "function") {
      node4[DOM_STASH] = [0, []];
    } else {
      const ns = nameSpaceMap[node4.tag];
      if (ns) {
        nameSpaceContext2 ||= createContext("");
        node4.props.children = [
          {
            tag: nameSpaceContext2,
            props: {
              value: node4.n = `http://www.w3.org/${ns}`,
              children: node4.props.children
            }
          }
        ];
      }
    }
    return node4;
  }
};
var updateSync = (context9, node4) => {
  node4[DOM_STASH][2]?.forEach(([c, v]) => {
    c.values.push(v);
  });
  try {
    build(context9, node4, undefined);
  } catch {
    return;
  }
  if (node4.a) {
    delete node4.a;
    return;
  }
  node4[DOM_STASH][2]?.forEach(([c]) => {
    c.values.pop();
  });
  if (context9[0] !== 1 || !context9[1]) {
    apply(node4, node4.c, false);
  }
};
var updateMap = new WeakMap;
var currentUpdateSets = [];
var update = async (context9, node4) => {
  context9[5] ||= [];
  const existing = updateMap.get(node4);
  if (existing) {
    existing[0](undefined);
  }
  let resolve;
  const promise = new Promise((r) => resolve = r);
  updateMap.set(node4, [
    resolve,
    () => {
      if (context9[2]) {
        context9[2](context9, node4, (context22) => {
          updateSync(context22, node4);
        }).then(() => resolve(node4));
      } else {
        updateSync(context9, node4);
        resolve(node4);
      }
    }
  ]);
  if (currentUpdateSets.length) {
    currentUpdateSets.at(-1).add(node4);
  } else {
    await Promise.resolve();
    const latest = updateMap.get(node4);
    if (latest) {
      updateMap.delete(node4);
      latest[1]();
    }
  }
  return promise;
};
var createPortal = (children3, container, key) => ({
  tag: HONO_PORTAL_ELEMENT,
  props: {
    children: children3
  },
  key,
  e: container,
  p: 1
});

// node_modules/hono/dist/jsx/hooks/index.js
var STASH_SATE = 0;
var STASH_EFFECT = 1;
var STASH_CALLBACK = 2;
var STASH_MEMO = 3;
var resolvedPromiseValueMap = new WeakMap;
var isDepsChanged = (prevDeps, deps) => !prevDeps || !deps || prevDeps.length !== deps.length || deps.some((dep, i) => dep !== prevDeps[i]);
var updateHook = undefined;
var pendingStack = [];
var useState = (initialState) => {
  const resolveInitialState = () => typeof initialState === "function" ? initialState() : initialState;
  const buildData = buildDataStack.at(-1);
  if (!buildData) {
    return [resolveInitialState(), () => {
    }];
  }
  const [, node4] = buildData;
  const stateArray = node4[DOM_STASH][1][STASH_SATE] ||= [];
  const hookIndex = node4[DOM_STASH][0]++;
  return stateArray[hookIndex] ||= [
    resolveInitialState(),
    (newState) => {
      const localUpdateHook = updateHook;
      const stateData = stateArray[hookIndex];
      if (typeof newState === "function") {
        newState = newState(stateData[0]);
      }
      if (!Object.is(newState, stateData[0])) {
        stateData[0] = newState;
        if (pendingStack.length) {
          const [pendingType, pendingPromise] = pendingStack.at(-1);
          Promise.all([
            pendingType === 3 ? node4 : update([pendingType, false, localUpdateHook], node4),
            pendingPromise
          ]).then(([node22]) => {
            if (!node22 || !(pendingType === 2 || pendingType === 3)) {
              return;
            }
            const lastVC = node22.vC;
            const addUpdateTask = () => {
              setTimeout(() => {
                if (lastVC !== node22.vC) {
                  return;
                }
                update([pendingType === 3 ? 1 : 0, false, localUpdateHook], node22);
              });
            };
            requestAnimationFrame(addUpdateTask);
          });
        } else {
          update([0, false, localUpdateHook], node4);
        }
      }
    }
  ];
};
var useCallback = (callback, deps) => {
  const buildData = buildDataStack.at(-1);
  if (!buildData) {
    return callback;
  }
  const [, node4] = buildData;
  const callbackArray = node4[DOM_STASH][1][STASH_CALLBACK] ||= [];
  const hookIndex = node4[DOM_STASH][0]++;
  const prevDeps = callbackArray[hookIndex];
  if (isDepsChanged(prevDeps?.[1], deps)) {
    callbackArray[hookIndex] = [callback, deps];
  } else {
    callback = callbackArray[hookIndex][0];
  }
  return callback;
};
var use = (promise) => {
  const cachedRes = resolvedPromiseValueMap.get(promise);
  if (cachedRes) {
    if (cachedRes.length === 2) {
      throw cachedRes[1];
    }
    return cachedRes[0];
  }
  promise.then((res) => resolvedPromiseValueMap.set(promise, [res]), (e) => resolvedPromiseValueMap.set(promise, [undefined, e]));
  throw promise;
};
var useMemo = (factory, deps) => {
  const buildData = buildDataStack.at(-1);
  if (!buildData) {
    return factory();
  }
  const [, node4] = buildData;
  const memoArray = node4[DOM_STASH][1][STASH_MEMO] ||= [];
  const hookIndex = node4[DOM_STASH][0]++;
  const prevDeps = memoArray[hookIndex];
  if (isDepsChanged(prevDeps?.[1], deps)) {
    memoArray[hookIndex] = [factory(), deps];
  }
  return memoArray[hookIndex][0];
};

// node_modules/hono/dist/jsx/dom/hooks/index.js
var FormContext = createContext({
  pending: false,
  data: null,
  method: null,
  action: null
});
var actions = new Set;
var registerAction = (action) => {
  actions.add(action);
  action.finally(() => actions.delete(action));
};

// node_modules/hono/dist/jsx/dom/intrinsic-element/components.js
var clearCache = () => {
  blockingPromiseMap = Object.create(null);
  createdElements = Object.create(null);
};
var composeRef = (ref, cb) => {
  return useMemo(() => (e) => {
    let refCleanup;
    if (ref) {
      if (typeof ref === "function") {
        refCleanup = ref(e) || (() => {
          ref(null);
        });
      } else if (ref && "current" in ref) {
        ref.current = e;
        refCleanup = () => {
          ref.current = null;
        };
      }
    }
    const cbCleanup = cb(e);
    return () => {
      cbCleanup?.();
      refCleanup?.();
    };
  }, [ref]);
};
var blockingPromiseMap = Object.create(null);
var createdElements = Object.create(null);
var documentMetadataTag2 = (tag, props, preserveNodeType, supportSort, supportBlocking) => {
  if (props?.itemProp) {
    return {
      tag,
      props,
      type: tag,
      ref: props.ref
    };
  }
  const head = document.head;
  let { onLoad, onError, precedence, blocking, ...restProps } = props;
  let element = null;
  let created = false;
  const deDupeKeys = deDupeKeyMap[tag];
  let existingElements = undefined;
  if (deDupeKeys.length > 0) {
    const tags = head.querySelectorAll(tag);
    LOOP:
      for (const e of tags) {
        for (const key of deDupeKeyMap[tag]) {
          if (e.getAttribute(key) === props[key]) {
            element = e;
            break LOOP;
          }
        }
      }
    if (!element) {
      const cacheKey = deDupeKeys.reduce((acc, key) => props[key] === undefined ? acc : `${acc}-${key}-${props[key]}`, tag);
      created = !createdElements[cacheKey];
      element = createdElements[cacheKey] ||= (() => {
        const e = document.createElement(tag);
        for (const key of deDupeKeys) {
          if (props[key] !== undefined) {
            e.setAttribute(key, props[key]);
          }
          if (props.rel) {
            e.setAttribute("rel", props.rel);
          }
        }
        return e;
      })();
    }
  } else {
    existingElements = head.querySelectorAll(tag);
  }
  precedence = supportSort ? precedence ?? "" : undefined;
  if (supportSort) {
    restProps[dataPrecedenceAttr] = precedence;
  }
  const insert = useCallback((e) => {
    if (deDupeKeys.length > 0) {
      let found = false;
      for (const existingElement of head.querySelectorAll(tag)) {
        if (found && existingElement.getAttribute(dataPrecedenceAttr) !== precedence) {
          head.insertBefore(e, existingElement);
          return;
        }
        if (existingElement.getAttribute(dataPrecedenceAttr) === precedence) {
          found = true;
        }
      }
      head.appendChild(e);
    } else if (existingElements) {
      let found = false;
      for (const existingElement of existingElements) {
        if (existingElement === e) {
          found = true;
          break;
        }
      }
      if (!found) {
        head.insertBefore(e, head.contains(existingElements[0]) ? existingElements[0] : head.querySelector(tag));
      }
      existingElements = undefined;
    }
  }, [precedence]);
  const ref = composeRef(props.ref, (e) => {
    const key = deDupeKeys[0];
    if (preserveNodeType === 2) {
      e.innerHTML = "";
    }
    if (created || existingElements) {
      insert(e);
    }
    if (!onError && !onLoad) {
      return;
    }
    let promise = blockingPromiseMap[e.getAttribute(key)] ||= new Promise((resolve, reject) => {
      e.addEventListener("load", resolve);
      e.addEventListener("error", reject);
    });
    if (onLoad) {
      promise = promise.then(onLoad);
    }
    if (onError) {
      promise = promise.catch(onError);
    }
    promise.catch(() => {
    });
  });
  if (supportBlocking && blocking === "render") {
    const key = deDupeKeyMap[tag][0];
    if (props[key]) {
      const value = props[key];
      const promise = blockingPromiseMap[value] ||= new Promise((resolve, reject) => {
        insert(element);
        element.addEventListener("load", resolve);
        element.addEventListener("error", reject);
      });
      use(promise);
    }
  }
  const jsxNode = {
    tag,
    type: tag,
    props: {
      ...restProps,
      ref
    },
    ref
  };
  jsxNode.p = preserveNodeType;
  if (element) {
    jsxNode.e = element;
  }
  return createPortal(jsxNode, head);
};
var title2 = (props) => {
  const nameSpaceContext3 = getNameSpaceContext2();
  const ns = nameSpaceContext3 && useContext(nameSpaceContext3);
  if (ns?.endsWith("svg")) {
    return {
      tag: "title",
      props,
      type: "title",
      ref: props.ref
    };
  }
  return documentMetadataTag2("title", props, undefined, false, false);
};
var script2 = (props) => {
  if (!props || ["src", "async"].some((k) => !props[k])) {
    return {
      tag: "script",
      props,
      type: "script",
      ref: props.ref
    };
  }
  return documentMetadataTag2("script", props, 1, false, true);
};
var style2 = (props) => {
  if (!props || !["href", "precedence"].every((k) => (k in props))) {
    return {
      tag: "style",
      props,
      type: "style",
      ref: props.ref
    };
  }
  props["data-href"] = props.href;
  delete props.href;
  return documentMetadataTag2("style", props, 2, true, true);
};
var link2 = (props) => {
  if (!props || ["onLoad", "onError"].some((k) => (k in props)) || props.rel === "stylesheet" && (!("precedence" in props) || ("disabled" in props))) {
    return {
      tag: "link",
      props,
      type: "link",
      ref: props.ref
    };
  }
  return documentMetadataTag2("link", props, 1, "precedence" in props, true);
};
var meta2 = (props) => {
  return documentMetadataTag2("meta", props, undefined, false, false);
};
var customEventFormAction = Symbol();
var form2 = (props) => {
  const { action, ...restProps } = props;
  if (typeof action !== "function") {
    restProps.action = action;
  }
  const [state, setState] = useState([null, false]);
  const onSubmit = useCallback(async (ev) => {
    const currentAction = ev.isTrusted ? action : ev.detail[customEventFormAction];
    if (typeof currentAction !== "function") {
      return;
    }
    ev.preventDefault();
    const formData = new FormData(ev.target);
    setState([formData, true]);
    const actionRes = currentAction(formData);
    if (actionRes instanceof Promise) {
      registerAction(actionRes);
      await actionRes;
    }
    setState([null, true]);
  }, []);
  const ref = composeRef(props.ref, (el) => {
    el.addEventListener("submit", onSubmit);
    return () => {
      el.removeEventListener("submit", onSubmit);
    };
  });
  const [data, isDirty2] = state;
  state[1] = false;
  return {
    tag: FormContext,
    props: {
      value: {
        pending: data !== null,
        data,
        method: data ? "post" : null,
        action: data ? action : null
      },
      children: {
        tag: "form",
        props: {
          ...restProps,
          ref
        },
        type: "form",
        ref
      }
    },
    f: isDirty2
  };
};
var formActionableElement2 = (tag, {
  formAction,
  ...props
}) => {
  if (typeof formAction === "function") {
    const onClick = useCallback((ev) => {
      ev.preventDefault();
      ev.currentTarget.form.dispatchEvent(new CustomEvent("submit", { detail: { [customEventFormAction]: formAction } }));
    }, []);
    props.ref = composeRef(props.ref, (el) => {
      el.addEventListener("click", onClick);
      return () => {
        el.removeEventListener("click", onClick);
      };
    });
  }
  return {
    tag,
    props,
    type: tag,
    ref: props.ref
  };
};
var input2 = (props) => formActionableElement2("input", props);
var button2 = (props) => formActionableElement2("button", props);
Object.assign(domRenderers, {
  title: title2,
  script: script2,
  style: style2,
  link: link2,
  meta: meta2,
  form: form2,
  input: input2,
  button: button2
});

// node_modules/hono/dist/jsx/dom/jsx-dev-runtime.js
var jsxDEV = (tag, props, key) => {
  if (typeof tag === "string" && exports_components2[tag]) {
    tag = exports_components2[tag];
  }
  return {
    tag,
    type: tag,
    props,
    key,
    ref: props.ref
  };
};
var Fragment2 = (props) => jsxDEV("", props, undefined);

// node_modules/hono/dist/jsx/dom/components.js
var ErrorBoundary = ({ children: children3, fallback, fallbackRender, onError }) => {
  const res = Fragment2({ children: children3 });
  res[DOM_ERROR_HANDLER] = (err) => {
    if (err instanceof Promise) {
      throw err;
    }
    onError?.(err);
    return fallbackRender?.(err) || fallback;
  };
  return res;
};
var Suspense = ({
  children: children3,
  fallback
}) => {
  const res = Fragment2({ children: children3 });
  res[DOM_ERROR_HANDLER] = (err, retry) => {
    if (!(err instanceof Promise)) {
      throw err;
    }
    err.finally(retry);
    return fallback;
  };
  return res;
};

// node_modules/hono/dist/jsx/components.js
var errorBoundaryCounter = 0;
var childrenToString = async (children3) => {
  try {
    return children3.flat().map((c) => c == null || typeof c === "boolean" ? "" : c.toString());
  } catch (e) {
    if (e instanceof Promise) {
      await e;
      return childrenToString(children3);
    } else {
      throw e;
    }
  }
};
var ErrorBoundary2 = async ({ children: children3, fallback, fallbackRender, onError }) => {
  if (!children3) {
    return raw2("");
  }
  if (!Array.isArray(children3)) {
    children3 = [children3];
  }
  let fallbackStr;
  const fallbackRes = (error) => {
    onError?.(error);
    return (fallbackStr || fallbackRender?.(error) || "").toString();
  };
  let resArray = [];
  try {
    resArray = children3.map((c) => c == null || typeof c === "boolean" ? "" : c.toString());
  } catch (e) {
    fallbackStr = await fallback?.toString();
    if (e instanceof Promise) {
      resArray = [
        e.then(() => childrenToString(children3)).catch((e2) => fallbackRes(e2))
      ];
    } else {
      resArray = [fallbackRes(e)];
    }
  }
  if (resArray.some((res) => res instanceof Promise)) {
    fallbackStr ||= await fallback?.toString();
    const index = errorBoundaryCounter++;
    const replaceRe = RegExp(`(<template id="E:${index}"></template>.*?)(.*?)(<!--E:${index}-->)`);
    const caught = false;
    const catchCallback = ({ error: error2, buffer }) => {
      if (caught) {
        return "";
      }
      const fallbackResString = fallbackRes(error2);
      if (buffer) {
        buffer[0] = buffer[0].replace(replaceRe, fallbackResString);
      }
      return buffer ? "" : `<template data-hono-target="E:${index}">${fallbackResString}</template><script>
((d,c,n) => {
c=d.currentScript.previousSibling
d=d.getElementById('E:${index}')
if(!d)return
do{n=d.nextSibling;n.remove()}while(n.nodeType!=8||n.nodeValue!='E:${index}')
d.replaceWith(c.content)
})(document)
</script>`;
    };
    let error;
    const promiseAll = Promise.all(resArray).catch((e) => error = e);
    return raw2(`<template id="E:${index}"></template><!--E:${index}-->`, [
      ({ phase, buffer, context: context12 }) => {
        if (phase === HtmlEscapedCallbackPhase.BeforeStream) {
          return;
        }
        return promiseAll.then(async (htmlArray) => {
          if (error) {
            throw error;
          }
          htmlArray = htmlArray.flat();
          const content = htmlArray.join("");
          let html10 = buffer ? "" : `<template data-hono-target="E:${index}">${content}</template><script>
((d,c) => {
c=d.currentScript.previousSibling
d=d.getElementById('E:${index}')
if(!d)return
d.parentElement.insertBefore(c.content,d.nextSibling)
})(document)
</script>`;
          if (htmlArray.every((html22) => !html22.callbacks?.length)) {
            if (buffer) {
              buffer[0] = buffer[0].replace(replaceRe, content);
            }
            return html10;
          }
          if (buffer) {
            buffer[0] = buffer[0].replace(replaceRe, (_all, pre, _, post) => `${pre}${content}${post}`);
          }
          const callbacks = htmlArray.map((html22) => html22.callbacks || []).flat();
          if (phase === HtmlEscapedCallbackPhase.Stream) {
            html10 = await resolveCallback(html10, HtmlEscapedCallbackPhase.BeforeStream, true, context12);
          }
          let resolvedCount = 0;
          const promises2 = callbacks.map((c) => (...args) => c(...args)?.then((content2) => {
            resolvedCount++;
            if (buffer) {
              if (resolvedCount === callbacks.length) {
                buffer[0] = buffer[0].replace(replaceRe, (_all, _pre, content3) => content3);
              }
              buffer[0] += content2;
              return raw2("", content2.callbacks);
            }
            return raw2(content2 + (resolvedCount !== callbacks.length ? "" : `<script>
((d,c,n) => {
d=d.getElementById('E:${index}')
if(!d)return
n=d.nextSibling
while(n.nodeType!=8||n.nodeValue!='E:${index}'){n=n.nextSibling}
n.remove()
d.remove()
})(document)
</script>`), content2.callbacks);
          }).catch((error2) => catchCallback({ error: error2, buffer })));
          return raw2(html10, promises2);
        }).catch((error2) => catchCallback({ error: error2, buffer }));
      }
    ]);
  } else {
    return raw2(resArray.join(""));
  }
};
ErrorBoundary2[DOM_RENDERER] = ErrorBoundary;

// node_modules/hono/dist/jsx/streaming.js
var suspenseCounter = 0;
var Suspense2 = async ({
  children: children3,
  fallback
}) => {
  if (!children3) {
    return fallback.toString();
  }
  if (!Array.isArray(children3)) {
    children3 = [children3];
  }
  let resArray = [];
  const stackNode = { [DOM_STASH]: [0, []] };
  const popNodeStack = (value) => {
    buildDataStack.pop();
    return value;
  };
  try {
    stackNode[DOM_STASH][0] = 0;
    buildDataStack.push([[], stackNode]);
    resArray = children3.map((c) => c == null || typeof c === "boolean" ? "" : c.toString());
  } catch (e) {
    if (e instanceof Promise) {
      resArray = [
        e.then(() => {
          stackNode[DOM_STASH][0] = 0;
          buildDataStack.push([[], stackNode]);
          return childrenToString(children3).then(popNodeStack);
        })
      ];
    } else {
      throw e;
    }
  } finally {
    popNodeStack();
  }
  if (resArray.some((res) => res instanceof Promise)) {
    const index = suspenseCounter++;
    const fallbackStr = await fallback.toString();
    return raw2(`<template id="H:${index}"></template>${fallbackStr}<!--/\$-->`, [
      ...fallbackStr.callbacks || [],
      ({ phase, buffer, context: context12 }) => {
        if (phase === HtmlEscapedCallbackPhase.BeforeStream) {
          return;
        }
        return Promise.all(resArray).then(async (htmlArray) => {
          htmlArray = htmlArray.flat();
          const content = htmlArray.join("");
          if (buffer) {
            buffer[0] = buffer[0].replace(new RegExp(`<template id="H:${index}"></template>.*?<!--/\\\$-->`), content);
          }
          let html12 = buffer ? "" : `<template data-hono-target="H:${index}">${content}</template><script>
((d,c,n) => {
c=d.currentScript.previousSibling
d=d.getElementById('H:${index}')
if(!d)return
do{n=d.nextSibling;n.remove()}while(n.nodeType!=8||n.nodeValue!='/$')
d.replaceWith(c.content)
})(document)
</script>`;
          const callbacks = htmlArray.map((html22) => html22.callbacks || []).flat();
          if (!callbacks.length) {
            return html12;
          }
          if (phase === HtmlEscapedCallbackPhase.Stream) {
            html12 = await resolveCallback(html12, HtmlEscapedCallbackPhase.BeforeStream, true, context12);
          }
          return raw2(html12, callbacks);
        });
      }
    ]);
  } else {
    return raw2(resArray.join(""));
  }
};
Suspense2[DOM_RENDERER] = Suspense;
var textEncoder = new TextEncoder;
var renderToReadableStream = (content, onError = console.trace) => {
  const reader = new ReadableStream({
    async start(controller) {
      try {
        if (content instanceof JSXNode) {
          content = content.toString();
        }
        const context12 = typeof content === "object" ? content : {};
        const resolved = await resolveCallback(content, HtmlEscapedCallbackPhase.BeforeStream, true, context12);
        controller.enqueue(textEncoder.encode(resolved));
        let resolvedCount = 0;
        const callbacks = [];
        const then = (promise) => {
          callbacks.push(promise.catch((err) => {
            console.log(err);
            onError(err);
            return "";
          }).then(async (res) => {
            res = await resolveCallback(res, HtmlEscapedCallbackPhase.BeforeStream, true, context12);
            res.callbacks?.map((c) => c({ phase: HtmlEscapedCallbackPhase.Stream, context: context12 })).filter(Boolean).forEach(then);
            resolvedCount++;
            controller.enqueue(textEncoder.encode(res));
          }));
        };
        resolved.callbacks?.map((c) => c({ phase: HtmlEscapedCallbackPhase.Stream, context: context12 })).filter(Boolean).forEach(then);
        while (resolvedCount !== callbacks.length) {
          await Promise.all(callbacks);
        }
      } catch (e) {
        onError(e);
      }
      controller.close();
    }
  });
  return reader;
};

// node_modules/hono/dist/middleware/jsx-renderer/index.js
var RequestContext = createContext2(null);
var createRenderer = (c, Layout, component, options) => (children4, props) => {
  const docType = typeof options?.docType === "string" ? options.docType : options?.docType === false ? "" : "<!DOCTYPE html>";
  const currentLayout = component ? jsx((props2) => component(props2, c), {
    Layout,
    ...props
  }, children4) : children4;
  const body2 = html3`${raw2(docType)}${jsx(RequestContext.Provider, { value: c }, currentLayout)}`;
  if (options?.stream) {
    if (options.stream === true) {
      c.header("Transfer-Encoding", "chunked");
      c.header("Content-Type", "text/html; charset=UTF-8");
      c.header("Content-Encoding", "Identity");
    } else {
      for (const [key, value] of Object.entries(options.stream)) {
        c.header(key, value);
      }
    }
    return c.body(renderToReadableStream(body2));
  } else {
    return c.html(body2);
  }
};
var jsxRenderer = (component, options) => function jsxRenderer2(c, next) {
  const Layout = c.getLayout() ?? Fragment;
  if (component) {
    c.setLayout((props) => {
      return component({ ...props, Layout }, c);
    });
  }
  c.setRenderer(createRenderer(c, Layout, component, options));
  return next();
};

// src/view/component-view.tsx
var ValdationAlert = ({ message }) => ({
  $$typeof,
  type: "div",
  key: null,
  ref: null,
  props: {
    class: "relative w-full rounded-lg border border-transparent bg-red-50 p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-red-600 mt-5",
    children: [
      {
        $$typeof,
        type: "svg",
        key: null,
        ref: null,
        props: {
          class: "w-5 h-5 -translate-y-0.5",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          children: {
            $$typeof,
            type: "path",
            key: null,
            ref: null,
            props: {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            },
            _owner: null
          }
        },
        _owner: null
      },
      {
        $$typeof,
        type: "h5",
        key: null,
        ref: null,
        props: {
          class: "mb-1 font-medium leading-none tracking-tight",
          children: "Oops"
        },
        _owner: null
      },
      message.map((messageItem) => ({
        $$typeof,
        type: "div",
        key: null,
        ref: null,
        props: {
          class: "text-sm opacity-80",
          children: messageItem
        },
        _owner: null
      }))
    ]
  },
  _owner: null
});

// node_modules/hono/dist/jsx/jsx-dev-runtime.js
var jsxDEV2 = function(tag, props, key) {
  let node4;
  if (!props || !("children" in props)) {
    node4 = jsxFn(tag, props, []);
  } else {
    const children4 = props.children;
    node4 = Array.isArray(children4) ? jsxFn(tag, props, children4) : jsxFn(tag, props, [children4]);
  }
  node4.key = key;
  return node4;
};

// src/view/layout-view.tsx
var app_name = Bun.env.APP_NAME;
var renderer = jsxRenderer(({ children: children4 }) => {
  if (true) {
    try {
      const processedChildren = children4 ? JSON.stringify(children4) : "";
      console.log("Processed children:", processedChildren);
    } catch (error) {
      console.error("Renderer children processing error:", error);
    }
  }
  return html3`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${app_name}</title>
        <script src="/public/htmx.org@2.0.0.js"></script>
        <script src="/public/alpinejs@3.14.1.js" defer></script>
        <script src="/public/focus@3.x.x.js" defer></script>
        <link href="/public/styles.css" rel="stylesheet" />
      </head>
      <body class="bg-gray-100 smooth">
        ${children4}
      </body>
    </html>
  `;
});
var LoginForm = ({
  email,
  message
}) => jsxDEV2(Fragment, {
  children: {
    $$typeof,
    type: "form",
    key: null,
    ref: null,
    props: {
      class: "bg-white w-full rounded-lg py-5",
      "hx-post": "/login",
      "hx-swap": "outerHTML",
      id: "login-form",
      children: {
        $$typeof,
        type: "div",
        key: null,
        ref: null,
        props: {
          class: "mx-auto w-3/4",
          children: {
            $$typeof,
            type: "div",
            key: null,
            ref: null,
            props: {
              class: "flex flex-col items-start justify-start w-full h-full p-6  border-gray-500",
              children: {
                $$typeof,
                type: "div",
                key: null,
                ref: null,
                props: {
                  class: "relative w-full space-y-6",
                  children: [
                    {
                      $$typeof,
                      type: "div",
                      key: null,
                      ref: null,
                      props: {
                        class: "w-full max-w-xs my-2",
                        children: [
                          {
                            $$typeof,
                            type: "label",
                            key: null,
                            ref: null,
                            props: {
                              class: "text-sm text-gray-900",
                              for: "email",
                              children: "Email"
                            },
                            _owner: null
                          },
                          {
                            $$typeof,
                            type: "input",
                            key: null,
                            ref: null,
                            props: {
                              autocomplete: "false",
                              id: "email",
                              name: "email",
                              value: `${email || ""}`,
                              class: "flex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50",
                              "data-primary": "blue-600",
                              "data-rounded": "rounded-md",
                              placeholder: "Email"
                            },
                            _owner: null
                          }
                        ]
                      },
                      _owner: null
                    },
                    {
                      $$typeof,
                      type: "div",
                      key: null,
                      ref: null,
                      props: {
                        class: "w-full max-w-xs my-2",
                        children: [
                          {
                            $$typeof,
                            type: "label",
                            key: null,
                            ref: null,
                            props: {
                              class: "text-sm text-gray-900",
                              for: "password",
                              children: "Password"
                            },
                            _owner: null
                          },
                          {
                            $$typeof,
                            type: "input",
                            key: null,
                            ref: null,
                            props: {
                              autocomplete: "false",
                              type: "password",
                              id: "password",
                              name: "password",
                              class: "blex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50",
                              "data-primary": "blue-600",
                              "data-rounded": "rounded-md",
                              placeholder: "Password"
                            },
                            _owner: null
                          }
                        ]
                      },
                      _owner: null
                    },
                    {
                      $$typeof,
                      type: "div",
                      key: null,
                      ref: null,
                      props: {
                        class: "w-full max-w-xs my-2",
                        children: {
                          $$typeof,
                          type: "button",
                          key: null,
                          ref: null,
                          props: {
                            type: "submit",
                            class: "inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90",
                            "data-primary": "blue-600",
                            "data-rounded": "rounded-md",
                            children: "Submit"
                          },
                          _owner: null
                        }
                      },
                      _owner: null
                    },
                    Array.isArray(message) ? {
                      $$typeof,
                      type: ValdationAlert,
                      key: null,
                      ref: null,
                      props: __merge({
                        message
                      }, ValdationAlert.defaultProps),
                      _owner: null
                    } : ""
                  ]
                },
                _owner: null
              }
            },
            _owner: null
          }
        },
        _owner: null
      }
    },
    _owner: null
  }
});
var RegisterForm = ({
  email,
  message
}) => jsxDEV2(Fragment, {
  children: {
    $$typeof,
    type: "form",
    key: null,
    ref: null,
    props: {
      class: "bg-white w-full rounded-lg py-5",
      "hx-post": "/register",
      "hx-swap": "outerHTML",
      id: "register-form",
      children: {
        $$typeof,
        type: "div",
        key: null,
        ref: null,
        props: {
          class: "mx-auto w-3/4",
          children: {
            $$typeof,
            type: "div",
            key: null,
            ref: null,
            props: {
              class: "flex flex-col items-start justify-start w-full h-full p-6  border-gray-500",
              children: {
                $$typeof,
                type: "div",
                key: null,
                ref: null,
                props: {
                  class: "relative w-full space-y-6",
                  children: [
                    {
                      $$typeof,
                      type: "div",
                      key: null,
                      ref: null,
                      props: {
                        class: "w-full max-w-xs my-2",
                        children: [
                          {
                            $$typeof,
                            type: "label",
                            key: null,
                            ref: null,
                            props: {
                              class: "text-sm text-gray-900",
                              for: "email",
                              children: "Name"
                            },
                            _owner: null
                          },
                          {
                            $$typeof,
                            type: "input",
                            key: null,
                            ref: null,
                            props: {
                              autocomplete: "false",
                              id: "name",
                              name: "name",
                              value: "",
                              class: "flex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50",
                              "data-primary": "blue-600",
                              "data-rounded": "rounded-md",
                              placeholder: "Name"
                            },
                            _owner: null
                          }
                        ]
                      },
                      _owner: null
                    },
                    {
                      $$typeof,
                      type: "div",
                      key: null,
                      ref: null,
                      props: {
                        class: "w-full max-w-xs my-2",
                        children: [
                          {
                            $$typeof,
                            type: "label",
                            key: null,
                            ref: null,
                            props: {
                              class: "text-sm text-gray-900",
                              for: "email",
                              children: "Email"
                            },
                            _owner: null
                          },
                          {
                            $$typeof,
                            type: "input",
                            key: null,
                            ref: null,
                            props: {
                              autocomplete: "false",
                              id: "email",
                              name: "email",
                              value: `${email || ""}`,
                              class: "flex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50",
                              "data-primary": "blue-600",
                              "data-rounded": "rounded-md",
                              placeholder: "Email"
                            },
                            _owner: null
                          }
                        ]
                      },
                      _owner: null
                    },
                    {
                      $$typeof,
                      type: "div",
                      key: null,
                      ref: null,
                      props: {
                        class: "w-full max-w-xs my-2",
                        children: [
                          {
                            $$typeof,
                            type: "label",
                            key: null,
                            ref: null,
                            props: {
                              class: "text-sm text-gray-900",
                              for: "password",
                              children: "Password"
                            },
                            _owner: null
                          },
                          {
                            $$typeof,
                            type: "input",
                            key: null,
                            ref: null,
                            props: {
                              autocomplete: "false",
                              type: "password",
                              id: "password",
                              name: "password",
                              class: "blex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50",
                              "data-primary": "blue-600",
                              "data-rounded": "rounded-md",
                              placeholder: "Password"
                            },
                            _owner: null
                          }
                        ]
                      },
                      _owner: null
                    },
                    {
                      $$typeof,
                      type: "div",
                      key: null,
                      ref: null,
                      props: {
                        class: "w-full max-w-xs my-2",
                        children: {
                          $$typeof,
                          type: "button",
                          key: null,
                          ref: null,
                          props: {
                            type: "submit",
                            class: "inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90",
                            "data-primary": "blue-600",
                            "data-rounded": "rounded-md",
                            children: "Submit"
                          },
                          _owner: null
                        }
                      },
                      _owner: null
                    },
                    Array.isArray(message) ? {
                      $$typeof,
                      type: ValdationAlert,
                      key: null,
                      ref: null,
                      props: __merge({
                        message
                      }, ValdationAlert.defaultProps),
                      _owner: null
                    } : ""
                  ]
                },
                _owner: null
              }
            },
            _owner: null
          }
        },
        _owner: null
      }
    },
    _owner: null
  }
});

// src/validation/error-message-validation.ts
function formatValidationErrors(zodError) {
  return zodError.errors.map((error) => `${error.path[0]} : ${error.message}`);
}

// src/controller/user-web-controller.tsx
var userWebController = new Hono2;
var app_name2 = Bun.env.APP_NAME;
var secret_session_key2 = Bun.env.SECRET_SESSION_KEY ?? "";
userWebController.get("*", renderer);
userWebController.get("/login", async (c) => {
  return c.render({
    $$typeof,
    type: "div",
    key: null,
    ref: null,
    props: {
      class: "flex h-screen flex-col bg-red-500",
      children: [
        {
          $$typeof,
          type: "h1",
          key: null,
          ref: null,
          props: {
            class: "bg-blue-300",
            children: [
              app_name2,
              " Login"
            ]
          },
          _owner: null
        },
        {
          $$typeof,
          type: LoginForm,
          key: null,
          ref: null,
          props: __merge({
            email: "",
            message: false
          }, LoginForm.defaultProps),
          _owner: null
        }
      ]
    },
    _owner: null
  });
});
userWebController.get("/register", async (c) => {
  return c.render({
    $$typeof,
    type: "div",
    key: null,
    ref: null,
    props: {
      class: "flex h-screen flex-col bg-red-500",
      children: [
        {
          $$typeof,
          type: "h1",
          key: null,
          ref: null,
          props: {
            class: "bg-blue-300",
            children: [
              app_name2,
              " Register"
            ]
          },
          _owner: null
        },
        {
          $$typeof,
          type: RegisterForm,
          key: null,
          ref: null,
          props: __merge({
            email: "",
            message: false
          }, RegisterForm.defaultProps),
          _owner: null
        }
      ]
    },
    _owner: null
  });
});
userWebController.post("/login", async (c) => {
  const request3 = await c.req.parseBody();
  const requestValidation = UserValidation.LOGIN.safeParse(request3);
  let message;
  if (!requestValidation.success) {
    message = formatValidationErrors(requestValidation.error);
    return c.render({
      $$typeof,
      type: LoginForm,
      key: null,
      ref: null,
      props: __merge({
        email: request3.email,
        message
      }, LoginForm.defaultProps),
      _owner: null
    });
  }
  let user = await prismaClient.user.findUnique({
    where: {
      email: request3.email
    }
  });
  if (!user) {
    return c.render({
      $$typeof,
      type: LoginForm,
      key: null,
      ref: null,
      props: __merge({
        email: request3.email,
        message: ["wrong email please register"]
      }, LoginForm.defaultProps),
      _owner: null
    });
  }
  const isPasswordValid = await Bun.password.verify(request3.password, user.password, "argon2d");
  if (!isPasswordValid) {
    return c.render({
      $$typeof,
      type: LoginForm,
      key: null,
      ref: null,
      props: __merge({
        email: request3.email,
        message: ["password is wrong"]
      }, LoginForm.defaultProps),
      _owner: null
    });
  }
  const id = crypto.randomUUID();
  let session = await prismaClient.session.create({
    data: {
      id,
      user_id: user.id,
      expiredAt: new Date(Date.now() + 604800000)
    }
  });
  if (!session) {
    return c.render({
      $$typeof,
      type: LoginForm,
      key: null,
      ref: null,
      props: __merge({
        email: request3.email,
        message: ["cannot login session"]
      }, LoginForm.defaultProps),
      _owner: null
    });
  }
  console.log("secret_session_key");
  console.log(secret_session_key2);
  await setSignedCookie(c, "x-hono-session", id, secret_session_key2, {
    path: "/",
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 604800000),
    sameSite: "Strict"
  });
  c.header("Hx-redirect", "/");
  return c.body("success login");
});
userWebController.post("/register", async (c) => {
  const request3 = await c.req.parseBody();
  const requestValidation = UserValidation.REGISTER.safeParse(request3);
  let message;
  if (!requestValidation.success) {
    message = formatValidationErrors(requestValidation.error);
    return c.render({
      $$typeof,
      type: RegisterForm,
      key: null,
      ref: null,
      props: __merge({
        email: request3.email,
        message
      }, RegisterForm.defaultProps),
      _owner: null
    });
  }
  const totalUserWithSameEmail = await prismaClient.user.count({
    where: {
      email: request3.email
    }
  });
  if (totalUserWithSameEmail != 0) {
    return c.render({
      $$typeof,
      type: RegisterForm,
      key: null,
      ref: null,
      props: __merge({
        email: request3.email,
        message: ["Email already exists"]
      }, RegisterForm.defaultProps),
      _owner: null
    });
  }
  request3.password = await Bun.password.hash(request3.password, {
    algorithm: "argon2d"
  });
  const id = crypto.randomUUID();
  const user = await prismaClient.user.create({
    data: { ...request3, id }
  });
  let session = await prismaClient.session.create({
    data: {
      id,
      user_id: id,
      expiredAt: new Date(Date.now() + 604800000)
    }
  });
  if (!session || !user) {
    return c.render({
      $$typeof,
      type: RegisterForm,
      key: null,
      ref: null,
      props: __merge({
        email: request3.email,
        message: ["cannot register session"]
      }, RegisterForm.defaultProps),
      _owner: null
    });
  }
  await setSignedCookie(c, "x-hono-session", id, secret_session_key2, {
    path: "/",
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 604800000),
    sameSite: "Strict"
  });
  c.header("Hx-redirect", "/");
  return c.body("success register");
});
userWebController.get("/logout", async (c) => {
  const sessionId = await getSignedCookie(c, secret_session_key2, "x-hono-session");
  if (!sessionId) {
    return c.redirect("/login");
  }
  deleteCookie(c, "x-hono-session");
  const result = await UserService.deleteSession(sessionId);
  console.info("logout session : ", sessionId, ":", false);
  return c.redirect("/login");
});
userWebController.get("/user", webAuthMiddleware, async (c) => {
  const user = c.get("user");
  return c.render({
    $$typeof,
    type: "div",
    key: null,
    ref: null,
    props: {
      class: "flex h-screen flex-col bg-red-500",
      children: [
        {
          $$typeof,
          type: "h1",
          key: null,
          ref: null,
          props: {
            class: "bg-blue-300",
            children: [
              app_name2,
              " User Page"
            ]
          },
          _owner: null
        },
        {
          $$typeof,
          type: "p",
          key: null,
          ref: null,
          props: {
            children: user.name ?? "-"
          },
          _owner: null
        },
        {
          $$typeof,
          type: "p",
          key: null,
          ref: null,
          props: {
            children: user.email ?? "-"
          },
          _owner: null
        },
        {
          $$typeof,
          type: "p",
          key: null,
          ref: null,
          props: {
            children: user.id ?? "-"
          },
          _owner: null
        },
        {
          $$typeof,
          type: "p",
          key: null,
          ref: null,
          props: {
            children: user.createdAt.toString() ?? "-"
          },
          _owner: null
        }
      ]
    },
    _owner: null
  });
});

// node_modules/hono/dist/utils/color.js
var getColorEnabled = function() {
  const { process: process2, Deno } = globalThis;
  const isNoColor = typeof Deno?.noColor === "boolean" ? Deno.noColor : process2 !== undefined ? "NO_COLOR" in process2?.env : false;
  return !isNoColor;
};

// node_modules/hono/dist/middleware/logger/index.js
var log = function(fn, prefix, method, path, status = 0, elapsed) {
  const out = prefix === "<--" ? `${prefix} ${method} ${path}` : `${prefix} ${method} ${path} ${colorStatus(status)} ${elapsed}`;
  fn(out);
};
var humanize = (times) => {
  const [delimiter, separator] = [",", "."];
  const orderTimes = times.map((v) => v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter));
  return orderTimes.join(separator);
};
var time = (start) => {
  const delta = Date.now() - start;
  return humanize([delta < 1000 ? delta + "ms" : Math.round(delta / 1000) + "s"]);
};
var colorStatus = (status) => {
  const colorEnabled = getColorEnabled();
  if (colorEnabled) {
    switch (status / 100 | 0) {
      case 5:
        return `\x1B[31m${status}\x1B[0m`;
      case 4:
        return `\x1B[33m${status}\x1B[0m`;
      case 3:
        return `\x1B[36m${status}\x1B[0m`;
      case 2:
        return `\x1B[32m${status}\x1B[0m`;
    }
  }
  return `${status}`;
};
var logger2 = (fn = console.log) => {
  return async function logger2(c, next) {
    const { method } = c.req;
    const path = getPath(c.req.raw);
    log(fn, "<--", method, path);
    const start = Date.now();
    await next();
    log(fn, "-->", method, path, c.res.status, time(start));
  };
};

// src/index.ts
var app = new Hono2;
app.use(logger2());
app.use("/public/*", serveStatic2({ root: "./" }));
app.get("/", webAuthMiddleware, (c) => {
  return c.text("Hello Hono!");
});
app.onError(async (err, c) => {
  if (err instanceof HTTPException) {
    c.status(err.status);
    return c.json({
      status: "error",
      errors: err.message
    });
  } else if (err instanceof ZodError) {
    c.status(400);
    return c.json({
      errors: "validation_error",
      validation_error: err.message
    });
  } else {
    c.status(500);
    return c.json({
      errors: "server_error",
      server_error: err.message
    });
  }
});
app.use(requestId());
app.route("/", userWebController);
app.route("/", userController);
app.route("/", postController);
var src_default = app;
export {
  src_default as default
};
