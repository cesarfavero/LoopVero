# `fitRenditionSize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/image-preview-rendition.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498392-498397](../../../../../../../reference/runtime/host-main.cjs#L498392-L498397) | `FunctionDeclaration` | não | `sourcePath2, sourceDimensions, fit` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498392-498397](../../../../../../../reference/runtime/host-main.cjs#L498392-L498397) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:498392

Chamadas escritas diretamente neste corpo: `PREVIEW_SOURCE_EXTENSIONS.has`, `extensionOf`, `fitEncodingOf`, `fitLongEdge`, `fitRenditionEdge`.

SHA-256 do trecho: `f55f9e2a2505dfc9cf099e060b862415d793e1a3cc6299d0facb5bbee2c899c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
