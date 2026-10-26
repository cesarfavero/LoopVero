# `AgentWorkerPool.closeStore`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715444-715450](../../../../../../reference/runtime/host-main.cjs#L715444-L715450) | `method` | sim | `blobDbPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715444-715450](../../../../../../reference/runtime/host-main.cjs#L715444-L715450) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:715444

Chamadas escritas diretamente neste corpo: `connection.close`, `this.connections.delete`, `this.connections.get`, `this.stopSweep`.

SHA-256 do trecho: `2ab731be2b39d39f0bf89aaaa70c2dcdf103fa2358e2eeab7958cf3ee789e7a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
