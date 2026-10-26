# `planSandBoxStoreMultipartParts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474692-474735](../../../../../../../reference/runtime/host-main.cjs#L474692-L474735) | `FunctionDeclaration` | sim | `srcPath, sizeBytes, partSizeBytes = SAND_BOX_STORE_MULTIPART_PART_SIZE_BYTES` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474692-474735](../../../../../../../reference/runtime/host-main.cjs#L474692-L474735) | 5 | 2 | 0 | 1 | 3 | 0 |

### host:474692

Chamadas escritas diretamente neste corpo: `Math.min`, `Number.isSafeInteger`, `buffer.subarray`, `finishPart`, `new SandBoxStoreSyncError`, `partHash.update`, `wholeHash.digest`, `wholeHash.update`.

Alvos de atribuição ou incremento: `buffer`, `position`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `93432cbce6e8245cb66437c418eb6f799bc8505f1d2f5d113f50f5261d1f4066`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
