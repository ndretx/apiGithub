import React, { useState } from "react";
import { View, Text } from "react-native";
import RepoEntity from "../entity/repo-entities";

interface Props {
    navigation: any;
  }

export default function RepoDetails(props: Props){

    const [repo, setRepo] = useState<RepoEntity[]>([])


    function handleUserPress(selectedRepo: RepoEntity) {
        props.navigation.navigate('RepoDetails', { repo: selectedRepo });
      }
    return(
        < View>
       
        </View>
    )
}