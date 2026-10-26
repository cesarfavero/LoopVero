# `_HeicDimensions.boxes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497330-497352](../../../../../../reference/runtime/host-main.cjs#L497330-L497352) | `method` | não | `view, { start, end }` |
| [evaluation:515028-515050](../../../../../../reference/runtime/sand-eval-runner.cjs#L515028-L515050) | `method` | não | `view, { start, end }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497330-497352](../../../../../../reference/runtime/host-main.cjs#L497330-L497352) | 4 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:515028-515050](../../../../../../reference/runtime/sand-eval-runner.cjs#L515028-L515050) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:497330

Chamadas escritas diretamente neste corpo: `boxes.push`, `fourCharTag`, `view.getUint32`.

Alvos de atribuição ou incremento: `header`, `offset2`, `size`.

SHA-256 do trecho: `d0a265f02f4716d01f007f69d47ad2c88a0eea08b1fd7a84feaf1ca6a689a882`.

### evaluation:515028

Chamadas escritas diretamente neste corpo: `boxes.push`, `fourCharTag`, `view.getUint32`.

Alvos de atribuição ou incremento: `header`, `offset2`, `size`.

SHA-256 do trecho: `d0a265f02f4716d01f007f69d47ad2c88a0eea08b1fd7a84feaf1ca6a689a882`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
