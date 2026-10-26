# `TranscriptEntryPublisher.applyMutation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783888-783915](../../../../../../../reference/runtime/host-main.cjs#L783888-L783915) | `method` | não | `mutation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783888-783915](../../../../../../../reference/runtime/host-main.cjs#L783888-L783915) | 6 | 1 | 0 | 5 | 0 | 0 |

### host:783888

Chamadas escritas diretamente neste corpo: `.deletedSeqs.set`, `state.deletedSeqs.clear`, `state.entryIds.add`, `state.entryIds.clear`, `this.dirtyFor`, `this.ledgers.delete`.

Alvos de atribuição ou incremento: `.removed`, `.resweep`, `state.cleared`.

SHA-256 do trecho: `57bb1ca279af94376ec71745971064733562fa54d94612d4bb066a3f6d5aa4d0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
