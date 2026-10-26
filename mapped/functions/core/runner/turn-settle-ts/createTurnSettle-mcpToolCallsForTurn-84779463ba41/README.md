# `createTurnSettle/mcpToolCallsForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590805-590817](../../../../../../reference/runtime/sand-eval-runner.cjs#L590805-L590817) | `ArrowFunctionExpression` | não | `messages, resolveHost, excluded` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590805-590817](../../../../../../reference/runtime/sand-eval-runner.cjs#L590805-L590817) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:590805

Chamadas escritas diretamente neste corpo: `classifyMcpToolCalls`, `reportExternalSendCandidates`, `skippedToolCallIds`.

SHA-256 do trecho: `47be3d34b0835ab86a35f2e4edc586fd58d83b33d805bc2ae3e93810c7111cbf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
