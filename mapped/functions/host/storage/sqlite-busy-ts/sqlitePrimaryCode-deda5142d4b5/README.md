# `sqlitePrimaryCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-busy.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-busy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480272-480281](../../../../../../reference/runtime/host-main.cjs#L480272-L480281) | `FunctionDeclaration` | não | `error64` |
| [state-worker:685-694](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L685-L694) | `FunctionDeclaration` | não | `error` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480272-480281](../../../../../../reference/runtime/host-main.cjs#L480272-L480281) | 3 | 0 | 0 | 4 | 0 | 0 |
| [state-worker:685-694](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L685-L694) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:480272

Chamadas escritas diretamente neste corpo: `.join`, `Number.isInteger`, `SQLITE_PRIMARY_CODES.get`, `error64.code.split`.

SHA-256 do trecho: `9e7c2243c6ee343092b90bb7e434ecd334edd4f1d785bac6777df8788da51b84`.

### state-worker:685

Chamadas escritas diretamente neste corpo: `.join`, `Number.isInteger`, `SQLITE_PRIMARY_CODES.get`, `error.code.split`.

SHA-256 do trecho: `d20ee8fc88687c8e7da60d3806bd29a01d7db813add84e03a027a8d032c628bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
