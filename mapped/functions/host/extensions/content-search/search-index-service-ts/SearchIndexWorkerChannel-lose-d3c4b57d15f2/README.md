# `SearchIndexWorkerChannel.lose`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/content-search/search-index-service.ts` · [README do módulo](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542124-542129](../../../../../../../reference/runtime/host-main.cjs#L542124-L542129) | `method` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542124-542129](../../../../../../../reference/runtime/host-main.cjs#L542124-L542129) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:542124

Chamadas escritas diretamente neste corpo: `settle3`, `this.pending.clear`, `this.pending.values`.

Alvos de atribuição ou incremento: `this.isLost`.

SHA-256 do trecho: `6fa57cccade535af3c7b40fc4a7898dc67dbf39d4146a931737a74401c7d63da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
