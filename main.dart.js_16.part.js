self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={jR:function jR(d){this.b=null
this.a=d},DA:function DA(){},MT:function MT(){},Dz:function Dz(d,e){this.a=d
this.b=e},Cv:function Cv(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.q=d
_.M=e
_.N=f
_.ah=g
_.ao=h
_.b3=i
_.aH=j
_.bv=_.aP=null
_.aG=k
_.bY=l
_.e6=m
_.dz=null
_.ck=n
_.go=_.fy=_.cU=null
_.id=!1
_.k2=_.k1=null
_.k3=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=o
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},ak6:function ak6(){},ak7:function ak7(d,e,f){this.a=d
this.b=e
this.c=f},
aCV(d,e,f,g){var x
if(C.c.dr(e,new A.ao3())){x=B.a3(e).i("aj<1,fE?>")
x=B.ai(new B.aj(e,new A.ao4(),x),!1,x.i("aA.E"))}else x=null
return new A.Dx(e,f,d,g,x,null)},
dD:function dD(d,e){this.b=d
this.c=e},
hp:function hp(d,e){this.a=d
this.b=e},
Dx:function Dx(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.r=f
_.w=g
_.y=h
_.a=i},
ao3:function ao3(){},
ao4:function ao4(){},
a_l:function a_l(d,e,f,g){var _=this
_.p3=d
_.p4=!1
_.R8=e
_.d=_.c=_.b=_.a=_.cx=_.ch=null
_.e=$
_.f=f
_.r=null
_.w=g
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
awA:function awA(d,e){this.a=d
this.b=e},
awz:function awz(d,e,f){this.a=d
this.b=e
this.c=f},
awB:function awB(){},
awC:function awC(d){this.a=d},
awy:function awy(){},
awx:function awx(){},
awD:function awD(){},
xG:function xG(d,e){this.a=d
this.b=e},
a1_:function a1_(){}},B,J,C,D
A=a.updateHolder(c[22],A)
B=c[0]
J=c[1]
C=c[2]
D=c[31]
A.jR.prototype={
j(d){var x=this.ph(0)
return x+"; default vertical alignment"}}
A.DA.prototype={
j(d){return"TableColumnWidth"}}
A.MT.prototype={
j(d){return"FlexColumnWidth("+B.k6(1)+")"}}
A.Dz.prototype={
j(d){return"TableCellVerticalAlignment."+this.b}}
A.Cv.prototype={
sado(d){var x
if(this.ah.a===0&&!0)return
x=B.hH(y.p,y.w)
this.ah=x
this.U()},
saeq(d){if(this.ao===d)return
this.ao=d
this.U()},
sbr(d,e){if(this.b3===e)return
this.b3=e
this.U()},
sacH(d,e){if(J.e(this.aH,e))return
this.aH=e
this.aC()},
sRg(d){var x,w,v,u=this,t=u.aP
if(t==null?d==null:t===d)return
u.aP=d
t=u.bv
if(t!=null)for(x=t.length,w=0;w<x;++w){v=t[w]
if(v!=null)v.n(0)}t=u.aP
u.bv=t!=null?B.b3(t.length,null,!1,y.G):null},
sm5(d){if(d.k(0,this.aG))return
this.aG=d
this.aC()},
saes(d){if(this.bY===d)return
this.bY=d
this.U()},
sRm(d,e){return},
ed(d){if(!(d.e instanceof A.jR))d.e=new A.jR(C.j)},
Td(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.q
if(e===n&&d===o.M)return
if(d===0||e.length===0){o.M=d
x=n.length
if(x===0)return
for(w=0;w<n.length;n.length===x||(0,B.O)(n),++w){v=n[w]
if(v!=null)o.hq(v)}o.N=0
C.c.sm(o.q,0)
o.U()
return}u=B.cO(y.x)
for(t=0;t<o.N;++t)for(n=t*d,s=0;x=o.M,s<x;++s){r=s+t*x
q=s+n
x=o.q[r]
if(x!=null)x=s>=d||q>=e.length||!J.e(x,e[q])
else x=!1
if(x){x=o.q[r]
x.toString
u.D(0,x)}}for(t=0;n=t*d,n<e.length;){for(s=0;s<d;++s){q=s+n
x=o.M
p=e[q]
if(p!=null)x=s>=x||t>=o.N||!J.e(o.q[s+t*x],p)
else x=!1
if(x)if(!u.A(0,e[q])){x=e[q]
x.toString
o.ed(x)
o.U()
o.mz()
o.az()
o.yr(x)}}++t}u.a1(0,o.gaeW())
o.M=d
o.N=C.f.hN(e.length,d)
o.q=B.ai(e,!0,y.B)
o.U()},
FO(d,e,f){var x=this,w=d+e*x.M,v=x.q[w]
if(v==f)return
if(v!=null)x.hq(v)
C.c.l(x.q,w,f)
if(f!=null)x.fF(f)},
ar(d){var x,w,v,u
this.dl(d)
for(x=this.q,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
if(u!=null)u.ar(d)}},
ad(d){var x,w,v,u,t,s=this
s.cS(0)
x=s.bv
if(x!=null){for(w=x.length,v=0;v<w;++v){u=x[v]
if(u!=null)u.n(0)}s.bv=B.b3(s.aP.length,null,!1,y.G)}for(x=s.q,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){t=x[v]
if(t!=null)J.aRf(t)}},
bg(d){var x,w,v,u
for(x=this.q,w=x.length,v=0;v<x.length;x.length===w||(0,B.O)(x),++v){u=x[v]
if(u!=null)d.$1(u)}},
dO(d){return this.dz},
Nz(d){return this.adn(d)},
adn(d){var x=this
return B.aDY(function(){var w=d
var v=0,u=1,t,s,r,q
return function $async$Nz(e,f){if(e===1){t=f
v=u}while(true)switch(v){case 0:s=0
case 2:if(!(s<x.N)){v=4
break}r=x.M
q=x.q[w+s*r]
v=q!=null?5:6
break
case 5:v=7
return q
case 7:case 6:case 3:++s
v=2
break
case 4:return B.aDp()
case 1:return B.aDq(t)}}},y.x)},
I0(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=y.i,d=B.b3(f.M,0,!1,e),a0=B.b3(f.M,0,!1,e),a1=B.b3(f.M,null,!1,y.s)
for(x=0,w=0;v=f.M,w<v;++w){f.ah.h(0,w)
f.Nz(w)
d[w]=0
a0[w]=0
a1[w]=1;++x}u=a2.b
t=a2.a
if(x>0){s=isFinite(u)?u:t
if(0<s){r=s-0
for(q=0,w=0;w<v;++w){e=a1[w]
if(e!=null){p=r*e/x
e=d[w]
if(e<p){q+=p-e
d[w]=p}}}}else q=0}else if(0<t){o=(t-0)/v
for(w=0;w<v;++w)d[w]=d[w]+o
q=t}else q=0
if(q>u){n=q-u
m=v
while(!0){if(!(n>1e-10&&x>1e-10))break
for(l=0,w=0;w<v;++w){e=a1[w]
if(e!=null){k=d[w]
j=k-n*e/x
i=a0[w]
if(j<=i){n-=k-i
d[w]=i
a1[w]=null;--m}else{n-=k-j
d[w]=j
l+=e}}}x=l}while(!0){if(!(n>1e-10&&m>0))break
o=n/m
for(h=0,w=0;w<v;++w){e=d[w]
k=a0[w]
g=e-k
if(g>0)if(g<=o){n-=g
d[w]=k}else{n-=o
d[w]=e-o;++h}}m=h}}return d},
c3(d){var x,w,v,u,t,s,r,q,p,o=this
if(o.N*o.M===0)return d.bm(C.B)
x=o.I0(d)
w=C.c.wf(x,0,new A.ak6())
for(v=y.L,u=0,t=0;t<o.N;++t){for(s=0,r=0;q=o.M,r<q;++r){p=o.q[r+t*q]
if(p!=null){q=p.e
q.toString
v.a(q)
q=o.bY
switch(q.a){case 3:return C.B
case 0:case 1:case 2:s=Math.max(s,p.fY(B.im(null,x[r])).b)
break
case 4:break}}}u+=s}return d.bm(new B.V(w,u))},
bN(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=y.k.a(B.B.prototype.ga6.call(a0)),a2=a0.N,a3=a0.M
if(a2*a3===0){a0.k1=a1.bm(C.B)
return}x=a0.I0(a1)
w=y.i
v=B.b3(a3,0,!1,w)
switch(a0.b3.a){case 0:v[a3-1]=0
for(u=a3-2;u>=0;--u){t=u+1
v[u]=v[t]+x[t]}a0.cU=new B.bT(v,B.a3(v).i("bT<1>"))
s=C.c.gJ(v)+C.c.gJ(x)
break
case 1:v[0]=0
for(u=1;u<a3;++u){t=u-1
v[u]=v[t]+x[t]}a0.cU=v
s=C.c.gI(v)+C.c.gI(x)
break
default:s=null}t=a0.ck
C.c.sm(t,0)
a0.dz=null
for(r=y.L,q=0,p=0;p<a2;++p,q=e){t.push(q)
o=B.b3(a3,0,!1,w)
for(n=p*a3,m=0,l=!1,k=0,j=0,u=0;u<a3;++u){i=a0.q[u+n]
if(i!=null){h=i.e
h.toString
r.a(h)
g=a0.bY
switch(g.a){case 3:i.co(0,B.im(null,x[u]),!0)
g=a0.e6
g.toString
f=i.tf(g,!0)
g=i.k1
if(f!=null){k=Math.max(k,f)
j=Math.max(j,g.b-f)
o[u]=f
l=!0}else{m=Math.max(m,g.b)
h.a=new B.o(v[u],q)}break
case 0:case 1:case 2:i.co(0,B.im(null,x[u]),!0)
m=Math.max(m,i.k1.b)
break
case 4:break}}}if(l){if(p===0)a0.dz=k
m=Math.max(m,k+j)}for(e=q+m,h=q+k,u=0;u<a3;++u){i=a0.q[u+n]
if(i!=null){g=i.e
g.toString
r.a(g)
d=a0.bY
switch(d.a){case 3:g.a=new B.o(v[u],h-o[u])
break
case 0:g.a=new B.o(v[u],q)
break
case 1:g.a=new B.o(v[u],q+(m-i.k1.b)/2)
break
case 2:g.a=new B.o(v[u],e-i.k1.b)
break
case 4:i.fQ(0,B.im(m,x[u]))
g.a=new B.o(v[u],q)
break}}}}t.push(q)
a0.k1=a1.bm(new B.V(s,q))},
cH(d,e){var x,w,v,u
for(x=this.q.length-1,w=y.r;x>=0;--x){v=this.q[x]
if(v!=null){u=v.e
u.toString
w.a(u)
if(d.lU(new A.ak7(e,u,v),u.a,e))return!0}}return!1},
aT(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
if(k.N*k.M===0){x=k.aH
if(x!=null){w=e.a
v=e.b
u=k.k1.a
x.Qq(d.gbT(d),new B.D(w,v,w+u,v+0),D.ue,D.ue)}return}if(k.aP!=null){t=d.gbT(d)
for(x=e.a,w=e.b,v=k.ck,u=k.gdF(),s=0;s<k.N;++s){r=k.aP
if(r.length<=s)break
r=r[s]
if(r!=null){q=k.bv
if(q[s]==null)q[s]=r.qo(u)
r=k.bv[s]
r.toString
q=v[s]
r.hC(t,new B.o(x,w+q),k.aG.Co(new B.V(k.k1.a,v[s+1]-q)))}}}for(x=y.r,w=e.a,v=e.b,p=0;u=k.q,p<u.length;++p){o=u[p]
if(o!=null){u=o.e
u.toString
u=x.a(u).a
d.cX(o,new B.o(u.a+w,u.b+v))}}if(k.aH!=null){x=k.k1.a
u=k.ck
r=C.c.gI(u)
q=u.length
n=q-1
B.dn(1,n,q,null,null)
m=B.em(u,1,n,B.a3(u).c)
u=k.cU
u.toString
l=J.I6(u,1)
u=k.aH
u.toString
u.Qq(d.gbT(d),new B.D(w,v,w+x,v+r),l,m)}}}
A.dD.prototype={
j(d){var x=""+"TableRow(",w=this.b
if(w!=null)x+=w.j(0)+", "
w=this.c
x=w.length===0?x+"no children":x+B.d(w)
x+=")"
return x.charCodeAt(0)==0?x:x}}
A.hp.prototype={}
A.Dx.prototype={
c0(d){return new A.a_l(D.Sc,B.cO(y.h),this,C.ac)},
aR(d){var x,w,v,u,t=this,s=t.c,r=s.length
s=r!==0?s[0].c.length:0
x=d.X(y.I)
x.toString
x=x.f
w=B.xU(d,null)
v=B.a([],y.n)
u=B.hH(y.p,y.w)
s=new A.Cv(D.So,s,r,u,t.e,x,t.r,w,t.w,null,v,B.au(y.v))
s.gaF()
s.gaN()
s.CW=!1
r=B.a([],y.q)
C.c.sm(r,s.M*s.N)
s.q=r
s.sRg(t.y)
return s},
aX(d,e){var x,w=this
e.sado(null)
e.saeq(w.e)
x=d.X(y.I)
x.toString
e.sbr(0,x.f)
e.sacH(0,w.r)
e.sRg(w.y)
e.sm5(B.xU(d,null))
e.saes(w.w)
e.sRm(0,null)}}
A.a_l.prototype={
gE(){return y.S.a(B.bk.prototype.gE.call(this))},
eZ(d,e){var x,w,v=this,u={}
v.p4=!0
v.ni(d,e)
u.a=-1
x=v.f
x.toString
x=y._.a(x).c
w=B.a3(x).i("aj<1,hp>")
v.p3=B.ai(new B.aj(x,new A.awA(u,v),w),!1,w.i("aA.E"))
v.Ms()
v.p4=!1},
ib(d,e){var x=y.S
x.a(B.bk.prototype.gE.call(this))
if(!(d.e instanceof A.jR))d.e=new A.jR(C.j)
if(!this.p4)x.a(B.bk.prototype.gE.call(this)).FO(e.a,e.b,d)},
ih(d,e,f){},
ip(d,e){y.S.a(B.bk.prototype.gE.call(this)).FO(e.a,e.b,null)},
be(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
h.p4=!0
x=y.O
w=B.u(y.Y,x)
for(v=h.p3,u=v.length,t=0;t<u;++t)v[t].toString
u=C.c.gZ(v)
s=new B.hm(u,new A.awB(),B.a3(v).i("hm<1>"))
r=B.a([],y.R)
for(v=e.c,q=h.R8,p=y.J,o=0;o<v.length;++o){n=v[o]
m=s.t()
l=m?u.gF(u).b:C.Sd
m=n.c
k=m.length
j=B.a(new Array(k),p)
for(i=0;i<k;++i)j[i]=new A.xG(i,o)
r.push(new A.hp(null,h.RC(l,m,q,j)))}for(;s.t();)h.EV(u.gF(u).b,C.dj,q)
for(v=w.gaL(w),u=v.gZ(v),v=new B.hm(u,new A.awC(B.aT(x)),B.p(v).i("hm<t.E>"));v.t();)h.EV(u.gF(u),C.dj,q)
h.p3=r
h.Ms()
q.aI(0)
h.kn(0,e)
h.p4=!1},
Ms(){var x,w,v=y.S.a(B.bk.prototype.gE.call(this)),u=this.p3
u=u.length!==0?J.bu(u[0].b):0
x=this.p3
w=B.a3(x).i("hC<1,G>")
v.Td(u,B.ai(new B.hC(x,new A.awy(),w),!0,w.i("t.E")))},
bg(d){var x,w,v,u
for(x=this.p3,w=B.a3(x),w=w.i("@<1>").a3(w.i("aR")),x=new B.kr(C.c.gZ(x),new A.awD(),C.dK,w.i("kr<1,2>")),v=this.R8,w=w.z[1];x.t();){u=x.d
if(u==null)u=w.a(u)
if(!v.u(0,u))d.$1(u)}},
i9(d){this.R8.D(0,d)
this.jr(d)
return!0}}
A.xG.prototype={
k(d,e){if(e==null)return!1
if(J.a0(e)!==B.F(this))return!1
return e instanceof A.xG&&this.a===e.a&&this.b===e.b},
gv(d){return B.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.a1_.prototype={}
var z=a.updateTypes(["y(dD)","fE?(dD)","hp(dD)","y(hp)","t<G>(hp)","r<aR>(hp)"])
A.ak6.prototype={
$2(d,e){return d+e},
$S:544}
A.ak7.prototype={
$2(d,e){return this.c.by(d,e)},
$S:8}
A.ao3.prototype={
$1(d){return d.b!=null},
$S:z+0}
A.ao4.prototype={
$1(d){return d.b},
$S:z+1}
A.awA.prototype={
$1(d){var x,w,v,u={}
u.a=0
x=this.a;++x.a
w=d.c
v=B.a3(w).i("aj<1,aR>")
return new A.hp(null,B.ai(new B.aj(w,new A.awz(u,x,this.b),v),!1,v.i("aA.E")))},
$S:z+2}
A.awz.prototype={
$1(d){return this.c.r5(d,new A.xG(this.a.a++,this.b.a))},
$S:545}
A.awB.prototype={
$1(d){return!0},
$S:z+3}
A.awC.prototype={
$1(d){return!this.a.u(0,d)},
$S:546}
A.awy.prototype={
$1(d){return J.dV(d.b,new A.awx(),y.x)},
$S:z+4}
A.awx.prototype={
$1(d){var x=d.gE()
x.toString
return y.x.a(x)},
$S:547}
A.awD.prototype={
$1(d){return d.b},
$S:z+5};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(A.jR,B.ew)
v(B.z,[A.DA,A.dD,A.hp,A.a1_])
w(A.MT,A.DA)
w(A.Dz,B.mu)
w(A.Cv,B.G)
v(B.hw,[A.ak6,A.ak7])
w(A.Dx,B.az)
v(B.bY,[A.ao3,A.ao4,A.awA,A.awz,A.awB,A.awC,A.awy,A.awx,A.awD])
w(A.a_l,B.bk)
w(A.xG,A.a1_)
x(A.a1_,B.ar)})()
B.dt(b.typeUniverse,JSON.parse('{"jR":{"ew":[],"cR":[]},"MT":{"DA":[]},"Dz":{"T":[]},"Cv":{"G":[],"B":[],"S":[],"an":[]},"Dx":{"az":[],"i":[]},"a_l":{"bk":[],"aR":[],"a2":[]}}'))
var y=(function rtii(){var x=B.E
return{k:x("as"),r:x("ew"),v:x("df"),I:x("fF"),h:x("aR"),R:x("n<hp>"),J:x("n<xG>"),n:x("n<Y>"),q:x("n<G?>"),O:x("r<aR>"),Y:x("kC"),x:x("G"),S:x("Cv"),_:x("Dx"),L:x("jR"),w:x("DA"),i:x("Y"),p:x("l"),G:x("mR?"),B:x("G?"),s:x("Y?")}})();(function constants(){var x=a.makeConstList
D.eO=new A.MT()
D.a9Z=B.a(x([]),B.E("n<dD>"))
D.Sc=B.a(x([]),y.R)
D.ue=B.a(x([]),y.n)
D.So=B.a(x([]),y.q)
D.aa1=new A.Dz(0,"top")
D.n7=new A.Dz(1,"middle")})()}
$__dart_deferred_initializers__["sz+/kj6bg+R6lija7y3A6/12TjE="] = $__dart_deferred_initializers__.current
