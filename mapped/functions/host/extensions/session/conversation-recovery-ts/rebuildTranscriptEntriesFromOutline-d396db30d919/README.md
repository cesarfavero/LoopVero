# `rebuildTranscriptEntriesFromOutline`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/conversation-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719893-719938](../../../../../../../reference/runtime/host-main.cjs#L719893-L719938) | `FunctionDeclaration` | não | `outlineTurns, requestIds, itemTimes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719893-719938](../../../../../../../reference/runtime/host-main.cjs#L719893-L719938) | 8 | 2 | 0 | 1 | 0 | 0 |

### host:719893

Chamadas escritas diretamente neste corpo: `entries.push`, `isGroupTurnPromptText`, `isOffRecordMessageId`, `originalOf`, `outlineTurns.entries`, `rebuiltEntryId`.

SHA-256 do trecho: `97c1d97ed8ebc237cc4bea5212bf14c91adf743ad6ec43dc6780c8f5e8fc0f78`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
