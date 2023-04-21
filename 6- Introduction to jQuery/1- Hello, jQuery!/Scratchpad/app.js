/*
var myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
    myList[i].addEventListener('click', () => {
        // or this.textContent = 'Clicked';
        myList[i].textContent = 'Clicked!';
    });
}
*/

// By using JQuery
/*
$ is a shortcut for JQuery,
can be used interchangeable
*/
/*
var myList = $('li');

myList.click(function() {
  $(this).text('Clicked!');
});
*/

$('li').click(function() {
    $(this).text('Clicked!').delay(800).fadeOut(1600);
});

// $('li').not(':even').css('background-color', 'red');

/*
Element Selectors in JQuery
$('li') select list element
$('a') selelct a element
$('img') select image element
$('p') select paragraph element

Descendant Selectors to get more specific
$('p a') grab all links inside the paragraph

Classes and IDs Selectors
$('.class_name')
$('#id_name')

Attribute Selectors
$([name='name_of_attribute'])
*/ 

// Change destination by clicking button by using JQuery
$('button').click(function() {
    $('a').attr('href', 'https://www.github.com/'); 
});

// to open a link in a new tab
$('a').not('[href="my-domain.com"]').attr("target", "_blank");