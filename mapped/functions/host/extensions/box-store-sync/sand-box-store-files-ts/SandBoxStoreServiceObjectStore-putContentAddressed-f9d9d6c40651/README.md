# `SandBoxStoreServiceObjectStore.putContentAddressed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474921-474948](../../../../../../../reference/runtime/host-main.cjs#L474921-L474948) | `method` | sim | `key, bytes, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474921-474948](../../../../../../../reference/runtime/host-main.cjs#L474921-L474948) | 3 | 0 | 3 | 1 | 1 | 0 |

### host:474921

Chamadas escritas diretamente neste corpo: `BigInt`, `assertWorkingStateContentAddressedKeyMatchesSha`, `classifyConditionalPutStatus`, `new SandBoxStoreSyncError`, `putOnce`, `sha256Hex`, `this.presignWrite`.

Alvos de atribuição ou incremento: `response`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `5c0aea81c2642fbe1df30047094a80114f867ea74184932e1ca5ce33e8ee6bb1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
