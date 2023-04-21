// Using JS we are limited on applying different events. 
// What if we want more events to be occur when button is clicked

/*
document.getElementById('awesomeBtn').onclick = () => {
    console.log('I clicked button!');
};
*/

// By usin JQuery allow us to add different events 
$('#awesomeBtn').click(() => {
    console.log('I clicked button!');
});

// treehouse puppies' project
/*
$('.loc').hover(
    () => {
        $(this).html("<strong>Location:</strong> Your house?!");
    },
    () => {
        $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
    }
);
*/

// we can use the value entered into the form to manipulate the DOM
// get info from the form
const $name = $('#pet-name');
const $species = $('#pet-species');
const $notes = $('#pet-notes');

// Assemble the HTML of our new element with the above variables
const $newPet = $(
    '<section class="six columns"><div class="card"><p><strong>Name:</strong>' + $name.val() +
    '</p><p><strong>Species:</strong>' + $species.val() +
    '</p><p><strong>Notes:</strong>' + $notes.val() +
    '</p><span class="close">&times;</span><div></section>'
);

// attach the new element to the page by checking specified "div" in the page
$('#posted-pets').append($newPet);

// showing and hidding the content
$('img').css('display', 'none').fadeIn(1600);

// empty() and remove() methods
$('#one').click(() => {
    $('#one').empty();
});

$('#two').click(() => {
    $('#two').remove();
});