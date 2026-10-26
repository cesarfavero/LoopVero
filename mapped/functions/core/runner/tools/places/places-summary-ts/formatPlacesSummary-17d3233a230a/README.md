# `formatPlacesSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/tools/places/places-summary.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768919-768921](../../../../../../../../reference/runtime/host-main.cjs#L768919-L768921) | `FunctionDeclaration` | não | `places, nowMs2` |
| [evaluation:564494-564496](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564494-L564496) | `FunctionDeclaration` | não | `places, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768919-768921](../../../../../../../../reference/runtime/host-main.cjs#L768919-L768921) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564494-564496](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564494-L564496) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768919

Chamadas escritas diretamente neste corpo: `.join`, `places.map`.

SHA-256 do trecho: `91e1e0c65234a4b0ae61c1d8a4fbe56b11dc588df96dbb598a2a9c6902622e38`.

### evaluation:564494

Chamadas escritas diretamente neste corpo: `.join`, `places.map`.

SHA-256 do trecho: `6ea7c521b7925778f6e2ddb579beb276569ef2c805dd808524a1fc9f20d2ba9b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
