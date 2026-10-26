# `TranscriptEntryPublisher.saveLedger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784104-784107](../../../../../../../reference/runtime/host-main.cjs#L784104-L784107) | `method` | sim | `agentId, ledger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784104-784107](../../../../../../../reference/runtime/host-main.cjs#L784104-L784107) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:784104

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `this.ledgerPath`, `this.ledgers.set`, `writeSandDataFile`.

SHA-256 do trecho: `a191c434ea6b40d22e8057a4d1d2b2fbf3a9c97e5cd7813d99fe380964d1dbbc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
