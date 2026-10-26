# `ContinuationInjectorMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/continuation-injector-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/continuation-injector-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617391-617401](../../../../../../reference/runtime/host-main.cjs#L617391-L617401) | `method` | não | `ctx, invocationId, tools, options2` |
| [evaluation:286093-286103](../../../../../../reference/runtime/sand-eval-runner.cjs#L286093-L286103) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617391-617401](../../../../../../reference/runtime/host-main.cjs#L617391-L617401) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:286093-286103](../../../../../../reference/runtime/sand-eval-runner.cjs#L286093-L286103) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:617391

Chamadas escritas diretamente neste corpo: `logger33.info`, `needsContinuationMessage`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 do trecho: `ce83d7dededc9ef4fbc4fdc8d456574b9fc8e94550045f1702b6922a72d73fa3`.

### evaluation:286093

Chamadas escritas diretamente neste corpo: `logger8.info`, `needsContinuationMessage`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 do trecho: `cbb1933278724a4337dacd3cc08031775b5b8f73cced45cc8a3a236a4b9f21dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
