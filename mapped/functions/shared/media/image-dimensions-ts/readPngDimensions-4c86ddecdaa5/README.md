# `readPngDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497493-497503](../../../../../../reference/runtime/host-main.cjs#L497493-L497503) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497493-497503](../../../../../../reference/runtime/host-main.cjs#L497493-L497503) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:497493

Chamadas escritas diretamente neste corpo: `PNG_SIGNATURE.every`, `dataViewOf`, `fourCharTag`, `toImageDimensions`, `view.getUint32`.

SHA-256 do trecho: `c4307fc7adcd4dda72fc22896f217ccbe43bd557d519edd6cb0531e362eb7e1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
