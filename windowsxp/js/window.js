$(function(){let t=$(".window"),e=0;t.draggable({start:function(t,f){if($(this).css("z-index",++e),t.pageX<$("body").offset().left||t.pageY<$("body").offset().top||t.pageX>$("body").offset().left+$("body").width()||t.pageY>$("body").offset().top+$("body").height())return!1;let o=$(this).offset();f.offset={left:t.pageX-o.left,top:t.pageY-o.top}},drag:function(t,e){if(t.pageX<$("body").offset().left||t.pageY<$("body").offset().top||t.pageX>$("body").offset().left+$("body").width()||t.pageY>$("body").offset().top+$("body").height())return!1;let f=$(this).offsetParent().offset();$(this).css({position:"absolute",left:t.pageX-f.left-e.offset.left+"px",top:t.pageY-f.top-e.offset.top+"px"})}}),t.click(function(){$(this).css("z-index",++e)})});