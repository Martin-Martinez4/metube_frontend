
// Takes in profile username
// Takes in is subscribed

import { useMutation } from "@apollo/client";
import { gql } from "../../__generated__/gql";
import { useEffect, useState } from "react";

type SubscribeButtonProps = {
    username: string | undefined,
    isSubscribed: boolean | undefined | null,
}

export const SUBSCRIBE_QUERY = gql(/* GraphQL */`

    mutation subscribe($subscribee: String!){
        subscribe(subscribee: $subscribee)
    }
`);
export const UNSUBSCRIBE_QUERY = gql(/* GraphQL */`

    mutation unsubscribe($subscribee: String!){
        unsubscribe(subscribee: $subscribee)
    }
`);

function SubscribeButton({ username, isSubscribed }: SubscribeButtonProps) {

    const [subscribe] = useMutation(SUBSCRIBE_QUERY);
    const [unsubscribe] = useMutation(UNSUBSCRIBE_QUERY);

    const [isSubscribe, setIsSubscribe] = useState<boolean | undefined | null>(isSubscribed);

    function handleSubscribe(){

        if (username){

            subscribe({
                variables: {
                    subscribee: username,
                }
            })
            .then(res => {
    
                if(res.data?.subscribe){
                    
                    setIsSubscribe(res.data?.subscribe)
                }
    
    
            })
            .catch(err => {
    
    
                if(err.message === "no token present, access denied"){
    
                    console.log("access denied")
    
                }
    
            })
        }


    }
    function handleUnsubscribe(){

        if(username){

            unsubscribe({
                variables: {
                    subscribee: username,
                }
            })
            .then(res => {
    
                if(res.data?.unsubscribe){
                    
                    setIsSubscribe(!res.data?.unsubscribe)
                }
    
    
            })
            .catch(err => {
    
    
                if(err.message === "no token present, access denied"){
    
                    console.log("access denied")
    
                }
    
            })
        }


    }


    if (isSubscribe) {
        return (
            <div className="btn bgdarkblue colorwhite marginr4 videopage__video__info__button--subscribe" onClick={() => handleUnsubscribe()}>
                Subscribed
            </div>
        )
    }
    else {

        return (

            <div className="btn bgred colorwhite marginr4 videopage__video__info__button--subscribe" onClick={() => handleSubscribe()}>
                Subscribe
            </div>
        )
    }
}

export default SubscribeButton

