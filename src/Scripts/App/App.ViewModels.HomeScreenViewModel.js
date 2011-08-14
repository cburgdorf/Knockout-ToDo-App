(function (App) {
    App.ViewModels.HomeScreenViewModel = function () {
        var self = {};

        self.todoCollection = ko.observableArray([]);
        self.newItem = ko.observable("");
        self.addItem = function () {
            self.todoCollection.push({
                content: self.newItem()
            });
        };
        self.removeItem = function (item) {
            self.todoCollection.remove(item);
        };

        self.showHitEnterHint = ko.dependentObservable(function () {
            return self.newItem().length > 0;
        });

        return self;
    };
})(App)