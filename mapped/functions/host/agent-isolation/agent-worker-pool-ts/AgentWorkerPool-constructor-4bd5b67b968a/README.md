# `AgentWorkerPool.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715300-715307](../../../../../../reference/runtime/host-main.cjs#L715300-L715307) | `method` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715300-715307](../../../../../../reference/runtime/host-main.cjs#L715300-L715307) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:715300

Chamadas escritas diretamente neste corpo: `defaultWorkerEntryPath2`.

Alvos de atribuição ou incremento: `this.busyTimeoutMs`, `this.idleTimeoutMs`, `this.maxWorkers`, `this.options`, `this.sweepIntervalMs`, `this.workerEntryPath`.

SHA-256 do trecho: `6a00c39326dce6cf744c812965f30bf31bb5d3d5e935a22c144c7a5da725af56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
