# `AgentWorkerPool.closeAll`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715451-715456](../../../../../../reference/runtime/host-main.cjs#L715451-L715456) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715451-715456](../../../../../../reference/runtime/host-main.cjs#L715451-L715456) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:715451

Chamadas escritas diretamente neste corpo: `Promise.all`, `all.map`, `this.connections.clear`, `this.connections.values`, `this.stopSweep`.

SHA-256 do trecho: `dff5c6ad922ac2b41c19e1710ee447bf62c0933894c5cec66025f1620609a369`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
