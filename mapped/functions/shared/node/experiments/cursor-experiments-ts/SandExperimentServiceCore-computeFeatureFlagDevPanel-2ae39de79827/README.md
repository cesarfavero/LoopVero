# `SandExperimentServiceCore.computeFeatureFlagDevPanel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552881-552896](../../../../../../../reference/runtime/host-main.cjs#L552881-L552896) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552881-552896](../../../../../../../reference/runtime/host-main.cjs#L552881-L552896) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:552881

Chamadas escritas diretamente neste corpo: `Object.keys`, `items.push`, `overrides.get`, `this.canUseFeatureFlagOverrides`, `this.checkFeatureGate`, `this.overrideStore.activeOverrides`, `this.overrideStore.isFlagName`.

SHA-256 do trecho: `c59eded20e044a426e745715b2e3ae4efe78dce64ec503936afbb0e718220650`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
