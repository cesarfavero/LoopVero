# `BoxStoreDownload.download/applyOpenFileMetadata`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477728-477749](../../../../../../../reference/runtime/host-main.cjs#L477728-L477749) | `ArrowFunctionExpression` | sim | `target, entry, deferInjectedChown, legacyReplacementMode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477728-477749](../../../../../../../reference/runtime/host-main.cjs#L477728-L477749) | 6 | 0 | 6 | 1 | 1 | 0 |

### host:477728

Chamadas escritas diretamente neste corpo: `handle.chmod`, `handle.chown`, `handle.close`, `handle.stat`, `info2.isFile`, `mayHandOverTo`, `new SandBoxStoreSyncError`, `options2.chown`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`.

SHA-256 do trecho: `fe47c7328ea9250c3ec77b4459f9bcfe6f8d568828b74fbe1f313ad9295b5b30`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
