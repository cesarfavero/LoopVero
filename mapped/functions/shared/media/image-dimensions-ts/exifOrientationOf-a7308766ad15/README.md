# `exifOrientationOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497587-497605](../../../../../../reference/runtime/host-main.cjs#L497587-L497605) | `FunctionDeclaration` | não | `view, tiffStart, tiffEnd` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497587-497605](../../../../../../reference/runtime/host-main.cjs#L497587-L497605) | 7 | 1 | 0 | 7 | 0 | 0 |

### host:497587

Chamadas escritas diretamente neste corpo: `view.getUint16`, `view.getUint32`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `87d0f26c06a688d426ac07c9f5872fd6f1d01338c1617453b6f13420191bb950`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
