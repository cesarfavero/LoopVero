# `createPlacesSearchTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/places/places-search-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/places/places-search-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768949-768970](../../../../../../../../reference/runtime/host-main.cjs#L768949-L768970) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:564524-564545](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564524-L564545) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768949-768970](../../../../../../../../reference/runtime/host-main.cjs#L768949-L768970) | 6 | 0 | 1 | 3 | 2 | 0 |
| [evaluation:564524-564545](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564524-L564545) | 6 | 0 | 1 | 3 | 2 | 0 |

### host:768949

Chamadas escritas diretamente neste corpo: `Date.now`, `d.cardsOffered`, `d.nowMs`, `d.places.search`, `formatPlacesSummary`, `new SandModelVisibleError`, `placesCardNextStep`, `placesRenderCardKind`, `registerRenderCard`, `searchRequestOf`.

Alvos de lançamento explícito: `SandModelVisibleError`.

SHA-256 do trecho: `519ebc95a25c18ddd46cc6ec7cdaf0a5a44bc379e20fdc6033d6e5aa402336dc`.

### evaluation:564524

Chamadas escritas diretamente neste corpo: `Date.now`, `d.cardsOffered`, `d.nowMs`, `d.places.search`, `formatPlacesSummary`, `new SandModelVisibleError`, `placesCardNextStep`, `placesRenderCardKind`, `registerRenderCard`, `searchRequestOf`.

Alvos de lançamento explícito: `SandModelVisibleError`.

SHA-256 do trecho: `519ebc95a25c18ddd46cc6ec7cdaf0a5a44bc379e20fdc6033d6e5aa402336dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
