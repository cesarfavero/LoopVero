# `SandExperimentServiceCore.computeExperimentsDevPanel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552855-552880](../../../../../../../reference/runtime/host-main.cjs#L552855-L552880) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552855-552880](../../../../../../../reference/runtime/host-main.cjs#L552855-L552880) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:552855

Chamadas escritas diretamente neste corpo: `.map`, `Object.keys`, `isKeyOf`, `items.push`, `jsonParamsOf`, `new Set`, `this.canUseFeatureFlagOverrides`, `this.experimentOverrideStore.read`, `this.getExperiment`, `this.getExperimentGroupName`.

SHA-256 do trecho: `eeb43958909a85b0fab25f7671420496a864c16dd50e5c5dc022b832408cf779`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
