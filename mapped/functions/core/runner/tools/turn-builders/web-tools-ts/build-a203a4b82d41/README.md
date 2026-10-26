# `build`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/web-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/web-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782016-782050](../../../../../../../../reference/runtime/host-main.cjs#L782016-L782050) | `ArrowFunctionExpression` | não | `{     host,     turn,     props   }` |
| [host:782057-782067](../../../../../../../../reference/runtime/host-main.cjs#L782057-L782067) | `ArrowFunctionExpression` | não | `{     host   }` |
| [evaluation:582361-582395](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582361-L582395) | `ArrowFunctionExpression` | não | `{     host,     turn,     props   }` |
| [evaluation:582402-582412](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582402-L582412) | `ArrowFunctionExpression` | não | `{     host   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782016-782050](../../../../../../../../reference/runtime/host-main.cjs#L782016-L782050) | 5 | 0 | 0 | 1 | 0 | 0 |
| [host:782057-782067](../../../../../../../../reference/runtime/host-main.cjs#L782057-L782067) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:582361-582395](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582361-L582395) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582402-582412](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582402-L582412) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:782016

Chamadas escritas diretamente neste corpo: `createWebFetchTool`, `createWebSearchTool`, `host.gates.linkVerification`, `host.requestContext.resolve`, `props.stateHandler.getOrInitializeConversationStartedDate`, `sandWebToolOffers`, `tools.push`, `webSearchDescriptionSuffix`.

SHA-256 do trecho: `3e15f3c4386e0107c951f95d9dd4ad6db910a06fb6c38432d2e6e8a325e3b00a`.

### host:782057

Chamadas escritas diretamente neste corpo: `createProductSearchTool`, `offeredProductSearchPort`.

SHA-256 do trecho: `b6d3a714c9c3452e74da81ca5dc4d418a6f451e0ea34c808aa405627ce85bd1a`.

### evaluation:582361

Chamadas escritas diretamente neste corpo: `createWebFetchTool`, `createWebSearchTool`, `host.gates.linkVerification`, `host.requestContext.resolve`, `props.stateHandler.getOrInitializeConversationStartedDate`, `sandWebToolOffers`, `tools.push`, `webSearchDescriptionSuffix`.

SHA-256 do trecho: `3e15f3c4386e0107c951f95d9dd4ad6db910a06fb6c38432d2e6e8a325e3b00a`.

### evaluation:582402

Chamadas escritas diretamente neste corpo: `createProductSearchTool`, `offeredProductSearchPort`.

SHA-256 do trecho: `b6d3a714c9c3452e74da81ca5dc4d418a6f451e0ea34c808aa405627ce85bd1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
