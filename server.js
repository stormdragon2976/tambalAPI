var express = require('express');
var app = express();
var port = process.env.PORT || 8500;



var jokes = [
  {joke: 'Did you hear about the guy whose whole left side was cut off? He\'s all right now.'},
  {joke: "I'm reading a book about anti-gravity. It's impossible to put down."},
  {joke: "I wondered why the baseball was getting bigger. Then it hit me."},
  {joke: "It's not that the man did not know how to juggle, he just didn't have the balls to do it."},
  {joke: "I'm glad I know sign language, it's pretty handy."},
  {joke: "My friend's bakery burned down last night. Now his business is toast."},
  {joke: "Why did the cookie cry? It was feeling crumby."},
  {joke: "I used to be a banker, but I lost interest."},
  {joke: "A drum and a symbol fall off a cliff"},
  {joke: "Why do seagulls fly over the sea? Because they aren't bay-gulls!"},
  {joke: "Why did the fireman wear red, white, and blue suspenders? To hold his pants up."},
  {joke: "Why didn't the crab share his food? Because crabs are territorial animals, that don't share anything."},
  {joke: "Why was the javascript developer sad? Because he didn't Node how to Express himself."},
  {joke: "What do I look like? A JOKE MACHINE!?"},
  {joke: "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool."},
  {joke: "Why is it hard to make puns for kleptomaniacs? They are always taking things literally."},
  {joke: "Why do mermaid wear sea-shells? Because b-shells are too small."},
  {joke: "I'm a humorless, cold hearted, machine."},
  {joke: "Two fish in a tank. One looks to the other and says 'Can you even drive this thing???'"},
  {joke: "Two fish swim down a river, and hit a wall. One says: 'Dam!'"},
  {joke: "What's funnier than a monkey dancing with an elephant? Two monkeys dancing with an elephant."},
  {joke: "How did Darth Vader know what Luke was getting for Christmas? He felt his presents."},
  {joke: "What's red and bad for your teeth? A Brick."},
  {joke: "What's orange and sounds like a parrot? A Carrot."},
  {joke: "What do you call a cow with no legs? Ground beef"},
  {joke: "Two guys walk into a bar. You'd think the second one would have noticed."},
  {joke: "What is a centipedes's favorite Beatle song?  I want to hold your hand, hand, hand, hand..."},
  {joke: "What do you call a chicken crossing the road? Poultry in moton. "},
  {joke: "Did you hear about the Mexican train killer?  He had locomotives"},
  {joke: "What do you call a fake noodle?  An impasta"},
  {joke: "How many tickles does it take to tickle an octupus? Ten-tickles!"}, 
  {joke: "What is the hardest part about sky diving?  The ground."},
  {joke: "What does a leper say before he farts?  I don't know, but probably not 'pull my finger'."},
  {joke: "Why didn't the number 4 get into the nightclub?  Because he is 2 square."},
  {joke: "What is Napoleon's favorite part of a chicken?  The Boney-Part!"},
  {joke: "What did the blanket say as it fell off the bed?  Oh sheet!"},
  {joke: "What is the difference between snowmen and snowwomen?  Snowballs."},
  {joke: "How do fish get high?  Seaweed."},
  {joke: "Why are fish easy to weigh?  Because they have their own scales."},
  {joke: "Can a kangaroo jump higher than the Empire State Building?  Of course. The Empire State Building can't jump."},
  {joke: "What happens to a frog's car when it breaks down?  It gets toad."},
  {joke: "What do you get when you cross a chicken with a skunk?  A fowl smell!"},
  {joke: "What do you get when you cross a rabbit with a waterhose?  Hare spray."},
  {joke: "How do you count cows?  With a cowculator."},
  {joke: "What do you call a cow with two legs?  Lean beef."},
  {joke: "What kind of bees produce milk?  Boobies!"},
  {joke: "Why is the barn so noisy?  Because the cows have horns."},
Did you hear about the drunk frog?  He barley hops!"},
  {joke: "What do you call a fish with no eyes?  A fsh."},
  {joke: "Why was ten scared of seven?  Because seven ate nine."},
  {joke: "How do you make holy water?  Boil the hell out of it."},
  {joke: "What do you call a woman that sets her bills on fire?  Bernadette."},
  {joke: "What's the difference between roast beef and pea soup?  Anyone can roast beef but nobody can pee soup!"},
  {joke: "Why shouldn't you write with a broken pencil?  Because it's pointless!"},
  {joke: "What's the difference between a pygmy tribe and a high school girls track team?  The pygmy tribe is a bunch of cunning little runts."},
  {joke: "What do get if you cross a snowman with a vampire?  Frostbite!"},
  {joke: "What happens when you drop a piano down a mine shaft?  A minor B-flat!"},
  {joke: "What is the difference between erotic and kinky?  Erotic is using a feather....kinky is using the whole chicken!"},
  {joke: "What does a pirate pay for his corn?  A buccaneer!"},
  {joke: "Why are pirates called pirates?  Because they arrr!"},
  {joke: "Why couldn't the kid see the pirate movie?  Because it was rated arrr!"},
  {joke: "Why did the house go to the doctor?  It was having window panes."},
  {joke: "What are the best kind of letters to read in hot weather?  Fan mail."},
  {joke: "What's 6 inches long, 2 inches wide and drives women wild?  a $100 bill!"},
  {joke: "What's black and tan and looks great on a lawyer? A Doberman Pinscher!"},
  {joke: "At the rate law schools are turning them out, by 2050 there will be more lawyers than humans."}
];

app.get('/', function(req, res){
  res.json(jokes);
});

app.get('/joke/random', function(req, res){
  var index = Math.floor(Math.random() * jokes.length);
  var randomQuote = jokes[index];
  res.json(randomQuote);
});

app.get('/joke/:id', function(req, res) {
  if(jokes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No joke found');
  }  
var q = jokes[req.params.id];
  res.json(q);
});

app.listen(port, function(){
  console.log('Listening in on ' + port);
});

