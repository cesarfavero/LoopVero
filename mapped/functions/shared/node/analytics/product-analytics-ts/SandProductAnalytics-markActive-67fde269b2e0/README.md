# `SandProductAnalytics.markActive`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/analytics/product-analytics.ts` · [README do módulo](../../../../../../modules/shared/node/analytics/product-analytics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:730515-730525](../../../../../../../reference/runtime/host-main.cjs#L730515-L730525) | `method` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730515-730525](../../../../../../../reference/runtime/host-main.cjs#L730515-L730525) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:730515

Chamadas escritas diretamente neste corpo: `.slice`, `.toISOString`, `brandedLocale`, `new Date`, `this.canRecordEvents`, `this.lastActiveDayKeys.get`, `this.lastActiveDayKeys.set`, `this.options.getOsLocale`, `this.trackEvent`.

SHA-256 do trecho: `03d78877c5f1d6a36915a5ae0c42d0b624eaa56baab2d2d47adc90db266dc06f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
