# `createTurnMcpExecutorEntries/mainTurnSignedOut`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/turn-composition/mcp-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585995-585995](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585995-L585995) | `ArrowFunctionExpression` | não | `signedOutError` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585995-585995](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585995-L585995) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:585995 usa retorno implícito de arrow function.

### evaluation:585995

Chamadas escritas diretamente neste corpo: `turnToolHost.activeTurnRequestSource`, `turnToolHost.gates.signedOutReconnectCard`.

SHA-256 do trecho: `61ab460579322f45e376c53b882d24f00e069e93589a31d2fc43e51eeb80ec45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
