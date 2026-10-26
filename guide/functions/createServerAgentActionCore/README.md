# `createServerAgentActionCore`

**Fonte primária:** [host-main.cjs:710798–710832](../../../reference/runtime/host-main.cjs#L710798-L710832).

**Componente:** [gateway](../../components/gateway/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Executar ações por RPC e tratar especialmente o envio cuja primeira tentativa pode ter sido aceita sem a resposta chegar.

## Entrada e saída

Recebe cliente `GrokBotService` e getter opcional de timezone. Devolve função assíncrona que recebe request tipado e retorna um outcome normalizado. A tradução detalhada está em `perform`, incluindo `sendGrokBotUserMessage` e `getGrokBotSendStatus`.

## Algoritmo de replay

1. Executar `perform` uma vez.
2. Em erro de ação diferente de envio, apenas classificar.
3. Em envio, verificar `isNonceDedupedSendReplayable`.
4. Consultar status com o mesmo agente, `clientNonce` e sessão opcional.
5. Se o status não for `not-found`, devolver a falha original. Isso inclui `found` e `unknown-durability`.
6. Somente com `not-found`, repetir `perform` com o mesmo request.
7. Classificar falha da consulta ou da repetição.

Não há retry recursivo ilimitado neste core. São, no máximo, a tentativa original e uma repetição após a sondagem apropriada.

## Por que o nonce importa

`perform` transforma `clientNonce` em `messageId`. O servidor reconhece resultados como `DUPLICATE`, mas a implementação da deduplicação no backend não está nesta função. O comportamento confirmado localmente é preservar a identidade e consultar o servidor antes de repetir.

## Erros elegíveis

Para `ConnectError`, o predicate aceita `Unavailable` sem header `retry-after`; erros que não são dessa classe têm regra própria permissiva. Isso não é uma classificação universal de todas as falhas distribuídas. Fonte do predicate: [host-main.cjs:709961–709964](../../../reference/runtime/host-main.cjs#L709961-L709964).
