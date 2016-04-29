var app = angular.module("myApp", []);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcmlwdC5qcyIsImNvbnRyb2xsZXJzL01haW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcIm15QXBwXCIsIFtdKTtcbiIsImZ1bmN0aW9uIG9wZW5OYXYoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGVuYXZcIikuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTmF2KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpLnN0eWxlLndpZHRoID0gXCIwXCI7XG59XG4iLCJhcHAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAkc2NvcGUuZ2FtZXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1RoZSBMYXN0IE9mIFVzJyxcbiAgICAgIHJhbms6ICdSYW5rOiAnICsgMSxcbiAgICAgIHJlbGVhc2U6ICdSZWxlYXNlIERhdGU6IDE0LiBKdW5lIDIwMTMnLFxuICAgICAgZGV2ZWxvcGVyOiAnRGV2ZWxvcGVyOiBOYXVnaHR5IERvZycsXG4gICAgICBnZW5yZTogJ0dlbnJlOiBBY3Rpb24tYWR2ZW50dXJlLCBTdXJ2aXZhbCcsXG4gICAgICBjb3ZlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzQvNDYvVmlkZW9fR2FtZV9Db3Zlcl8tX1RoZV9MYXN0X29mX1VzLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHVEEgVicsXG4gICAgICByYW5rOiAnUmFuazogJyArIDIsXG4gICAgICByZWxlYXNlOiAnUmVsZWFzZSBEYXRlOiAxNy4gU2VwdGVtYmVyIDIwMTMnLFxuICAgICAgZGV2ZWxvcGVyOiAnRGV2ZWxvcGVyOiBSb2Nrc3RhcicsXG4gICAgICBnZW5yZTogJ0dlbnJlOiBBY3Rpb24tYWR2ZW50dXJlJyxcbiAgICAgIGNvdmVyOiAnaHR0cDovL2kuaW1ndXIuY29tL2hFYjVlUU4ucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ01hc3MgRWZmZWN0JyxcbiAgICAgIHJhbms6ICdSYW5rOiAnICsgMyxcbiAgICAgIHJlbGVhc2U6ICdSZWxlYXNlIERhdGU6IDYuIE1hcmNoIDIwMTInLFxuICAgICAgZGV2ZWxvcGVyOiAnRGV2ZWxvcGVyOiBCaW9XYXJlJyxcbiAgICAgIGdlbnJlOiAnR2VucmU6IEFkdmVudHVyZSwgU2NpIEZpJyxcbiAgICAgIGNvdmVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vYi9iMC9NYXNzX0VmZmVjdF8zX0dhbWVfQ292ZXIuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1RoZSBXaXRjaGVyIDMnLFxuICAgICAgcmFuazogJ1Jhbms6ICcgKyA0LFxuICAgICAgcmVsZWFzZTogJ1JlbGVhc2UgRGF0ZTogMTkuIE1heSAyMDE1JyxcbiAgICAgIGRldmVsb3BlcjogJ0RldmVsb3BlcjogQ0QgUHJvamVjdCBSZWQnLFxuICAgICAgZ2VucmU6ICdHZW5yZTogQWN0aW9uLWFkdmVudHVyZScsXG4gICAgICBjb3ZlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzAvMGMvV2l0Y2hlcl8zX2NvdmVyX2FydC5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FsbCBvZiBEdXR5OiBNb2Rlcm4gV2FyZmFyZSAyJyxcbiAgICAgIHJhbms6ICdSYW5rOiAnICsgNSxcbiAgICAgIHJlbGVhc2U6ICdSZWxlYXNlIERhdGU6IDEwLiBOb3ZlbWJlciAyMDA5JyxcbiAgICAgIGRldmVsb3BlcjogJ0RldmVsb3BlcjogSW5maW5pdHkgV2FyZCcsXG4gICAgICBnZW5yZTogJ0dlbnJlOiBGaXJzdCBwZXJzb24gc2hvb3RlcicsXG4gICAgICBjb3ZlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2QvZGIvTW9kZXJuX1dhcmZhcmVfMl9jb3Zlci5QTkcnXG4gICAgfVxuICBdO1xufV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
