const myURL = new URL('http://example.org.foo?username=정환#bar');

console.log(myURL.searchParams.get('username'))