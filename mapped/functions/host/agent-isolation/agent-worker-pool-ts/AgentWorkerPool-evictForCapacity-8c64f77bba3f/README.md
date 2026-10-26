# `AgentWorkerPool.evictForCapacity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715478-715494](../../../../../../reference/runtime/host-main.cjs#L715478-L715494) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715478-715494](../../../../../../reference/runtime/host-main.cjs#L715478-L715494) | 5 | 1 | 0 | 3 | 0 | 0 |

### host:715478

Chamadas escritas diretamente neste corpo: `connection.activityAt`, `this.connections.delete`, `this.connections.get`, `this.isRetained`, `victim.close`.

Alvos de atribuição ou incremento: `oldestActivity`, `victimPath`.

SHA-256 do trecho: `ac7867b5908ae06f8d6e108b4ce4208e6a7e210d389515b44fd395c52e8ba6ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
