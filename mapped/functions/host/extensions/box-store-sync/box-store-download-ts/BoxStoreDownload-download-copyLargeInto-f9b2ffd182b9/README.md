# `BoxStoreDownload.download/copyLargeInto`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478060-478093](../../../../../../../reference/runtime/host-main.cjs#L478060-L478093) | `ArrowFunctionExpression` | sim | `parent, sourcePath2, group, relPath, destPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478060-478093](../../../../../../../reference/runtime/host-main.cjs#L478060-L478093) | 2 | 0 | 7 | 3 | 0 | 1 |

### host:478060

Chamadas escritas diretamente neste corpo: `boxStoreRestoreTempName`, `copyFileHashing`, `copyInFailureOf`, `entryOf`, `errorMessage`, `installVerifiedTemp`, `openBelow`, `recordFailure`, `reportProgress`, `segmentsBelow`, `source.handle.close`, `this.discardTemp`, `this.hasDiskSpaceForLargeObject`.

Alvos de atribuição ou incremento: `bytes`, `copied`, `files`, `verified`.

SHA-256 do trecho: `f886599bef763d2ab3928552dd510a2b9dd6a5727b071348ec29d9aa2317ee63`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
