# `SandExperimentServiceCore.exposeUsageWarningExperiment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553098-553114](../../../../../../../reference/runtime/host-main.cjs#L553098-L553114) | `method` | não | `percentUsed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553098-553114](../../../../../../../reference/runtime/host-main.cjs#L553098-L553114) | 9 | 0 | 0 | 10 | 0 | 0 |

### host:553098

Chamadas escritas diretamente neste corpo: `sandUsageWarningExperimentAssignmentOf`, `this.flushExposureLog`, `this.hasHydratedStatsigUserId`, `this.readExperiment`.

SHA-256 do trecho: `55bdd30c8821e8417bc5747f0e6c3b6bd5c89de584fac866527329fbff4a7bd6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
