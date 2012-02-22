/*
*	Class: warnUnload
*	Use: Warn user if data is unsaved when they try to browse away from current page
*	Author: Carl Furrow (http://cfurrow.tumblr.com)
*	Version: 0.0.1 
*/
(function($){
  if(typeof $ === "undefined" || $ === null){
    return;
  }
  $.warnUnload = function(options){
    var DEFAULTS = {message:"Are you sure you want to leave this page?",urls:[],ignore:[]};
    options = $.extend(DEFAULTS,options);
    var $inputs = $("input:text,input:checkbox,input:radio,select");

    try{
      // http://www.opera.com/support/kb/view/827/
      opera.setOverrideHistoryNavigationMode('compatible');
      history.navigationMode = 'compatible';
    }catch(e){}

    function setupChangeEventsOnInputs(){
      $inputs.change(markAsChanged);
    }

    function markAsChanged(){
      $(this).attr("data-changed","true");
    }
 
    function DoWeShowConfirmMessage(){
      var warn = false;
      // only show message if url matches location.href
      $.each(options.urls,function(index,url){
        if(location.href.indexOf(url) > 0){
          $inputs.each(function(index,input){
            var $input = $(input);
            if($input.attr("data-changed") === "true"){
              warn = true;
            }
          });
        }
      });

      if(warn){
        return ReturnMessage(); 
      }
      return null;
    }

    function ReturnMessage()
    {
      return options.message;
    }
 
    function UnBindWindow()
    {
      $(window).unbind('beforeunload', DoWeShowConfirmMessage);
    }

    function UnBindIgnores(){
      //Bind Links we dont want to affect
      var i = 0;
      var len = options.ignore.length;
      var selector = null;
      for(;i<len;i++){
        selector = options.ignore[i];
        $(selector).bind('click', UnBindWindow); 
      }
    }

    //Bind Exit Message Dialogue
    setupChangeEventsOnInputs(); 
    UnBindIgnores();
    $(window).bind('beforeunload', DoWeShowConfirmMessage);
  };
})(jQuery);