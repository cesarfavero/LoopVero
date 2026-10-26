# `FileAutomationStore.finishRunWith`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720749-720782](../../../../../../reference/runtime/host-main.cjs#L720749-L720782) | `method` | não | `{     id,     runId,     status,     at: at3,     detail,     errorKind,     requestId: requestId2,     deriveNextRunAt   }` |
| [evaluation:628100-628133](../../../../../../reference/runtime/sand-eval-runner.cjs#L628100-L628133) | `method` | não | `{     id,     runId,     status,     at: at3,     detail,     errorKind,     requestId,     deriveNextRunAt   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720749-720782](../../../../../../reference/runtime/host-main.cjs#L720749-L720782) | 7 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:628100-628133](../../../../../../reference/runtime/sand-eval-runner.cjs#L628100-L628133) | 7 | 0 | 0 | 4 | 0 | 0 |

### host:720749

Chamadas escritas diretamente neste corpo: `clampRunDetail`, `isSafeFolderId`, `requestId2.trim`, `runs.findIndex`, `this.readConfig`, `this.readRuns`, `this.toRecord`, `this.writeRuns`.

Alvos de atribuição ou incremento: `nextRuns[computed]`.

SHA-256 do trecho: `dec961844c3b0b147a37b031b9af07744fe6ea34cedd7f990b477efc6441c36d`.

### evaluation:628100

Chamadas escritas diretamente neste corpo: `clampRunDetail`, `isSafeFolderId`, `requestId.trim`, `runs.findIndex`, `this.readConfig`, `this.readRuns`, `this.toRecord`, `this.writeRuns`.

Alvos de atribuição ou incremento: `nextRuns[computed]`.

SHA-256 do trecho: `ad4b384804497d64faeb1b53146d37b424f70cfb9668f10f24109bf1d81b290e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
