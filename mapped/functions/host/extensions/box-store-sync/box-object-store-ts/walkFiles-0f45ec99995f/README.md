# `walkFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-object-store.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475397-475414](../../../../../../../reference/runtime/host-main.cjs#L475397-L475414) | `FunctionDeclaration` | sim | `dir, out` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475397-475414](../../../../../../../reference/runtime/host-main.cjs#L475397-L475414) | 4 | 1 | 2 | 1 | 1 | 1 |

### host:475397

Chamadas escritas diretamente neste corpo: `entry.isDirectory`, `entry.isFile`, `entry.isSymbolicLink`, `findSystemErrno`, `out.push`, `walkFiles`.

Alvos de atribuição ou incremento: `entries`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `814c009d88af516ecdf77d9e4ee4e07b1655a1982b902fbe03de9b69fafa1980`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
