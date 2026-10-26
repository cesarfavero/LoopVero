# `boundedPreviewSource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722140-722142](../../../../../../reference/runtime/host-main.cjs#L722140-L722142) | `FunctionDeclaration` | não | `text3, maxChars = PREVIEW_SOURCE_MAX_CHARS` |
| [evaluation:540117-540119](../../../../../../reference/runtime/sand-eval-runner.cjs#L540117-L540119) | `FunctionDeclaration` | não | `text3, maxChars = PREVIEW_SOURCE_MAX_CHARS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722140-722142](../../../../../../reference/runtime/host-main.cjs#L722140-L722142) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540117-540119](../../../../../../reference/runtime/sand-eval-runner.cjs#L540117-L540119) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:722140

Chamadas escritas diretamente neste corpo: `boundedPrefix`.

SHA-256 do trecho: `f21dd3ea797671a7d014081935b37c1cacc212c22f53cb79dfcf902b177b0c29`.

### evaluation:540117

Chamadas escritas diretamente neste corpo: `boundedPrefix`.

SHA-256 do trecho: `f21dd3ea797671a7d014081935b37c1cacc212c22f53cb79dfcf902b177b0c29`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
