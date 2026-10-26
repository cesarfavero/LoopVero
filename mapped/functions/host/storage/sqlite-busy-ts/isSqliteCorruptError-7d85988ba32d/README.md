# `isSqliteCorruptError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-busy.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-busy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480292-480295](../../../../../../reference/runtime/host-main.cjs#L480292-L480295) | `FunctionDeclaration` | não | `error64` |
| [state-worker:701-704](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L701-L704) | `FunctionDeclaration` | não | `error` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480292-480295](../../../../../../reference/runtime/host-main.cjs#L480292-L480295) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:701-704](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L701-L704) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:480292

Chamadas escritas diretamente neste corpo: `sqlitePrimaryCode`.

SHA-256 do trecho: `f4f23e7690767b9ea1201aa9525d774351256e7f3282d914ffe0991deab77d57`.

### state-worker:701

Chamadas escritas diretamente neste corpo: `sqlitePrimaryCode`.

SHA-256 do trecho: `ff5b4b0551942bc42edab7834a6527ed7ffe3ffb286b47807c8a20e0acadba39`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
