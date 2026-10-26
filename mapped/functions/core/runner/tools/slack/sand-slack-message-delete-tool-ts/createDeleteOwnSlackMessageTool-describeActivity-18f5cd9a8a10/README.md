# `createDeleteOwnSlackMessageTool/describeActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/slack/sand-slack-message-delete-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/slack/sand-slack-message-delete-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768245-768245](../../../../../../../../reference/runtime/host-main.cjs#L768245-L768245) | `ArrowFunctionExpression` | não | `args` |
| [evaluation:563761-563761](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563761-L563761) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768245-768245](../../../../../../../../reference/runtime/host-main.cjs#L768245-L768245) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:768245 usa retorno implícito de arrow function.
| [evaluation:563761-563761](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563761-L563761) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:563761 usa retorno implícito de arrow function.

### host:768245

Chamadas escritas diretamente neste corpo: `args.channel.trim`, `args.message_ts.trim`.

SHA-256 do trecho: `7f32ae17929d260d4691da392b947f865bc213d1dc848c2972d41cd2ce06aa32`.

### evaluation:563761

Chamadas escritas diretamente neste corpo: `args.channel.trim`, `args.message_ts.trim`.

SHA-256 do trecho: `7f32ae17929d260d4691da392b947f865bc213d1dc848c2972d41cd2ce06aa32`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
