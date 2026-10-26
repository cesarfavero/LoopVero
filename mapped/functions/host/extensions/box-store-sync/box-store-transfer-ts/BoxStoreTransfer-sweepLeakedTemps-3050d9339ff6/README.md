# `BoxStoreTransfer.sweepLeakedTemps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-transfer.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:479868-479889](../../../../../../../reference/runtime/host-main.cjs#L479868-L479889) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479868-479889](../../../../../../../reference/runtime/host-main.cjs#L479868-L479889) | 2 | 2 | 1 | 1 | 0 | 1 |

### host:479868

Chamadas escritas diretamente neste corpo: `.map`, `absPath.includes`, `dedupeNestedRoots`, `this.deps.categories.filter`, `walkNodes`.

Alvos de atribuição ou incremento: `removed`.

SHA-256 do trecho: `3215fe90e28048dc4939631f077e9f5ca9340ed24e63182c5d95cfb47c88ff44`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
