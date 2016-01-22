angular

.module('bluecross')

.filter('capitalize', function() {
  return function(input, scope) {
    if (input) {
    	input = input.toLowerCase();
    	return input.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    }
    else {
    	return input
    }
  }
})

.filter('capitalizeFirst', function() {
  return function(input, scope) {
    if (input) {
    	return input.charAt(0).toUpperCase() + input.slice(1);
    }
    else {
    	return input
    }
  }
});