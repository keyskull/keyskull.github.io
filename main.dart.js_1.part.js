self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aPK(d){return $.aPL.bo(0,d.a.b,new A.a5O(d))},
rJ:function rJ(d,e,f,g){var _=this
_.e=null
_.f=d
_.b=e
_.c=f
_.a=g},
a5O:function a5O(d){this.a=d},
a5P:function a5P(d){this.a=d},
a5Q:function a5Q(){},
ji:function ji(d){this.a=d},
Ka:function Ka(d,e){this.a=d
this.b=e},
a5h:function a5h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5g:function a5g(d,e){this.a=d
this.b=e},
a5i:function a5i(d,e,f){this.a=d
this.b=e
this.c=f}},B,C,D,E={a5F:function a5F(d,e){this.a=d
this.b=e}},F,G,H,J,K={
a67(){var x=0,w=P.R(y.c),v,u,t
var $async$a67=P.N(function(d,e){if(d===1)return P.O(e,w)
while(true)switch(x){case 0:u=$.hc
x=3
return P.a7((u==null?$.hc=$.qO():u).mK(null,null),$async$a67)
case 3:t=e
E.eQ(t,$.kL())
v=new K.i1(t)
x=1
break
case 1:return P.P(v,w)}})
return P.Q($async$a67,w)}},L,M,N={a63:function a63(){}},O,P,Q={
aQV(d){var x=new Q.pd(d,$.a_s())
x.a_2(d)
return x},
pd:function pd(d,e){this.e=null
this.b=d
this.a=e},
abu:function abu(d,e){this.a=d
this.b=e},
abt:function abt(d,e){this.a=d
this.b=e},
abv:function abv(d,e){this.a=d
this.b=e},
abs:function abs(d,e){this.a=d
this.b=e},
abw:function abw(d){this.a=d},
abx:function abx(){},
hQ:function hQ(d,e){this.a=d
this.$ti=e}},R,S,T,U,V,W,X={
aPM(){var x=new X.rK()
x.Zm()
return x},
rK:function rK(){},
a6_:function a6_(){},
a5X:function a5X(d){this.a=d},
a5Y:function a5Y(){},
a5Z:function a5Z(){},
a5W:function a5W(){},
a5V:function a5V(){}},Y={tm:function tm(d,e){this.c=d
this.a=e}},Z
a.setFunctionNamesIfNecessary([A,E,K,N,Q,X,Y])
A=a.updateHolder(c[0],A)
B=c[1]
C=c[2]
D=c[3]
E=a.updateHolder(c[4],E)
F=c[5]
G=c[6]
H=c[7]
J=c[8]
K=a.updateHolder(c[9],K)
L=c[10]
M=c[11]
N=a.updateHolder(c[12],N)
O=c[13]
P=c[14]
Q=a.updateHolder(c[15],Q)
R=c[16]
S=c[17]
T=c[18]
U=c[19]
V=c[20]
W=c[21]
X=a.updateHolder(c[22],X)
Y=a.updateHolder(c[23],Y)
Z=c[24]
E.a5F.prototype={
rL(d,e){return this.agH(0,e)},
agH(d,e){var x=0,w=P.R(y.v),v=this
var $async$rL=P.N(function(f,g){if(f===1)return P.O(g,w)
while(true)switch(x){case 0:if(C.c.u(C.T4,e))throw H.b(P.eg(e,"name","Event name is reserved and cannot be used"))
if(C.b.b6(e,"firebase_"))throw H.b(P.eg(e,"name",'Prefix "firebase_" is reserved and cannot be used.'))
x=2
return P.a7(v.a.x0(0,e,null),$async$rL)
case 2:return P.P(null,w)}})
return P.Q($async$rL,w)},
jv(d,e,f){return this.TC(0,e,f)},
TC(d,e,f){var x=0,w=P.R(y.v),v=this
var $async$jv=P.N(function(g,h){if(g===1)return P.O(h,w)
while(true)switch(x){case 0:x=2
return P.a7(v.a.jv(0,e,f),$async$jv)
case 2:return P.P(null,w)}})
return P.Q($async$jv,w)}}
A.rJ.prototype={
a8k(d){var x=d.$ti.i("jr<bX.T,ji?>")
return P.aTd(new P.jr(new A.a5P(this),d,x),null,new A.a5Q(),x.i("bX.T"))},
j(d){return"FirebaseAuth(app: "+this.f.a.b+")"}}
A.ji.prototype={
j(d){var x="metadata",w=this.a,v=w.c
return C.a7Y.j(0)+"(displayName: "+H.c(v.h(0,"displayName"))+", email: "+H.c(v.h(0,"email"))+", emailVerified: "+H.c(v.h(0,"emailVerified"))+", isAnonymous: "+H.c(v.h(0,"isAnonymous"))+", metadata: "+new Y.al3(J.as(v.h(0,x),"creationTime"),J.as(v.h(0,x),"lastSignInTime")).j(0)+", phoneNumber: "+H.c(v.h(0,"phoneNumber"))+", photoURL: "+H.c(v.h(0,"photoURL"))+", providerData, "+H.c(w.gt9(w))+", refreshToken: "+H.c(v.h(0,"refreshToken"))+", tenantId: "+H.c(v.h(0,"tenantId"))+", uid: "+v.h(0,"uid")+")"}}
Q.pd.prototype={
a_2(d){var x=null,w=d.a.b,v=y.w,u=y.F
C.zh.dI("Auth#registerIdTokenListener",P.aB(["appName",w],v,v),!1,v).aG(0,new Q.abu(this,d),u)
C.zh.dI("Auth#registerAuthStateListener",P.aB(["appName",w],v,v),!1,v).aG(0,new Q.abv(this,d),u)
v=y.t
$.aD5.n(0,w,new P.hL(x,x,v))
$.aD6.n(0,w,new P.hL(x,x,v))
$.ax8.n(0,w,new P.hL(x,x,v))},
Al(d,e){return this.a3X(d,e)},
a3X(d,e){var x=0,w=P.R(y.v),v,u,t,s
var $async$Al=P.N(function(f,g){if(f===1)return P.O(g,w)
while(true)switch(x){case 0:s=$.aD5.h(0,d)
s.toString
v=$.ax7.h(0,d)
v.toString
u=J.as(e,"user")
if(u==null){v.e=null
s.F(0,C.lE)}else{t=new Y.tm(J.a_K(u,y.w,y.b),$.Ft())
v.e=t
s.F(0,new Q.hQ(t,y.e))}return P.P(null,w)}})
return P.Q($async$Al,w)},
At(d,e){return this.a4C(d,e)},
a4C(d,e){var x=0,w=P.R(y.v),v,u,t,s,r
var $async$At=P.N(function(f,g){if(f===1)return P.O(g,w)
while(true)switch(x){case 0:r=$.aD6.h(0,d)
r.toString
v=$.ax8.h(0,d)
v.toString
u=$.ax7.h(0,d)
u.toString
t=J.as(e,"user")
if(t==null){u.e=null
r.F(0,C.lE)
v.F(0,C.lE)}else{s=u.e=new Y.tm(J.a_K(t,y.w,y.b),$.Ft())
u=y.e
r.F(0,new Q.hQ(s,u))
v.F(0,new Q.hQ(s,u))}return P.P(null,w)}})
return P.Q($async$At,w)},
OM(d){return $.ax7.bo(0,d.a.b,new Q.abw(d))},
Gc(d,e){if(d!=null)this.e=new Y.tm(d,$.Ft())
return this},
iw(){var $async$iw=P.N(function(d,e){switch(d){case 2:s=v
x=s.pop()
break
case 1:t=e
x=u}while(true)switch(x){case 0:x=3
v=[1]
return P.h0(P.aEY(r.e),$async$iw,w)
case 3:q=$.ax8.h(0,r.gNM(r).a.b)
q.toString
p=H.t(q).i("hM<1>")
x=4
v=[1]
return P.h0(P.CZ(new P.jr(new Q.abx(),new P.hM(q,p),p.i("jr<bX.T,d5?>"))),$async$iw,w)
case 4:case 1:return P.h0(null,0,w)
case 2:return P.h0(t,1,w)}})
var x=0,w=P.ayI($async$iw,y.k),v,u=2,t,s=[],r=this,q,p
return P.ayL(w)}}
Q.hQ.prototype={}
Y.tm.prototype={}
N.a63.prototype={
gai4(){var x=this.b
if($.a64.h(0,x)!=null&&J.as($.a64.h(0,x),this.c)!=null)return J.as($.a64.h(0,x),this.c)
x=y.b
return P.r(x,x)}}
X.rK.prototype={
wO(d){var x=0,w=P.R(y.b),v
var $async$wO=P.N(function(e,f){if(e===1)return P.O(f,w)
while(true)switch(x){case 0:if($.L==null)N.ay1()
$.L.toString
v=new X.a6_()
$.aGf.n(0,C.e.j(v.gt(v)),v)
$.aA5().aa(C.Y,"Added RoutePathListeners: "+C.e.j(v.gt(v)),null,null)
x=2
return P.a7(K.a67(),$async$wO)
case 2:return P.P(null,w)}})
return P.Q($async$wO,w)},
Zm(){this.wO(0).xz(0,new X.a5W())}}
A.Ka.prototype={
gl5(){var x=$.j8
return x.gul()},
Rs(){var x=this,w=new A.ff(x.a,x.b,null),v=H.bd("controller")
v.b=new P.hL(new A.a5h(x,v,w,null),new A.a5i(x,w,null),y.C)
return J.aMI(v.aT())},
gaI(d){return this.a}}
var z=a.updateTypes(["rJ()","ji?(d5?)","~(et<ji?>)","pd()","d5?(hQ<d5>)","~(ji?)"])
A.a5O.prototype={
$0(){var x=this.a
return new A.rJ(x,x.a.b,"plugins.flutter.io/firebase_auth",$.aHY())},
$S:z+0}
A.a5P.prototype={
$1(d){if(d==null)return null
E.eQ(d,$.Ft())
return new A.ji(d)},
$S:z+1}
A.a5Q.prototype={
$1(d){return d.aU(0)},
$S:z+2}
Q.abu.prototype={
$1(d){d.toString
new A.Ka(d,C.aT).Rs().mP(0,new Q.abt(this.a,this.b))},
$S:162}
Q.abt.prototype={
$1(d){this.a.At(this.b.a.b,d)},
$S:13}
Q.abv.prototype={
$1(d){d.toString
new A.Ka(d,C.aT).Rs().mP(0,new Q.abs(this.a,this.b))},
$S:162}
Q.abs.prototype={
$1(d){this.a.Al(this.b.a.b,d)},
$S:13}
Q.abw.prototype={
$0(){return Q.aQV(this.a)},
$S:z+3}
Q.abx.prototype={
$1(d){return d.a},
$S:z+4}
X.a6_.prototype={
$1(d){var x=$.azy(),w=d.c
x.jv(0,H.fr(H.F(d.d.y3()).a,null),w).aG(0,new X.a5X(d),y.v).l7(new X.a5Y(),new X.a5Z())
x.rL(0,"page_view")},
$S:479}
X.a5X.prototype={
$1(d){return P.a_j("firebaseAnalytics.setCurrentScreen(screenName: "+this.a.c+")","firebaseAnalytics.setCurrentScreen")},
$S:58}
X.a5Y.prototype={
$1(d){D.av_().$1(": "+H.c(d))},
$S:480}
X.a5Z.prototype={
$1(d){return d instanceof F.pu},
$S:152}
X.a5W.prototype={
$1(d){var x,w,v,u,t,s="APP_CURRENT_USER"
$.azy().rL(0,"app_open")
x=$.aHX()
w=x.e
if(w==null){w=x.f
v=x.gai4()
u=$.awI
w=(u==null?$.awI=new Q.pd(null,$.a_s()):u).OM(w)
u=J.an(v)
t=u.h(v,"APP_LANGUAGE_CODE")
w=x.e=w.Gc(u.h(v,s)==null?null:P.ta(u.h(v,s),y.w,y.b),t)}x.a8k(w.iw()).mP(0,new X.a5V())},
$S:4}
X.a5V.prototype={
$1(d){if(d==null)P.a_j("User is currently signed out!","")
else P.a_j("User is signed in!","")},
$S:z+5}
A.a5h.prototype={
$0(){var x=0,w=P.R(y.v),v=1,u,t=[],s=this,r,q,p,o,n,m
var $async$$0=P.N(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:o=s.a
n=o.a
o.gl5().pv(n,new A.a5g(o,s.b))
v=3
x=6
return P.a7(s.c.dI("listen",s.d,!1,y.v),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
m=u
r=H.a_(m)
q=H.aD(m)
o=U.bs("while activating platform stream on channel "+n)
U.dE(new U.bL(r,q,"services library",o,null,!1))
x=5
break
case 2:x=1
break
case 5:return P.P(null,w)
case 1:return P.O(u,w)}})
return P.Q($async$$0,w)},
$S:40}
A.a5g.prototype={
$1(d){return this.Sx(d)},
Sx(d){var x=0,w=P.R(y.F),v,u=[],t=this,s,r,q
var $async$$1=P.N(function(e,f){if(e===1)return P.O(f,w)
while(true)switch(x){case 0:if(d==null)J.avB(t.b.aT())
else try{J.h4(t.b.aT(),t.a.b.CV(d))}catch(p){q=H.a_(p)
if(q instanceof F.pu){s=q
t.b.aT().o7(s)}else throw p}v=null
x=1
break
case 1:return P.P(v,w)}})
return P.Q($async$$1,w)},
$S:481}
A.a5i.prototype={
$0(){var x=0,w=P.R(y.v),v=1,u,t=[],s=this,r,q,p,o,n,m
var $async$$0=P.N(function(d,e){if(d===1){u=e
x=v}while(true)switch(x){case 0:o=s.a
n=o.a
o.gl5().pv(n,null)
v=3
x=6
return P.a7(s.b.dI("cancel",s.c,!1,y.v),$async$$0)
case 6:v=1
x=5
break
case 3:v=2
m=u
r=H.a_(m)
q=H.aD(m)
o=U.bs("while de-activating platform stream on channel "+n)
U.dE(new U.bL(r,q,"services library",o,null,!1))
x=5
break
case 2:x=1
break
case 5:return P.P(null,w)
case 1:return P.O(u,w)}})
return P.Q($async$$0,w)},
$S:40};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(P.v,[E.a5F,A.ji,Q.hQ,X.rK,A.Ka])
w(N.a63,E.OT)
w(A.rJ,N.a63)
x(H.eE,[A.a5O,Q.abw,A.a5h,A.a5i])
x(H.bJ,[A.a5P,A.a5Q,Q.abu,Q.abt,Q.abv,Q.abs,Q.abx,X.a6_,X.a5X,X.a5Y,X.a5Z,X.a5W,X.a5V,A.a5g])
w(Q.pd,L.Kn)
w(Y.tm,B.d5)})()
H.dx(b.typeUniverse,JSON.parse('{"tm":{"d5":[]}}'))
var y={c:H.C("i1"),F:H.C("af"),w:H.C("f"),t:H.C("hL<hQ<d5>>"),C:H.C("hL<@>"),e:H.C("hQ<d5>"),b:H.C("@"),k:H.C("d5?"),v:H.C("~")};(function constants(){var x=a.makeConstList
C.T4=H.a(x(["ad_activeview","ad_click","ad_exposure","ad_impression","ad_query","adunit_exposure","app_clear_data","app_uninstall","app_update","error","first_open","first_visit","in_app_purchase","notification_dismiss","notification_foreground","notification_open","notification_receive","os_update","session_start","user_engagement"]),H.C("p<f>"))
C.zh=new A.ff("plugins.flutter.io/firebase_auth",C.aT,null)
C.a7Y=H.ak("ji")
C.lE=new Q.hQ(null,y.e)})();(function staticFields(){$.aPL=P.r(y.w,H.C("rJ"))
$.ax7=P.r(y.w,H.C("pd"))
$.aD5=P.r(y.w,H.C("hC<hQ<d5>>"))
$.aD6=P.r(y.w,H.C("hC<hQ<d5>>"))
$.ax8=P.r(y.w,H.C("hC<hQ<d5>>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"aZv","aHY",function(){return new P.v()})
x($,"aZt","azy",function(){var w=$.aHU()
U.hS()
return new E.a5F(w,null)})
x($,"aZs","aHX",function(){return A.aPK(K.aPO())})})()}
$__dart_deferred_initializers__["MpO9aQrJQsqcsGUEyu1e/jy8oio="] = $__dart_deferred_initializers__.current
