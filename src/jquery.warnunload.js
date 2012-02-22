(function($){
  // If the given tabs are clicked, warn if any of the values have been altered
  $.warnUnload = function(options){
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
      if(typeof options !== 'undefined' && options !== null){
        if(typeof options.urls !== 'undefined' && options.urls !== null){
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
        }
      }
      return null;
    }

    function ReturnMessage()
    {
      var message = "Are you sure you want to leave this page?";
      if(typeof options !== 'undefined' && options !== null){
        if(typeof options.message !== 'undefined' && options.message !== null){
          message = options.message;
        }
      }
      return message;
    }
 
    //UnBind Function
    function UnBindWindow()
    {
      $(window).unbind('beforeunload', DoWeShowConfirmMessage);
    }

    //Bind Links we dont want to affect
    if(typeof options !== 'undefined' && options !== null){
      if(typeof options.ignore !== 'undefined' && options.ignore !== null){
        var i = 0;
        var len = options.ignore.length;
        var selector = null;
        for(;i<len;i++){
          selector = options.ignore[i];
          $(selector).bind('click', UnBindWindow); 
        }
      }
    }

    //Bind Exit Message Dialogue
    setupChangeEventsOnInputs(); 
    $(window).bind('beforeunload', DoWeShowConfirmMessage);
  };
})(jQuery);
