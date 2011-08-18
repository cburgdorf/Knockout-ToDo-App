(function (App) {

/*
the syntax might feel a little strange at first. But having the ability to save the templates in plain old
JavaScript vars might proof as very powerful.
*/
    
    App.Templates.userItem = '<li class="todo">\
                                <div class="display">\
                                   <div class="todo-content clickable" data-bind="text: firstName, click: function() { App.ViewModelManager.getViewModelInstance(\'todoUsers\').setUser($data); } "></div>\
                                </div>\
                              </li>';
    
    
    App.Templates.todoUsers = '<div id="todoapp">\
                                  <div class="title">\
                                      <h1>Users</h1>\
                                  </div>\
                                  <div class="content">\
                                    <ul id="todo-list" data-bind="template: { name: \'userItem\', foreach: userCollection } "></ul>\
                                  </div>\
                                  <button data-bind="click: App.ViewModelManager.getViewModelInstance(\'todoUsers\').goBack">back</button>\
                                </div>'
    
    App.Templates.todoMain = '<div id="todoapp">\
                                <div class="title">\
                                    <h1>Todos</h1>\
                                </div>\
                                  <div class="content">\
                                    <span>Current user: </span><a href="#" data-bind="text: currentUser, click: logIn"></a>\
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
                                   <span class="todo-destroy"  data-bind="click: function(){ App.ViewModelManager.getViewModelInstance(\'todoMain\').removeItem($data); }"></span>\
                                </div>\
                                <div class="edit">\
                                   <input class="todo-input" type="text" />\
                                </div>\
                             </li>';

})(App)