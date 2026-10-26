# `findPendingRecovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-db.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:1355-1396](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1355-L1396) | `FunctionDeclaration` | não | `dbPath, recovery` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1355-1396](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1355-L1396) | 5 | 2 | 0 | 2 | 0 | 0 |

### state-worker:1355

Chamadas escritas diretamente neste corpo: `.sort`, `markerNames.at`, `markerNames.slice`, `name.endsWith`, `name.startsWith`, `names.filter`, `names.includes`, `quarantinePathFor`, `recovery.removeSqliteDb`, `removeSandDataFileSync`.

SHA-256 do trecho: `79e72454a0c544446937f009ed4bf37d86cb2ae609a1062d1f5a2ef997e53d9a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
