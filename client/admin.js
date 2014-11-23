Template.admin.events({
    'click .fa-close': function(event, template) {
        PlaylistsCollection.remove({
            _id: this._id
        });
    },
    'change .shopresponse': function(event, template) {
        this.shopResponse = event.target.value;
    }
});