# `_HeicDimensions.read`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497308-497318](../../../../../../reference/runtime/host-main.cjs#L497308-L497318) | `method` | não | `buffer` |
| [evaluation:515006-515016](../../../../../../reference/runtime/sand-eval-runner.cjs#L515006-L515016) | `method` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497308-497318](../../../../../../reference/runtime/host-main.cjs#L497308-L497318) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:515006-515016](../../../../../../reference/runtime/sand-eval-runner.cjs#L515006-L515016) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:497308

Chamadas escritas diretamente neste corpo: `_HeicDimensions.primaryOf`, `dataViewOf`, `toImageDimensions`, `view.getUint32`.

SHA-256 do trecho: `f6c9102a9cb6644085227dd1f29419b1f1a2bd41b3ffc3ab98f02f3d3cc9b01e`.

### evaluation:515006

Chamadas escritas diretamente neste corpo: `_HeicDimensions.primaryOf`, `dataViewOf`, `toImageDimensions`, `view.getUint32`.

SHA-256 do trecho: `f6c9102a9cb6644085227dd1f29419b1f1a2bd41b3ffc3ab98f02f3d3cc9b01e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
