# `createSandTaskTools`

[Componente: tasks](../../components/tasks/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:739436-739566](../../../reference/runtime/host-main.cjs#L739436-L739566). Análise estática do snapshot original; nomes preservados do bundle.

## Responsabilidade

`createSandTaskTools(tasks)` monta CreateTask, UpdateTask e ReadTask sobre uma porta documental. O nome no plural indica operações de registro persistente, não delegação de execução.

## Operações

Create valida nome/descrição e body opcional, chama `port.create` e devolve registro com ID/versão. Update transforma argumentos em uma edição por `taskEditOf`, chama `port.update` e só anuncia resultado depois da resposta. Read sem ID lista abertas por padrão, ou recentemente concluídas; com ID lê um registro e recusa ID inexistente.

## Persistência e erros

O efeito real está na porta. A factory converte erros chamados `SandAgentTaskDocumentError` em `SandToolInputError`; erros de infraestrutura continuam como erros. Não há retry automático explícito nessa função. Não há parâmetro público `expectedVersion`, embora o resultado exponha version.

## Contexto para o modelo

As ferramentas recebem hints dinâmicos. A descrição instrui manter objetivo, decisões, resultados e próximos passos no documento, ligando o ID à thread. São instruções; criar o documento não inicia computação nem marca a tarefa como concluída por conta própria.

## Distinção essencial

ID documental, ID do turno e ID do subagente não são intercambiáveis. O campo subagents guarda referências e substitui a lista inteira numa atualização. A implementação do servidor precisa ser recuperada para provar atomicidade, controle de versão e ACL.
