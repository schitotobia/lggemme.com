// GX - Full-Featured Javascript Animations Framework v1.2 - by Riccardo Degni (RD) - Copyright (c) 2009 Riccardo Degni (http://www.riccardodegni.net/) - MIT-Style License
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a l={2n:8(1b){a 1b=1b||{};a M=8(){k(6.1s)?6.1s.Z(6,21):6};J(a 1Z L 1b)M.2i[1Z]=1b[1Z];k M},1i:8(M,27,29){k 8(){M.Z(27,29||[])}},1j:8(C,w){J(a i=0;i<C.U;i++)j(C[i]==w)k 1u;k Y},1m:8(1G){1G=1G.24(/-\\D/g,8(28){k 28.1E(1).2X()});k 1G},1g:8(){k 2A 2W().2T()},1r:8(W,1U,25){j(A W!=\'P\'&&A W!=\'8\')W={};J(a p L 1U)j(!W[p]||25)W[p]=1U[p];k W},13:8(C,M){J(a i=0;i<C.U;i++)M.Z(C,[C[i],i,C])}};a f=l.2n({G:{q:1N,2k:38,2a:\'1n\',19:\'19\',F:\'2p\',1c:Y},1s:8(y,1q){6.y=y;6.G=l.1r(1q,f.2i.G);k 6},1w:8(n,q,F,B){j(!6.18){6.18=1u;6.n=n;6.q=(q)?((A q==\'1x\')?f.2r[l.1m(q)]:q):6.G.q;6.F=F||6.G.F;6.B=((A B==\'P\')?B.3a:((A B==\'8\')?B:Y));6.1Q=(A B==\'P\')?B.37:Y;j(!6.R)6.R=[];6.1K=2m.2h(1N/6.G.2k);6.H={};6.1l={};6.O={};6.V={};6.1e={};J(a 9 L 6.n){a v=l.1m(9),v=(f.1O.36(v))?f.1O[v]:v,o=6.n[9],1F=6.G.2a||\'1n\',1W=Y;a 1D=6.y.X(v),I=T((1D==\'34\')?0:1D);j((l.1j(f.1T,9))&&6.y.X(\'2l\')==\'35\')6.y.X(\'2l\',\'1d\');j(f.E.1A(9)){I=f.E.1L(6.y.X(v));o=f.E.1L(6.n[9]);1W=[o[0]-I[0],o[1]-I[1],o[2]-I[2]]}Q j(A o==\'1x\'){j(l.1j(f.2s,o)){j(!6.y.S(\'1R\'+v))6.y.S(\'1R\'+v,1D);a 1P=T(6.y.S(\'1R\'+v))||1;2D(o){1H\'2x\':6.n[9]=o=1P;1B;1H\'2F\':6.n[9]=o=0;1B;1H\'2z\':6.n[9]=o=(T(2m.2h(I))!=0)?0:1P;1B}}Q{a z=f.2j.9(o,1F);j(A z==\'P\'){6.n[9]=o=T(z[0]);1F=z[1]||\'1n\';j(z[2])6.n[9]=o=(z[2]==\'+=\')?(o+I):(I-o)}Q j(A z==\'1x\'){6.n[9]=o=T(z)}}}6.H[9]=I;6.1l[9]=o;6.O[9]=1W||6.1l[9]-6.H[9];6.1e[9]=1F}j(6.1Q)6.1Q.Z(6,[6.y,6]);6.1X=l.1g();6.1f=2f(l.1i(6.1S,6),6.1K)}Q{j(6.G.19==\'19\'){a 2c=l.1i(6.1w,6,21);6.R.14(2c)}Q j(6.G.19==\'2N\'){6.1k();6.1w.Z(6,21)}}k 6},1S:8(){a N=6.N=l.1g()-6.1X;j(N<6.q){J(a 9 L 6.n){a F=6.F.2o(\':\'),2d=(F[1])?F[1]:\'2E\',17=f.2t[F[0]][2d];a H=6.H[9],O=6.O[9];j(A H!=\'P\'){6.V[9]=17(N,H,O,6.q);j(6.V[9]<0&&!l.1j(f.1T,9))6.V[9]=0}Q{6.V[9]=[17(N,H[0],O[0],6.q),17(N,H[1],O[1],6.q),17(N,H[2],O[2],6.q)]}}}Q{6.1k();J(a 9 L 6.n){6.V[9]=(f.E.1A(9))?6.1l[9]:6.n[9]}}6.2e()},2b:8(9,11){a v=l.1m(9);(f.E.1A(v))?6.y.X(v,\'2y(\'+15(11[0])+\',\'+15(11[1])+\',\'+15(11[2])+\')\'):(6.y.X(v,(v==\'3r\')?11:11+6.1e[9]))},1k:8(){6.18=Y;6.1f=3u(6.1f)},3t:8(){6.1k()},3m:8(){6.18=1u;6.1X=l.1g()-6.N;6.1f=2f(l.1i(6.1S,6),6.1K)},2e:8(){J(a 9 L 6.n){6.2b(9,6.V[9])}j(!6.18){j(6.B&&A 6.B==\'8\')6.B.Z(6,[6.y,6]);a 1c=6.G.1c,R=6.R,1J=8(){R.3f()()};j(R.U!=0)(!1c)?1J():3l(1J,1c)}}});f.2j={9:8(s,26){a z=[],1a,10,1d,22=[\'+=\',\'-=\'];l.13(22,8(1p,i){j(s.1h(1p)!=-1){1d=1p;s=s.24(1p,\'\')}});l.13(f.1e,8(u,i){j(s.1h(u)!=-1){1a=T(s);10=u;z.14(1a,10)}});j(!10){1a=T(s);10=26;z.14(1a,10)}j(1d)z.14(1d);k(z.U>0)?z:s}};f.E={2B:8(23){k 23.3o(16)},2C:8(2g){k 15(2g,16)},3s:8(r,g,b){a 1y=f.E.2B;k[1y(r),1y(g),1y(b)]},2q:8(h,e,x){a 1t=f.E.2C;k[1t(h),1t(e),1t(x)]},1L:8(m){j(f.E.1I[m])k f.E.1I[m];j(A m==\'P\'&&m.U==3)k m;j(m.1h(\'2y\')<=-1){a m=(m.U>4)?m:f.E.2u(m);k f.E.2q(m.1C(1,3),m.1C(3,5),m.1C(5,7))}a 2v=m.1C(4,m.U-1).2o(\',\'),1M=[];l.13(2v,8(c){1M.14(15(c))});k 1M},2u:8(m){a r=m.1E(1),g=m.1E(2),b=m.1E(3);k\'#\'+r+r+g+g+b+b},1A:8(9){k(9.3i().1h(\'m\')!=-1)},1I:{3k:[12,0,0],3h:[0,12,0],3g:[0,0,12],3d:[12,12,12],3e:[0,0,0]}};f.1o=8(t,b,c,d){k c*t/d+b};l.1r(f,{2t:{2p:{\'3n\':f.1o,\'3c\':f.1o,\'2E\':f.1o}},1e:[\'1n\',\'3p\',\'%\',\'L\',\'3q\',\'3j\'],2r:{\'2M\':2L,\'2K\':2O,\'2J\':1N,\'2P\':2R,\'2I\':2H},2s:[\'2x\',\'2F\',\'2z\'],1O:{\'2G\':\'2Q\',\'3b\':\'33\',\'2S\':\'39\',\'32\':\'31\'},1T:[\'2V\',\'2U\'],1Y:8(C){a 1V={};2D(A C){1H\'P\':J(a p L C)1V[p]=f.1Y(C[p]);1B;30:k C}k 1V}});(8($){2w.M.2Z({20:8(w){j(!w.S(\'K\'))w.S(\'K\',2A f().1s(w,{}));k w},2Y:8(1q){a 1v=$(6),1z=6;l.13(1v,8(w){a w=1z.20($(w));l.1r(w.S(\'K\').G,1q,1u)});k 6},K:8(n,q,F,B){a 1v=$(6),1z=6;l.13(1v,8(w){a w=1z.20($(w)),K=w.S(\'K\');(A n==\'1x\')?K[n]():K.1w(f.1Y(n),q,F,B)});k 6}})})(2w);',62,217,'||||||this||function|style|var|||||GX||||if|return|Fns|color|styles|jStyle||duration|||||camelStyle|el||element|fullStyle|typeof|callback|obj||Color|easing|options|starts|startStyle|for|gx|in|fn|elapsedTime|changes|object|else|chain|data|parseFloat|length|sizes|base|css|false|apply|unit|sz|255|Each|push|parseInt||ease|isRunning|queue|value|props|delay|relative|units|timer|Now|indexOf|Bind|Contains|clearTimer|ends|Camelize|px|linear|rel|opts|Extend|init|htd|true|set|anime|string|dth|jq|isColor|break|substring|cssStyle|charAt|jUnit|str|case|customColors|ring|interval|cssToRgb|nCol|1000|complex|to|startFn|gxSave_|increase|axis|more|end|jChanges|time|unlink|prop|setGX|arguments|relatives|dec|replace|merge|un|bind|match|args|defaultUnit|parseStyle|boundAnime|easingType|setStyles|setInterval|hex|round|prototype|Parse|fps|position|Math|Create|split|Linear|hexToRgb|durations|specialValues|Transitions|shortToFull|col|jQuery|show|rgb|toggle|new|decToHex|hexToDec|switch|InOut|hide|borderWidth|250|veryFast|normal|slow|4000|verySlow|cancel|2000|fast|borderTopWidth|500|margin|getTime|left|top|Date|toUpperCase|gxInit|extend|default|paddingTop|padding|borderTopColor|auto|static|hasOwnProperty|start|50|marginTop|complete|borderColor|Out|white|black|shift|blue|green|toLowerCase|ex|red|setTimeout|resume|In|toString|em|pt|opacity|rgbToHex|pause|clearInterval'.split('|')))
;
