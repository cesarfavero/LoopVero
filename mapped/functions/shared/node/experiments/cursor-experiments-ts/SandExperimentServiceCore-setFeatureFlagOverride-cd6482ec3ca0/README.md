# `SandExperimentServiceCore.setFeatureFlagOverride`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552771-552775](../../../../../../../reference/runtime/host-main.cjs#L552771-L552775) | `method` | não | `name18, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552771-552775](../../../../../../../reference/runtime/host-main.cjs#L552771-L552775) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:552771

Chamadas escritas diretamente neste corpo: `this.canUseFeatureFlagOverrides`, `this.overrideStore.set`, `this.persistAndBroadcastOverrides`.

SHA-256 do trecho: `cf52f48764a225133e1eda7ac6915d0583dea9e56c12ed1bae53058281a3582d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
