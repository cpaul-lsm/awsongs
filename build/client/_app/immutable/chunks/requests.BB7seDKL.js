import{a2 as ae,F as ne,a3 as F,h as M,K as b,G as re,g as J,I as ie,J as P,M as k,Q as C,a4 as L,N as Q,O as X,P as te,a5 as $,q as se,w as K,a6 as H,a7 as U,a8 as R,a9 as le,a0 as fe,aa as oe,ab as ue,$ as ve,ac as de,ad as ce,E as me,ae as _e,af as he,l as V,ag as ge,ah as Ee,z as Ae}from"./runtime.DAUSjKms.js";function Me(s,e){return e}function Ie(s,e,n,o){for(var u=[],v=e.length,l=0;l<v;l++)le(e[l].e,u,!0);var g=v>0&&u.length===0&&n!==null;if(g){var c=n.parentNode;fe(c),c.append(n),o.clear(),T(s,e[0].prev,e[v-1].next)}oe(u,()=>{for(var A=0;A<v;A++){var d=e[A];g||(o.delete(d.k),T(s,d.prev,d.next)),ue(d.e,!g)}})}function we(s,e,n,o,u,v=null){var l=s,g={flags:e,items:new Map,first:null},c=(e&F)!==0;if(c){var A=s;l=M?b(ve(A)):A.appendChild(ae())}M&&re();var d=null,I=!1,y=de(()=>{var a=n();return Ae(a)?a:a==null?[]:$(a)});ne(()=>{var a=J(y),i=a.length;if(I&&i===0)return;I=i===0;let f=!1;if(M){var w=l.data===ie;w!==(i===0)&&(l=P(),b(l),k(!1),f=!0)}if(M){for(var m=null,_,h=0;h<i;h++){if(C.nodeType===8&&C.data===ce){l=C,f=!0,k(!1);break}var E=a[h],r=o(E,h);_=Z(C,g,m,null,E,r,h,u,e),g.items.set(r,_),m=_}i>0&&b(P())}if(!M){var t=me;pe(a,g,l,u,e,(t.f&L)!==0,o)}v!==null&&(i===0?d?Q(d):d=X(()=>v(l)):d!==null&&te(d,()=>{d=null})),f&&k(!0),J(y)}),M&&(l=C)}function pe(s,e,n,o,u,v,l,g){var q,B,Y,z;var c=(u&_e)!==0,A=(u&(H|R))!==0,d=s.length,I=e.items,y=e.first,a=y,i,f=null,w,m=[],_=[],h,E,r,t;if(c)for(t=0;t<d;t+=1)h=s[t],E=l(h,t),r=I.get(E),r!==void 0&&((q=r.a)==null||q.measure(),(w??(w=new Set)).add(r));for(t=0;t<d;t+=1){if(h=s[t],E=l(h,t),r=I.get(E),r===void 0){var j=a?a.e.nodes_start:n;f=Z(j,e,f,f===null?e.first:f.next,h,E,t,o,u),I.set(E,f),m=[],_=[],a=f.next;continue}if(A&&Te(r,h,t,u),r.e.f&L&&(Q(r.e),c&&((B=r.a)==null||B.unfix(),(w??(w=new Set)).delete(r))),r!==a){if(i!==void 0&&i.has(r)){if(m.length<_.length){var D=_[0],p;f=D.prev;var O=m[0],N=m[m.length-1];for(p=0;p<m.length;p+=1)W(m[p],D,n);for(p=0;p<_.length;p+=1)i.delete(_[p]);T(e,O.prev,N.next),T(e,f,O),T(e,N,D),a=D,f=N,t-=1,m=[],_=[]}else i.delete(r),W(r,a,n),T(e,r.prev,r.next),T(e,r,f===null?e.first:f.next),T(e,f,r),f=r;continue}for(m=[],_=[];a!==null&&a.k!==E;)(v||!(a.e.f&L))&&(i??(i=new Set)).add(a),_.push(a),a=a.next;if(a===null)continue;r=a}m.push(r),f=r,a=r.next}if(a!==null||i!==void 0){for(var x=i===void 0?[]:$(i);a!==null;)(v||!(a.e.f&L))&&x.push(a),a=a.next;var S=x.length;if(S>0){var ee=u&F&&d===0?n:null;if(c){for(t=0;t<S;t+=1)(Y=x[t].a)==null||Y.measure();for(t=0;t<S;t+=1)(z=x[t].a)==null||z.fix()}Ie(e,x,ee,I)}}c&&se(()=>{var G;if(w!==void 0)for(r of w)(G=r.a)==null||G.apply()}),K.first=e.first&&e.first.e,K.last=f&&f.e}function Te(s,e,n,o){o&H&&U(s.v,e),o&R?U(s.i,n):s.i=n}function Z(s,e,n,o,u,v,l,g,c,A){var d=(c&H)!==0,I=(c&ge)===0,y=d?I?he(u):V(u):u,a=c&R?V(l):l,i={i:a,v:y,k:v,a:null,e:null,prev:n,next:o};try{return i.e=X(()=>g(s,y,a),M),i.e.prev=n&&n.e,i.e.next=o&&o.e,n===null?e.first=i:(n.next=i,n.e.next=i.e),o!==null&&(o.prev=i,o.e.prev=i.e),i}finally{}}function W(s,e,n){for(var o=s.next?s.next.e.nodes_start:n,u=e?e.e.nodes_start:n,v=s.e.nodes_start;v!==o;){var l=Ee(v);u.before(v),v=l}}function T(s,e,n){e===null?s.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}const xe=[{id:996031,date:"2025-01-16",time:"23:51",song:"All of Me (John Legend)",firstname:"Goofy",comments:"Pluto is my pal"},{id:779036,date:"2025-01-16",time:"00:00",song:"American Beauty (Drew Holcomb)",firstname:"Mickey Mouse",comments:"I love Minnie"},{id:612802,date:"2025-01-16",time:"00:20",song:"All I Want Is You (U2)",firstname:"Kermit",comments:"I love Ms Piggy"},{id:668736,date:"2025-01-16",time:"01:03",song:"Dancing in the Sky (Dani and Lizzy)",firstname:"Tiny Tim",comments:"God bless everyone"},{id:309077,date:"2025-01-16",time:"22:26",song:"",firstname:"Crawford",comments:"Welcome"},{id:131781,date:"2025-01-30",time:"11:58",song:"All of Me (John Legend)",firstname:"Testing",comments:"this is a test"},{id:899873,date:"2025-01-30",time:"12:05",song:"As Long As You Love Me (Back Street Boys)",firstname:"Crawford",comments:"I love mandolin"}];export{we as e,Me as i,xe as r};
