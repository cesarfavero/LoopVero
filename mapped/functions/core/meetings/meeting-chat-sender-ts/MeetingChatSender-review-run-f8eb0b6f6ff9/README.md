# `_MeetingChatSender.review/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-sender.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760433-760433](../../../../../../reference/runtime/host-main.cjs#L760433-L760433) | `ArrowFunctionExpression` | não | `prompt, reviewSignal` |
| [evaluation:551248-551248](../../../../../../reference/runtime/sand-eval-runner.cjs#L551248-L551248) | `ArrowFunctionExpression` | não | `prompt, reviewSignal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760433-760433](../../../../../../reference/runtime/host-main.cjs#L760433-L760433) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:760433 usa retorno implícito de arrow function.
| [evaluation:551248-551248](../../../../../../reference/runtime/sand-eval-runner.cjs#L551248-L551248) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:551248 usa retorno implícito de arrow function.

### host:760433

Chamadas escritas diretamente neste corpo: `this.deps.meetings.runChatReview`.

SHA-256 do trecho: `1298c1bcff6e373d5807f1e9bf26873f5e5229d408b62d33a76dd661ef264794`.

### evaluation:551248

Chamadas escritas diretamente neste corpo: `this.deps.meetings.runChatReview`.

SHA-256 do trecho: `1298c1bcff6e373d5807f1e9bf26873f5e5229d408b62d33a76dd661ef264794`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
