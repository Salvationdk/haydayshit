// todo http://stackoverflow.com/a/10906320
// go to https://www.facebook.com/HayDayOfficial , and find a post that many people likes,
// then find the @list of people who likes this@ url, something like
// https://www.facebook.com/browse/likes?id=722924617792108&actorid=297050457046195
// then scroll to the bottom of the page..
// then run this code
(function ClickAllAddFriendsButtons(){
var LikeButtons=document.querySelectorAll('.fbProfileBrowserListContainer')[0].querySelectorAll('.FriendRequestAdd');
var LikeButton=null;
var i=0;
for(i=0;i<LikeButtons.length;++i)
{
LikeButtons.item(i).click();
//console.log('clicked!');
//break;
}
console.log('clicked '+i+' times!');


})();