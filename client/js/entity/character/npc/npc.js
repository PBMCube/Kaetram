define(['../character'], function(Character) {

    return Character.extend({

        init: function(id, kind) {
            var self = this;

            self._super(id, kind);
        },

        idle: function() {
            this._super();
        },

        setSprite: function(sprite) {
            this._super(sprite);
        },

        setName: function(name) {
            this._super(name);
        },

        setGridPosition: function(x, y) {
            this._super(x, y);
        }

    });

});