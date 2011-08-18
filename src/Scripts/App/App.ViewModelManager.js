App.ViewModelManager = (function(){

  var viewModels = {};
  
  var registerViewModel = function(registration){
    if (registration.name === undefined){
      throw "Registration name is mandatory";
    }
    
    if (registration.instance === undefined){
      throw "Registration instance is mandatory";
    }
    
    viewModels[registration.name] = {
      instance: registration.instance
    };
  };
  
  var getViewModelInstance = function(name){
    return viewModels[name].instance;
  };

  var initializeViewModel = function(name){
    var viewModel = getViewModelInstance(name);
    viewModel.currentTemplate(name);
    viewModel.initialize();
  };

  return {
    registerViewModel: registerViewModel,
    getViewModelInstance: getViewModelInstance,
    initializeViewModel: initializeViewModel
  };

})();