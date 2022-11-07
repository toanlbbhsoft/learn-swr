// mock login and logout
export function login() {
    // add cookie
    document.cookie = "swr-test-token=swr;path=/auth";
  }
  export function logout() {
    // delete cookie
    console.log('logout')
    // document.cookie = "swr-test-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "swr-test-token=;path=/auth"
    // console.log('document.cookie',document.cookie)
  }
  