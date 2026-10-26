# `writeSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762854-762941](../../../../../../../reference/runtime/host-main.cjs#L762854-L762941) | `FunctionDeclaration` | sim | `args, deps, need` |
| [evaluation:555464-555551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555464-L555551) | `FunctionDeclaration` | sim | `args, deps, need` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762854-762941](../../../../../../../reference/runtime/host-main.cjs#L762854-L762941) | 7 | 0 | 3 | 6 | 0 | 0 |
| [evaluation:555464-555551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555464-L555551) | 7 | 0 | 3 | 6 | 0 | 0 |

### host:762854

Chamadas escritas diretamente neste corpo: `.filter`, `.find`, `RESERVED_MANAGED_SKILL_IDS.has`, `deps.automationStore.list`, `deps.automationWriteProvenance`, `deps.canReviewAutomationWrites`, `deps.reviewAutomationWrite`, `deps.skillStore.list`, `deps.state.writeSkill`, `firingAutomationReviewTarget`, `need`, `otherPluginSkillRefusal`, `referencingAutomations.map`, `referencingAutomations.some`, `resolveNamedSkill`, `resolveStoredSkillWriteProvenance`, `reviewedWriteProvenance`, `slugifySkillName`, `storedFiringAutomation`, `writeAutomation`.

Alvos de atribuição ou incremento: `review`.

SHA-256 do trecho: `0ce084ae568c59dad46813333c5aa7cd393db5ad01cb19dc7a0cdcb8af8ed0d3`.

### evaluation:555464

Chamadas escritas diretamente neste corpo: `.filter`, `.find`, `RESERVED_MANAGED_SKILL_IDS.has`, `deps.automationStore.list`, `deps.automationWriteProvenance`, `deps.canReviewAutomationWrites`, `deps.reviewAutomationWrite`, `deps.skillStore.list`, `deps.state.writeSkill`, `firingAutomationReviewTarget`, `need`, `otherPluginSkillRefusal`, `referencingAutomations.map`, `referencingAutomations.some`, `resolveNamedSkill`, `resolveStoredSkillWriteProvenance`, `reviewedWriteProvenance`, `slugifySkillName`, `storedFiringAutomation`, `writeAutomation`.

Alvos de atribuição ou incremento: `review`.

SHA-256 do trecho: `0ce084ae568c59dad46813333c5aa7cd393db5ad01cb19dc7a0cdcb8af8ed0d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
