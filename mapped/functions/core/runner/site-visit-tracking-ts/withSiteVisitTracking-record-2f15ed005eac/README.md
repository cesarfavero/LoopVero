# `withSiteVisitTracking/record`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/site-visit-tracking.ts` · [README do módulo](../../../../../modules/core/runner/site-visit-tracking-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484116-484133](../../../../../../reference/runtime/sand-eval-runner.cjs#L484116-L484133) | `ArrowFunctionExpression` | não | `record4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484116-484133](../../../../../../reference/runtime/sand-eval-runner.cjs#L484116-L484133) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:484116

Chamadas escritas diretamente neste corpo: `URL.canParse`, `auditor.record`, `boundedSiteBucket`, `lookupSigned`, `lookupWallEpisode`, `new URL`, `onVisit`, `siteSectionForUrl`.

SHA-256 do trecho: `b75a4a1937a197fc748e9aee40a7b7cca4b17901259d50d47f298ac416d9a1db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
