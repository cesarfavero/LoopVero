# `tileRenditionSize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/image-preview-rendition.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498386-498391](../../../../../../../reference/runtime/host-main.cjs#L498386-L498391) | `FunctionDeclaration` | não | `sourcePath2, sourceDimensions, tile` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498386-498391](../../../../../../../reference/runtime/host-main.cjs#L498386-L498391) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:498386

Chamadas escritas diretamente neste corpo: `PREVIEW_SOURCE_EXTENSIONS.has`, `extensionOf`, `fitShortEdge`, `tileRenditionEdge`.

SHA-256 do trecho: `4508f52eafdef44c9506d33b777e58f8ac05d882b4558b9e8b990fe65c31b0b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
