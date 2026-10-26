# `TranscriptEntryPublisher.loadLedger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784093-784103](../../../../../../../reference/runtime/host-main.cjs#L784093-L784103) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784093-784103](../../../../../../../reference/runtime/host-main.cjs#L784093-L784103) | 3 | 0 | 0 | 3 | 1 | 0 |

### host:784093

Chamadas escritas diretamente neste corpo: `parseLedger`, `readSandDataFileIfPresentSync`, `this.ledgerPath`, `this.ledgers.get`.

Alvos de lançamento explícito: `ledger`.

SHA-256 do trecho: `51108f1493932f61cfa7ddfe1af795d1be801e3380be5e688660eb45f64ca1da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
