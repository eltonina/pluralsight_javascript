# pluralsight_javascript
Used to practice courses

* Uso el paquete localtunnel(globally) to share my Work in Progress (WIP): lt --port 3000 --subdomain eltonina

* We can use the snpm start -s to have a silence mode

* The security check has been integrated in the nom command 

* Dependence of babel(transpiler), webpack(bundle)

* To use Sourcemap to debug the app: debugger 

----

* Using ESLint as Linter

* Testing 
  - Framework: (Mocha), Jasmine, Tape, QUnit, Ava, Jest
  - Assertion: (Chai), Expect, Should
  - Helper Library: (JSDOM), Cheerio
  - Where test: (Node) 
    + Browser: Karma, Testem
    + Headless Browser: PhantomJS
    + In-memory DOM (Node-JSDOM)
  - Where to place Test: Alongside (.spec or .test)
  - When test should run (When Saving)

* Continuos Integration
  - Using Travis CI (Linux) -> SignUp with the GitHub account
  - Using AppVeyor CI(Windows) -> SignUp with the GitHub account

* Fetch to call APIs

* Mocking HTTP
  - JSON Schema faker (json-shema.org)
  - Generate Random Data
    + faker.js
    + chance.js
    + randexp.js
  - Serve Data via API
    + JSON Server
