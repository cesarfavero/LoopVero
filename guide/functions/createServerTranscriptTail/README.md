# `createServerTranscriptTail`

**Fonte primária:** [host-main.cjs:712928–713170](../../../reference/runtime/host-main.cjs#L712928-L713170).

**Componente:** [transcripts](../../components/transcripts/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Manter uma réplica de leitura do transcript remoto, processando gerações, cursores, corpos adiados e reconexões. O corpo completo da função continua após o trecho de inicialização citado; os símbolos de estados e defaults estão documentados no componente.

## Estado

Mantém fase de conexão, lifetime abortável, timers de recovery, agente montado e mapa de estados por agente/sessão. Cada estado guarda `generation`, `streamAckUpdatedSeq`, linhas, contador de ordenação, floor/max de seq, pendências de body e retries.

## Concorrência

`withAgent(lockKey, work)` encadeia Promises por chave. Aguarda o predecessor e libera o lock em `finally`; remove a chave somente se ainda for seu holder. Isso preserva ordem local por identidade sem bloquear todo o conjunto de agentes.

## Gerações

`adoptGeneration` aceita inicialização, mantém a atual, rejeita geração antiga não autoritativa e reinicia estado ao mudar a geração. Se já havia linhas, emite limpeza ordenada antes de resetar. `epochOf` compõe boot, geração e eventuais bumps, para distinguir uma réplica de outra.

## Fallback

`fallBack` trabalha com a camada BOX legada. Agentes em `requiredAgents` continuam exigindo servidor; a existência de agentes requeridos impede tratar a queda como simples leitura local equivalente. O acesso `legacyEnabled: false` do proxy não desabilita os agentes Temporal requeridos.

## Erros e recuperação

Há backoff de stream, probing de backend, retry específico de corpos, pausa em reconexão limpa, jitter e watchdog de idle. São mecanismos separados porque um stream saudável pode referenciar um corpo ainda indisponível. Sem execução autorizada, a análise não afirma ausência de perda em cenários reais.
