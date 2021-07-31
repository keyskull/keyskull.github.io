self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,D,T,A,E,U,Y,F,L,Z,K,R,O,B,N,Q,V={
aSD:function(d){var x,w,v
switch(d.x){case C.bl:x=d.c
w=x!=null?new X.eB(x.gkP(x)):C.fR
break
case C.y:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gkP(w)
w=new X.cy(x,v==null?C.u:v)}else if(w==null)w=C.mX
break
default:w=null}return new V.kf(d.a,d.f,d.b,d.e,w)},
apL:function(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=P.Z(x,w?s:e.a,f)
v=r?s:d.b
v=T.aQR(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=O.aJT(t,w?s:e.d,f)
r=r?s:d.e
r=Y.hg(r,w?s:e.e,f)
r.toString
return new V.kf(x,v,u,t,r)},
kf:function kf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3C:function a3C(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
aDK:function aDK(){},
aDL:function aDL(d,e,f){this.a=d
this.b=e
this.c=f}},S,X,G,M
a.setFunctionNamesIfNecessary([V])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
D=c[5]
T=c[6]
A=c[7]
E=c[8]
U=c[9]
Y=c[10]
F=c[11]
L=c[12]
Z=c[13]
K=c[14]
R=c[15]
O=c[16]
B=c[17]
N=c[18]
Q=c[19]
V=a.updateHolder(c[20],V)
S=c[21]
X=c[22]
G=c[23]
M=c[24]
V.kf.prototype={
BP:function(d,e){return this.e.eO(d,e)},
geX:function(d){return this.e.gfT()},
gAR:function(){return this.d!=null},
es:function(d,e){if(d instanceof S.bg)return V.apL(V.aSD(d),this,e)
else if(d==null||d instanceof V.kf)return V.apL(y.b.a(d),this,e)
return this.LZ(d,e)},
eu:function(d,e){if(d instanceof S.bg)return V.apL(this,V.aSD(d),e)
else if(d==null||d instanceof V.kf)return V.apL(this,y.b.a(d),e)
return this.M_(d,e)},
k:function(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.ae(e)!==H.L(w))return!1
if(e instanceof V.kf)if(J.j(e.a,w.a))x=J.j(e.c,w.c)&&S.i7(e.d,w.d)&&e.e.k(0,w.e)
else x=!1
else x=!1
return x},
gv:function(d){var x=this
return P.a8(x.a,x.b,x.c,x.e,P.fz(x.d),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
IH:function(d,e,f){return this.e.eO(new P.C(0,0,0+d.a,0+d.b),f).u(0,e)},
uQ:function(d){return new V.a3C(this,d)}}
V.a3C.prototype={
aiS:function(d,e){var x,w,v=this
if(d.k(0,v.c)&&e==v.d)return
if(v.r==null)x=v.b.a!=null||!1
else x=!1
if(x){x=H.aD()
x=x?H.b0():new H.aV(new H.aW())
v.r=x
w=v.b.a
if(w!=null)x.san(0,w)}x=v.b
w=x.d
if(w!=null){if(v.x==null){v.x=w.length
v.z=P.aA(new H.a9(w,new V.aDK(),H.W(w).i("a9<1,wb>")),!0,y.m)}v.y=P.aA(new H.a9(w,new V.aDL(v,d,e),H.W(w).i("a9<1,la>")),!0,y.c)}if(v.r!=null||v.x!=null)v.e=x.e.eO(d,e)
if(x.c!=null)v.f=x.e.iY(d,e)
v.c=d
v.d=e},
ak1:function(d){var x,w,v,u=this
if(u.x!=null){x=0
while(!0){w=u.x
w.toString
if(!(x<w))break
w=u.y
w=(w==null?H.d(H.o("_shadowPaths")):w)[x]
v=u.z
d.cA(0,w,(v==null?H.d(H.o("_shadowPaints")):v)[x]);++x}}},
aid:function(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.Vz(x)
v=x}else v=x
x=w.c
x.toString
v.Bb(d,x,w.f,e)},
p:function(d){var x=this.Q
if(x!=null)x.p(0)
this.LU(0)},
iL:function(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new P.C(v,u,v+w.a,u+w.b),s=f.d
x.aiS(t,s)
x.ak1(d)
w=x.r
if(w!=null){v=x.e
d.cA(0,v==null?H.d(H.o("_outerPath")):v,w)}x.aid(d,f)
x.b.e.iM(d,t,s)}}
var z=a.updateTypes([])
V.aDK.prototype={
$1:function(d){return d.jV()},
$S:561}
V.aDL.prototype={
$1:function(d){return this.a.b.e.eO(this.b.cb(d.b).er(d.d),this.c)},
$S:562};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(V.kf,Z.fE)
x(V.a3C,Z.m2)
w(H.cC,[V.aDK,V.aDL])})()
H.ff(b.typeUniverse,JSON.parse('{"kf":{"fE":[]},"a3C":{"m2":[]}}'))
0
var y={m:H.J("wb"),c:H.J("la"),b:H.J("kf?")};(function constants(){C.mX=new F.cN(C.u,C.u,C.u,C.u)
C.f1=new V.eo("MaterialState.selected")})()}
$__dart_deferred_initializers__["R5AlFoC8cOnW1aT4DJxAWv34l0s="] = $__dart_deferred_initializers__.current