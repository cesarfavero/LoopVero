# `isTeamsActivityConversation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/teams-reaction.ts` · [README do módulo](../../../../../modules/core/ports/teams-reaction-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768284-768290](../../../../../../reference/runtime/host-main.cjs#L768284-L768290) | `FunctionDeclaration` | não | `conversation` |
| [evaluation:563800-563806](../../../../../../reference/runtime/sand-eval-runner.cjs#L563800-L563806) | `FunctionDeclaration` | não | `conversation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768284-768290](../../../../../../reference/runtime/host-main.cjs#L768284-L768290) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563800-563806](../../../../../../reference/runtime/sand-eval-runner.cjs#L563800-L563806) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:768284

Chamadas escritas diretamente neste corpo: `TEAMS_CONVERSATION_ID_PATTERN.test`, `TEAMS_MESSAGE_ID_PATTERN.test`, `conversation.includes`, `isTeamsMeetingConversationId`, `teamsConversationKeyOf`, `teamsConversationRootMessageIdOf`.

SHA-256 do trecho: `a53007c62c9a6231fc0d0083677fc7975f6cca9761e85636db7ed20d2a4ea27e`.

### evaluation:563800

Chamadas escritas diretamente neste corpo: `TEAMS_CONVERSATION_ID_PATTERN.test`, `TEAMS_MESSAGE_ID_PATTERN.test`, `conversation.includes`, `isTeamsMeetingConversationId`, `teamsConversationKeyOf`, `teamsConversationRootMessageIdOf`.

SHA-256 do trecho: `a53007c62c9a6231fc0d0083677fc7975f6cca9761e85636db7ed20d2a4ea27e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
