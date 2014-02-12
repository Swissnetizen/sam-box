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
          if(newValue === this.xtag.height  || typeof(+newValue)!== "number") return; 
          this.xtag.height = +newValue; 
          this.style.height = this.xtag.base * +newValue + "px"; 
          xtag.fireEvent(this, "resize"); 
        }
      },
      width: {
        get: function () { 
          return this.xtag.width; 
        },
        set: function (newValue) { 
          if (newValue === this.xtag.width || typeof(+newValue)!== "number") return; 
          this.xtag.width = +newValue; 
          this.style.width = this.xtag.base * +newValue + "px"; 
          xtag.fireEvent(this, "resize"); 
        }
      },
      base: {
        get: function () {
          return this.xtag.base;
        },
        set: function (newValue) {
          var s = this.style,
              x = this.xtag;
          if (typeof(+newValue) !== "number") return;
          x.base = +newValue;
          s.height = x.height * x.base + "px";
          s.width = x.width * x.base + "px";
          xtag.fireEvent(this, "resize");
        }
      }
    }, 
    methods: {
    }
  });

})();