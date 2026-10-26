# `TranscriptEntryPublisher.publishAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784044-784082](../../../../../../../reference/runtime/host-main.cjs#L784044-L784082) | `method` | sim | `agentId, state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784044-784082](../../../../../../../reference/runtime/host-main.cjs#L784044-L784082) | 4 | 0 | 1 | 4 | 0 | 1 |

### host:784044

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedErrorTag`, `brandedOrInvalidId`, `errorLogTag`, `logFields`, `performance.now`, `removeSandDataFileSync`, `this.deps.isTemporalAgent`, `this.ledgerPath`, `this.ledgers.delete`, `this.publishAgentInner`, `this.redirtyUnlessClearSuperseded`, `this.report`, `triggerOf`.

Alvos de atribuição ou incremento: `outcome`.

SHA-256 do trecho: `62f08a4cc99b20ccf3dd30d820978fc1d6fe4c15ea96b74d2a21f901558f2cf0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
