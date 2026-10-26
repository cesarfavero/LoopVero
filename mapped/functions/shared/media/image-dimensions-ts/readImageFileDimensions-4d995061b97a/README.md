# `readImageFileDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497655-497657](../../../../../../reference/runtime/host-main.cjs#L497655-L497657) | `FunctionDeclaration` | não | `buffer` |
| [evaluation:515275-515277](../../../../../../reference/runtime/sand-eval-runner.cjs#L515275-L515277) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497655-497657](../../../../../../reference/runtime/host-main.cjs#L497655-L497657) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515275-515277](../../../../../../reference/runtime/sand-eval-runner.cjs#L515275-L515277) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497655

Chamadas escritas diretamente neste corpo: `readBmpDimensions`, `readGifDimensions`, `readIcoDimensions`, `readJpegDimensions`, `readPngDimensions`, `readWebpOrHeicDimensions`.

SHA-256 do trecho: `d537680b0b137e8fe08878277cedc27671efe4609974ec31c50cff0d388b451c`.

### evaluation:515275

Chamadas escritas diretamente neste corpo: `readBmpDimensions2`, `readGifDimensions2`, `readIcoDimensions`, `readJpegDimensions2`, `readPngDimensions2`, `readWebpOrHeicDimensions`.

SHA-256 do trecho: `bf6c981345f1bfb002f268d015abb3d153d1ec11374745937118cdc4615305ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
