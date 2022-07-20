self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aHu(d){var x=J.ah(d)
return new A.dx(x.h(d,"id"),x.h(d,"title"),x.h(d,"created_timestamp"))},
dx:function dx(d,e,f){this.a=d
this.b=e
this.c=f},
aGK(d,e,f,g,h){return new A.ik(g,h,d,f,e,null)},
ik:function ik(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.y=h
_.a=i},
Jh:function Jh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.z=g
_.Q=h
_.a=i},
mO:function mO(d,e){this.a=d
this.b=e},
p9:function p9(d,e){this.a=d
this.b=e},
qc:function qc(d,e){this.a=d
this.b=e},
yb:function yb(d,e,f,g,h,i,j,k){var _=this
_.r=d
_.y=e
_.z=f
_.Q=g
_.c=h
_.d=i
_.e=j
_.a=k},
UN:function UN(d,e,f){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.dg$=d
_.bi$=e
_.a=null
_.b=f
_.c=null},
aqP:function aqP(){},
aqQ:function aqQ(){},
aqR:function aqR(){},
aqS:function aqS(){},
aqT:function aqT(){},
aqU:function aqU(){},
aqV:function aqV(){},
aqW:function aqW(){},
aJn(){var x=new Float64Array(4)
x[3]=1
return new A.nO(x)},
nO:function nO(d){this.a=d},
aHl(d){var x,w=D.e.aU(d/1000)
if(Math.abs(w)<=864e13)x=!1
else x=!0
if(x)B.U(B.bp("DateTime is outside valid range: "+w,null))
B.f3(!1,"isUtc",y.y)
return new B.dg(w,!1)},
aVE(d,e,f){return new G.kl(e,f,null,d)}},B,C,D,E,F,J,G
A=a.updateHolder(c[21],A)
B=c[0]
C=c[43]
D=c[2]
E=c[28]
F=c[24]
J=c[1]
G=c[25]
A.dx.prototype={
jc(){return B.ay(["id",this.a,"title",this.b,"created_timestamp",this.c,"brief",""],y.N,y.z)}}
A.ik.prototype={
G(d,e){var x,w,v,u,t,s,r=this,q=null
if(B.CJ(e))x=new B.bS(C.Ka,r.c,q)
else x=D.cK
w=B.CJ(e)?C.K9:E.oU
v=B.CJ(e)?new A.Jh(B.by(D.b.L(r.f,0,1),q,q,q,q),C.a_G,new F.uV("",1,q),15,30,q):q
u=r.d
t=y.p
s=B.cX(B.a([B.by("Author: "+r.f,q,B.a5(e).R8.x,q,q),B.by(u,q,B.a5(e).R8.b,q,q)],t),D.aY,D.P,D.S)
return B.tl(B.el(D.i2,B.a([x,B.O3(w,!0,v,r.y,B.cX(B.a([new B.bS(C.K5,B.by(u,q,B.a5(e).R8.x,q,q),q),B.by("\nDate: "+r.r,q,q,q,q)],t),D.aY,D.P,D.S),s,q)],t),D.ar),q,E.f2,C.mV)}}
A.Jh.prototype={
ga7e(){var x=this.z
return 2*x},
ga73(){var x=this.Q
return 2*x},
G(d,e){var x,w,v,u,t,s=this,r=null,q=B.a5(e),p=q.RG.w.c9(r),o=s.d
switch(B.wh(o).a){case 0:p=p.c9(q.ax)
break
case 1:p=p.c9(q.ay)
break}x=s.ga7e()
w=s.ga73()
v=A.aVE(D.ch,s.f,r)
u=e.X(y.l).f.nX(1)
t=q.rx.c9(p.b)
t=B.io(new B.fL(u,B.Nq(B.mX(s.c,r,D.bt,!0,p,r,r,D.aH),t,r),r),r,r)
return new A.yb(t,new B.c7(o,v,r,r,r,r,D.nZ),r,new B.as(x,w,x,w),D.ak,D.U,r,r)}}
A.mO.prototype={
dB(d){return B.a2F(this.a,this.b,d)}}
A.p9.prototype={
dB(d){var x=B.th(this.a,this.b,d)
x.toString
return x}}
A.qc.prototype={
dB(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.ep(new Float64Array(3)),a3=new B.ep(new Float64Array(3)),a4=A.aJn(),a5=A.aJn(),a6=new B.ep(new Float64Array(3)),a7=new B.ep(new Float64Array(3))
this.a.O7(a2,a4,a6)
this.b.O7(a3,a5,a7)
x=1-a8
w=a2.jk(x).P(0,a3.jk(a8))
v=a4.jk(x).P(0,a5.jk(a8))
u=new Float64Array(4)
t=new A.nO(u)
t.bh(v)
t.rm(0)
s=a6.jk(x).P(0,a7.jk(a8))
x=new Float64Array(16)
v=new B.bb(x)
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
v.bn(0,s)
return v}}
A.yb.prototype={
al(){return new A.UN(null,null,D.o)}}
A.UN.prototype={
l0(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.K
v.CW=x.a(d.$3(t,u,new A.aqP()))
t=v.cx
v.a.toString
w=y.Z
v.cx=w.a(d.$3(t,u,new A.aqQ()))
t=y.h
v.cy=t.a(d.$3(v.cy,v.a.y,new A.aqR()))
v.db=t.a(d.$3(v.db,v.a.z,new A.aqS()))
v.dx=y.E.a(d.$3(v.dx,v.a.Q,new A.aqT()))
t=v.dy
v.a.toString
v.dy=w.a(d.$3(t,u,new A.aqU()))
t=v.fr
v.a.toString
v.fr=y.e.a(d.$3(t,u,new A.aqV()))
t=v.fx
v.a.toString
v.fx=x.a(d.$3(t,u,new A.aqW()))},
G(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.gf8(),n=q.CW
n=n==null?p:n.a4(0,o.gp(o))
x=q.cx
x=x==null?p:x.a4(0,o.gp(o))
w=q.cy
w=w==null?p:w.a4(0,o.gp(o))
v=q.db
v=v==null?p:v.a4(0,o.gp(o))
u=q.dx
u=u==null?p:u.a4(0,o.gp(o))
t=q.dy
t=t==null?p:t.a4(0,o.gp(o))
s=q.fr
s=s==null?p:s.a4(0,o.gp(o))
r=q.fx
r=r==null?p:r.a4(0,o.gp(o))
return B.bz(n,q.a.r,D.l,p,u,w,v,p,t,x,s,r,p)}}
A.nO.prototype={
bh(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
Tg(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
rm(d){var x,w,v=Math.sqrt(this.gmu())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gmu(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gm(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
jk(d){var x=new Float64Array(4),w=new A.nO(x)
w.bh(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
V(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gal_(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=D.e.V(g,a4)
x=D.e.V(d,a1)
w=D.e.V(e,a2)
v=D.e.V(f,a3)
u=D.e.V(g,a3)
t=D.e.V(e,a1)
s=D.e.V(f,a4)
r=D.e.V(d,a2)
q=D.e.V(g,a2)
p=D.e.V(f,a1)
o=D.e.V(d,a3)
n=D.e.V(e,a4)
m=D.e.V(g,a1)
l=D.e.V(d,a4)
k=D.e.V(e,a3)
j=D.e.V(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.nO(i)},
P(d,e){var x,w=new Float64Array(4),v=new A.nO(w)
v.bh(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a9(d,e){var x,w=new Float64Array(4),v=new A.nO(w)
v.bh(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
l(d,e,f){this.a[e]=f},
j(d){var x=this.a
return B.d(x[0])+", "+B.d(x[1])+", "+B.d(x[2])+" @ "+B.d(x[3])}}
var z=a.updateTypes(["mO(@)","p9(@)","qc(@)"])
A.aqP.prototype={
$1(d){return new A.mO(y.D.a(d),null)},
$S:z+0}
A.aqQ.prototype={
$1(d){return new B.kq(y.W.a(d),null)},
$S:90}
A.aqR.prototype={
$1(d){return new B.lA(y.S.a(d),null)},
$S:182}
A.aqS.prototype={
$1(d){return new B.lA(y.S.a(d),null)},
$S:182}
A.aqT.prototype={
$1(d){return new A.p9(y.k.a(d),null)},
$S:z+1}
A.aqU.prototype={
$1(d){return new B.kq(y.W.a(d),null)},
$S:90}
A.aqV.prototype={
$1(d){return new A.qc(y.w.a(d),null)},
$S:z+2}
A.aqW.prototype={
$1(d){return new A.mO(y.D.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.z,[A.dx,A.nO])
x(B.aw,[A.ik,A.Jh])
x(B.aK,[A.mO,A.p9,A.qc])
w(A.yb,B.Ai)
w(A.UN,B.mP)
x(B.bY,[A.aqP,A.aqQ,A.aqR,A.aqS,A.aqT,A.aqU,A.aqV,A.aqW])})()
B.dt(b.typeUniverse,JSON.parse('{"ik":{"aw":[],"i":[]},"Jh":{"aw":[],"i":[]},"mO":{"aK":["fC?"],"aB":["fC?"],"aB.T":"fC?","aK.T":"fC?"},"p9":{"aK":["as"],"aB":["as"],"aB.T":"as","aK.T":"as"},"qc":{"aK":["bb"],"aB":["bb"],"aB.T":"bb","aK.T":"bb"},"yb":{"X":[],"i":[]},"UN":{"ak":["yb"]}}'))
var y=(function rtii(){var x=B.E
return{D:x("fC"),k:x("as"),S:x("fE"),W:x("cx"),p:x("n<i>"),w:x("bb"),l:x("fL"),N:x("h"),y:x("y"),z:x("@"),K:x("mO?"),E:x("p9?"),h:x("lA?"),Z:x("kq?"),e:x("qc?")}})();(function constants(){C.K5=new B.aI(10,0,0,0)
C.K9=new B.aI(115,5,5,5)
C.Ka=new B.aI(15,0,0,0)
C.IG=new B.A(4292998654)
C.Ix=new B.A(4289979900)
C.Io=new B.A(4286698746)
C.Ig=new B.A(4283417591)
C.I8=new B.A(4280923894)
C.HX=new B.A(4278430196)
C.HW=new B.A(4278426597)
C.HV=new B.A(4278356177)
C.HU=new B.A(4278351805)
C.HT=new B.A(4278278043)
C.ZY=new B.bE([50,C.IG,100,C.Ix,200,C.Io,300,C.Ig,400,C.I8,500,C.HX,600,C.HW,700,C.HV,800,C.HU,900,C.HT],B.E("bE<l,A>"))
C.a_G=new B.iA(C.ZY,4278430196)
C.hs=new B.c0(20,20)
C.El=new B.de(C.hs,C.hs,C.hs,C.hs)
C.mV=new B.c8(C.El,D.t)})()}
$__dart_deferred_initializers__["r5F22TmlFRqFbSZiyOgSbES6ffk="] = $__dart_deferred_initializers__.current
