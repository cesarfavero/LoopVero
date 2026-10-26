# `createLoopNudgeMiddleware/<callback>/checkForLoop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/loop-nudge-middleware.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/loop-nudge-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:458243-458275](../../../../../../reference/runtime/sand-eval-runner.cjs#L458243-L458275) | `ArrowFunctionExpression` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:458243-458275](../../../../../../reference/runtime/sand-eval-runner.cjs#L458243-L458275) | 0 | 0 | 0 | 0 | 0 | 3 |

### evaluation:458243

Chamadas escritas diretamente neste corpo: `checkAndHandleLoopOnToolResultAppend`, `executor.getMessages`, `logger58.warn`, `thrownValueClass`.

Alvos de atribuição ou incremento: `errorClass`.

SHA-256 do trecho: `be72c5e9ce4e7ec9c3520a813e07ebfef7778e0e64589943c3d903bc7d30a4e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
