App.ViewModels.HomeScreenViewModel = function () {    
    
    this.initialize = function(){
      this.newItem("");
    };
    
    this.currentUser = ko.observable("no user (click to log in)")
    this.todoCollection = ko.observableArray([]);
    this.newItem = ko.observable("");
    
    this.addItem = function () {
        this.todoCollection.push({
            content: this.newItem()
        });        
    };
    this.removeItem = function (item) {
        this.todoCollection.remove(item);
    };

    this.showHitEnterHint = ko.dependentObservable(function () {
        return this.newItem().length > 0;
    }, this);
    
    this.logIn = function(){
      App.ViewModelManager.initializeViewModel('todoUsers');
    };
};

App.ViewModels.HomeScreenViewModel.prototype = App.ViewModels.BaseViewModel.prototype;

 
App.ViewModelManager.registerViewModel({
  name: 'todoMain',
  instance: new App.ViewModels.HomeScreenViewModel()  
});
