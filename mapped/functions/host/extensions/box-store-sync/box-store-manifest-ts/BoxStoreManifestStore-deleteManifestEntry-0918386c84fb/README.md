# `BoxStoreManifestStore.deleteManifestEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477138-477144](../../../../../../../reference/runtime/host-main.cjs#L477138-L477144) | `method` | não | `manifest, relPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477138-477144](../../../../../../../reference/runtime/host-main.cjs#L477138-L477144) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:477138

Chamadas escritas diretamente neste corpo: `this.deleteManifestEntryWithIndex`, `this.manifestAncestorRefCounts.get`.

SHA-256 do trecho: `3833cccd122727a9f02d3307739521378ced3ce2dba63cb3c05089b0bf15b8d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
