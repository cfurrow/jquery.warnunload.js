/*
* Class: warnUnload
* Use: Warn user if data is unsaved when they try to browse away from current page
* Author: Carl Furrow (http://carlfurrow.com)
* Version: 0.0.2
*/
/*global opera:true */
(function($){
  if(typeof $ === "undefined" || $ === null){
    return;
  }

  function addIgnoreWarnToIgnore(options){
    if(options.ignore === null || options.ignore === ""){
      options.ignore = ".ignore-warn";
    }
    if(!/\.ignore-warn/.test(options.ignore)){
      options.ignore += ", .ignore-warn";
    }
  }

  $.warnUnload = function(options){
    var DEFAULTS = {
      message:"Are you sure you want to leave this page?",
      urls:[],
      ignore:".ignore-warn",
      after:function(){},
      onItem:function(item){return true;}};
    options = $.extend(DEFAULTS,options);
    addIgnoreWarnToIgnore(options);
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
            if($input.attr("data-changed") === "true" && options.onItem($input)){
              warn = true;
            }
          });
        }
      });

      if(warn){
        options.after();
        return returnMessage();
      }
      // don't return anything.
    }

    function returnMessage()
    {
      return options.message;
    }

    function unBindWindow()
    {
      $(window).unbind('beforeunload', DoWeShowConfirmMessage);
    }

    function unBindIgnores(){
      $(options.ignore).bind('click', unBindWindow);
    }

    //Bind Exit Message Dialogue
    setupChangeEventsOnInputs();
    unBindIgnores();

    $(window).bind('beforeunload', DoWeShowConfirmMessage);
  };
})(jQuery);
