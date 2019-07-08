/*
  This file contains reference to the vendor libraries
  we're using in this project. This is used by webpack
  in the production build only*. A separete bundle ffor vendor
  code is useful since it's unlikely to change as often
  as the application's code. So all the libraries we reference
  here will be written to vendorJs so they can be
  cached until one of them change. So basically, this avoids
  customers having to download a huge JS file anytime a line
  of code changes. They only have to download vendorJS when
  a vendor library changes which should be less frecuent.
  Any files that aren't referenced here will be bundle into
  mainJS for the production build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';