(function(){  
  "use strict";
  // Create your component here
  // http://x-tags.org/docs
  //Keepin' it dry!
  var generateAccessor = function (name) {
    var accessor =  {};
    //I hate eval as much as you do,
    //However it is a necessary evil for being dry here
    accessor.get = eval("function () { \
      return this.xtag["+name+"]; \
    }");
    accessor.set eval("function (newValue) { \
      this.xtag["+name+"];                    \
      this.style["+name+"];                    \
      this.fireEvent('resize');                 \
    }");
  };
  xtag.register('sam-box', {
    lifecycle: {
      created: function() {},
      inserted: function() {},
      removed: function() {},
      attributeChanged: function() {}
    }, 
    events: { 
    
    },
    accessors: {
      width: generateAccessor("width"),
      height: generateAccessor("height"),
      base: {
        get: function {
          return this.xtag.base;
        },
        set: function (newValue) {
          var style = this.style,
              xtag = this.xtag;
          xtag.base = newValue;
          style.width = xtag.width * xtag.base;
          style.height = xtag.width * xtag.base;
          xtag.fireEvent("resize");
        }
      
      }
      
    }, 
    methods: {
      }
      }
    }
  });

})();
