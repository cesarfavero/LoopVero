# `formatInlineValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225490-225550](../../../../../reference/runtime/host-main.cjs#L225490-L225550) | `FunctionDeclaration` | não | `value, options2, colors, depth, seen, path33` |
| [evaluation:1978-2038](../../../../../reference/runtime/sand-eval-runner.cjs#L1978-L2038) | `FunctionDeclaration` | não | `value, options2, colors, depth, seen, path33` |
| [state-worker:21367-21427](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21367-L21427) | `FunctionDeclaration` | não | `value, options, colors, depth, seen, path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225490-225550](../../../../../reference/runtime/host-main.cjs#L225490-L225550) | 19 | 0 | 0 | 18 | 0 | 0 |
| [evaluation:1978-2038](../../../../../reference/runtime/sand-eval-runner.cjs#L1978-L2038) | 19 | 0 | 0 | 18 | 0 | 0 |
| [state-worker:21367-21427](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21367-L21427) | 19 | 0 | 0 | 18 | 0 | 0 |

### host:225490

Chamadas escritas diretamente neste corpo: `Array.from`, `Array.isArray`, `ArrayBuffer.isView`, `JSON.stringify`, `Number.isNaN`, `String`, `applyInlineSerializer`, `colors.cyan`, `colors.dim`, `colors.gray`, `colors.green`, `colors.magenta`, `colors.yellow`, `formatErrorSummary`, `formatInlineArray`, `formatInlineMap`, `formatInlineObject`, `isErrorLike`, `isInlineSummary`, `truncateString`, `value.getTime`, `value.toISOString`, `value.toString`, `value.values`.

Alvos de atribuição ou incremento: `value`.

SHA-256 do trecho: `de002449f46cacad04ac655f42f78b9e384ca1761591feadef52bdc4fcd0e052`.

### evaluation:1978

Chamadas escritas diretamente neste corpo: `Array.from`, `Array.isArray`, `ArrayBuffer.isView`, `JSON.stringify`, `Number.isNaN`, `String`, `applyInlineSerializer`, `colors.cyan`, `colors.dim`, `colors.gray`, `colors.green`, `colors.magenta`, `colors.yellow`, `formatErrorSummary`, `formatInlineArray`, `formatInlineMap`, `formatInlineObject`, `isErrorLike`, `isInlineSummary`, `truncateString`, `value.getTime`, `value.toISOString`, `value.toString`, `value.values`.

Alvos de atribuição ou incremento: `value`.

SHA-256 do trecho: `de002449f46cacad04ac655f42f78b9e384ca1761591feadef52bdc4fcd0e052`.

### state-worker:21367

Chamadas escritas diretamente neste corpo: `Array.from`, `Array.isArray`, `ArrayBuffer.isView`, `JSON.stringify`, `Number.isNaN`, `String`, `applyInlineSerializer`, `colors.cyan`, `colors.dim`, `colors.gray`, `colors.green`, `colors.magenta`, `colors.yellow`, `formatErrorSummary`, `formatInlineArray`, `formatInlineMap`, `formatInlineObject`, `isErrorLike`, `isInlineSummary`, `truncateString`, `value.getTime`, `value.toISOString`, `value.toString`, `value.values`.

Alvos de atribuição ou incremento: `value`.

SHA-256 do trecho: `c3532b3116c5cfdb30c68c05ab41d3e37f7e5199fb04bf63752a76fe960f4a5f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
