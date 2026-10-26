# `BoxStoreDownload.download/restoreSymlink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477857-477921](../../../../../../../reference/runtime/host-main.cjs#L477857-L477921) | `ArrowFunctionExpression` | sim | `relPath, entry, symlinkOrdinal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477857-477921](../../../../../../../reference/runtime/host-main.cjs#L477857-L477921) | 3 | 0 | 9 | 3 | 1 | 1 |

### host:477857

Chamadas escritas diretamente neste corpo: `boxStoreRestoreTempName`, `copyInFailureOf`, `destinationPaths.get`, `entryOf`, `errorMessage`, `new SandBoxStoreSyncError`, `parent.handle.close`, `recordFailure`, `replaceDestinationWithTemp`, `reportProgress`, `runSymlinkStep`, `symlinkTargetStaysWithinRoot`.

Alvos de atribuição ou incremento: `files`, `parent`, `verified`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `07a1fe90d24b5f607682069729d63dc5fc880130553529f27ea5a2fcc81fb84f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
