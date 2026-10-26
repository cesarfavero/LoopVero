# `spotlightToolResultContent/flushTextRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/spotlight/sand-spotlight.ts` · [README do módulo](../../../../../modules/shared/spotlight/sand-spotlight-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761643-761647](../../../../../../reference/runtime/host-main.cjs#L761643-L761647) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:552458-552462](../../../../../../reference/runtime/sand-eval-runner.cjs#L552458-L552462) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761643-761647](../../../../../../reference/runtime/host-main.cjs#L761643-L761647) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552458-552462](../../../../../../reference/runtime/sand-eval-runner.cjs#L552458-L552462) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:761643

Chamadas escritas diretamente neste corpo: `body.push`, `stripSpotlightTag`, `textRun.join`.

Alvos de atribuição ou incremento: `textRun`.

SHA-256 do trecho: `917b8ba4229e159592b211032ab63a7015fffaa685ce937de0c1671b9421f73c`.

### evaluation:552458

Chamadas escritas diretamente neste corpo: `body.push`, `stripSpotlightTag`, `textRun.join`.

Alvos de atribuição ou incremento: `textRun`.

SHA-256 do trecho: `917b8ba4229e159592b211032ab63a7015fffaa685ce937de0c1671b9421f73c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
