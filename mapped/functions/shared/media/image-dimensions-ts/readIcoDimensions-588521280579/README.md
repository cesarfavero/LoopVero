# `readIcoDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497527-497543](../../../../../../reference/runtime/host-main.cjs#L497527-L497543) | `FunctionDeclaration` | não | `buffer` |
| [evaluation:515222-515238](../../../../../../reference/runtime/sand-eval-runner.cjs#L515222-L515238) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497527-497543](../../../../../../reference/runtime/host-main.cjs#L497527-L497543) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:515222-515238](../../../../../../reference/runtime/sand-eval-runner.cjs#L515222-L515238) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:497527

Chamadas escritas diretamente neste corpo: `.reduce`, `Array.from`, `buffer.subarray`, `dataViewOf`, `readPngDimensions`, `toImageDimensions`, `view.getUint16`, `view.getUint32`.

SHA-256 do trecho: `98b0e20582ff572e6d54b90eb7fd65b6f5f9840699b285eb11ec8b657da47f4f`.

### evaluation:515222

Chamadas escritas diretamente neste corpo: `.reduce`, `Array.from`, `buffer.subarray`, `dataViewOf`, `readPngDimensions2`, `toImageDimensions`, `view.getUint16`, `view.getUint32`.

SHA-256 do trecho: `f47b2e02f79d53d4c24a20abe7beaa159af2acc5b0c3a6ef8cb199311fa711b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
