(function (App) {

    App.Templates.todoMain = '<div id="todoapp">' +
                             '   <div class="title">' +
                             '       <h1>Todos</h1>' +
                             '     </div>' +
                             '     <div class="content">' +
                             '       <div id="todo-form"></div>' +
                             '          <form id="todo-form" data-bind="submit: addItem">' +
                             '              <input id="new-todo" placeholder="What needs to be done?" type="text" data-bind="value: newItem, valueUpdate: \'afterkeydown\'" />' +
                             '                  <span class="ui-tooltip-top" data-bind="visible: showHitEnterHint()" >Press Enter to save this task</span>' +
                             '              </input>' +
                             '          </form>' +
                             '       <div id="todos">' +
                             '           <ul id="todo-list" data-bind="template: { name: \'todoItem\', foreach: todoCollection } "></ul>' +
                             '       </div>' +
                             '      <div id="todo-stats"></div>' +
                             '     </div>' +
                             '</div>' +
                             '<ul id="instructions">' +
                             //'     <li>Double-click to edit a todo.</li>' +
                             '   </ul>' +
                             '<div id="credits">' +
                             '       <p>' +
                             '            Originally Created by' +
                             '             <br />' +
                             '             <a href="http://jgn.me/">J&eacute;r&ocirc;him Gravel-Niquet</a>' +
                             '       </p>' +
                             '       <p>' +
                             '           Rewritten by <br/> ' +
                             '<a href="http://cburgdorf.wordpress.com/">Christoph Burgdorf</a>' +
                             '       </p>' +
                             '  </div>';

    App.Templates.todoItem = '<li class="todo">' +
                             '  <div class="display">' +
                             '      <input class="check" type="checkbox" "/>' +
                             '      <div class="todo-content" data-bind="text: content"></div>' +
                             '      <span class="todo-destroy"  data-bind="click: function(){ App.ViewModels.HomeScreenViewModel.instance.removeItem($data); }"></span>' +
                             '  </div>' +
                             '  <div class="edit">' +
                             '      <input class="todo-input" type="text" />' +
                             '  </div>' +
                             '</li>';

})(App)