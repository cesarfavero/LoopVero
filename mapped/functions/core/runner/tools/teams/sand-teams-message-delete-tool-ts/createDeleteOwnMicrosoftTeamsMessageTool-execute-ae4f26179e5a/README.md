# `createDeleteOwnMicrosoftTeamsMessageTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/teams/sand-teams-message-delete-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/teams/sand-teams-message-delete-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768378-768384](../../../../../../../../reference/runtime/host-main.cjs#L768378-L768384) | `ArrowFunctionExpression` | sim | `_ctx, args, teams` |
| [evaluation:563894-563900](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563894-L563900) | `ArrowFunctionExpression` | sim | `_ctx, args, teams` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768378-768384](../../../../../../../../reference/runtime/host-main.cjs#L768378-L768384) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563894-563900](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563894-L563900) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:768378

Chamadas escritas diretamente neste corpo: `args.activity_id.trim`, `args.conversation.trim`, `teams.deleteOwnMessage`.

SHA-256 do trecho: `69d7e2ecc4dbe87a0c6c6d3e9813128fa66354de3c1a7630e4884d98d33f3de7`.

### evaluation:563894

Chamadas escritas diretamente neste corpo: `args.activity_id.trim`, `args.conversation.trim`, `teams.deleteOwnMessage`.

SHA-256 do trecho: `69d7e2ecc4dbe87a0c6c6d3e9813128fa66354de3c1a7630e4884d98d33f3de7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
