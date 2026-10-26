# `runConversationGc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/conversation-size-limits.ts` · [README do módulo](../../../../../../modules/host/extensions/session/conversation-size-limits-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719381-719391](../../../../../../../reference/runtime/host-main.cjs#L719381-L719391) | `FunctionDeclaration` | sim | `host, dbPath, db` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719381-719391](../../../../../../../reference/runtime/host-main.cjs#L719381-L719391) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:719381

Chamadas escritas diretamente neste corpo: `.collectConversationGarbage`, `agentIdFromDbPath`, `blobDbPathFor`, `db.get`, `host.requireWorkerPool`, `toHex3`.

SHA-256 do trecho: `3dd412263ee2360976d17bf06a9ac173fe28d667f4a199c2ebc36cb26db4a5b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
