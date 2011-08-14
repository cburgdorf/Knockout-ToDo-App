var App = window.App = {};
App.ViewModels = {};
//create a place for the templates to live
App.Templates = {};

$(function () {

    //this is where the magic happens. We create a new instance of the nativeInMemoryTemplateEngine which
    //gets the template store passed as a parameter
    ko.nativeInMemoryTemplateEngine.instance = new ko.nativeInMemoryTemplateEngine(App.Templates);
    ko.setTemplateEngine(ko.nativeInMemoryTemplateEngine.instance);

    App.ViewModels.HomeScreenViewModel.instance = new App.ViewModels.HomeScreenViewModel();
    ko.applyBindings(App.ViewModels.HomeScreenViewModel.instance);
});