# `runBoxCopyIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482969-483231](../../../../../../../reference/runtime/host-main.cjs#L482969-L483231) | `FunctionDeclaration` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482969-483231](../../../../../../../reference/runtime/host-main.cjs#L482969-L483231) | 19 | 0 | 7 | 13 | 2 | 7 |

### host:482969

Chamadas escritas diretamente neste corpo: `.every`, `.filter`, `copyInFailureOf`, `countStoreDbManifestEntries`, `deps.legacySync.readManifestStrict`, `deps.sync.enrollManifestV2`, `deps.sync.markLegacyHydrationCompleteForHandoff`, `deps.sync.markLegacyHydrationIncomplete`, `deps.sync.readManifestStrictDetailed`, `downloadVia.download`, `empty`, `errorMessage`, `getStoreDbManifestAgentIds`, `isBoxStoreFullyHydrated`, `log5`, `logRefusals`, `new Map`, `new SandBoxStoreSyncError`, `pruneRestoredOriginCliStoredLogins`, `withoutForeignMountEntries`.

Alvos de atribuição ou incremento: `authoritativeStoreDbAgentIds`, `authoritativeStoreDbEntries`, `downloadFromLegacy`, `downloadVia`, `hydrateSource`, `legacyManifest`, `manifest`, `summary`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `f957e7a5612203202c2878647a6875dbd1f0b8edee5cf89c399c42bddd2e7319`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
