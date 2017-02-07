# instagram-js
Easy instagram API for javascript

## How to use

```html
<script src="instagram-js.js"></script>
```

```javascript
var instagram = new instagram(your_access_token);

instagram.users.self(function(res) {
  console.log(res);
});
```
