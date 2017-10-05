if ( document.head && 'Promise' in window ) {

	var html = document.documentElement;

	if ( sessionStorage.getItem( 'fontsLoaded' ) ) {
		html.classList.add( 'fonts-loaded' );
	} else {
		var script = document.createElement( 'script' );
		script.src = MWF_FONT_PATH;

		script.onload = function () {
			var sansSerif = new FontFaceObserver( 'Lato' );
			var serif = new FontFaceObserver( 'Charter' );

			Promise.all( [
				sansSerif.load(),
				serif.load()
			] ).then( function () {
				html.classList.add( 'fonts-loaded' );
				sessionStorage.setItem( 'fontsLoaded' , 1);
			} );
		};
		document.head.appendChild( script );
	}
}
