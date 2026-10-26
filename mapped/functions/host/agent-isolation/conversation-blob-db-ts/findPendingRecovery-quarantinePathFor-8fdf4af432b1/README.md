# `findPendingRecovery/quarantinePathFor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-db.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:1369-1374](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1369-L1374) | `ArrowFunctionExpression` | não | `name` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1369-1374](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1369-L1374) | 2 | 0 | 0 | 2 | 0 | 0 |

### state-worker:1369

Chamadas escritas diretamente neste corpo: `markerPath.slice`, `name.endsWith`.

SHA-256 do trecho: `7c4df0c82cda23c06019458066314c2e35e93ff0f664ef6d280bf73a3746c0d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
