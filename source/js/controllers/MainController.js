app.controller('MainController', ['$scope', function($scope) {
  $scope.games = [
    {
      name: 'The Last Of Us',
      rank: 'Rank: ' + 1,
      release: 'Release Date: 14. June 2013',
      developer: 'Developer: Naughty Dog',
      genre: 'Genre: Action-adventure, Survival',
      cover: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg'
    },
    {
      name: 'GTA V',
      rank: 'Rank: ' + 2,
      release: 'Release Date: 17. September 2013',
      developer: 'Developer: Rockstar',
      genre: 'Genre: Action-adventure',
      cover: 'http://i.imgur.com/hEb5eQN.png'
    },
    {
      name: 'Mass Effect',
      rank: 'Rank: ' + 3,
      release: 'Release Date: 6. March 2012',
      developer: 'Developer: BioWare',
      genre: 'Genre: Adventure, Sci Fi',
      cover: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Mass_Effect_3_Game_Cover.jpg'
    },
    {
      name: 'The Witcher 3',
      rank: 'Rank: ' + 4,
      release: 'Release Date: 19. May 2015',
      developer: 'Developer: CD Project Red',
      genre: 'Genre: Action-adventure',
      cover: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
    },
    {
      name: 'Call of Duty: Modern Warfare 2',
      rank: 'Rank: ' + 5,
      release: 'Release Date: 10. November 2009',
      developer: 'Developer: Infinity Ward',
      genre: 'Genre: First person shooter',
      cover: 'https://upload.wikimedia.org/wikipedia/en/d/db/Modern_Warfare_2_cover.PNG'
    }
  ];
}]);
