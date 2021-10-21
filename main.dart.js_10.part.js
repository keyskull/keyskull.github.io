self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C,D,E={
aC2(d){var x=J.an(d)
return new E.de(x.h(d,"id"),x.h(d,"title"),x.h(d,"created_timestamp"))},
de:function de(d,e,f){this.a=d
this.b=e
this.c=f},
aDJ(){var x=new Float64Array(4)
x[3]=1
return new E.mX(x)},
mX:function mX(d){this.a=d}},F,G={o6:function o6(d,e){this.a=d
this.b=e},p8:function p8(d,e){this.a=d
this.b=e},wx:function wx(d,e,f,g,h,i,j,k){var _=this
_.r=d
_.z=e
_.Q=f
_.ch=g
_.c=h
_.d=i
_.e=j
_.a=k},Sp:function Sp(d,e){var _=this
_.e=_.d=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.cm$=d
_.a=null
_.b=e
_.c=null},alQ:function alQ(){},alR:function alR(){},alS:function alS(){},alT:function alT(){},alU:function alU(){},alV:function alV(){},alW:function alW(){},alX:function alX(){}},H,J,K={GL:function GL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.Q=g
_.ch=h
_.a=i}},L={
aBk(d,e,f,g,h){return new L.jD(g,h,d,f,e,null)},
jD:function jD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.z=h
_.a=i}},M,N,O,P={
aBW(d){var x,w=C.d.b5(d/1000)
if(Math.abs(w)<=864e13)x=!1
else x=!0
if(x)H.i(P.be("DateTime is outside valid range: "+w,null))
H.f2(!1,"isUtc",y.y)
return new P.dD(w,!1)}},Q,R,S={m8:function m8(d,e){this.a=d
this.b=e}},T,U,V,W,X={
aPe(d,e,f){return new X.kY(e,f,null,d)}},Y,Z
a.setFunctionNamesIfNecessary([E,G,K,L,P,S,X])
A=c[0]
B=c[1]
C=c[2]
D=c[3]
E=a.updateHolder(c[4],E)
F=c[5]
G=a.updateHolder(c[6],G)
H=c[7]
J=c[8]
K=a.updateHolder(c[9],K)
L=a.updateHolder(c[10],L)
M=c[11]
N=c[12]
O=c[13]
P=a.updateHolder(c[14],P)
Q=c[15]
R=c[16]
S=a.updateHolder(c[17],S)
T=c[18]
U=c[19]
V=c[20]
W=c[21]
X=a.updateHolder(c[22],X)
Y=c[23]
Z=c[24]
E.de.prototype={
jo(){return P.aB(["id",this.a,"title",this.b,"created_timestamp",this.c,"brief",""],y.N,y.z)}}
L.jD.prototype={
H(d,e){var x,w,v,u,t,s,r=this,q=null
if(V.AF(e))x=new T.bS(C.LC,r.c,q)
else x=C.f_
w=V.AF(e)?C.LB:C.LK
v=V.AF(e)?new K.GL(L.bU(C.b.E(r.f,0,1),q,q,q,q),C.a0C,new D.tt("",1),15,30,q):q
u=r.d
t=y.p
s=T.dq(H.a([L.bU("Author: "+r.f,q,K.ag(e).W.x,q,q),L.bU(u,q,K.ag(e).W.b,q,q)],t),C.bu,C.a6,C.a7)
return V.avY(T.es(C.iW,H.a([x,Q.ax0(w,!0,v,r.z,T.dq(H.a([new T.bS(C.mR,L.bU(u,q,K.ag(e).W.x,q,q),q),L.bU("\nDate: "+r.r,q,q,q,q)],t),C.bu,C.a6,C.a7),s)],t),C.aB),C.mT,C.DR)}}
K.GL.prototype={
ga7_(){var x=this.Q
return 2*x},
ga6S(){var x=this.ch
return 2*x},
H(d,e){var x,w,v,u,t,s=this,r=null,q=K.ag(e),p=q.aq.r.cu(r),o=s.d
switch(X.uR(o)){case C.T:p=p.cu(q.d)
break
case C.am:p=p.cu(q.e)
break}x=s.ga7_()
w=s.ga6S()
v=X.aPe(C.cw,s.f,r)
u=e.Y(y.l)
u=u.f.w7(1)
t=q.aY.cu(p.b)
t=T.jI(new F.fK(u,Y.L3(L.l_(s.c,r,C.bd,!0,p,r,r,C.aC),t,r),r),r,r)
u=t
return new G.wx(u,new S.cb(o,v,r,r,r,r,C.be),r,new S.av(x,w,x,w),C.aU,C.ae,r,r)}}
S.m8.prototype={
dQ(d){return K.aBe(this.a,this.b,d)}}
G.o6.prototype={
dQ(d){var x=S.r5(this.a,this.b,d)
x.toString
return x}}
G.p8.prototype={
dQ(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new E.ed(new Float64Array(3)),a3=new E.ed(new Float64Array(3)),a4=E.aDJ(),a5=E.aDJ(),a6=new E.ed(new Float64Array(3)),a7=new E.ed(new Float64Array(3))
this.a.OJ(a2,a4,a6)
this.b.OJ(a3,a5,a7)
x=1-a8
w=a2.jt(x).M(0,a3.jt(a8))
v=a4.jt(x).M(0,a5.jt(a8))
u=new Float64Array(4)
t=new E.mX(u)
t.bp(v)
t.rV(0)
s=a6.jt(x).M(0,a7.jt(a8))
x=new Float64Array(16)
v=new E.b4(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.bA(0,s)
return v}}
G.wx.prototype={
aH(){return new G.Sp(null,C.p)}}
G.Sp.prototype={
mH(d){var x,w,v=this,u=null,t=v.dx
v.a.toString
x=y.K
v.dx=x.a(d.$3(t,u,new G.alQ()))
t=v.dy
v.a.toString
w=y.Z
v.dy=w.a(d.$3(t,u,new G.alR()))
t=y.h
v.fr=t.a(d.$3(v.fr,v.a.z,new G.alS()))
v.fx=t.a(d.$3(v.fx,v.a.Q,new G.alT()))
v.fy=y.E.a(d.$3(v.fy,v.a.ch,new G.alU()))
t=v.go
v.a.toString
v.go=w.a(d.$3(t,u,new G.alV()))
t=v.id
v.a.toString
v.id=y.e.a(d.$3(t,u,new G.alW()))
t=v.k1
v.a.toString
v.k1=x.a(d.$3(t,u,new G.alX()))},
H(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.gfL(),n=q.dx
n=n==null?p:n.aj(0,o.gp(o))
x=q.dy
x=x==null?p:x.aj(0,o.gp(o))
w=q.fr
w=w==null?p:w.aj(0,o.gp(o))
v=q.fx
v=v==null?p:v.aj(0,o.gp(o))
u=q.fy
u=u==null?p:u.aj(0,o.gp(o))
t=q.go
t=t==null?p:t.aj(0,o.gp(o))
s=q.id
s=s==null?p:s.aj(0,o.gp(o))
r=q.k1
r=r==null?p:r.aj(0,o.gp(o))
return M.by(n,q.a.r,C.l,p,u,w,v,p,t,x,s,r,p)}}
E.mX.prototype={
bp(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
TP(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
rV(d){var x,w,v=Math.sqrt(this.gmM())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gmM(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gl(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
jt(d){var x=new Float64Array(4),w=new E.mX(x)
w.bp(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
V(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gajS(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=C.d.V(g,a4)
x=C.d.V(d,a1)
w=C.d.V(e,a2)
v=C.d.V(f,a3)
u=C.d.V(g,a3)
t=C.d.V(e,a1)
s=C.d.V(f,a4)
r=C.d.V(d,a2)
q=C.d.V(g,a2)
p=C.d.V(f,a1)
o=C.d.V(d,a3)
n=C.d.V(e,a4)
m=C.d.V(g,a1)
l=C.d.V(d,a4)
k=C.d.V(e,a3)
j=C.d.V(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new E.mX(i)},
M(d,e){var x,w=new Float64Array(4),v=new E.mX(w)
v.bp(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
ah(d,e){var x,w=new Float64Array(4),v=new E.mX(w)
v.bp(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
n(d,e,f){this.a[e]=f},
j(d){var x=this.a
return H.c(x[0])+", "+H.c(x[1])+", "+H.c(x[2])+" @ "+H.c(x[3])}}
var z=a.updateTypes(["m8(@)","o6(@)","p8(@)"])
G.alQ.prototype={
$1(d){return new S.m8(y.D.a(d),null)},
$S:z+0}
G.alR.prototype={
$1(d){return new G.jO(y.W.a(d),null)},
$S:77}
G.alS.prototype={
$1(d){return new G.kZ(y.S.a(d),null)},
$S:153}
G.alT.prototype={
$1(d){return new G.kZ(y.S.a(d),null)},
$S:153}
G.alU.prototype={
$1(d){return new G.o6(y.k.a(d),null)},
$S:z+1}
G.alV.prototype={
$1(d){return new G.jO(y.W.a(d),null)},
$S:77}
G.alW.prototype={
$1(d){return new G.p8(y.w.a(d),null)},
$S:z+2}
G.alX.prototype={
$1(d){return new S.m8(y.D.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(P.v,[E.de,E.mX])
x(N.am,[L.jD,K.GL])
x(R.aP,[S.m8,G.o6,G.p8])
w(G.wx,G.yv)
w(G.Sp,G.nV)
x(H.bJ,[G.alQ,G.alR,G.alS,G.alT,G.alU,G.alV,G.alW,G.alX])})()
H.dx(b.typeUniverse,JSON.parse('{"jD":{"am":[],"h":[]},"GL":{"am":[],"h":[]},"m8":{"aP":["f7?"],"aH":["f7?"],"aH.T":"f7?","aP.T":"f7?"},"o6":{"aP":["av"],"aH":["av"],"aH.T":"av","aP.T":"av"},"p8":{"aP":["b4"],"aH":["b4"],"aH.T":"b4","aP.T":"b4"},"wx":{"U":[],"h":[]},"Sp":{"ad":["wx"]}}'))
var y=(function rtii(){var x=H.C
return{D:x("f7"),k:x("av"),S:x("eI"),W:x("cu"),p:x("p<h>"),w:x("b4"),l:x("fK"),N:x("f"),y:x("B"),z:x("@"),K:x("m8?"),E:x("o6?"),h:x("kZ?"),Z:x("jO?"),e:x("p8?")}})();(function constants(){C.LB=new V.aR(115,5,5,5)
C.LC=new V.aR(15,0,0,0)
C.mT=new V.aR(15,15,15,15)
C.LK=new V.aR(5,5,5,5)
C.Kf=new P.y(4292998654)
C.K3=new P.y(4289979900)
C.JT=new P.y(4286698746)
C.JJ=new P.y(4283417591)
C.Jz=new P.y(4280923894)
C.Jm=new P.y(4278430196)
C.Jl=new P.y(4278426597)
C.Jk=new P.y(4278356177)
C.Jj=new P.y(4278351805)
C.Ji=new P.y(4278278043)
C.a_W=new H.bt([50,C.Kf,100,C.K3,200,C.JT,300,C.JJ,400,C.Jz,500,C.Jm,600,C.Jl,700,C.Jk,800,C.Jj,900,C.Ji],H.C("bt<k,y>"))
C.a0C=new E.jZ(C.a_W,4278430196)
C.ig=new P.bV(20,20)
C.FN=new K.dd(C.ig,C.ig,C.ig,C.ig)
C.DR=new X.c5(C.FN,C.u)})()}
$__dart_deferred_initializers__["eIcS6XlmgUsMm2PiG9FDQcCo+MI="] = $__dart_deferred_initializers__.current
