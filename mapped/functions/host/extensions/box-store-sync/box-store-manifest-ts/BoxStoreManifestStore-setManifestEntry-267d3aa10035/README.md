# `BoxStoreManifestStore.setManifestEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477110-477137](../../../../../../../reference/runtime/host-main.cjs#L477110-L477137) | `method` | não | `manifest, relPath, entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477110-477137](../../../../../../../reference/runtime/host-main.cjs#L477110-L477137) | 5 | 2 | 0 | 3 | 0 | 0 |

### host:477110

Chamadas escritas diretamente neste corpo: `.markChanged`, `boxStoreManifestEntriesEqual`, `counts.get`, `existingPath.startsWith`, `manifest.get`, `manifest.keys`, `manifest.set`, `relPath.indexOf`, `relPath.slice`, `this.adjustAncestorRefCounts`, `this.ancestorRefCounts`, `this.configuredEntry`, `this.deleteManifestEntryWithIndex`, `this.manifestAncestorRefCounts.get`, `this.manifestRevisionState`.

Alvos de atribuição ou incremento: `removedConflict`, `separatorIndex`.

SHA-256 do trecho: `3a0a89ec3ebea0e2601972a9497f30a3cb3cd5e1114d83266756c3a2fbed7aaa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
