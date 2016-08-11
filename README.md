## Geckoboard Coding Test

### Running the app

* make sure you have gulp installed
* run `npm install`
* run `npm install -g local-web-server`
* run `gulp watch`
* in another console, run `ws`
* the website should now be running at http://localhost:8000

### Running tests

To run tests once, use `gulp test`. To watch files for changes and run tests, use `gulp watch-test`.

### Notes

* Due to the time constaints, I used RxJS to fetch the data from the endpoint and re-render the component. In a real site, I'd use an implementation of flux to do this, probably redux.
* Testing the rendered component is difficult, because the more precisely you specify what the component renders, the more brittle the tests become. For example, I haven't tested that the needle for the dial has the correct transform applied, because I felt this would couple the tests to the implementation and therefore make the tests too brittle. The approach I usually take is to err on the side of writing fewer tests at first, then write more if bugs are found in a component.
* The gulp build is intentionally very basic. For a real production site, I'd add linting, sourcemaps, better error handling, etc.
* When invalid data is received from the endpoint (e.g. a value less than the min), I've just set the dial to 0. On a real project, I'd need to discuss how the component should handle different error cases.
* It probably would've been best to use d3 to render the svg, but I didn't use it due to the time constraints.
