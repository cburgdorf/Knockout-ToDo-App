
App.ViewModels.UserViewModel = function () {
    
    this.userCollection = ko.observableArray([
      { 
        firstName: "Matt" ,
        todoItems: ko.observableArray([])
      }, 
      { 
        firstName: "Susann",
        todoItems: ko.observableArray([]) 
      }, 
      { 
        firstName: "Kirk",
        todoItems: ko.observableArray([]) 
      }
    ]);        
    
    this.setUser = function(user){
      var viewModel = App.ViewModelManager.getViewModelInstance('todoMain');
      viewModel.currentUser(user.firstName);      
      viewModel.todoCollection = user.todoItems;
      
      App.ViewModelManager.initializeViewModel('todoMain');
    };
    
    this.goBack = function(){
      App.ViewModelManager.initializeViewModel('todoMain');
    };
};

App.ViewModels.UserViewModel.prototype = App.ViewModels.BaseViewModel.prototype;

App.ViewModelManager.registerViewModel({
  name: 'todoUsers',
  instance: new App.ViewModels.UserViewModel()
});
