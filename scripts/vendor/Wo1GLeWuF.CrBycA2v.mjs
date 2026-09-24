import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as n,
  C as r,
  D as i,
  I as a,
  L as o,
  M as s,
  N as c,
  P as l,
  R as u,
  c as d,
  g as f,
  h as p,
  j as m,
  k as h,
  l as g,
  o as _,
  v,
} from "./react.D20wc1Tc.mjs";
import { N as y, S as b, a as x, b as S, r as C, t as w } from "./motion.jtMCvOiK.mjs";
import {
  A as T,
  L as E,
  M as D,
  S as O,
  W as k,
  X as A,
  Y as j,
  _ as M,
  ct as N,
  dt as P,
  et as F,
  h as I,
  m as L,
  nt as R,
  ot as z,
  r as B,
  s as V,
  st as H,
  t as U,
  v as W,
  w as ee,
  y as G,
} from "./framer.Dxk3-1Rh.mjs";
var K,
  te,
  q = t(() => {
    (E(),
      (K = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...K },
      (te = {
        onClick: { type: B.EventHandler },
        onMouseEnter: { type: B.EventHandler },
        onMouseLeave: { type: B.EventHandler },
      }),
      B.Number,
      B.Boolean,
      B.String,
      B.Enum);
  });
function ne(e, t) {
  return ie(!0, e, t);
}
function re(e, t) {
  return ie(!1, e, t);
}
function ie(e, t, n = !0) {
  let r = F();
  s(() => {
    n && r === e && t();
  }, [r]);
}
var ae = t(() => {
    (E(), r());
  }),
  oe = t(() => {
    r();
  }),
  se = t(() => {
    E();
  }),
  ce = t(() => {
    E();
  }),
  le = t(() => {
    r();
  }),
  ue = t(() => {
    E();
  }),
  de,
  fe,
  pe = t(() => {
    (a(),
      r(),
      (de = () => {
        if (o !== void 0) {
          let e = o.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (fe = () => n(() => de(), [])));
  }),
  me = t(() => {
    (r(), ce());
  }),
  he = t(() => {
    (r(), E(), ce(), oe());
  }),
  ge = t(() => {
    (E(), r(), q());
  });
function _e() {
  return n(() => L.current(), []);
}
function ve() {
  return n(() => L.current() === L.canvas, []);
}
var ye = t(() => {
    (r(), E());
  }),
  be = t(() => {
    r();
  });
function xe(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: r,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return n(() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${t}px`), [t, r, i, a, o, s]);
}
var Se,
  Ce = t(() => {
    (r(),
      E(),
      (Se = {
        borderRadius: {
          title: `Radius`,
          type: B.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      B.FusedNumber);
  }),
  we = t(() => {
    (q(), ae(), oe(), se(), ce(), le(), ue(), pe(), me(), he(), ge(), ye(), be(), Ce());
  });
function Te(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function Ee(e) {
  let t = Te(e);
  return d(Pe, { ...t });
}
function De(e) {
  let t = F(),
    n = i(!1),
    r = i(!1),
    a = m((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: m(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: m(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: a,
    isPlaying: r,
  };
}
function Oe({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = l(e),
    [o, s] = l(!1);
  e !== a && !o && s(!0);
  let c = a && t && n && r && !i && !o,
    u;
  return ((u = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function ke(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ae(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(ke).join(` `);
}
var je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie = t(() => {
    (_(),
      E(),
      w(),
      we(),
      r(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((je ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((Me ||= {})),
      (Ne = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (Pe = p(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: r,
            srcFile: a = ``,
            posterEnabled: o = !1,
            controls: c = !1,
            playing: l = !0,
            loop: u = !0,
            muted: f = !0,
            playsinline: p = !0,
            restartOnEnter: m = !1,
            objectFit: h = `cover`,
            backgroundColor: g = `rgba(0,0,0,0)`,
            radius: _ = 0,
            volume: v = 25,
            startTime: b = 0,
            poster: x,
            playing: C,
            progress: w,
            onSeeked: T,
            onPause: E,
            onPlay: D,
            onEnd: O,
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: j,
            onMouseDown: M,
            onMouseUp: N,
          } = e,
          P = i(),
          F = fe(),
          I = i(null),
          R = i(null),
          z = ve(),
          B = _e(),
          V = z || B === L.export,
          H = xe(e),
          U = V
            ? `no-autoplay`
            : Oe({ playingProp: C, muted: f, loop: u, playsinline: p, controls: c }),
          W = V ? !0 : y(P),
          ee = !V && y(P, { margin: `10%`, once: !0 }),
          G = b === 100 ? 99.9 : b,
          { play: K, pause: te, setProgress: q, isPlaying: ie } = De(P);
        (s(() => {
          V || (U !== `on-viewport` && (C ? K() : te()));
        }, [U, C]),
          s(() => {
            V || (W && C && U !== `no-autoplay` && K(), U === `on-viewport` && te());
          }, [U, W, C]),
          s(() => {
            !z || x || o || G || !P.current || (P.current.currentTime = 0.01);
          }, [o, x, G]));
        let ae = i(!1);
        (s(() => {
          if (!ae.current) {
            ae.current = !0;
            return;
          }
          let e = S(w) ? w.get() : (w ?? 0) * 0.01;
          q((e ?? 0) || (G ?? 0) / 100);
        }, [G, a, r, w]),
          s(() => {
            if (S(w)) return w.on(`change`, (e) => q(e));
          }, [w]),
          ne(() => {
            I.current !== null && P.current && ((!R && u) || !I.current) && K();
          }),
          re(() => {
            P.current && ((R.current = P.current.ended), (I.current = P.current.paused), te());
          }));
        let oe = n(() => {
          if (t === `URL`) return r + ``;
          if (t === `Upload`) return a + ``;
        }, [t, a, r, G]);
        return (
          s(() => {
            F && P.current && U === `on-mount` && setTimeout(() => K(), 50);
          }, []),
          s(() => {
            P.current && !f && (P.current.volume = (v ?? 0) / 100);
          }, [v]),
          d(`video`, {
            onClick: k,
            onMouseEnter: A,
            onMouseLeave: j,
            onMouseDown: M,
            onMouseUp: N,
            src: oe,
            loop: u,
            ref: P,
            onSeeked: (e) => T?.(e),
            onPause: (e) => E?.(e),
            onPlay: (e) => D?.(e),
            onEnded: (e) => O?.(e),
            autoPlay: ie.current || U === `on-mount` || (C && U === `on-viewport` && W),
            preload: ie.current
              ? `auto`
              : V && !x
                ? `metadata`
                : U !== `on-mount` && !ee
                  ? `none`
                  : `metadata`,
            poster:
              o && !a && r === Ne
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : o && x
                  ? x
                  : void 0,
            onLoadedData: () => {
              let e = P.current;
              e &&
                (e.currentTime < 0.3 && G > 0 && q((G ?? 0) * 0.01),
                (ie.current || U === `on-mount` || (C && U === `on-viewport` && W)) && K());
            },
            controls: c,
            muted: V ? !0 : f,
            playsInline: p,
            style: {
              cursor: k ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: H,
              display: `block`,
              objectFit: h,
              backgroundColor: g,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (Ee.displayName = `Video`),
      (Fe = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      G(Ee, {
        srcType: {
          type: B.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: B.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: B.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        ...Se,
        loop: { type: B.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        posterEnabled: {
          type: B.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
          defaultValue: !0,
        },
        poster: {
          type: B.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        controls: {
          type: B.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
          hiddenWhenUnset: !0,
        },
        muted: {
          type: B.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        objectFit: {
          type: B.Enum,
          title: `Fit`,
          options: Fe,
          optionTitles: Fe.map(Ae),
          hiddenWhenUnset: !0,
        },
        playing: {
          type: B.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        backgroundColor: { type: B.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: {
          title: `Start Time`,
          type: B.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
          hiddenWhenUnset: !0,
        },
        volume: {
          type: B.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
          hiddenWhenUnset: !0,
        },
        onEnd: { type: B.EventHandler },
        onSeeked: { type: B.EventHandler },
        onPause: { type: B.EventHandler },
        onPlay: { type: B.EventHandler },
        ...te,
      }));
  });
function Le(e, t) {
  let n = document.createElement(`a`);
  ((n.href = e),
    (n.download = t),
    (n.target = `_blank`),
    (n.rel = `noopener`),
    (n.referrerPolicy = `no-referrer`),
    (n.style.display = `none`),
    document.body.appendChild(n),
    n.click(),
    n.remove());
}
function Re(e) {
  return (t) =>
    d(e, {
      ...t,
      onClickCapture: (e) => {
        (e.preventDefault(), e.stopPropagation(), Le(Ve, `TT设计智能体-latest.dmg`));
      },
    });
}
function ze(e) {
  return (t) =>
    d(e, {
      ...t,
      onClickCapture: (e) => {
        (e.preventDefault(), e.stopPropagation(), Le(He, `TT设计智能体-latest-arm64.dmg`));
      },
    });
}
function Be(e) {
  return (t) =>
    d(e, {
      ...t,
      onClickCapture: (e) => {
        (e.preventDefault(), e.stopPropagation(), Le(Ue, `TT设计智能体 Setup latest.exe`));
      },
    });
}
var Ve,
  He,
  Ue,
  We = t(() => {
    (a(),
      _(),
      (Ve = `https://ai.edu.tencent.com/learningbuddy/releases/TT%E8%AE%BE%E8%AE%A1%E6%99%BA%E8%83%BD%E4%BD%93-latest.dmg`),
      (He = `https://ai.edu.tencent.com/learningbuddy/releases/TT%E8%AE%BE%E8%AE%A1%E6%99%BA%E8%83%BD%E4%BD%93-latest-arm64.dmg`),
      (Ue = `https://ai.edu.tencent.com/learningbuddy/releases/TT%E8%AE%BE%E8%AE%A1%E6%99%BA%E8%83%BD%E4%BD%93%20Setup%20latest.exe`));
  }),
  Ge = e({ __FramerMetadata__: () => rt, default: () => J });
function Ke(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  J,
  rt,
  it = t(() => {
    (_(),
      E(),
      w(),
      r(),
      We(),
      (qe = N(b.div, { nodeId: `ezaWgEhTU`, override: Be, scopeId: `pzB89H32X` })),
      (Je = [`ezaWgEhTU`, `iGGzxKj6u`]),
      (Ye = `framer-bmPH5`),
      (Xe = { ezaWgEhTU: `framer-v-prrtle`, iGGzxKj6u: `framer-v-1ev89d` }),
      (Ze = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Qe = ({ value: e, children: t }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(x.Provider, { value: a, children: t });
      }),
      ($e = { default: `ezaWgEhTU`, hover: `iGGzxKj6u` }),
      (et = b.create(c)),
      (tt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: $e[r.variant] ?? r.variant ?? `ezaWgEhTU`,
      })),
      (nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = H(
        f(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = v(),
            { activeLocale: o, setLocale: s } = R();
          A();
          let { style: l, className: u, layoutId: f, variant: p, ...m } = tt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = z({
              cycleOrder: Je,
              defaultVariant: `ezaWgEhTU`,
              ref: r,
              variant: p,
              variantClassNames: Xe,
            }),
            D = nt(e, E),
            k = [],
            { activeVariantCallback: M, delay: N } = j(h),
            P = M(async (...e) => {
              (w({ isHovered: !0 }), T(`iGGzxKj6u`));
            }),
            F = M(async (...e) => {
              (w({ isHovered: !1 }), T(`ezaWgEhTU`));
            }),
            L = O(Ye, ...k);
          return d(C, {
            id: f ?? a,
            children: d(et, {
              animate: E,
              initial: !1,
              children: d(Qe, {
                value: Ze,
                children: d(qe, {
                  ...m,
                  ...y,
                  className: O(L, `framer-prrtle`, u, g),
                  "data-framer-name": `default`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `ezaWgEhTU`,
                  onMouseEnter: P,
                  onMouseLeave: F,
                  ref: r,
                  style: { ...l },
                  ...Ke({ iGGzxKj6u: { "data-framer-name": `hover` } }, h, x),
                  children: d(I, {
                    __fromCanvasComponent: !0,
                    children: d(c, {
                      children: d(b.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                          "--framer-letter-spacing": `-0.02em`,
                          "--framer-line-height": `1.75em`,
                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(89, 98, 116))`,
                        },
                        children: `Windows`,
                      }),
                    }),
                    className: `framer-1y5ketj`,
                    fonts: [`GF;Noto Sans SC-regular`],
                    layoutDependency: D,
                    layoutId: `kzAVnYNTS`,
                    style: { "--extracted-r6o4lv": `rgb(89, 98, 116)` },
                    variants: {
                      iGGzxKj6u: {
                        "--extracted-r6o4lv": `var(--token-f2d6ee70-af4f-4b9d-a00c-42c1f353358a, rgb(145, 171, 255))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Ke(
                      {
                        iGGzxKj6u: {
                          children: d(c, {
                            children: d(b.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                "--framer-letter-spacing": `-0.02em`,
                                "--framer-line-height": `1.75em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2d6ee70-af4f-4b9d-a00c-42c1f353358a, rgb(145, 171, 255)))`,
                              },
                              children: `Windows`,
                            }),
                          }),
                        },
                      },
                      h,
                      x
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-bmPH5.framer-1nvho7b, .framer-bmPH5 .framer-1nvho7b { display: block; }`,
          `.framer-bmPH5.framer-prrtle { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px; position: relative; width: min-content; }`,
          `.framer-bmPH5 .framer-1y5ketj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-bmPH5`
      )),
      (J.displayName = `03`),
      (J.defaultProps = { height: 38, width: 76 }),
      G(J, {
        variant: {
          options: [`ezaWgEhTU`, `iGGzxKj6u`],
          optionTitles: [`default`, `hover`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      W(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Noto Sans SC`,
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Noto Sans SC`,
                url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnYlNbPzS5HE.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (rt = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerpzB89H32X`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `76`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"iGGzxKj6u":{"layout":["auto","auto"]}}}`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `38`,
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  at = e({ __FramerMetadata__: () => _t, default: () => Y });
function ot(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  Y,
  _t,
  vt = t(() => {
    (_(),
      E(),
      w(),
      r(),
      We(),
      (st = N(b.div, { nodeId: `VLalI9cKG`, override: Re, scopeId: `rky2XxdMz` })),
      (ct = [`VLalI9cKG`, `ovQbE3Ef9`]),
      (lt = `framer-7yff8`),
      (ut = { ovQbE3Ef9: `framer-v-ocrqie`, VLalI9cKG: `framer-v-1b5k7w8` }),
      (dt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ft = ({ value: e, children: t }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(x.Provider, { value: a, children: t });
      }),
      (pt = { default: `VLalI9cKG`, hover: `ovQbE3Ef9` }),
      (mt = b.create(c)),
      (ht = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: pt[r.variant] ?? r.variant ?? `VLalI9cKG`,
      })),
      (gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = H(
        f(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = v(),
            { activeLocale: o, setLocale: s } = R();
          A();
          let { style: l, className: u, layoutId: f, variant: p, ...m } = ht(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = z({
              cycleOrder: ct,
              defaultVariant: `VLalI9cKG`,
              ref: r,
              variant: p,
              variantClassNames: ut,
            }),
            D = gt(e, E),
            k = [],
            { activeVariantCallback: M, delay: N } = j(h),
            P = M(async (...e) => {
              (w({ isHovered: !0 }), T(`ovQbE3Ef9`));
            }),
            F = M(async (...e) => {
              (w({ isHovered: !1 }), T(`VLalI9cKG`));
            }),
            L = O(lt, ...k);
          return d(C, {
            id: f ?? a,
            children: d(mt, {
              animate: E,
              initial: !1,
              children: d(ft, {
                value: dt,
                children: d(st, {
                  ...m,
                  ...y,
                  className: O(L, `framer-1b5k7w8`, u, g),
                  "data-framer-name": `default`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `VLalI9cKG`,
                  onMouseEnter: P,
                  onMouseLeave: F,
                  ref: r,
                  style: { ...l },
                  ...ot({ ovQbE3Ef9: { "data-framer-name": `hover` } }, h, x),
                  children: d(I, {
                    __fromCanvasComponent: !0,
                    children: d(c, {
                      children: d(b.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                          "--framer-letter-spacing": `-0.02em`,
                          "--framer-line-height": `1.75em`,
                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(89, 98, 116))`,
                        },
                        children: `macOS · Intel 芯片`,
                      }),
                    }),
                    className: `framer-1f1a235`,
                    fonts: [`GF;Noto Sans SC-regular`],
                    layoutDependency: D,
                    layoutId: `QQm9wkDwy`,
                    style: { "--extracted-r6o4lv": `rgb(89, 98, 116)` },
                    variants: {
                      ovQbE3Ef9: {
                        "--extracted-r6o4lv": `var(--token-f2d6ee70-af4f-4b9d-a00c-42c1f353358a, rgb(145, 171, 255))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...ot(
                      {
                        ovQbE3Ef9: {
                          children: d(c, {
                            children: d(b.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                "--framer-letter-spacing": `-0.02em`,
                                "--framer-line-height": `1.75em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2d6ee70-af4f-4b9d-a00c-42c1f353358a, rgb(145, 171, 255)))`,
                              },
                              children: `macOS · Intel 芯片`,
                            }),
                          }),
                        },
                      },
                      h,
                      x
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-7yff8.framer-1h6bpw1, .framer-7yff8 .framer-1h6bpw1 { display: block; }`,
          `.framer-7yff8.framer-1b5k7w8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px; position: relative; width: min-content; }`,
          `.framer-7yff8 .framer-1f1a235 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-7yff8`
      )),
      (Y.displayName = `02`),
      (Y.defaultProps = { height: 38, width: 150.5 }),
      G(Y, {
        variant: {
          options: [`VLalI9cKG`, `ovQbE3Ef9`],
          optionTitles: [`default`, `hover`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      W(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Noto Sans SC`,
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Noto Sans SC`,
                url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnYlNbPzS5HE.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (_t = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Framerrky2XxdMz`,
            slots: [],
            annotations: {
              framerIntrinsicHeight: `38`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerIntrinsicWidth: `150.5`,
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"ovQbE3Ef9":{"layout":["auto","auto"]}}}`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  yt = e({ __FramerMetadata__: () => At, default: () => X });
function bt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  X,
  At,
  jt = t(() => {
    (_(),
      E(),
      w(),
      r(),
      (xt = [`xTlldgLgv`, `Ermhsnw0W`]),
      (St = `framer-tyW0z`),
      (Ct = { Ermhsnw0W: `framer-v-1ubx52g`, xTlldgLgv: `framer-v-n8gncb` }),
      (wt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Tt = ({ value: e, children: t }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(x.Provider, { value: a, children: t });
      }),
      (Et = { default: `xTlldgLgv`, hover: `Ermhsnw0W` }),
      (Dt = b.create(c)),
      (Ot = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        biTG1aj6d: e ?? i.biTG1aj6d,
        variant: Et[i.variant] ?? i.variant ?? `xTlldgLgv`,
      })),
      (kt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = H(
        f(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = v(),
            { activeLocale: o, setLocale: s } = R();
          A();
          let { style: l, className: u, layoutId: f, variant: p, biTG1aj6d: m, ...h } = Ot(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = z({
              cycleOrder: xt,
              defaultVariant: `xTlldgLgv`,
              ref: r,
              variant: p,
              variantClassNames: Ct,
            }),
            k = kt(e, D),
            M = [],
            { activeVariantCallback: N, delay: P } = j(g),
            F = N(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            L = O(St, ...M),
            B = N(async (...e) => {
              E(`Ermhsnw0W`);
            }),
            V = N(async (...e) => {
              E(`xTlldgLgv`);
            });
          return d(C, {
            id: f ?? a,
            children: d(Dt, {
              animate: D,
              initial: !1,
              children: d(Tt, {
                value: wt,
                children: d(b.div, {
                  ...h,
                  ...x,
                  className: O(L, `framer-n8gncb`, u, _),
                  "data-framer-name": `default`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `xTlldgLgv`,
                  onTap: F,
                  ref: r,
                  style: { ...l },
                  ...bt({ Ermhsnw0W: { "data-framer-name": `hover` } }, g, S),
                  children: d(I, {
                    __fromCanvasComponent: !0,
                    children: d(c, {
                      children: d(b.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                          "--framer-letter-spacing": `-0.02em`,
                          "--framer-line-height": `1.75em`,
                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(89, 98, 116))`,
                        },
                        children: `macOS · Apple 芯片`,
                      }),
                    }),
                    className: `framer-1x2ja4d`,
                    "data-highlight": !0,
                    fonts: [`GF;Noto Sans SC-regular`],
                    layoutDependency: k,
                    layoutId: `IgvPkrbOF`,
                    onMouseEnter: B,
                    onMouseLeave: V,
                    style: { "--extracted-r6o4lv": `rgb(89, 98, 116)` },
                    variants: {
                      Ermhsnw0W: {
                        "--extracted-r6o4lv": `var(--token-f2d6ee70-af4f-4b9d-a00c-42c1f353358a, rgb(145, 171, 255))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...bt(
                      {
                        Ermhsnw0W: {
                          children: d(c, {
                            children: d(b.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                "--framer-letter-spacing": `-0.02em`,
                                "--framer-line-height": `1.75em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2d6ee70-af4f-4b9d-a00c-42c1f353358a, rgb(145, 171, 255)))`,
                              },
                              children: `macOS · Apple 芯片`,
                            }),
                          }),
                        },
                      },
                      g,
                      S
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-tyW0z.framer-10rmk03, .framer-tyW0z .framer-10rmk03 { display: block; }`,
          `.framer-tyW0z.framer-n8gncb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px; position: relative; width: min-content; }`,
          `.framer-tyW0z .framer-1x2ja4d { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-tyW0z`
      )),
      (X.displayName = `01`),
      (X.defaultProps = { height: 38, width: 160 }),
      G(X, {
        variant: {
          options: [`xTlldgLgv`, `Ermhsnw0W`],
          optionTitles: [`default`, `hover`],
          title: `Variant`,
          type: B.Enum,
        },
        biTG1aj6d: { title: `Click`, type: B.EventHandler },
      }),
      W(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Noto Sans SC`,
                openType: !0,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Noto Sans SC`,
                url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnYlNbPzS5HE.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (At = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerrO9vV4eb2`,
            slots: [],
            annotations: {
              framerVariables: `{"biTG1aj6d":"click"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"Ermhsnw0W":{"layout":["auto","auto"]}}}`,
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `38`,
              framerIntrinsicWidth: `160`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Q,
  Jt = t(() => {
    (_(),
      E(),
      w(),
      r(),
      We(),
      it(),
      vt(),
      jt(),
      (Mt = T(X)),
      (Nt = P(N(X, { nodeId: `wX4cZ6_Rv`, override: ze, scopeId: `UDbV2HSrc` }), yt)),
      (Pt = T(Y)),
      (Ft = P(N(Y, { nodeId: `GpJZzLJ1B`, override: Re, scopeId: `UDbV2HSrc` }), at)),
      (It = T(J)),
      (Lt = P(N(J, { nodeId: `nmJyf8Rwp`, override: Be, scopeId: `UDbV2HSrc` }), Ge)),
      (Rt = [`Yo_oqj_W9`, `byKykBlcx`]),
      (zt = `framer-AXI2E`),
      (Bt = { byKykBlcx: `framer-v-wr2yps`, Yo_oqj_W9: `framer-v-yhegzq` }),
      (Vt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ht = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ut = ({ value: e, children: t }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(x.Provider, { value: a, children: t });
      }),
      (Wt = { default: `Yo_oqj_W9`, hover: `byKykBlcx` }),
      (Gt = b.create(c)),
      (Kt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Wt[r.variant] ?? r.variant ?? `Yo_oqj_W9`,
      })),
      (qt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = H(
        f(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = v(),
            { activeLocale: o, setLocale: s } = R(),
            l = A(),
            { style: u, className: f, layoutId: p, variant: m, ...h } = Kt(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: k,
            } = z({
              cycleOrder: Rt,
              defaultVariant: `Yo_oqj_W9`,
              ref: r,
              variant: m,
              variantClassNames: Bt,
            }),
            N = qt(e, k),
            P = [],
            { activeVariantCallback: F, delay: L } = j(_),
            B = F(async (...e) => {
              (E({ isHovered: !0 }), D(`byKykBlcx`));
            }),
            V = F(async (...e) => {
              (E({ isHovered: !1 }), D(`Yo_oqj_W9`));
            }),
            H = O(zt, ...P);
          return d(C, {
            id: p ?? a,
            children: d(Gt, {
              animate: k,
              initial: !1,
              children: d(Ut, {
                value: Vt,
                children: g(b.div, {
                  ...h,
                  ...S,
                  className: O(H, `framer-yhegzq`, f, y),
                  "data-framer-name": `default`,
                  "data-highlight": !0,
                  layoutDependency: N,
                  layoutId: `Yo_oqj_W9`,
                  onMouseEnter: B,
                  onMouseLeave: V,
                  ref: r,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    background: `linear-gradient(135deg, rgb(1, 138, 254) 0%, rgb(123, 84, 232) 100%)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...u,
                  },
                  variants: {
                    byKykBlcx: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      background: `linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)`,
                      backgroundColor: `rgb(255, 255, 255)`,
                    },
                  },
                  ...Z({ byKykBlcx: { "data-border": !0, "data-framer-name": `hover` } }, _, w),
                  children: [
                    d(I, {
                      __fromCanvasComponent: !0,
                      children: d(c, {
                        children: d(b.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                            "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                            "--framer-font-size": `15px`,
                            "--framer-font-weight": `600`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                          },
                          children: `下载`,
                        }),
                      }),
                      className: `framer-1rul99z`,
                      fonts: [`GF;Noto Sans SC-600`],
                      layoutDependency: N,
                      layoutId: `SE89V5SYh`,
                      style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                      variants: {
                        byKykBlcx: {
                          "--extracted-r6o4lv": `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Z(
                        {
                          byKykBlcx: {
                            children: d(c, {
                              children: d(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                  "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-weight": `600`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255)))`,
                                },
                                children: `下载`,
                              }),
                            }),
                          },
                        },
                        _,
                        w
                      ),
                    }),
                    g(b.div, {
                      className: `framer-exthoq`,
                      "data-framer-name": `download button`,
                      layoutDependency: N,
                      layoutId: `btUD6Mph2`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        boxShadow: `0px 1px 12px 0px var(--token-6f601572-d633-4673-8abc-8d567893607b, rgb(227, 235, 255))`,
                        opacity: 0,
                      },
                      variants: {
                        byKykBlcx: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                          opacity: 1,
                        },
                      },
                      children: [
                        d(U, {
                          height: 38,
                          y: (l?.y || 0) + (l?.height || 38) - -11 + 10 + 0,
                          ...Z(
                            { byKykBlcx: { y: (l?.y || 0) + (l?.height || 38) - -6 + 10 + 0 } },
                            _,
                            w
                          ),
                          children: d(M, {
                            className: `framer-vpqw00-container`,
                            layoutDependency: N,
                            layoutId: `wX4cZ6_Rv-container`,
                            nodeId: `wX4cZ6_Rv`,
                            rendersWithMotion: !0,
                            scopeId: `UDbV2HSrc`,
                            children: d(Nt, {
                              height: `100%`,
                              id: `wX4cZ6_Rv`,
                              layoutId: `wX4cZ6_Rv`,
                              variant: Ht(`xTlldgLgv`),
                              width: `100%`,
                              ...Z({ byKykBlcx: { biTG1aj6d: void 0 } }, _, w),
                            }),
                          }),
                        }),
                        d(U, {
                          height: 38,
                          y: (l?.y || 0) + (l?.height || 38) - -11 + 10 + 38,
                          ...Z(
                            { byKykBlcx: { y: (l?.y || 0) + (l?.height || 38) - -6 + 10 + 38 } },
                            _,
                            w
                          ),
                          children: d(M, {
                            className: `framer-mlrvtw-container`,
                            layoutDependency: N,
                            layoutId: `GpJZzLJ1B-container`,
                            nodeId: `GpJZzLJ1B`,
                            rendersWithMotion: !0,
                            scopeId: `UDbV2HSrc`,
                            children: d(Ft, {
                              height: `100%`,
                              id: `GpJZzLJ1B`,
                              layoutId: `GpJZzLJ1B`,
                              variant: Ht(`VLalI9cKG`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        d(U, {
                          height: 38,
                          y: (l?.y || 0) + (l?.height || 38) - -11 + 10 + 76,
                          ...Z(
                            { byKykBlcx: { y: (l?.y || 0) + (l?.height || 38) - -6 + 10 + 76 } },
                            _,
                            w
                          ),
                          children: d(M, {
                            className: `framer-1yjeode-container`,
                            layoutDependency: N,
                            layoutId: `nmJyf8Rwp-container`,
                            nodeId: `nmJyf8Rwp`,
                            rendersWithMotion: !0,
                            scopeId: `UDbV2HSrc`,
                            children: d(Lt, {
                              height: `100%`,
                              id: `nmJyf8Rwp`,
                              layoutId: `nmJyf8Rwp`,
                              variant: Ht(`ezaWgEhTU`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-AXI2E.framer-1ocum9, .framer-AXI2E .framer-1ocum9 { display: block; }`,
          `.framer-AXI2E.framer-yhegzq { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 10px 18px 10px 18px; position: relative; width: min-content; }`,
          `.framer-AXI2E .framer-1rul99z { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-AXI2E .framer-exthoq { align-content: flex-start; align-items: flex-start; bottom: -145px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: absolute; right: 0px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-AXI2E .framer-vpqw00-container, .framer-AXI2E .framer-mlrvtw-container, .framer-AXI2E .framer-1yjeode-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-AXI2E.framer-v-wr2yps .framer-exthoq { bottom: -140px; }`,
          `.framer-AXI2E[data-border="true"]::after, .framer-AXI2E [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-AXI2E`
      )),
      (Q.displayName = `download`),
      (Q.defaultProps = { height: 38, width: 66 }),
      G(Q, {
        variant: {
          options: [`Yo_oqj_W9`, `byKykBlcx`],
          optionTitles: [`default`, `hover`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      W(
        Q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Noto Sans SC`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Noto Sans SC`,
                url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGwHCnYlNbPzS5HE.woff2`,
                weight: `600`,
              },
            ],
          },
          ...Mt,
          ...Pt,
          ...It,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = {
        load: (e, t) => k([() => ee(X, {}, t), () => ee(Y, {}, t), () => ee(J, {}, t)], t),
      }));
  });
function Yt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  $,
  on = t(() => {
    (_(),
      E(),
      w(),
      r(),
      (Xt = [`I5XWiT2Nr`, `MR_asVQ2_`]),
      (Zt = `framer-537db`),
      (Qt = { I5XWiT2Nr: `framer-v-1etens7`, MR_asVQ2_: `framer-v-e6fhr7` }),
      ($t = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (en = ({ value: e, children: t }) => {
        let r = h(x),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(x.Provider, { value: a, children: t });
      }),
      (tn = { default: `I5XWiT2Nr`, hover: `MR_asVQ2_` }),
      (nn = b.create(c)),
      (rn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: tn[r.variant] ?? r.variant ?? `I5XWiT2Nr`,
      })),
      (an = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = H(
        f(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = v(),
            { activeLocale: o, setLocale: s } = R(),
            l = A(),
            { style: u, className: f, layoutId: p, variant: m, ...h } = rn(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: k,
              variants: M,
            } = z({
              cycleOrder: Xt,
              defaultVariant: `I5XWiT2Nr`,
              ref: r,
              variant: m,
              variantClassNames: Qt,
            }),
            N = an(e, M),
            P = [],
            { activeVariantCallback: F, delay: L } = j(_),
            B = F(async (...e) => {
              (E({ isHovered: !0 }), k(`MR_asVQ2_`));
            }),
            H = F(async (...e) => {
              (E({ isHovered: !1 }), k(`I5XWiT2Nr`));
            }),
            U = O(Zt, ...P);
          return d(C, {
            id: p ?? a,
            children: d(nn, {
              animate: M,
              initial: !1,
              children: d(en, {
                value: $t,
                children: g(b.div, {
                  ...h,
                  ...S,
                  className: O(U, `framer-1etens7`, f, y),
                  "data-border": !0,
                  "data-framer-name": `default`,
                  "data-highlight": !0,
                  layoutDependency: N,
                  layoutId: `I5XWiT2Nr`,
                  onMouseEnter: B,
                  onMouseLeave: H,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    background: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...u,
                  },
                  variants: {
                    MR_asVQ2_: {
                      "--border-color": `rgba(33, 33, 33, 0)`,
                      background: `linear-gradient(259deg, var(--token-f2d6ee70-af4f-4b9d-a00c-42c1f353358a, rgb(145, 171, 255)) 0%, var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255)) 100%)`,
                    },
                  },
                  ...Yt({ MR_asVQ2_: { "data-framer-name": `hover` } }, _, w),
                  children: [
                    d(b.div, {
                      className: `framer-pswz3d`,
                      layoutDependency: N,
                      layoutId: `kPN3Jix2N`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        boxShadow: `0px 1px 12px 0px var(--token-6f601572-d633-4673-8abc-8d567893607b, rgb(227, 235, 255))`,
                        opacity: 0,
                      },
                      variants: { MR_asVQ2_: { opacity: 1 } },
                      children: d(V, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 621,
                          intrinsicWidth: 616.5,
                          loading: D((l?.y || 0) + (l?.height || 38) - -11 + -248.5),
                          pixelHeight: 1242,
                          pixelWidth: 1233,
                          sizes: `max(${l?.width || `100vw`} + 2px, 1px)`,
                          src: `../../assets/images/W2j0Nzw0cHxsLUKJbF3hj0s9WPo.png`,
                          srcSet: `../../assets/images/W2j0Nzw0cHxsLUKJbF3hj0s9WPo-269028.png 1016w,../../assets/images/W2j0Nzw0cHxsLUKJbF3hj0s9WPo.png 1233w`,
                        },
                        className: `framer-em1ef0`,
                        "data-framer-name": `Mini program logo`,
                        layoutDependency: N,
                        layoutId: `zrSbcX3Lv`,
                        ...Yt(
                          {
                            MR_asVQ2_: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 621,
                                intrinsicWidth: 616.5,
                                loading: D((l?.y || 0) + (l?.height || 38) - -6 + -248.5),
                                pixelHeight: 1242,
                                pixelWidth: 1233,
                                sizes: `max(${l?.width || `100vw`} + 2px, 1px)`,
                                src: `../../assets/images/W2j0Nzw0cHxsLUKJbF3hj0s9WPo.png`,
                                srcSet: `../../assets/images/W2j0Nzw0cHxsLUKJbF3hj0s9WPo-269028.png 1016w,../../assets/images/W2j0Nzw0cHxsLUKJbF3hj0s9WPo.png 1233w`,
                              },
                            },
                          },
                          _,
                          w
                        ),
                      }),
                    }),
                    d(I, {
                      __fromCanvasComponent: !0,
                      children: d(c, {
                        children: d(b.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTUwMA==`,
                            "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                            "--framer-font-size": `15px`,
                            "--framer-font-weight": `500`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255)))`,
                          },
                          children: `体验小程序`,
                        }),
                      }),
                      className: `framer-a8c7xl`,
                      fonts: [`GF;Noto Sans SC-500`],
                      layoutDependency: N,
                      layoutId: `Pe4SpWBEL`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                      },
                      variants: { MR_asVQ2_: { "--extracted-r6o4lv": `rgb(255, 255, 255)` } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Yt(
                        {
                          MR_asVQ2_: {
                            children: d(c, {
                              children: d(b.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTUwMA==`,
                                  "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                },
                                children: `体验小程序`,
                              }),
                            }),
                          },
                        },
                        _,
                        w
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-537db.framer-hbr8wl, .framer-537db .framer-hbr8wl { display: block; }`,
          `.framer-537db.framer-1etens7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 10px 18px 10px 18px; position: relative; width: min-content; }`,
          `.framer-537db .framer-pswz3d { align-content: center; align-items: center; bottom: -135px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 124px; justify-content: center; left: -22px; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: absolute; right: 0px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-537db .framer-em1ef0 { aspect-ratio: 0.9927536231884058 / 1; flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; }`,
          `.framer-537db .framer-a8c7xl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-537db.framer-v-e6fhr7 .framer-pswz3d { bottom: -130px; }`,
          `.framer-537db[data-border="true"]::after, .framer-537db [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-537db`
      )),
      ($.displayName = `mini program`),
      ($.defaultProps = { height: 38, width: 111 }),
      G($, {
        variant: {
          options: [`I5XWiT2Nr`, `MR_asVQ2_`],
          optionTitles: [`default`, `hover`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      W(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Noto Sans SC`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Noto Sans SC`,
                url: `https://fonts.gstatic.com/s/notosanssc/v40/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG-3FnYlNbPzS5HE.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Ee as a, Jt as i, on as n, Ie as o, Q as r, $ as t };
//# sourceMappingURL=Wo1GLeWuF.CrBycA2v.mjs.map
