# `TrayManager.pushError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/trays/trays-service.ts` · [README do módulo](../../../../../../modules/host/extensions/trays/trays-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784435-784513](../../../../../../../reference/runtime/host-main.cjs#L784435-L784513) | `method` | não | `{     agentId,     title,     titleKind,     titleParams,     detail,     requestId: requestId2,     errorKind,     errorParams,     usageLimitKind,     unifiedMoreUsage,     rawDetail,     actions: actions2,     dedupeKey: dedupeKey2,     count: count2,     severity   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784435-784513](../../../../../../../reference/runtime/host-main.cjs#L784435-L784513) | 20 | 0 | 0 | 2 | 0 | 0 |

### host:784435

Chamadas escritas diretamente neste corpo: `Date.now`, `appendOccurrenceKeepingFirstAndLatest`, `contentDedupeKey`, `newId`, `this.activitySeqByTrayId.set`, `this.emit`, `this.enforceCap`, `this.trays.findIndex`.

Alvos de atribuição ou incremento: `next[computed]`, `this.activitySeq`, `this.trays`.

SHA-256 do trecho: `2ae5d0993dd10c61cb290ed83909acac2e87ee4bb2468eb12f7c28a670ffbd8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
