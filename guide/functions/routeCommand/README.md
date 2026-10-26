# `routeCommand`

**Fonte primária:** [host-main.cjs:493530–493579](../../../reference/runtime/host-main.cjs#L493530-L493579).

**Componente:** [gateway](../../components/gateway/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Despachar um método HTTP já reconhecido pelo roteador para a API do gateway, validar o nome, registrar tracing e devolver JSON.

## Contrato

Recebe API, `method`, corpo, response/request HTTP e callbacks de telemetria. Nome fora do catálogo retorna 404 com `GATEWAY_UNKNOWN_METHOD_FAILURE_CODE`. Para nome válido, calcula preferência de avatar, request ID e trace, então delega a `runGatewayCommand`.

O helper `runGatewayCommand`, em [host-main.cjs:489960–489966](../../../reference/runtime/host-main.cjs#L489960-L489966), chama `parseGatewayCommandBody` e só depois o handler. Pode envolver a API com compactação de avatar quando o cliente solicita esse formato.

## Passos

1. Validar nome de método.
2. Criar span e medir início.
3. Executar o handler com argumentos validados.
4. Encerrar span no `finally`, inclusive em erro.
5. Relatar erros classificados de servidor, preservando o erro original se a própria telemetria falhar.
6. Relatar conclusão e devolver JSON, com política de gzip específica.

## Limites

Autenticação, rejeição de origem e seleção da rota acontecem em `handleRequest`, antes desta função. `routeCommand` não deve ser tratada isoladamente como fronteira completa de autorização. O método chamado pode ser o wrapper remoto e, portanto, fazer RPC em outro serviço.
