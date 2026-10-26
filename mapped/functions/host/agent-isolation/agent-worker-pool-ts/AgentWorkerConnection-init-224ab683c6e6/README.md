# `AgentWorkerConnection.init`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715212-715224](../../../../../../reference/runtime/host-main.cjs#L715212-L715224) | `method` | sim | `boot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715212-715224](../../../../../../reference/runtime/host-main.cjs#L715212-L715224) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:715212

Chamadas escritas diretamente neste corpo: `this.send`.

Alvos de atribuição ou incremento: `this.workerPid`, `this.workerThreadId`.

SHA-256 do trecho: `e8784d4cf7462de20fac1068d97b1d61069582e2184da97d01f9addce639b42e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
