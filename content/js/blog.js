
var blog_plagin = (function(){window.addEventListener('load', function() {
	var addBlogButton = document.getElementsByClassName('blog_btn')[0];
	var addNewsButton = document.getElementsByClassName('news_btn')[0];
	var blogContainer= document.getElementsByClassName('blog container')[0];
	var blogOpen = blogContainer.children[1];
	var newsOpen = blogContainer.children[1];
	
	 if (localStorage.getItem("counter") > 0) {
        var counter_notes_id = localStorage.getItem("counter");
	 var notes_id_array = [localStorage.getItem("notes_id_array")][0].split(",");
        for (var i = 0; i < notes_id_array.length; i++) {
            if (notes_id_array[i] == "") {
                notes_id_array.splice(i,1);
            }
        }
	 }
	var counter_notes_id = 0;
        var notes_id_array = [];
	var caption2 = document.getElementsByClassName('caption2')[0];	
		function ShowCap(){
		caption2.classList.toggle('show_cap')};

	
	addBlogButton.addEventListener('click', function () {
	
ShowCap();
		
        blogOpen.insertAdjacentHTML('beforeBegin',
								   '<div class="blog_open row">' + 
								   		'<div class="left_col col-md-6 col-sm-6">'+
            								'<img class="top_layout_but" src="content/images/comments.png">'+
											'<img class="top_layout_but" src="content/images/left.png">'+
											'<img class="top_layout_but" src="content/images/right.png">'+
											'<img class="top_layout_but" src="content/images/date.png">'+'<img src="content/images/1.jpg" style="width:100%; height:auto; margin-top:-37px;>'+
								   			'<div class="comments_box">'+
								   				'<h2 class="com_title">'+'1 comments'+'</h2>'+
								   				'<div class="comment">'+
								   					'<img class="pull-left" src="content/images/avatar.png">'+
								   					'<h4 class="media-heading">'+'John:'+'</br>'+
								   						'<small>'+'August 25, 2014 at 9:30 PM'+'</small>'+'</h4>'+
								   					'<p>'+'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 																Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 															Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'+'</p>'+
								   				'</div>'+
												'<div class="comment reply">'+
													'<img class="pull-left" src="content/images/avatar_rep.png">'+
													'<h4 class="media-heading">'+'Admin:'+'<br>'+
														'<small>'+'August 25, 2014 at 9:30 PM'+'</small>'+'</h4>'+
													'<p>'+'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean 															leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem 															ipsum dolor sit amet, consectetuer adipiscing elit. '+'</p>'+
												'</div>'+
									'<div class="comm_form ">'+
							'<form class="comm_post">'+
							'<input type="text" class="name" name="Name" placeholder="Name*" min="1" max="10" required/>'+
							'<input type="email" class=" email" name="email" placeholder="Email*" required/>'+'<span class="form_hint">'+'</span>'+
							'<textarea class="form-control" placeholder="Your comment" cols="40" rows="6" required/>'+'</textarea>'+
								'<button class="send_button" type="submit" value="Send">'+'</button>'+
						'</form>'+
						'</div>'+
								   			'</div>'+
								 
								   		'<article class="col-md-6 col-sm-6">'+
								   			'<div class="blog_title row">'+
								   				'<h2 class="blog_sub_title">'+'Some Title'+'</h2>'+
								   				'<hr class="sep_blog_open">'+'</hr>'+
								   				'<p class="blog_text">'+'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean masVivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas'+'</p>'+
								   			'</div>'+
								   		'</article>'+
								   '</div>');
		//устанавливаем id 
        var new_article = document.getElementsByClassName('blog_open');
        var newNote = new_article[new_article.length-1];
        newNote.setAttribute('id',++counter_notes_id + "");
        var note_id = newNote.id; // --------
        notes_id_array.push(note_id);
		
		
		
		//close 
		var deleteButtons = document.getElementsByClassName('deleteButton');
        for (var i = 0; i < deleteButtons.length; ++i) {
            deleteButtons[i].addEventListener('click', deleteBlog);
        }
	});
	addNewsButton.addEventListener('click', function () {
		newsOpen.insertAdjacentHTML('beforeBegin', '<div class="news_open row">'+
					'<article class="col-md-6 col-sm-6">'+
						'<div class="blog_title row">'+
						'<h2 class="blog_sub_title">'+'News Title'+'</h2>'+	
						'<hr class="sep_blog_open">'+'</hr>'+
						'<p class="blog_text">'+'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. '+'</p>'+
						'</div>'+
					'</article>'+
				'<div class="video col-md-6 col-sm-6">'+
					'<video width="555" height="400" controls>'+
					    '<source src="content/images/waterfall.mp4" type="video/wmv">'+
					    '<source src="content/images/waterfall.mp4" type="video/ogg">'+
					    'Your browser does not support the video tag.'+
					'</video>'+
				'</div>'+
				'</div>');
		
	});
	
	
	function deleteBlog() {
ShowCap();	
        var note_id = this.parentNode.parentNode.id;
         notes_id_array.splice(notes_id_array.indexOf(note_id), 1);
            
 this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(blogContainer.childNodes[1].nextElementSibling);
    }
	
});

})();
