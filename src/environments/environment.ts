// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    envName: 'dev',
    production: false,
    firebase: {
        apiKey: "AIzaSyCii_NTRaKjlbofrh0xI_SbBpOAE9vj7wg",
        authDomain: "sage-2cfe4.firebaseapp.com",
        databaseURL: "https://sage-2cfe4.firebaseio.com",
        projectId: "sage-2cfe4",
        storageBucket: "sage-2cfe4.appspot.com",
        messagingSenderId: "999732247851"
    }
    // firebase: {
    //     apiKey: "AIzaSyCXnDgY8NA3167LzIXE72kymVY8ftF5K3Y",
    //     authDomain: "test-vipul-sage.firebaseapp.com",
    //     databaseURL: "https://test-vipul-sage.firebaseio.com",
    //     projectId: "test-vipul-sage",
    //     storageBucket: "test-vipul-sage.appspot.com",
    //     messagingSenderId: "82160205434"
    // }
};
