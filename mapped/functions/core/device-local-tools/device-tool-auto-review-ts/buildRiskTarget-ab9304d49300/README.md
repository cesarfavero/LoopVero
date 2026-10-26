# `buildRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/device-local-tools/device-tool-auto-review.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-tool-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566194-566210](../../../../../../reference/runtime/sand-eval-runner.cjs#L566194-L566210) | `ArrowFunctionExpression` | não | `{ target, ...instructions }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566194-566210](../../../../../../reference/runtime/sand-eval-runner.cjs#L566194-L566210) | 2 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:566194 usa retorno implícito de arrow function.

### evaluation:566194

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `isUnknownRecord2`, `new SmartModeRiskTarget`, `phoneToolReadsOnly`, `structFromRecord`, `summarizeDeviceToolCall`.

SHA-256 do trecho: `107b5979a52922bf4941c18152d6268900bb656442879911debdce1ba943b175`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
