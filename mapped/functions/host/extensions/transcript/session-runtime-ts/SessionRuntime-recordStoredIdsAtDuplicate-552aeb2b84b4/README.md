# `SessionRuntime.recordStoredIdsAtDuplicate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737968-737973](../../../../../../../reference/runtime/host-main.cjs#L737968-L737973) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737968-737973](../../../../../../../reference/runtime/host-main.cjs#L737968-L737973) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:737968

Chamadas escritas diretamente neste corpo: `session.db.getTranscriptEntryIds`, `setTranscriptStoredIds`, `this.deletedAgentIds.has`, `this.storedIdsByAgentAtDuplicate.set`.

SHA-256 do trecho: `55f097a463b75426222941802e984853e1b27cb3f13d2885ac29410827a77721`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
