(function(){  
  "use strict";
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
      //TODO: DRY
      height: {
        get: function () { 
          return this.xtag.height; 
        },
        set: function (newValue) { 
          if(newValue === this.xtag.height) return; 
          this.xtag.height; 
          this.style.height; 
          xtag.fireEvent(this, 'resize'); 
        }
      },
      width: {
        get: function () { 
          return this.xtag.width; 
        },
        set: function (newValue) { 
          if(newValue === this.xtag.width) return; 
          this.xtag.width; 
          this.style.width; 
          xtag.fireEvent(this, 'resize'); 
        }
      },
      base: {
        get: function () {
          return this.xtag.base;
        },
        set: function (newValue) {
          var style = this.style,
              xtag = this.xtag;
          xtag.base = newValue;
          style.width = xtag.width * xtag.base + "px";
          style.height = xtag.width * xtag.base; + "px";
          xtag.fireEvent("resize");
        }
      }
    }, 
    methods: {
    }
  });

})();