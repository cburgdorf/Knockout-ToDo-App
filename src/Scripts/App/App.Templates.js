(function (App) {

/*
the syntax might feel a little strange at first. But having the ability to save the templates in plain old
JavaScript vars might proof as very powerful.
*/
    App.Templates.todoMain = '<div id="todoapp">\
                                <div class="title">\
                                    <h1>Todos</h1>\
                                </div>\
                                  <div class="content">\
                                    <div id="todo-form"></div>\
                                       <form id="todo-form" data-bind="submit: addItem">\
                                           <input id="new-todo" placeholder="What needs to be done?" type="text" data-bind="value: newItem, valueUpdate: \'afterkeydown\'" />\
                                               <span class="ui-tooltip-top" data-bind="visible: showHitEnterHint()" >Press Enter to save this task</span>\
                                           </input>\
                                       </form>\
                                    <div id="todos">\
                                        <ul id="todo-list" data-bind="template: { name: \'todoItem\', foreach: todoCollection } "></ul>\
                                    </div>\
                                    <div id="todo-stats"></div>\
                                  </div>\
                             </div>\
                             <ul id="instructions">\
                             </ul>\
                             <div id="credits">\
                                    <p>\
                                         Originally Created by\
                                          <br />\
                                          <a href="http://jgn.me/">J&eacute;r&ocirc;him Gravel-Niquet</a>\
                                    </p>\
                                    <p>Rewritten by <br/> <a href="http://cburgdorf.wordpress.com/">Christoph Burgdorf</a></p>\
                                    <p>\
                                        This clone of backbones todo App has been written with <a href="http://knockoutjs.com">knockoutjs </a>\
                                        and uses an experimental new approach of in-memory templates which are stored in plain old JavaScript objects\
                                        Check out the source at <a href="https://github.com/cburgdorf/Knockout-ToDo-App"> my github repository</a>\
                                    </p>\
                             </div>';

    App.Templates.todoItem = '<li class="todo">\
                                <div class="display">\
                                   <input class="check" type="checkbox" "/>\
                                   <div class="todo-content" data-bind="text: content"></div>\
                                   <span class="todo-destroy"  data-bind="click: function(){ App.ViewModels.HomeScreenViewModel.instance.removeItem($data); }"></span>\
                                </div>\
                                <div class="edit">\
                                   <input class="todo-input" type="text" />\
                                </div>\
                             </li>';

})(App)