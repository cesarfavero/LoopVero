# `StoreDbBundleCapture.isAgentDbSnapshotDurable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480231-480237](../../../../../../../reference/runtime/host-main.cjs#L480231-L480237) | `method` | sim | `relPath, absPath, fileStat, manifest, capturedThisSweep` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480231-480237](../../../../../../../reference/runtime/host-main.cjs#L480231-L480237) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:480231

Chamadas escritas diretamente neste corpo: `capturedThisSweep.has`, `isBoxStoreManifestFileEntry`, `manifest.get`, `this.isAgentDbDurablyCaptured`.

SHA-256 do trecho: `2d1c6450b983658aca747bfa1017da27224a81644cc286f4370de634c6684e6f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
