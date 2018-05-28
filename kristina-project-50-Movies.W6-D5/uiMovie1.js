var ui1 = (function () {
  function display (response) {
    var href = window.location.search;
    var hrefArray = href.split ('=');
    var id = hrefArray[1];

    var div = '<div><img class="img" src="' + picture + '"/></div>';
    $ ('nav').after (div);
  }

  return {
    display: display,
  };
}) ();
