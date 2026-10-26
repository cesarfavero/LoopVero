# `parseTeamsChatTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/teams-address.ts` · [README do módulo](../../../../../modules/shared/channels/teams-address-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754791-754818](../../../../../../reference/runtime/host-main.cjs#L754791-L754818) | `FunctionDeclaration` | não | `chat` |
| [evaluation:538143-538170](../../../../../../reference/runtime/sand-eval-runner.cjs#L538143-L538170) | `FunctionDeclaration` | não | `chat` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754791-754818](../../../../../../reference/runtime/host-main.cjs#L754791-L754818) | 9 | 0 | 0 | 3 | 5 | 0 |
| [evaluation:538143-538170](../../../../../../reference/runtime/sand-eval-runner.cjs#L538143-L538170) | 9 | 0 | 0 | 3 | 5 | 0 |

### host:754791

Chamadas escritas diretamente neste corpo: `TEAMS_AAD_OBJECT_ID_PATTERN.test`, `TEAMS_CONVERSATION_ID_PATTERN.test`, `TEAMS_MESSAGE_ID_PATTERN.test`, `chat.indexOf`, `chat.slice`, `chat.startsWith`, `isTeamsChannelConversationId`, `isTeamsMeetingConversationId`, `mayBeTeamsChannelConversationId`, `new TeamsChatAddressError`.

Alvos de lançamento explícito: `TeamsChatAddressError`.

SHA-256 do trecho: `9828ee7045b85c07163224dcc86e406b30e4f8e4e9da3d691566ad83beba3428`.

### evaluation:538143

Chamadas escritas diretamente neste corpo: `TEAMS_AAD_OBJECT_ID_PATTERN.test`, `TEAMS_CONVERSATION_ID_PATTERN.test`, `TEAMS_MESSAGE_ID_PATTERN.test`, `chat.indexOf`, `chat.slice`, `chat.startsWith`, `isTeamsChannelConversationId`, `isTeamsMeetingConversationId`, `mayBeTeamsChannelConversationId`, `new TeamsChatAddressError`.

Alvos de lançamento explícito: `TeamsChatAddressError`.

SHA-256 do trecho: `9828ee7045b85c07163224dcc86e406b30e4f8e4e9da3d691566ad83beba3428`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
