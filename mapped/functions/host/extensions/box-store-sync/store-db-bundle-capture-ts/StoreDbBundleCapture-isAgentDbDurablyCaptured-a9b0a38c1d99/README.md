# `StoreDbBundleCapture.isAgentDbDurablyCaptured`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480220-480227](../../../../../../../reference/runtime/host-main.cjs#L480220-L480227) | `method` | sim | `relPath, absPath, fileStat, manifest` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480220-480227](../../../../../../../reference/runtime/host-main.cjs#L480220-L480227) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:480220

Chamadas escritas diretamente neste corpo: `isBoxStoreManifestFileEntry`, `manifest.get`, `this.agentDbWriteGeneration`, `this.storeDbCaptures.get`, `this.walHasNoNewFramesSince`.

SHA-256 do trecho: `6ff5ec729aef972e9272f3523daafe1276a12bade057e75afb0598877ec71e38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
