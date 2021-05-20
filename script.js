const scrImageArray = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
const carousel = document.querySelector('.carousel');
const cellCount = scrImageArray.length ;
for( i = 1 ; i < cellCount +1 ; i++){
    let cell = document.createElement('div');
    cell.setAttribute('class','carousel__cell');
    cell.appendChild(document.createTextNode(`Lorep Ipsum`));
    carousel.appendChild(cell);
};
( function() {
    let selectedIndex = 1;
    const cellSize = document.querySelector('.scene').clientWidth; //px 
    const tz = Math.round( ( cellSize / 2 ) /  Math.tan( Math.PI / cellCount ) );

    function rotateCarousel() {
        let rotateAngle = selectedIndex / cellCount * -360;
        carousel.style.transform = `translateZ(-${tz}px) rotateY(${rotateAngle}deg)`;
      }

    //edité par moi
    const headAnchor = document.getElementsByTagName('title')[0];
    const headNode = headAnchor.parentNode;
    const styleBalise = document.createElement('style');
    styleBalise.appendChild(document.createTextNode(
        `.carousel { transform: translateZ(-${tz}px); }`));
    for( i = 1 ; i < cellCount +1 ; i++){
        let childAngle = (selectedIndex / cellCount * -360) * i ;
        styleBalise.appendChild(document.createTextNode(
            `.carousel__cell:nth-child(${i}) {  transform: rotateY(${childAngle}deg) translateZ(${tz}px);
                                                background: url('images/image${i}.jpg');
                                                background-size: cover; }`));
    }
    headNode.insertBefore(styleBalise, headAnchor);
  
    const prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener( 'click', function() {
      selectedIndex-- ;
      rotateCarousel();
    });

    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener( 'click', function() {
      selectedIndex++ ;
      rotateCarousel();
    });
})();
  