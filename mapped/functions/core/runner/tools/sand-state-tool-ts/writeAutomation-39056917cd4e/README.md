# `writeAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762721-762838](../../../../../../../reference/runtime/host-main.cjs#L762721-L762838) | `FunctionDeclaration` | sim | `args, deps, need` |
| [evaluation:555331-555448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555331-L555448) | `FunctionDeclaration` | sim | `args, deps, need` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762721-762838](../../../../../../../reference/runtime/host-main.cjs#L762721-L762838) | 23 | 0 | 7 | 12 | 1 | 0 |
| [evaluation:555331-555448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555331-L555448) | 23 | 0 | 7 | 12 | 1 | 0 |

### host:762721

Chamadas escritas diretamente neste corpo: `.find`, `.some`, `applyAutomationTiming`, `deps.activeAutomationWakeId`, `deps.automationStore.creationRefusal`, `deps.automationStore.list`, `deps.automationTiming`, `deps.automationWriteProvenance`, `deps.canCreateAutomation`, `deps.canReviewAutomationWrites`, `deps.onListenerAutomationSaved`, `deps.reviewAutomationWrite`, `deps.state.createAutomation`, `deps.state.updateAutomation`, `firingAutomationReviewTarget`, `isTemplateSetupConsentedWrite`, `need`, `new SandToolInputError`, `resolveReferencedSkills`, `resolveTrigger`, `reviewedWriteProvenance`, `stateWriteOk`, `storedFiringAutomation`, `triggerCronSchedules`, `unescapeEventText`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `162d057c109de36fa82d6bfac01b4bda21c6a521984035ccd827467e586130a3`.

### evaluation:555331

Chamadas escritas diretamente neste corpo: `.find`, `.some`, `applyAutomationTiming`, `deps.activeAutomationWakeId`, `deps.automationStore.creationRefusal`, `deps.automationStore.list`, `deps.automationTiming`, `deps.automationWriteProvenance`, `deps.canCreateAutomation`, `deps.canReviewAutomationWrites`, `deps.onListenerAutomationSaved`, `deps.reviewAutomationWrite`, `deps.state.createAutomation`, `deps.state.updateAutomation`, `firingAutomationReviewTarget`, `isTemplateSetupConsentedWrite`, `need`, `new SandToolInputError`, `resolveReferencedSkills`, `resolveTrigger`, `reviewedWriteProvenance`, `stateWriteOk`, `storedFiringAutomation`, `triggerCronSchedules`, `unescapeEventText`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `162d057c109de36fa82d6bfac01b4bda21c6a521984035ccd827467e586130a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
