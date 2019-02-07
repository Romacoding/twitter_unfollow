// Scroll down the list
setInterval(function() {
    window.scrollTo(0, document.body.scrollHeight);
  }, 2000);

//delete the users if they don't follow you
var count = 0;
function autoScrolling() {
  window.scrollTo(0, document.body.scrollHeight);
  $('.ProfileCard-content').each(function() {
    var status = $(this)
      .find('.FollowStatus')
      .text();
    var unfollowButton = $(this).find('.user-actions-follow-button');
    if (status != 'follows you') {
      unfollowButton.click();
    }
  });
}

if (count <= 400) {
  setInterval(autoScrolling, 10000);
  count++;
}

///Note: you need to load jquery code in the console for this to work