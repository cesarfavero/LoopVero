# `TracingMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/tracing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/tracing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617837-617920](../../../../../../reference/runtime/host-main.cjs#L617837-L617920) | `method` | não | `ctx, invocationId, tools, options2` |
| [evaluation:287208-287291](../../../../../../reference/runtime/sand-eval-runner.cjs#L287208-L287291) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617837-617920](../../../../../../reference/runtime/host-main.cjs#L617837-L617920) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287208-287291](../../../../../../reference/runtime/sand-eval-runner.cjs#L287208-L287291) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617837

Chamadas escritas diretamente neste corpo: `.catch`, `analyzeMessages`, `inputCharactersHistogram.histogram`, `inputMessagesHistogram.histogram`, `middlewareChainDuration.histogram`, `performance.now`, `streamResult.response.then`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `tracedFullStream`, `tracedResponse.catch`.

SHA-256 do trecho: `48f8a260c8a0840817cfe4b448bc7018200d4d4b01c9f29890de205edbec11e1`.

### evaluation:287208

Chamadas escritas diretamente neste corpo: `.catch`, `analyzeMessages`, `inputCharactersHistogram.histogram`, `inputMessagesHistogram.histogram`, `middlewareChainDuration.histogram`, `performance.now`, `streamResult.response.then`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `tracedFullStream`, `tracedResponse.catch`.

SHA-256 do trecho: `9264d805e33f55d5c57a0dbc301c4d87fc5e2f9f1c76f79192842a24e66bdafc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
