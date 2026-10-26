# `parseSlackChatTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/slack-address.ts` · [README do módulo](../../../../../modules/shared/channels/slack-address-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:757541-757560](../../../../../../reference/runtime/host-main.cjs#L757541-L757560) | `FunctionDeclaration` | não | `chat` |
| [evaluation:543562-543581](../../../../../../reference/runtime/sand-eval-runner.cjs#L543562-L543581) | `FunctionDeclaration` | não | `chat` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757541-757560](../../../../../../reference/runtime/host-main.cjs#L757541-L757560) | 4 | 0 | 0 | 4 | 1 | 0 |
| [evaluation:543562-543581](../../../../../../reference/runtime/sand-eval-runner.cjs#L543562-L543581) | 4 | 0 | 0 | 4 | 1 | 0 |

### host:757541

Chamadas escritas diretamente neste corpo: `SLACK_CHANNEL_ID_PATTERN.test`, `SLACK_IM_ID_PATTERN.test`, `SLACK_MEMBER_ID_PATTERN.test`, `chat.indexOf`, `chat.slice`, `new SlackChatAddressError`.

Alvos de lançamento explícito: `SlackChatAddressError`.

SHA-256 do trecho: `61c5d73bb413d249924862a38c5b36e31b9ef3e2117fa85d0b5ca54a6f930074`.

### evaluation:543562

Chamadas escritas diretamente neste corpo: `SLACK_CHANNEL_ID_PATTERN.test`, `SLACK_IM_ID_PATTERN.test`, `SLACK_MEMBER_ID_PATTERN.test`, `chat.indexOf`, `chat.slice`, `new SlackChatAddressError`.

Alvos de lançamento explícito: `SlackChatAddressError`.

SHA-256 do trecho: `61c5d73bb413d249924862a38c5b36e31b9ef3e2117fa85d0b5ca54a6f930074`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
