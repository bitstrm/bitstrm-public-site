"use strict";(self.webpackChunkbitstrm_landing_2=self.webpackChunkbitstrm_landing_2||[]).push([[6964],{6964:(t,i,o)=>{o.d(i,{Slower:()=>a});var s=o(4409);class n{constructor(){this.factor=3,this.radius=200}load(t){t&&(void 0!==t.factor&&(this.factor=t.factor),void 0!==t.radius&&(this.radius=t.radius))}}class a extends s.sJ{constructor(t){super(t)}clear(t,i,o){t.slow.inRange&&!o||(t.slow.factor=1)}init(){const t=this.container,i=t.actualOptions.interactivity.modes.slow;i&&(t.retina.slowModeRadius=i.radius*t.retina.pixelRatio)}interact(){}isEnabled(t){var i;const o=this.container,n=o.interactivity.mouse,a=(null!==(i=null===t||void 0===t?void 0:t.interactivity)&&void 0!==i?i:o.actualOptions.interactivity).events;return a.onHover.enable&&!!n.position&&(0,s.hn)("slow",a.onHover.mode)}loadModeOptions(t){t.slow||(t.slow=new n);for(var i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];for(const n of o)t.slow.load(null===n||void 0===n?void 0:n.slow)}reset(t){t.slow.inRange=!1;const i=this.container,o=i.actualOptions,n=i.interactivity.mouse.position,a=i.retina.slowModeRadius,e=o.interactivity.modes.slow;if(!e||!a||a<0||!n)return;const r=t.getPosition(),l=(0,s.Yf)(n,r),c=l/a,d=e.factor,{slow:u}=t;l>a||(u.inRange=!0,u.factor=c/d)}}}}]);
//# sourceMappingURL=6964.60a5910f.chunk.js.map