# `createAutomationState/createAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628687-628700](../../../../../reference/runtime/sand-eval-runner.cjs#L628687-L628700) | `FunctionExpression` | sim | `{       spec,       provenance     }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628687-628700](../../../../../reference/runtime/sand-eval-runner.cjs#L628687-L628700) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:628687

Chamadas escritas diretamente neste corpo: `automationWriteOutcome`, `hasCronTrigger`, `now`, `stampScenarioMtime`, `stateWriteFailed`, `store.upsert`.

SHA-256 do trecho: `27d4000e32ea202bcfddd792bce286cac8c1a9919b47fcc976011a73c0738190`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
