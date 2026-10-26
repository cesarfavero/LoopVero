# `ConversationBlobStoreDb.adoptLegacyBlobs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-store.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22400-22418](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22400-L22418) | `method` | não | `legacyBlobDbPath, log` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22400-22418](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22400-L22418) | 2 | 0 | 0 | 3 | 0 | 1 |

### state-worker:22400

Chamadas escritas diretamente neste corpo: `.run`, `String`, `log`, `readConversationBlobMigrationState`, `this.db.exec`, `this.db.prepare`.

SHA-256 do trecho: `07457473262d493b8d04c7694482a0d91cddce4523a409ac0fdb835a331959fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
