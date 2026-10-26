# `createLoopNudgeMiddleware/<callback>/appendMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/loop-nudge-middleware.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/loop-nudge-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:458278-458286](../../../../../../reference/runtime/sand-eval-runner.cjs#L458278-L458286) | `FunctionExpression` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:458278-458286](../../../../../../reference/runtime/sand-eval-runner.cjs#L458278-L458286) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:458278

Chamadas escritas diretamente neste corpo: `Array.isArray`, `checkForLoop`, `executor.appendMessages`, `messagesToAppend.some`.

SHA-256 do trecho: `15d5daf22b5096b795f6dca063d9622441ee24632e3fd504ce2bb708d7fce56c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
