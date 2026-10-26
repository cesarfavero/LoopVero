# `SandExperimentServiceCore.start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552652-552672](../../../../../../../reference/runtime/host-main.cjs#L552652-L552672) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552652-552672](../../../../../../../reference/runtime/host-main.cjs#L552652-L552672) | 1 | 0 | 0 | 0 | 0 | 1 |

### host:552652

Chamadas escritas diretamente neste corpo: `errorLogTag`, `loadCachedBootstrap`, `reportExperimentsDiagnostic`, `this.hydrate`, `this.options.getCacheDir`, `this.refreshPoll.start`, `this.refreshSnapshot`.

Alvos de atribuição ou incremento: `this.flagsFetchedAtMs`, `this.pollHandle`, `this.savedBootstrap`.

SHA-256 do trecho: `27bd86a866c573c08de3e8daffc1360cb4a2649b61e8a70c160fadc4cd5ac960`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
