var app = angular.module("myApp", []);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

app.controller('MainController', ['$scope', function($scope) {
  //Object containing the games
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcmlwdC5qcyIsImNvbnRyb2xsZXJzL01haW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKFwibXlBcHBcIiwgW10pO1xuIiwiZnVuY3Rpb24gb3Blbk5hdigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VOYXYoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGVuYXZcIikuc3R5bGUud2lkdGggPSBcIjBcIjtcbn1cbiIsImFwcC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gIC8vT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGdhbWVzXG4gICRzY29wZS5nYW1lcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnVGhlIExhc3QgT2YgVXMnLFxuICAgICAgcmFuazogJ1Jhbms6ICcgKyAxLFxuICAgICAgcmVsZWFzZTogJ1JlbGVhc2UgRGF0ZTogMTQuIEp1bmUgMjAxMycsXG4gICAgICBkZXZlbG9wZXI6ICdEZXZlbG9wZXI6IE5hdWdodHkgRG9nJyxcbiAgICAgIGdlbnJlOiAnR2VucmU6IEFjdGlvbi1hZHZlbnR1cmUsIFN1cnZpdmFsJyxcbiAgICAgIGNvdmVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vNC80Ni9WaWRlb19HYW1lX0NvdmVyXy1fVGhlX0xhc3Rfb2ZfVXMuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0dUQSBWJyxcbiAgICAgIHJhbms6ICdSYW5rOiAnICsgMixcbiAgICAgIHJlbGVhc2U6ICdSZWxlYXNlIERhdGU6IDE3LiBTZXB0ZW1iZXIgMjAxMycsXG4gICAgICBkZXZlbG9wZXI6ICdEZXZlbG9wZXI6IFJvY2tzdGFyJyxcbiAgICAgIGdlbnJlOiAnR2VucmU6IEFjdGlvbi1hZHZlbnR1cmUnLFxuICAgICAgY292ZXI6ICdodHRwOi8vaS5pbWd1ci5jb20vaEViNWVRTi5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWFzcyBFZmZlY3QnLFxuICAgICAgcmFuazogJ1Jhbms6ICcgKyAzLFxuICAgICAgcmVsZWFzZTogJ1JlbGVhc2UgRGF0ZTogNi4gTWFyY2ggMjAxMicsXG4gICAgICBkZXZlbG9wZXI6ICdEZXZlbG9wZXI6IEJpb1dhcmUnLFxuICAgICAgZ2VucmU6ICdHZW5yZTogQWR2ZW50dXJlLCBTY2kgRmknLFxuICAgICAgY292ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi9iL2IwL01hc3NfRWZmZWN0XzNfR2FtZV9Db3Zlci5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVGhlIFdpdGNoZXIgMycsXG4gICAgICByYW5rOiAnUmFuazogJyArIDQsXG4gICAgICByZWxlYXNlOiAnUmVsZWFzZSBEYXRlOiAxOS4gTWF5IDIwMTUnLFxuICAgICAgZGV2ZWxvcGVyOiAnRGV2ZWxvcGVyOiBDRCBQcm9qZWN0IFJlZCcsXG4gICAgICBnZW5yZTogJ0dlbnJlOiBBY3Rpb24tYWR2ZW50dXJlJyxcbiAgICAgIGNvdmVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vMC8wYy9XaXRjaGVyXzNfY292ZXJfYXJ0LmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYWxsIG9mIER1dHk6IE1vZGVybiBXYXJmYXJlIDInLFxuICAgICAgcmFuazogJ1Jhbms6ICcgKyA1LFxuICAgICAgcmVsZWFzZTogJ1JlbGVhc2UgRGF0ZTogMTAuIE5vdmVtYmVyIDIwMDknLFxuICAgICAgZGV2ZWxvcGVyOiAnRGV2ZWxvcGVyOiBJbmZpbml0eSBXYXJkJyxcbiAgICAgIGdlbnJlOiAnR2VucmU6IEZpcnN0IHBlcnNvbiBzaG9vdGVyJyxcbiAgICAgIGNvdmVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vZC9kYi9Nb2Rlcm5fV2FyZmFyZV8yX2NvdmVyLlBORydcbiAgICB9XG4gIF07XG59XSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
