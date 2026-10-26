# `BoxStoreManifestStore.isStoreDbSweepCommitted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477159-477165](../../../../../../../reference/runtime/host-main.cjs#L477159-L477165) | `method` | não | `manifest, capturedThisSweep` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477159-477165](../../../../../../../reference/runtime/host-main.cjs#L477159-L477165) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:477159

Chamadas escritas diretamente neste corpo: `this.isLiveManifest`, `this.uncommittedStoreDbEntries.has`.

SHA-256 do trecho: `0ee7fc93a05d2c57f980ea815090a0d770c3cb66a50eaf67e837f9fbf8b8efec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
