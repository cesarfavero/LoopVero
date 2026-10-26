# `AgentWorkerPool.sweepIdle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715507-715516](../../../../../../reference/runtime/host-main.cjs#L715507-L715516) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715507-715516](../../../../../../reference/runtime/host-main.cjs#L715507-L715516) | 3 | 1 | 0 | 0 | 0 | 0 |

### host:715507

Chamadas escritas diretamente neste corpo: `Date.now`, `connection.activityAt`, `connection.close`, `this.connections.delete`, `this.isRetained`, `this.stopSweep`.

SHA-256 do trecho: `2acf0523474e8b16b2813fad7ec1d0e689f8415f6e605c9d059e7bc98ade46d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
