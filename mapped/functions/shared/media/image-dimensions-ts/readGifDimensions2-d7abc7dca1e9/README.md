# `readGifDimensions2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:515199-515207](../../../../../../reference/runtime/sand-eval-runner.cjs#L515199-L515207) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515199-515207](../../../../../../reference/runtime/sand-eval-runner.cjs#L515199-L515207) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:515199

Chamadas escritas diretamente neste corpo: `String.fromCharCode`, `buffer.subarray`, `dataViewOf`, `toImageDimensions`, `view.getUint16`.

SHA-256 do trecho: `e8cca20bd42ecdde6c7c4be2dc502fc1d186f8e78a3d2bde440967b614b7ab5b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
