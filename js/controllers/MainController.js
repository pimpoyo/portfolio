app.controller('MainController', ['$scope',
function($scope){
	$scope.images = [{
		image: 'img/cartel_min.jpg',
		className: '[all, photoshop]',
		text: 'Texto para el alt'
	},
	{
		image: 'img/modelo_min.jpg',
		className: '[all, photoshop]',
		text: 'Texto para el alt'
	},
	{
		image: 'img/mundial_min.jpg',
        className: '[all, photoshop]',
        text: 'Texto para el alt'
	},
    {
		image: 'img/nombre_min.jpg',
        className: '[all, photoshop]',
        text: 'Texto para el alt'
	}];	
}]);
