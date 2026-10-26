# `AgentWorkerPool.collectConversationGarbage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715396-715410](../../../../../../reference/runtime/host-main.cjs#L715396-L715410) | `method` | sim | `{     agentId,     blobDbPath,     retainedRootIdHex,     pendingWriteRetentionMs,     legacyBlobDbPath   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715396-715410](../../../../../../reference/runtime/host-main.cjs#L715396-L715410) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:715396

Chamadas escritas diretamente neste corpo: `connection.collectGarbage`, `this.ensure`, `this.release`, `this.retain`.

SHA-256 do trecho: `30a65bd5686b82db787baf7b5b83e3b80c495cd69fa76b461e404fe0ce3b71c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
