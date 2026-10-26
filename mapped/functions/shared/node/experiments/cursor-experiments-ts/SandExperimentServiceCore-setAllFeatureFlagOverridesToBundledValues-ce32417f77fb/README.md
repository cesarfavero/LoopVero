# `SandExperimentServiceCore.setAllFeatureFlagOverridesToBundledValues`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552789-552793](../../../../../../../reference/runtime/host-main.cjs#L552789-L552793) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552789-552793](../../../../../../../reference/runtime/host-main.cjs#L552789-L552793) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:552789

Chamadas escritas diretamente neste corpo: `this.canUseFeatureFlagOverrides`, `this.overrideStore.setAllToBundledDefaults`, `this.persistAndBroadcastOverrides`.

SHA-256 do trecho: `470c033e549dd85c4b00eb47fa3dfef589b497c42652242b6470b960b9721b59`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
