chrome.runtime.sendMessage({}, function(response) {
	var ready = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(ready);

		var timeout;
		$element = $('#bodyContent a'); // consider only the links from #bodyContent

		$element.on('mouseenter', function(event){
			var currentElement = $(this);

			timeout = setTimeout(function(){
					display(currentElement, event);
			}, 1000);

		})

		$element.on('mouseleave', function(){
			clearTimeout(timeout);
		});

		function display(element, event)
		{  
			var url = element.attr('href'); // get the Wikipedia link
			$.get(url, function(data) {     // grabbing the first <p> from the link
			    var preview = $(data).find('#bodyContent').find('p:first').text();
			    element.attr('title', preview);
			});
		}
	}
	}, 10);
});