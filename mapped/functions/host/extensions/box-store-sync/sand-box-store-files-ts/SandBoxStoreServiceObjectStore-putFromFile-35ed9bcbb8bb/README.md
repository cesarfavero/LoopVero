# `SandBoxStoreServiceObjectStore.putFromFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475013-475048](../../../../../../../reference/runtime/host-main.cjs#L475013-L475048) | `method` | sim | `key, srcPath, sha, size` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475013-475048](../../../../../../../reference/runtime/host-main.cjs#L475013-L475048) | 7 | 0 | 5 | 2 | 2 | 0 |

### host:475013

Chamadas escritas diretamente neste corpo: `BigInt`, `String`, `assertWorkingStateContentAddressedKeyMatchesSha`, `new SandBoxStoreSyncError`, `streamPutFromFile`, `this.planMultipartParts`, `this.uploadMultipart`, `this.writePresignCoalescer`.

Alvos de atribuição ou incremento: `status`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `f60bae1a75be4138faf3fa4ef6dab96c561bdc2ed5bc5be4706cf696477a4183`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
