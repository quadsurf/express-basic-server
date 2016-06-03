var express = require('express');
var app = express();

var animalObj = {
  'dog': 'The domestic dog (Canis lupus familiaris or Canis familiaris) is a domesticated canid which has been selectively bred over millennia for various behaviours, sensory capabilities, and physical attributes.',
  'cat': 'The domestic cat (Latin: Felis catus) or the feral cat (Latin: Felis silvestris catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often valued by humans for companionship and for their ability to hunt vermin. There are more than 70 cat breeds; different associations proclaim different numbers according to their standards.',
  'fish': 'A fish is any member of a paraphyletic group of organisms that consist of all gill-bearing aquatic craniate animals that lack limbs with digits. Included in this definition are the living hagfish, lampreys, and cartilaginous and bony fish, as well as various extinct related groups. Most fish are ectothermic ("cold-blooded"), allowing their body temperatures to vary as ambient temperatures change, though some of the large active swimmers like white shark and tuna can hold a higher core temperature. Fish are abundant in most bodies of water. They can be found in nearly all aquatic environments, from high mountain streams (e.g., char and gudgeon) to the abyssal and even hadal depths of the deepest oceans (e.g., gulpers and anglerfish). With 33,100 described species, fish exhibit greater species diversity than any other group of vertebrates.',
  'dick': 'The buffoon who thought he could win a US Presidential Election!'
}

app.use(express.static('public'));

app.get('/someanimal/:kind', function(req, res) {

    if (req.params.kind == 'dog'){
      res.send(`<img src="https://hackbrightacademy.com/content/uploads/2016/01/puppy-coding.jpg"> <h2>${animalObj['dog']}</h2>`);
    }

    if (req.params.kind == 'cat'){
      res.send(`<img src="http://i.giphy.com/gwtvXh7X7or04.gif"> <h2>${animalObj['cat']}</h2>`);
    }

    if (req.params.kind == 'fish'){
      res.send(`<img src="http://i.giphy.com/MgQTEX0m08TQc.gif"> <h2>${animalObj['fish']}</h2>`);
    }

    if (req.params.kind == 'dick'){
      res.send(`<img src="http://i.giphy.com/xT4uQ8nbHSmRd7fb56.gif"> <h2>${animalObj['dick']}</h2>`);
    }

  });

app.listen(1337, function(){
  console.log('Server Running on 1337');
})




// app.post('/ajaxrequest', function(req,res){
//
//   res.json(req.body);
//   });












// var express = require('express');
// var app = express();
//
// //next is like middleware tasks that happen between req and res
// app.get('/', function(req,res,next){
//   res.send('Hello World');
//   });
//
// app.get('/about', function(req,res,next){
//   res.send('<h1>About Us</h1>');
//   res.render([jade|handlebars|underscore|mustache]);
//   });
//
// // url/users/:name
// // req.param.name
// // its like a variable that can accept any john/jane in url
//
// // req.body
//
// app.post('/login', function(req,res){
//   //check auth
//   //or
//   //console.log(req.body);
//   //res.json(req.body);
//   });
//
// //res.end >
// //res.json() >
// //res.redirect() >
// //res.render() >
// //res.send() >
// //res.sendFile() >
// //res.sendStatus() >
//
// //static
// //app.use(express.static('public'));
//
// app.listen(1337, '127.0.0.1', function (){
//   console.log('Server Running on 1337');
//   });
