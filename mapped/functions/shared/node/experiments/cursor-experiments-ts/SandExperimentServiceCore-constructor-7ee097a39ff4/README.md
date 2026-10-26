# `SandExperimentServiceCore.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552587-552615](../../../../../../../reference/runtime/host-main.cjs#L552587-L552615) | `method` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552587-552615](../../../../../../../reference/runtime/host-main.cjs#L552587-L552615) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:552587

Chamadas escritas diretamente neste corpo: `createDeadlinePolicy`, `createPollingPolicy3`, `jitteredSandExperimentPollIntervalMs`, `new SandExperimentOverrideStore`, `new SandFeatureFlagOverrideStore`, `this.canUseFeatureFlagOverrides`, `this.computeSnapshot`, `this.overrideStore.hydrateFromDisk`.

Alvos de atribuição ou incremento: `this.bootstrapDeadline`, `this.clock`, `this.experimentOverrideStore`, `this.options`, `this.overrideStore`, `this.refreshPoll`, `this.registry`, `this.snapshot`.

SHA-256 do trecho: `0c896e127841febc93fac8a72cdd9f27948635aca51d3f8505f685aa69549465`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
