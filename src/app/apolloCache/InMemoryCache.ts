import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
    typePolicies: {
        // Reactive Variable
        loggenInUserProfile: {
            read() {
                return loggedInUserVar();
            }
        }
    }
});

// Username    string  `json:"username"`
// Displayname *string `json:"displayname"`
// IsChannel   *bool   `json:"isChannel"`
// Subscribers *int    `json:"subscribers"`

const isLoggednIn = () => {
    
    return { 
        isLoggedIn: false,  
        Username: undefined,
        Displayname: undefined,
        IsChannel: false, 
    }
}

export const loggedInUserVar = makeVar(isLoggednIn())


