;window.dnd = Object.create({

    on: function( expression, config ) {

        var el = document.querySelector(expression);

        el.addEventListener('dragenter', function(e) {
            e.stopPropagation();
            e.preventDefault();
            config.enter ? config.enter(this) : 0;
        }, false);

        el.addEventListener('dragover',  function(e) {
            e.stopPropagation();
            e.preventDefault();
            config.over ? config.over(this) : 0;
        }, false);

        el.addEventListener('dragleave', function(e) {
            e.stopPropagation();
            e.preventDefault();
            config.leave ? config.leave(this) : 0;
        }, false );

        el.addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();
            config.drop ? config.drop(e.dataTransfer.files, this) : 0;
        }, false);
  }
});
