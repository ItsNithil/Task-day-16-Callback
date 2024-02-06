// Callback hell implementation
function countdown(callback) {
    setTimeout(function() {
      console.log(10);
      setTimeout(function() {
        console.log(9);
        setTimeout(function() {
          console.log(8);
          setTimeout(function() {
            console.log(7);
            setTimeout(function() {
              console.log(6);
              setTimeout(function() {
                console.log(5);
                setTimeout(function() {
                  console.log(4);
                  setTimeout(function() {
                    console.log(3);
                    setTimeout(function() {
                      console.log(2);
                      setTimeout(function() {
                        console.log(1);
                        callback();
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  // Main execution
  countdown(function() {
    setTimeout(function() {
      console.log("Happy Independence Day!");
    }, 1000);
  });
  