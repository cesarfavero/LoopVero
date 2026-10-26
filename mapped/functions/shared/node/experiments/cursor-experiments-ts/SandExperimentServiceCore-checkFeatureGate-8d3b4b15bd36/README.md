# `SandExperimentServiceCore.checkFeatureGate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552716-552733](../../../../../../../reference/runtime/host-main.cjs#L552716-L552733) | `method` | não | `name18, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552716-552733](../../../../../../../reference/runtime/host-main.cjs#L552716-L552733) | 5 | 0 | 0 | 6 | 0 | 1 |

### host:552716

Chamadas escritas diretamente neste corpo: `client.checkGate`, `this.canUseFeatureFlagOverrides`, `this.overrideStore.read`.

SHA-256 do trecho: `116a86ea2aa842df88dc7264fa4d620928f75b18928d3f8c915b6dd9314b5ebf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
