(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f4f163"],{"101e":function(t,i,a){"use strict";a("8c5d")},1676:function(t,i,a){},"19b3":function(t,i,a){"use strict";a("1676")},"3ca3":function(t,i,a){"use strict";var s=a("6547").charAt,n=a("69f3"),e=a("7dd0"),o="String Iterator",r=n.set,c=n.getterFor(o);e(String,"String",(function(t){r(this,{type:o,string:String(t),index:0})}),(function(){var t,i=c(this),a=i.string,n=i.index;return n>=a.length?{value:void 0,done:!0}:(t=s(a,n),i.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,i,a){"use strict";var s=a("0366"),n=a("7b0b"),e=a("9bdd"),o=a("e95a"),r=a("50c4"),c=a("8418"),l=a("35a1");t.exports=function(t){var i,a,d,u,f,g,v=n(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,S=void 0!==m,A=l(v),b=0;if(S&&(m=s(m,h>2?arguments[2]:void 0,2)),void 0==A||p==Array&&o(A))for(i=r(v.length),a=new p(i);i>b;b++)g=S?m(v[b],b):v[b],c(a,b,g);else for(u=A.call(v),f=u.next,a=new p;!(d=f.call(u)).done;b++)g=S?e(u,m,[d.value,b],!0):d.value,c(a,b,g);return a.length=b,a}},"82cb":function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"songlist-item"},[s("div",{staticClass:"bg"},[s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",offset:"50"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},[s("div",{staticClass:"songlist-title clearfix"},[s("div",{staticClass:"fl"},[s("span"),s("span",[t._v("全部歌曲("+t._s(t.allSongs.length)+"首)")])]),s("div",{staticClass:"likelist fr"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.history,expression:"!history"}]},[t.iscollect?s("img",{staticClass:"auto-img",attrs:{src:a("ab07")}}):s("img",{staticClass:"auto-img",attrs:{src:a("907b")}})]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.history,expression:"!history"}]},[t.iscollect?s("span",{on:{click:t.LikeList}},[t._v("已收藏")]):s("span",{on:{click:t.LikeList}},[t._v("收藏歌单")])])])]),t._l(t.showSongData,(function(i,a){return s("div",{key:a,staticClass:"song-list",on:{click:function(s){return t.selectItem(i,a)}}},[t.currentSong.id==i.id?s("div",{staticClass:"vol-icon"},[t.currentSong.id==i.id?s("van-icon",{attrs:{name:"volume-o",color:"#feef9a",size:"20"}}):t._e()],1):s("div",{staticClass:"index"},[t._v(t._s(a+1))]),s("div",{staticClass:"song-info"},[s("div",{staticClass:"info-top one-text"},[t._v(t._s(i.name))]),s("div",{staticClass:"singer one-text"},[t._v(t._s(i.singer))])]),s("div",{staticClass:"more",on:{click:function(i){return i.stopPropagation(),t.more(i)}}},[s("van-icon",{attrs:{name:"ellipsis",size:"20"}})],1)])}))],2)],1)])},n=[];a("fb6a"),a("45fc");function e(t,i){(null==i||i>t.length)&&(i=t.length);for(var a=0,s=new Array(i);a<i;a++)s[a]=t[a];return s}function o(t){if(Array.isArray(t))return e(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}a("b0c0"),a("25f0");function c(t,i){if(t){if("string"===typeof t)return e(t,i);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,i):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return o(t)||r(t)||c(t)||l()}var u={name:"SonglistItem",data:function(){return{showSongData:[],loading:!0,finished:!1,startIndex:0,dataCount:8,islike:!1,iscollect:!1,id:"",localSongList:[]}},props:["history"],computed:{allSongs:function(){return this.$store.state.AllSongListData},currentSong:function(){return this.$store.state.currentSong}},created:function(){var t=this;this.id=this.$route.params.id;var i=JSON.parse(localStorage.getItem("allSongList_data"));i.some((function(i){if(i.id==t.id)return t.iscollect=i.iscollect,!0})),this.showSongData=this.allSongs.slice(this.startIndex,this.dataCount),this.startIndex=this.startIndex+this.dataCount,this.loading=!1},watch:{allSongs:function(t,i){return t}},methods:{onLoad:function(){var t=this;setTimeout((function(){var i,a=t.allSongs.slice(t.startIndex,t.startIndex+t.dataCount);t.startIndex+=t.dataCount,(i=t.showSongData).push.apply(i,d(a)),a.length<t.dataCount?t.finished=!0:t.loading=!1}),1500)},selectItem:function(t,i){this.$store.commit("setCurrentSong",t),this.$store.commit("setPlayList",this.allSongs),this.$store.commit("playStatus",!0)},LikeList:function(){var t=this,i=JSON.parse(localStorage.getItem("allSongList_data"));this.iscollect=!this.iscollect,this.iscollect?i.some((function(i){if(i.id==t.id)return i.iscollect=!0,!0})):i.some((function(i){if(i.id==t.id)return i.iscollect=!1,!0})),localStorage.setItem("allSongList_data",JSON.stringify(i))},LikeSong:function(t){t.islike=!t.islike;JSON.parse(localStorage.getItem("likeSong_data"))},more:function(){this.$toast("该功能开发中~")}}},f=u,g=(a("19b3"),a("2877")),v=Object(g["a"])(f,s,n,!1,null,"60d8923e",null);i["a"]=v.exports},"8c5d":function(t,i,a){},"907b":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACw0lEQVRoQ+2ZT4iNURjGf8/KlmJhJ9ZWlK1ZkbIhQwpNyhRFEZIYLBAxUuPPLJhEjImFEmVhNrOys/Zvp5Swk82jM51v+uY2935/7jf3c/Wdze3c+573fZ73fe973nOO6POhPsdPQ6BsBG2fAS4AU5IGbU8Cgxn6pqJ8+JwdtUTA9lHgWsQQSKwC9uZ0xoSkodoI2B4G7kQAF4HlwIE4H5Q05900IdvHgSvAtKSBWgjY3gM8iMavAkuAw3G+W9LjdlGwvRF4WxsB29uAZxHgDeAPcCLO90lKiC3IoVYCtjcBryOyMeA7cDbO90u6l5X/tRFIGQ4Yx4HPwKUIeFhS+C5z1EKgBfx94D0wGtEeknQrE3kUyE3A9rm8SnPIjUSZh8AMcDvOj0i6mWP9nEguAi0eK6K/k2zYoEL+hwiEcUzS9aLKcxEISiuOwBfgN5CUx5OSQi0vPHIRsL0SWAesL2yh/YIkjU5LChtXqZGXwAtgaykLnReNSAotQ+mRl4CjhVDavpa2Nn/hjKQ33eoqREBSLU1eJ5K1EIhGkTTddxGwfTfVZY5LCl1o6dHTCNheCvxoQbtM0s+yDHpNIGl903gHukmlhkCR0LdpSZoIZJ7IbM9uZN3uA30RAdtrge0dUivpgRKR8x1kRyX96tlGZjscCw8W+V/kkB2SNNFOrtIqZPsbsCIHqCIizyW1jWjVBBaja+3YbldNIBw7NwMbiri4g+wrYEzSy56kUBbovqhCOStG00okHqj0P9CkUJYHFvi9iUARp/0PVWg18LGF9BpJn4o4Ii3b0xQKhm0/AXZGEJOSdpUFH/VlP3BU1U6nSt/sRbGkri+Mex6Bbry90NpCBOLTz7uqQXSpL6RQOGO0f+Sz/RTY0aWhxV5+StLlxMi8K0TbAfyW+G672EDK6P8APEpfz/xzd6BFWTUEinqsavm/rvIBTx3mDjIAAAAASUVORK5CYII="},"962d":function(t,i,a){},"9bdd":function(t,i,a){var s=a("825a"),n=a("2a62");t.exports=function(t,i,a,e){try{return e?i(s(a)[0],a[1]):i(a)}catch(o){throw n(t),o}}},a15b:function(t,i,a){"use strict";var s=a("23e7"),n=a("44ad"),e=a("fc6a"),o=a("a640"),r=[].join,c=n!=Object,l=o("join",",");s({target:"Array",proto:!0,forced:c||!l},{join:function(t){return r.call(e(this),void 0===t?",":t)}})},a630:function(t,i,a){var s=a("23e7"),n=a("4df4"),e=a("1c7e"),o=!e((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:o},{from:n})},ab07:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADRElEQVRoQ+2ZT2gUZxjGn+ebRL1lZ1XEm7RnTy141VOl4KXFWASV0O6MVVCo1CLSqjmoKGoRos4EGiktNQZ7EKRCD3rx5M2zbb2JBTProSBJ5nvK7GZlFSc7s7vuJDhz2o95v/d7fu/7zvdviRX+cIXrRwnQbQbjKPie4DjAGePWRlUPpyWMLu2PM6SdYcWfadkVkgFF4TcCLiQiBIwbYJOAvVmCQeA6XW+sMADVA1/itUQAydPW2nUkvWbbjLLy1avotgPF9clvKZ0DcN+43rZCABaicI8Bfm6K1XkrrCZ4qNE23M2R2m9pWZiPrm514NwrDEDRtc8Ec6tZNvoR4hyJo0nbgvuG3FoDbFkC6EX4iSzuLoqfgOVzGvzQFI8vh1zvp071X1gG2gaGpNAY84+kMw0YyXeqfthJfPK+EIDXxENTBuaRoEtN8TjoVL0rWcTnAoifByezOu1kR8MTjQ8U/AXUAwlXm20dputf7tS//X2mDLRHLI/zpWxJTkO6K2CqKR5H6HoX8/rPBJA47WcGZPgEwktDNKZHUt+x4idzee4nE4D+CzYi5kd2Xh/nHiGlw6syIo+zUjvdrd9sANHkbUE7uh0krR8NTnDEG+/FbyYAG4VanN5CCE97GbDV10IPhtfu/7NXX7kAjOsVsslbCrIQgGTQRNSw+/X9FZeBeDYIWrvMZAV2qr7fC8RAM6BoqiLMR+2CiWGX7li9W4iBArxtQYwRb+ullEqAPKkvM/CWaJUl9GZQNBtstsLn6duH5la69cjqVJqtIS6x6r8Y2EIWz4YTJA7k+S462VpgbMj1rqfZ9bWEbBT+C2B9J1H53ut34/qpGe0rgN7BrlXScafqp263+wqQHHqMw+0StuSLctqhAX+QmuCIf2cgJdRJdLkOlOtAjweasoTKEnrfS+jlsysfrFo19Fd7JczNLXy4ZsOBvztNwctiHUhExLPBDZK7kt+Spp2q/0W34pN+fV2JswppXVM6a/2eL4wLAcgKmsUuF4DIo1YLD7M4HpSNsWbr4j1r+p98Npq8CWjnoER1Mw7JY6zUzrb6vnaFqHqwE+KnAjZ14/xd9xH02ML+2n49s+zuQPMGoQTIG7F+2/8P0Dt/T6vvoNYAAAAASUVORK5CYII="},b0c0:function(t,i,a){var s=a("83ab"),n=a("9bf2").f,e=Function.prototype,o=e.toString,r=/^\s*function ([^ (]*)/,c="name";s&&!(c in e)&&n(e,c,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},beb2:function(t,i,a){"use strict";a.d(i,"a",(function(){return o}));a("d81d"),a("fb6a"),a("b0c0");var s=a("d4ec"),n=a("bee2"),e=function(){function t(){Object(s["a"])(this,t)}return Object(n["a"])(t,[{key:"formatSingerName",value:function(t,i){var a=[];"new"==i?t.map((function(t){a.push(t.song.artists)})):"list_song"==i&&t.map((function(t){a.push(t.ar)}));var s=[];return a.map((function(t){var i="";t.map((function(t){i+=t.name+"/"})),i=i.slice(0,i.length-1),s.push(i)})),s}}]),t}(),o=new e},c573:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"musiclist"},[a("SonglistDetail",{attrs:{SongListDetail:t.SongListDetail,isTopType:t.isTopType}}),a("SonglistItem")],1)},n=[],e=(a("a15b"),a("d81d"),a("45fc"),a("b0c0"),function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"songlist-detail"},[a("div",{staticClass:"detail-back clearfix"},[a("van-icon",{staticClass:"fl",attrs:{name:"arrow-left",size:"20"},on:{click:t.goBack}}),a("div",{staticClass:"fl"},[t._v("歌单")])],1),t.isTopType?a("div",{staticClass:"detail-top-bg"},[a("img",{staticClass:"auto-img",attrs:{src:t.SongListDetail.coverImgUrl}})]):a("div",{staticClass:"detail-top"},[a("div",{staticClass:"top-l"},[a("div",{staticClass:"img-box"},[a("img",{staticClass:"auto-img",attrs:{src:t.SongListDetail.coverImgUrl}})])]),a("div",{staticClass:"top-r"},[a("div",{staticClass:"title"},[t._v(t._s(t.SongListDetail.name))]),a("div",{staticClass:"desc",on:{click:t.showPopup}},[a("div",{staticClass:"text"},[t._v(t._s(t.SongListDetail.description)+" ")]),a("div",{staticClass:"right-icon"},[a("van-icon",{attrs:{name:"arrow",size:"14"}})],1)])]),a("div",{staticClass:"desc-popup"},[a("van-popup",{staticClass:"fullPage",attrs:{closeable:""},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[a("div",{staticClass:"desc-bg",style:"background-image:url("+t.SongListDetail.coverImgUrl+")"}),a("div",{staticClass:"desc-content"},[a("div",{staticClass:"img-box"},[a("img",{staticClass:"auto-img",attrs:{src:t.SongListDetail.coverImgUrl,alt:""}})]),a("div",{staticClass:"title"},[t._v(t._s(t.SongListDetail.name))]),a("div",{staticClass:"text"},[t._v(t._s(t.SongListDetail.description))])])])],1)])])}),o=[],r={name:"SonglistDetail",props:{SongListDetail:{type:Object},isTopType:{}},data:function(){return{show:!1,id:""}},methods:{goBack:function(){this.$router.go(-1)},showPopup:function(){this.show=!0}}},c=r,l=(a("101e"),a("2877")),d=Object(l["a"])(c,e,o,!1,null,"0bae9abc",null),u=d.exports,f=a("82cb"),g=a("beb2"),v={name:"MusicList",components:{SonglistDetail:u,SonglistItem:f["a"]},data:function(){return{id:"",isTopType:!1,SongListDetail:{}}},created:function(){this.id=this.$route.params.id;var t=this.$route.query.isTopType;this.isTopType=void 0!=t&&t,this.getSongListDetail()},methods:{getSongListDetail:function(){var t=this,i=JSON.parse(localStorage.getItem("allSongList_data"));if(i.length>0){var a=i.some((function(i){if(i.id==t.id&&i.expired>Date.now())return t.SongListDetail=i.details,t.$store.commit("changeAllSongData",i.data),!0}));if(a)return}this.axios({method:"GET",url:"/playlist/detail",params:{id:this.id}}).then((function(i){if(200==i.data.code){t.SongListDetail=i.data.playlist;var a=i.data.playlist.trackIds,s=[];a.map((function(t){s.push(t.id)}));var n=s.join(",");t.getAllSongsByTrackIds(n,t.SongListDetail)}})).catch((function(t){}))},getAllSongsByTrackIds:function(t,i){var a=this;this.axios({method:"GET",url:"/song/detail",params:{ids:t}}).then((function(t){if(200==t.data.code){var s=t.data.songs,n=[];s.map((function(t,i){t.singer=g["a"].formatSingerName(s,"list_song")[i],n.push(t.id)})),a.getUrl(n.join(","),s,i)}})).catch((function(t){}))},getUrl:function(t,i,a){var s=this;this.axios({method:"GET",url:"/song/url",params:{id:t}}).then((function(t){if(200==t.data.code){var n=t.data.data;i.map((function(t){n.map((function(i){t.id==i.id&&(t.songUrl=i.url)}))}));var e=[];i.map((function(t){var i={};i.id=t.id,i.name=t.name,i.picUrl=t.al.picUrl,i.singer=t.singer,i.songUrl=t.songUrl,i.islike=!1,e.push(i)})),s.$store.commit("changeAllSongData",e);var o=JSON.parse(localStorage.getItem("allSongList_data")),r={id:s.id,details:a,data:e,iscollect:!1,expired:Date.now()+144e5};o.push(r),localStorage.setItem("allSongList_data",JSON.stringify(o)),s.$store.commit("changeSongList",o)}})).catch((function(t){}))}}},p=v,h=(a("c852"),Object(l["a"])(p,s,n,!1,null,"3647d4e6",null));i["default"]=h.exports},c852:function(t,i,a){"use strict";a("962d")},d28b:function(t,i,a){var s=a("746f");s("iterator")},ddb0:function(t,i,a){var s=a("da84"),n=a("fdbc"),e=a("e260"),o=a("9112"),r=a("b622"),c=r("iterator"),l=r("toStringTag"),d=e.values;for(var u in n){var f=s[u],g=f&&f.prototype;if(g){if(g[c]!==d)try{o(g,c,d)}catch(p){g[c]=d}if(g[l]||o(g,l,u),n[u])for(var v in e)if(g[v]!==e[v])try{o(g,v,e[v])}catch(p){g[v]=e[v]}}}},e01a:function(t,i,a){"use strict";var s=a("23e7"),n=a("83ab"),e=a("da84"),o=a("5135"),r=a("861d"),c=a("9bf2").f,l=a("e893"),d=e.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),i=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(u[i]=!0),i};l(f,d);var g=f.prototype=d.prototype;g.constructor=f;var v=g.toString,p="Symbol(test)"==String(d("test")),h=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,i=v.call(t);if(o(u,t))return"";var a=p?i.slice(7,-1):i.replace(h,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,i,a){"use strict";var s=a("23e7"),n=a("861d"),e=a("e8b5"),o=a("23cb"),r=a("50c4"),c=a("fc6a"),l=a("8418"),d=a("b622"),u=a("1dde"),f=a("ae40"),g=u("slice"),v=f("slice",{ACCESSORS:!0,0:0,1:2}),p=d("species"),h=[].slice,m=Math.max;s({target:"Array",proto:!0,forced:!g||!v},{slice:function(t,i){var a,s,d,u=c(this),f=r(u.length),g=o(t,f),v=o(void 0===i?f:i,f);if(e(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!e(a.prototype)?n(a)&&(a=a[p],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(u,g,v);for(s=new(void 0===a?Array:a)(m(v-g,0)),d=0;g<v;g++,d++)g in u&&l(s,d,u[g]);return s.length=d,s}})}}]);
//# sourceMappingURL=chunk-08f4f163.ccfb9f58.js.map