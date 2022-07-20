self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Ec:function Ec(d,e){this.a=d
this.b=e},Ed:function Ed(d,e){this.a=d
this.b=e},G6:function G6(d,e,f){this.a=d
this.b=e
this.c=f},l7:function l7(d,e,f){var _=this
_.e=0
_.c4$=d
_.au$=e
_.a=f},Sn:function Sn(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.q=d
_.M=e
_.N=f
_.ah=g
_.ao=h
_.b3=i
_.aH=j
_.aP=k
_.bv=l
_.aG=!1
_.bY=m
_.bZ$=n
_.aa$=o
_.bB$=p
_.go=_.fy=null
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
_.ay=q
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},Zb:function Zb(){},Zc:function Zc(){},
aqE(d,e,f,g,h){return new A.UD(d,h,g,f,e,null)},
UD:function UD(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.x=f
_.y=g
_.c=h
_.a=i}},C,B,D
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[27]
A.Ec.prototype={
j(d){return"WrapAlignment."+this.b}}
A.Ed.prototype={
j(d){return"WrapCrossAlignment."+this.b}}
A.G6.prototype={}
A.l7.prototype={}
A.Sn.prototype={
saeI(d,e){if(this.q===e)return
this.q=e
this.U()},
shj(d){if(this.M===d)return
this.M=d
this.U()},
sU1(d,e){if(this.N===e)return
this.N=e
this.U()},
sajZ(d){if(this.ah===d)return
this.ah=d
this.U()},
sak2(d){if(this.ao===d)return
this.ao=d
this.U()},
saeb(d){if(this.b3===d)return
this.b3=d
this.U()},
ed(d){if(!(d.e instanceof A.l7))d.e=new A.l7(null,null,C.j)},
dO(d){return this.CA(d)},
A1(d){switch(this.q.a){case 0:return d.a
case 1:return d.b}},
A0(d){switch(this.q.a){case 0:return d.b
case 1:return d.a}},
a3C(d,e){switch(this.q.a){case 0:return new B.o(d,e)
case 1:return new B.o(e,d)}},
a3p(d,e,f){var x=e-f
switch(this.b3.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
c3(d){return this.a1v(d)},
a1v(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.q.a){case 0:x=d.b
w=new B.as(0,x,0,1/0)
break
case 1:x=d.d
w=new B.as(0,1/0,0,x)
break
default:w=null
x=0}v=k.aa$
for(u=B.p(k).i("ax.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aH1(v,w)
n=k.A1(o)
m=k.A0(o)
if(p>0&&r+n+k.N>x){t=Math.max(t,r)
s+=q+k.ao
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.N;++p
l=v.e
l.toString
v=u.a(l).au$}s+=q
t=Math.max(t,r)
switch(k.q.a){case 0:return d.bm(new B.V(t,s))
case 1:return d.bm(new B.V(s,t))}},
bN(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.B.prototype.ga6.call(b1))
b1.aG=!1
x=b1.aa$
if(x==null){b1.k1=new B.V(C.f.K(0,b2.a,b2.b),C.f.K(0,b2.c,b2.d))
return}switch(b1.q.a){case 0:w=b2.b
v=new B.as(0,w,0,1/0)
u=b1.aH===C.aa&&!0
t=b1.aP===C.nj&&!0
break
case 1:w=b2.d
v=new B.as(0,1/0,0,w)
u=b1.aP===C.nj&&!0
t=b1.aH===C.aa&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.N
r=b1.ao
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.co(0,v,!0)
j=x.k1
j.toString
i=b1.A1(j)
j=x.k1
j.toString
h=b1.A0(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.G6(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.au$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.G6(m,l,k))}g=q.length
switch(b1.q.a){case 0:j=b1.k1=b2.bm(new B.V(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k1=b2.bm(new B.V(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.aG=f<o||e<n
d=Math.max(0,e-n)
switch(b1.ah.a){case 0:a0=0
a1=0
break
case 1:a0=d
a1=0
break
case 2:a0=d/2
a1=0
break
case 3:a1=g>1?d/(g-1):0
a0=0
break
case 4:a1=d/g
a0=a1/2
break
case 5:a1=d/(g+1)
a0=a1
break
default:a0=0
a1=0}a1+=r
a2=t?e-a0:a0
x=b1.aa$
for(a3=0;a3<g;++a3){a4=q[a3]
l=a4.b
k=a4.c
a5=Math.max(0,f-a4.a)
switch(b1.M.a){case 0:a6=0
a7=0
break
case 1:a6=a5
a7=0
break
case 2:a6=a5/2
a7=0
break
case 3:a7=k>1?a5/(k-1):0
a6=0
break
case 4:a7=a5/k
a6=a7/2
break
case 5:a7=a5/(k+1)
a6=a7
break
default:a6=0
a7=0}a7+=s
a8=u?f-a6:a6
if(t)a2-=l
for(;x!=null;){j=x.e
j.toString
p.a(j)
if(j.e!==a3)break
a9=x.k1
a9.toString
i=b1.A1(a9)
a9=x.k1
a9.toString
b0=b1.a3p(t,l,b1.A0(a9))
if(u)a8-=i
j.a=b1.a3C(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.au$}a2=t?a2-a1:a2+(l+a1)}},
cH(d,e){return this.vV(d,e)},
aT(d,e){var x,w=this,v=w.aG&&w.bv!==C.l,u=w.bY
if(v){v=B.b(w.CW,"_needsCompositing")
x=w.k1
u.saQ(0,d.kb(v,e,new B.D(0,0,0+x.a,0+x.b),w.gO8(),w.bv,u.a))}else{u.saQ(0,null)
w.mb(d,e)}},
n(d){this.bY.saQ(0,null)
this.km(0)}}
A.Zb.prototype={
ar(d){var x,w,v
this.dl(d)
x=this.aa$
for(w=y.e;x!=null;){x.ar(d)
v=x.e
v.toString
x=w.a(v).au$}},
ad(d){var x,w,v
this.cS(0)
x=this.aa$
for(w=y.e;x!=null;){x.ad(0)
v=x.e
v.toString
x=w.a(v).au$}}}
A.Zc.prototype={}
A.UD.prototype={
aR(d){var x=this,w=B.ee(d)
w=new A.Sn(C.aB,x.f,x.r,D.C,x.x,x.y,w,C.dF,C.l,B.au(y.h),0,null,null,B.au(y.d))
w.gaF()
w.gaN()
w.CW=!1
w.H(0,null)
return w},
aX(d,e){var x,w=this
e.saeI(0,C.aB)
e.shj(w.f)
e.sU1(0,w.r)
e.sajZ(D.C)
e.sak2(w.x)
e.saeb(w.y)
x=B.ee(d)
if(e.aH!=x){e.aH=x
e.U()}if(e.aP!==C.dF){e.aP=C.dF
e.U()}if(C.l!==e.bv){e.bv=C.l
e.aC()
e.az()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.mu,[A.Ec,A.Ed])
u(A.G6,B.z)
u(A.l7,B.tz)
u(A.Zb,B.G)
u(A.Zc,A.Zb)
u(A.Sn,A.Zc)
u(A.UD,B.eS)
x(A.Zb,B.ax)
w(A.Zc,B.d9)})()
B.dt(b.typeUniverse,JSON.parse('{"l7":{"ew":[],"fe":["G"],"cR":[]},"Ec":{"T":[]},"Ed":{"T":[]},"Sn":{"d9":["G","l7"],"G":[],"ax":["G","l7"],"B":[],"S":[],"an":[],"ax.1":"l7","d9.1":"l7","ax.0":"G"},"UD":{"eS":[],"az":[],"i":[]}}'))
var y={a:B.E("as"),h:B.E("lx"),d:B.E("df"),l:B.E("n<G6>"),e:B.E("l7")};(function constants(){D.C=new A.Ec(0,"start")
D.a8H=new A.Ec(2,"center")
D.DA=new A.Ed(0,"start")
D.DB=new A.Ed(2,"center")})()}
$__dart_deferred_initializers__["eoMbzV40Y+tDaj817KSUbFQOCCQ="] = $__dart_deferred_initializers__.current
