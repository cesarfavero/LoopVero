# `AgentWorkerConnection.collectGarbage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715256-715266](../../../../../../reference/runtime/host-main.cjs#L715256-L715266) | `method` | sim | `retainedRootIdHex, pendingWriteRetentionMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715256-715266](../../../../../../reference/runtime/host-main.cjs#L715256-L715266) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:715256

Chamadas escritas diretamente neste corpo: `this.send`.

SHA-256 do trecho: `219643f359b17e27ab78e05f2a966356e069f9b0f14e7d53d319d16a32d29ab2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
