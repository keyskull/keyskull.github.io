self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aAy(d,e){var w=0,v=A.M(x.s),u,t
var $async$aAy=A.H(function(f,g){if(f===1)return A.J(g,v)
while(true)switch(w){case 0:w=3
return A.Q(B.b2y(d,e),$async$aAy)
case 3:t=g
if($.aFh()){u=A.Jj(t,d,null,null)
w=1
break}else{u=A.aH4(t,d)
w=1
break}case 1:return A.K(u,v)}})
return A.L($async$aAy,v)},
b2y(d,e){var w,v=new A.ad($.ae,x.l),u=new A.aO(v,x.b),t=$.aQl().$0()
C.iG.E9(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
A.bW(t,"progress",new B.azj(e),!1,w)
A.bW(t,"error",new B.azk(u,d),!1,w)
A.bW(t,"load",new B.azl(t,u,d),!1,w)
t.send()
return v},
b2L(d,e){var w,v={},u=new A.ad($.ae,e.i("ad<0>"))
v.a=!0
w=d.$1(new B.azu(v,new A.GB(u,e.i("GB<0>")),e))
v.a=!1
if(w!=null)throw A.c(A.cM(w))
return u},
azx:function azx(){},
azj:function azj(d){this.a=d},
azk:function azk(d,e){this.a=d
this.b=e},
azl:function azl(d,e,f){this.a=d
this.b=e
this.c=f},
azu:function azu(d,e,f){this.a=d
this.b=e
this.c=f},
b49(d,e){if($.aP())return B.aAy(d.j(0),e)
else return B.b2L(new B.aAB(d,e),x.s)},
aAB:function aAB(d,e){this.a=d
this.b=e},
uV:function uV(d,e,f){this.a=d
this.b=e
this.c=f},
agB:function agB(d){this.a=d},
ku:function ku(d,e){this.a=d
this.b=e},
WV:function WV(){}},A,J,C
B=a.updateHolder(c[24],B)
A=c[0]
J=c[1]
C=c[2]
B.uV.prototype={
oq(d){return new A.bx(this,x.B)},
r7(d,e,f){var w=null,v=A.aCQ(w,w,w,x.h)
return A.aCo(new A.hn(v,A.p(v).i("hn<1>")),this.yQ(e,f,v),e.a,w,e.b)},
yQ(d,e,f){return this.a6V(d,e,f)},
a6V(d,e,f){var w=0,v=A.M(x.s),u,t,s
var $async$yQ=A.H(function(g,h){if(g===1)return A.J(h,v)
while(true)switch(w){case 0:t=A.apq().R(d.a)
s=B.b49(t,new B.agB(f))
u=s
w=1
break
case 1:return A.K(u,v)}})
return A.L($async$yQ,v)},
k(d,e){if(e==null)return!1
if(J.a0(e)!==A.F(this))return!1
return e instanceof B.uV&&e.a===this.a&&e.b===this.b},
gv(d){return A.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
B.ku.prototype={}
B.WV.prototype={}
var z=a.updateTypes([])
B.azx.prototype={
$0(){return new XMLHttpRequest()},
$S:504}
B.azj.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:45}
B.azk.prototype={
$1(d){this.a.ho(new A.uo(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:45}
B.azl.prototype={
$1(d){var w,v,u=this,t=u.a,s=t.status
s.toString
w=s>=200&&s<300
v=s>307&&s<400
if(!(w||s===0||s===304||v)){u.b.ho(new A.uo(y.a+u.c+"\nServer response code: "+s))
return}u.b.c8(0,A.cQ(x.n.a(A.aDJ(t.response)),0,null))},
$S:45}
B.azu.prototype={
$1(d){var w="operation failed"
if(d==null)if(this.a.a)throw A.c(A.cM(w))
else this.b.ho(new A.EQ(w))
else this.b.c8(0,d)},
$S(){return this.c.i("~(0?)")}}
B.aAB.prototype={
$1(d){d.$1(new A.Ab(this.a.j(0),this.b))
return null},
$S:505}
B.agB.prototype={
$2(d,e){this.a.D(0,new B.ku(d,e))},
$S:181};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(B.azx,A.fc)
u(A.bY,[B.azj,B.azk,B.azl,B.azu,B.aAB])
v(B.uV,A.ef)
v(B.agB,A.hw)
v(B.WV,A.z)
v(B.ku,B.WV)
w(B.WV,A.ar)})()
A.dt(b.typeUniverse,JSON.parse('{"uV":{"ef":["aCq"],"ef.T":"aCq"},"aCq":{"ef":["aCq"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:A.E("pc"),s:A.E("hx"),h:A.E("ku"),g:A.E("hg"),B:A.E("bx<uV>"),b:A.E("aO<cT>"),l:A.E("ad<cT>")};(function lazyInitializers(){var w=a.lazy
w($,"b9a","aQl",()=>new B.azx())})()}
$__dart_deferred_initializers__["g+vb18TuYW6iRO0202LTWbrmeSw="] = $__dart_deferred_initializers__.current
