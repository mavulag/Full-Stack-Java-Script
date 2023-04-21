$(document).ready(() => {
    $('button').click(() => {
        $("button").removeClass("selected");
        $(this).addClass("selected");
        let flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        let animal = $(this).text();
        let flickrOptions = {
            tags: animal,
            format: "json",
        };
        displayPhotos = (data) => {
            let photoHTML = '<ul>';
            $.each( data.items, (i, photo) => {
                photoHTML += '<li class="">';
                photoHTML += '<a href="' + photo.link + '" class="image"';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
            });
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
        }
        $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    });
}); // end ready