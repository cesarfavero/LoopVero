# `TranscriptEntryPublisher.publishAgentInner`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784108-784261](../../../../../../../reference/runtime/host-main.cjs#L784108-L784261) | `method` | sim | `agentId, state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784108-784261](../../../../../../../reference/runtime/host-main.cjs#L784108-L784261) | 15 | 6 | 7 | 3 | 0 | 0 |

### host:784108

Chamadas escritas diretamente neste corpo: `.filter`, `.get`, `.map`, `.sort`, `Buffer.from`, `Math.floor`, `Math.max`, `Math.min`, `batch.push`, `byIdStatement.get`, `checkSandDataDatabaseSync`, `collect`, `createProcessKeepAlive`, `db.close`, `db.exec`, `db.prepare`, `deletedSeqs.slice`, `elapsedMs`, `new Map`, `new import_node_sqlite6.DatabaseSync`, `page.at`, `pageStatement.all`, `readHold.dispose`, `refuseSandDataDatabaseLinksSync`, `rows.values`, `sha256Hex`, `state.deletedSeqs.has`, `state.deletedSeqs.set`, `this.clock.monotonicNow`, `this.deps.putBlob`, `this.loadLedger`, `this.readBoundary.settled`, `this.saveLedger`, `this.sendCommit`.

Alvos de atribuição ou incremento: `afterSeq`, `batchBytes`, `committedCount`, `deletedCount`, `ledger`, `maxSeq`, `minRow`, `pageChars`, `pageRows`, `readHold`, `resweep`, `sliceStartedAt`, `start`, `state.cleared`, `state.resweep`, `writerSeq`.

SHA-256 do trecho: `b42967aae0d4db4dc1a897722c204bc77baaa52f2bd03592018ebd26cc091a2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
