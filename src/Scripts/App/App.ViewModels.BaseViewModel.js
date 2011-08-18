App.ViewModels.BaseViewModel = function(){};

App.ViewModels.BaseViewModel.prototype.currentTemplate = ko.observable('todoMain');

//feel free to override this in your templates
App.ViewModels.BaseViewModel.prototype.initialize = function() {};