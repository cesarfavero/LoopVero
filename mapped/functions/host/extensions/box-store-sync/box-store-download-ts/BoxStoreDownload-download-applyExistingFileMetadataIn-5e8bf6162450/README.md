# `BoxStoreDownload.download/applyExistingFileMetadataIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477807-477819](../../../../../../../reference/runtime/host-main.cjs#L477807-L477819) | `ArrowFunctionExpression` | sim | `parent, destPath, relPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477807-477819](../../../../../../../reference/runtime/host-main.cjs#L477807-L477819) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:477807

Chamadas escritas diretamente neste corpo: `applyOpenFileMetadata`, `entryOf`, `fileEntries.get`, `new SandBoxStoreSyncError`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `912a2ed1545763c471891d5b88c33b40be64dd670b8b077a8485937a8c99df7b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
