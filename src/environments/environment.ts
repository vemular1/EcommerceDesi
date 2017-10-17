// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
      apiKey: "AIzaSyDgyZu_R_QXAVbUGbze90UsJNd3PaLUFX0",
      authDomain: "slfire-cdab4.firebaseapp.com",
      databaseURL: "https://slfire-cdab4.firebaseio.com",
      projectId: "slfire-cdab4",
      storageBucket: "slfire-cdab4.appspot.com",
      messagingSenderId: "691574089633"
  }
};