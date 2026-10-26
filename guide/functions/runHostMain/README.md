# `runHostMain`

**Fonte primária:** [host-main.cjs:786935–787050](../../../reference/runtime/host-main.cjs#L786935-L787050).

**Componente:** [bootstrap](../../components/bootstrap/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Transformar o processo Node no Sand Host: exclusão por lock, ambiente, extensões, gateway e anúncio de prontidão. Não é a função que escolhe tarefas proativas nem o loop de inferência.

## Entrada e saída

Usa argumentos e ambiente do processo. O modo auxiliar `--box-copy-in` termina antes do servidor. No caminho normal, resolve após iniciar host, gateway e descoberta; listeners continuam mantendo o processo. Falha fatal relata e sai com código 1.

## Algoritmo

1. Tratar o modo de cópia com resultado fail-closed.
2. Instalar crash guards e adquirir o lock do diretório do host.
3. Ler `SandHostEnvironment`, construir `SandHost` e conectar reportadores.
4. Chamar `host.start` com hook `beforeResumeOwnership`.
5. No hook, resolver config e abrir gateway com API final, autenticação, TLS e pontes.
6. Instalar shutdown handlers antes de liberar o hook.
7. Aguardar startup, escrever descoberta e disparar relatório `box ready`.
8. Se houver erro, escrever marcador com o estágio, fazer flush, liberar lock e encerrar.

## Ordem que importa

A API do gateway depende das extensões já inicializadas. Por outro lado, retomada de ownership só acontece depois do hook do gateway. Alterar essa ordem pode anunciar posse antes de existir transporte para aceitar conexões. Essa consequência decorre da sequência observada, não de um teste de deployment.

## Estado e falhas

`stage` distingue `host_start`, `gateway` e `discovery` no marcador fatal. `gatewayStarted` leva o servidor e sua config do hook ao trecho final. O lock é liberado no erro e no encerramento normal. A relação entre esse processo e a infraestrutura remota original ainda depende de composição externa.
