# `previewRenditionSize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/image-preview-rendition.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498381-498385](../../../../../../../reference/runtime/host-main.cjs#L498381-L498385) | `FunctionDeclaration` | não | `sourcePath2, sourceDimensions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498381-498385](../../../../../../../reference/runtime/host-main.cjs#L498381-L498385) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:498381

Chamadas escritas diretamente neste corpo: `PREVIEW_SOURCE_EXTENSIONS.has`, `extensionOf`, `fitLongEdge`.

SHA-256 do trecho: `5ab55b5a97e5a9aa5ea34154f889fea7600db270ff5a081e33db2238c7f61868`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
