# `SandExperimentServiceCore.getComposerTriggerExperimentEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552990-553001](../../../../../../../reference/runtime/host-main.cjs#L552990-L553001) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552990-553001](../../../../../../../reference/runtime/host-main.cjs#L552990-L553001) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:552990

Chamadas escritas diretamente neste corpo: `Object.hasOwn`, `this.getExperiment`, `this.getExperimentGroupName`, `this.hasHydratedStatsigUserId`.

Alvos de atribuição ou incremento: `enabledByTrigger[computed]`.

SHA-256 do trecho: `2a65549a2dcfef23cc180e562fba26d9c1aeda80417e4bdabd9627f133ea412b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
