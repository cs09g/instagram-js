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
};

instagram.prototype.users = {

	/*	
		method: GET
		url: /users/self

		callback: [function]
	*/
	self: function(callback) {
		$.ajax({
			url: instagram.getUrl() + "/users/self/?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
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
		$.ajax({
			url: instagram.getUrl() + "/users/" + param.userId + "/?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*	
		method: GET
		url: /users/self/media/recent

		param: {
			count: [integer|string]
			minId: [integer|string]
			maxId: [integer|string]
		}
		callback: [function]
	*/
	mediaRecent: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/users/self/media/recent/?access_token=" + instagram.getAccessToken() + (param.count ? "&count=" + param.count : "") + (param.minId ? "&min_id=" + param.minId : "") + (param.maxId ? "&max_id=" + param.maxId : ""),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*	
		method: GET
		url: /users/{user-id}/media/recent

		param: {
			userId: [string]
			minId: [integer|string]
			maxId: [integer|string]
			count: [integer]
		}
		callback: [function]
	*/
	userMediaRecent: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/users/" + param.userId + "/media/recent/?access_token=" + instagram.getAccessToken() + (param.minId ? "&min_id=" + parma.minId : "") + (param.maxId ? "&max_id=" + param.maxId : ""),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*	
		method: GET
		url: /users/self/media/liked

		param: {
			count: [integer]
			maxLikeId: [integer|string]
		}
		callback: [function]
	*/
	mediaLiked: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/users/self/media/liked?access_token=" + instagram.getAccessToken() + (param.maxLikeId ? "&max_like_id=" + param.maxLikeId : ""),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
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
		$.ajax({
			url: instagram.getUrl() + "/users/search?access_token=" + instagram.getAccessToken() + "&q=" + param.q + (param.count ? "&count=" + param.count : ""),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
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
		$.ajax({
			url: instagram.getUrl() + "/users/self/follows?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*	
		method: GET
		url: /users/self/followed-by

		callback: [function]
	*/
	followedBy: function(callback) {
		$.ajax({
			url: instagram.getUrl() + "/users/self/followed-by?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*	
		method: GET
		url: /users/self/requested-by

		callback: [function]
	*/
	requestedBy: function(callback) {
		$.ajax({
			url: instagram.getUrl() + "/users/self/requested-by?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
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
		$.ajax({
			url: instagram.getUrl() + "/users/" + param.userId + "/relationship?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
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
		$.ajax({
			type: "post",
			url: instagram.getUrl() + "/users/" + param.userId + "/relationship",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({ 
				"access_token": instagram.getAccessToken(),
				"action": param.action
			}),
			dataType: "jsonp",
			success: function(res) {
				callbacak(res);
			}
		});
	}
};

instagram.prototype.media = {
	/*	
		method: GET
		url: /media/{media-id}

		param: {
			mediaId: [integer|string]
		}
		callback: [function]
	*/	
	mediaId: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/media/" + param.mediaId + "?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*	
		method: GET
		url: /media/shortcode/{shortcode}

		param: {
			shortcode: [integer|string]
		}
		callback: [function]
	*/
	shortcode: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/media/shortcode/" + param.shortcode + "?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
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
		$.ajax({
			url: instagram.getUrl() + "/media/search?" + "lat=" + param.lat + "&lng=" + param.lng + (param.distance ? "&distance=" + param.distance : "") + "&access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	}
};

instagram.prototype.comments = {
	/*
		method: GET
		url: /media/{media-id}/comments

		param: {
			mediaId: [integer|string]
		}
		callback: [function]
	*/
	mediaId: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/media/" + param.mediaId + "/commnets?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*
		method: POST
		url: /media/{media-id}/comments

		param: {
			mediaId: [integer|string]
			text: [string]
		}
		callback: [function]
	*/
	add: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/media/" + param.mediaId + "/comments",
			type: "post",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({
				"access_token": instagram.getAccessToken(),
				"text": param.text
			}),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*
		method: DELETE
		url: /media/{media-id}/comments/{commend-id}

		param: {
			mediaId: [integer|string]
			commentId: [integer|string]
		}
		callback: [function]
	*/
	delete: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/media/" + param.mediaId + "/comments/" + param.commentId,
			type: "delete",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({
				"access_token": instagram.getAccessToken()
			}),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	}
};

instagram.prototype.likes = {
	/*
		method: GET
		url: /media/{media-id}/likes

		param: {
			mediaId: [integer|string]
		}
		callback: [function]
	*/
	mediaId: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/media/" + param.mediaId + "/likes?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*
		method: POST
		url: /media/{media-id}/likes

		param: {
			mediaId: [integer|string]
		}
		callback: [function]
	*/
	set: function(param, callback) {
		
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
		$.ajax({
			url: instagram.getUrl() + "/tags/" + param.tagName + "?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*	
		method: GET
		url: /tags/{tag-name}/media/recent

		param: {
			tagName: [string]
			maxTagId: [integer|string]
			minTagId: [integer|string]
			count: [integer|string]
		}
		callback: [function]
	*/
	mediaRecent: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/tags/" + param.tagName + "/media/recent?" + (param.maxTagId ? "max_tag_id=" + param.maxTagId : "") + (param.minTagId ? "&min_tag_id=" + param.minTagId : "") + (param.count ? "&count=" + parma.count : "") + "&access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
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
		$.ajax({
			url: instagram.getUrl() + "/tags/search?q=" + param.q + "&access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	}
};

instagram.prototype.locations = {
	/*	
		method: GET
		url: /locations/{location-id}

		param: {
			locationId: [integer|string]
		}
		callback: [function]
	*/
	locationId: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/locations/" + param.locationId + "?access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	},

	/*	
		method: GET
		url: /locations/{location-id}/media/recent

		param: {
			locationId: [integer|string]
			minId: [integer|string]
			maxId: [integer|string]
		}
		callback: [function]
	*/
	mediaRecent: function(param, callback) {
		$.ajax({
			url: instagram.getUrl() + "/locations/" + param.locationId + "/media/recent?access_token=" + instagram.getAccessToken() + (param.minId ? "&min_id=" + param.minId : "") + (param.maxId ? "&max_id=" + param.maxId : ""),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
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
		$.ajax({
			url: instagram.getUrl() + "/locations/search?" + (param.facebookPlacesId ? "facebook_places_id=" + param.facebookPlacesId : "lat=" + param.lat + "&lng=" + param.lng) + (param.distance ? "&distance=" + param.distance : "") + "&access_token=" + instagram.getAccessToken(),
			dataType: "jsonp",
			success: function(res) {
				callback(res);
			}
		});
	}
};
