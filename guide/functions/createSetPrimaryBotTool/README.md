# `createSetPrimaryBotTool`

## Papel e fonte

Cria a ferramenta que pede ao host a alteração do agente principal. É um adaptador de capacidade e mensagem, sem algoritmo próprio de seleção. [Fonte](../../../reference/runtime/host-main.cjs#L757504-L757522).

## Interface

A factory recebe a função `setPrimaryBot`. O schema do tool exige `{ agent_id: string }`, aplica `trim` e mínimo de um caractere. O execute chama `setPrimaryBot(args.agent_id)`, aguarda um objeto com nome e ID e constrói a confirmação textual. Erros do callback não são capturados pelo wrapper.

| Aspecto | Implementação |
| --- | --- |
| Identificador interno | `PLATFORM_ACTION` |
| Nome ofertado | `SetPrimaryBot` |
| Atividade descrita | Target igual ao ID escolhido |
| Persistência própria | Nenhuma |
| Consulta ao roster no execute | Nenhuma |
| Confirmação por estado local | Nenhuma, usa a resposta do callback |

## Política descrita ao modelo

A descrição instrui o modelo a só agir quando o usuário pediu trocar o primary bot; apresentar opções existentes; pedir a escolha; aguardar a resposta; depois confirmar em uma frase. Passar o próprio ID preserva o agente atual como principal. Essa sequência pertence à instrução da ferramenta. O schema não comprova sozinho que o consentimento foi coletado.

O builder só inclui a factory se `agentManagement.setPrimaryBot` existe. Um host sem essa capacidade não recebe a ferramenta por esse caminho. [Builder](../../../reference/runtime/host-main.cjs#L772016-L772025).

## Relação com o RPC

O descriptor `SetGrokBotMainAgent` declara que o alvo deve ser um agente vivo pertencente ao usuário e que substitui a seleção anterior. `EnsureGrokBotDefaultMainAgent` tem contrato de criação/seleção idempotente do default. O callback injetado pode encapsular essa integração, mas o wrapper não contém a chamada RPC e a ligação concreta não deve ser inventada. [Contratos](../../../reference/runtime/host-main.cjs#L212218-L212250).

## Limite funcional

Mudar o primary bot não muda automaticamente a relação pai/filho de runs existentes. `WakeParent` utiliza o pai de execução. Não há nesta função uma busca de oportunidades, agendamento, leitura de contexto, ranking ou redistribuição de trabalho.

[Primary bot](../../components/primary-bot/README.md) · [Proatividade](../../components/proactivity/README.md).
