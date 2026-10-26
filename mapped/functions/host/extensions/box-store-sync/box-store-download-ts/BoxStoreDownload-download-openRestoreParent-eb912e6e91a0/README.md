# `BoxStoreDownload.download/openRestoreParent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477695-477715](../../../../../../../reference/runtime/host-main.cjs#L477695-L477715) | `ArrowFunctionExpression` | sim | `dir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477695-477715](../../../../../../../reference/runtime/host-main.cjs#L477695-L477715) | 3 | 1 | 5 | 1 | 2 | 1 |

### host:477695

Chamadas escritas diretamente neste corpo: `directory.handle.close`, `handCreatedDirectory`, `new SandBoxStoreSyncError`, `openOrCreateRestoreDirectory`, `openRestoreRoot`, `relDir.split`, `relDir.startsWith`.

Alvos de atribuição ou incremento: `directory`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`, `error64`.

SHA-256 do trecho: `103cf00eb42e5249522237ea7dae71de168c78dbd32a6ca235517119951758cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
