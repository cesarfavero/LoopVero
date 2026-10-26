# `createLoopNudgeMiddleware/<callback>/stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/loop-nudge-middleware.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/loop-nudge-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:458288-458294](../../../../../../reference/runtime/sand-eval-runner.cjs#L458288-L458294) | `FunctionExpression` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:458288-458294](../../../../../../reference/runtime/sand-eval-runner.cjs#L458288-L458294) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:458288

Chamadas escritas diretamente neste corpo: `.at`, `checkForLoop`, `executor.getMessages`, `executor.stream`.

Alvos de atribuição ou incremento: `lastCtx`.

SHA-256 do trecho: `54457396ffa7893e3aba3b6f651b7f932f5b062847702c05d2875639ea89d6cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
