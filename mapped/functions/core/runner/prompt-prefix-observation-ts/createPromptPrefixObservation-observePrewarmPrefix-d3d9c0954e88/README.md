# `createPromptPrefixObservation/observePrewarmPrefix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546630-546689](../../../../../../reference/runtime/sand-eval-runner.cjs#L546630-L546689) | `FunctionDeclaration` | não | `harness, current2, compactionEpoch` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546630-546689](../../../../../../reference/runtime/sand-eval-runner.cjs#L546630-L546689) | 13 | 3 | 0 | 3 | 0 | 0 |

### evaluation:546630

Chamadas escritas diretamente neste corpo: `.every`, `Math.max`, `changed.includes`, `changedTail.includes`, `deps.conversationId`, `deps.prewarmPrefix`, `deps.requestId`, `deps.telemetry.reportPrewarmPrefixMismatch`, `diffPromptPrefix`, `diffPromptPrefixTail`, `diffPromptPrefixTools`, `prewarmPrefix.increment`, `prewarmPrefixMismatch.increment`, `prewarmPrefixToolMismatch.increment`, `prewarmPrefixTurn.increment`, `toSectionLabel`, `toToolChangeLabels`, `toTurnSizeLabel`.

SHA-256 do trecho: `b869491bc5abae90708a4e11b49881a365a031b06ccb5ec7c9d881e92dfac3b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
