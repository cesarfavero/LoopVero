# `runSandAutoReviewFlow`

[Componente: approvals](../../components/approvals/README.md) · [Índice](../../README.md)

**Fonte primária:** [sand-eval-runner.cjs:554715-554806](../../../reference/runtime/sand-eval-runner.cjs#L554715-L554806). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`runSandAutoReviewFlow(args)` retorna permissão com origem (`unreviewed`, `classifier`, `user`) ou recusa com motivo. Recebe alvo, spec, opções, ID de chamada e signal opcional.

## Ordem de decisão

Off permite imediatamente. Shadow inicia classificação sem bloquear e permite; erro do shadow é diagnóstico. Em enforce, verifica cancelamento, regra que exige aprovação e recusa anterior por fingerprint. Classifica somente quando não há bloqueio já conhecido. Verifica cancelamento novamente. Allow permite; resultado não permitido sem controller recusa. Block com controller pede aprovação e confere cancelamento outra vez depois dela.

## Vínculo da aprovação

O fingerprint deriva de `spec.fingerprintPayload(target)`. A solicitação carrega agente, superfície, resumo, motivo, cautela, regras propostas/aplicadas, signal e expiração. Resultado aprovado identifica origem user. Negado mantém motivo. Callback de recusa explícita não é acionada para toda forma de retirement.

## Estado e fronteira remota

`toolDecisions` registra policy e histórico de cards; `autoReviewController` conduz aprovação. O classificador é chamado por um resource accessor e contexto extraído. Seu modelo, treinamento e thresholds não estão implementados nesta função.

## Consequência

O modo efetivo precisa ser conhecido antes de afirmar que uma ação foi revisada. Shadow mede sem impedir; off nem espera classificação. A presença desse código no bundle não prova qual modo estava ativo numa conta real.
