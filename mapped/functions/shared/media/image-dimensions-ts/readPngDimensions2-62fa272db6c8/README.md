# `readPngDimensions2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:515188-515198](../../../../../../reference/runtime/sand-eval-runner.cjs#L515188-L515198) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515188-515198](../../../../../../reference/runtime/sand-eval-runner.cjs#L515188-L515198) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:515188

Chamadas escritas diretamente neste corpo: `PNG_SIGNATURE2.every`, `dataViewOf`, `fourCharTag`, `toImageDimensions`, `view.getUint32`.

SHA-256 do trecho: `b62ee0fabbebf5e071f81acabcf14bee54cfe46a1c6161832b8e456a26ac32d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
