# `BoxStoreManifestStore.loadManifest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477166-477176](../../../../../../../reference/runtime/host-main.cjs#L477166-L477176) | `method` | não | `storeId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477166-477176](../../../../../../../reference/runtime/host-main.cjs#L477166-L477176) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:477166

Chamadas escritas diretamente neste corpo: `Promise.reject`, `Promise.resolve`, `Promise.withResolvers`, `this.manifestReads.run`.

Alvos de atribuição ou incremento: `load2`, `this.manifestLoad`.

SHA-256 do trecho: `8d818051f4e4444fb53bcc9f9a82d4fc8aece567455dfb31190ef521040e1fb6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
