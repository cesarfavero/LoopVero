# `createLeaveMeetingTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773568-773568](../../../../../../reference/runtime/host-main.cjs#L773568-L773568) | `ArrowFunctionExpression` | não | `ctx, args, d` |
| [evaluation:572794-572794](../../../../../../reference/runtime/sand-eval-runner.cjs#L572794-L572794) | `ArrowFunctionExpression` | não | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773568-773568](../../../../../../reference/runtime/host-main.cjs#L773568-L773568) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:773568 usa retorno implícito de arrow function.
| [evaluation:572794-572794](../../../../../../reference/runtime/sand-eval-runner.cjs#L572794-L572794) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:572794 usa retorno implícito de arrow function.

### host:773568

Chamadas escritas diretamente neste corpo: `MeetingsTools.leave`.

SHA-256 do trecho: `2e6e3652ac11bfe20e768dc5e3201ef3f3988ee5327c160f82916a6e5a6ade38`.

### evaluation:572794

Chamadas escritas diretamente neste corpo: `MeetingsTools.leave`.

SHA-256 do trecho: `2e6e3652ac11bfe20e768dc5e3201ef3f3988ee5327c160f82916a6e5a6ade38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
