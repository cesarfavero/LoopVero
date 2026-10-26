# `SandExperimentServiceCore.waitForHydratedStatsigUserId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552968-552989](../../../../../../../reference/runtime/host-main.cjs#L552968-L552989) | `method` | sim | `timeoutMs = 6e4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552968-552989](../../../../../../../reference/runtime/host-main.cjs#L552968-L552989) | 3 | 0 | 1 | 3 | 1 | 1 |

### host:552968

Chamadas escritas diretamente neste corpo: `createDeadlinePolicy`, `deadline.run`, `new Promise`, `this.hasHydratedStatsigUserId`.

Alvos de atribuição ou incremento: `this.hydratedUserIdReady`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `0c91b9fc96eb246341a04290984fa2d59e4fe9b5be307f6a69ca1f53c10c69a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
