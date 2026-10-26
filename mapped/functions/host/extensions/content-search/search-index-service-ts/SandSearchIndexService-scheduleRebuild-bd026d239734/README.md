# `SandSearchIndexService.scheduleRebuild`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/content-search/search-index-service.ts` · [README do módulo](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542441-542471](../../../../../../../reference/runtime/host-main.cjs#L542441-L542471) | `method` | não | `stage, error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542441-542471](../../../../../../../reference/runtime/host-main.cjs#L542441-L542471) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:542441

Chamadas escritas diretamente neste corpo: `.catch`, `.finally`, `this.enqueue`, `this.jobTail.then`, `this.markUnavailable`, `this.report`.

Alvos de atribuição ou incremento: `this.isRebuildPending`, `this.isReconcileDone`, `this.jobTail`, `this.port`, `this.queryPort`, `this.rebuildCount`.

SHA-256 do trecho: `c72f84d440d1718d7a75e559a2d42cd4f50abbd21db1720d29b124217e03688f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
