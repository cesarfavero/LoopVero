# `SandBoxStoreServiceObjectStore.putMutable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474968-475012](../../../../../../../reference/runtime/host-main.cjs#L474968-L475012) | `method` | sim | `key, bytes, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474968-475012](../../../../../../../reference/runtime/host-main.cjs#L474968-L475012) | 5 | 0 | 4 | 0 | 2 | 0 |

### host:474968

Chamadas escritas diretamente neste corpo: `.trim`, `BigInt`, `etag.replaceAll`, `new BoxStoreCanonicalWriteConflictError`, `new SandBoxStoreSyncError`, `putOnce`, `response.headers.get`, `sha256Hex`, `this.presignWrite`, `this.resolveMutableBaseline`, `this.sessionEtags.delete`, `this.sessionEtags.set`.

Alvos de atribuição ou incremento: `response`.

Alvos de lançamento explícito: `BoxStoreCanonicalWriteConflictError`, `SandBoxStoreSyncError`.

SHA-256 do trecho: `dd2193d353f4ce786a278c99f2bab98952ea19fffc12095984b9d3fe4ca7a0cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
