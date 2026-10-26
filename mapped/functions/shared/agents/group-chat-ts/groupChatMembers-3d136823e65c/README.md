# `groupChatMembers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `shared/agents/group-chat.ts` · [README do módulo](../../../../../modules/shared/agents/group-chat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490991-491000](../../../../../../reference/runtime/host-main.cjs#L490991-L491000) | `FunctionDeclaration` | não | `agent, agents` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490991-491000](../../../../../../reference/runtime/host-main.cjs#L490991-L491000) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490991

Chamadas escritas diretamente neste corpo: `.filter`, `agent.memberIds.flatMap`, `agents.map`, `groupChatPeople`, `new Map`.

SHA-256 do trecho: `15f899e075ecd1816224be9d4ca3618b13a67ff029a76d2cfa59d688df5c4f9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
