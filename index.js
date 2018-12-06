document.getElementById(container)

var header = document.createElement('header');
container.appendChild(header);
header.setAttribute("class", "mainheader")

var heading = document.createElement('h1');
heading.textContent = 'HighOnCoding';
header.appendChild(heading);
heading.setAttribute('class','heading')

var navbar = document.createElement('div');
header.appendChild(navbar);
navbar.setAttribute('class', 'navbar')

var link1 = document.createElement('div');
link1.textContent = 'Home';
navbar.appendChild(link1);
link1.setAttribute('class', ('link1'))

var link2 = document.createElement('div');
link2.textContent = 'Category';
navbar.appendChild(link2);
link2.setAttribute('class','link2')

var bodydiv = document.createElement('div');
container.appendChild(bodydiv);
bodydiv.setAttribute('id', 'bodydiv');


var inbodydiv1 = document.createElement('div');
inbodydiv1.textContent = 'Curse of the Current Reviews';
bodydiv.appendChild(inbodydiv1);
inbodydiv1.setAttribute('class','inbodydiv1');

var inDiv1text = document.createElement('div');
inDiv1text.textContent = 'Does the lisp impair the located manifesto? The tongue jokes behind its warmed misery. Her reign restrains the social stereotype underneath the bandwagon. Every horrifying bitmap smiles. A face crashs into the exploited roof. Near a squashed blood stalls an asleep thief.';
inbodydiv1.appendChild(inDiv1text);
inDiv1text.setAttribute('class','inDiv1text');


var inbodydiv2 = document.createElement('div');
bodydiv.appendChild(inbodydiv2);
inbodydiv2.setAttribute('class','inbodydiv2');

var ininbodydiv1 = document.createElement('div');
ininbodydiv1.textContent = 'HelloWatchKit';
inbodydiv2.appendChild(ininbodydiv1);
ininbodydiv1.setAttribute('class','ininbodydiv1');

var ininDiv1text = document.createElement('div');
ininDiv1text.textContent = "A category jacks my filthy abandon. The apparatus mints the recipient. An automated stair rests after the ancestor. The flesh scans the doubt. Why can't the signature collapse above the unusable cage";
ininbodydiv1.appendChild(ininDiv1text);
ininDiv1text.setAttribute('class','ininDiv1text');

var ininDiv1foot = document.createElement('div')
ininDiv1foot.textContent = "\xa012 comments" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "124 likes"
ininbodydiv1.appendChild(ininDiv1foot);
ininDiv1foot.setAttribute('class', 'ininDiv1foot')

var ininbodydiv2 = document.createElement('div');
ininbodydiv2.textContent = 'Introduction to Swift';
inbodydiv2.appendChild(ininbodydiv2);
ininbodydiv2.setAttribute('class','ininbodydiv2');

var ininDiv2text = document.createElement('div');
ininDiv2text.textContent = 'The unaware occurrence barks. A bulk blank laughs. Next to a horizon persists a chart. Can the profile starve?';
ininbodydiv2.appendChild(ininDiv2text);
ininDiv2text.setAttribute('class','ininDiv2text');

var ininDiv2foot = document.createElement('div')
ininDiv2foot.textContent = "\xa015 comments" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "45 likes"
ininbodydiv2.appendChild(ininDiv2foot);
ininDiv2foot.setAttribute('class', 'ininDiv2foot')


// for(x=0, x<2; x++;){
//     var inbodydiv = document.createElement('div');
//     container.appendChild(inbodydiv);
//     document.getElementById('bodydiv').appendChild(inbodydiv)
// }


