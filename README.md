# instagram-js
Easy instagram API for javascript

## How to use

```
<script src="instagram-js.js"></script>
```

<pre>
var instagram = new instagram(<i><b>your_access_token</b></i>);

instagram.users.self(function(res) {
  console.log(res);
}
</pre>
