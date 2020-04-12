
$(document).ready(() => {

  
  //$(".jumbotron").append('<div><button id="toTop"> Back to Top </button></div>')

  //$("#toTop").click(() => $('html, body').animate({scrollTop : 0},800));
  
  $('#mainContainer').css("padding", "60px")
  $('.jumbotron').css("opacity", "0.8")
  $("p").css("font-family", "Arial, Helvetica, sans-serif")
  
  //$("#userTweet").prepend('<div id = "tweetJumbo" class = "jumbotron"><input type="text" id="userID" placeholder = "User"> </input><input type="text" id="message" placeholder = "Kompose your Tweet"> </input><button id="tweetBtn">Tweet</button></div>')

  $('#header').css("text-align", "center")
  $('h1').css("font-size", "80px")
  const counter = streams.home.length;
  //setInterval(() => console.log(counter), 3000)
  
  // Main Feed
  function addTweetsMain(array) {
    array.forEach((tweet) => $('#userJumbo').prepend(`<p> <a href = "#${tweet.user}" class = "userID"> @${tweet.user} </a>: ${tweet.message} || ${tweet.created_at.toLocaleDateString()} || ${moment(tweet.created_at).fromNow()}</p>`))

  }
  
  addTweetsMain(streams.home.slice(-counter))

  setInterval(() => {return addTweetsMain(streams.home.slice(-(streams.home.length - counter)))}, 1000)
  //setInterval(() => (console.log(streams.home.length - counter)), 1000)

  //shawndrost Feed
  const shawnCount = streams.users.shawndrost.length
  function addTweetsShawn(array) {
    array.forEach((tweet) => {
      
      if(tweet.user === "shawndrost") {
      $('#shawndrostJumbo').prepend(`<p> <a href = "#${tweet.user}" class = "userID"> @${tweet.user} </a>: ${tweet.message} || ${tweet.created_at.toLocaleDateString()} || ${moment(tweet.created_at).fromNow()}</p>`)}
      })
  }

  addTweetsShawn(streams.users.shawndrost.slice(-3))
  setInterval(() => {return addTweetsShawn(streams.users.shawndrost.slice(-(streams.users.shawndrost.length - shawnCount)))}, 8000)

  //sharksforcheap Feed
  const sharksCount = streams.users.sharksforcheap.length
  const sharkTweets = streams.users.sharksforcheap;
  function addTweetsSharks(array) {
    array.forEach((tweet) => {
      if(tweet.user === "sharksforcheap") {
      $('#sharksforcheapJumbo').prepend(`<p> <a href = "#${tweet.user}" class = "userID"> @${tweet.user} </a>: ${tweet.message} || ${tweet.created_at.toLocaleDateString()} || ${moment(tweet.created_at).fromNow()}</p>`)}
    })
  }

  addTweetsSharks(sharkTweets.slice(-3))
  setInterval(() => {return addTweetsSharks(sharkTweets.slice(-(sharkTweets.length - sharksCount)))}, 8000)

  // mracus
    const mracusCount = streams.users.mracus.length
    const mracusTweets = streams.users.mracus;
    function addTweetsMracus(array) {
      array.forEach((tweet) => {
        if(tweet.user === "mracus") {
        $('#mracusJumbo').prepend(`<p> <a href = "#${tweet.user}" class = "userID"> @${tweet.user} </a>: ${tweet.message} || Date: ${tweet.created_at.toLocaleDateString()} || ${moment(tweet.created_at).fromNow()}</p>`)}
      })
    }
  
    addTweetsMracus(mracusTweets.slice(-3))
    setInterval(() => {return addTweetsMracus(mracusTweets.slice(-(mracusTweets.length - mracusCount)))}, 8000)

      // douglascalhoun
      const dougCount = streams.users.douglascalhoun.length
      const dougTweets = streams.users.douglascalhoun;
      function addTweetsDoug(array) {
        array.forEach((tweet) => {
          if(tweet.user === "douglascalhoun") {
          $('#douglascalhounJumbo').prepend(`<p> <a href = "#${tweet.user}" class = "userID"> @${tweet.user} </a>: ${tweet.message} || ${tweet.created_at.toLocaleDateString()} || ${moment(tweet.created_at).fromNow()}</p>`)}
        })
      }
    
      addTweetsMracus(dougTweets.slice(-3))
      setInterval(() => {return addTweetsDoug(dougTweets.slice(-(dougTweets.length - dougCount)))}, 8000)


  $("#tweetBtn").click(function () {
    var str = $('#message').val();
    window.visitor = document.getElementById('userID').value,    
    writeTweet(str);
    
  });


  // const $tweets = streams.home.map((tweet) => {
  //   const $tweet = $('<div id = "tweet" class = "text"> </div>').css('margin', '5px').css('font', 'Arial')
  //   //const $dateCleanup = moment(tweet.created_at)
  //   const userText = `@${tweet.user}: `
  //   const userTweet = `${tweet.message}`
  //   const tweetDate = moment(tweet.created_at).format('llll')
  //   const momentAgo = moment(tweet.created_at).startOf('second').fromNow()

  //   //$('#tweetP').text(text)
  //   $tweet.text(userText + userTweet + " " + tweetDate + " " + momentAgo)

  //   return $tweet;
  // }










  
  




});
