# `SandExperimentServiceCore.exposeGatesAwaitingUser`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553140-553150](../../../../../../../reference/runtime/host-main.cjs#L553140-L553150) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553140-553150](../../../../../../../reference/runtime/host-main.cjs#L553140-L553150) | 1 | 2 | 0 | 1 | 0 | 0 |

### host:553140

Chamadas escritas diretamente neste corpo: `this.checkFeatureGate`, `this.exposeRenderedTreatment`, `this.gateExposuresAwaitingUser.clear`, `this.hasCurrentStatsigIdentity`, `this.renderedGateExposuresAwaitingUser.clear`.

SHA-256 do trecho: `dd82be32295f88f25b6979d87c7629bfb6c3d42e8a1e1f95080aa322cdda5b49`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
