# `SandExperimentServiceCore.getGroupChatDiscouragementPolicy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553002-553013](../../../../../../../reference/runtime/host-main.cjs#L553002-L553013) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553002-553013](../../../../../../../reference/runtime/host-main.cjs#L553002-L553013) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:553002

Chamadas escritas diretamente neste corpo: `this.getExperiment`, `this.getExperimentGroupName`, `this.hasHydratedStatsigUserId`.

SHA-256 do trecho: `97448e13fdec7c5d23fa1c6d0b3d882159d552d15318dc7e2599f00862f65abf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
