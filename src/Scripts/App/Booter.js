$(function () {

    //this is where the magic happens. We create a new instance of the nativeInMemoryTemplateEngine which
    //gets the template store passed as a parameter
    ko.nativeInMemoryTemplateEngine.instance = new ko.nativeInMemoryTemplateEngine(App.Templates);
    ko.setTemplateEngine(ko.nativeInMemoryTemplateEngine.instance);

    ko.applyBindings(App.ViewModelManager.getViewModelInstance('todoMain'));
});