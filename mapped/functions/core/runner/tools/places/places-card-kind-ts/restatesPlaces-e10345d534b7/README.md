# `restatesPlaces`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/places/places-card-kind.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/places/places-card-kind-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768813-768819](../../../../../../../../reference/runtime/host-main.cjs#L768813-L768819) | `FunctionDeclaration` | não | `prose, places` |
| [evaluation:564388-564394](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564388-L564394) | `FunctionDeclaration` | não | `prose, places` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768813-768819](../../../../../../../../reference/runtime/host-main.cjs#L768813-L768819) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564388-564394](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564388-L564394) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768813

Chamadas escritas diretamente neste corpo: `.some`, `contactDetailsOf`, `findNamedItemsRepetition`, `hrefsOf`, `places.map`, `prose.toLowerCase`.

SHA-256 do trecho: `7e51ce9edc016c86ba22072f2686df22d313b540a5d6a44109f5977e973c40c3`.

### evaluation:564388

Chamadas escritas diretamente neste corpo: `.some`, `contactDetailsOf`, `findNamedItemsRepetition`, `hrefsOf`, `places.map`, `prose.toLowerCase`.

SHA-256 do trecho: `7e51ce9edc016c86ba22072f2686df22d313b540a5d6a44109f5977e973c40c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
