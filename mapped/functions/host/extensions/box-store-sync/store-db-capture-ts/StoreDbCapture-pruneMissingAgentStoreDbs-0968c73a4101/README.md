# `StoreDbCapture.pruneMissingAgentStoreDbs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480908-480959](../../../../../../../reference/runtime/host-main.cjs#L480908-L480959) | `method` | sim | `storeId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480908-480959](../../../../../../../reference/runtime/host-main.cjs#L480908-L480959) | 8 | 1 | 2 | 3 | 0 | 1 |

### host:480908

Chamadas escritas diretamente neste corpo: `.map`, `AGENT_STORE_DB_BASENAMES.find`, `AGENT_STORE_DB_BASENAMES.some`, `entries.filter`, `errorLogTag`, `existing.has`, `isMissingPathError`, `manifest.keys`, `new Set`, `relPath.lastIndexOf`, `relPath.slice`, `relPath.startsWith`, `reportBoxStoreDiagnostic`, `rest.includes`, `rest.split`, `this.deps.categories.find`, `this.log`, `this.manifestStore.deleteManifestEntry`, `this.manifestStore.loadManifest`, `this.storeDbCaptures.delete`, `this.transfer.localStat.delete`.

Alvos de atribuição ou incremento: `existing`, `removed`.

SHA-256 do trecho: `3c9423eeb6bd64fd63519ce7c4c5f1a61b666b904c2ea5eb7ba52ac8d0ac7c26`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
