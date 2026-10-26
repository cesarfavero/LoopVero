# `_SandEvalContinuationRuntime.nextWake`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628793-628837](../../../../../reference/runtime/sand-eval-runner.cjs#L628793-L628837) | `method` | sim | `status` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628793-628837](../../../../../reference/runtime/sand-eval-runner.cjs#L628793-L628837) | 6 | 1 | 1 | 3 | 1 | 1 |

### evaluation:628793

Chamadas escritas diretamente neste corpo: `.toISOString`, `Date.parse`, `globalThis.crypto.randomUUID`, `isPastHorizonRejection`, `landFireOnNextEvent`, `new Date`, `this.control.advance`, `this.store.beginRun`, `this.store.get`, `this.store.list`, `this.store.recordRunDefinition`.

Alvos de atribuição ou incremento: `advanced`, `selected`, `this.currentScenarioMs`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `ed8f72493ec2a0c40b1ce3506cf5b93809d88c3cb9e3f9fff52a75958ff08ed8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
