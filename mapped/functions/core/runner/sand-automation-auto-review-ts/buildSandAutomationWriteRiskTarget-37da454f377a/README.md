# `buildSandAutomationWriteRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/sand-automation-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-automation-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762210-762257](../../../../../../reference/runtime/host-main.cjs#L762210-L762257) | `FunctionDeclaration` | não | `args` |
| [evaluation:554820-554867](../../../../../../reference/runtime/sand-eval-runner.cjs#L554820-L554867) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762210-762257](../../../../../../reference/runtime/host-main.cjs#L762210-L762257) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554820-554867](../../../../../../reference/runtime/sand-eval-runner.cjs#L554820-L554867) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:762210

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `describeTrigger`, `new SmartModeRiskTarget`, `referencedSkills.map`, `referencingRoutines.map`, `serializeStoredTrigger`, `structFromRecord`, `triggerSchedule`.

SHA-256 do trecho: `8de2a1764502551f497a47d0f95fbc454223623b6ff6adb03d4bdea10ce4c122`.

### evaluation:554820

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `describeTrigger`, `new SmartModeRiskTarget`, `referencedSkills.map`, `referencingRoutines.map`, `serializeStoredTrigger`, `structFromRecord`, `triggerSchedule`.

SHA-256 do trecho: `8de2a1764502551f497a47d0f95fbc454223623b6ff6adb03d4bdea10ce4c122`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
