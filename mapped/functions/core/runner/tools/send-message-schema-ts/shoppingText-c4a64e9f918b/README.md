# `shoppingText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741260-741260](../../../../../../../reference/runtime/host-main.cjs#L741260-L741260) | `ArrowFunctionExpression` | não | `max` |
| [evaluation:482207-482207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482207-L482207) | `ArrowFunctionExpression` | não | `max` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741260-741260](../../../../../../../reference/runtime/host-main.cjs#L741260-L741260) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:741260 usa retorno implícito de arrow function.
| [evaluation:482207-482207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482207-L482207) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:482207 usa retorno implícito de arrow function.

### host:741260

Chamadas escritas diretamente neste corpo: `.max`, `external_exports2.string`.

SHA-256 do trecho: `bc3406c64af093452f2a1225909cd8866fd510aa9cc1b6d2a5db370e2ad6fd7a`.

### evaluation:482207

Chamadas escritas diretamente neste corpo: `.max`, `external_exports3.string`.

SHA-256 do trecho: `95dbe3a9a12436d83b20a537869ab1e28c8fe62b6211c7f39ffebde62c4a121d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
