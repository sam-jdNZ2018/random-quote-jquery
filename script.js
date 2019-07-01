const QUOTES = [
[
"If you don't like the road you're walking, start paving another one.",
"Dolly Parton"],

[
"The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
"Helen Keller"],

["Life is a series of baby steps.", "Hoda Kotb"],
["Love yourself first and everything else falls into line.", "Lucille Ball"],
["Lead from the heart, not the head.", "Princess Diana"],
["Those who don't believe in magic will never find it.", "Roald Dahl"],
[
"I've failed over and over and over again in my life and that is why I succeed.",
"Michael Jordan"],

["Nothing can dim the light that shines from within.", "Maya Angelou"],
[
"Sometimes you will never know the value of a moment until it becomes a memory.",
"Dr. Seuss"],

[
"You can't go back and change the beginning, but you can start where you are and change the ending.",
"C.S. Lewis"]];



const COLORS = ["rgb(255, 51, 0)", "rgb(255, 153, 0)", "rgb(153, 102, 51)", "rgb(179, 0, 89)", "rgb(230, 184, 0)", "rgb(204, 204, 0)", "rgb(153, 204, 0)", "rgb(255, 102, 102)", "rgb(0, 51, 102)", "rgb(51, 51, 255)", "rgb(102, 153, 153)", "rgb(51, 153, 102)", "rgb(153, 153, 255)", "rgb(153, 0, 204)", "rgb(0, 51, 0)"];

$(document).ready(function () {

  function setQuote() {
    let i = Math.floor(Math.random() * QUOTES.length);
    $("#quote-text").text(QUOTES[i][0]);
    $("#author").text(QUOTES[i][1]);
    setColor();
    setLinks(QUOTES[i]);
  }
  function setColor() {
    let j = Math.floor(Math.random() * COLORS.length);
    $("body").css("background-color", COLORS[j]);
    $("#new-quote").css("background-color", COLORS[j]);
    $("#tweet-quote").css("background-color", COLORS[j]);
    $("#tumble-quote").css("background-color", COLORS[j]);
  }

  function setLinks(quote) {
    let twink = "https://twitter.com/intent/tweet?text=" + quote[0] + ".  -- " + quote[1];
    let tulink = "https://www.tumblr.com/widgets/share/tool?posttype=quote&title=DailyQuote&content=" + quote[0] + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
    $("#tweet-quote").attr("href", twink);
    $("#tumble-quote").attr("href", tulink);
  }
  //Initial quote settings
  setQuote();

  $("#new-quote").click(function () {
    setQuote();
  });
});