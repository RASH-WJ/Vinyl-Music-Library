(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-648a0da3"],{"252c":function(t,i,e){},3063:function(t,i,e){},5150:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"likelist navbar"},[e("van-nav-bar",{attrs:{title:"收藏歌单","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}}),t.filter.length>0?e("div",{staticClass:"likelist-box"},t._l(t.filter,(function(i,s){return e("div",{key:s,staticClass:"likelist-item",on:{click:function(e){return t.goListId(i)}}},[e("div",{staticClass:"img-box"},[e("img",{staticClass:"auto-img",attrs:{src:i.details.coverImgUrl}})]),e("div",{staticClass:"desc"},[e("div",{staticClass:"title two-text"},[t._v(t._s(i.details.name))]),e("div",{staticClass:"count"},[t._v(t._s(i.data.length)+"首")])])])})),0):e("div",[e("van-empty",{attrs:{description:"暂无收藏的歌单~"}})],1)],1)},a=[],n=(e("4de4"),e("252c"),{name:"Likelist",data:function(){return{filter:[]}},created:function(){this.getLikeList()},methods:{onClickLeft:function(){this.$router.go(-1)},getLikeList:function(){var t=JSON.parse(localStorage.getItem("allSongList_data")),i=t.filter((function(t){return t.iscollect}));this.filter=i},goListId:function(t){var i=t.id;this.$router.push({name:"MusicList",params:{id:i}})}}}),c=n,l=(e("f771"),e("2877")),r=Object(l["a"])(c,s,a,!1,null,"5eb50e66",null);i["default"]=r.exports},f771:function(t,i,e){"use strict";e("3063")}}]);
//# sourceMappingURL=chunk-648a0da3.d4afe926.js.map