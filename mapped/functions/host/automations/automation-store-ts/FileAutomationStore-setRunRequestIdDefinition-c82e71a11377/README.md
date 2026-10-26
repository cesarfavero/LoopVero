# `FileAutomationStore.setRunRequestIdDefinition`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720703-720718](../../../../../../reference/runtime/host-main.cjs#L720703-L720718) | `method` | não | `{     id,     runId,     requestId: requestId2   }` |
| [evaluation:628054-628069](../../../../../../reference/runtime/sand-eval-runner.cjs#L628054-L628069) | `method` | não | `{     id,     runId,     requestId   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720703-720718](../../../../../../reference/runtime/host-main.cjs#L720703-L720718) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:628054-628069](../../../../../../reference/runtime/sand-eval-runner.cjs#L628054-L628069) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:720703

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `requestId2.trim`, `runs.findIndex`, `this.readConfig`, `this.readRuns`, `this.writeRuns`.

Alvos de atribuição ou incremento: `nextRuns[computed]`.

SHA-256 do trecho: `0474f4f7f61168cd7a5b45e2ce9925298a291a4710a9ceb0341c4f1d4f262191`.

### evaluation:628054

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `requestId.trim`, `runs.findIndex`, `this.readConfig`, `this.readRuns`, `this.writeRuns`.

Alvos de atribuição ou incremento: `nextRuns[computed]`.

SHA-256 do trecho: `a161adc491eb72818bdebb85f71ff2bc5034f8d83d1bcafce87c2c39ea27418a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
