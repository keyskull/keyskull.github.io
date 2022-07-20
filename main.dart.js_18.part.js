self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aIl(d,e,f,g){return new A.O1(f,d,e,g,null)},
b20(d,e,f,g,h){var x=null,w=B.a3(d).i("aj<1,di>")
return B.eF(B.ai(new B.aj(d,new A.ayX(!0,e,f,g),w),!0,w.i("aA.E")),x,x,x,x)},
O1:function O1(d,e,f,g,h){var _=this
_.c=d
_.e=e
_.r=f
_.x=g
_.a=h},
O0:function O0(d,e,f,g){var _=this
_.e=d
_.b=e
_.c=f
_.a=g},
ayX:function ayX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayW:function ayW(d,e){this.a=d
this.b=e},
b3k(d,e,f){var x={},w=y.c
x.a=B.a([new A.i0(d)],w)
if(d.length===0)return B.a([],w)
D.c.a1(e,new A.azT(x,f))
return x.a},
hb:function hb(){},
hK:function hK(){},
i0:function i0(d){this.a=d},
np:function np(){},
aeQ:function aeQ(){},
azT:function azT(d,e){this.a=d
this.b=e},
Ml:function Ml(){},
a8g:function a8g(d,e,f){this.a=d
this.b=e
this.c=f},
zG:function zG(d,e,f){this.d=d
this.b=e
this.a=f},
Um:function Um(){},
apx:function apx(d,e,f){this.a=d
this.b=e
this.c=f},
wr:function wr(d,e){this.b=d
this.a=e}},C,B,D,E
A=a.updateHolder(c[20],A)
C=c[47]
B=c[0]
D=c[2]
E=c[23]
A.O1.prototype={
G(d,e){var x,w=this,v=null,u=A.b3k(w.c,C.QW,C.Fl),t=B.a5(e).R8.z
t=t==null?v:t.b7(0,w.r)
x=B.a5(e).R8.z
x=x==null?v:x.b7(0,w.r).adT(C.a_D,D.Db).b7(0,v)
return B.aCW(A.b20(u,x,w.e,t,!0),v,v,D.bt,!0,v,v,w.x,v,v,1,D.aH)}}
A.O0.prototype={}
A.hb.prototype={
k(d,e){if(e==null)return!1
return this.i3(e)},
i3(d){return d instanceof A.hb&&d.a===this.a}}
A.hK.prototype={
k(d,e){if(e==null)return!1
return this.i3(e)},
i3(d){return d instanceof A.hK&&this.yD(d)&&d.b===this.b}}
A.i0.prototype={
j(d){return"TextElement: '"+this.a+"'"},
k(d,e){if(e==null)return!1
return e instanceof A.i0&&this.yD(e)},
i3(d){return d instanceof A.i0&&this.yD(d)}}
A.np.prototype={}
A.aeQ.prototype={}
A.Ml.prototype={
ld(d,e,f){var x=B.a([],y.c)
D.c.a1(e,new A.a8g(this,x,f))
return x}}
A.zG.prototype={
j(d){return"EmailElement: '"+this.d+"' ("+this.a+")"},
k(d,e){if(e==null)return!1
return this.i3(e)},
i3(d){return d instanceof A.zG&&this.yC(d)&&d.d===this.d}}
A.Um.prototype={
ld(d,e,f){var x=B.a([],y.c)
D.c.a1(e,new A.apx(this,f,x))
return x}}
A.wr.prototype={
j(d){return"LinkElement: '"+this.b+"' ("+this.a+")"},
k(d,e){if(e==null)return!1
return e instanceof A.wr&&this.yC(e)},
i3(d){return d instanceof A.wr&&this.yC(d)}}
var z=a.updateTypes(["~(hb)","di(hb)","~(np)"])
A.ayX.prototype={
$1(d){var x,w,v=null
if(d instanceof A.hK){x=d.a
w=B.TP(v)
w.ag=new A.ayW(this.c,d)
return new A.O0(B.uT(B.aCW(B.eF(v,w,v,this.b,x),v,v,v,v,v,v,v,v,v,v,v),D.cc,v,v,v),D.er,v,v)}else return B.eF(v,v,v,this.d,d.a)},
$S:z+1}
A.ayW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.azT.prototype={
$1(d){var x=this.a
x.a=d.ld(0,x.a,this.b)},
$S:z+2}
A.a8g.prototype={
$1(d){var x,w,v,u,t,s=this
if(d instanceof A.i0){x=$.aPn()
w=d.a
v=x.di(w)
if(v==null)s.b.push(d)
else{x=v.b
u=x[0]
u.toString
t=D.b.j9(w,u,"")
w=x[1]
u=w
if((u==null?null:u.length!==0)===!0){w=w
w.toString
s.b.push(new A.i0(w))}x=x[2]
w=x
if((w==null?null:w.length!==0)===!0){x=x
x.toString
x=D.b.j9(x,B.aa("mailto:",!0,!1,!1),"")
s.b.push(new A.zG(x,"mailto:"+x,x))}if(t.length!==0)D.c.H(s.b,s.a.ld(0,B.a([new A.i0(t)],y.c),s.c))}}else s.b.push(d)},
$S:z+0}
A.apx.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=this
if(d instanceof A.i0){x=$.aQ8()
w=d.a
v=x.di(w)
if(v==null)o.c.push(d)
else{x=v.b
u=x[0]
u.toString
t=D.b.j9(w,u,"")
w=x[1]
u=w
if((u==null?null:u.length!==0)===!0){w=w
w.toString
o.c.push(new A.i0(w))}x=x[2]
w=x
if((w==null?null:w.length!==0)===!0){s=x
x=s.length-1
w=s[x]
if(w==="."){s=D.b.L(s,0,x)
r="."}else r=null
if(!D.b.b_(s,$.aPK()))q="http://"+s
else q=s
p=D.b.j9(s,B.aa("https?://",!0,!1,!1),"")
x=o.c
x.push(new A.wr(q,p))
if(r!=null)x.push(new A.i0(r))}if(t.length!==0)D.c.H(o.c,o.a.ld(0,B.a([new A.i0(t)],y.c),o.b))}}else o.c.push(d)},
$S:z+0};(function aliases(){var x=A.hb.prototype
x.yD=x.i3
x=A.hK.prototype
x.yC=x.i3})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.O1,B.aw)
x(A.O0,E.iV)
w(B.bY,[A.ayX,A.azT,A.a8g,A.apx])
x(A.ayW,B.fc)
w(B.z,[A.hb,A.np,A.aeQ])
w(A.hb,[A.hK,A.i0])
w(A.np,[A.Ml,A.Um])
w(A.hK,[A.zG,A.wr])})()
B.dt(b.typeUniverse,JSON.parse('{"O1":{"aw":[],"i":[]},"O0":{"iV":[],"iF":[],"di":[]},"hK":{"hb":[]},"i0":{"hb":[]},"Ml":{"np":[]},"zG":{"hK":[],"hb":[]},"Um":{"np":[]},"wr":{"hK":[],"hb":[]}}'))
var y={c:B.E("n<hb>")};(function constants(){var x=a.makeConstList
C.Fl=new A.aeQ()
C.FP=new A.Um()
C.F4=new A.Ml()
C.QW=B.a(x([C.FP,C.F4]),B.E("n<np>"))
C.Ir=new B.A(4286755327)
C.Ie=new B.A(4282682111)
C.I7=new B.A(4280908287)
C.I6=new B.A(4280902399)
C.a_r=new B.bE([100,C.Ir,200,C.Ie,400,C.I7,700,C.I6],B.E("bE<l,A>"))
C.a_D=new B.AW(C.a_r,4282682111)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"b7F","aPn",()=>B.aa("^(.*?)((mailto:)?[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z][A-Z]+)",!1,!0,!1))
x($,"b8P","aQ8",()=>B.aa("^(.*?)((?:https?:\\/\\/|www\\.)[^\\s/$.?#].[^\\s]*)",!1,!0,!1))
x($,"b8g","aPK",()=>B.aa("^(https?:\\/\\/)",!1,!1,!1))})()}
$__dart_deferred_initializers__["zN4xJCl70Wqo0vmKL0za2z/idR0="] = $__dart_deferred_initializers__.current
