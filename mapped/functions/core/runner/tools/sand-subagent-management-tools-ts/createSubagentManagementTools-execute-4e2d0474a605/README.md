# `createSubagentManagementTools/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781072-781090](../../../../../../../reference/runtime/host-main.cjs#L781072-L781090) | `ArrowFunctionExpression` | sim | `_ctx, args, deps` |
| [host:781097-781113](../../../../../../../reference/runtime/host-main.cjs#L781097-L781113) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |
| [host:781120-781139](../../../../../../../reference/runtime/host-main.cjs#L781120-L781139) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |
| [evaluation:581419-581437](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581419-L581437) | `ArrowFunctionExpression` | sim | `_ctx, args, deps` |
| [evaluation:581444-581460](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581444-L581460) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |
| [evaluation:581467-581486](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581467-L581486) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781072-781090](../../../../../../../reference/runtime/host-main.cjs#L781072-L781090) | 3 | 0 | 3 | 4 | 0 | 0 |
| [host:781097-781113](../../../../../../../reference/runtime/host-main.cjs#L781097-L781113) | 3 | 0 | 3 | 3 | 0 | 0 |
| [host:781120-781139](../../../../../../../reference/runtime/host-main.cjs#L781120-L781139) | 2 | 1 | 3 | 3 | 0 | 0 |
| [evaluation:581419-581437](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581419-L581437) | 3 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:581444-581460](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581444-L581460) | 3 | 0 | 3 | 3 | 0 | 0 |
| [evaluation:581467-581486](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581467-L581486) | 2 | 1 | 3 | 3 | 0 | 0 |

### host:781072

Chamadas escritas diretamente neste corpo: `.join`, `deps.getRunningSubagent`, `deps.listRunningSubagents`, `describeRunningSubagent`, `notRunningMessage`, `running.map`.

SHA-256 do trecho: `b7e23d2d655cbd11bebbc7b2a34ffc6f6d8551686e385d926594ca6c1777f23b`.

### host:781097

Chamadas escritas diretamente neste corpo: `deps.listRunningSubagents`, `deps.reviewSteer`, `deps.steerSubagent`, `notRunningMessage`.

SHA-256 do trecho: `6263ea4d744304e579713843bfb25b3a907f93198e030ac550b0b18cd561370d`.

### host:781120

Chamadas escritas diretamente neste corpo: `deps.abortSubagent`, `deps.listRunningSubagents`, `formatStopAllSubagentsReport`, `hasSubagentId`, `notRunningMessage`, `recordStopped`, `stopAllRunningSubagents`.

SHA-256 do trecho: `0790dc5e265888a788afa6489e931cf6a97b8012a07ff57f4716eb7d0ece8d1c`.

### evaluation:581419

Chamadas escritas diretamente neste corpo: `.join`, `deps.getRunningSubagent`, `deps.listRunningSubagents`, `describeRunningSubagent`, `notRunningMessage`, `running.map`.

SHA-256 do trecho: `b7e23d2d655cbd11bebbc7b2a34ffc6f6d8551686e385d926594ca6c1777f23b`.

### evaluation:581444

Chamadas escritas diretamente neste corpo: `deps.listRunningSubagents`, `deps.reviewSteer`, `deps.steerSubagent`, `notRunningMessage`.

SHA-256 do trecho: `6263ea4d744304e579713843bfb25b3a907f93198e030ac550b0b18cd561370d`.

### evaluation:581467

Chamadas escritas diretamente neste corpo: `deps.abortSubagent`, `deps.listRunningSubagents`, `formatStopAllSubagentsReport`, `hasSubagentId`, `notRunningMessage`, `recordStopped`, `stopAllRunningSubagents`.

SHA-256 do trecho: `0790dc5e265888a788afa6489e931cf6a97b8012a07ff57f4716eb7d0ece8d1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
