# `SessionRuntime.appendEntry`

**Fonte primária:** [host-main.cjs:737907–737944](../../../reference/runtime/host-main.cjs#L737907-L737944).

**Componente:** [transcripts](../../components/transcripts/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Contrato

Recebe entrada bruta e opções, produz `{outcome, entry}`. Normaliza timestamp e usa a sessão ativa. É um fluxo de persistência local, diferente de receber frames do servidor.

## Ordem

1. Normalizar entrada com `withTimestampMs`.
2. Tentar `session.db.appendTranscriptEntry`.
3. Se não houver sessão ou outcome diferente de `inserted`, registrar aviso e retornar.
4. Em duplicação, registrar IDs armazenados para diagnóstico.
5. Inserir na cópia de transcript em memória.
6. Emitir evento `appended`, salvo `deferEmit`.
7. Para entradas que contam como atividade do usuário, atualizar atividade e unread conforme regras e foco.

## Garantia visível

O evento não é publicado antes de uma inserção local aceita pelo DB. Uma entrada duplicada não é adicionada de novo à cópia em memória por este caminho. A definição concreta de durabilidade e constraints depende do store, não é inferida apenas pelo retorno `inserted`.

## Foco e unread

`markActiveSessionArrival` marca atividade. Quando alguma superfície está focada, marca vista preservando unread manual. Sem foco, pede atualização do roster. Foco é por superfície; não se resume a uma flag global sem origem.

## Limites

A função não executa inferência, não fecha tasks e não extrai memória semântica. A presença de um registro no transcript demonstra um evento de escrita, não a execução bem-sucedida de toda ação descrita no conteúdo.
