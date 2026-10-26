# `createDamagedCopy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/settings/sand-settings-store.ts` · [README do módulo](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687691-687711](../../../../../../../reference/runtime/host-main.cjs#L687691-L687711) | `FunctionDeclaration` | não | `path33, bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687691-687711](../../../../../../../reference/runtime/host-main.cjs#L687691-L687711) | 1 | 0 | 0 | 2 | 2 | 2 |

### host:687691

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

Alvos de atribuição ou incremento: `fd`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `8047701e0b516fdbee9a388403e9ffe3aef73200a87aba85998380c611dcc0f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
