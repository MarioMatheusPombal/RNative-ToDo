import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import ItemTarefa from "./itemTarefa";

export default function TodoList() {

    //Cria inicialmente a lista com possibilidade de alteração de tarefas, bem como seus campos (ID, NOME, STATUS)
    const [tarefas, setTarefas] = useState([
        {id: 1, nome: 'MarioLindo', status: true},
        {id: 2, nome: 'RoseM', status: false}
    ]);

    //Cria inicialmente a variável nome com possibilidade de alteração, É feito assim pois a variável suporta alteração (Alteração esta que é quando a pessoa digitar no input)
    const [nome, setNome] = useState('');

    //A função adicionar tarefa, em sua totalidade se resume na criação de uma nova tarefa, passando a varíavel nome que é o campo de input da pessoa e o status como false
    //Status eu tenho em mente que seria se a tarefa está completa ou não (status falso significa ainda em andamento)
    //SetNome('') limpa o campo do input
    function addTarefa(){
        //O código a seguir pega a data atual
        //const novaTarefa = { id: Date.now(), nome, status: false}
        //O código a seguir procura o maior ID na lista de tarefas e adiciona mais um, se não encontrar, retorna 0
        const novaTarefa = { id: Math.max(...tarefas.map(tarefa => tarefa.id), 0) + 1, nome, status: false}
        setTarefas([...tarefas, novaTarefa])
        setNome('');
    }

    //A função deletar recebe o ID da tarefa na qual quer deletar e utiliza o método setTarefas(para definir as tarefas), passando as mesmas tarefas, só que com o filtro
    //O filtro seleciona todas as tarefas que possuem ID diferente do que foi passado
    function deletarTarefa(id) {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
      }

      //A função alterarStatus recebe o ID da tarefa na qual quer alterar e utiliza o método setTarefas(para definir as tarefas), passando as mesmas tarefas, só que com o filtro
      //O filtro seleciona todas as tarefas que possuem ID diferente, e a que possui ID igual é passada novamente, só que com status alterado
      function alterarStatus(id) {
        setTarefas(tarefas.map(tarefa => (tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa)));
      }

    return(
        <View style={styles.container}>
            {
            //Como se fosse o for i in range, (for tarefa in tarefas), onde para CADA tarefa na lista, criar o elemento ItemTarefa passando os campos e as funções
            //campo: (id, tarefa)
            //função: (deletarTarefa, alterarStatus)
            tarefas.map(tarefa => (
                <ItemTarefa key={tarefa.id} tarefa={tarefa} deletarTarefa={deletarTarefa} alterarStatus={alterarStatus}>
                </ItemTarefa>
            ))}
            {
                //A medida que o usuário vai alterando o TextInput, a função onChangeText(Ao alterar o texto), vai definindo o nome como o valor que o usuário digitar
                //ao clicar no botão, chama a função addTarefa, que pega a última definição da variável nome
            }
            <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nova Tarefa"/>
            <Button title="Adicionar" onPress={addTarefa}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 10,
        padding: 10,
    },
});