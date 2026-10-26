# `clearStaleCheckpointRootsOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-maintenance.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-maintenance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720161-720211](../../../../../../../reference/runtime/host-main.cjs#L720161-L720211) | `FunctionDeclaration` | sim | `host, dbPath, db, agentStore` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720161-720211](../../../../../../../reference/runtime/host-main.cjs#L720161-L720211) | 6 | 0 | 1 | 6 | 0 | 1 |

### host:720161

Chamadas escritas diretamente neste corpo: `.clearStaleCheckpointRoots`, `agentIdFromDbPath`, `agentStore.getConversationStateStructure`, `db.get`, `db.getStaleRootCleanupVersion`, `db.setStaleRootCleanupVersion`, `defer2`, `errorLogTag`, `getSandAgentDbWriteGeneration`, `host.reportHostLog`, `host.requireWorkerPool`, `liveDbHandleCount`, `reportSessionDiagnostic`, `toHex3`.

SHA-256 do trecho: `be9db9af4e5af8c727ec7a4dd0e323e9666eed3f610800f69ec87f79156d9bbf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
