/**
 * Andrzej Goławski
 */

function createSplitBoxes() {
	var splitTag = document.getElementsByTagName("split");
	for (var i = 0; i < splitTag.length; i++) {
		splitTagElements = splitTag[i].getElementsByTagName("div");
		content = splitTag[i].getAttribute("content");
		fillBoxDivs(splitTagElements, content);
	}
}

function fillBoxDivs(splitTagElements, content) {
	for (var i = 0; i < splitTagElements.length; i++) {
		div = splitTagElements[i];
		if (div.getAttribute("type") == 'box')
			buildBox(div, content);
	}
}

function buildBox(box, content) {

	$(box).css('position', 'fixed');
	$(box).css('white-space', 'nowrap');
	$(box).css('overflow', 'hidden');
	createContent(box, content);
}

function createContent(box, content) {

	$(box).append("<div></div>");

	contentDiv = box.getElementsByTagName("div");
	cutTop = box.getAttribute("cut-top");
	cutLeft = box.getAttribute("cut-left");

	$(contentDiv).css('top', cutTop);
	$(contentDiv).css('left', cutLeft);

	cutWidth = $(box).width() * 100 / $(box).offsetParent().width();
	cutWidth = 10000 / cutWidth;

	$(contentDiv).css('width', cutWidth + '%');
	$(contentDiv).css('position', 'absolute');
	$(contentDiv).css('white-space', 'normal');

	$(contentDiv).load(content);
}
