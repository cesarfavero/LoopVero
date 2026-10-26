# `openSqliteForSalvage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-recovery.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717441-717452](../../../../../../reference/runtime/host-main.cjs#L717441-L717452) | `FunctionDeclaration` | não | `options2` |
| [state-worker:849-860](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L849-L860) | `FunctionDeclaration` | não | `options` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717441-717452](../../../../../../reference/runtime/host-main.cjs#L717441-L717452) | 1 | 0 | 0 | 3 | 0 | 1 |
| [state-worker:849-860](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L849-L860) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:717441

Chamadas escritas diretamente neste corpo: `checkSandDataDatabaseSync`, `db.close`, `openSqliteForSalvageInPlace`, `reportFallback`.

SHA-256 do trecho: `4804df30e1dd67b4c05d0077f874081b577f67f8a6d5b5b4a18e695a1dd2a2a6`.

### state-worker:849

Chamadas escritas diretamente neste corpo: `checkSandDataDatabaseSync`, `db.close`, `openSqliteForSalvageInPlace`, `reportFallback`.

SHA-256 do trecho: `d519173ca856a3ab782039903c8f598ffb5c4324507e6eaf2754233fe7a550a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
