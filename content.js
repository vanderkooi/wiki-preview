// testing message for git functionality on a new machine

$(function() {
	var prefix = 'https://en.wikipedia.org';
	var element = ('#bodyContent a');

	$(element).hoverIntent({
		over: getPreview});

	function getPreview() {
		var that = this;
		var link = $(this).attr('href');
		var fullLink = prefix + link;
		$(this).removeAttr('title');

		findContent(fullLink).then(function (content) {
			$(that).attr('title', content.substr(0, 250));
		})
	}

	function findContent(fullLink) {
		return new Promise(function (fulfill, reject) {
			try {
				$.get(fullLink, function(data) {
					console.log("proimse function");
					fulfill($(data).find('#bodyContent').find('p:first').text());
				}).fail(function (e) {
					console.log(e);
					reject(e);
				});
			} catch (err) {
				console.log(err);
			}
		}).catch(function (err) {
			console.log(err);
		});
	}

});
