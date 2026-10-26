# `assertWorkingStateContentAddressedKeyMatchesSha`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:474687-474691](../../../../../../../reference/runtime/host-main.cjs#L474687-L474691) | `FunctionDeclaration` | não | `key, sha256` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474687-474691](../../../../../../../reference/runtime/host-main.cjs#L474687-L474691) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:474687

Chamadas escritas diretamente neste corpo: `WORKING_STATE_BLOB_KEY.exec`, `key.startsWith`, `new SandBoxStoreBlobHashMismatchError`.

Alvos de lançamento explícito: `SandBoxStoreBlobHashMismatchError`.

SHA-256 do trecho: `4bef6923aa88875c8af55d166f8f2d18b63da09fe86d5b6895f5c7c58858d963`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
