# `SandProductAnalytics.trackEvent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/analytics/product-analytics.ts` · [README do módulo](../../../../../../modules/shared/node/analytics/product-analytics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:730504-730514](../../../../../../../reference/runtime/host-main.cjs#L730504-L730514) | `method` | não | `event, props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730504-730514](../../../../../../../reference/runtime/host-main.cjs#L730504-L730514) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:730504

Chamadas escritas diretamente neste corpo: `console.info`, `this.enrich`, `this.state.buffer.getEvents`, `this.state.buffer.track`.

SHA-256 do trecho: `2ef59e55fab6a0dfc43cbac10d72bad146e22d91f9229b6ce50c085c65120aff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
