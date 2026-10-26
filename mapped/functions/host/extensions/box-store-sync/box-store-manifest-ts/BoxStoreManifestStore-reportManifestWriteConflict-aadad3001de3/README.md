# `BoxStoreManifestStore.reportManifestWriteConflict`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-manifest.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477427-477432](../../../../../../../reference/runtime/host-main.cjs#L477427-L477432) | `method` | não | `info2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477427-477432](../../../../../../../reference/runtime/host-main.cjs#L477427-L477432) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:477427

Chamadas escritas diretamente neste corpo: `this.deps.onManifestWriteConflict`.

SHA-256 do trecho: `3f0f254df40904a7a0920624861217192a80ce3024304d2047b0b6d4f41e25bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
