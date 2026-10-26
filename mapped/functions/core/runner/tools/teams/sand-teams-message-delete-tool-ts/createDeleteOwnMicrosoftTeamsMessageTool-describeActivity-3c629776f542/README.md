# `createDeleteOwnMicrosoftTeamsMessageTool/describeActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/teams/sand-teams-message-delete-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/teams/sand-teams-message-delete-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768374-768377](../../../../../../../../reference/runtime/host-main.cjs#L768374-L768377) | `ArrowFunctionExpression` | não | `args` |
| [evaluation:563890-563893](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563890-L563893) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768374-768377](../../../../../../../../reference/runtime/host-main.cjs#L768374-L768377) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:768374 usa retorno implícito de arrow function.
| [evaluation:563890-563893](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563890-L563893) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:563890 usa retorno implícito de arrow function.

### host:768374

Chamadas escritas diretamente neste corpo: `args.activity_id.trim`, `args.conversation.trim`.

SHA-256 do trecho: `0a7e0002ab957c2fbeb4077a52e2f388b1cf7ddb2eb95b983d6a4005e5548483`.

### evaluation:563890

Chamadas escritas diretamente neste corpo: `args.activity_id.trim`, `args.conversation.trim`.

SHA-256 do trecho: `0a7e0002ab957c2fbeb4077a52e2f388b1cf7ddb2eb95b983d6a4005e5548483`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
