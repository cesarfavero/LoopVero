# `createSandNavigationProbe/requestProbe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512765-512792](../../../../../../reference/runtime/sand-eval-runner.cjs#L512765-L512792) | `ArrowFunctionExpression` | não | `ctx, remoteAccessor, displayNumber, generation = reportGeneration` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512765-512792](../../../../../../reference/runtime/sand-eval-runner.cjs#L512765-L512792) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512765

Chamadas escritas diretamente neste corpo: `.catch`, `.finally`, `.then`, `delay2`, `now`, `runProbe`.

Alvos de atribuição ou incremento: `inFlight`, `inFlightPromise`, `lastProbeAtMs`, `queuedDuringBaseline`, `trailingScheduled`.

SHA-256 do trecho: `a5919983cdd87e06758537bc0835e0f28717cd989b112e6ae454180bf943aaf4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
