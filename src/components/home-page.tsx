import { useState } from "react"
import {Text, View} from 'react-native'
import GitEntiy from "../entity/git-entities"



export default function HomePage(){

    const [user, setUser] = useState<GitEntiy[]>([])
    function handleChange(event) {
        var requestOptions = {
            method: 'GET',
            
          };
          
          fetch("https://api.github.com/users", requestOptions)
            .then(response => response.json())
            .then(result =>{
                const userList: GitEntiy [] = result.map(item =>({
                    userName : item.login, 
                    avatarUrl: item.avatar_url,
                    repoUrl: item.repo_url,


                }));
                setUser(userList)
            })
            .catch(error => console.log('error', error));
     }  

    return(
        <View>
            <Text>

            </Text>
        </View>
    )
}