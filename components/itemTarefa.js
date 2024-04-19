import React, { useState } from "react"
import { Button, Text, View } from "react-native"
import { Checkbox } from "react-native-paper";

export default function ItemTarefa({tarefa, deletarTarefa, alterarStatus }) {
    //Criado um boolean, que vai definir se está checado, ou não
    const [marcado, setMarcado] = React.useState(false);

    return(
        <View>
            {
                //Se estiver marcado, vai inverter o valor e chamar a função alterarStatus que veio do outro componente
            }
            <Checkbox
                status={marcado ? true : false}
                color={marcado ? 'green' : 'red'}
                uncheckedColor="red"
                onPress={() => {
                    setMarcado(!marcado);
                    alterarStatus(tarefa.id);
                }}
            />
            <Text style={{ textDecorationLine: tarefa.status ? 'line-through' : 'none' }}>Nome: {tarefa.nome} || ID: {tarefa.id}</Text>
            <Button title="X" onPress={() => deletarTarefa(tarefa.id)}></Button>
        </View>
    );
}