# `BoxStoreDownload.download/copyLargeToPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478041-478059](../../../../../../../reference/runtime/host-main.cjs#L478041-L478059) | `ArrowFunctionExpression` | sim | `sourcePath2, group, relPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478041-478059](../../../../../../../reference/runtime/host-main.cjs#L478041-L478059) | 1 | 0 | 3 | 2 | 0 | 1 |

### host:478041

Chamadas escritas diretamente neste corpo: `copyInFailureOf`, `copyLargeInto`, `destinationPaths.get`, `errorMessage`, `openRestoreParent`, `parent.handle.close`, `recordFailure`.

Alvos de atribuição ou incremento: `parent`.

SHA-256 do trecho: `52e6739f41d2edf4ae8e62016206bde9b547779091b8fa19469944ed8b0f7d7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
