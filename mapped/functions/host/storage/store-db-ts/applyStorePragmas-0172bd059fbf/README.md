# `applyStorePragmas`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/store-db.ts` · [README do módulo](../../../../../modules/host/storage/store-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478857-478868](../../../../../../reference/runtime/host-main.cjs#L478857-L478868) | `FunctionDeclaration` | não | `db, options2` |
| [state-worker:734-745](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L734-L745) | `FunctionDeclaration` | não | `db, options` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478857-478868](../../../../../../reference/runtime/host-main.cjs#L478857-L478868) | 2 | 0 | 0 | 0 | 1 | 1 |
| [state-worker:734-745](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L734-L745) | 2 | 0 | 0 | 0 | 1 | 1 |

### host:478857

Chamadas escritas diretamente neste corpo: `db.exec`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `5bc9fb9bf6dec730b134248a307b0eda2867b26194b6fee1cae859b8b9b87300`.

### state-worker:734

Chamadas escritas diretamente neste corpo: `db.exec`.

Alvos de lançamento explícito: `error`.

SHA-256 do trecho: `4193d56e82bf733332fc677f30eab26c5e33a2da9b23f67f414460490626d909`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
