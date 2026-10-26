# `SandExperimentServiceCore.exposeFeatureGate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553115-553132](../../../../../../../reference/runtime/host-main.cjs#L553115-L553132) | `method` | não | `name18, rendered` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553115-553132](../../../../../../../reference/runtime/host-main.cjs#L553115-L553132) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:553115

Chamadas escritas diretamente neste corpo: `SESSION_LATCHED_GATES.has`, `this.checkFeatureGate`, `this.exposeRenderedTreatment`, `this.gateExposuresAwaitingUser.add`, `this.hasCurrentStatsigIdentity`, `this.overrideStore.isFlagName`, `this.renderedGateExposuresAwaitingUser.set`.

SHA-256 do trecho: `ccf089ffa0ac04de21d42e96b010c67708a39c28dcf84da666fb46b1294c34a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
