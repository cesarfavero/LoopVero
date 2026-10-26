# `readBmpDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497513-497525](../../../../../../reference/runtime/host-main.cjs#L497513-L497525) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497513-497525](../../../../../../reference/runtime/host-main.cjs#L497513-L497525) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:497513

Chamadas escritas diretamente neste corpo: `Math.abs`, `String.fromCharCode`, `buffer.subarray`, `dataViewOf`, `toImageDimensions`, `view.getInt32`, `view.getUint16`, `view.getUint32`.

SHA-256 do trecho: `2808302020d4841d06118dff3d4e851a47c8e2d184efae928896faa72a670484`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
