# `BoxStoreTransfer.syncCategory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-transfer.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:479641-479806](../../../../../../../reference/runtime/host-main.cjs#L479641-L479806) | `method` | sim | `storeId, category` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479641-479806](../../../../../../../reference/runtime/host-main.cjs#L479641-L479806) | 25 | 5 | 6 | 1 | 0 | 3 |

### host:479641

Chamadas escritas diretamente neste corpo: `.catch`, `.filter`, `.join`, `.map`, `.split`, `absPath.endsWith`, `absPath.startsWith`, `candidates.push`, `category.ignore`, `category.stage`, `discards.some`, `errorMessage`, `excludes.push`, `excludes.some`, `fileStat.isFile`, `fileStat.isSymbolicLink`, `globToRegExp`, `ignore4.ignores`, `isPermissionDenied`, `manifest.keys`, `new Set`, `relPath.includes`, `relPath.startsWith`, `seen.add`, `seen.has`, `staged.cleanup`, `tallyMetadataFailure`, `tallySkippedInaccessible`, `this.fs.lstat`, `this.localStat.delete`, `this.log`, `this.manifestStore.deleteManifestEntry`, `this.manifestStore.loadManifest`, `this.skipInaccessibleEnabled`, `this.uploadCandidates`, `walkNodes`.

Alvos de atribuição ou incremento: `fileStat`, `staged`, `summary.excludedBytes`, `summary.excludedFiles`, `summary.failures`, `summary.removed`, `walkComplete`.

SHA-256 do trecho: `0058b35734bfc57a2db260f2e35ff2c35b49e55910805b8486a4ba5377288476`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
