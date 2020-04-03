(Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling);
}),
  false;

try {
  const numberOfReviews = document
    .getElementsByName('description')[0]
    .content.match(/(?<=has\s)(.*)(?=\sreviews)/g)[0];
  const numberOfReviewsElement = document.createElement('div');
  numberOfReviewsElement.innerHTML = `${numberOfReviews} reviews`;
  numberOfReviewsElement.style.fontSize = '22px';

  const Headline = document.getElementsByClassName('_138HQ_NG')[0];
  numberOfReviewsElement.appendAfter(Headline);
} catch {}
