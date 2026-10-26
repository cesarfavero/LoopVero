# `findLinkItemsRepetition`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/link-items/link-items.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741164-741169](../../../../../../../../reference/runtime/host-main.cjs#L741164-L741169) | `FunctionDeclaration` | não | `lead, items` |
| [evaluation:482111-482116](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482111-L482116) | `FunctionDeclaration` | não | `lead, items` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741164-741169](../../../../../../../../reference/runtime/host-main.cjs#L741164-L741169) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482111-482116](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482111-L482116) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741164

Chamadas escritas diretamente neste corpo: `findNamedItemsRepetition`, `items.map`.

SHA-256 do trecho: `178068a80264084274d061d5137fa9dd6f9cfe9b9b7c3e88cdd03bcb79258a73`.

### evaluation:482111

Chamadas escritas diretamente neste corpo: `findNamedItemsRepetition`, `items.map`.

SHA-256 do trecho: `178068a80264084274d061d5137fa9dd6f9cfe9b9b7c3e88cdd03bcb79258a73`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
