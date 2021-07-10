self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,D,E,U,Y,A,F,L,N,G,S,T,Q,Z,K,R,O,B,V={
aPM:function(d){var x,w,v
switch(d.x){case C.bh:x=d.c
w=x!=null?new X.ep(x.gky(x)):C.fJ
break
case C.B:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gky(w)
w=new X.cA(x,v==null?C.x:v)}else if(w==null)w=C.mw
break
default:w=null}return new V.jU(d.a,d.f,d.b,d.e,w)},
anN:function(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=P.X(x,w?s:e.a,f)
v=r?s:d.b
v=T.aO0(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=O.aHf(t,w?s:e.d,f)
r=r?s:d.e
r=Y.h9(r,w?s:e.e,f)
r.toString
return new V.jU(x,v,u,t,r)},
jU:function jU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2b:function a2b(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
aBq:function aBq(){},
aBr:function aBr(d,e,f){this.a=d
this.b=e
this.c=f}},X,M
a.setFunctionNamesIfNecessary([V])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
D=c[5]
E=c[6]
U=c[7]
Y=c[8]
A=c[9]
F=c[10]
L=c[11]
N=c[12]
G=c[13]
S=c[14]
T=c[15]
Q=c[16]
Z=c[17]
K=c[18]
R=c[19]
O=c[20]
B=c[21]
V=a.updateHolder(c[22],V)
X=c[23]
M=c[24]
V.jU.prototype={
Bb:function(d,e){return this.e.eE(d,e)},
geN:function(d){return this.e.gfF()},
gAg:function(){return this.d!=null},
ek:function(d,e){if(d instanceof S.bz)return V.anN(V.aPM(d),this,e)
else if(d==null||d instanceof V.jU)return V.anN(y.b.a(d),this,e)
return this.L8(d,e)},
el:function(d,e){if(d instanceof S.bz)return V.anN(this,V.aPM(d),e)
else if(d==null||d instanceof V.jU)return V.anN(this,y.b.a(d),e)
return this.L9(d,e)},
k:function(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.ac(e)!==H.J(w))return!1
if(e instanceof V.jU)if(J.j(e.a,w.a))x=J.j(e.c,w.c)&&S.hX(e.d,w.d)&&e.e.k(0,w.e)
else x=!1
else x=!1
return x},
gu:function(d){var x=this
return P.a6(x.a,x.b,x.c,x.e,P.fP(x.d),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
HX:function(d,e,f){return this.e.eE(new P.B(0,0,0+d.a,0+d.b),f).w(0,e)},
uy:function(d){return new V.a2b(this,d)}}
V.a2b.prototype={
ah0:function(d,e){var x,w,v=this
if(d.k(0,v.c)&&e==v.d)return
if(v.r==null)x=v.b.a!=null||!1
else x=!1
if(x){x=H.ay()
x=x?H.aW():new H.aP(new H.aS())
v.r=x
w=v.b.a
if(w!=null)x.sao(0,w)}x=v.b
w=x.d
if(w!=null){if(v.x==null){v.x=w.length
v.z=P.aB(new H.ae(w,new V.aBq(),H.a7(w).j("ae<1,vI>")),!0,y.m)}v.y=P.aB(new H.ae(w,new V.aBr(v,d,e),H.a7(w).j("ae<1,kM>")),!0,y.c)}if(v.r!=null||v.x!=null)v.e=x.e.eE(d,e)
if(x.c!=null)v.f=x.e.iO(d,e)
v.c=d
v.d=e},
ai1:function(d){var x,w,v,u=this
if(u.x!=null){x=0
while(!0){w=u.x
w.toString
if(!(x<w))break
w=u.y
w=(w==null?H.d(H.p("_shadowPaths")):w)[x]
v=u.z
d.cA(0,w,(v==null?H.d(H.p("_shadowPaints")):v)[x]);++x}}},
ags:function(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.U7(x)
v=x}else v=x
x=w.c
x.toString
v.Az(d,x,w.f,e)},
p:function(d){var x=this.Q
if(x!=null)x.p(0)
this.L3(0)},
iC:function(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new P.B(v,u,v+w.a,u+w.b),s=f.d
x.ah0(t,s)
x.ai1(d)
w=x.r
if(w!=null){v=x.e
d.cA(0,v==null?H.d(H.p("_outerPath")):v,w)}x.ags(d,f)
x.b.e.iD(d,t,s)}}
var z=a.updateTypes([])
V.aBq.prototype={
$1:function(d){return d.jH()},
$S:512}
V.aBr.prototype={
$1:function(d){return this.a.b.e.eE(this.b.c8(d.b).ej(d.d),this.c)},
$S:513};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(V.jU,Z.fs)
x(V.a2b,Z.lI)
w(H.cw,[V.aBq,V.aBr])})()
H.fl(b.typeUniverse,JSON.parse('{"jU":{"fs":[]},"a2b":{"lI":[]}}'))
0
var y={m:H.N("vI"),c:H.N("kM"),b:H.N("jU?")};(function constants(){C.mw=new F.cW(C.x,C.x,C.x,C.x)
C.eW=new V.ec("MaterialState.selected")})()}
$__dart_deferred_initializers__["GHNr/0ipnKBTqpw5LJZNmCK6va4="] = $__dart_deferred_initializers__.current