# `AgentWorkerConnection.send/<callback>/reject`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715194-715197](../../../../../../reference/runtime/host-main.cjs#L715194-L715197) | `ArrowFunctionExpression` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715194-715197](../../../../../../reference/runtime/host-main.cjs#L715194-L715197) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:715194

Chamadas escritas diretamente neste corpo: `Date.now`, `reject2`.

Alvos de atribuição ou incremento: `this.lastActivityAt`.

SHA-256 do trecho: `9a5682937285950075bc96451598c4fbd1a83238ff4b9f790b43bbf0820fa6d1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
