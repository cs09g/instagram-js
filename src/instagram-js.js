window.instagram = window.instagram || {};

instagram = function(access_token) {
	var accessToken = access_token;
	var url = "https://api.instagram.com/v1";

	this.getAccessToken = function() {
		return accessToken;
	};

	this.getUrl = function() {
		return url;
	};

	// inject <script> into <body> to request as 'get' method
	this.jsonp = function(url, callback) {
	    var cb = 'jsonp_callback_' + Math.round(100000 * Math.random());
	    window[cb] = function(data) {
	        delete window[cb];
	        document.body.removeChild(script);
	        callback(data);
	    };

	    var script = document.createElement('script');
	    script.src = instagram.getUrl() + url + (url.indexOf('?') !== -1 ? '&' : '?') + 'callback=' + cb;
	    document.body.appendChild(script);
	};
};

instagram.prototype.users = {

	/*	
		method: GET
		url: /users/self

		callback: [function]
	*/
	self: function(callback) {
		var url = "/users/self" + 
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /users/{user-id}

		param: {
			userId: [string]
		}
		callback: [function]
	*/
	userId: function(param, callback) {
		var url = "/users/" + param.userId + 
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /users/self/media/recent

		param: {
			count: [integer]
			minId: [integer]
			maxId: [integer]
		}
		callback: [function]
	*/
	mediaRecent: function(param, callback) {
		var url = "/users/self/media/recent" +
			"?access_token=" + instagram.getAccessToken() +
			(param.count ? "&count=" + param.count : "") +
			(param.minId ? "&min_id=" + param.minId : "") +
			(param.maxId ? "&max_id=" + param.maxId : "");

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /users/{user-id}/media/recent

		param: {
			userId: [string]
			minId: [integer]
			maxId: [integer]
			count: [integer]
		}
		callback: [function]
	*/
	userMediaRecent: function(param, callback) {
		var url = "/users/" + param.userId + "/media/recent" +
			"?access_token=" + instagram.getAccessToken() +
			(param.minId ? "&min_id=" + parma.minId : "") +
			(param.maxId ? "&max_id=" + param.maxId : "");

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /users/self/media/liked

		param: {
			count: [integer]
			maxLikeId: [integer]
		}
		callback: [function]
	*/
	mediaLiked: function(param, callback) {
		var url = "/users/self/media/liked" +
			"?access_token=" + instagram.getAccessToken() +
			(param.maxLikeId ? "&max_like_id=" + param.maxLikeId : "");

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /users/search

		param: {
			count: [integer]
			q: [string]
		}
		callback: [function]
	*/
	search: function(param, callback) {
		var url = "/users/search" +
			"?access_token=" + instagram.getAccessToken() +
			"&q=" + param.q + (param.count ? "&count=" + param.count : "");

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	}
};

instagram.prototype.relationships = {
	/*	
		method: GET
		url: /users/self/follows

		callback: [function]
	*/
	follows: function(callback) {
		var url = "/users/self/follows" +
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /users/self/followed-by

		callback: [function]
	*/
	followedBy: function(callback) {
		var url = "/users/self/followed-by" +
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /users/self/requested-by

		callback: [function]
	*/
	requestedBy: function(callback) {
		var url = "/users/self/requested-by" +
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /users/{user-id}/relationship

		param: {
			userId: [string]
		}
		callback: [function]
	*/
	userRelationships: function(param, callback) {
		var url = "/users/" + param.userId + "/relationship" +
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: POST
		url: /users/{user-id}/relationship

		param: {
			userId: [string]
			action: [string]
		}
		callback: [function]
	*/
	updateUserRelationship: function(param, callback) {
		var xhr = new XMLHttpRequest();
		var url = "/users/" + param.userId + "/relationship";

		xhr.withCredentials = true;
		xhr.open("post", url);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=utf-8");
		xhr.onreadystatechange = function() {
			callback(xhr.response);
		};
		
		var params = "access_token=" + instagram.getAccessToken() + "&action=" + param.action;
		// this works but it occurs CORS error without any server setting
		xhr.send(params);
	}
};

instagram.prototype.media = {
	/*	
		method: GET
		url: /media/{media-id}

		param: {
			mediaId: [string]
		}
		callback: [function]
	*/	
	mediaId: function(param, callback) {
		var url = "/media/" + param.mediaId +
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /media/shortcode/{shortcode}

		param: {
			shortcode: [integer]
		}
		callback: [function]
	*/
	shortcode: function(param, callback) {
		var url = "/media/shortcode/" + param.shortcode +
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*	
		method: GET
		url: /media/search

		param: {
			lng: [float]
			lat: [float]
			distance: [integer|float]
		}
		callback: [function]
	*/
	search: function(param, callback) {
		var url = "/media/search" +
			"?access_token=" + instagram.getAccessToken() +
			"&lat=" + param.lat +
			"&lng=" + param.lng + 
			(param.distance ? "&distance=" + param.distance : "");

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	}
};

instagram.prototype.comments = {
	/*
		method: GET
		url: /media/{media-id}/comments

		param: {
			mediaId: [string]
		}
		callback: [function]
	*/
	mediaId: function(param, callback) {
		var url = "/media/" + param.mediaId + "/comments" + 
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*
		method: POST
		url: /media/{media-id}/comments

		param: {
			mediaId: [string]
			text: [string]
		}
		callback: [function]
	*/
	add: function(param, callback) {
		// this works but it occurs CORS error without any server setting
		// it doesn't ensure the callback will be called when its status is success(200)
		var xhr = new XMLHttpRequest();
		var url = "/media/" + param.mediaId + "/comments";

		xhr.withCredentials = true;
		xhr.open("post", url);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=utf-8");
		xhr.onreadystatechange = function() {
			console.log(xhr);
			callback(xhr.response);
		};
		
		var params = "access_token=" + instagram.getAccessToken() + "&text=" + param.text;
		xhr.send(params);
	},

	/*
		method: DELETE
		url: /media/{media-id}/comments/{commend-id}

		param: {
			mediaId: [string]
			commentId: [integer]
		}
		callback: [function]
	*/
	delete: function(param, callback) {
		// this doesn't work at all without server setting.
		// [Access-Control-Allow-Origin] header is needed
		var xhr = new XMLHttpRequest();
		var url = "/media/" + param.mediaId + "/comments/" + param.commentId +
			"?access_token=" + instagram.getAccessToken();
		
		xhr.withCredentials = true;
		xhr.open("delete", url);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			callback(xhr.response);
		};
		
		xhr.send(null);
	}
};

instagram.prototype.likes = {
	/*
		method: GET
		url: /media/{media-id}/likes

		param: {
			mediaId: [string]
		}
		callback: [function]
	*/
	mediaId: function(param, callback) {
		var url = "/media/" + param.mediaId + "/likes" +
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
		   callback(res);
		});
	},

	/*
		method: POST
		url: /media/{media-id}/likes

		param: {
			mediaId: [string]
		}
		callback: [function]
	*/
	set: function(param, callback) {
		// this works but it occurs CORS error without any server setting
		// it doesn't ensure the callback will be called when its status is success(200)
		var xhr = new XMLHttpRequest();
		xhr.url = "/media/" + param.mediaId + "/likes";
		xhr.withCredentials = true;

		xhr.open("post", url);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange(function() {
			callback(xhr.response);
		});

		var params = "access_token=" + instagram.getAccessToken();
		xhr.send(params);
	},

	/*
		method: DELETE
		url: /media/{media-id}/likes

		param: {
			mediaId: [string]
		}
		callback: [function]
	*/
	unset: function(param, callback) {
		// this doesn't work at all without server setting.
		// [Access-Control-Allow-Origin] header is needed
		var xhr = new XMLHttpRequest();
		var url = "/media/" + param.mediaId + "/likes" +
			"?access_token=" + instagram.getAccessToken();
		
		xhr.withCredentials = true;
		xhr.open("delete", url);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			callback(xhr.response);
		};
		
		xhr.send(null);
	}
};

instagram.prototype.tags = {
	/*	
		method: GET
		url: /tags/{tag-name}

		param: {
			tagName: [string]
		}
		callback: [function]
	*/
	tagName: function(param, callback) {
		var url = "/tags/" + param.tagName +
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
			callback(res);
		});
	},

	/*	
		method: GET
		url: /tags/{tag-name}/media/recent

		param: {
			tagName: [string]
			maxTagId: [integer]
			minTagId: [integer]
			count: [integer|string]
		}
		callback: [function]
	*/
	mediaRecent: function(param, callback) {
		var url = "/tags/" + param.tagName + "/media/recent" + 
			"?access_token=" + instagram.getAccessToken()
			(param.maxTagId ? "&max_tag_id=" + param.maxTagId : "") +
			(param.minTagId ? "&min_tag_id=" + param.minTagId : "") +
			(param.count ? "&count=" + parma.count : "");

		instagram.jsonp(url, function(res) {
			callback(res);
		});
	},

	/*	
		method: GET
		url: /tags/search

		param: {
			q: [string]
		}
		callback: [function]
	*/
	search: function(param, callback) {
		var url = "/tags/search" +
			"?access_token=" + instagram.getAccessToken() +
			"&q=" + param.q;

		instagram.jsonp(url, function(res) {
			callback(res);
		});
	}
};

instagram.prototype.locations = {
	/*	
		method: GET
		url: /locations/{location-id}

		param: {
			locationId: [integer]
		}
		callback: [function]
	*/
	locationId: function(param, callback) {
		var url = "/locations/" + param.locationId +
			"?access_token=" + instagram.getAccessToken();

		instagram.jsonp(url, function(res) {
			callback(res);
		});
	},

	/*	
		method: GET
		url: /locations/{location-id}/media/recent

		param: {
			locationId: [integer]
			minId: [integer]
			maxId: [integer]
		}
		callback: [function]
	*/
	mediaRecent: function(param, callback) {
		var url = "/locations/" + param.locationId + "/media/recent" +
			"?access_token=" + instagram.getAccessToken() +
			(param.minId ? "&min_id=" + param.minId : "") +
			(param.maxId ? "&max_id=" + param.maxId : "");

		instagram.jsonp(url, function(res) {
			callback(res);
		});
	},

	/*	
		method: GET
		url: /locations/search

		param: {
			lng: [float]
			lat: [float]
			facebookPlacesId: [integer]
			distance: [integer|float]
		}
		callback: [function]
	*/
	search: function(param, callback) {
		var url = "/locations/search" +
			"?access_token=" + instagram.getAccessToken() +
			(param.facebookPlacesId ? 
				"&facebook_places_id=" + param.facebookPlacesId : 
				"&lat=" + param.lat + "&lng=" + param.lng) + 
			(param.distance ? "&distance=" + param.distance : "");

		instagram.jsonp(url, function(res) {
			callback(res);
		});
	}
};

