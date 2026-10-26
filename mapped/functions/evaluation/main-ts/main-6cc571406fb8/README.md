# `main`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/main.ts` · [README do módulo](../../../../modules/evaluation/main-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630756-630800](../../../../../reference/runtime/sand-eval-runner.cjs#L630756-L630800) | `FunctionDeclaration` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630756-630800](../../../../../reference/runtime/sand-eval-runner.cjs#L630756-L630800) | 10 | 0 | 6 | 0 | 0 | 0 |

### evaluation:630756

Chamadas escritas diretamente neste corpo: `.finally`, `.then`, `createFixtureAugmentedWebFetchService`, `createFixtureAugmentedWebSearchService`, `createLocalSandMcp`, `createSandEvalInference`, `new AbortController`, `process.exit`, `process.once`, `readSandEvalRunnerLaunchInputs`, `readSandProcessEnvironment`, `resolveSandStreamTuning`, `runSandEvalRequest`, `sandEvalTeamIdGetter`, `writeResult`.

Alvos de atribuição ou incremento: `failureRunId`, `process.exitCode`.

SHA-256 do trecho: `f9e71261d23ad4a81d644648f6dd9bc3824d483ab5c97a9d8bbe7eb547b13fab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
