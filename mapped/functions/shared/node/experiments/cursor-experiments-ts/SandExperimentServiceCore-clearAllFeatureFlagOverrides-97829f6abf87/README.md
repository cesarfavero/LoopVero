# `SandExperimentServiceCore.clearAllFeatureFlagOverrides`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552782-552788](../../../../../../../reference/runtime/host-main.cjs#L552782-L552788) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552782-552788](../../../../../../../reference/runtime/host-main.cjs#L552782-L552788) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:552782

Chamadas escritas diretamente neste corpo: `this.canUseFeatureFlagOverrides`, `this.overrideStore.clearAll`, `this.persistAndBroadcastOverrides`.

SHA-256 do trecho: `d59b8cdb62def4de82e31141b2e717836c4da1589af281777d4c3543c5e88d59`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
