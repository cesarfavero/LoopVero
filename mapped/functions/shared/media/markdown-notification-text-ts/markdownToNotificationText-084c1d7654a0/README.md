# `markdownToNotificationText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-notification-text.ts` · [README do módulo](../../../../../modules/shared/media/markdown-notification-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722185-722195](../../../../../../reference/runtime/host-main.cjs#L722185-L722195) | `FunctionDeclaration` | não | `markdown, maxChars = SOURCE_MAX_CHARS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722185-722195](../../../../../../reference/runtime/host-main.cjs#L722185-L722195) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:722185

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `boundedPreviewSource`, `codeRuns`, `escapeRuns`, `flattenMarkup`, `flattenMathSpans`, `maskRuns`, `stripInlineFormattingTags`.

SHA-256 do trecho: `b642188b5423688ffa8a92ef7fa6f1e6e008ff5b0c977e3fb32aa3e6b7df326f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
