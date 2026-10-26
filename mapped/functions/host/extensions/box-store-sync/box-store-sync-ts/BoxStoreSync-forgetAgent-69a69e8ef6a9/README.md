# `BoxStoreSync.forgetAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-sync.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:481471-481503](../../../../../../../reference/runtime/host-main.cjs#L481471-L481503) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481471-481503](../../../../../../../reference/runtime/host-main.cjs#L481471-L481503) | 4 | 1 | 4 | 3 | 0 | 1 |

### host:481471

Chamadas escritas diretamente neste corpo: `errorMessage`, `manifest.keys`, `pending.dispose`, `relPath.includes`, `relPath.startsWith`, `this.deps.resolveStoreId`, `this.ensureWriterLock`, `this.log`, `this.manifestStore.deleteManifestEntry`, `this.manifestStore.loadManifest`, `this.manifestStore.saveManifest`, `this.pendingStoreDb.delete`, `this.pendingStoreDb.get`, `this.storeDbCapture.storeDbCaptures.delete`, `this.transfer.localStat.delete`.

Alvos de atribuição ou incremento: `removed`.

SHA-256 do trecho: `9932b0bc78e5d0cbb12db5dd9c7493811ad383cfff6a611f0f8a7c70766ab128`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
