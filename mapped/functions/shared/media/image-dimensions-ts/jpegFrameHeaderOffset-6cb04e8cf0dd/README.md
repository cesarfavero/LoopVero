# `jpegFrameHeaderOffset`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497544-497570](../../../../../../reference/runtime/host-main.cjs#L497544-L497570) | `FunctionDeclaration` | não | `buffer` |
| [evaluation:515239-515265](../../../../../../reference/runtime/sand-eval-runner.cjs#L515239-L515265) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497544-497570](../../../../../../reference/runtime/host-main.cjs#L497544-L497570) | 7 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:515239-515265](../../../../../../reference/runtime/sand-eval-runner.cjs#L515239-L515265) | 7 | 1 | 0 | 5 | 0 | 0 |

### host:497544

Chamadas escritas diretamente neste corpo: `JPEG_NON_FRAME_MARKERS.has`, `JPEG_SEGMENTLESS_MARKERS.has`, `dataViewOf`, `view.getUint16`, `view.getUint8`.

Alvos de atribuição ou incremento: `offset2`.

SHA-256 do trecho: `09189b17b940054a6c7d264032c0589a784a20081b80d3589dd653c969e75176`.

### evaluation:515239

Chamadas escritas diretamente neste corpo: `JPEG_NON_FRAME_MARKERS.has`, `JPEG_SEGMENTLESS_MARKERS.has`, `dataViewOf`, `view.getUint16`, `view.getUint8`.

Alvos de atribuição ou incremento: `offset2`.

SHA-256 do trecho: `09189b17b940054a6c7d264032c0589a784a20081b80d3589dd653c969e75176`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
