# `isSqliteIoError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-busy.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-busy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480286-480288](../../../../../../reference/runtime/host-main.cjs#L480286-L480288) | `FunctionDeclaration` | não | `error64` |
| [state-worker:695-697](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L695-L697) | `FunctionDeclaration` | não | `error` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480286-480288](../../../../../../reference/runtime/host-main.cjs#L480286-L480288) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:695-697](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L695-L697) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:480286

Chamadas escritas diretamente neste corpo: `sqlitePrimaryCode`.

SHA-256 do trecho: `520f516b23a80e4c675f2d2923c0a4f0622b334930f7bbc8ed23d64213b241c5`.

### state-worker:695

Chamadas escritas diretamente neste corpo: `sqlitePrimaryCode`.

SHA-256 do trecho: `c76d1460c0980f17eb0a201fa316b99c6b71def6244314d1ead86fa8deb415a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
