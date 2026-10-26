# `quarantineCorruptSqliteDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-recovery.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717382-717440](../../../../../../reference/runtime/host-main.cjs#L717382-L717440) | `FunctionDeclaration` | não | `options2` |
| [state-worker:790-848](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L790-L848) | `FunctionDeclaration` | não | `options` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717382-717440](../../../../../../reference/runtime/host-main.cjs#L717382-L717440) | 4 | 2 | 0 | 3 | 0 | 5 |
| [state-worker:790-848](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L790-L848) | 4 | 2 | 0 | 3 | 0 | 5 |

### host:717382

Chamadas escritas diretamente neste corpo: `.replace`, `.toISOString`, `copySandDataFileSync`, `new Date`, `removeSandDataFileSync`, `removeSqliteDb`, `removeSqliteSidecars`.

Alvos de atribuição ou incremento: `copied`.

SHA-256 do trecho: `7c94b53b685a783fbd2937d787b7e8962424d2fa37049161ffb397d27a82faa9`.

### state-worker:790

Chamadas escritas diretamente neste corpo: `.replace`, `.toISOString`, `copySandDataFileSync`, `new Date`, `removeSandDataFileSync`, `removeSqliteDb`, `removeSqliteSidecars`.

Alvos de atribuição ou incremento: `copied`.

SHA-256 do trecho: `9ed29c33606a01d0dc3a3f89a280cbbd3b91570b4620ebcca23bfe6bebab063f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
