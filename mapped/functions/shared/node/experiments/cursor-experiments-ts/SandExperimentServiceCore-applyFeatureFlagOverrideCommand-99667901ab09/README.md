# `SandExperimentServiceCore.applyFeatureFlagOverrideCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552801-552820](../../../../../../../reference/runtime/host-main.cjs#L552801-L552820) | `method` | não | `command` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552801-552820](../../../../../../../reference/runtime/host-main.cjs#L552801-L552820) | 6 | 0 | 0 | 0 | 0 | 0 |

### host:552801

Chamadas escritas diretamente neste corpo: `this.clearAllFeatureFlagOverrides`, `this.clearFeatureFlagOverride`, `this.overrideStore.isFlagName`, `this.setAllFeatureFlagOverridesToBundledValues`, `this.setFeatureFlagOverride`.

SHA-256 do trecho: `28f99301f90118760ec982c8924460da2ef9d56ddbaabef2cf0957f6848a06a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
