import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  M as a,
  N as o,
  P as s,
  R as c,
  c as l,
  g as u,
  k as d,
  l as f,
  o as p,
  v as m,
} from "./react.D20wc1Tc.mjs";
import { S as h, a as g, r as _, t as v } from "./motion.jtMCvOiK.mjs";
import {
  $ as y,
  A as b,
  C as x,
  L as S,
  M as C,
  Q as w,
  S as T,
  W as ee,
  X as te,
  a as ne,
  f as E,
  g as D,
  h as O,
  it as k,
  j as A,
  l as j,
  lt as re,
  mt as ie,
  n as M,
  nt as ae,
  ot as N,
  r as P,
  rt as oe,
  s as F,
  st as se,
  t as I,
  tt as L,
  ut as R,
  v as ce,
  w as z,
  y as B,
} from "./framer.Dxk3-1Rh.mjs";
import { a as V, i as le, n as ue, o as de, r as H, t as U } from "./Wo1GLeWuF.CrBycA2v.mjs";
import { a as fe, i as pe, n as me, o as he, r as ge, t as _e } from "./UaBF4aKC9.Bq_QkEjm.mjs";
import {
  a as ve,
  c as ye,
  i as be,
  n as xe,
  o as Se,
  r as Ce,
  s as we,
  t as Te,
} from "./shared-lib.C0Jg-gZA.mjs";
import { n as Ee, r as De } from "./augiA20Il.DoCjO-YX.mjs";
function W(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  G,
  Le = e(() => {
    (p(),
      S(),
      v(),
      n(),
      (Oe = [`j80XpEVw8`, `tnauFZotb`, `nNlwuwsrG`]),
      (ke = `framer-HzBTq`),
      (Ae = {
        j80XpEVw8: `framer-v-4xxcyv`,
        nNlwuwsrG: `framer-v-bj01u9`,
        tnauFZotb: `framer-v-dx4556`,
      }),
      (je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Me = ({ value: e, children: n }) => {
        let r = d(g),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(g.Provider, { value: a, children: n });
      }),
      (Ne = { "Variant 1": `j80XpEVw8`, "Variant 2": `tnauFZotb`, "Variant 3": `nNlwuwsrG` }),
      (Pe = h.create(o)),
      (Fe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ne[r.variant] ?? r.variant ?? `j80XpEVw8`,
      })),
      (Ie = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = se(
        u(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = m(),
            { activeLocale: s, setLocale: c } = ae();
          te();
          let { style: u, className: d, layoutId: p, variant: g, ...v } = Fe(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: ee,
              setVariant: ne,
              variants: E,
            } = N({
              cycleOrder: Oe,
              defaultVariant: `j80XpEVw8`,
              ref: i,
              variant: g,
              variantClassNames: Ae,
            }),
            D = Ie(e, E),
            k = T(ke);
          return l(_, {
            id: p ?? a,
            children: l(Pe, {
              animate: E,
              initial: !1,
              children: l(Me, {
                value: je,
                children: f(h.div, {
                  ...v,
                  ...S,
                  className: T(k, `framer-4xxcyv`, d, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: D,
                  layoutId: `j80XpEVw8`,
                  ref: i,
                  style: { ...u },
                  ...W(
                    {
                      nNlwuwsrG: { "data-framer-name": `Variant 3` },
                      tnauFZotb: { "data-framer-name": `Variant 2` },
                    },
                    y,
                    C
                  ),
                  children: [
                    l(h.div, {
                      className: `framer-10lfqhl`,
                      "data-framer-name": `text1`,
                      layoutDependency: D,
                      layoutId: `R2sBOgc4n`,
                      style: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      children: l(O, {
                        __fromCanvasComponent: !0,
                        children: l(o, {
                          children: l(h.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTcwMA==`,
                              "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                              "--framer-font-weight": `700`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1.75em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255)))`,
                            },
                            children: l(h.mark, {
                              style: {
                                "--framer-text-background-corner-shape-fallback": `0.752`,
                                "--framer-text-background-corner-shape": `superellipse(1.5)`,
                                "--framer-text-background-radius": `calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1)))`,
                              },
                              children: `多专家伴学`,
                            }),
                          }),
                        }),
                        className: `framer-sa9zfi`,
                        "data-framer-name": `t1`,
                        fonts: [`GF;Noto Sans SC-700`],
                        layoutDependency: D,
                        layoutId: `MWC7fjXVC`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                        },
                        variants: {
                          nNlwuwsrG: { "--extracted-r6o4lv": `rgba(88, 97, 115, 0.8)` },
                          tnauFZotb: { "--extracted-r6o4lv": `rgba(88, 97, 115, 0.8)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...W(
                          {
                            nNlwuwsrG: {
                              children: l(o, {
                                children: l(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                    "--framer-font-size": `14px`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.75em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(88, 97, 115, 0.8))`,
                                  },
                                  children: l(h.mark, {
                                    style: {
                                      "--framer-text-background-corner-shape-fallback": `0.752`,
                                      "--framer-text-background-corner-shape": `superellipse(1.5)`,
                                      "--framer-text-background-radius": `calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1)))`,
                                    },
                                    children: `多专家伴学`,
                                  }),
                                }),
                              }),
                              fonts: [`GF;Noto Sans SC-regular`],
                            },
                            tnauFZotb: {
                              children: l(o, {
                                children: l(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                    "--framer-font-size": `14px`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.75em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(88, 97, 115, 0.8))`,
                                  },
                                  children: l(h.mark, {
                                    style: {
                                      "--framer-text-background-corner-shape-fallback": `0.752`,
                                      "--framer-text-background-corner-shape": `superellipse(1.5)`,
                                      "--framer-text-background-radius": `calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1)))`,
                                    },
                                    children: `多专家伴学`,
                                  }),
                                }),
                              }),
                              fonts: [`GF;Noto Sans SC-regular`],
                            },
                          },
                          y,
                          C
                        ),
                      }),
                    }),
                    l(h.div, {
                      className: `framer-1tlbg2o`,
                      "data-framer-name": `text2`,
                      layoutDependency: D,
                      layoutId: `trYRofEWL`,
                      style: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      children: l(O, {
                        __fromCanvasComponent: !0,
                        children: l(o, {
                          children: l(h.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                              "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                              "--framer-font-size": `14px`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1.75em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgba(88, 97, 115, 0.8))`,
                            },
                            children: `灵感画布归档`,
                          }),
                        }),
                        className: `framer-1gt6cly`,
                        "data-framer-name": `t2`,
                        fonts: [`GF;Noto Sans SC-regular`],
                        layoutDependency: D,
                        layoutId: `QB8LpWpdF`,
                        style: { "--extracted-r6o4lv": `rgba(88, 97, 115, 0.8)` },
                        variants: {
                          tnauFZotb: {
                            "--extracted-r6o4lv": `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...W(
                          {
                            tnauFZotb: {
                              children: l(o, {
                                children: l(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTcwMA==`,
                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.75em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255)))`,
                                  },
                                  children: `灵感画布归档`,
                                }),
                              }),
                              fonts: [`GF;Noto Sans SC-700`],
                            },
                          },
                          y,
                          C
                        ),
                      }),
                    }),
                    l(h.div, {
                      className: `framer-1v391ux`,
                      "data-framer-name": `text3`,
                      layoutDependency: D,
                      layoutId: `VNvPWR8th`,
                      style: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      children: l(O, {
                        __fromCanvasComponent: !0,
                        children: l(o, {
                          children: l(h.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                              "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                              "--framer-font-size": `14px`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1.75em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgba(88, 97, 115, 0.8))`,
                            },
                            children: `设计方法脚手架`,
                          }),
                        }),
                        className: `framer-16ccegq`,
                        "data-framer-name": `t3`,
                        fonts: [`GF;Noto Sans SC-regular`],
                        layoutDependency: D,
                        layoutId: `EQAr4YTSi`,
                        style: { "--extracted-r6o4lv": `rgba(88, 97, 115, 0.8)` },
                        variants: {
                          nNlwuwsrG: {
                            "--extracted-r6o4lv": `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...W(
                          {
                            nNlwuwsrG: {
                              children: l(o, {
                                children: l(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTcwMA==`,
                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.75em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255)))`,
                                  },
                                  children: `设计方法脚手架`,
                                }),
                              }),
                              fonts: [`GF;Noto Sans SC-700`],
                            },
                          },
                          y,
                          C
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-HzBTq.framer-1xutwrp, .framer-HzBTq .framer-1xutwrp { display: block; }`,
          `.framer-HzBTq.framer-4xxcyv { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-HzBTq .framer-10lfqhl, .framer-HzBTq .framer-1tlbg2o, .framer-HzBTq .framer-1v391ux { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 5px; position: relative; width: min-content; }`,
          `.framer-HzBTq .framer-sa9zfi, .framer-HzBTq .framer-1gt6cly, .framer-HzBTq .framer-16ccegq { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-HzBTq`
      )),
      (G.displayName = `highlight 2`),
      (G.defaultProps = { height: 106, width: 106 }),
      B(G, {
        variant: {
          options: [`j80XpEVw8`, `tnauFZotb`, `nNlwuwsrG`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`],
          title: `Variant`,
          type: P.Enum,
        },
      }),
      ce(
        G,
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
                url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGzjCnYlNbPzS5HE.woff2`,
                weight: `700`,
              },
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
      ));
  });
function Re(e) {
  let {
      questions: t,
      cycleDuration: n,
      fontSize: r,
      fontWeight: i,
      lineHeight: o,
      textColor: u,
      cursorColor: d,
      cursorWidth: p,
      cursorHeight: m,
      cursorGap: h,
      ariaLabel: g,
    } = e,
    [_, v] = s(0),
    y = Array.isArray(t) ? t.filter((e) => typeof e == `string` && e.trim().length > 0) : [],
    b = y.length > 0 ? y : [`请输入你的设计问题`],
    x = Math.max(n, 1.8),
    S = b[_ % b.length];
  return (
    a(() => {
      if ((v(0), b.length <= 1)) return;
      let e = c.setInterval(() => {
        v((e) => (e + 1) % b.length);
      }, x * 1e3);
      return () => {
        c.clearInterval(e);
      };
    }, [t, x]),
    f(`div`, {
      role: `img`,
      "aria-label": g,
      style: {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        minWidth: 200,
        minHeight: 36,
        overflow: `hidden`,
        background: `transparent`,
        pointerEvents: `none`,
      },
      children: [
        l(`style`, {
          children: `
                    /*
                     * 问题句子：
                     * 从下方淡入，
                     * 停留一段时间，
                     * 最后向上淡出。
                     */
                    @keyframes ttQuestionChange {
                        0% {
                            opacity: 0;
                            transform:
                                translate3d(
                                    0,
                                    12px,
                                    0
                                );
                        }

                        13% {
                            opacity: 1;
                            transform:
                                translate3d(
                                    0,
                                    0,
                                    0
                                );
                        }

                        73% {
                            opacity: 1;
                            transform:
                                translate3d(
                                    0,
                                    0,
                                    0
                                );
                        }

                        100% {
                            opacity: 0;
                            transform:
                                translate3d(
                                    0,
                                    -16px,
                                    0
                                );
                        }
                    }

                    /*
                     * 固定光标闪烁。
                     * 光标不参与问题切换动画。
                     */
                    @keyframes ttQuestionCursorBlink {
                        0%,
                        44% {
                            opacity: 1;
                        }

                        45%,
                        100% {
                            opacity: 0;
                        }
                    }

                    @media (
                        prefers-reduced-motion:
                            reduce
                    ) {
                        .tt-question-text {
                            animation:
                                none !important;

                            opacity: 1 !important;

                            transform:
                                none !important;
                        }

                        .tt-question-fixed-cursor {
                            animation:
                                none !important;

                            opacity: 1 !important;
                        }
                    }
                `,
        }),
        l(`span`, {
          className: `tt-question-fixed-cursor`,
          "aria-hidden": `true`,
          style: {
            position: `absolute`,
            left: 0,
            top: `50%`,
            width: p,
            height: m,
            transform: `translateY(-50%)`,
            borderRadius: 999,
            background: d,
            animation: `ttQuestionCursorBlink 0.9s steps(1, end) infinite`,
            willChange: `opacity`,
            zIndex: 2,
          },
        }),
        l(`div`, {
          style: {
            position: `absolute`,
            left: p + h,
            right: 0,
            top: `50%`,
            transform: `translateY(-50%)`,
            overflow: `visible`,
            textAlign: `left`,
            zIndex: 1,
          },
          children: l(
            `div`,
            {
              className: `tt-question-text`,
              "aria-hidden": `true`,
              style: {
                display: `block`,
                width: `100%`,
                minWidth: 0,
                color: u,
                fontFamily: `
                            Inter,
                            "PingFang SC",
                            "Microsoft YaHei",
                            "Noto Sans SC",
                            sans-serif
                        `,
                fontSize: r,
                fontWeight: i,
                lineHeight: o,
                textAlign: `left`,
                whiteSpace: `nowrap`,
                overflow: `hidden`,
                textOverflow: `ellipsis`,
                animationName: `ttQuestionChange`,
                animationDuration: `${x}s`,
                animationTimingFunction: `cubic-bezier(0.22, 1, 0.36, 1)`,
                animationIterationCount: 1,
                animationFillMode: `both`,
                willChange: `opacity, transform`,
              },
              children: S,
            },
            `${_}-${S}`
          ),
        }),
      ],
    })
  );
}
var ze = e(() => {
  (i(),
    p(),
    n(),
    S(),
    (Re.defaultProps = {
      questions: [
        `设计如何驱动品牌创新？`,
        `什么是可持续设计？`,
        `帮我调研文创IP的转化路径`,
        `怎样做好艺术乡建？`,
        `设计如何承载文化记忆？`,
        `帮我想一个汽车设计方案`,
      ],
      cycleDuration: 4.6,
      fontSize: 17,
      fontWeight: 400,
      lineHeight: 1.5,
      textColor: `#8B8F99`,
      cursorColor: `#756BFF`,
      cursorWidth: 2,
      cursorHeight: 21,
      cursorGap: 9,
      ariaLabel: `TT设计智能体示例问题动画`,
    }),
    B(Re, {
      questions: {
        type: P.Array,
        title: `问题列表`,
        control: { type: P.String },
        maxCount: 12,
        defaultValue: [
          `设计如何驱动品牌创新？`,
          `什么是可持续设计？`,
          `帮我调研文创IP的转化路径`,
          `怎样做好艺术乡建？`,
          `设计如何承载文化记忆？`,
          `帮我想一个汽车设计方案`,
        ],
      },
      cycleDuration: {
        type: P.Number,
        title: `切换周期`,
        min: 2,
        max: 10,
        step: 0.1,
        unit: `s`,
        defaultValue: 4.6,
      },
      fontSize: {
        type: P.Number,
        title: `文字大小`,
        min: 12,
        max: 40,
        step: 1,
        unit: `px`,
        defaultValue: 17,
      },
      fontWeight: {
        type: P.Number,
        title: `文字粗细`,
        min: 300,
        max: 700,
        step: 100,
        defaultValue: 400,
      },
      lineHeight: {
        type: P.Number,
        title: `文字行高`,
        min: 1,
        max: 2,
        step: 0.05,
        defaultValue: 1.5,
      },
      textColor: { type: P.Color, title: `文字颜色`, defaultValue: `#8B8F99` },
      cursorColor: { type: P.Color, title: `光标颜色`, defaultValue: `#756BFF` },
      cursorWidth: {
        type: P.Number,
        title: `光标宽度`,
        min: 1,
        max: 6,
        step: 0.5,
        unit: `px`,
        defaultValue: 2,
      },
      cursorHeight: {
        type: P.Number,
        title: `光标高度`,
        min: 8,
        max: 50,
        step: 1,
        unit: `px`,
        defaultValue: 21,
      },
      cursorGap: {
        type: P.Number,
        title: `光标间距`,
        min: 2,
        max: 30,
        step: 1,
        unit: `px`,
        defaultValue: 9,
      },
      ariaLabel: { type: P.String, title: `辅助说明`, defaultValue: `TT设计智能体示例问题动画` },
    }));
});
function Be(e) {
  let {
      glassesImage: t,
      lightColor: n,
      blueColor: i,
      purpleColor: o,
      deepColor: s,
      flowSpeed: u,
      glowStrength: d,
      edgeStrength: p,
      followMouse: m,
      maxMove: h,
      maxRotate: g,
      followSmoothness: _,
      glassesWidth: v,
      glassesOffsetX: y,
      glassesOffsetY: b,
      ariaLabel: x,
    } = e,
    S = r(null),
    C = r(null);
  a(() => {
    let e = S.current,
      t = C.current;
    if (!e || !t) return;
    let n = `translate3d(-50%, -50%, 0) translate3d(${y}px, ${b}px, 0)`,
      r = c.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
      i = c.matchMedia(`(pointer: fine)`).matches;
    if (!m || r || !i) {
      t.style.transform = n;
      return;
    }
    let a = 0,
      o = 0,
      s = 0,
      l = 0,
      u = 0,
      d = 0,
      f = 0,
      p = (e, t, n) => Math.min(Math.max(e, t), n),
      v = (t) => {
        let n = e.getBoundingClientRect(),
          r = n.left + n.width / 2,
          i = n.top + n.height / 2,
          c = t.clientX - r,
          l = t.clientY - i,
          u = Math.sqrt(c * c + l * l);
        if (u < 0.001) {
          ((a = 0), (o = 0), (s = 0));
          return;
        }
        let d = c / u,
          f = l / u,
          m = Math.max(n.width, n.height),
          _ = p(u / m, 0, 1);
        ((a = d * h * _), (o = f * h * _), (s = p(d * g * _, -g, g)));
      },
      x = () => {
        ((a = 0), (o = 0), (s = 0));
      },
      w = () => {
        ((l += (a - l) * _),
          (u += (o - u) * _),
          (d += (s - d) * _),
          (t.style.transform = `translate3d(-50%, -50%, 0) translate3d(${l + y}px, ${u + b}px, 0) rotate(${d}deg)`),
          (f = requestAnimationFrame(w)));
      };
    return (
      c.addEventListener(`pointermove`, v, { passive: !0 }),
      c.addEventListener(`blur`, x),
      document.addEventListener(`mouseleave`, x),
      w(),
      () => {
        (c.removeEventListener(`pointermove`, v),
          c.removeEventListener(`blur`, x),
          document.removeEventListener(`mouseleave`, x),
          cancelAnimationFrame(f));
      }
    );
  }, [m, h, g, _, y, b]);
  let w = Math.min(Math.max(d / 100, 0), 1),
    T = Math.min(Math.max(p / 100, 0), 1);
  return f(`div`, {
    ref: S,
    role: `img`,
    "aria-label": x,
    style: {
      width: `100%`,
      height: `100%`,
      minWidth: 120,
      minHeight: 120,
      position: `relative`,
      overflow: `visible`,
      pointerEvents: `auto`,
      isolation: `isolate`,
    },
    children: [
      l(`style`, {
        children: `
                    @keyframes ttBaseFlow {
                        0% {
                            background-position: 0% 20%;
                            transform:
                                scale(1.08)
                                rotate(0deg);
                        }

                        33% {
                            background-position: 70% 30%;
                            transform:
                                scale(1.14)
                                rotate(5deg);
                        }

                        66% {
                            background-position: 30% 90%;
                            transform:
                                scale(1.1)
                                rotate(-4deg);
                        }

                        100% {
                            background-position: 100% 60%;
                            transform:
                                scale(1.16)
                                rotate(3deg);
                        }
                    }

                    @keyframes ttBlobOne {
                        0% {
                            transform:
                                translate3d(
                                    -18%,
                                    -16%,
                                    0
                                )
                                scale(0.92);
                        }

                        35% {
                            transform:
                                translate3d(
                                    20%,
                                    -4%,
                                    0
                                )
                                scale(1.14);
                        }

                        70% {
                            transform:
                                translate3d(
                                    8%,
                                    22%,
                                    0
                                )
                                scale(0.96);
                        }

                        100% {
                            transform:
                                translate3d(
                                    -18%,
                                    -16%,
                                    0
                                )
                                scale(0.92);
                        }
                    }

                    @keyframes ttBlobTwo {
                        0% {
                            transform:
                                translate3d(
                                    18%,
                                    18%,
                                    0
                                )
                                scale(1.04);
                        }

                        40% {
                            transform:
                                translate3d(
                                    -18%,
                                    10%,
                                    0
                                )
                                scale(0.9);
                        }

                        75% {
                            transform:
                                translate3d(
                                    -4%,
                                    -24%,
                                    0
                                )
                                scale(1.18);
                        }

                        100% {
                            transform:
                                translate3d(
                                    18%,
                                    18%,
                                    0
                                )
                                scale(1.04);
                        }
                    }

                    @keyframes ttBlobThree {
                        0% {
                            transform:
                                translate3d(
                                    -4%,
                                    20%,
                                    0
                                )
                                scale(0.88);
                        }

                        45% {
                            transform:
                                translate3d(
                                    18%,
                                    -18%,
                                    0
                                )
                                scale(1.16);
                        }

                        75% {
                            transform:
                                translate3d(
                                    -22%,
                                    -2%,
                                    0
                                )
                                scale(1);
                        }

                        100% {
                            transform:
                                translate3d(
                                    -4%,
                                    20%,
                                    0
                                )
                                scale(0.88);
                        }
                    }

                    @keyframes ttOuterGlow {
                        0% {
                            opacity: 0.58;
                            transform: scale(0.95);
                        }

                        50% {
                            opacity: 0.86;
                            transform: scale(1.07);
                        }

                        100% {
                            opacity: 0.64;
                            transform: scale(0.98);
                        }
                    }

                    @media (
                        prefers-reduced-motion: reduce
                    ) {
                        .tt-flowing-layer,
                        .tt-flowing-blob,
                        .tt-outer-glow {
                            animation:
                                none !important;
                        }
                    }
                `,
      }),
      l(`div`, {
        className: `tt-outer-glow`,
        style: {
          position: `absolute`,
          left: `50%`,
          top: `50%`,
          width: `100%`,
          aspectRatio: `1 / 1`,
          borderRadius: `70%`,
          transform: `translate(-50%, -50%)`,
          background: `
            radial-gradient(
                circle at center,
                rgba(255,255,255,0.96) 0%,
                rgba(255,255,255,0.92) 45%,
                
                ${o} 68%,
                ${i} 88%,
                transparent 100%
            )
        `,
          boxShadow: `
            0 0 24px rgba(255,255,255,0.8),
            0 0 50px ${i},
            0 0 90px ${o}
        `,
          opacity: w * 0.8,
          pointerEvents: `none`,
          zIndex: 0,
        },
      }),
      f(`div`, {
        style: {
          position: `absolute`,
          inset: 0,
          overflow: `hidden`,
          borderRadius: `50%`,
          background: n,
          clipPath: `circle(50% at 50% 50%)`,
          WebkitClipPath: `circle(50% at 50% 50%)`,
          boxShadow: `
                        0 0 6px
                        rgba(
                            255,
                            255,
                            255,
                            0.95
                        ),

                        0 0 48px
                        ${i},

                        0 0 44px
                        color-mix(
                            in srgb,
                            ${o}
                            ${Math.round(w * 100)}%,
                            transparent
                        ),

                        inset 0 0 18px
                        rgba(
                            255,
                            255,
                            255,
                            ${0.48 * T}
                        ),

                        inset 0 -28px 48px
                        rgba(
                            72,
                            82,
                            220,
                            ${0.22 * T}
                        )
                    `,
          transform: `translateZ(0)`,
          isolation: `isolate`,
          zIndex: 1,
        },
        children: [
          l(`div`, {
            className: `tt-flowing-layer`,
            style: {
              position: `absolute`,
              inset: `-2%`,
              background: `
                            linear-gradient(
                                125deg,
                                ${n} 0%,
                                ${i} 28%,
                                ${o} 57%,
                                ${n} 82%,
                                ${s} 100%
                            )
                        `,
              backgroundSize: `280% 280%`,
              filter: `blur(10px) saturate(1.05)`,
              animation: `ttBaseFlow ${u}s ease-in-out infinite alternate`,
              willChange: `transform, background-position`,
            },
          }),
          l(`div`, {
            className: `tt-flowing-blob`,
            style: {
              position: `absolute`,
              width: `108%`,
              height: `108%`,
              left: `-16%`,
              top: `-18%`,
              borderRadius: `50%`,
              background: `
                            radial-gradient(
                                circle,
                                ${i} 0%,
                                transparent 69%
                            )
                        `,
              filter: `blur(22px)`,
              opacity: 0.92,
              mixBlendMode: `screen`,
              animation: `ttBlobOne ${u * 1.06}s ease-in-out infinite`,
              willChange: `transform`,
            },
          }),
          l(`div`, {
            className: `tt-flowing-blob`,
            style: {
              position: `absolute`,
              width: `64%`,
              height: `64%`,
              right: `-2%`,
              bottom: `-2%`,
              borderRadius: `50%`,
              background: `
                            radial-gradient(
                                circle,
                                ${o} 0%,
                                transparent 65%
                            )
                        `,
              filter: `blur(10px)`,
              opacity: 0.86,
              mixBlendMode: `screen`,
              animation: `ttBlobTwo ${u * 1.28}s ease-in-out infinite`,
              willChange: `transform`,
            },
          }),
          l(`div`, {
            className: `tt-flowing-blob`,
            style: {
              position: `absolute`,
              width: `102%`,
              height: `102%`,
              left: `20%`,
              bottom: `-18%`,
              borderRadius: `50%`,
              background: `
                            radial-gradient(
                                circle,
                                ${s} 0%,
                                transparent 72%
                            )
                        `,
              filter: `blur(28px)`,
              opacity: 0.42,
              mixBlendMode: `multiply`,
              animation: `ttBlobThree ${u * 1.52}s ease-in-out infinite`,
              willChange: `transform`,
            },
          }),
          l(`div`, {
            ref: C,
            style: {
              position: `absolute`,
              left: `50%`,
              top: `50%`,
              width: `${v}%`,
              transform: `translate3d(-50%, -50%, 0) translate3d(${y}px, ${b}px, 0)`,
              transformOrigin: `center`,
              pointerEvents: `none`,
              willChange: `transform`,
              zIndex: 8,
            },
            children: t
              ? l(`img`, {
                  src: t,
                  alt: ``,
                  draggable: !1,
                  style: {
                    display: `block`,
                    width: `100%`,
                    height: `auto`,
                    objectFit: `contain`,
                    pointerEvents: `none`,
                    userSelect: `none`,
                  },
                })
              : l(`div`, {
                  style: {
                    width: `100%`,
                    padding: `12px 10px`,
                    boxSizing: `border-box`,
                    borderRadius: 999,
                    border: `3px solid #101014`,
                    color: `#101014`,
                    background: `rgba(255,255,255,0.18)`,
                    fontFamily: `Inter, sans-serif`,
                    fontSize: 12,
                    fontWeight: 600,
                    textAlign: `center`,
                  },
                  children: `在右侧上传眼镜PNG`,
                }),
          }),
          l(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              width: `100%`,
              height: `100%`,
              borderRadius: `50%`,
              background: `
                            radial-gradient(
                                circle closest-side at center,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0
                                ) 0%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0
                                ) 45%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.01
                                ) 50%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.03
                                ) 55%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.07
                                ) 60%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.13
                                ) 65%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.22
                                ) 70%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.34
                                ) 75%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.48
                                ) 79%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.62
                                ) 83%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.75
                                ) 87%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.86
                                ) 91%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.94
                                ) 95%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    0.98
                                ) 98%,

                                rgba(
                                    255,
                                    255,
                                    255,
                                    1
                                ) 100%
                            )
                        `,
              pointerEvents: `none`,
              zIndex: 7,
            },
          }),
        ],
      }),
    ],
  });
}
var Ve = e(() => {
    (i(),
      p(),
      n(),
      S(),
      (Be.defaultProps = {
        lightColor: `#F0F5FF`,
        blueColor: `#91B4FF`,
        purpleColor: `#7868FF`,
        deepColor: `#596FDB`,
        flowSpeed: 9,
        glowStrength: 45,
        edgeStrength: 82,
        followMouse: !0,
        maxMove: 17,
        maxRotate: 5,
        followSmoothness: 0.1,
        glassesWidth: 61,
        glassesOffsetX: 0,
        glassesOffsetY: 0,
        ariaLabel: `TT设计智能体互动球体`,
      }),
      B(Be, {
        glassesImage: { type: P.Image, title: `眼镜PNG` },
        lightColor: { type: P.Color, title: `浅色` },
        blueColor: { type: P.Color, title: `蓝色` },
        purpleColor: { type: P.Color, title: `紫色` },
        deepColor: { type: P.Color, title: `深蓝` },
        flowSpeed: { type: P.Number, title: `流动周期`, min: 3, max: 30, step: 0.5, unit: `s` },
        glowStrength: { type: P.Number, title: `外部光晕`, min: 0, max: 100, step: 1, unit: `%` },
        edgeStrength: { type: P.Number, title: `边缘发光`, min: 0, max: 100, step: 1, unit: `%` },
        followMouse: {
          type: P.Boolean,
          title: `鼠标跟随`,
          enabledTitle: `开启`,
          disabledTitle: `关闭`,
        },
        maxMove: {
          type: P.Number,
          title: `跟随距离`,
          min: 0,
          max: 50,
          step: 1,
          unit: `px`,
          hidden(e) {
            return !e.followMouse;
          },
        },
        maxRotate: {
          type: P.Number,
          title: `转动角度`,
          min: 0,
          max: 18,
          step: 0.5,
          unit: `°`,
          hidden(e) {
            return !e.followMouse;
          },
        },
        followSmoothness: {
          type: P.Number,
          title: `跟随速度`,
          min: 0.02,
          max: 0.3,
          step: 0.01,
          hidden(e) {
            return !e.followMouse;
          },
        },
        glassesWidth: { type: P.Number, title: `眼镜大小`, min: 20, max: 110, step: 1, unit: `%` },
        glassesOffsetX: {
          type: P.Number,
          title: `眼镜水平`,
          min: -100,
          max: 100,
          step: 1,
          unit: `px`,
        },
        glassesOffsetY: {
          type: P.Number,
          title: `眼镜垂直`,
          min: -100,
          max: 100,
          step: 1,
          unit: `px`,
        },
        ariaLabel: { type: P.String, title: `辅助说明` },
      }));
  }),
  He,
  Ue,
  We,
  Ge = e(() => {
    (S(),
      x.loadFonts([`GF;Noto Sans SC-600`, `Inter-Black`, `Inter-BlackItalic`, `Inter-BoldItalic`]),
      (He = [
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/rZ5DdENNqIdFTIyQQiP5isO7M.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Ue = [
        `.framer-Z2uiE .framer-styles-preset-8c9qou:not(.rich-text-wrapper), .framer-Z2uiE .framer-styles-preset-8c9qou.rich-text-wrapper h3 { --framer-font-family: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -1px; --framer-line-height: 1.45em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-aa7a1bf8-0e2c-4033-9eab-2a389d66541f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }`,
      ]),
      (We = `framer-Z2uiE`));
  }),
  Ke,
  qe,
  Je,
  Ye = e(() => {
    (S(),
      x.loadFonts([
        `GF;Noto Sans SC-regular`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-SemiBoldItalic`,
      ]),
      (Ke = [
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
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/zSsEuoJdh8mcFVk976C05ZfQr8.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/6FI2EneKzM3qBy5foOZXey7coCA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/fuyXZpVvOjq8NesCOfgirHCWyg.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (qe = [
        `.framer-dNxtU .framer-styles-preset-126x0z5:not(.rich-text-wrapper), .framer-dNxtU .framer-styles-preset-126x0z5.rich-text-wrapper h6 { --framer-font-family: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.02em; --framer-line-height: 1.55em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #596274; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Je = `framer-dNxtU`));
  }),
  Xe,
  Ze,
  Qe,
  $e = e(() => {
    (S(),
      x.loadFonts([
        `GF;Noto Sans SC-600`,
        `GF;Noto Sans SC-100`,
        `Inter-BlackItalic`,
        `Inter-BoldItalic`,
      ]),
      (Xe = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Noto Sans SC`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Noto Sans SC`,
              url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGwHCnYlNbPzS5HE.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Noto Sans SC`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Noto Sans SC`,
              url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_EnYlNbPzS5HE.woff2`,
              weight: `100`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              openType: !0,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Ze = [
        `.framer-aIhpT .framer-styles-preset-167nrvd:not(.rich-text-wrapper), .framer-aIhpT .framer-styles-preset-167nrvd.rich-text-wrapper h4 { --framer-font-family: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-family-bold: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 100; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -1px; --framer-line-height: 1.08em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, #4f545e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }`,
      ]),
      (Qe = `framer-aIhpT`));
  }),
  et,
  tt,
  nt,
  rt = e(() => {
    (S(),
      x.loadFonts([`GF;Noto Sans SC-700`, `GF;Noto Sans SC-900`]),
      (et = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Noto Sans SC`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Noto Sans SC`,
              url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGzjCnYlNbPzS5HE.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Noto Sans SC`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Noto Sans SC`,
              url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG3bCnYlNbPzS5HE.woff2`,
              weight: `900`,
            },
          ],
        },
      ]),
      (tt = [
        `.framer-nxJiV .framer-styles-preset-1nu0r10:not(.rich-text-wrapper), .framer-nxJiV .framer-styles-preset-1nu0r10.rich-text-wrapper h1 { --framer-font-family: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-family-bold: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 80px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: -2px; --framer-line-height: 1.08em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-aa7a1bf8-0e2c-4033-9eab-2a389d66541f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-nxJiV .framer-styles-preset-1nu0r10:not(.rich-text-wrapper), .framer-nxJiV .framer-styles-preset-1nu0r10.rich-text-wrapper h1 { --framer-font-family: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-family-bold: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: -2px; --framer-line-height: 1.08em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-aa7a1bf8-0e2c-4033-9eab-2a389d66541f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-nxJiV .framer-styles-preset-1nu0r10:not(.rich-text-wrapper), .framer-nxJiV .framer-styles-preset-1nu0r10.rich-text-wrapper h1 { --framer-font-family: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-family-bold: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: -2px; --framer-line-height: 1.08em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-aa7a1bf8-0e2c-4033-9eab-2a389d66541f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (nt = `framer-nxJiV`));
  }),
  it,
  at,
  ot,
  st,
  K,
  ct,
  lt,
  ut,
  dt,
  ft,
  q,
  pt,
  mt,
  J,
  ht,
  gt,
  _t,
  vt,
  Y,
  yt,
  bt,
  xt,
  St,
  X,
  Z,
  Q,
  Ct,
  wt,
  Tt,
  $,
  Et;
e(() => {
  (p(),
    S(),
    v(),
    n(),
    de(),
    Le(),
    le(),
    ue(),
    ze(),
    he(),
    Ve(),
    Ge(),
    ye(),
    Ye(),
    $e(),
    pe(),
    be(),
    rt(),
    Ee(),
    (it = b(U)),
    (at = b(H)),
    (ot = b(Be)),
    (st = b(Re)),
    (K = R(h.div)),
    (ct = R(F)),
    (lt = b(G)),
    (ut = ie(G)),
    (dt = b(V)),
    (ft = b(fe)),
    (q = R(O)),
    (pt = re(h.div)),
    (mt = {
      DuSEqTF6q: `(min-width: 768px) and (max-width: 1199.98px)`,
      jUmaycA0l: `(min-width: 1200px) and (max-width: 1439.98px)`,
      TyN2kHuje: `(max-width: 767.98px)`,
      WQLkyLRf1: `(min-width: 1440px)`,
    }),
    (J = () => typeof document < `u`),
    (ht = []),
    (gt = `framer-OPdDt`),
    (_t = {
      DuSEqTF6q: `framer-v-19s0we3`,
      jUmaycA0l: `framer-v-t4nrt4`,
      TyN2kHuje: `framer-v-qtrbr4`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (vt = (e, t, n) => (e && t ? `position` : n)),
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (yt = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
    (bt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: yt,
      x: -1,
      y: -3,
    }),
    (xt = {
      opacity: 1,
      rotate: -2,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: yt,
    }),
    (St = {
      opacity: 1,
      rotate: -1,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.1, delay: 0, duration: 0.3, type: `spring` },
    }),
    (X = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Z = { damping: 45, delay: 0, mass: 1, stiffness: 123, type: `spring` }),
    (Q = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Z,
      x: 0,
      y: 0,
    }),
    (Ct = {
      "Desktop 2": `jUmaycA0l`,
      Desktop: `WQLkyLRf1`,
      Phone: `TyN2kHuje`,
      Tablet: `DuSEqTF6q`,
    }),
    (wt = ({ value: e }) =>
      L()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Tt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ct[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    ($ = se(
      u(function (e, n) {
        let i = r(null),
          a = n ?? i,
          s = m(),
          { activeLocale: c, setLocale: u } = ae(),
          p = te(),
          { style: v, className: b, layoutId: x, variant: S, ...ee } = Tt(e);
        oe(t(() => De({}, c), [c]));
        let [A, re] = y(S, mt, !1),
          ie = T(gt, Te, nt, Qe, _e, Je, ve, We),
          N = () => !J() || A !== `DuSEqTF6q`,
          P = d(ne)?.isLayoutTemplate,
          se = !!d(g)?.transition?.layout,
          L = vt(P, se),
          R = () => !J() || A !== `TyN2kHuje`,
          ce = () => !J() || A === `DuSEqTF6q`,
          z = k(`lv5q3bZ9M`),
          B = r(null),
          le = r(null),
          ue = r(null),
          de = r(null),
          pe = () => !J() || A === `TyN2kHuje`,
          me = k(`nWbY0Lgb9`),
          he = k(`vM4Fp03PG`),
          ge = k(`w4xzTIb6v`),
          ye = k(`GTPx_4V7M`),
          be = r(null);
        return (
          w({}),
          l(ne.Provider, {
            value: {
              activeVariantId: A,
              humanReadableVariantMap: Ct,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: _t,
            },
            children: f(_, {
              id: x ?? s,
              children: [
                l(wt, {
                  value: `html body { background: rgb(255, 255, 255); } html { font-size: 100%; }`,
                }),
                f(h.div, {
                  ...ee,
                  className: T(ie, `framer-72rtr7`, b),
                  ref: a,
                  style: { ...v },
                  children: [
                    N() &&
                      f(h.nav, {
                        className: `framer-jdv0u8 hidden-19s0we3`,
                        "data-border": !0,
                        "data-framer-name": `顶部导航`,
                        layout: L,
                        children: [
                          f(`div`, {
                            className: `framer-kruif5`,
                            children: [
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  TyN2kHuje: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 54,
                                      intrinsicWidth: 80.66666666666667,
                                      loading: C((p?.y || 0) + 0 + 0 + 14 + 3.5),
                                      pixelHeight: 81,
                                      pixelWidth: 121,
                                      sizes: `36px`,
                                      src: `../../assets/images/4Hx3n32MOsZSeiBzxCYh7OUJXE.png`,
                                    },
                                  },
                                },
                                children: l(F, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 54,
                                    intrinsicWidth: 80.66666666666667,
                                    pixelHeight: 81,
                                    pixelWidth: 121,
                                    sizes: `44px`,
                                    src: `../../assets/images/4Hx3n32MOsZSeiBzxCYh7OUJXE.png`,
                                  },
                                  className: `framer-83tldw`,
                                  "data-framer-name": `Image`,
                                }),
                              }),
                              R() &&
                                l(D, {
                                  className: `framer-h1kjnp hidden-qtrbr4`,
                                  "data-framer-name": `占位符`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 122 26" overflow="visible"><path d="M 0 0 L 122 0 L 122 26 L 0 26 Z" fill="rgba(204, 204, 204, 0)"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                            ],
                          }),
                          f(`div`, {
                            className: `framer-18lhh23`,
                            "data-framer-name": `导航操作`,
                            children: [
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  TyN2kHuje: { width: `99.9px`, y: (p?.y || 0) + 0 + 0 + 10 + 0 },
                                },
                                children: l(I, {
                                  height: 38,
                                  children: l(M, {
                                    className: `framer-q53ii7-container`,
                                    nodeId: `JqRGNT5Ew`,
                                    scopeId: `augiA20Il`,
                                    children: l(E, {
                                      breakpoint: A,
                                      overrides: {
                                        TyN2kHuje: { style: { height: `100%`, width: `100%` } },
                                      },
                                      children: l(U, {
                                        height: `100%`,
                                        id: `JqRGNT5Ew`,
                                        layoutId: `JqRGNT5Ew`,
                                        variant: Y(`I5XWiT2Nr`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              R() &&
                                l(I, {
                                  height: 38,
                                  children: l(M, {
                                    className: `framer-mi18xn-container hidden-qtrbr4`,
                                    nodeId: `Gc6ANO5Tr`,
                                    scopeId: `augiA20Il`,
                                    children: l(H, {
                                      height: `100%`,
                                      id: `Gc6ANO5Tr`,
                                      layoutId: `Gc6ANO5Tr`,
                                      variant: Y(`Yo_oqj_W9`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ce() &&
                      f(h.nav, {
                        className: `framer-19nmnbx hidden-72rtr7 hidden-qtrbr4 hidden-t4nrt4`,
                        "data-border": !0,
                        "data-framer-name": `phone导航`,
                        layout: L,
                        children: [
                          l(`div`, {
                            className: `framer-19jgink`,
                            children: l(E, {
                              breakpoint: A,
                              overrides: {
                                DuSEqTF6q: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 54,
                                    intrinsicWidth: 80.66666666666667,
                                    loading: C((p?.y || 0) + 0 + 0 + 20 + 2.5),
                                    pixelHeight: 81,
                                    pixelWidth: 121,
                                    sizes: `36px`,
                                    src: `../../assets/images/4Hx3n32MOsZSeiBzxCYh7OUJXE.png`,
                                  },
                                },
                              },
                              children: l(F, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 54,
                                  intrinsicWidth: 80.66666666666667,
                                  pixelHeight: 81,
                                  pixelWidth: 121,
                                  sizes: `36px`,
                                  src: `../../assets/images/4Hx3n32MOsZSeiBzxCYh7OUJXE.png`,
                                },
                                className: `framer-1hbp1v8`,
                                "data-framer-name": `Image`,
                              }),
                            }),
                          }),
                          N() &&
                            f(`div`, {
                              className: `framer-f8hi2i hidden-19s0we3`,
                              "data-framer-name": `导航链接`,
                              children: [
                                l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTcwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `15px`,
                                        "--framer-font-weight": `700`,
                                      },
                                      children: l(j, {
                                        href: { webPageId: `augiA20Il` },
                                        motionChild: !0,
                                        nodeId: `vZrjB7noD`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `augiA20Il`,
                                        smoothScroll: !1,
                                        children: l(h.a, {
                                          className: `framer-styles-preset-1vcbuby`,
                                          "data-styles-preset": `XgyhftzdY`,
                                          children: `首页`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-dy23az`,
                                  "data-framer-name": `首页`,
                                  fonts: [`GF;Noto Sans SC-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTcwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `15px`,
                                        "--framer-font-weight": `700`,
                                      },
                                      children: l(j, {
                                        href: { webPageId: `XVwBOuGaa` },
                                        motionChild: !0,
                                        nodeId: `OrQaffplP`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `augiA20Il`,
                                        smoothScroll: !1,
                                        children: l(h.a, {
                                          className: `framer-styles-preset-1vcbuby`,
                                          "data-styles-preset": `XgyhftzdY`,
                                          children: `专家`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-121mxdv`,
                                  "data-framer-name": `专家`,
                                  fonts: [`GF;Noto Sans SC-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTcwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `15px`,
                                        "--framer-font-weight": `700`,
                                      },
                                      children: l(j, {
                                        href: { hash: `:lv5q3bZ9M`, webPageId: `augiA20Il` },
                                        motionChild: !0,
                                        nodeId: `YZi8ciJKL`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `augiA20Il`,
                                        smoothScroll: !1,
                                        children: l(h.a, {
                                          className: `framer-styles-preset-1vcbuby`,
                                          "data-styles-preset": `XgyhftzdY`,
                                          children: `功能`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-tigxu7`,
                                  "data-framer-name": `技能`,
                                  fonts: [`GF;Noto Sans SC-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTcwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `15px`,
                                        "--framer-font-weight": `700`,
                                      },
                                      children: l(j, {
                                        href: { hash: `:GTPx_4V7M`, webPageId: `augiA20Il` },
                                        motionChild: !0,
                                        nodeId: `AIkfT6OZP`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `augiA20Il`,
                                        smoothScroll: !1,
                                        children: l(h.a, {
                                          className: `framer-styles-preset-1vcbuby`,
                                          "data-styles-preset": `XgyhftzdY`,
                                          children: `生态`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-z5mtlu`,
                                  "data-framer-name": `活动`,
                                  fonts: [`GF;Noto Sans SC-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          f(`div`, {
                            className: `framer-o09j0f`,
                            "data-framer-name": `导航操作`,
                            children: [
                              l(E, {
                                breakpoint: A,
                                overrides: { DuSEqTF6q: { y: (p?.y || 0) + 0 + 0 + 16 + 0 } },
                                children: l(I, {
                                  height: 38,
                                  children: l(M, {
                                    className: `framer-zcriy7-container`,
                                    nodeId: `t87qHRTii`,
                                    scopeId: `augiA20Il`,
                                    children: l(U, {
                                      height: `100%`,
                                      id: `t87qHRTii`,
                                      layoutId: `t87qHRTii`,
                                      variant: Y(`I5XWiT2Nr`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              N() &&
                                l(I, {
                                  height: 38,
                                  children: l(M, {
                                    className: `framer-139002y-container hidden-19s0we3`,
                                    nodeId: `tGoB33aaY`,
                                    scopeId: `augiA20Il`,
                                    children: l(H, {
                                      height: `100%`,
                                      id: `tGoB33aaY`,
                                      layoutId: `tGoB33aaY`,
                                      variant: Y(`Yo_oqj_W9`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    f(h.main, {
                      className: `framer-n14xv`,
                      "data-framer-name": `首页开场`,
                      layout: L,
                      children: [
                        f(`div`, {
                          className: `framer-1rdtfje`,
                          "data-framer-name": `开场文案`,
                          children: [
                            l(`div`, {
                              className: `framer-v8c5i1`,
                              "data-border": !0,
                              "data-framer-name": `产品标签`,
                              children: l(O, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                      "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                                    },
                                    children: `大设计大模型智能体`,
                                  }),
                                }),
                                className: `framer-11nqg3o`,
                                fonts: [`GF;Noto Sans SC-600`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: l(`h3`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `32px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-letter-spacing": `-1px`,
                                        "--framer-line-height": `1.45em`,
                                        "--framer-text-color": `rgb(17, 19, 24)`,
                                      },
                                      children: `TT 设计智能体`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                              },
                              children: l(O, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`h1`, {
                                    className: `framer-styles-preset-1nu0r10`,
                                    "data-styles-preset": `ZkKoE0Bcr`,
                                    dir: `auto`,
                                    style: { "--framer-text-color": `rgb(17, 19, 24)` },
                                    children: `TT 设计智能体`,
                                  }),
                                }),
                                className: `framer-xchh6y`,
                                "data-framer-name": `TT设计智能体`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            N() &&
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  TyN2kHuje: {
                                    children: l(o, {
                                      children: l(`h4`, {
                                        className: `framer-styles-preset-167nrvd`,
                                        "data-styles-preset": `Ryti7BoZ0`,
                                        dir: `auto`,
                                        children: `100+ 专家和你一起做设计`,
                                      }),
                                    }),
                                    fonts: [`Inter`],
                                  },
                                },
                                children: l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `30px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `1.3em`,
                                        "--framer-text-color": `rgb(17, 19, 24)`,
                                      },
                                      children: `100+ 专家和你一起做设计`,
                                    }),
                                  }),
                                  className: `framer-2qbup1 hidden-19s0we3`,
                                  fonts: [`GF;Noto Sans SC-600`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                DuSEqTF6q: {
                                  children: l(o, {
                                    children: l(`h6`, {
                                      className: `framer-styles-preset-126x0z5`,
                                      "data-styles-preset": `oLvlw9E05`,
                                      dir: `auto`,
                                      children: `汇聚设计学科专家智能体、线上设计技能，为设计学习者提供从灵感发现、问题解析到方案创作的全过程陪伴。`,
                                    }),
                                  }),
                                },
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: l(`h6`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                        "--framer-font-size": `14px`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-line-height": `1.65em`,
                                        "--framer-text-color": `rgb(89, 98, 116)`,
                                      },
                                      children: `汇聚设计学科专家智能体、线上设计技能，为设计学习者提供从灵感发现、问题解析到方案创作的全过程陪伴。`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-regular`],
                                },
                              },
                              children: l(O, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`p`, {
                                    className: `framer-styles-preset-1r99xuj`,
                                    "data-styles-preset": `UaBF4aKC9`,
                                    dir: `auto`,
                                    children: `汇聚设计学科专家智能体、线上设计技能，为设计学习者提供从灵感发现、问题解析到方案创作的全过程陪伴。`,
                                  }),
                                }),
                                className: `framer-1j54c8u`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        N() &&
                          l(I, {
                            children: l(M, {
                              className: `framer-1np1sll-container hidden-19s0we3`,
                              isAuthoredByUser: !0,
                              nodeId: `XnciGSo9F`,
                              rendersWithMotion: !0,
                              scopeId: `augiA20Il`,
                              whileHover: bt,
                              children: l(Be, {
                                ariaLabel: `TT设计智能体互动球体`,
                                blueColor: `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                                deepColor: `var(--token-52e78e7a-6a1d-4d6c-b8f0-e4745725017a, rgb(188, 218, 255))`,
                                edgeStrength: 0,
                                flowSpeed: 3,
                                followMouse: !0,
                                followSmoothness: 0.2,
                                glassesImage: `../../assets/images/JEr7gg8XgX5eN9Jrcq9eLhPqi2o.png`,
                                glassesOffsetX: -5,
                                glassesOffsetY: -11,
                                glassesWidth: 82,
                                glowStrength: 45,
                                height: `100%`,
                                id: `XnciGSo9F`,
                                layoutId: `XnciGSo9F`,
                                lightColor: `rgb(240, 245, 255)`,
                                maxMove: 14,
                                maxRotate: 8,
                                purpleColor: `rgba(112, 124, 255, 0.83)`,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                      ],
                    }),
                    f(h.div, {
                      className: `framer-1hmwf53`,
                      "data-framer-name": `对话框页面`,
                      layout: L,
                      children: [
                        l(E, {
                          breakpoint: A,
                          overrides: {
                            TyN2kHuje: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 40,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                            },
                          },
                          children: f(K, {
                            __framer__spring: {
                              bounce: 0,
                              damping: 60,
                              delay: 0,
                              duration: 0.7,
                              durationBasedSpring: !0,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stagger: 0,
                              stiffness: 500,
                              type: `spring`,
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 80,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: `onInView`,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-173t050`,
                            children: [
                              l(I, {
                                children: l(M, {
                                  className: `framer-14tzy2h-container`,
                                  isAuthoredByUser: !0,
                                  nodeId: `fqkxAqd_j`,
                                  scopeId: `augiA20Il`,
                                  children: l(E, {
                                    breakpoint: A,
                                    overrides: { TyN2kHuje: { fontSize: 15 } },
                                    children: l(Re, {
                                      ariaLabel: `TT设计智能体示例问题动画`,
                                      cursorColor: `var(--token-f4b967fd-da9b-4829-a111-13a6881994ae, rgb(1, 132, 253))`,
                                      cursorGap: 9,
                                      cursorHeight: 21,
                                      cursorWidth: 2,
                                      cycleDuration: 2.5,
                                      fontSize: 17,
                                      fontWeight: 500,
                                      height: `100%`,
                                      id: `fqkxAqd_j`,
                                      layoutId: `fqkxAqd_j`,
                                      lineHeight: 1.5,
                                      questions: [
                                        `设计如何驱动品牌创新？`,
                                        `什么是可持续设计？`,
                                        `帮我调研文创IP的转化路径`,
                                        `怎样做好艺术乡建？`,
                                        `设计如何承载文化记忆？`,
                                        `帮我想一个汽车设计方案`,
                                      ],
                                      style: { width: `100%` },
                                      textColor: `rgb(139, 143, 153)`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  DuSEqTF6q: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 360 150.068" overflow="visible"><g><g><defs><path d="M 23.15 150.068 C 10.364 150.068 0 139.715 0 126.945 L 0 23.124 C 0 10.353 10.364 0 23.15 0 L 336.85 0 C 349.636 0 360 10.353 360 23.124 L 360 126.945 C 360 139.715 349.636 150.068 336.85 150.068 Z" id="a1020z"></path><filter id="a1022z" filterUnits="objectBoundingBox" x="-20.2%" y="-48.9%" width="140.2%" height="197.6%"><feOffset dx="0" dy="1" in="SourceAlpha" result="a1025z"></feOffset><feGaussianBlur stdDeviation="16" in="a1025z" result="a1026z"></feGaussianBlur><feFlood flood-color="rgba(71, 151, 255, 0.26)" result="a1027z"></feFlood><feComposite in="a1027z" in2="a1026z" operator="in" result="a1023z"></feComposite></filter><linearGradient id="idsDuSEqTF6qtMxyOWlUq_2g1409535430" x1="0.49749679276573094" x2="0.502503207234269" y1="-0.0031446540880503138" y2="1.0031446540880502"><stop offset="0" stop-color="rgba(255,255,255,0.4)" stop-opacity="0.4"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></linearGradient></defs><mask id="a1024z" x="-20.2%" y="-48.9%" width="140.2%" height="197.6%"><rect x="-20.2%" y="-48.9%" width="140.2%" height="197.6%" fill="white"></rect><use href="#a1020z" fill="black"></use></mask><g filter="url(#a1022z)" mask="url(#a1024z)"><use stroke-width="1" stroke="black" stroke-miterlimit="10" stroke-dasharray="" fill="black" xlink:href="#a1020z" clip-path="url(#a1021z)"></use></g><use xlink:href="#a1020z" fill="url(#idsDuSEqTF6qtMxyOWlUq_2g1409535430)" clip-path="url(#a1021z)" stroke-width="1" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></use></g><path d="M 310.571 117.267 C 312.528 117.267 314.114 118.851 314.114 120.806 L 314.114 132.604 C 314.114 134.558 312.528 136.143 310.571 136.143 L 298.76 136.143 C 296.803 136.143 295.216 134.558 295.216 132.604 L 295.216 120.806 C 295.216 118.922 296.694 117.368 298.577 117.271 L 298.76 117.267 Z M 309.684 128.638 C 309.085 128.202 308.256 128.278 307.746 128.814 L 302.459 134.373 L 310.571 134.373 C 311.549 134.373 312.342 133.581 312.342 132.604 L 312.342 130.568 Z M 298.76 119.036 C 298.29 119.036 297.839 119.222 297.507 119.554 C 297.174 119.886 296.988 120.336 296.988 120.806 L 296.988 132.604 C 296.988 133.581 297.781 134.373 298.76 134.373 L 300.015 134.373 L 306.46 127.595 C 307.584 126.415 309.408 126.249 310.727 127.206 L 312.342 128.379 L 312.342 120.806 C 312.342 119.828 311.549 119.036 310.571 119.036 Z M 301.659 120.699 C 302.745 120.68 303.758 121.248 304.307 122.185 C 304.856 123.122 304.856 124.282 304.307 125.219 C 303.758 126.156 302.745 126.724 301.659 126.705 C 300.019 126.676 298.705 125.34 298.705 123.702 C 298.705 122.064 300.019 120.728 301.659 120.699 Z M 301.659 122.469 C 300.977 122.469 300.424 123.021 300.424 123.702 C 300.424 124.383 300.977 124.935 301.659 124.935 C 302.34 124.935 302.893 124.383 302.893 123.702 C 302.893 123.021 302.34 122.469 301.659 122.469 Z" fill="rgb(26,26,26)"></path><g><defs><linearGradient id="idsDuSEqTF6qtMxyOWlUq_4g1900325682" x1="0.038390626819651386" x2="0.9006626664374482" y1="0.5530028182347246" y2="0.4539951922199655"><stop offset="0" stop-color="rgb(145,171,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(72,151,255)" stop-opacity="1"></stop></linearGradient></defs><path d="M 336.85 139.214 C 330.066 139.214 324.567 133.721 324.567 126.945 L 324.567 126.945 C 324.567 120.168 330.066 114.675 336.85 114.675 L 336.85 114.675 C 343.634 114.675 349.134 120.168 349.134 126.945 L 349.134 126.945 C 349.134 133.721 343.634 139.214 336.85 139.214 Z" fill="url(#idsDuSEqTF6qtMxyOWlUq_4g1900325682)"></path></g><path d="M 342.725 127.476 C 342.62 127.705 342.441 127.887 342.228 127.996 L 334.136 132.155 C 333.562 132.44 332.865 132.208 332.578 131.635 C 332.449 131.36 332.425 131.047 332.512 130.756 L 333.397 127.821 C 333.475 127.555 333.72 127.371 333.998 127.369 L 337.095 127.369 C 337.331 127.369 337.522 127.178 337.522 126.943 C 337.522 126.707 337.331 126.516 337.095 126.516 L 334.001 126.516 C 333.721 126.515 333.476 126.329 333.399 126.061 L 332.526 123.116 C 332.341 122.503 332.685 121.855 333.298 121.664 C 333.58 121.573 333.886 121.601 334.149 121.744 L 342.228 125.903 C 342.792 126.196 343.019 126.903 342.725 127.476 Z" fill="rgb(255,255,255)"></path><path d="M 0.472 103.349 L 359.528 103.349" fill="transparent" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                  },
                                  jUmaycA0l: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 439 183" overflow="visible"><g><g><defs><path d="M 28.23 183 C 12.639 183 0 170.375 0 154.802 L 0 28.198 C 0 12.625 12.639 0 28.23 0 L 410.77 0 C 426.361 0 439 12.625 439 28.198 L 439 154.802 C 439 170.375 426.361 183 410.77 183 Z" id="a1052z"></path><filter id="a1054z" filterUnits="objectBoundingBox" x="-16.5%" y="-40.2%" width="133.0%" height="180.1%"><feOffset dx="0" dy="1" in="SourceAlpha" result="a1057z"></feOffset><feGaussianBlur stdDeviation="16" in="a1057z" result="a1058z"></feGaussianBlur><feFlood flood-color="rgba(71, 151, 255, 0.26)" result="a1059z"></feFlood><feComposite in="a1059z" in2="a1058z" operator="in" result="a1055z"></feComposite></filter><linearGradient id="idsjUmaycA0ltMxyOWlUq_2g1409535430" x1="0.49749679276573094" x2="0.502503207234269" y1="-0.0031446540880503138" y2="1.0031446540880502"><stop offset="0" stop-color="rgba(255,255,255,0.4)" stop-opacity="0.4"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></linearGradient></defs><mask id="a1056z" x="-16.5%" y="-40.2%" width="133.0%" height="180.1%"><rect x="-16.5%" y="-40.2%" width="133.0%" height="180.1%" fill="white"></rect><use href="#a1052z" fill="black"></use></mask><g filter="url(#a1054z)" mask="url(#a1056z)"><use stroke-width="1" stroke="black" stroke-miterlimit="10" stroke-dasharray="" fill="black" xlink:href="#a1052z" clip-path="url(#a1053z)"></use></g><use xlink:href="#a1052z" fill="url(#idsjUmaycA0ltMxyOWlUq_2g1409535430)" clip-path="url(#a1053z)" stroke-width="1" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></use></g><path d="M 377.644 143.292 C 380.03 143.292 381.965 145.225 381.965 147.608 L 381.965 161.995 C 381.965 164.379 380.03 166.311 377.644 166.311 L 363.241 166.311 C 360.854 166.311 358.92 164.379 358.92 161.995 L 358.92 147.608 C 358.92 145.311 360.722 143.416 363.018 143.298 L 363.241 143.292 Z M 376.563 157.159 C 375.832 156.628 374.821 156.72 374.199 157.374 L 367.752 164.153 L 377.644 164.153 C 378.837 164.153 379.804 163.187 379.804 161.995 L 379.804 159.513 Z M 363.241 145.45 C 362.668 145.45 362.118 145.677 361.713 146.082 C 361.308 146.487 361.08 147.036 361.08 147.608 L 361.08 161.995 C 361.08 163.188 362.047 164.153 363.241 164.153 L 364.772 164.153 L 372.632 155.887 C 374.001 154.449 376.226 154.246 377.834 155.413 L 379.804 156.844 L 379.804 147.608 C 379.804 146.416 378.836 145.45 377.644 145.45 Z M 366.776 147.478 C 368.101 147.455 369.336 148.148 370.005 149.29 C 370.675 150.433 370.675 151.847 370.005 152.99 C 369.336 154.133 368.101 154.825 366.776 154.802 C 364.777 154.766 363.174 153.137 363.174 151.14 C 363.174 149.143 364.777 147.514 366.776 147.478 Z M 366.776 149.636 C 365.944 149.636 365.27 150.31 365.27 151.14 C 365.27 151.971 365.944 152.644 366.776 152.644 C 367.607 152.644 368.281 151.971 368.281 151.14 C 368.281 150.31 367.607 149.636 366.776 149.636 Z" fill="rgb(26,26,26)"></path><g><defs><linearGradient id="idsjUmaycA0ltMxyOWlUq_4g1900325682" x1="0.038390626819651386" x2="0.9006626664374482" y1="0.5530028182347246" y2="0.4539951922199655"><stop offset="0" stop-color="rgb(145,171,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(72,151,255)" stop-opacity="1"></stop></linearGradient></defs><path d="M 410.77 169.764 C 402.498 169.764 395.791 163.065 395.791 154.802 L 395.791 154.802 C 395.791 146.538 402.498 139.84 410.77 139.84 L 410.77 139.84 C 419.043 139.84 425.749 146.538 425.749 154.802 L 425.749 154.802 C 425.749 163.065 419.043 169.764 410.77 169.764 Z" fill="url(#idsjUmaycA0ltMxyOWlUq_4g1900325682)"></path></g><path d="M 417.934 155.45 C 417.806 155.73 417.588 155.951 417.328 156.084 L 407.46 161.156 C 406.76 161.503 405.91 161.22 405.56 160.522 C 405.403 160.186 405.374 159.805 405.48 159.449 L 406.559 155.871 C 406.655 155.546 406.952 155.322 407.292 155.32 L 411.069 155.32 C 411.356 155.32 411.59 155.087 411.59 154.8 C 411.59 154.512 411.356 154.279 411.069 154.279 L 407.295 154.279 C 406.954 154.277 406.656 154.052 406.561 153.725 L 405.497 150.134 C 405.271 149.385 405.691 148.595 406.438 148.362 C 406.782 148.252 407.156 148.285 407.476 148.46 L 417.328 153.531 C 418.016 153.889 418.292 154.751 417.934 155.45 Z" fill="rgb(255,255,255)"></path><path d="M 0.576 126.028 L 438.424 126.028" fill="transparent" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                  },
                                  TyN2kHuje: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 113.294" overflow="visible"><g><g><defs><path d="M 17.362 113.294 C 7.773 113.294 0 105.478 0 95.837 L 0 17.457 C 0 7.816 7.773 0 17.362 0 L 252.638 0 C 262.227 0 270 7.816 270 17.457 L 270 95.837 C 270 105.478 262.227 113.294 252.638 113.294 Z" id="a1036z"></path><filter id="a1038z" filterUnits="objectBoundingBox" x="-26.9%" y="-64.8%" width="153.6%" height="229.1%"><feOffset dx="0" dy="1" in="SourceAlpha" result="a1041z"></feOffset><feGaussianBlur stdDeviation="16" in="a1041z" result="a1042z"></feGaussianBlur><feFlood flood-color="rgba(71, 151, 255, 0.26)" result="a1043z"></feFlood><feComposite in="a1043z" in2="a1042z" operator="in" result="a1039z"></feComposite></filter><linearGradient id="idsTyN2kHujetMxyOWlUq_2g1409535430" x1="0.49749679276573094" x2="0.502503207234269" y1="-0.0031446540880503138" y2="1.0031446540880502"><stop offset="0" stop-color="rgba(255,255,255,0.4)" stop-opacity="0.4"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></linearGradient></defs><mask id="a1040z" x="-26.9%" y="-64.8%" width="153.6%" height="229.1%"><rect x="-26.9%" y="-64.8%" width="153.6%" height="229.1%" fill="white"></rect><use href="#a1036z" fill="black"></use></mask><g filter="url(#a1038z)" mask="url(#a1040z)"><use stroke-width="1" stroke="black" stroke-miterlimit="10" stroke-dasharray="" fill="black" xlink:href="#a1036z" clip-path="url(#a1037z)"></use></g><use xlink:href="#a1036z" fill="url(#idsTyN2kHujetMxyOWlUq_2g1409535430)" clip-path="url(#a1037z)" stroke-width="1" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></use></g><path d="M 232.264 88.711 C 233.731 88.711 234.921 89.908 234.921 91.383 L 234.921 100.29 C 234.921 101.766 233.731 102.962 232.264 102.962 L 223.406 102.962 C 221.938 102.962 220.748 101.766 220.748 100.29 L 220.748 91.383 C 220.748 89.961 221.856 88.788 223.269 88.715 L 223.406 88.711 Z M 231.599 97.296 C 231.15 96.968 230.528 97.025 230.145 97.429 L 226.18 101.626 L 232.264 101.626 C 232.998 101.626 233.593 101.028 233.593 100.29 L 233.593 98.753 Z M 223.406 90.047 C 223.053 90.047 222.715 90.188 222.466 90.439 C 222.217 90.689 222.077 91.029 222.077 91.383 L 222.077 100.29 C 222.077 101.028 222.671 101.626 223.406 101.626 L 224.347 101.626 L 229.181 96.509 C 230.024 95.618 231.392 95.493 232.381 96.215 L 233.593 97.101 L 233.593 91.383 C 233.593 90.645 232.997 90.047 232.264 90.047 Z M 225.58 91.303 C 226.395 91.288 227.154 91.717 227.566 92.425 C 227.978 93.132 227.978 94.008 227.566 94.715 C 227.154 95.423 226.395 95.851 225.58 95.837 C 224.35 95.815 223.365 94.806 223.365 93.57 C 223.365 92.333 224.35 91.325 225.58 91.303 Z M 225.58 92.639 C 225.068 92.639 224.654 93.056 224.654 93.57 C 224.654 94.084 225.068 94.501 225.58 94.501 C 226.091 94.501 226.506 94.084 226.506 93.57 C 226.506 93.056 226.091 92.639 225.58 92.639 Z" fill="rgb(26,26,26)"></path><g><defs><linearGradient id="idsTyN2kHujetMxyOWlUq_4g1900325682" x1="0.038390626819651386" x2="0.9006626664374482" y1="0.5530028182347246" y2="0.4539951922199655"><stop offset="0" stop-color="rgb(145,171,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(72,151,255)" stop-opacity="1"></stop></linearGradient></defs><path d="M 252.638 105.1 C 247.55 105.1 243.425 100.953 243.425 95.837 L 243.425 95.837 C 243.425 90.721 247.55 86.574 252.638 86.574 L 252.638 86.574 C 257.726 86.574 261.85 90.721 261.85 95.837 L 261.85 95.837 C 261.85 100.953 257.726 105.1 252.638 105.1 Z" fill="url(#idsTyN2kHujetMxyOWlUq_4g1900325682)"></path></g><path d="M 257.044 96.238 C 256.965 96.411 256.831 96.548 256.671 96.631 L 250.602 99.771 C 250.171 99.986 249.649 99.81 249.433 99.378 C 249.336 99.17 249.319 98.934 249.384 98.714 L 250.048 96.499 C 250.106 96.297 250.29 96.159 250.498 96.157 L 252.821 96.157 C 252.998 96.157 253.142 96.013 253.142 95.835 C 253.142 95.658 252.998 95.513 252.821 95.513 L 250.5 95.513 C 250.291 95.512 250.107 95.372 250.049 95.17 L 249.394 92.947 C 249.255 92.483 249.514 91.994 249.973 91.85 C 250.185 91.782 250.415 91.802 250.612 91.911 L 256.671 95.05 C 257.094 95.272 257.264 95.806 257.044 96.238 Z" fill="rgb(255,255,255)"></path><path d="M 0.354 78.023 L 269.646 78.023" fill="transparent" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                  },
                                },
                                children: f(D, {
                                  className: `framer-1evueyl`,
                                  requiresOverflowVisible: !0,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 439 183" overflow="visible"><g><g><defs><path d="M 28.23 183 C 12.639 183 0 170.375 0 154.802 L 0 28.198 C 0 12.625 12.639 0 28.23 0 L 410.77 0 C 426.361 0 439 12.625 439 28.198 L 439 154.802 C 439 170.375 426.361 183 410.77 183 Z" id="a1004z"></path><filter id="a1006z" filterUnits="objectBoundingBox" x="-16.5%" y="-40.2%" width="133.0%" height="180.1%"><feOffset dx="0" dy="1" in="SourceAlpha" result="a1009z"></feOffset><feGaussianBlur stdDeviation="16" in="a1009z" result="a1010z"></feGaussianBlur><feFlood flood-color="rgba(71, 151, 255, 0.26)" result="a1011z"></feFlood><feComposite in="a1011z" in2="a1010z" operator="in" result="a1007z"></feComposite></filter><linearGradient id="idstMxyOWlUq_2g1409535430" x1="0.49749679276573094" x2="0.502503207234269" y1="-0.0031446540880503138" y2="1.0031446540880502"><stop offset="0" stop-color="rgba(255,255,255,0.4)" stop-opacity="0.4"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></linearGradient></defs><mask id="a1008z" x="-16.5%" y="-40.2%" width="133.0%" height="180.1%"><rect x="-16.5%" y="-40.2%" width="133.0%" height="180.1%" fill="white"></rect><use href="#a1004z" fill="black"></use></mask><g filter="url(#a1006z)" mask="url(#a1008z)"><use stroke-width="1" stroke="black" stroke-miterlimit="10" stroke-dasharray="" fill="black" xlink:href="#a1004z" clip-path="url(#a1005z)"></use></g><use xlink:href="#a1004z" fill="url(#idstMxyOWlUq_2g1409535430)" clip-path="url(#a1005z)" stroke-width="1" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></use></g><path d="M 377.644 143.292 C 380.03 143.292 381.965 145.225 381.965 147.608 L 381.965 161.995 C 381.965 164.379 380.03 166.311 377.644 166.311 L 363.241 166.311 C 360.854 166.311 358.92 164.379 358.92 161.995 L 358.92 147.608 C 358.92 145.311 360.722 143.416 363.018 143.298 L 363.241 143.292 Z M 376.563 157.159 C 375.832 156.628 374.821 156.72 374.199 157.374 L 367.752 164.153 L 377.644 164.153 C 378.837 164.153 379.804 163.187 379.804 161.995 L 379.804 159.513 Z M 363.241 145.45 C 362.668 145.45 362.118 145.677 361.713 146.082 C 361.308 146.487 361.08 147.036 361.08 147.608 L 361.08 161.995 C 361.08 163.188 362.047 164.153 363.241 164.153 L 364.772 164.153 L 372.632 155.887 C 374.001 154.449 376.226 154.246 377.834 155.413 L 379.804 156.844 L 379.804 147.608 C 379.804 146.416 378.836 145.45 377.644 145.45 Z M 366.776 147.478 C 368.101 147.455 369.336 148.148 370.005 149.29 C 370.675 150.433 370.675 151.847 370.005 152.99 C 369.336 154.133 368.101 154.825 366.776 154.802 C 364.777 154.766 363.174 153.137 363.174 151.14 C 363.174 149.143 364.777 147.514 366.776 147.478 Z M 366.776 149.636 C 365.944 149.636 365.27 150.31 365.27 151.14 C 365.27 151.971 365.944 152.644 366.776 152.644 C 367.607 152.644 368.281 151.971 368.281 151.14 C 368.281 150.31 367.607 149.636 366.776 149.636 Z" fill="rgb(26,26,26)"></path><g><defs><linearGradient id="idstMxyOWlUq_4g1900325682" x1="0.038390626819651386" x2="0.9006626664374482" y1="0.5530028182347246" y2="0.4539951922199655"><stop offset="0" stop-color="rgb(145,171,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(72,151,255)" stop-opacity="1"></stop></linearGradient></defs><path d="M 410.77 169.764 C 402.498 169.764 395.791 163.065 395.791 154.802 L 395.791 154.802 C 395.791 146.538 402.498 139.84 410.77 139.84 L 410.77 139.84 C 419.043 139.84 425.749 146.538 425.749 154.802 L 425.749 154.802 C 425.749 163.065 419.043 169.764 410.77 169.764 Z" fill="url(#idstMxyOWlUq_4g1900325682)"></path></g><path d="M 417.934 155.45 C 417.806 155.73 417.588 155.951 417.328 156.084 L 407.46 161.156 C 406.76 161.503 405.91 161.22 405.56 160.522 C 405.403 160.186 405.374 159.805 405.48 159.449 L 406.559 155.871 C 406.655 155.546 406.952 155.322 407.292 155.32 L 411.069 155.32 C 411.356 155.32 411.59 155.087 411.59 154.8 C 411.59 154.512 411.356 154.279 411.069 154.279 L 407.295 154.279 C 406.954 154.277 406.656 154.052 406.561 153.725 L 405.497 150.134 C 405.271 149.385 405.691 148.595 406.438 148.362 C 406.782 148.252 407.156 148.285 407.476 148.46 L 417.328 153.531 C 418.016 153.889 418.292 154.751 417.934 155.45 Z" fill="rgb(255,255,255)"></path><path d="M 0.576 126.028 L 438.424 126.028" fill="transparent" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></path></g></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    l(E, {
                                      breakpoint: A,
                                      overrides: {
                                        DuSEqTF6q: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 360 150.068" overflow="visible"><g><defs><path d="M 23.15 150.068 C 10.364 150.068 0 139.715 0 126.945 L 0 23.124 C 0 10.353 10.364 0 23.15 0 L 336.85 0 C 349.636 0 360 10.353 360 23.124 L 360 126.945 C 360 139.715 349.636 150.068 336.85 150.068 Z" id="a1076z"></path><filter id="a1078z" filterUnits="objectBoundingBox" x="-20.2%" y="-48.9%" width="140.2%" height="197.6%"><feOffset dx="0" dy="1" in="SourceAlpha" result="a1081z"></feOffset><feGaussianBlur stdDeviation="16" in="a1081z" result="a1082z"></feGaussianBlur><feFlood flood-color="rgba(71, 151, 255, 0.26)" result="a1083z"></feFlood><feComposite in="a1083z" in2="a1082z" operator="in" result="a1079z"></feComposite></filter><linearGradient id="idsDuSEqTF6qW3486K6PD_1g1409535430" x1="0.49749679276573094" x2="0.502503207234269" y1="-0.0031446540880503138" y2="1.0031446540880502"><stop offset="0" stop-color="rgba(255,255,255,0.4)" stop-opacity="0.4"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></linearGradient></defs><mask id="a1080z" x="-20.2%" y="-48.9%" width="140.2%" height="197.6%"><rect x="-20.2%" y="-48.9%" width="140.2%" height="197.6%" fill="white"></rect><use href="#a1076z" fill="black"></use></mask><g filter="url(#a1078z)" mask="url(#a1080z)"><use stroke-width="1" stroke="black" stroke-miterlimit="10" stroke-dasharray="" fill="black" xlink:href="#a1076z" clip-path="url(#a1077z)"></use></g><use xlink:href="#a1076z" fill="url(#idsDuSEqTF6qW3486K6PD_1g1409535430)" clip-path="url(#a1077z)" stroke-width="1" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></use></g></svg>`,
                                        },
                                        jUmaycA0l: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 439 183" overflow="visible"><g><defs><path d="M 28.23 183 C 12.639 183 0 170.375 0 154.802 L 0 28.198 C 0 12.625 12.639 0 28.23 0 L 410.77 0 C 426.361 0 439 12.625 439 28.198 L 439 154.802 C 439 170.375 426.361 183 410.77 183 Z" id="a1092z"></path><filter id="a1094z" filterUnits="objectBoundingBox" x="-16.5%" y="-40.2%" width="133.0%" height="180.1%"><feOffset dx="0" dy="1" in="SourceAlpha" result="a1097z"></feOffset><feGaussianBlur stdDeviation="16" in="a1097z" result="a1098z"></feGaussianBlur><feFlood flood-color="rgba(71, 151, 255, 0.26)" result="a1099z"></feFlood><feComposite in="a1099z" in2="a1098z" operator="in" result="a1095z"></feComposite></filter><linearGradient id="idsjUmaycA0lW3486K6PD_1g1409535430" x1="0.49749679276573094" x2="0.502503207234269" y1="-0.0031446540880503138" y2="1.0031446540880502"><stop offset="0" stop-color="rgba(255,255,255,0.4)" stop-opacity="0.4"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></linearGradient></defs><mask id="a1096z" x="-16.5%" y="-40.2%" width="133.0%" height="180.1%"><rect x="-16.5%" y="-40.2%" width="133.0%" height="180.1%" fill="white"></rect><use href="#a1092z" fill="black"></use></mask><g filter="url(#a1094z)" mask="url(#a1096z)"><use stroke-width="1" stroke="black" stroke-miterlimit="10" stroke-dasharray="" fill="black" xlink:href="#a1092z" clip-path="url(#a1093z)"></use></g><use xlink:href="#a1092z" fill="url(#idsjUmaycA0lW3486K6PD_1g1409535430)" clip-path="url(#a1093z)" stroke-width="1" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></use></g></svg>`,
                                        },
                                        TyN2kHuje: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 113.294" overflow="visible"><g><defs><path d="M 17.362 113.294 C 7.773 113.294 0 105.478 0 95.837 L 0 17.457 C 0 7.816 7.773 0 17.362 0 L 252.638 0 C 262.227 0 270 7.816 270 17.457 L 270 95.837 C 270 105.478 262.227 113.294 252.638 113.294 Z" id="a1084z"></path><filter id="a1086z" filterUnits="objectBoundingBox" x="-26.9%" y="-64.8%" width="153.6%" height="229.1%"><feOffset dx="0" dy="1" in="SourceAlpha" result="a1089z"></feOffset><feGaussianBlur stdDeviation="16" in="a1089z" result="a1090z"></feGaussianBlur><feFlood flood-color="rgba(71, 151, 255, 0.26)" result="a1091z"></feFlood><feComposite in="a1091z" in2="a1090z" operator="in" result="a1087z"></feComposite></filter><linearGradient id="idsTyN2kHujeW3486K6PD_1g1409535430" x1="0.49749679276573094" x2="0.502503207234269" y1="-0.0031446540880503138" y2="1.0031446540880502"><stop offset="0" stop-color="rgba(255,255,255,0.4)" stop-opacity="0.4"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></linearGradient></defs><mask id="a1088z" x="-26.9%" y="-64.8%" width="153.6%" height="229.1%"><rect x="-26.9%" y="-64.8%" width="153.6%" height="229.1%" fill="white"></rect><use href="#a1084z" fill="black"></use></mask><g filter="url(#a1086z)" mask="url(#a1088z)"><use stroke-width="1" stroke="black" stroke-miterlimit="10" stroke-dasharray="" fill="black" xlink:href="#a1084z" clip-path="url(#a1085z)"></use></g><use xlink:href="#a1084z" fill="url(#idsTyN2kHujeW3486K6PD_1g1409535430)" clip-path="url(#a1085z)" stroke-width="1" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></use></g></svg>`,
                                        },
                                      },
                                      children: l(D, {
                                        className: `framer-at51j0`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 439 183" overflow="visible"><g><defs><path d="M 28.23 183 C 12.639 183 0 170.375 0 154.802 L 0 28.198 C 0 12.625 12.639 0 28.23 0 L 410.77 0 C 426.361 0 439 12.625 439 28.198 L 439 154.802 C 439 170.375 426.361 183 410.77 183 Z" id="a1068z"></path><filter id="a1070z" filterUnits="objectBoundingBox" x="-16.5%" y="-40.2%" width="133.0%" height="180.1%"><feOffset dx="0" dy="1" in="SourceAlpha" result="a1073z"></feOffset><feGaussianBlur stdDeviation="16" in="a1073z" result="a1074z"></feGaussianBlur><feFlood flood-color="rgba(71, 151, 255, 0.26)" result="a1075z"></feFlood><feComposite in="a1075z" in2="a1074z" operator="in" result="a1071z"></feComposite></filter><linearGradient id="idsW3486K6PD_1g1409535430" x1="0.49749679276573094" x2="0.502503207234269" y1="-0.0031446540880503138" y2="1.0031446540880502"><stop offset="0" stop-color="rgba(255,255,255,0.4)" stop-opacity="0.4"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></linearGradient></defs><mask id="a1072z" x="-16.5%" y="-40.2%" width="133.0%" height="180.1%"><rect x="-16.5%" y="-40.2%" width="133.0%" height="180.1%" fill="white"></rect><use href="#a1068z" fill="black"></use></mask><g filter="url(#a1070z)" mask="url(#a1072z)"><use stroke-width="1" stroke="black" stroke-miterlimit="10" stroke-dasharray="" fill="black" xlink:href="#a1068z" clip-path="url(#a1069z)"></use></g><use xlink:href="#a1068z" fill="url(#idsW3486K6PD_1g1409535430)" clip-path="url(#a1069z)" stroke-width="1" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></use></g></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    l(E, {
                                      breakpoint: A,
                                      overrides: {
                                        DuSEqTF6q: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.898 18.877" overflow="visible"><path d="M 15.354 0 C 17.311 0 18.898 1.585 18.898 3.539 L 18.898 15.337 C 18.898 17.292 17.311 18.877 15.354 18.877 L 3.543 18.877 C 1.586 18.877 0 17.292 0 15.337 L 0 3.539 C 0 1.655 1.477 0.102 3.361 0.005 L 3.543 0 Z M 14.468 11.371 C 13.869 10.936 13.04 11.011 12.529 11.548 L 7.243 17.107 L 15.354 17.107 C 16.333 17.107 17.126 16.315 17.126 15.337 L 17.126 13.301 Z M 3.543 1.77 C 3.073 1.769 2.623 1.956 2.29 2.288 C 1.958 2.62 1.771 3.07 1.772 3.539 L 1.772 15.337 C 1.772 16.315 2.564 17.107 3.543 17.107 L 4.799 17.107 L 11.244 10.328 C 12.367 9.149 14.192 8.982 15.51 9.939 L 17.126 11.113 L 17.126 3.539 C 17.126 2.562 16.332 1.77 15.354 1.77 Z M 6.442 3.433 C 7.529 3.413 8.541 3.982 9.09 4.919 C 9.639 5.855 9.639 7.015 9.09 7.952 C 8.541 8.889 7.529 9.458 6.442 9.438 C 4.803 9.409 3.489 8.073 3.489 6.435 C 3.489 4.798 4.803 3.462 6.442 3.433 Z M 6.442 5.202 C 5.76 5.202 5.208 5.754 5.208 6.435 C 5.208 7.117 5.76 7.669 6.442 7.669 C 7.124 7.669 7.677 7.117 7.677 6.435 C 7.677 5.754 7.124 5.202 6.442 5.202 Z" fill="rgb(26,26,26)"></path></svg>`,
                                        },
                                        TyN2kHuje: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.173 14.251" overflow="visible"><path d="M 11.516 0 C 12.983 0 14.173 1.196 14.173 2.672 L 14.173 11.579 C 14.173 13.055 12.983 14.251 11.516 14.251 L 2.657 14.251 C 1.19 14.251 0 13.055 0 11.579 L 0 2.672 C 0 1.25 1.108 0.077 2.521 0.004 L 2.657 0 Z M 10.851 8.585 C 10.402 8.256 9.78 8.313 9.397 8.718 L 5.432 12.915 L 11.516 12.915 C 12.25 12.915 12.844 12.317 12.844 11.579 L 12.844 10.042 Z M 2.657 1.336 C 2.305 1.336 1.967 1.477 1.718 1.727 C 1.468 1.978 1.329 2.318 1.329 2.672 L 1.329 11.579 C 1.329 12.317 1.923 12.915 2.657 12.915 L 3.599 12.915 L 8.433 7.797 C 9.276 6.907 10.644 6.781 11.633 7.504 L 12.844 8.389 L 12.844 2.672 C 12.844 1.934 12.249 1.336 11.516 1.336 Z M 4.832 2.592 C 5.647 2.577 6.406 3.006 6.818 3.713 C 7.23 4.421 7.23 5.296 6.818 6.004 C 6.406 6.711 5.647 7.14 4.832 7.125 C 3.602 7.103 2.617 6.095 2.617 4.858 C 2.617 3.622 3.602 2.613 4.832 2.592 Z M 4.832 3.928 C 4.32 3.928 3.906 4.344 3.906 4.858 C 3.906 5.373 4.32 5.789 4.832 5.789 C 5.343 5.789 5.758 5.373 5.758 4.858 C 5.758 4.344 5.343 3.928 4.832 3.928 Z" fill="rgb(26,26,26)"></path></svg>`,
                                        },
                                      },
                                      children: f(D, {
                                        className: `framer-17dat92`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.045 23.019" overflow="visible"><path d="M 18.724 0 C 21.11 0 23.045 1.932 23.045 4.316 L 23.045 18.703 C 23.045 21.087 21.11 23.019 18.724 23.019 L 4.321 23.019 C 1.935 23.019 0 21.087 0 18.703 L 0 4.316 C 0 2.019 1.802 0.124 4.098 0.006 L 4.321 0 Z M 17.643 13.867 C 16.912 13.336 15.901 13.428 15.279 14.082 L 8.832 20.861 L 18.724 20.861 C 19.917 20.861 20.884 19.895 20.884 18.703 L 20.884 16.22 Z M 4.321 2.158 C 3.748 2.158 3.198 2.385 2.793 2.79 C 2.388 3.195 2.16 3.744 2.16 4.316 L 2.16 18.703 C 2.16 19.895 3.127 20.861 4.321 20.861 L 5.852 20.861 L 13.712 12.595 C 15.081 11.156 17.306 10.953 18.914 12.121 L 20.884 13.551 L 20.884 4.316 C 20.884 3.124 19.916 2.158 18.724 2.158 Z M 7.856 4.186 C 9.181 4.163 10.416 4.855 11.085 5.998 C 11.755 7.14 11.755 8.555 11.085 9.698 C 10.416 10.84 9.181 11.533 7.856 11.509 C 5.857 11.474 4.255 9.845 4.255 7.848 C 4.255 5.85 5.857 4.221 7.856 4.186 Z M 7.856 6.344 C 7.025 6.344 6.351 7.017 6.351 7.848 C 6.351 8.678 7.025 9.351 7.856 9.351 C 8.687 9.351 9.361 8.678 9.361 7.848 C 9.361 7.017 8.687 6.344 7.856 6.344 Z" fill="rgb(26,26,26)"></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          l(E, {
                                            breakpoint: A,
                                            overrides: {
                                              DuSEqTF6q: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.898 18.877" overflow="visible"><path d="M 15.354 0 C 17.311 0 18.898 1.585 18.898 3.539 L 18.898 15.337 C 18.898 17.292 17.311 18.877 15.354 18.877 L 3.543 18.877 C 1.586 18.877 0 17.292 0 15.337 L 0 3.539 C 0 1.655 1.477 0.102 3.361 0.005 L 3.543 0 Z" fill="transparent"></path></svg>`,
                                              },
                                              TyN2kHuje: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.173 14.251" overflow="visible"><path d="M 11.516 0 C 12.983 0 14.173 1.196 14.173 2.672 L 14.173 11.579 C 14.173 13.055 12.983 14.251 11.516 14.251 L 2.657 14.251 C 1.19 14.251 0 13.055 0 11.579 L 0 2.672 C 0 1.25 1.108 0.077 2.521 0.004 L 2.657 0 Z" fill="transparent"></path></svg>`,
                                              },
                                            },
                                            children: l(D, {
                                              className: `framer-8v1n5h`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.045 23.019" overflow="visible"><path d="M 18.724 0 C 21.11 0 23.045 1.932 23.045 4.316 L 23.045 18.703 C 23.045 21.087 21.11 23.019 18.724 23.019 L 4.321 23.019 C 1.935 23.019 0 21.087 0 18.703 L 0 4.316 C 0 2.019 1.802 0.124 4.098 0.006 L 4.321 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          l(E, {
                                            breakpoint: A,
                                            overrides: {
                                              DuSEqTF6q: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.883 6.018" overflow="visible"><path d="M 7.226 0.282 C 6.626 -0.153 5.797 -0.078 5.287 0.459 L 0 6.018 L 8.112 6.018 C 9.09 6.018 9.883 5.226 9.883 4.248 L 9.883 2.212 Z" fill="transparent"></path></svg>`,
                                              },
                                              TyN2kHuje: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.413 4.543" overflow="visible"><path d="M 5.419 0.213 C 4.97 -0.116 4.348 -0.059 3.965 0.346 L 0 4.543 L 6.084 4.543 C 6.818 4.543 7.413 3.945 7.413 3.207 L 7.413 1.67 Z" fill="transparent"></path></svg>`,
                                              },
                                            },
                                            children: l(D, {
                                              className: `framer-75mm49`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.052 7.338" overflow="visible"><path d="M 8.811 0.344 C 8.08 -0.187 7.069 -0.095 6.447 0.559 L 0 7.338 L 9.892 7.338 C 11.085 7.338 12.052 6.372 12.052 5.18 L 12.052 2.698 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          l(E, {
                                            breakpoint: A,
                                            overrides: {
                                              DuSEqTF6q: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.354 15.337" overflow="visible"><path d="M 1.772 0 C 1.302 0 0.851 0.186 0.519 0.518 C 0.186 0.85 0 1.3 0 1.77 L 0 13.567 C 0 14.545 0.793 15.337 1.772 15.337 L 3.027 15.337 L 9.472 8.559 C 10.596 7.379 12.42 7.213 13.739 8.17 L 15.354 9.343 L 15.354 1.77 C 15.354 0.792 14.561 0 13.583 0 Z" fill="transparent"></path></svg>`,
                                              },
                                              TyN2kHuje: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.516 11.579" overflow="visible"><path d="M 1.329 0 C 0.976 0 0.638 0.141 0.389 0.391 C 0.14 0.642 0 0.982 0 1.336 L 0 10.243 C 0 10.981 0.595 11.579 1.329 11.579 L 2.271 11.579 L 7.104 6.461 C 7.947 5.571 9.315 5.445 10.304 6.168 L 11.516 7.053 L 11.516 1.336 C 11.516 0.598 10.92 0 10.187 0 Z" fill="transparent"></path></svg>`,
                                              },
                                            },
                                            children: l(D, {
                                              className: `framer-uyr2hn`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.724 18.703" overflow="visible"><path d="M 2.16 0 C 1.587 0 1.038 0.227 0.632 0.632 C 0.227 1.037 0 1.586 0 2.158 L 0 16.545 C 0 17.737 0.967 18.703 2.16 18.703 L 3.692 18.703 L 11.551 10.437 C 12.921 8.998 15.146 8.795 16.753 9.963 L 18.724 11.393 L 18.724 2.158 C 18.724 0.966 17.756 0 16.563 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          l(E, {
                                            breakpoint: A,
                                            overrides: {
                                              DuSEqTF6q: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.013 6.007" overflow="visible"><path d="M 2.953 0 C 4.04 -0.019 5.053 0.549 5.601 1.486 C 6.15 2.423 6.15 3.583 5.601 4.52 C 5.053 5.457 4.04 6.025 2.953 6.006 C 1.314 5.977 0 4.641 0 3.003 C 0 1.365 1.314 0.03 2.953 0 Z" fill="transparent"></path></svg>`,
                                              },
                                              TyN2kHuje: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.51 4.535" overflow="visible"><path d="M 2.215 0 C 3.03 -0.014 3.789 0.415 4.201 1.122 C 4.613 1.829 4.613 2.705 4.201 3.413 C 3.789 4.12 3.03 4.549 2.215 4.534 C 0.985 4.512 0 3.504 0 2.267 C 0 1.031 0.985 0.022 2.215 0 Z" fill="transparent"></path></svg>`,
                                              },
                                            },
                                            children: l(D, {
                                              className: `framer-k5papq`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.333 7.325" overflow="visible"><path d="M 3.601 0.001 C 4.927 -0.023 6.161 0.67 6.831 1.812 C 7.5 2.955 7.5 4.37 6.831 5.512 C 6.161 6.655 4.927 7.347 3.601 7.324 C 1.602 7.289 0 5.66 0 3.662 C 0 1.665 1.602 0.036 3.601 0.001 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          l(E, {
                                            breakpoint: A,
                                            overrides: {
                                              DuSEqTF6q: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.469 2.466" overflow="visible"><path d="M 1.234 0 C 0.553 0 0 0.552 0 1.233 C 0 1.914 0.553 2.466 1.234 2.466 C 1.916 2.466 2.469 1.914 2.469 1.233 C 2.469 0.552 1.916 0 1.234 0 Z" fill="transparent"></path></svg>`,
                                              },
                                              TyN2kHuje: {
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.852 1.862" overflow="visible"><path d="M 0.926 0 C 0.415 0 0 0.417 0 0.931 C 0 1.445 0.415 1.862 0.926 1.862 C 1.437 1.862 1.852 1.445 1.852 0.931 C 1.852 0.417 1.437 0 0.926 0 Z" fill="transparent"></path></svg>`,
                                              },
                                            },
                                            children: l(D, {
                                              className: `framer-c8bl85`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.011 3.007" overflow="visible"><path d="M 1.505 0 C 0.674 0 0 0.673 0 1.504 C 0 2.334 0.674 3.007 1.505 3.007 C 2.337 3.007 3.011 2.334 3.011 1.504 C 3.011 0.673 2.337 0 1.505 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    l(E, {
                                      breakpoint: A,
                                      overrides: {
                                        DuSEqTF6q: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.567 24.539" overflow="visible"><g><defs><linearGradient id="idsDuSEqTF6qTnIJG6GPA_1g1900325682" x1="0.038390626819651386" x2="0.9006626664374482" y1="0.5530028182347246" y2="0.4539951922199655"><stop offset="0" stop-color="rgb(145,171,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(72,151,255)" stop-opacity="1"></stop></linearGradient></defs><path d="M 12.283 24.539 C 5.499 24.539 0 19.046 0 12.27 L 0 12.27 C 0 5.493 5.499 0 12.283 0 L 12.283 0 C 19.067 0 24.567 5.493 24.567 12.27 L 24.567 12.27 C 24.567 19.046 19.067 24.539 12.283 24.539 Z" fill="url(#idsDuSEqTF6qTnIJG6GPA_1g1900325682)"></path></g></svg>`,
                                        },
                                        jUmaycA0l: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.958 29.925" overflow="visible"><g><defs><linearGradient id="idsjUmaycA0lTnIJG6GPA_1g1900325682" x1="0.038390626819651386" x2="0.9006626664374482" y1="0.5530028182347246" y2="0.4539951922199655"><stop offset="0" stop-color="rgb(145,171,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(72,151,255)" stop-opacity="1"></stop></linearGradient></defs><path d="M 14.979 29.925 C 6.706 29.925 0 23.226 0 14.962 L 0 14.962 C 0 6.699 6.706 0 14.979 0 L 14.979 0 C 23.252 0 29.958 6.699 29.958 14.962 L 29.958 14.962 C 29.958 23.226 23.252 29.925 14.979 29.925 Z" fill="url(#idsjUmaycA0lTnIJG6GPA_1g1900325682)"></path></g></svg>`,
                                        },
                                        TyN2kHuje: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.425 18.526" overflow="visible"><g><defs><linearGradient id="idsTyN2kHujeTnIJG6GPA_1g1900325682" x1="0.038390626819651386" x2="0.9006626664374482" y1="0.5530028182347246" y2="0.4539951922199655"><stop offset="0" stop-color="rgb(145,171,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(72,151,255)" stop-opacity="1"></stop></linearGradient></defs><path d="M 9.213 18.526 C 4.125 18.526 0 14.379 0 9.263 L 0 9.263 C 0 4.147 4.125 0 9.213 0 L 9.213 0 C 14.301 0 18.425 4.147 18.425 9.263 L 18.425 9.263 C 18.425 14.379 14.301 18.526 9.213 18.526 Z" fill="url(#idsTyN2kHujeTnIJG6GPA_1g1900325682)"></path></g></svg>`,
                                        },
                                      },
                                      children: l(D, {
                                        className: `framer-ubjbj0`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.958 29.925" overflow="visible"><g><defs><linearGradient id="idsTnIJG6GPA_1g1900325682" x1="0.038390626819651386" x2="0.9006626664374482" y1="0.5530028182347246" y2="0.4539951922199655"><stop offset="0" stop-color="rgb(145,171,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(72,151,255)" stop-opacity="1"></stop></linearGradient></defs><path d="M 14.979 29.925 C 6.706 29.925 0 23.226 0 14.962 L 0 14.962 C 0 6.699 6.706 0 14.979 0 L 14.979 0 C 23.252 0 29.958 6.699 29.958 14.962 L 29.958 14.962 C 29.958 23.226 23.252 29.925 14.979 29.925 Z" fill="url(#idsTnIJG6GPA_1g1900325682)"></path></g></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    l(E, {
                                      breakpoint: A,
                                      overrides: {
                                        DuSEqTF6q: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.393 10.665" overflow="visible"><path d="M 10.264 5.864 C 10.159 6.094 9.981 6.275 9.767 6.384 L 1.675 10.544 C 1.101 10.829 0.405 10.596 0.117 10.024 C -0.012 9.749 -0.035 9.435 0.052 9.144 L 0.936 6.21 C 1.015 5.943 1.259 5.759 1.537 5.758 L 4.635 5.758 C 4.87 5.758 5.062 5.567 5.062 5.331 C 5.062 5.096 4.87 4.905 4.635 4.905 L 1.54 4.905 C 1.261 4.903 1.016 4.718 0.938 4.45 L 0.065 1.505 C -0.12 0.891 0.224 0.243 0.837 0.052 C 1.12 -0.038 1.426 -0.011 1.688 0.133 L 9.767 4.291 C 10.331 4.585 10.558 5.291 10.264 5.864 Z" fill="rgb(255,255,255)"></path></svg>`,
                                        },
                                        TyN2kHuje: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.795 8.052" overflow="visible"><path d="M 7.698 4.427 C 7.619 4.6 7.486 4.737 7.325 4.82 L 1.256 7.96 C 0.826 8.175 0.303 8 0.088 7.567 C -0.009 7.36 -0.026 7.123 0.039 6.903 L 0.702 4.688 C 0.761 4.487 0.944 4.348 1.153 4.347 L 3.476 4.347 C 3.653 4.347 3.796 4.203 3.796 4.025 C 3.796 3.847 3.653 3.703 3.476 3.703 L 1.155 3.703 C 0.945 3.701 0.762 3.562 0.704 3.359 L 0.049 1.136 C -0.09 0.673 0.168 0.183 0.628 0.039 C 0.84 -0.029 1.069 -0.008 1.266 0.1 L 7.325 3.24 C 7.748 3.461 7.918 3.995 7.698 4.427 Z" fill="rgb(255,255,255)"></path></svg>`,
                                        },
                                      },
                                      children: l(D, {
                                        className: `framer-16cladc`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.674 13.006" overflow="visible"><path d="M 12.517 7.151 C 12.389 7.431 12.171 7.652 11.91 7.785 L 2.043 12.858 C 1.343 13.205 0.493 12.921 0.143 12.223 C -0.015 11.888 -0.043 11.506 0.063 11.151 L 1.142 7.573 C 1.237 7.247 1.535 7.023 1.875 7.021 L 5.652 7.021 C 5.939 7.021 6.172 6.788 6.172 6.501 C 6.172 6.214 5.939 5.981 5.652 5.981 L 1.878 5.981 C 1.537 5.979 1.239 5.753 1.144 5.426 L 0.079 1.835 C -0.146 1.087 0.274 0.296 1.021 0.064 C 1.365 -0.047 1.739 -0.013 2.059 0.162 L 11.91 5.233 C 12.598 5.591 12.875 6.453 12.517 7.151 Z" fill="rgb(255,255,255)"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    l(E, {
                                      breakpoint: A,
                                      overrides: {
                                        DuSEqTF6q: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 359.055 1" overflow="visible"><path d="M 0 0 L 359.055 0" fill="transparent" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                        },
                                        TyN2kHuje: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 269.291 1" overflow="visible"><path d="M 0 0 L 269.291 0" fill="transparent" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                        },
                                      },
                                      children: l(D, {
                                        className: `framer-1bi2bqh`,
                                        requiresOverflowVisible: !0,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 437.848 1" overflow="visible"><path d="M 0 0 L 437.848 0" fill="transparent" stroke="rgb(226,228,239)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        l(E, {
                          breakpoint: A,
                          overrides: {
                            DuSEqTF6q: {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 177,
                                intrinsicWidth: 1146,
                                loading: C((p?.y || 0) + 0 + 386.9 + 48 + 207),
                                pixelHeight: 177,
                                pixelWidth: 1146,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `360px`,
                                src: `../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64-7695bd.png`,
                                srcSet: `../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64.png 512w,../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64-a1a0b6.png 1024w,../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64-7695bd.png 1146w`,
                              },
                            },
                            TyN2kHuje: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 40,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 177,
                                intrinsicWidth: 1146,
                                loading: C((p?.y || 0) + 0 + 673.9 + 48 + 24),
                                pixelHeight: 177,
                                pixelWidth: 1146,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `calc((${p?.width || `100vw`} - 48px) * 0.8)`,
                                src: `../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64-7695bd.png`,
                                srcSet: `../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64.png 512w,../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64-a1a0b6.png 1024w,../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64-7695bd.png 1146w`,
                              },
                            },
                          },
                          children: l(ct, {
                            __framer__spring: {
                              bounce: 0,
                              damping: 60,
                              delay: 0,
                              duration: 0.7,
                              durationBasedSpring: !0,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stagger: 0,
                              stiffness: 500,
                              type: `spring`,
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 80,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: `onInView`,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: ``,
                              fit: `fit`,
                              intrinsicHeight: 177,
                              intrinsicWidth: 1146,
                              pixelHeight: 177,
                              pixelWidth: 1146,
                              positionX: `center`,
                              positionY: `center`,
                              sizes: `435px`,
                              src: `../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64-7695bd.png`,
                              srcSet: `../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64.png 512w,../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64-a1a0b6.png 1024w,../../assets/images/svHoUDNCd3zAf6M83CX8SxXy64-7695bd.png 1146w`,
                            },
                            className: `framer-1tix18q`,
                            "data-framer-name": `Frame 2147224294`,
                          }),
                        }),
                      ],
                    }),
                    f(h.div, {
                      className: `framer-16a3qv7`,
                      "data-framer-name": `移动端小程序`,
                      id: z,
                      layout: L,
                      ref: B,
                      children: [
                        l(E, {
                          breakpoint: A,
                          overrides: {
                            TyN2kHuje: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 40,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                            },
                          },
                          children: f(K, {
                            __framer__spring: {
                              bounce: 0,
                              damping: 60,
                              delay: 0,
                              duration: 0.7,
                              durationBasedSpring: !0,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stagger: 0,
                              stiffness: 500,
                              type: `spring`,
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 80,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: `onInView`,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-7gqbi7`,
                            children: [
                              l(O, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                      "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                      "--framer-font-size": `15px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `rgb(49, 108, 255)`,
                                    },
                                    children: `随时捕捉，每一个设计灵感`,
                                  }),
                                }),
                                className: `framer-16xy70`,
                                fonts: [`GF;Noto Sans SC-600`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  DuSEqTF6q: {
                                    children: l(o, {
                                      children: l(`h3`, {
                                        className: `framer-styles-preset-8c9qou`,
                                        "data-styles-preset": `HZnCw3DJu`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgb(17, 19, 24)` },
                                        children: `移动端小程序`,
                                      }),
                                    }),
                                  },
                                  TyN2kHuje: {
                                    children: l(o, {
                                      children: l(`h3`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                          "--framer-font-size": `32px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-1px`,
                                          "--framer-line-height": `1.45em`,
                                          "--framer-text-color": `var(--token-846236c4-6fd9-4ab1-8b1a-29d5d88d6e32, rgb(20, 23, 28))`,
                                        },
                                        children: `移动端小程序`,
                                      }),
                                    }),
                                    fonts: [`GF;Noto Sans SC-600`],
                                  },
                                },
                                children: l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-b7h9xy`,
                                      "data-styles-preset": `KDFXH9noS`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#111318` },
                                      children: `移动端小程序`,
                                    }),
                                  }),
                                  className: `framer-18cq7b9`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  DuSEqTF6q: {
                                    children: l(o, {
                                      children: l(`h6`, {
                                        className: `framer-styles-preset-126x0z5`,
                                        "data-styles-preset": `oLvlw9E05`,
                                        dir: `auto`,
                                        children: `随时随地向设计专家提问，将转瞬即逝的想法保存为可继续发展的设计线索。`,
                                      }),
                                    }),
                                  },
                                  TyN2kHuje: {
                                    children: l(o, {
                                      children: l(`h6`, {
                                        className: `framer-styles-preset-126x0z5`,
                                        "data-styles-preset": `oLvlw9E05`,
                                        dir: `auto`,
                                        children: `随时随地向设计专家提问，将转瞬即逝的想法保存为可继续发展的设计线索。`,
                                      }),
                                    }),
                                  },
                                },
                                children: l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-1r99xuj`,
                                      "data-styles-preset": `UaBF4aKC9`,
                                      dir: `auto`,
                                      children: `随时随地向设计专家提问，将转瞬即逝的想法保存为可继续发展的设计线索。`,
                                    }),
                                  }),
                                  className: `framer-l1zhld`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        f(`div`, {
                          className: `framer-1nbsnmo`,
                          "data-framer-name": `手机界面展示`,
                          children: [
                            f(h.div, {
                              className: `framer-60x0gq`,
                              "data-framer-name": `对话专家`,
                              whileHover: xt,
                              children: [
                                l(E, {
                                  breakpoint: A,
                                  overrides: {
                                    DuSEqTF6q: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1542,
                                        intrinsicWidth: 1654,
                                        loading: C(
                                          (p?.y || 0) + 0 + 743.9 + 48 + 175.2 + -6 + 18 + 0
                                        ),
                                        pixelHeight: 2313,
                                        pixelWidth: 2481,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `297px`,
                                        src: `../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-c1c453.png`,
                                        srcSet: `../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8.png 512w,../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-7e9c97.png 1024w,../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-ca0b64.png 2048w,../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-c1c453.png 2481w`,
                                      },
                                    },
                                    TyN2kHuje: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1542,
                                        intrinsicWidth: 1654,
                                        loading: C(
                                          (p?.y || 0) + 0 + 931.9 + 48 + 178.1 + 0 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 2313,
                                        pixelWidth: 2481,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `calc(min(${p?.width || `100vw`}, 1440px) - 48px)`,
                                        src: `../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-c1c453.png`,
                                        srcSet: `../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8.png 512w,../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-7e9c97.png 1024w,../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-ca0b64.png 2048w,../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-c1c453.png 2481w`,
                                      },
                                    },
                                  },
                                  children: l(F, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1542,
                                      intrinsicWidth: 1654,
                                      pixelHeight: 2313,
                                      pixelWidth: 2481,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `297px`,
                                      src: `../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-c1c453.png`,
                                      srcSet: `../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8.png 512w,../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-7e9c97.png 1024w,../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-ca0b64.png 2048w,../../assets/images/n37E1SxgaR6oIJtMnctAu3LeK8-c1c453.png 2481w`,
                                    },
                                    className: `framer-3x98ul`,
                                    "data-framer-name": `Card1`,
                                  }),
                                }),
                                R() &&
                                  l(O, {
                                    __fromCanvasComponent: !0,
                                    children: l(o, {
                                      children: l(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy02MDA=`,
                                          "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-text-color": `#111318`,
                                        },
                                        children: `对话专家`,
                                      }),
                                    }),
                                    className: `framer-10vbvf8 hidden-qtrbr4`,
                                    fonts: [`GF;Chiron Hei HK-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                l(E, {
                                  breakpoint: A,
                                  overrides: {
                                    TyN2kHuje: {
                                      children: l(o, {
                                        children: l(`h6`, {
                                          className: `framer-styles-preset-126x0z5`,
                                          "data-styles-preset": `oLvlw9E05`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `与不同设计领域的专家智能体展开对话，获得具有学科视角和方法依据的反馈。`,
                                        }),
                                      }),
                                      fonts: [`Inter`],
                                    },
                                  },
                                  children: l(O, {
                                    __fromCanvasComponent: !0,
                                    children: l(o, {
                                      children: l(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy1yZWd1bGFy`,
                                          "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-line-height": `1.65em`,
                                          "--framer-text-color": `rgb(89, 98, 116)`,
                                        },
                                        children: `与不同设计领域的专家智能体展开对话，获得具有学科视角和方法依据的反馈。`,
                                      }),
                                    }),
                                    className: `framer-1woq6rd`,
                                    fonts: [`GF;Chiron Hei HK-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            f(h.div, {
                              className: `framer-144yp9o`,
                              "data-border": !0,
                              "data-framer-name": `灵感口袋`,
                              whileHover: St,
                              children: [
                                l(E, {
                                  breakpoint: A,
                                  overrides: {
                                    DuSEqTF6q: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1542,
                                        intrinsicWidth: 1654,
                                        loading: C(
                                          (p?.y || 0) + 0 + 743.9 + 48 + 175.2 + -6 + 18 + 0
                                        ),
                                        pixelHeight: 2313,
                                        pixelWidth: 2481,
                                        sizes: `297px`,
                                        src: `../../assets/images/h12iobbaietz6DFslMK3MHPKzs-ce62bc.png`,
                                        srcSet: `../../assets/images/h12iobbaietz6DFslMK3MHPKzs.png 512w,../../assets/images/h12iobbaietz6DFslMK3MHPKzs-85d1ee.png 1024w,../../assets/images/h12iobbaietz6DFslMK3MHPKzs-e726b2.png 2048w,../../assets/images/h12iobbaietz6DFslMK3MHPKzs-ce62bc.png 2481w`,
                                      },
                                    },
                                    TyN2kHuje: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1542,
                                        intrinsicWidth: 1654,
                                        loading: C(
                                          (p?.y || 0) + 0 + 931.9 + 48 + 178.1 + 0 + 356.7 + 0 + 0
                                        ),
                                        pixelHeight: 2313,
                                        pixelWidth: 2481,
                                        sizes: `calc(min(${p?.width || `100vw`}, 1440px) - 48px)`,
                                        src: `../../assets/images/h12iobbaietz6DFslMK3MHPKzs-ce62bc.png`,
                                        srcSet: `../../assets/images/h12iobbaietz6DFslMK3MHPKzs.png 512w,../../assets/images/h12iobbaietz6DFslMK3MHPKzs-85d1ee.png 1024w,../../assets/images/h12iobbaietz6DFslMK3MHPKzs-e726b2.png 2048w,../../assets/images/h12iobbaietz6DFslMK3MHPKzs-ce62bc.png 2481w`,
                                      },
                                    },
                                  },
                                  children: l(F, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1542,
                                      intrinsicWidth: 1654,
                                      pixelHeight: 2313,
                                      pixelWidth: 2481,
                                      sizes: `297px`,
                                      src: `../../assets/images/h12iobbaietz6DFslMK3MHPKzs-ce62bc.png`,
                                      srcSet: `../../assets/images/h12iobbaietz6DFslMK3MHPKzs.png 512w,../../assets/images/h12iobbaietz6DFslMK3MHPKzs-85d1ee.png 1024w,../../assets/images/h12iobbaietz6DFslMK3MHPKzs-e726b2.png 2048w,../../assets/images/h12iobbaietz6DFslMK3MHPKzs-ce62bc.png 2481w`,
                                    },
                                    className: `framer-e0ii`,
                                    "data-framer-name": `Card2`,
                                  }),
                                }),
                                R() &&
                                  l(O, {
                                    __fromCanvasComponent: !0,
                                    children: l(o, {
                                      children: l(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy02MDA=`,
                                          "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-text-color": `#111318`,
                                        },
                                        children: `灵感口袋`,
                                      }),
                                    }),
                                    className: `framer-cxgz0 hidden-qtrbr4`,
                                    fonts: [`GF;Chiron Hei HK-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                l(E, {
                                  breakpoint: A,
                                  overrides: {
                                    TyN2kHuje: {
                                      children: l(o, {
                                        children: l(`h6`, {
                                          className: `framer-styles-preset-126x0z5`,
                                          "data-styles-preset": `oLvlw9E05`,
                                          dir: `auto`,
                                          children: `快速记录文字、图片和现场观察，让零散灵感形成可以持续整理的个人知识库。`,
                                        }),
                                      }),
                                      fonts: [`Inter`],
                                    },
                                  },
                                  children: l(O, {
                                    __fromCanvasComponent: !0,
                                    children: l(o, {
                                      children: l(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy1yZWd1bGFy`,
                                          "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-line-height": `1.65em`,
                                          "--framer-text-color": `rgb(89, 98, 116)`,
                                        },
                                        children: `快速记录文字、图片和现场观察，让零散灵感形成可以持续整理的个人知识库。`,
                                      }),
                                    }),
                                    className: `framer-13hs1gn`,
                                    fonts: [`GF;Chiron Hei HK-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f(h.div, {
                      className: `framer-s5hda4`,
                      "data-framer-name": `桌面端`,
                      layout: L,
                      children: [
                        l(E, {
                          breakpoint: A,
                          overrides: {
                            TyN2kHuje: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 40,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                            },
                          },
                          children: f(K, {
                            __framer__spring: {
                              bounce: 0,
                              damping: 60,
                              delay: 0,
                              duration: 0.7,
                              durationBasedSpring: !0,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stagger: 0,
                              stiffness: 500,
                              type: `spring`,
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 80,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: `onInView`,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-nb5b7x`,
                            "data-framer-name": `title`,
                            children: [
                              N() &&
                                l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `15px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-text-color": `rgb(49, 108, 255)`,
                                      },
                                      children: `从灵感解析到设计创作，专家全程在线`,
                                    }),
                                  }),
                                  className: `framer-1g79z9x hidden-19s0we3`,
                                  fonts: [`GF;Noto Sans SC-600`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  DuSEqTF6q: {
                                    children: l(o, {
                                      children: l(`h3`, {
                                        className: `framer-styles-preset-8c9qou`,
                                        "data-styles-preset": `HZnCw3DJu`,
                                        dir: `auto`,
                                        children: `桌面端应用`,
                                      }),
                                    }),
                                  },
                                  TyN2kHuje: {
                                    children: l(o, {
                                      children: l(`h3`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                          "--framer-font-size": `32px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-1px`,
                                          "--framer-line-height": `1.45em`,
                                          "--framer-text-color": `var(--token-846236c4-6fd9-4ab1-8b1a-29d5d88d6e32, rgb(20, 23, 28))`,
                                        },
                                        children: `桌面端应用`,
                                      }),
                                    }),
                                    fonts: [`GF;Noto Sans SC-600`],
                                  },
                                },
                                children: l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-b7h9xy`,
                                      "data-styles-preset": `KDFXH9noS`,
                                      dir: `auto`,
                                      children: `桌面端应用`,
                                    }),
                                  }),
                                  className: `framer-1wxh25v`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  DuSEqTF6q: {
                                    children: f(o, {
                                      children: [
                                        l(`h6`, {
                                          className: `framer-styles-preset-126x0z5`,
                                          "data-styles-preset": `oLvlw9E05`,
                                          dir: `auto`,
                                          children: `提供更加完整的研究、分析与创作工作空间。专家智能体能够围绕同一问题展开协作，并将讨论结果转化为设计方法和可执行的设计方案。`,
                                        }),
                                        l(`h6`, {
                                          className: `framer-styles-preset-126x0z5`,
                                          "data-styles-preset": `oLvlw9E05`,
                                          dir: `auto`,
                                          children: l(`br`, { className: `trailing-break` }),
                                        }),
                                        l(`h6`, {
                                          className: `framer-styles-preset-126x0z5`,
                                          "data-styles-preset": `oLvlw9E05`,
                                          dir: `auto`,
                                          children: l(`br`, { className: `trailing-break` }),
                                        }),
                                        l(`h6`, {
                                          className: `framer-styles-preset-126x0z5`,
                                          "data-styles-preset": `oLvlw9E05`,
                                          dir: `auto`,
                                          children: l(`br`, { className: `trailing-break` }),
                                        }),
                                      ],
                                    }),
                                  },
                                  TyN2kHuje: {
                                    children: l(o, {
                                      children: l(`h6`, {
                                        className: `framer-styles-preset-126x0z5`,
                                        "data-styles-preset": `oLvlw9E05`,
                                        dir: `auto`,
                                        children: `提供更加完整的研究、分析与创作工作空间。专家智能体能够围绕同一问题展开协作，并将讨论结果转化为设计方法和可执行的设计方案。`,
                                      }),
                                    }),
                                  },
                                },
                                children: l(O, {
                                  __fromCanvasComponent: !0,
                                  children: f(o, {
                                    children: [
                                      l(`p`, {
                                        className: `framer-styles-preset-1r99xuj`,
                                        "data-styles-preset": `UaBF4aKC9`,
                                        dir: `auto`,
                                        children: `提供更加完整的研究、分析与创作工作空间。专家智能体能够围绕同一问题展开协作，并将讨论结果转化为设计方法和可执行的设计方案。`,
                                      }),
                                      l(`p`, {
                                        className: `framer-styles-preset-1r99xuj`,
                                        "data-styles-preset": `UaBF4aKC9`,
                                        dir: `auto`,
                                        children: l(`br`, { className: `trailing-break` }),
                                      }),
                                      l(`p`, {
                                        className: `framer-styles-preset-1r99xuj`,
                                        "data-styles-preset": `UaBF4aKC9`,
                                        dir: `auto`,
                                        children: l(`br`, { className: `trailing-break` }),
                                      }),
                                      l(`p`, {
                                        className: `framer-styles-preset-1r99xuj`,
                                        "data-styles-preset": `UaBF4aKC9`,
                                        dir: `auto`,
                                        children: l(`br`, { className: `trailing-break` }),
                                      }),
                                    ],
                                  }),
                                  className: `framer-1ymlnh6`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  DuSEqTF6q: { y: (p?.y || 0) + 0 + 1433.1 + 48 + 0 + 162.3 },
                                  TyN2kHuje: { y: (p?.y || 0) + 0 + 1893.4 + 48 + 0 + 0 + 134.1 },
                                },
                                children: l(I, {
                                  height: 106,
                                  children: l(M, {
                                    className: `framer-18esnft-container`,
                                    nodeId: `CieflRXJ2`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: l(ut, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { offset: 400, ref: le, target: `j80XpEVw8` },
                                        { offset: 600, ref: ue, target: `tnauFZotb` },
                                        { offset: 600, ref: de, target: `nNlwuwsrG` },
                                      ],
                                      __framer__threshold: 0,
                                      __framer__variantAppearEffectEnabled: !0,
                                      height: `100%`,
                                      id: `CieflRXJ2`,
                                      layoutId: `CieflRXJ2`,
                                      variant: Y(`j80XpEVw8`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              pe() &&
                                f(`div`, {
                                  className: `framer-1k6gx89 hidden-72rtr7 hidden-19s0we3 hidden-t4nrt4`,
                                  children: [
                                    l(`div`, { className: `framer-1evwy7c` }),
                                    l(`div`, { className: `framer-zucsts` }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        f(`div`, {
                          className: `framer-2ps20u`,
                          "data-framer-name": `content`,
                          children: [
                            l(`div`, {
                              className: `framer-lm2gm7`,
                              id: me,
                              ref: le,
                              children: l(`div`, {
                                className: `framer-1up8hre`,
                                children: l(I, {
                                  children: l(M, {
                                    className: `framer-ird427-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `vVoYG4frs`,
                                    scopeId: `augiA20Il`,
                                    children: l(V, {
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                      borderRadius: 12,
                                      bottomLeftRadius: 12,
                                      bottomRightRadius: 12,
                                      controls: !0,
                                      height: `100%`,
                                      id: `vVoYG4frs`,
                                      isMixedBorderRadius: !1,
                                      layoutId: `vVoYG4frs`,
                                      loop: !0,
                                      muted: !0,
                                      objectFit: `cover`,
                                      playing: !0,
                                      posterEnabled: !0,
                                      srcFile: `../../assets/misc/P9P8Pla7uTRs3jxv2ZSpRh88A.mp4`,
                                      srcType: `Upload`,
                                      srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                      startTime: 0,
                                      style: { width: `100%` },
                                      topLeftRadius: 12,
                                      topRightRadius: 12,
                                      volume: 25,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            l(`div`, {
                              className: `framer-158f7zj`,
                              id: he,
                              ref: ue,
                              children: l(`div`, {
                                className: `framer-17uhjsl`,
                                children: l(I, {
                                  children: l(M, {
                                    className: `framer-14i1qcm-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `sPRLriap2`,
                                    scopeId: `augiA20Il`,
                                    children: l(V, {
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                      borderRadius: 12,
                                      bottomLeftRadius: 12,
                                      bottomRightRadius: 12,
                                      controls: !0,
                                      height: `100%`,
                                      id: `sPRLriap2`,
                                      isMixedBorderRadius: !1,
                                      layoutId: `sPRLriap2`,
                                      loop: !0,
                                      muted: !0,
                                      objectFit: `cover`,
                                      playing: !0,
                                      posterEnabled: !0,
                                      srcFile: `../../assets/misc/Je3GjH34rfIr0UHjtorxsMeQOgk.mp4`,
                                      srcType: `Upload`,
                                      srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                      startTime: 0,
                                      style: { width: `100%` },
                                      topLeftRadius: 12,
                                      topRightRadius: 12,
                                      volume: 25,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            l(`div`, {
                              className: `framer-12b4fv3`,
                              id: ge,
                              ref: de,
                              children: l(`div`, {
                                className: `framer-1hp8hed`,
                                children: l(I, {
                                  children: l(M, {
                                    className: `framer-1eyt2si-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `iwR3ytA6Z`,
                                    scopeId: `augiA20Il`,
                                    children: l(V, {
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                      borderRadius: 12,
                                      bottomLeftRadius: 12,
                                      bottomRightRadius: 12,
                                      controls: !0,
                                      height: `100%`,
                                      id: `iwR3ytA6Z`,
                                      isMixedBorderRadius: !1,
                                      layoutId: `iwR3ytA6Z`,
                                      loop: !0,
                                      muted: !0,
                                      objectFit: `cover`,
                                      playing: !0,
                                      posterEnabled: !0,
                                      srcFile: `../../assets/misc/Xmzzj1epHsOcIgrukHM2AJOP7vo.mp4`,
                                      srcType: `Upload`,
                                      srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                      startTime: 0,
                                      style: { width: `100%` },
                                      topLeftRadius: 12,
                                      topRightRadius: 12,
                                      volume: 25,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    f(h.div, {
                      className: `framer-qkl12h`,
                      "data-framer-name": `start`,
                      layout: L,
                      children: [
                        l(I, {
                          children: l(M, {
                            className: `framer-c0anax-container`,
                            isAuthoredByUser: !0,
                            nodeId: `pGYUeoKdW`,
                            scopeId: `augiA20Il`,
                            children: l(fe, {
                              blur: 36,
                              color1: `rgb(227, 235, 255)`,
                              color2: `rgb(188, 218, 255)`,
                              color3: `rgb(125, 155, 255)`,
                              color4: `rgb(1, 132, 253)`,
                              height: `100%`,
                              id: `pGYUeoKdW`,
                              intensity: 1,
                              layoutId: `pGYUeoKdW`,
                              movementRange: 2,
                              speed: 14,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                        f(`div`, {
                          className: `framer-194u3w0`,
                          "data-framer-name": `开场`,
                          children: [
                            l(O, {
                              __fromCanvasComponent: !0,
                              children: l(o, {
                                children: l(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy02MDA=`,
                                    "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                    "--framer-font-size": `15px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `1px`,
                                    "--framer-text-color": `var(--token-f4b967fd-da9b-4829-a111-13a6881994ae, rgb(1, 132, 253))`,
                                  },
                                  children: `TT DesignBuddy`,
                                }),
                              }),
                              className: `framer-9n95jd`,
                              fonts: [`GF;Chiron Hei HK-600`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                DuSEqTF6q: {
                                  children: l(o, {
                                    children: l(`h3`, {
                                      className: `framer-styles-preset-8c9qou`,
                                      "data-styles-preset": `HZnCw3DJu`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgb(17, 19, 24)`,
                                      },
                                      children: `与100位设计专家智能体一起思考`,
                                    }),
                                  }),
                                },
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: l(`h3`, {
                                      className: `framer-styles-preset-8c9qou`,
                                      "data-styles-preset": `HZnCw3DJu`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgb(17, 19, 24)`,
                                      },
                                      children: `与100位设计专家智能体一起思考`,
                                    }),
                                  }),
                                },
                              },
                              children: l(O, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`h2`, {
                                    className: `framer-styles-preset-b7h9xy`,
                                    "data-styles-preset": `KDFXH9noS`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `rgb(17, 19, 24)`,
                                    },
                                    children: `与100位设计专家智能体一起思考`,
                                  }),
                                }),
                                className: `framer-1knu6y6`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                DuSEqTF6q: {
                                  children: l(o, {
                                    children: l(`h6`, {
                                      className: `framer-styles-preset-126x0z5`,
                                      "data-styles-preset": `oLvlw9E05`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `不同的设计问题，需要不同的知识视角。TT将设计学科专家的研究成果、方法框架与教学经验转化为可持续对话的专家智能体。`,
                                    }),
                                  }),
                                },
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: l(`h6`, {
                                      className: `framer-styles-preset-126x0z5`,
                                      "data-styles-preset": `oLvlw9E05`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `不同的设计问题，需要不同的知识视角。TT将设计学科专家的研究成果、方法框架与教学经验转化为可持续对话的专家智能体。`,
                                    }),
                                  }),
                                },
                              },
                              children: l(O, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`p`, {
                                    className: `framer-styles-preset-1r99xuj`,
                                    "data-styles-preset": `UaBF4aKC9`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `不同的设计问题，需要不同的知识视角。TT将设计学科专家的研究成果、方法框架与教学经验转化为可持续对话的专家智能体。`,
                                  }),
                                }),
                                className: `framer-1kzrrk9`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        f(K, {
                          __framer__spring: {
                            bounce: 0,
                            damping: 60,
                            delay: 0,
                            duration: 0.7,
                            durationBasedSpring: !0,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `spring`,
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 0,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 80,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onInView`,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-mmphhj`,
                          "data-framer-name": `数据`,
                          children: [
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                DuSEqTF6q: {
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `22px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                      },
                                      children: `112位    TT专家智能体`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                      },
                                      children: `112位    TT专家智能体`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                              },
                              children: l(q, {
                                __framer__animate: { transition: Z },
                                __framer__animateOnce: !1,
                                __framer__enter: X,
                                __framer__exit: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: l(o, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy02MDA=`,
                                      "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                      "--framer-font-size": `29px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                    },
                                    children: `112位    TT专家智能体`,
                                  }),
                                }),
                                className: `framer-1tion57`,
                                fonts: [`GF;Chiron Hei HK-600`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                DuSEqTF6q: {
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `22px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                      },
                                      children: `2万+    TT用户`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                      },
                                      children: `2万+    TT用户`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                              },
                              children: l(q, {
                                __framer__animate: { transition: Z },
                                __framer__animateOnce: !1,
                                __framer__enter: X,
                                __framer__exit: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: l(o, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy02MDA=`,
                                      "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                      "--framer-font-size": `29px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                    },
                                    children: `2万+    TT用户`,
                                  }),
                                }),
                                className: `framer-6rkhki`,
                                fonts: [`GF;Chiron Hei HK-600`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                DuSEqTF6q: {
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `22px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                      },
                                      children: `20万次    智能体使用次数`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                      },
                                      children: `20万次    智能体使用次数`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                              },
                              children: l(q, {
                                __framer__animate: { transition: Z },
                                __framer__animateOnce: !1,
                                __framer__enter: X,
                                __framer__exit: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: l(o, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy02MDA=`,
                                      "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                      "--framer-font-size": `29px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                    },
                                    children: `20万次    智能体使用次数`,
                                  }),
                                }),
                                className: `framer-1ricyzd`,
                                fonts: [`GF;Chiron Hei HK-600`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                DuSEqTF6q: {
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `22px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                      },
                                      children: `11000+    已积累灵感`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                      },
                                      children: `11000+    已积累灵感`,
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                              },
                              children: l(q, {
                                __framer__animate: { transition: Z },
                                __framer__animateOnce: !1,
                                __framer__enter: X,
                                __framer__exit: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: l(o, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy02MDA=`,
                                      "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                      "--framer-font-size": `29px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `rgba(79, 84, 94, 0.9)`,
                                    },
                                    children: `11000+    已积累灵感`,
                                  }),
                                }),
                                className: `framer-1hgnqs0`,
                                fonts: [`GF;Chiron Hei HK-600`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    R() &&
                      f(h.div, {
                        className: `framer-132xrac hidden-qtrbr4`,
                        "data-framer-name": `专家目录`,
                        layout: L,
                        children: [
                          l(E, {
                            breakpoint: A,
                            overrides: {
                              DuSEqTF6q: {
                                children: l(o, {
                                  children: l(`h3`, {
                                    className: `framer-styles-preset-8c9qou`,
                                    "data-styles-preset": `HZnCw3DJu`,
                                    dir: `auto`,
                                    style: { "--framer-text-color": `rgb(17, 19, 24)` },
                                    children: `寻找适合的专家视角`,
                                  }),
                                }),
                              },
                            },
                            children: l(O, {
                              __fromCanvasComponent: !0,
                              children: l(o, {
                                children: l(`h2`, {
                                  className: `framer-styles-preset-b7h9xy`,
                                  "data-styles-preset": `KDFXH9noS`,
                                  dir: `auto`,
                                  style: { "--framer-text-color": `rgb(17, 19, 24)` },
                                  children: `寻找适合的专家视角`,
                                }),
                              }),
                              className: `framer-1lfc7de`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          f(`div`, {
                            className: `framer-15ukuy0`,
                            "data-border": !0,
                            "data-framer-name": `搜索专家`,
                            children: [
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  DuSEqTF6q: {
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.937 15.937" overflow="visible"><path d="M 1.291 10.639 C 1.797 11.36 2.449 11.966 3.205 12.417 C 3.95 12.886 4.786 13.192 5.658 13.316 C 7.055 13.554 8.415 13.336 9.74 12.661 L 9.143 11.489 C 8.391 11.884 7.554 12.09 6.705 12.09 L 6.705 12.075 C 6.424 12.075 6.142 12.055 5.864 12.015 C 5.587 11.967 5.313 11.899 5.046 11.812 C 4.644 11.683 4.257 11.509 3.893 11.294 C 3.299 10.915 2.778 10.431 2.356 9.866 C 2.193 9.635 2.048 9.394 1.921 9.142 C 1.727 8.767 1.576 8.37 1.471 7.961 C 1.379 7.549 1.333 7.128 1.335 6.705 C 1.335 6.416 1.355 6.135 1.395 5.864 C 1.442 5.586 1.51 5.313 1.598 5.046 C 1.733 4.63 1.905 4.246 2.117 3.893 C 2.495 3.298 2.979 2.777 3.545 2.356 C 3.769 2.197 4.01 2.051 4.268 1.921 C 4.643 1.727 5.039 1.576 5.448 1.471 C 5.861 1.379 6.282 1.333 6.705 1.335 C 6.993 1.335 7.274 1.355 7.546 1.394 C 7.816 1.441 8.089 1.508 8.364 1.598 C 8.781 1.733 9.164 1.905 9.517 2.117 C 10.112 2.496 10.633 2.979 11.055 3.545 C 11.217 3.775 11.363 4.017 11.49 4.268 L 11.503 4.26 C 11.889 5.016 12.085 5.855 12.075 6.704 C 12.083 7.793 11.752 8.858 11.127 9.751 L 10.993 9.945 C 10.686 10.383 10.533 10.723 10.534 10.967 C 10.536 11.219 10.627 11.463 10.808 11.7 C 10.886 11.803 11.043 11.972 11.277 12.206 L 15.007 15.937 L 15.937 15.006 L 12.207 11.277 C 12.1 11.172 11.996 11.065 11.895 10.954 C 11.934 10.895 11.992 10.81 12.07 10.7 L 12.21 10.498 C 12.988 9.387 13.4 8.061 13.39 6.705 C 13.39 5.218 12.966 3.906 12.119 2.771 C 11.614 2.05 10.962 1.444 10.207 0.992 C 9.461 0.524 8.625 0.217 7.753 0.094 C 6.886 -0.058 5.996 -0.025 5.143 0.19 C 4.284 0.386 3.476 0.761 2.772 1.29 C 2.051 1.796 1.444 2.449 0.992 3.205 C 0.524 3.95 0.218 4.786 0.094 5.657 C -0.058 6.525 -0.025 7.415 0.19 8.269 C 0.386 9.128 0.761 9.935 1.291 10.639 Z" fill="rgba(0,0,0,0.8)" opacity="0.65"></path></svg>`,
                                  },
                                },
                                children: l(D, {
                                  className: `framer-191yskt`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.36 20.359" overflow="visible"><path d="M 1.649 13.592 C 2.295 14.512 3.129 15.286 4.094 15.863 C 5.047 16.461 6.114 16.853 7.228 17.011 C 9.013 17.316 10.75 17.037 12.443 16.175 L 11.68 14.677 C 10.719 15.182 9.651 15.445 8.566 15.445 L 8.566 15.426 C 8.206 15.426 7.847 15.4 7.491 15.349 C 7.137 15.288 6.788 15.201 6.446 15.09 C 5.932 14.925 5.438 14.703 4.974 14.428 C 4.214 13.943 3.548 13.325 3.009 12.603 C 2.802 12.309 2.616 12.001 2.454 11.679 C 2.206 11.2 2.014 10.693 1.88 10.17 C 1.762 9.644 1.703 9.105 1.706 8.566 C 1.706 8.196 1.731 7.838 1.782 7.491 C 1.842 7.137 1.929 6.787 2.042 6.446 C 2.214 5.914 2.434 5.424 2.704 4.973 C 3.188 4.213 3.806 3.548 4.528 3.009 C 4.815 2.806 5.123 2.62 5.452 2.453 C 5.932 2.206 6.438 2.014 6.96 1.879 C 7.487 1.761 8.026 1.703 8.566 1.706 C 8.934 1.706 9.293 1.731 9.64 1.781 C 9.986 1.84 10.334 1.927 10.686 2.042 C 11.218 2.214 11.708 2.434 12.158 2.704 C 12.918 3.188 13.584 3.806 14.123 4.528 C 14.33 4.822 14.516 5.131 14.678 5.452 L 14.695 5.442 C 15.188 6.409 15.439 7.48 15.426 8.564 C 15.436 9.956 15.013 11.316 14.215 12.456 L 14.044 12.704 C 13.651 13.264 13.456 13.698 13.458 14.01 C 13.46 14.332 13.577 14.645 13.808 14.947 C 13.907 15.079 14.107 15.294 14.407 15.594 L 19.171 20.359 L 20.36 19.171 L 15.594 14.407 C 15.458 14.273 15.325 14.135 15.196 13.994 C 15.245 13.918 15.32 13.81 15.419 13.669 L 15.598 13.411 C 16.592 11.992 17.119 10.298 17.106 8.566 C 17.106 6.666 16.564 4.99 15.482 3.54 C 14.836 2.619 14.004 1.845 13.039 1.268 C 12.087 0.669 11.018 0.278 9.904 0.12 C 8.797 -0.074 7.66 -0.032 6.57 0.243 C 5.473 0.493 4.441 0.972 3.541 1.648 C 2.62 2.295 1.845 3.128 1.268 4.094 C 0.669 5.046 0.278 6.114 0.12 7.227 C -0.074 8.336 -0.032 9.473 0.243 10.564 C 0.494 11.661 0.973 12.692 1.649 13.592 Z" fill="rgba(0,0,0,0.8)" opacity="0.65"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  DuSEqTF6q: {
                                    children: l(o, {
                                      children: l(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                          "--framer-font-size": `14px`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-line-height": `1.75em`,
                                          "--framer-text-color": `rgb(89, 98, 116)`,
                                        },
                                        children: `搜索专家`,
                                      }),
                                    }),
                                    fonts: [`GF;Noto Sans SC-regular`],
                                  },
                                },
                                children: l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-1r99xuj`,
                                      "data-styles-preset": `UaBF4aKC9`,
                                      dir: `auto`,
                                      children: `搜索专家`,
                                    }),
                                  }),
                                  className: `framer-1i605o6`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          l(E, {
                            breakpoint: A,
                            overrides: {
                              DuSEqTF6q: {
                                children: l(o, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTUwMA==`,
                                      "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-color": `rgb(52, 95, 204)`,
                                    },
                                    children: `全部　工业设计　设计教育　设计理论　社会创新　环境空间　城市区域　智能计算　跨域前沿　视觉传达　战略管理　交互体验　服务系统　数字媒体`,
                                  }),
                                }),
                              },
                            },
                            children: l(O, {
                              __fromCanvasComponent: !0,
                              children: l(o, {
                                children: l(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTUwMA==`,
                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `2.2em`,
                                    "--framer-text-color": `rgb(52, 95, 204)`,
                                  },
                                  children: `全部　工业设计　设计教育　设计理论　社会创新　环境空间　城市区域　智能计算　跨域前沿　视觉传达　战略管理　交互体验　服务系统　数字媒体`,
                                }),
                              }),
                              className: `framer-dld2se`,
                              fonts: [`GF;Noto Sans SC-500`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          l(K, {
                            __framer__spring: {
                              bounce: 0,
                              damping: 60,
                              delay: 0,
                              duration: 0.7,
                              durationBasedSpring: !0,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stagger: 0,
                              stiffness: 500,
                              type: `spring`,
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 80,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: `onInView`,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1igwvjo`,
                            children: l(I, {
                              children: l(M, {
                                className: `framer-pg9wrm-container`,
                                draggable: `false`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `oqtBEBWOW`,
                                scopeId: `augiA20Il`,
                                children: l(V, {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: `100%`,
                                  id: `oqtBEBWOW`,
                                  isMixedBorderRadius: !1,
                                  layoutId: `oqtBEBWOW`,
                                  loop: !0,
                                  muted: !0,
                                  objectFit: `cover`,
                                  playing: !0,
                                  posterEnabled: !0,
                                  srcFile: `../../assets/misc/xtMUisErR1jBuWcUyXvzjBYaY.mp4`,
                                  srcType: `Upload`,
                                  srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                  startTime: 0,
                                  style: { height: `100%`, width: `100%` },
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  volume: 25,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    f(h.div, {
                      className: `framer-161vx0c`,
                      "data-framer-name": `生态`,
                      id: ye,
                      layout: L,
                      ref: be,
                      children: [
                        f(K, {
                          __framer__spring: {
                            bounce: 0,
                            damping: 60,
                            delay: 0,
                            duration: 0.7,
                            durationBasedSpring: !0,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `spring`,
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 0,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 80,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onInView`,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-r58ck0`,
                          "data-framer-name": `标题`,
                          children: [
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                DuSEqTF6q: {
                                  children: f(o, {
                                    children: [
                                      l(`h3`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                          "--framer-font-size": `32px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-2px`,
                                          "--framer-line-height": `1.75em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-aa7a1bf8-0e2c-4033-9eab-2a389d66541f)`,
                                        },
                                        children: `TT DesignBuddy`,
                                      }),
                                      l(`h3`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                          "--framer-font-size": `32px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-2px`,
                                          "--framer-line-height": `1.75em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-aa7a1bf8-0e2c-4033-9eab-2a389d66541f)`,
                                        },
                                        children: `连接设计、AI智能体与创新实践`,
                                      }),
                                    ],
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: f(`h3`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-size": `30px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-letter-spacing": `-1px`,
                                        "--framer-line-height": `1.45em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-5d3606c5-887a-4dbf-b0e7-9a69c0633a45, rgb(49, 108, 255))`,
                                      },
                                      children: [
                                        `TT DesignBuddy`,
                                        l(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-aa7a1bf8-0e2c-4033-9eab-2a389d66541f)`,
                                          },
                                          children: l(`br`, {}),
                                        }),
                                        `连接设计、AI智能体与`,
                                        l(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-aa7a1bf8-0e2c-4033-9eab-2a389d66541f)`,
                                          },
                                          children: l(`br`, {}),
                                        }),
                                        `创新实践`,
                                      ],
                                    }),
                                  }),
                                  fonts: [`GF;Noto Sans SC-600`],
                                },
                              },
                              children: l(O, {
                                __fromCanvasComponent: !0,
                                children: f(o, {
                                  children: [
                                    l(`h2`, {
                                      className: `framer-styles-preset-b7h9xy`,
                                      "data-styles-preset": `KDFXH9noS`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `TT DesignBuddy`,
                                    }),
                                    l(`h2`, {
                                      className: `framer-styles-preset-b7h9xy`,
                                      "data-styles-preset": `KDFXH9noS`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `连接设计、AI智能体与创新实践`,
                                    }),
                                  ],
                                }),
                                className: `framer-1nfmzpf`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(E, {
                              breakpoint: A,
                              overrides: {
                                TyN2kHuje: {
                                  children: l(o, {
                                    children: l(`h6`, {
                                      className: `framer-styles-preset-126x0z5`,
                                      "data-styles-preset": `oLvlw9E05`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `探索TT智能体社区的设计技能，让设计产出拥有无限可能。`,
                                    }),
                                  }),
                                  fonts: [`Inter`],
                                },
                              },
                              children: l(O, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Q2hpcm9uIEhlaSBISy1yZWd1bGFy`,
                                      "--framer-font-family": `"Chiron Hei HK", "Chiron Hei HK Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-line-height": `1.75em`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `#596274`,
                                    },
                                    children: `探索TT智能体社区的设计技能，让设计产出拥有无限可能。`,
                                  }),
                                }),
                                className: `framer-hmqnx0`,
                                fonts: [`GF;Chiron Hei HK-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        l(E, {
                          breakpoint: A,
                          overrides: {
                            DuSEqTF6q: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: C((p?.y || 0) + 0 + 5955.8 + 48 + 355.5),
                                pixelHeight: 5412,
                                pixelWidth: 6144,
                                sizes: `calc((${p?.width || `100vw`} - 64px) * 0.8)`,
                                src: `../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-c450b3.png`,
                                srcSet: `../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-ca68fb.png 512w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I.png 1024w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-6fd3c9.png 2048w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-90a8e3.png 4096w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-c450b3.png 6144w`,
                              },
                            },
                            TyN2kHuje: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: C((p?.y || 0) + 0 + 6019.5 + 48 + 80.35),
                                pixelHeight: 5412,
                                pixelWidth: 6144,
                                sizes: `calc(${p?.width || `100vw`} - 48px)`,
                                src: `../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-c450b3.png`,
                                srcSet: `../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-ca68fb.png 512w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I.png 1024w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-6fd3c9.png 2048w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-90a8e3.png 4096w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-c450b3.png 6144w`,
                              },
                            },
                          },
                          children: l(F, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              pixelHeight: 5412,
                              pixelWidth: 6144,
                              sizes: `822.4px`,
                              src: `../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-c450b3.png`,
                              srcSet: `../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-ca68fb.png 512w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I.png 1024w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-6fd3c9.png 2048w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-90a8e3.png 4096w,../../assets/images/O1BC6qlbhxngZgqIqdVbauiu6I-c450b3.png 6144w`,
                            },
                            className: `framer-1754g1q`,
                          }),
                        }),
                      ],
                    }),
                    f(h.div, {
                      className: `framer-ci4jnh`,
                      "data-framer-name": `流动彩色`,
                      layout: L,
                      children: [
                        l(E, {
                          breakpoint: A,
                          overrides: {
                            TyN2kHuje: {
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 40,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                            },
                          },
                          children: f(K, {
                            __framer__spring: {
                              bounce: 0,
                              damping: 60,
                              delay: 0,
                              duration: 0.7,
                              durationBasedSpring: !0,
                              ease: [0.44, 0, 0.56, 1],
                              mass: 1,
                              stagger: 0,
                              stiffness: 500,
                              type: `spring`,
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 80,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: `onInView`,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-13ymid3`,
                            "data-framer-name": `文字`,
                            children: [
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  DuSEqTF6q: {
                                    children: l(o, {
                                      children: l(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTcwMA==`,
                                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                          "--framer-font-size": `32px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-letter-spacing": `-1px`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: `让设计教育与创新实践，拥有持续生长的智能支持`,
                                      }),
                                    }),
                                  },
                                  TyN2kHuje: {
                                    children: l(o, {
                                      children: l(`h3`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                          "--framer-font-size": `30px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-0.5px`,
                                          "--framer-line-height": `1.25em`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: `让设计教育与创新实践，拥有持续生长的智能支持`,
                                      }),
                                    }),
                                    fonts: [`GF;Noto Sans SC-600`],
                                  },
                                },
                                children: l(O, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTcwMA==`,
                                        "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                        "--framer-font-size": `46px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-letter-spacing": `-1px`,
                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                      },
                                      children: `让设计教育与创新实践，拥有持续生长的智能支持`,
                                    }),
                                  }),
                                  className: `framer-ugrbog`,
                                  fonts: [`GF;Noto Sans SC-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  TyN2kHuje: {
                                    columnMasonryLayoutEnabled: !0,
                                    parentIsDataRepeater: !1,
                                    rowGap: 0,
                                    trackCount: 1,
                                  },
                                },
                                children: f(pt, {
                                  className: `framer-1cfk3ae`,
                                  "data-framer-name": `能力模块`,
                                  children: [
                                    f(`div`, {
                                      className: `framer-18qhzj5`,
                                      "data-framer-name": `专家Agent伴学`,
                                      children: [
                                        l(E, {
                                          breakpoint: A,
                                          overrides: {
                                            DuSEqTF6q: {
                                              children: l(o, {
                                                children: l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                    "--framer-font-size": `20px`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-line-height": `1.35em`,
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `学科专家分身，24小时在线`,
                                                }),
                                              }),
                                            },
                                            TyN2kHuje: {
                                              children: l(o, {
                                                children: l(`h4`, {
                                                  className: `framer-styles-preset-167nrvd`,
                                                  "data-styles-preset": `Ryti7BoZ0`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `学科专家分身，24小时在线`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                          },
                                          children: l(O, {
                                            __fromCanvasComponent: !0,
                                            children: l(o, {
                                              children: l(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                  "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                  "--framer-font-size": `26px`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-line-height": `1.35em`,
                                                  "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                },
                                                children: `学科专家分身，24小时在线`,
                                              }),
                                            }),
                                            className: `framer-oiwbs3`,
                                            fonts: [`GF;Noto Sans SC-600`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(E, {
                                          breakpoint: A,
                                          overrides: {
                                            DuSEqTF6q: {
                                              children: l(o, {
                                                children: l(`h6`, {
                                                  className: `framer-styles-preset-126x0z5`,
                                                  "data-styles-preset": `oLvlw9E05`,
                                                  dir: `auto`,
                                                  children: `基于专家研究方向、学术成果与设计经验构建专业智能体，为不同阶段的学习者提供持续、具有学科依据的反馈。`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                            TyN2kHuje: {
                                              children: l(o, {
                                                children: l(`h6`, {
                                                  className: `framer-styles-preset-126x0z5`,
                                                  "data-styles-preset": `oLvlw9E05`,
                                                  dir: `auto`,
                                                  children: `基于专家研究方向、学术成果与设计经验构建专业智能体，为不同阶段的学习者提供持续、具有学科依据的反馈。`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                          },
                                          children: l(O, {
                                            __fromCanvasComponent: !0,
                                            children: l(o, {
                                              children: l(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                  "--framer-line-height": `1.7em`,
                                                  "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                },
                                                children: `基于专家研究方向、学术成果与设计经验构建专业智能体，为不同阶段的学习者提供持续、具有学科依据的反馈。`,
                                              }),
                                            }),
                                            className: `framer-f82zrg`,
                                            fonts: [`GF;Noto Sans SC-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    f(`div`, {
                                      className: `framer-98tknn`,
                                      "data-framer-name": `学科经典脚手架`,
                                      children: [
                                        l(E, {
                                          breakpoint: A,
                                          overrides: {
                                            DuSEqTF6q: {
                                              children: l(o, {
                                                children: l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                    "--framer-font-size": `20px`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-line-height": `1.35em`,
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `把经典设计方法，转化为思考的工具`,
                                                }),
                                              }),
                                            },
                                            TyN2kHuje: {
                                              children: l(o, {
                                                children: l(`h4`, {
                                                  className: `framer-styles-preset-167nrvd`,
                                                  "data-styles-preset": `Ryti7BoZ0`,
                                                  dir: `auto`,
                                                  children: `把经典设计方法，转化为思考工具`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                          },
                                          children: l(O, {
                                            __fromCanvasComponent: !0,
                                            children: l(o, {
                                              children: l(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                  "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                  "--framer-font-size": `26px`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-line-height": `1.35em`,
                                                  "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                },
                                                children: `把经典设计方法，转化为思考的工具`,
                                              }),
                                            }),
                                            className: `framer-1c0rcef`,
                                            fonts: [`GF;Noto Sans SC-600`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(E, {
                                          breakpoint: A,
                                          overrides: {
                                            DuSEqTF6q: {
                                              children: l(o, {
                                                children: l(`h6`, {
                                                  className: `framer-styles-preset-126x0z5`,
                                                  "data-styles-preset": `oLvlw9E05`,
                                                  dir: `auto`,
                                                  children: `融入双钻模型、设计思维、用户研究、系统设计等经典理论，帮助使用者理解问题、组织过程并形成清晰的设计判断。`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                            TyN2kHuje: {
                                              children: l(o, {
                                                children: l(`h6`, {
                                                  className: `framer-styles-preset-126x0z5`,
                                                  "data-styles-preset": `oLvlw9E05`,
                                                  dir: `auto`,
                                                  children: `融入双钻模型、设计思维、用户研究、系统设计等经典理论，帮助使用者理解问题、组织过程并形成清晰的设计判断。`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                          },
                                          children: l(O, {
                                            __fromCanvasComponent: !0,
                                            children: l(o, {
                                              children: l(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                  "--framer-line-height": `1.7em`,
                                                  "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                },
                                                children: `融入双钻模型、设计思维、用户研究、系统设计等经典理论，帮助使用者理解问题、组织过程并形成清晰的设计判断。`,
                                              }),
                                            }),
                                            className: `framer-13b3czy`,
                                            fonts: [`GF;Noto Sans SC-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(O, {
                                          __fromCanvasComponent: !0,
                                          children: l(o, {
                                            children: l(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                "--framer-font-size": `15px`,
                                                "--framer-font-weight": `600`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `rgb(52, 95, 204)`,
                                              },
                                              children: `发现问题  →  定义问题  →  发展方案  →  交付验证`,
                                            }),
                                          }),
                                          className: `framer-r0xgsg`,
                                          fonts: [`GF;Noto Sans SC-600`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    f(`div`, {
                                      className: `framer-7dzp1r`,
                                      "data-framer-name": `设计垂域技能`,
                                      children: [
                                        l(E, {
                                          breakpoint: A,
                                          overrides: {
                                            DuSEqTF6q: {
                                              children: l(o, {
                                                children: l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                    "--framer-font-size": `20px`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-line-height": `1.35em`,
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `创意技能沉淀，持续启发创作`,
                                                }),
                                              }),
                                            },
                                            TyN2kHuje: {
                                              children: l(o, {
                                                children: l(`h4`, {
                                                  className: `framer-styles-preset-167nrvd`,
                                                  "data-styles-preset": `Ryti7BoZ0`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `创意技能沉淀，持续启发创作`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                          },
                                          children: l(O, {
                                            __fromCanvasComponent: !0,
                                            children: l(o, {
                                              children: l(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                  "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                  "--framer-font-size": `26px`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-line-height": `1.35em`,
                                                  "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                },
                                                children: `创意技能沉淀，持续启发创作`,
                                              }),
                                            }),
                                            className: `framer-87gl26`,
                                            fonts: [`GF;Noto Sans SC-600`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(E, {
                                          breakpoint: A,
                                          overrides: {
                                            DuSEqTF6q: {
                                              children: l(o, {
                                                children: l(`h6`, {
                                                  className: `framer-styles-preset-126x0z5`,
                                                  "data-styles-preset": `oLvlw9E05`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `将设计调研、视觉叙事、概念落地、方案评估等设计能力封装为可直接调用的技能。`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                            TyN2kHuje: {
                                              children: f(o, {
                                                children: [
                                                  l(`h6`, {
                                                    className: `framer-styles-preset-126x0z5`,
                                                    "data-styles-preset": `oLvlw9E05`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                    },
                                                    children: `将设计调研、视觉叙事、概念落地、方案评估等`,
                                                  }),
                                                  l(`h6`, {
                                                    className: `framer-styles-preset-126x0z5`,
                                                    "data-styles-preset": `oLvlw9E05`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                    },
                                                    children: `设计能力封装为可直接调用的技能。`,
                                                  }),
                                                ],
                                              }),
                                              fonts: [`Inter`],
                                            },
                                          },
                                          children: l(O, {
                                            __fromCanvasComponent: !0,
                                            children: f(o, {
                                              children: [
                                                l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.7em`,
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `将设计调研、视觉叙事、概念落地、方案评估`,
                                                }),
                                                l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.7em`,
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `等设计能力封装为可直接调用的技能。`,
                                                }),
                                              ],
                                            }),
                                            className: `framer-1vsr1kp`,
                                            fonts: [`GF;Noto Sans SC-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(O, {
                                          __fromCanvasComponent: !0,
                                          children: l(o, {
                                            children: l(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-font-weight": `600`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `rgb(52, 95, 204)`,
                                              },
                                              children: `灵感发散 ·  设计趋势解析 · 概念草图提示 · 服务蓝图 · 设计批评`,
                                            }),
                                          }),
                                          className: `framer-1l12sp0`,
                                          fonts: [`GF;Noto Sans SC-600`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    f(`div`, {
                                      className: `framer-gu65wy`,
                                      "data-framer-name": `设计工具生态`,
                                      children: [
                                        l(E, {
                                          breakpoint: A,
                                          overrides: {
                                            DuSEqTF6q: {
                                              children: l(o, {
                                                children: l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                    "--framer-font-size": `20px`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-line-height": `1.35em`,
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `让设计灵感，逐步成为真实产品`,
                                                }),
                                              }),
                                            },
                                            TyN2kHuje: {
                                              children: l(o, {
                                                children: l(`h4`, {
                                                  className: `framer-styles-preset-167nrvd`,
                                                  "data-styles-preset": `Ryti7BoZ0`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `让设计灵感，逐步成为真实产品`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                          },
                                          children: l(O, {
                                            __fromCanvasComponent: !0,
                                            children: l(o, {
                                              children: l(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                  "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                  "--framer-font-size": `26px`,
                                                  "--framer-font-weight": `600`,
                                                  "--framer-line-height": `1.35em`,
                                                  "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                },
                                                children: `让设计灵感，逐步成为真实产品`,
                                              }),
                                            }),
                                            className: `framer-gs2k3f`,
                                            fonts: [`GF;Noto Sans SC-600`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(E, {
                                          breakpoint: A,
                                          overrides: {
                                            DuSEqTF6q: {
                                              children: l(o, {
                                                children: l(`h6`, {
                                                  className: `framer-styles-preset-126x0z5`,
                                                  "data-styles-preset": `oLvlw9E05`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `使用AI将文字、图像与研究资料转化为设计概念，连接更多专业工具和创作流程。`,
                                                }),
                                              }),
                                              fonts: [`Inter`],
                                            },
                                            TyN2kHuje: {
                                              children: f(o, {
                                                children: [
                                                  l(`h6`, {
                                                    className: `framer-styles-preset-126x0z5`,
                                                    "data-styles-preset": `oLvlw9E05`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                    },
                                                    children: `使用AI将文字、图像与研究资料转化为设计概念，`,
                                                  }),
                                                  l(`h6`, {
                                                    className: `framer-styles-preset-126x0z5`,
                                                    "data-styles-preset": `oLvlw9E05`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                    },
                                                    children: `连接更多专业工具和创作流程。`,
                                                  }),
                                                ],
                                              }),
                                              fonts: [`Inter`],
                                            },
                                          },
                                          children: l(O, {
                                            __fromCanvasComponent: !0,
                                            children: f(o, {
                                              children: [
                                                l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.7em`,
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `使用AI将文字、图像与研究资料转化为设计概念，`,
                                                }),
                                                l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.7em`,
                                                    "--framer-text-color": `var(--token-28e3cdc0-07c2-4f31-a1f7-67fa4b75989c, rgb(79, 84, 94))`,
                                                  },
                                                  children: `连接更多专业工具和创作流程。`,
                                                }),
                                              ],
                                            }),
                                            className: `framer-1z94bw`,
                                            fonts: [`GF;Noto Sans SC-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(O, {
                                          __fromCanvasComponent: !0,
                                          children: l(o, {
                                            children: l(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7Tm90byBTYW5zIFNDLTYwMA==`,
                                                "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-font-weight": `600`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `rgb(52, 95, 204)`,
                                              },
                                              children: `TT设计智能体  →   方案整理  →  设计输出`,
                                            }),
                                          }),
                                          className: `framer-50sewc`,
                                          fonts: [`GF;Noto Sans SC-600`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        l(I, {
                          children: l(M, {
                            className: `framer-asp763-container`,
                            isAuthoredByUser: !0,
                            nodeId: `bW3Niu5Wg`,
                            scopeId: `augiA20Il`,
                            children: l(fe, {
                              blur: 36,
                              color1: `var(--token-52e78e7a-6a1d-4d6c-b8f0-e4745725017a, rgb(188, 218, 255))`,
                              color2: `rgb(188, 218, 255)`,
                              color3: `rgb(125, 155, 255)`,
                              color4: `rgb(0, 130, 252)`,
                              height: `100%`,
                              id: `bW3Niu5Wg`,
                              intensity: 1,
                              layoutId: `bW3Niu5Wg`,
                              movementRange: 0.5,
                              speed: 4,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                        l(`div`, {
                          className: `framer-uuuji6`,
                          "data-border": !0,
                          "data-framer-name": `footer`,
                          children: f(`div`, {
                            className: `framer-123wu7h`,
                            children: [
                              l(O, {
                                __fromCanvasComponent: !0,
                                children: l(o, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                      "--framer-font-size": `14px`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-line-height": `1.75em`,
                                      "--framer-text-color": `rgba(79, 84, 94, 0.8)`,
                                    },
                                    children: `版权 © 上海意义创造科技有限公司 版权所有`,
                                  }),
                                }),
                                className: `framer-1rf21ya`,
                                fonts: [`GF;Noto Sans SC-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(E, {
                                breakpoint: A,
                                overrides: {
                                  TyN2kHuje: {
                                    children: f(o, {
                                      children: [
                                        l(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                            "--framer-font-size": `14px`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.75em`,
                                            "--framer-text-color": `rgba(79, 84, 94, 0.8)`,
                                          },
                                          children: `备案号： 沪ICP备2026046307号`,
                                        }),
                                        l(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                            "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                            "--framer-font-size": `14px`,
                                            "--framer-letter-spacing": `-0.02em`,
                                            "--framer-line-height": `1.75em`,
                                            "--framer-text-color": `rgba(79, 84, 94, 0.8)`,
                                          },
                                          children: `上海市杨浦区四平路1024弄1幢1层`,
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: l(O, {
                                  __fromCanvasComponent: !0,
                                  children: f(o, {
                                    children: [
                                      l(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                          "--framer-font-size": `14px`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-line-height": `1.75em`,
                                          "--framer-text-alignment": `end`,
                                          "--framer-text-color": `rgba(79, 84, 94, 0.8)`,
                                        },
                                        children: `备案号： 沪ICP备2026046307号`,
                                      }),
                                      l(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7Tm90byBTYW5zIFNDLXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Noto Sans SC", "Noto Sans SC Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`,
                                          "--framer-font-size": `14px`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-line-height": `1.75em`,
                                          "--framer-text-alignment": `end`,
                                          "--framer-text-color": `rgba(79, 84, 94, 0.8)`,
                                        },
                                        children: `上海市杨浦区四平路1024弄1幢1层`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-uyg7fl`,
                                  fonts: [`GF;Noto Sans SC-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-OPdDt.framer-lux5qc, .framer-OPdDt .framer-lux5qc { display: block; }`,
        `.framer-OPdDt.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-OPdDt .framer-jdv0u8 { --border-bottom-width: 1px; --border-color: #e7ebf3; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1600px; overflow: visible; padding: 18px 66px 18px 66px; position: sticky; top: 0px; width: 100%; z-index: 5; }`,
        `.framer-OPdDt .framer-kruif5, .framer-OPdDt .framer-19jgink { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 30px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-OPdDt .framer-83tldw { aspect-ratio: 1.4938271604938274 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 44px; }`,
        `.framer-OPdDt .framer-h1kjnp { height: 26px; position: relative; width: 122px; }`,
        `.framer-OPdDt .framer-18lhh23, .framer-OPdDt .framer-o09j0f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-OPdDt .framer-q53ii7-container, .framer-OPdDt .framer-mi18xn-container, .framer-OPdDt .framer-zcriy7-container, .framer-OPdDt .framer-139002y-container, .framer-OPdDt .framer-18esnft-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-OPdDt .framer-19nmnbx { --border-bottom-width: 1px; --border-color: #e7ebf3; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1600px; overflow: visible; padding: 16px 24px 16px 24px; position: sticky; top: 0px; width: 100%; z-index: 5; }`,
        `.framer-OPdDt .framer-1hbp1v8 { aspect-ratio: 1.4938271604938274 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 36px; }`,
        `.framer-OPdDt .framer-f8hi2i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: min-content; z-index: 1; }`,
        `.framer-OPdDt .framer-dy23az, .framer-OPdDt .framer-121mxdv, .framer-OPdDt .framer-tigxu7, .framer-OPdDt .framer-z5mtlu, .framer-OPdDt .framer-11nqg3o, .framer-OPdDt .framer-xchh6y, .framer-OPdDt .framer-2qbup1, .framer-OPdDt .framer-16xy70, .framer-OPdDt .framer-18cq7b9, .framer-OPdDt .framer-1g79z9x, .framer-OPdDt .framer-1wxh25v, .framer-OPdDt .framer-9n95jd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-OPdDt .framer-n14xv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px 240px; height: min-content; justify-content: center; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); padding: 112px 86px 112px 86px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-1rdtfje { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 5px; position: relative; width: 51%; }`,
        `.framer-OPdDt .framer-v8c5i1 { --border-bottom-width: 1px; --border-color: var(--token-52e78e7a-6a1d-4d6c-b8f0-e4745725017a, #bcdaff); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 16px 20px 16px 20px; position: relative; width: min-content; }`,
        `.framer-OPdDt .framer-1j54c8u { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 93%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OPdDt .framer-1np1sll-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 245px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-OPdDt .framer-1hmwf53 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 112px 86px 112px 86px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-173t050 { flex: none; height: 183px; overflow: visible; position: relative; width: 439px; }`,
        `.framer-OPdDt .framer-14tzy2h-container { flex: none; height: auto; left: 20px; position: absolute; top: 12px; width: 400px; }`,
        `.framer-OPdDt .framer-1evueyl, .framer-OPdDt .framer-at51j0 { height: 183px; left: 0px; position: absolute; top: 0px; width: 439px; }`,
        `.framer-OPdDt .framer-17dat92 { height: 23px; left: 359px; position: absolute; top: 143px; width: 23px; }`,
        `.framer-OPdDt .framer-8v1n5h { height: 23px; left: 0px; position: absolute; top: 0px; width: 23px; }`,
        `.framer-OPdDt .framer-75mm49 { height: 8px; left: 9px; position: absolute; top: 14px; width: 12px; }`,
        `.framer-OPdDt .framer-uyr2hn { height: 19px; left: 2px; position: absolute; top: 2px; width: 19px; }`,
        `.framer-OPdDt .framer-k5papq { height: 8px; left: 4px; position: absolute; top: 4px; width: 8px; }`,
        `.framer-OPdDt .framer-c8bl85 { height: 3px; left: 6px; position: absolute; top: 6px; width: 3px; }`,
        `.framer-OPdDt .framer-ubjbj0 { height: 30px; left: 396px; position: absolute; top: 140px; width: 30px; }`,
        `.framer-OPdDt .framer-16cladc { height: 13px; left: 405px; position: absolute; top: 148px; width: 13px; }`,
        `.framer-OPdDt .framer-1bi2bqh { height: 1px; left: 1px; position: absolute; top: 126px; width: 438px; }`,
        `.framer-OPdDt .framer-1tix18q { aspect-ratio: 5.876923076923077 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 435px; }`,
        `.framer-OPdDt .framer-16a3qv7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 112px 86px 112px 86px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-7gqbi7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-OPdDt .framer-l1zhld { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 698.01px; position: relative; width: 343px; }`,
        `.framer-OPdDt .framer-1nbsnmo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 26px; height: 418px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-OPdDt .framer-60x0gq { align-content: center; align-items: center; border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; box-shadow: 0px 1px 12px 0px var(--token-76d53313-6f6f-48a7-b86f-3423a37a1c1a, #dde3f0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 430px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 18px; position: relative; width: 315px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-OPdDt .framer-3x98ul { aspect-ratio: 1.072632944228275 / 1; flex: none; gap: 10px; height: auto; overflow: visible; position: relative; width: 297px; }`,
        `.framer-OPdDt .framer-10vbvf8, .framer-OPdDt .framer-1woq6rd, .framer-OPdDt .framer-cxgz0, .framer-OPdDt .framer-13hs1gn, .framer-OPdDt .framer-1knu6y6, .framer-OPdDt .framer-1lfc7de, .framer-OPdDt .framer-dld2se, .framer-OPdDt .framer-1nfmzpf, .framer-OPdDt .framer-hmqnx0, .framer-OPdDt .framer-oiwbs3, .framer-OPdDt .framer-1c0rcef, .framer-OPdDt .framer-r0xgsg, .framer-OPdDt .framer-87gl26, .framer-OPdDt .framer-1l12sp0, .framer-OPdDt .framer-gs2k3f, .framer-OPdDt .framer-50sewc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OPdDt .framer-144yp9o { --border-bottom-width: 1px; --border-color: #e0e6f1; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; box-shadow: 0px 1px 12px 0px var(--token-76d53313-6f6f-48a7-b86f-3423a37a1c1a, #dde3f0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 430px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 18px; position: relative; width: 315px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-OPdDt .framer-e0ii { aspect-ratio: 1.072632944228275 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 297px; }`,
        `.framer-OPdDt .framer-s5hda4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 112px 86px 0px 86px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-nb5b7x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 140px; width: 35%; z-index: 1; }`,
        `.framer-OPdDt .framer-1ymlnh6 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 720px; position: relative; width: 90%; }`,
        `.framer-OPdDt .framer-1k6gx89 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 2px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 2px; }`,
        `.framer-OPdDt .framer-1evwy7c, .framer-OPdDt .framer-zucsts { background-color: #bbddff; flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-OPdDt .framer-2ps20u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 65%; z-index: 2; }`,
        `.framer-OPdDt .framer-lm2gm7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; scroll-margin-top: 400px; width: 100%; }`,
        `.framer-OPdDt .framer-1up8hre, .framer-OPdDt .framer-1hp8hed { align-content: center; align-items: center; background-color: var(--token-6f601572-d633-4673-8abc-8d567893607b, #e3ebff); border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-OPdDt .framer-ird427-container, .framer-OPdDt .framer-14i1qcm-container, .framer-OPdDt .framer-1eyt2si-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-158f7zj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; scroll-margin-top: 600px; width: 100%; }`,
        `.framer-OPdDt .framer-17uhjsl { align-content: center; align-items: center; background-color: var(--token-6f601572-d633-4673-8abc-8d567893607b, #e3ebff); border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-OPdDt .framer-12b4fv3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; scroll-margin-top: 600px; width: 100%; }`,
        `.framer-OPdDt .framer-qkl12h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-c0anax-container { bottom: 187px; flex: none; left: 220px; position: absolute; top: 104px; width: 54%; z-index: 0; }`,
        `.framer-OPdDt .framer-194u3w0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; max-width: 1440px; min-height: 420px; overflow: var(--overflow-clip-fallback, clip); padding: 224px 86px 72px 86px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-1kzrrk9 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 760px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-mmphhj { display: grid; flex: none; gap: 1px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: 300px; justify-content: center; max-width: 1440px; min-height: 180px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 86px 112px 86px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-1tion57 { -webkit-filter: hue-rotate(0deg) blur(0px); align-self: center; filter: hue-rotate(0deg) blur(0px); flex: none; grid-column: span 2; grid-row: span 2; height: auto; justify-self: center; position: relative; white-space: pre; width: fit-content; z-index: 2; }`,
        `.framer-OPdDt .framer-6rkhki, .framer-OPdDt .framer-1ricyzd, .framer-OPdDt .framer-1hgnqs0 { align-self: center; flex: none; grid-column: span 2; grid-row: span 2; height: auto; justify-self: center; position: relative; white-space: pre; width: fit-content; z-index: 2; }`,
        `.framer-OPdDt .framer-132xrac { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: 889px; justify-content: flex-start; max-width: 1440px; min-height: 420px; overflow: var(--overflow-clip-fallback, clip); padding: 112px 86px 112px 86px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-15ukuy0 { --border-bottom-width: 1px; --border-color: #dde3f0; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #f5f7fb; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 12px 18px 12px 18px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-191yskt { height: 21px; position: relative; width: 21px; }`,
        `.framer-OPdDt .framer-1i605o6 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OPdDt .framer-1igwvjo { align-content: center; align-items: center; background-color: rgba(227, 235, 255, 0.2); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: 472px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-OPdDt .framer-pg9wrm-container { aspect-ratio: 2.180275715800636 / 1; flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-OPdDt .framer-161vx0c { align-content: center; align-items: center; background: radial-gradient(50% 50% at 50% 50%, rgba(227, 235, 255, 0.85) 0%, rgb(255, 255, 255) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1251px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 112px 86px 112px 86px; position: relative; width: 1200px; }`,
        `.framer-OPdDt .framer-r58ck0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-1754g1q { align-content: center; align-items: center; aspect-ratio: 1.1352885525070955 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; padding: 20px; position: relative; width: 80%; }`,
        `.framer-OPdDt .framer-ci4jnh { align-content: flex-start; align-items: flex-start; border-top-left-radius: 60px; border-top-right-radius: 60px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 112px 86px 112px 86px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-OPdDt .framer-13ymid3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 38px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 112px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-OPdDt .framer-ugrbog, .framer-OPdDt .framer-1rf21ya { flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        `.framer-OPdDt .framer-1cfk3ae { display: grid; flex: none; gap: 22px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1028px; z-index: 2; }`,
        `.framer-OPdDt .framer-18qhzj5 { align-content: flex-start; align-items: flex-start; align-self: start; border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 218px; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-OPdDt .framer-f82zrg, .framer-OPdDt .framer-13b3czy, .framer-OPdDt .framer-1vsr1kp, .framer-OPdDt .framer-1z94bw { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OPdDt .framer-98tknn, .framer-OPdDt .framer-7dzp1r, .framer-OPdDt .framer-gu65wy { align-content: flex-start; align-items: flex-start; align-self: start; border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: 218px; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-OPdDt .framer-asp763-container { flex: none; height: 1161px; position: absolute; right: -100px; top: 30px; width: 1400px; z-index: 0; }`,
        `.framer-OPdDt .framer-uuuji6 { --border-bottom-width: 0px; --border-color: rgba(79, 84, 94, 0.8); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0.5px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-123wu7h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; }`,
        `.framer-OPdDt .framer-uyg7fl { --framer-text-wrap: balance; flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
        ...xe,
        ...tt,
        ...Ze,
        ...me,
        ...qe,
        ...Se,
        ...Ue,
        `.framer-OPdDt[data-border="true"]::after, .framer-OPdDt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 768px) and (max-width: 1199.98px) { .framer-OPdDt.framer-72rtr7 { width: 768px; } .framer-OPdDt .framer-n14xv { flex-direction: column; gap: 0px 0px; padding: 48px 24px 48px 24px; } .framer-OPdDt .framer-1rdtfje { order: 0; width: min-content; z-index: 1; } .framer-OPdDt .framer-1j54c8u { width: 349px; } .framer-OPdDt .framer-1hmwf53 { padding: 48px 24px 96px 24px; } .framer-OPdDt .framer-173t050 { aspect-ratio: 2.398907103825137 / 1; height: auto; width: 360px; } .framer-OPdDt .framer-1evueyl, .framer-OPdDt .framer-at51j0 { height: 150px; width: 360px; } .framer-OPdDt .framer-17dat92 { height: 19px; left: 295px; top: 117px; width: 19px; } .framer-OPdDt .framer-8v1n5h { height: 19px; top: 0px; width: 19px; } .framer-OPdDt .framer-75mm49 { height: 6px; left: 7px; top: 11px; width: 10px; } .framer-OPdDt .framer-uyr2hn { height: 16px; left: 2px; top: 2px; width: 16px; } .framer-OPdDt .framer-k5papq { height: 6px; left: 3px; top: 3px; width: 6px; } .framer-OPdDt .framer-c8bl85 { height: 3px; left: 5px; top: 5px; width: 3px; } .framer-OPdDt .framer-ubjbj0 { height: 25px; left: 325px; top: 115px; width: 25px; } .framer-OPdDt .framer-16cladc { height: 11px; left: 332px; top: 122px; width: 11px; } .framer-OPdDt .framer-1bi2bqh { left: 0px; top: 103px; width: 359px; } .framer-OPdDt .framer-1tix18q { width: 360px; } .framer-OPdDt .framer-16a3qv7 { flex-direction: column; flex-wrap: wrap; padding: 48px 32px 48px 32px; } .framer-OPdDt .framer-7gqbi7, .framer-OPdDt .framer-nb5b7x { gap: 16px; } .framer-OPdDt .framer-1nbsnmo { gap: unset; justify-content: space-between; width: 100%; } .framer-OPdDt .framer-s5hda4 { padding: 48px 32px 0px 32px; } .framer-OPdDt .framer-qkl12h { gap: 28px; } .framer-OPdDt .framer-c0anax-container { left: 170px; width: 61%; } .framer-OPdDt .framer-194u3w0 { gap: 24px; justify-content: center; min-height: 288.15px; padding: 96px 32px 96px 32px; } .framer-OPdDt .framer-mmphhj { gap: 1px 0px; height: min-content; min-height: 200px; padding: 48px 32px 48px 32px; } .framer-OPdDt .framer-132xrac { gap: 16px; height: min-content; padding: 48px 32px 48px 32px; } .framer-OPdDt .framer-15ukuy0 { gap: 12px; padding: 5px 18px 5px 18px; } .framer-OPdDt .framer-191yskt { height: 16px; width: 16px; } .framer-OPdDt .framer-1igwvjo { height: min-content; } .framer-OPdDt .framer-161vx0c { height: min-content; padding: 48px 32px 48px 32px; width: 100%; } .framer-OPdDt .framer-r58ck0 { gap: 16px; z-index: 1; } .framer-OPdDt .framer-ci4jnh { gap: 16px; padding: 48px 32px 48px 32px; } .framer-OPdDt .framer-13ymid3 { padding: 0px 0px 48px 0px; } .framer-OPdDt .framer-1cfk3ae { width: 100%; } .framer-OPdDt .framer-f82zrg, .framer-OPdDt .framer-1vsr1kp { --framer-text-wrap-override: balance; } .framer-OPdDt .framer-13b3czy, .framer-OPdDt .framer-1z94bw { --framer-text-wrap-override: none; }}`,
        `@media (max-width: 767.98px) { .framer-OPdDt.framer-72rtr7 { width: 390px; } .framer-OPdDt .framer-jdv0u8 { padding: 10px 24px 10px 24px; } .framer-OPdDt .framer-83tldw { aspect-ratio: 1.5172413793103448 / 1; width: 36px; } .framer-OPdDt .framer-18lhh23 { height: 38px; width: 111px; } .framer-OPdDt .framer-q53ii7-container { aspect-ratio: 2.9210526315789473 / 1; width: 90%; } .framer-OPdDt .framer-n14xv { flex-direction: column; padding: 96px 48px 0px 24px; } .framer-OPdDt .framer-1rdtfje { gap: 16px; order: 1; padding: 96px 0px 48px 36px; width: 100%; z-index: 2; } .framer-OPdDt .framer-v8c5i1 { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex-direction: column; order: 0; padding: 10px 16px 10px 16px; } .framer-OPdDt .framer-xchh6y { order: 1; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-OPdDt .framer-2qbup1 { order: 2; z-index: 1; } .framer-OPdDt .framer-1j54c8u { order: 3; width: 100%; } .framer-OPdDt .framer-1np1sll-container { order: 0; width: 45%; } .framer-OPdDt .framer-1hmwf53 { padding: 48px 24px 112px 24px; } .framer-OPdDt .framer-173t050 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; width: min-content; } .framer-OPdDt .framer-14tzy2h-container { left: 11px; top: 6px; width: 235px; z-index: 1; } .framer-OPdDt .framer-1evueyl { height: 114px; left: unset; position: relative; top: unset; width: 270px; } .framer-OPdDt .framer-at51j0 { height: 114px; width: 270px; } .framer-OPdDt .framer-17dat92 { height: 15px; left: 221px; top: 89px; width: 14px; } .framer-OPdDt .framer-8v1n5h { height: 15px; top: 0px; width: 14px; } .framer-OPdDt .framer-75mm49 { height: 5px; left: 5px; top: 8px; width: 8px; } .framer-OPdDt .framer-uyr2hn { height: 12px; left: 1px; top: 1px; width: 12px; } .framer-OPdDt .framer-k5papq { height: 5px; left: 3px; top: 3px; width: 5px; } .framer-OPdDt .framer-c8bl85 { height: 2px; left: 4px; top: 4px; width: 2px; } .framer-OPdDt .framer-ubjbj0 { height: 19px; left: 243px; top: 87px; width: 19px; } .framer-OPdDt .framer-16cladc { height: 8px; left: 249px; top: 92px; width: 8px; } .framer-OPdDt .framer-1bi2bqh { left: 0px; top: 78px; width: 270px; } .framer-OPdDt .framer-1tix18q { width: 80%; } .framer-OPdDt .framer-16a3qv7 { flex-direction: column; padding: 48px 24px 48px 24px; } .framer-OPdDt .framer-7gqbi7 { gap: 16px; width: 100%; } .framer-OPdDt .framer-l1zhld { width: auto; } .framer-OPdDt .framer-1nbsnmo { flex-direction: column; height: min-content; width: 100%; } .framer-OPdDt .framer-60x0gq { align-content: flex-start; align-items: flex-start; box-shadow: unset; height: min-content; padding: 0px 0px 16px 0px; width: 100%; } .framer-OPdDt .framer-3x98ul, .framer-OPdDt .framer-e0ii { width: 100%; } .framer-OPdDt .framer-1woq6rd, .framer-OPdDt .framer-13hs1gn { width: 300px; } .framer-OPdDt .framer-144yp9o { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; align-content: flex-start; align-items: flex-start; box-shadow: unset; height: min-content; padding: 0px 0px 16px 0px; width: 100%; } .framer-OPdDt .framer-s5hda4 { flex-direction: column; justify-content: flex-start; padding: 48px 24px 0px 24px; } .framer-OPdDt .framer-nb5b7x { gap: 16px; width: 100%; z-index: 2; } .framer-OPdDt .framer-1wxh25v, .framer-OPdDt .framer-1nfmzpf { z-index: 2; } .framer-OPdDt .framer-2ps20u { overflow: hidden; width: 100%; z-index: 0; } .framer-OPdDt .framer-lm2gm7 { gap: 0px; z-index: 0; } .framer-OPdDt .framer-1up8hre, .framer-OPdDt .framer-17uhjsl { background-color: unset; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; padding: 0px; } .framer-OPdDt .framer-158f7zj, .framer-OPdDt .framer-12b4fv3 { gap: 0px; } .framer-OPdDt .framer-1hp8hed { background-color: unset; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; gap: 0px; padding: 0px; } .framer-OPdDt .framer-qkl12h { height: 800px; } .framer-OPdDt .framer-c0anax-container { bottom: 356px; left: 24px; right: 10px; width: unset; } .framer-OPdDt .framer-194u3w0 { gap: 20px; justify-content: center; min-height: 400px; padding: 96px 24px 48px 24px; } .framer-OPdDt .framer-mmphhj { grid-template-columns: repeat(1, minmax(50px, 1fr)); height: 250px; padding: 0px 24px 96px 24px; } .framer-OPdDt .framer-1tion57, .framer-OPdDt .framer-6rkhki, .framer-OPdDt .framer-1ricyzd, .framer-OPdDt .framer-1hgnqs0 { grid-column: span 1; } .framer-OPdDt .framer-161vx0c { gap: 48px; height: 800px; padding: 48px 24px 48px 24px; width: 100%; } .framer-OPdDt .framer-r58ck0 { gap: 20px; padding: 0px 0px 48px 0px; width: 342px; z-index: 2; } .framer-OPdDt .framer-hmqnx0 { --framer-text-wrap-override: balance; z-index: 0; } .framer-OPdDt .framer-1754g1q { aspect-ratio: 1.1352657004830917 / 1; flex-direction: column; width: 100%; } .framer-OPdDt .framer-ci4jnh { padding: 48px 24px 48px 24px; } .framer-OPdDt .framer-13ymid3 { padding: 0px 0px 48px 0px; } .framer-OPdDt .framer-1cfk3ae { gap: 0px 0px; grid-template-columns: unset; justify-content: unset; width: 342px; } .framer-OPdDt .framer-18qhzj5 { gap: 16px; height: min-content; padding: 20px; width: min-content; } .framer-OPdDt .framer-oiwbs3 { width: 282px; } .framer-OPdDt .framer-f82zrg { --framer-text-wrap-override: none; width: 282px; } .framer-OPdDt .framer-98tknn, .framer-OPdDt .framer-7dzp1r, .framer-OPdDt .framer-gu65wy { gap: 16px; height: min-content; padding: 20px; } .framer-OPdDt .framer-13b3czy, .framer-OPdDt .framer-1vsr1kp { --framer-text-wrap-override: none; } .framer-OPdDt .framer-1z94bw { --framer-text-wrap-override: balance; } .framer-OPdDt .framer-asp763-container { left: -200px; right: -200px; top: 0px; width: unset; } .framer-OPdDt .framer-uuuji6 { justify-content: flex-start; z-index: 1; } .framer-OPdDt .framer-123wu7h { flex-direction: column; }}`,
        `@media (min-width: 1200px) and (max-width: 1439.98px) { .framer-OPdDt.framer-72rtr7 { width: 1200px; }}`,
      ],
      `framer-OPdDt`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 8220, width: 1440 }),
    ce(
      $,
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
              url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGzjCnYlNbPzS5HE.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Noto Sans SC`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Noto Sans SC`,
              url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGwHCnYlNbPzS5HE.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Noto Sans SC`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Noto Sans SC`,
              url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnYlNbPzS5HE.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Chiron Hei HK`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Chiron Hei HK`,
              url: `https://fonts.gstatic.com/s/chironheihk/v6/wXK-E3MSr44vpVKPvzqVJaxhp3w7QQhPNY163lKzqF8JkTEyjPI0.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Chiron Hei HK`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Chiron Hei HK`,
              url: `https://fonts.gstatic.com/s/chironheihk/v6/wXK-E3MSr44vpVKPvzqVJaxhp3w7QQhPNY163lJtr18JkTEyjPI0.woff2`,
              weight: `400`,
            },
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
        ...it,
        ...at,
        ...ot,
        ...st,
        ...lt,
        ...dt,
        ...ft,
        ...A(Ce),
        ...A(et),
        ...A(Xe),
        ...A(ge),
        ...A(Ke),
        ...A(we),
        ...A(He),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => ee([() => z(U, {}, t), () => z(H, {}, t), () => z(G, {}, t)], t),
    }),
    (Et = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerRootFontSize: `16`,
            framerScrollSections: `{"lv5q3bZ9M":{"pattern":":lv5q3bZ9M","name":"function"},"nWbY0Lgb9":{"pattern":":nWbY0Lgb9","name":"stack1"},"vM4Fp03PG":{"pattern":":vM4Fp03PG","name":"stack2"},"w4xzTIb6v":{"pattern":":w4xzTIb6v","name":"stack3"},"GTPx_4V7M":{"pattern":":GTPx_4V7M","name":"eco"}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"DuSEqTF6q":{"layout":["fixed","auto"]},"TyN2kHuje":{"layout":["fixed","auto"]},"jUmaycA0l":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `8220`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1440`,
            framerColorSyntax: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Et as __FramerMetadata__, $ as default, ht as queryParamNames };
//# sourceMappingURL=n6pzjynB7O0pDJrzvrS0eVT-LhDCK7oxCZx9V71cni8.BPRSWbGJ.mjs.map
