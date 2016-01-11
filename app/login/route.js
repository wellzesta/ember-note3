// app/login/route.js

/*
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    sayHello: function(hash) {
    	alert('Hello world!');
    	console.log('Saying Hello to ', hash.name);
    },
    login: function() {
    	var _name = this.controller.get('name');
    	console.log('logging user: ', _name);
    	this.send('sayHello',{name: _name}); // calls sayHello, passing a hash
			// this.send('sayHello',_name); // calls sayHello, passing a variable
    }
  }
});

*/


import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      this.store.query('user', {
        name: this.controller.get('name')
      }).then((users) => {
        if(users.get('length') === 1) {
          var user = users.objectAt(0);
          this.controllerFor('application').set('user',user);
          this.transitionTo('notebooks');
          this.transitionTo('notebooks', user.get('id'));
        }
        else {
           console.log('unexpected query result');
        }
      });
    } 
  }
});

