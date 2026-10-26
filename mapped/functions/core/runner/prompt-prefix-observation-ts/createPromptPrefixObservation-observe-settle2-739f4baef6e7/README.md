# `createPromptPrefixObservation/observe/settle2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546701-546779](../../../../../../reference/runtime/sand-eval-runner.cjs#L546701-L546779) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546701-546779](../../../../../../reference/runtime/sand-eval-runner.cjs#L546701-L546779) | 16 | 3 | 0 | 3 | 0 | 0 |

### evaluation:546701

Chamadas escritas diretamente neste corpo: `Math.max`, `changed.includes`, `comparedToLatestMain`, `diffPromptPrefix`, `diffPromptPrefixDynamicTools`, `diffPromptPrefixTools`, `hashPromptPrefix`, `hashPromptPrefixTail`, `observePrewarmPrefix`, `prefixChanged.increment`, `prefixDynamicToolChanged.increment`, `prefixToolChanged.increment`, `toCallIndexLabel`, `toPreviousAgeLabel`, `toSectionLabel`, `toToolChangeLabels`.

Alvos de atribuição ou incremento: `callIndex`, `latestMain`, `previousMain`, `settlePending`, `settled`.

SHA-256 do trecho: `1ad244cff55f9c239a9709bfb167422bebdc16ba9f133f19dc643bf6a55cb49f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
