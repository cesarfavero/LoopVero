# `AgentWorkerPool.stopSweep`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715502-715506](../../../../../../reference/runtime/host-main.cjs#L715502-L715506) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715502-715506](../../../../../../reference/runtime/host-main.cjs#L715502-L715506) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:715502

Chamadas escritas diretamente neste corpo: `clearInterval`.

Alvos de atribuição ou incremento: `this.sweepTimer`.

SHA-256 do trecho: `b8ba4e5ddc7f3ba201e587ece799eb700d199c33d0ec62dc26da373823122b68`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
