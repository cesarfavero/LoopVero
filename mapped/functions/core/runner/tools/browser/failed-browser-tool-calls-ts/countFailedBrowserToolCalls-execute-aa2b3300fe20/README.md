# `countFailedBrowserToolCalls/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/failed-browser-tool-calls.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/failed-browser-tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776111-776122](../../../../../../../../reference/runtime/host-main.cjs#L776111-L776122) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, args, meta3` |
| [evaluation:575767-575778](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575767-L575778) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, args, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776111-776122](../../../../../../../../reference/runtime/host-main.cjs#L776111-L776122) | 2 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:575767-575778](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575767-L575778) | 2 | 0 | 1 | 1 | 1 | 1 |

### host:776111

Chamadas escritas diretamente neste corpo: `isErrorResult`, `playwrightToolCallErrorClass`, `recordFailure`, `tool.execute`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `88d944282e52a0e0827a68e285b4cb1803dbfdea92970d5b6c903f83e3070d5d`.

### evaluation:575767

Chamadas escritas diretamente neste corpo: `isErrorResult`, `playwrightToolCallErrorClass`, `recordFailure`, `tool.execute`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `95d26a21654e3a0e7b666fde75680477b6a6f7ed8452e6f7474d104309fae646`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
