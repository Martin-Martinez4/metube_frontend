import { loggedInUserVar } from "../../apolloCache/InMemoryCache";

export function handleAccessError(err: Error) {

    console.log(err.message)

    if(err.message === "access denied"){

        loggedInUserVar({
            isLoggedIn: false,
            Username: "",
            Displayname: "",
            IsChannel: false,
          })

          alert("please log in")
    }
    else{
        return
    }


}

