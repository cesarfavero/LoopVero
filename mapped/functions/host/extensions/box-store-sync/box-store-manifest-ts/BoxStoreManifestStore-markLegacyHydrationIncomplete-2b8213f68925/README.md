# `BoxStoreManifestStore.markLegacyHydrationIncomplete`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477488-477496](../../../../../../../reference/runtime/host-main.cjs#L477488-L477496) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477488-477496](../../../../../../../reference/runtime/host-main.cjs#L477488-L477496) | 1 | 0 | 4 | 0 | 0 | 0 |

### host:477488

Chamadas escritas diretamente neste corpo: `removeHydrationHandoffMarker`, `this.deps.resolveStoreId`, `this.loadManifest`, `this.saveManifest`.

Alvos de atribuição ou incremento: `this.hydrationManifestReadBlocked`.

SHA-256 do trecho: `c3a789c0cb982e0e8722a1c1658a7c949e0db63d1fe2a91c4132c0739f737a0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
