# `createPromptPrefixObservation/observe/onUsage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546785-546830](../../../../../../reference/runtime/sand-eval-runner.cjs#L546785-L546830) | `ArrowFunctionExpression` | não | `usage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546785-546830](../../../../../../reference/runtime/sand-eval-runner.cjs#L546785-L546830) | 6 | 0 | 0 | 2 | 0 | 0 |

### evaluation:546785

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `deps.conversationId`, `deps.requestId`, `deps.telemetry.reportPromptPrefixDiff`, `prefixHitRate.histogram`, `settle2`, `toPrefixLabel`.

Alvos de atribuição ou incremento: `firstMainUsage`, `lastMainCompactionEpoch`, `lastMainUsage`.

SHA-256 do trecho: `20722d4ad64bcc8b40a1f8d85977738a95e3fb9fe4584a23b8100c2522f82c63`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
