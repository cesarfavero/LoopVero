# `FeedbackEntries.setFeedbackVote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/feedback-entries.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/feedback-entries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733151-733169](../../../../../../../reference/runtime/host-main.cjs#L733151-L733169) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733151-733169](../../../../../../../reference/runtime/host-main.cjs#L733151-L733169) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:733151

Chamadas escritas diretamente neste corpo: `findEntry`, `this.tm.roster.emit`, `this.tm.sessions.activeSession.db.updateTranscriptEntry`, `this.tm.sessions.ensureActionTarget`, `updateEntry`.

SHA-256 do trecho: `9af278d3f050c6e06fa3c35bd6ec914fcc5e57672795cce4e2513e6a80b887f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
