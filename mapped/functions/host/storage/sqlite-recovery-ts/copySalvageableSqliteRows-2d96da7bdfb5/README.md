# `copySalvageableSqliteRows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-recovery.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717507-717550](../../../../../../reference/runtime/host-main.cjs#L717507-L717550) | `FunctionDeclaration` | não | `source, selectSql, insert, toParams, log5` |
| [state-worker:915-958](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L915-L958) | `FunctionDeclaration` | não | `source, selectSql, insert, toParams, log` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717507-717550](../../../../../../reference/runtime/host-main.cjs#L717507-L717550) | 3 | 1 | 0 | 2 | 0 | 4 |
| [state-worker:915-958](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L915-L958) | 3 | 1 | 0 | 2 | 0 | 4 |

### host:717507

Chamadas escritas diretamente neste corpo: `insert.run`, `isUnknownRecord2`, `iterator.next`, `iterator.return`, `log5`, `pinnedRowIterator`, `source.prepare`, `toParams`.

Alvos de atribuição ou incremento: `copied`, `iterator`, `next`, `skipped2`, `tail`.

SHA-256 do trecho: `f304c25bf631a33c095790df65e7fffe3846a81c17205758be9cdbde93fecf25`.

### state-worker:915

Chamadas escritas diretamente neste corpo: `insert.run`, `isUnknownRecord`, `iterator.next`, `iterator.return`, `log`, `pinnedRowIterator`, `source.prepare`, `toParams`.

Alvos de atribuição ou incremento: `copied`, `iterator`, `next`, `skipped`, `tail`.

SHA-256 do trecho: `e89661dba84c4f4b655b6b64398ac667890d84586b2a18884b34bece2474fd06`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
