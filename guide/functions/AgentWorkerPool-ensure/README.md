# `AgentWorkerPool.ensure`

**Fonte primária:** [host-main.cjs:715316–715345](../../../reference/runtime/host-main.cjs#L715316-L715345).

**Componente:** [isolation](../../components/isolation/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Contrato

Recebe `agentId`, `blobDbPath` e caminho legado opcional. Devolve conexão com a thread responsável pelo DB de blobs.

## Algoritmo

1. Se já há conexão por `blobDbPath`, retorná-la.
2. Executar `evictForCapacity`.
3. Montar dados de boot com agente, DB, timeout e legado.
4. Criar `AgentWorkerConnection` com callback de saída protegido por identidade.
5. Instalar no mapa antes de aguardar inicialização.
6. Iniciar sweep e aguardar `connection.init`.
7. Relatar identificação de thread/PID e retornar.

## Concorrência

A conexão é instalada antes do `await init`, permitindo reaproveitamento durante inicialização. Requests da thread usam IDs de correlação. Operações públicas que chamam `ensure` devem reter o caminho e liberar no `finally` para evitar eviction enquanto trabalham.

## Capacidade

O default configurado é 64, mas a eviction pula caminhos retidos. Se todos estão retidos, `evictForCapacity` retorna sem remover e `ensure` ainda cria a nova conexão. Portanto o número é uma meta de capacidade do pool, não um teto absoluto demonstrado para toda situação. Fonte: [host-main.cjs:715477–715497](../../../reference/runtime/host-main.cjs#L715477-L715497).

## Limite de isolamento

Usa `worker_threads.Worker`, compartilhando o processo Node. O protocolo isola operações de armazenamento em outra thread; não implementa por si só limites de filesystem, rede, credenciais ou recursos de uma VM.
