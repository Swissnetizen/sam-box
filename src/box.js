/*
   Copyright 2014 Samarth AGARWAL

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
(function(){  
  "use strict";
  xtag.register('sam-box', {
    lifecycle: {
      created: function() {

      },
      inserted: function() {},
      removed: function() {},
      attributeChanged: function() {}
    }, 
    events: { 
    
    },
    accessors: {
      //TODO: DRY
      height: {
        attribute: {},
        get: function () { 
          return this.xtag.height; 
        },
        set: function (newValue) { 
          if(+newValue === this.xtag.height  || typeof(+newValue)!== "number") return; 
          this.xtag.height = +newValue; 
          this.style.height = this.xtag.base * +newValue + "px"; 
          xtag.fireEvent(this, "resize"); 
        }
      },
      width: {
        attribute: {},
        get: function () { 
          return this.xtag.width; 
        },
        set: function (newValue) { 
          if (+newValue === this.xtag.width || typeof(+newValue)!== "number") return; 
          this.xtag.width = +newValue; 
          this.style.width = this.xtag.base * +newValue + "px"; 
          xtag.fireEvent(this, "resize"); 
        }
      },
      base: {
        attribute: {},
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
