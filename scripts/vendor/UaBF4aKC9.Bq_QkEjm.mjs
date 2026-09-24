import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { C as t, c as n, l as r, o as i, v as a } from "./react.D20wc1Tc.mjs";
import { C as o, L as s, r as c, y as l } from "./framer.Dxk3-1Rh.mjs";
function u(e) {
  let {
      color1: t,
      color2: i,
      color3: o,
      color4: s,
      speed: c,
      movementRange: l,
      blur: u,
      intensity: d,
    } = e,
    f = Math.max(c, 2),
    p = Math.min(Math.max(l, 0.2), 3),
    m = Math.max(u, 0),
    h = Math.min(Math.max(d, 0), 1),
    g = a().replace(/[^a-zA-Z0-9]/g, ``),
    _ = `ttFlowOne${g}`,
    v = `ttFlowTwo${g}`,
    y = `ttFlowThree${g}`,
    b = `ttFlowFour${g}`,
    x = (e) => `
            radial-gradient(
                circle at center,
                ${e} 0%,
                ${e} 30%,
                ${e} 46%,
                transparent 76%
            )
        `,
    S = {
      position: `absolute`,
      borderRadius: `50%`,
      filter: `blur(${m}px)`,
      pointerEvents: `none`,
      willChange: `transform, opacity`,
      transformOrigin: `center`,
    };
  return r(`div`, {
    "aria-hidden": `true`,
    style: {
      position: `relative`,
      width: `100%`,
      height: `100%`,
      minWidth: 40,
      minHeight: 40,
      overflow: `visible`,
      background: `transparent`,
      pointerEvents: `none`,
    },
    children: [
      n(`style`, {
        children: `
                @keyframes ${_} {
                    0% {
                        transform:
                            translate3d(
                                ${-8 * p}%,
                                ${-6 * p}%,
                                0
                            )
                            scale(1);
                    }

                    32% {
                        transform:
                            translate3d(
                                ${24 * p}%,
                                ${14 * p}%,
                                0
                            )
                            scale(1.2);
                    }

                    68% {
                        transform:
                            translate3d(
                                ${-4 * p}%,
                                ${28 * p}%,
                                0
                            )
                            scale(0.92);
                    }

                    100% {
                        transform:
                            translate3d(
                                ${-8 * p}%,
                                ${-6 * p}%,
                                0
                            )
                            scale(1);
                    }
                }

                @keyframes ${v} {
                    0% {
                        transform:
                            translate3d(
                                ${12 * p}%,
                                ${8 * p}%,
                                0
                            )
                            scale(1.08);
                    }

                    36% {
                        transform:
                            translate3d(
                                ${-26 * p}%,
                                ${20 * p}%,
                                0
                            )
                            scale(0.9);
                    }

                    72% {
                        transform:
                            translate3d(
                                ${-10 * p}%,
                                ${-24 * p}%,
                                0
                            )
                            scale(1.22);
                    }

                    100% {
                        transform:
                            translate3d(
                                ${12 * p}%,
                                ${8 * p}%,
                                0
                            )
                            scale(1.08);
                    }
                }

                @keyframes ${y} {
                    0% {
                        transform:
                            translate3d(
                                0%,
                                ${18 * p}%,
                                0
                            )
                            scale(1);
                    }

                    30% {
                        transform:
                            translate3d(
                                ${26 * p}%,
                                ${-20 * p}%,
                                0
                            )
                            scale(1.18);
                    }

                    70% {
                        transform:
                            translate3d(
                                ${-24 * p}%,
                                ${-6 * p}%,
                                0
                            )
                            scale(0.96);
                    }

                    100% {
                        transform:
                            translate3d(
                                0%,
                                ${18 * p}%,
                                0
                            )
                            scale(1);
                    }
                }

                @keyframes ${b} {
                    0% {
                        transform:
                            translate3d(
                                ${-10 * p}%,
                                ${-8 * p}%,
                                0
                            )
                            scale(0.92);
                        opacity: ${0.42 * h};
                    }

                    50% {
                        transform:
                            translate3d(
                                ${20 * p}%,
                                ${16 * p}%,
                                0
                            )
                            scale(1.28);
                        opacity: ${0.7 * h};
                    }

                    100% {
                        transform:
                            translate3d(
                                ${-10 * p}%,
                                ${-8 * p}%,
                                0
                            )
                            scale(0.92);
                        opacity: ${0.42 * h};
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .tt-color-blob {
                        animation: none !important;
                    }
                }
            `,
      }),
      n(`div`, {
        className: `tt-color-blob`,
        style: {
          ...S,
          width: `78%`,
          height: `92%`,
          left: `-14%`,
          top: `-18%`,
          background: x(t),
          opacity: 0.86 * h,
          animation: `
                        ${_}
                        ${f}s
                        ease-in-out
                        infinite
                    `,
        },
      }),
      n(`div`, {
        className: `tt-color-blob`,
        style: {
          ...S,
          width: `74%`,
          height: `88%`,
          right: `-14%`,
          top: `-12%`,
          background: x(o),
          opacity: 0.78 * h,
          animation: `
                        ${v}
                        ${f * 1.14}s
                        ease-in-out
                        infinite
                    `,
        },
      }),
      n(`div`, {
        className: `tt-color-blob`,
        style: {
          ...S,
          width: `70%`,
          height: `84%`,
          left: `16%`,
          bottom: `-22%`,
          background: x(s),
          opacity: 0.68 * h,
          animation: `
                        ${y}
                        ${f * 1.28}s
                        ease-in-out
                        infinite
                    `,
        },
      }),
      n(`div`, {
        className: `tt-color-blob`,
        style: {
          ...S,
          width: `64%`,
          height: `76%`,
          left: `18%`,
          top: `12%`,
          background: x(i),
          opacity: 0.62 * h,
          animation: `
                        ${b}
                        ${f * 0.88}s
                        ease-in-out
                        infinite
                    `,
        },
      }),
    ],
  });
}
var d = e(() => {
    (i(),
      t(),
      s(),
      (u.defaultProps = {
        color1: `#E3EBFF`,
        color2: `#BCDAFF`,
        color3: `#7D9BFF`,
        color4: `#0184FD`,
        speed: 14,
        movementRange: 1.5,
        blur: 36,
        intensity: 1,
      }),
      l(u, {
        color1: { type: c.Color, title: `淡蓝`, defaultValue: `#E3EBFF` },
        color2: { type: c.Color, title: `浅蓝`, defaultValue: `#BCDAFF` },
        color3: { type: c.Color, title: `蓝紫`, defaultValue: `#7D9BFF` },
        color4: { type: c.Color, title: `亮蓝`, defaultValue: `#0184FD` },
        speed: {
          type: c.Number,
          title: `流动速度`,
          defaultValue: 14,
          min: 4,
          max: 40,
          step: 1,
          unit: `s`,
        },
        movementRange: {
          type: c.Number,
          title: `流动范围`,
          defaultValue: 1.5,
          min: 0.2,
          max: 3,
          step: 0.1,
        },
        blur: {
          type: c.Number,
          title: `边缘柔化`,
          defaultValue: 36,
          min: 0,
          max: 120,
          step: 1,
          unit: `px`,
        },
        intensity: {
          type: c.Number,
          title: `颜色强度`,
          defaultValue: 1,
          min: 0.1,
          max: 1,
          step: 0.05,
        },
      }));
  }),
  f,
  p,
  m,
  h = e(() => {
    (s(),
      o.loadFonts([`GF;Noto Sans SC-regular`, `GF;Noto Sans SC-700`]),
      (f = [
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
              cssFamilyName: `Noto Sans SC`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Noto Sans SC`,
              url: `../../assets/fonts/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaGzjCnYlNbPzS5HE.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (p = [
        `.framer-meYon .framer-styles-preset-1r99xuj:not(.rich-text-wrapper), .framer-meYon .framer-styles-preset-1r99xuj.rich-text-wrapper p { --framer-font-family: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-family-bold: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.75em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #596274; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 0px) { .framer-meYon .framer-styles-preset-1r99xuj:not(.rich-text-wrapper), .framer-meYon .framer-styles-preset-1r99xuj.rich-text-wrapper p { --framer-font-family: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-family-bold: "Noto Sans SC", "Noto Sans SC Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.75em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #596274; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (m = `framer-meYon`));
  });
export { u as a, h as i, p as n, d as o, f as r, m as t };
//# sourceMappingURL=UaBF4aKC9.Bq_QkEjm.mjs.map
