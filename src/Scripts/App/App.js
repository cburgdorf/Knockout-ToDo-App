var App = window.App = {};
App.ViewModels = {};
App.Templates = {};

$(function () {

    ko.nativeInMemoryTemplateEngine.instance = new ko.nativeInMemoryTemplateEngine(App.Templates);
    ko.setTemplateEngine(ko.nativeInMemoryTemplateEngine.instance);

    App.ViewModels.HomeScreenViewModel.instance = new App.ViewModels.HomeScreenViewModel();
    ko.applyBindings(App.ViewModels.HomeScreenViewModel.instance);
});