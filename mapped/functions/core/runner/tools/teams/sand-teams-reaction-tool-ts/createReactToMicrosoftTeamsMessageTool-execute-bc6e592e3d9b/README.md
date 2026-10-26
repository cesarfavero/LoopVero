# `createReactToMicrosoftTeamsMessageTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/teams/sand-teams-reaction-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/teams/sand-teams-reaction-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768337-768356](../../../../../../../../reference/runtime/host-main.cjs#L768337-L768356) | `ArrowFunctionExpression` | sim | `ctx, args, teams` |
| [evaluation:563853-563872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563853-L563872) | `ArrowFunctionExpression` | sim | `ctx, args, teams` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768337-768356](../../../../../../../../reference/runtime/host-main.cjs#L768337-L768356) | 3 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:563853-563872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563853-L563872) | 3 | 0 | 1 | 1 | 1 | 0 |

### host:768337

Chamadas escritas diretamente neste corpo: `args.activity_id.trim`, `args.conversation.trim`, `args.reaction.trim`, `new SandToolInputError`, `new ShimCall`, `normalizationForm`, `normalizeTeamsReactionName`, `shims.flush`, `shims.report`, `teams.react`, `teamsReactionNameNormalization.applied`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `b7efab2a322337b318fdba8181fedd660c89d1a06b86cc34b5c2b60a39b9c9e1`.

### evaluation:563853

Chamadas escritas diretamente neste corpo: `args.activity_id.trim`, `args.conversation.trim`, `args.reaction.trim`, `new SandToolInputError`, `new ShimCall`, `normalizationForm`, `normalizeTeamsReactionName`, `shims.flush`, `shims.report`, `teams.react`, `teamsReactionNameNormalization.applied`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `b7efab2a322337b318fdba8181fedd660c89d1a06b86cc34b5c2b60a39b9c9e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
