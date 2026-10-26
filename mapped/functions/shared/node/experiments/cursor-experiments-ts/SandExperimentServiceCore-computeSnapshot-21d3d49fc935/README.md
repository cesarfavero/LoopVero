# `SandExperimentServiceCore.computeSnapshot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553429-553472](../../../../../../../reference/runtime/host-main.cjs#L553429-L553472) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553429-553472](../../../../../../../reference/runtime/host-main.cjs#L553429-L553472) | 4 | 3 | 0 | 1 | 0 | 0 |

### host:553429

Chamadas escritas diretamente neste corpo: `Object.keys`, `isKeyOf`, `this.checkFeatureGate`, `this.computeExperimentsDevPanel`, `this.computeFeatureFlagDevPanel`, `this.getComposerTriggerExperimentEnabled`, `this.getDynamicConfig`, `this.getExperiment`, `this.getGroupChatDiscouragementPolicy`, `this.getInviteTeammatesPlacement`, `this.getOnboardingJobRoleEnabled`, `this.getOnboardingNotificationsAskEnabled`, `this.getOnboardingRoleUseCaseBotsEnabled`, `this.getSidebarSuggestedBotsEnabled`, `this.overrideStore.isFlagName`.

Alvos de atribuição ou incremento: `dynamicConfigs[computed]`, `experiments[computed]`, `featureGates[computed]`.

SHA-256 do trecho: `8f4f4d088dc10b9943019b32a5488ecdeb0ba5ecd9704c8712fcb4504ba741e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
