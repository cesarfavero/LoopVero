# `runSandEvalRequest/onUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/run.ts` · [README do módulo](../../../../modules/evaluation/run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630269-630282](../../../../../reference/runtime/sand-eval-runner.cjs#L630269-L630282) | `FunctionExpression` | não | `update` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630269-630282](../../../../../reference/runtime/sand-eval-runner.cjs#L630269-L630282) | 4 | 0 | 0 | 0 | 0 | 0 |

### evaluation:630269

Chamadas escritas diretamente neste corpo: `deliveredMessages.push`, `mergeTurnUsage`, `renderDeliveredMessage`, `toolCalls3.push`, `updates.push`.

Alvos de atribuição ou incremento: `lastSentMessageId`, `reactionApplied`, `sentMessageCount`, `tokenUsage`.

SHA-256 do trecho: `8482c1d3a5a6a8ccf05d5482584bb7d07859b3f214af35ec1ce5e4a06efc024c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
