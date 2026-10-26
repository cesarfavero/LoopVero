# `AgentWorkerConnection.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715137-715165](../../../../../../reference/runtime/host-main.cjs#L715137-L715165) | `method` | não | `workerEntryPath, boot, onExit, reportHostLog` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715137-715165](../../../../../../reference/runtime/host-main.cjs#L715137-L715165) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:715137

Chamadas escritas diretamente neste corpo: `forwardStream`, `new import_node_worker_threads3.Worker`, `this.worker.on`.

Alvos de atribuição ou incremento: `this.onExit`, `this.worker`.

SHA-256 do trecho: `06def730300c537b6815b9ca598dd56cdd13668c0886f375309bec17510636b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
