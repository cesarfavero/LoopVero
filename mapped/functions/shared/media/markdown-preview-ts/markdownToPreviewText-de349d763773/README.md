# `markdownToPreviewText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722123-722129](../../../../../../reference/runtime/host-main.cjs#L722123-L722129) | `FunctionDeclaration` | não | `input2` |
| [evaluation:540100-540106](../../../../../../reference/runtime/sand-eval-runner.cjs#L540100-L540106) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722123-722129](../../../../../../reference/runtime/host-main.cjs#L722123-L722129) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540100-540106](../../../../../../reference/runtime/sand-eval-runner.cjs#L540100-L540106) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722123

Chamadas escritas diretamente neste corpo: `.trim`, `PREVIEW_TRANSFORMS.reduce`, `flattenMathSpans`, `flattened.replace`, `stripInlineFormattingTags`.

SHA-256 do trecho: `dd31c97977d7f80c73c92eb39db80d8121b4670f207c18d43dfd7b477fcbff29`.

### evaluation:540100

Chamadas escritas diretamente neste corpo: `.trim`, `PREVIEW_TRANSFORMS.reduce`, `flattenMathSpans`, `flattened.replace`, `stripInlineFormattingTags`.

SHA-256 do trecho: `dd31c97977d7f80c73c92eb39db80d8121b4670f207c18d43dfd7b477fcbff29`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
