import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

// node-modules/emberfire/addon/adapters/firebase.js

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service(),
});
