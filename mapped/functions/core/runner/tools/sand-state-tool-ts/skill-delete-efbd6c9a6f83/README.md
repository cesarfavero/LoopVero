# `skill.delete`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763007-763027](../../../../../../../reference/runtime/host-main.cjs#L763007-L763027) | `ArrowFunctionExpression` | sim | `args, deps, need` |
| [evaluation:555617-555637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555617-L555637) | `ArrowFunctionExpression` | sim | `args, deps, need` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763007-763027](../../../../../../../reference/runtime/host-main.cjs#L763007-L763027) | 4 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:555617-555637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555617-L555637) | 4 | 0 | 1 | 4 | 0 | 0 |

### host:763007

Chamadas escritas diretamente neste corpo: `deps.automationWriteProvenance`, `deps.canReviewAutomationWrites`, `deps.state.deleteSkill`, `isBotSkillsPluginSkill`, `need`, `otherPluginSkillRefusal`, `refuseUnreviewableAutomationRemoval`, `resolveNamedSkill`, `reviewedWriteProvenance`.

SHA-256 do trecho: `3282eef8656cce3732b2ae1b4df72f50d6dbebd47fee8565a7e246969b4f220d`.

### evaluation:555617

Chamadas escritas diretamente neste corpo: `deps.automationWriteProvenance`, `deps.canReviewAutomationWrites`, `deps.state.deleteSkill`, `isBotSkillsPluginSkill`, `need`, `otherPluginSkillRefusal`, `refuseUnreviewableAutomationRemoval`, `resolveNamedSkill`, `reviewedWriteProvenance`.

SHA-256 do trecho: `3282eef8656cce3732b2ae1b4df72f50d6dbebd47fee8565a7e246969b4f220d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
