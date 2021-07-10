self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,D,E,U,Y,A,F,L,N,G,S,V={
aPO:function(d){var x,w,v
switch(d.x){case C.bh:x=d.c
w=x!=null?new X.eq(x.gky(x)):C.fJ
break
case C.B:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gky(w)
w=new X.cB(x,v==null?C.x:v)}else if(w==null)w=C.mw
break
default:w=null}return new V.jT(d.a,d.f,d.b,d.e,w)},
anU:function(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=P.X(x,w?s:e.a,f)
v=r?s:d.b
v=T.aO4(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=O.aHk(t,w?s:e.d,f)
r=r?s:d.e
r=Y.ha(r,w?s:e.e,f)
r.toString
return new V.jT(x,v,u,t,r)},
jT:function jT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2i:function a2i(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
aBy:function aBy(){},
aBz:function aBz(d,e,f){this.a=d
this.b=e
this.c=f}},T,Q,Z,K,R,O,B,X,M
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
V=a.updateHolder(c[15],V)
T=c[16]
Q=c[17]
Z=c[18]
K=c[19]
R=c[20]
O=c[21]
B=c[22]
X=c[23]
M=c[24]
V.jT.prototype={
Bb:function(d,e){return this.e.eD(d,e)},
geM:function(d){return this.e.gfE()},
gAg:function(){return this.d!=null},
el:function(d,e){if(d instanceof S.bz)return V.anU(V.aPO(d),this,e)
else if(d==null||d instanceof V.jT)return V.anU(y.b.a(d),this,e)
return this.Lc(d,e)},
em:function(d,e){if(d instanceof S.bz)return V.anU(this,V.aPO(d),e)
else if(d==null||d instanceof V.jT)return V.anU(this,y.b.a(d),e)
return this.Ld(d,e)},
k:function(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.ad(e)!==H.J(w))return!1
if(e instanceof V.jT)if(J.j(e.a,w.a))x=J.j(e.c,w.c)&&S.hY(e.d,w.d)&&e.e.k(0,w.e)
else x=!1
else x=!1
return x},
gv:function(d){var x=this
return P.a6(x.a,x.b,x.c,x.e,P.fQ(x.d),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
I_:function(d,e,f){return this.e.eD(new P.B(0,0,0+d.a,0+d.b),f).w(0,e)},
uw:function(d){return new V.a2i(this,d)}}
V.a2i.prototype={
ah0:function(d,e){var x,w,v=this
if(d.k(0,v.c)&&e==v.d)return
if(v.r==null)x=v.b.a!=null||!1
else x=!1
if(x){x=H.ay()
x=x?H.aW():new H.aP(new H.aT())
v.r=x
w=v.b.a
if(w!=null)x.san(0,w)}x=v.b
w=x.d
if(w!=null){if(v.x==null){v.x=w.length
v.z=P.aB(new H.af(w,new V.aBy(),H.a7(w).j("af<1,vN>")),!0,y.m)}v.y=P.aB(new H.af(w,new V.aBz(v,d,e),H.a7(w).j("af<1,kN>")),!0,y.c)}if(v.r!=null||v.x!=null)v.e=x.e.eD(d,e)
if(x.c!=null)v.f=x.e.iN(d,e)
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
d.cz(0,w,(v==null?H.d(H.p("_shadowPaints")):v)[x]);++x}}},
agr:function(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.Ua(x)
v=x}else v=x
x=w.c
x.toString
v.Az(d,x,w.f,e)},
p:function(d){var x=this.Q
if(x!=null)x.p(0)
this.L7(0)},
iB:function(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new P.B(v,u,v+w.a,u+w.b),s=f.d
x.ah0(t,s)
x.ai1(d)
w=x.r
if(w!=null){v=x.e
d.cz(0,v==null?H.d(H.p("_outerPath")):v,w)}x.agr(d,f)
x.b.e.iC(d,t,s)}}
var z=a.updateTypes([])
V.aBy.prototype={
$1:function(d){return d.jF()},
$S:512}
V.aBz.prototype={
$1:function(d){return this.a.b.e.eD(this.b.c7(d.b).ek(d.d),this.c)},
$S:513};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(V.jT,Z.ft)
x(V.a2i,Z.lI)
w(H.cx,[V.aBy,V.aBz])})()
H.fn(b.typeUniverse,JSON.parse('{"jT":{"ft":[]},"a2i":{"lI":[]}}'))
0
var y={m:H.N("vN"),c:H.N("kN"),b:H.N("jT?")};(function constants(){C.mw=new F.cW(C.x,C.x,C.x,C.x)
C.eW=new V.ed("MaterialState.selected")})()}
$__dart_deferred_initializers__["ySFJER6wiCKv3qbOd9NQ4qWTueQ="] = $__dart_deferred_initializers__.current