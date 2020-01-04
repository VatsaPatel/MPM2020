
flag = true;
var nbc = 0;
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height() && nbc==0) {
        first = $('#first').val();
        limit = $('#limit').val();
        no_data = true;
        if (flag && no_data) {
            flag = false;
            $('#loader1').show();
            $.ajax({
                url: 'api/profileload.php',
                dataType: "json",
                method: 'post',
                data: {
                    start: first,
                    limit: limit,
                    pr_id: $('#pr_id').val()
                },
                success: function (data) {
                    flag = true;
                    $('#loader1').hide();
                    if (data.count > 0) {
                        first = parseInt($('#first').val());
                        limit = parseInt($('#limit').val());
                        $('#first').val(first + limit);
                        $('#timeline-conatiner');
                        $.each(data.content, function (key, value) {
                            if (value.post_type == 'basic') {
                                html = ' <div class="basic-post"> <div class="post-top card_s share full-width"> <div class="card_s-header clearfix"> <div class="user-pic"> <img alt="Profile Image" width="33" height="33"';
                                html += 'src="' + value.sender_image + '"';
                                html += '> </div><div> <img src="assets/images/3dots.svg" class="post-top-options" aria-hidden="true"/> <h2 class="post-top-time">';
                                html += value.create_date;
                                html += '</h2> <a href="profile.php?id=' + value.post_sender + '" class="post-top-name">' + value.sender_name + '</a> <h2 class="post-top-batch">' + value.sender_batch + '</h2> <h2 class="post-top-desgnation">' + value.sender_designation + '</h2> </div></div><div class="post-top-line"></div><div class="card_s-description"> <br><p class="post-top-text">';
                                html += value.content;
                                html += '</p></div>';

                                if (value.media_type == 'video' && value.media != '') {
                                    html += '<div class="embed-responsive embed-responsive-16by9">';
                                    html += '<iframe frameborder="0" allowfullscreen="allowfullscreen" src="' + value.media + '" class="embed-responsive-item"></iframe>';
                                    html += '</div>';
                                }

                                if (value.media_type == 'video' && value.media != '') {
                                    html += '<div class="embed-responsive embed-responsive-16by9">';
                                    html += '<iframe frameborder="0" allowfullscreen="allowfullscreen" src="' + value.media + '" class="embed-responsive-item"></iframe>';
                                    html += '</div>';
                                }

                                if (value.media_type == 'image' && value.media != '') {
                                   
                                    html += ' <div id="demo-test-gallery" class="demo-gallery" data-pswp-uid="1">';

                                    html += '<a href="api/' + value.attach1 + '" data-size="' + value.attach1.split('@')[1].split('.')[0] + '" data-author="' + value.post_sender + '">';
                                    html += '<img src="api/' + value.attach1.split('@')[0] + '_thumbnail.' + value.attach1.split('.')[1] + '" style="height: 400px;object-fit: cover;background-position: 50% 50%;" />';
                                    html += '<figure hidden>' + value.content + '</figure>';
                                    html += '</a>';

                                    if (value.attach2) {
                                        html += '<a href="api/' + value.attach2 + '" data-size="' + value.attach2.split('@')[1].split('.')[0] + '" data-author="' + value.post_sender + '">';
                                        html += '<img src="api/' + value.attach2.split('@')[0] + '_thumbnail.' + value.attach2.split('.')[1] + '" style="height: 400px;object-fit: cover;background-position: 50% 50%;" />';
                                        html += '<figure hidden>' + value.content + '</figure>';
                                        html += '</a>';
                                    }

                                    if (value.attach3) {
                                        html += '<a href="api/' + value.attach3 + '" data-size="' + value.attach3.split('@')[1].split('.')[0] + '" data-author="' + value.post_sender + '">';
                                        html += '<img src="api/' + value.attach3.split('@')[0] + '_thumbnail.' + value.attach3.split('.')[1] + '" style="height: 400px;object-fit: cover;background-position: 50% 50%;" />';
                                        html += '<figure hidden>' + value.content + '</figure>';
                                        html += '</a>';
                                    }

                                    if (value.attach4) {
                                        html += '<a href="api/' + value.attach4 + '" data-size="' + value.attach4.split('@')[1].split('.')[0] + '" data-author="' + value.post_sender + '">';
                                        html += '<img src="api/' + value.attach4.split('@')[0] + '_thumbnail.' + value.attach4.split('.')[1] + '" style="height: 400px;object-fit: cover;background-position: 50% 50%;" />';
                                        html += '<figure hidden>' + value.content + '</figure>';
                                        html += '</a>';
                                    }

                                    if (value.attach5) {
                                        html += '<a href="api/' + value.attach5 + '" data-size="' + value.attach5.split('@')[1].split('.')[0] + '" data-author="' + value.post_sender + '">';
                                        html += '<img src="api/' + value.attach5.split('@')[0] + '_thumbnail.' + value.attach5.split('.')[1] + '" style="height: 400px;object-fit: cover;background-position: 50% 50%;" />';
                                        html += '<figure hidden>' + value.content + '</figure>';
                                        html += '</a>';
                                    }

                                    html += '</div>';

                                }

                                html += '<div class="card_s-footer clearfix"> <ul class="reactions"> <li class="post-top-like-number"></li><heart></heart> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="92px" height="92px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve" class="post-top-comment"> <path id="XMLID_1284_" d="M88,6H4c-2.2,0-4,1.8-4,4v51.1C0,63.3,1.8,65,4,65h47v17c0,1.7,1.3,3.2,2.8,3.8c0.5,0.2,1,0.2,1.5,0.2c1.2,0,2.3-0.5,3.1-1.4L75,65h13c2.2,0,4-1.7,4-3.9V10C92,7.8,90.2,6,88,6z M84,57H73.2c-1.2,0-2.5,0.6-3.3,1.4L59,71.1v-10c0-2.2-1.4-4.1-3.6-4.1H8V14h76V57z M18.6,28c0-2.2,1.8-4,4-4h29c2.2,0,4,1.8,4,4s-1.8,4-4,4h-29C20.4,32,18.6,30.2,18.6,28z M62.5,31.1c-0.7-0.7-1.2-1.8-1.2-2.8c0-1.1,0.4-2.1,1.2-2.8c0.8-0.8,1.8-1.2,2.8-1.2c1.1,0,2.1,0.4,2.8,1.2c0.7,0.7,1.2,1.8,1.2,2.8c0,1.1-0.4,2.1-1.2,2.8c-0.8,0.8-1.8,1.2-2.8,1.2C64.3,32.2,63.3,31.8,62.5,31.1z"></path> </svg> <h6 class="post-top-comment-text">Comment</h6> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="92px" height="92px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve" class="post-top-comment"> <path id="XMLID_530_" d="M13,75c-0.3,0-0.7,0-1-0.1c-1.8-0.5-3-2-3-3.9c0-0.6,0.1-15.9,11.5-27.3c7.3-7.3,17.3-11.3,29.9-12V21c0-1.6,1-3.1,2.5-3.7c1.5-0.6,3.2-0.3,4.4,0.9l24.6,25c1.5,1.6,1.5,4.1,0,5.6l-24.6,25c-1.1,1.2-2.9,1.5-4.4,0.9c-1.5-0.6-2.5-2.1-2.5-3.7V60.2c-8-0.2-27,0.6-33.9,12.8C15.8,74.2,14.4,75,13,75z M48.2,52.1c3.7,0,6.3,0.3,6.6,0.3c2,0.2,3.6,1.9,3.6,4v4.8l15-15.2l-15-15.2v4.8c0,2.2-1.8,4-4,4c-12.3,0-21.8,3.3-28.2,9.8c-2.9,2.9-4.9,6.2-6.3,9.3C29.2,53.1,41,52.1,48.2,52.1z"></path> </svg> <h6 class="post-top-comment-text">Share</h6> </ul> </div></div></div>';
                            }
                            $('#feed').append(html);


                        });
                        var pos = 0,
                            dpos = 3.5714,
                            cycle,
                            heart = false,
                            animating = false;

                        $('heart').click(function () { }, function () {
                            if (heart && !animating) {
                                $('heart').css('background-position', '0 0');
                                heart = false;
                            } else if (!animating) {
                                animating = true;
                                animate();
                            }
                        });

                        function animate() {
                            cycle = setInterval(increment, 50);
                        }

                        function increment() {
                            pos += dpos;
                            if (pos > 100) {
                                clearInterval(cycle);
                                heart = true;
                                animating = false;
                                pos = 0;
                            } else {
                                $('heart').css('background-position', pos + '% 0');
                            }
                        }
                        (function () {

                            var initPhotoSwipeFromDOM = function (gallerySelector) {

                                var parseThumbnailElements = function (el) {
                                    var thumbElements = el.childNodes,
                                        numNodes = thumbElements.length,
                                        items = [],
                                        el,
                                        childElements,
                                        thumbnailEl,
                                        size,
                                        item;

                                    for (var i = 0; i < numNodes; i++) {
                                        el = thumbElements[i];

                                        // include only element nodes 
                                        if (el.nodeType !== 1) {
                                            continue;
                                        }

                                        childElements = el.children;

                                        size = el.getAttribute('data-size').split('x');

                                        // create slide object
                                        item = {
                                            src: el.getAttribute('href'),
                                            w: parseInt(size[0], 10),
                                            h: parseInt(size[1], 10),
                                            author: el.getAttribute('data-author')
                                        };

                                        item.el = el; // save link to element for getThumbBoundsFn

                                        if (childElements.length > 0) { // thumbnail url
                                            if (childElements.length > 1) {
                                                item.title = childElements[1].innerHTML; // caption (contents of figure)
                                            }
                                        }


                                        var mediumSrc = el.getAttribute('data-med');

                                        // original image
                                        item.o = {
                                            src: item.src,
                                            w: item.w,
                                            h: item.h
                                        };

                                        items.push(item);
                                    }

                                    return items;
                                };

                                // find nearest parent element
                                var closest = function closest(el, fn) {
                                    return el && (fn(el) ? el : closest(el.parentNode, fn));
                                };

                                var onThumbnailsClick = function (e) {
                                    e = e || window.event;
                                    e.preventDefault ? e.preventDefault() : e.returnValue = false;

                                    var eTarget = e.target || e.srcElement;

                                    var clickedListItem = closest(eTarget, function (el) {
                                        return el.tagName === 'A';
                                    });

                                    if (!clickedListItem) {
                                        return;
                                    }

                                    var clickedGallery = clickedListItem.parentNode;

                                    var childNodes = clickedListItem.parentNode.childNodes,
                                        numChildNodes = childNodes.length,
                                        nodeIndex = 0,
                                        index;

                                    for (var i = 0; i < numChildNodes; i++) {
                                        if (childNodes[i].nodeType !== 1) {
                                            continue;
                                        }

                                        if (childNodes[i] === clickedListItem) {
                                            index = nodeIndex;
                                            break;
                                        }
                                        nodeIndex++;
                                    }

                                    if (index >= 0) {
                                        openPhotoSwipe(index, clickedGallery);
                                    }
                                    return false;
                                };

                                var photoswipeParseHash = function () {
                                    var hash = window.location.hash.substring(1),
                                        params = {};

                                    if (hash.length < 5) { // pid=1
                                        return params;
                                    }

                                    var vars = hash.split('&');
                                    for (var i = 0; i < vars.length; i++) {
                                        if (!vars[i]) {
                                            continue;
                                        }
                                        var pair = vars[i].split('=');
                                        if (pair.length < 2) {
                                            continue;
                                        }
                                        params[pair[0]] = pair[1];
                                    }

                                    if (params.gid) {
                                        params.gid = parseInt(params.gid, 10);
                                    }

                                    return params;
                                };

                                var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
                                    var pswpElement = document.querySelectorAll('.pswp')[0],
                                        gallery,
                                        options,
                                        items;

                                    items = parseThumbnailElements(galleryElement);

                                    // define options (if needed)
                                    options = {

                                        showHideOpacity: true,
                                        getThumbBoundsFn: false,

                                        galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                                        getThumbBoundsFn: function (index) {
                                            // See Options->getThumbBoundsFn section of docs for more info
                                            var thumbnail = items[index].el.children[0],
                                                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                                                rect = thumbnail.getBoundingClientRect();

                                            return {
                                                x: rect.left,
                                                y: rect.top + pageYScroll,
                                                w: rect.width
                                            };
                                        },

                                        addCaptionHTMLFn: function (item, captionEl, isFake) {
                                            if (!item.title) {
                                                captionEl.children[0].innerText = '';
                                                return false;
                                            }
                                            captionEl.children[0].innerHTML = item.title + '<br/><small>Photo: ' + item.author + '</small>';
                                            return true;
                                        }

                                    };


                                    if (fromURL) {
                                        if (options.galleryPIDs) {
                                            // parse real index when custom PIDs are used 
                                            // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                                            for (var j = 0; j < items.length; j++) {
                                                if (items[j].pid == index) {
                                                    options.index = j;
                                                    break;
                                                }
                                            }
                                        } else {
                                            options.index = parseInt(index, 10) - 1;
                                        }
                                    } else {
                                        options.index = parseInt(index, 10);
                                    }

                                    // exit if index not found
                                    if (isNaN(options.index)) {
                                        return;
                                    }



                                    if (disableAnimation) {
                                        options.showAnimationDuration = 0;
                                    }

                                    // Pass data to PhotoSwipe and initialize it
                                    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

                                    // see: http://photoswipe.com/documentation/responsive-images.html
                                    var realViewportWidth,
                                        useLargeImages = false,
                                        firstResize = true,
                                        imageSrcWillChange;

                                    gallery.listen('beforeResize', function () {

                                        var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
                                        dpiRatio = Math.min(dpiRatio, 2.5);
                                        realViewportWidth = gallery.viewportSize.x * dpiRatio;


                                        if (realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200) {
                                            if (!useLargeImages) {
                                                useLargeImages = true;
                                                imageSrcWillChange = true;
                                            }

                                        } else {
                                            if (useLargeImages) {
                                                useLargeImages = false;
                                                imageSrcWillChange = true;
                                            }
                                        }

                                        if (imageSrcWillChange && !firstResize) {
                                            gallery.invalidateCurrItems();
                                        }

                                        if (firstResize) {
                                            firstResize = false;
                                        }

                                        imageSrcWillChange = false;

                                    });

                                    gallery.listen('gettingData', function (index, item) {
                                        if (useLargeImages) {
                                            item.src = item.o.src;
                                            item.w = item.o.w;
                                            item.h = item.o.h;
                                        } else {
                                            item.src = item.o.src;
                                            item.w = item.o.w;
                                            item.h = item.o.h;
                                        }
                                    });

                                    gallery.init();
                                };

                                // select all gallery elements
                                var galleryElements = document.querySelectorAll(gallerySelector);
                                for (var i = 0, l = galleryElements.length; i < l; i++) {
                                    galleryElements[i].setAttribute('data-pswp-uid', i + 1);
                                    galleryElements[i].onclick = onThumbnailsClick;
                                }

                                // Parse URL and open gallery if it contains #&pid=3&gid=1
                                var hashData = photoswipeParseHash();
                                if (hashData.pid && hashData.gid) {
                                    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
                                }
                            };

                            initPhotoSwipeFromDOM('.demo-gallery');

                        })();
                    } else {
                       nbc=1;
                        no_data = false;
                    }
                },
                error: function (data) {
                    flag = true;
                    $('#loader1').hide();
                    no_data = false;
                    alert('Something went wrong, Please contact admin');
                }
            });
        }


    }
});
$('#fileattachon').click(function () {
    $('#input1').show();
});
var addmore = $('#addmore');
var cnt = 2;
addmore.click(function () {
    $('#input' + cnt).show();
    cnt++;
});
$(document).ready(function ($) {
    // process the form
    $('#new-post-submit').click(function (e) {

        e.preventDefault();

        var formData = new FormData($('#newpost')[0]);


        swal({
            title: "Submitting the Post",
            text: ' <div class="progress progress-xs"><div class="progress-bar progress-bar-indicating active" id="progress" role="progressbar"></div></div>',
            html: true,
            type: 'info',
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonText: "Submit",
            showLoaderOnConfirm: true,
        }, function () {

            var progress_bar_id = '#progress';
            $.ajax({
                url: '../../api/new-post-submit.php',
                type: 'POST',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                dataType: 'json',
                encode: true,
                xhr: function () {
                    //upload Progress
                    var xhr = $.ajaxSettings.xhr();
                    if (xhr.upload) {
                        xhr.upload.onprogress = function (event) {
                            var percent = 0;
                            var position = event.loaded || event.position;
                            var total = event.total;
                            if (event.lengthComputable) {
                                percent = Math.ceil(position / total * 100);
                            }
                            //update progressbar
                            $(progress_bar_id).css("width", +percent + "%");
                        };
                    }
                    return xhr;
                },
            })
                .done(function (data) { //
                    //enable submit button once ajax is done

                    // here we will handle errors and validation messages
                    if (!data.success) {

                        // handle errors for name ---------------
                        if (data.errors.ft_1) {
                            swal("Error", "Please select Receipant!", "error"); // add the actual error message under our input
                        } else {
                            swal("Oops", "Error Occured, Please try again! If not solved please contact admin or check console log", "error");
                        }

                    } else {

                        swal("Done!", "Post submitted successfully!", "success");

                        setTimeout(function () {
                            location.reload().delay(500);
                        }, 3000);

                    }
                })
                .fail(function (data) {
                    swal("Oops", "We couldn't connect to the server!", "error");
                });

        });
    });
});