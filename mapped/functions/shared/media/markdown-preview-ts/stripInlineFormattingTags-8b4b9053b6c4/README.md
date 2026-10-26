# `stripInlineFormattingTags`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722055-722093](../../../../../../reference/runtime/host-main.cjs#L722055-L722093) | `FunctionDeclaration` | não | `input2` |
| [evaluation:540032-540070](../../../../../../reference/runtime/sand-eval-runner.cjs#L540032-L540070) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722055-722093](../../../../../../reference/runtime/host-main.cjs#L722055-L722093) | 8 | 2 | 0 | 3 | 0 | 0 |
| [evaluation:540032-540070](../../../../../../reference/runtime/sand-eval-runner.cjs#L540032-L540070) | 8 | 2 | 0 | 3 | 0 | 0 |

### host:722055

Chamadas escritas diretamente neste corpo: `INLINE_FORMATTING_TAGS.has`, `VOID_INLINE_FORMATTING_TAGS.has`, `codeSpanRanges`, `fencedBlockRanges`, `input2.includes`, `input2.matchAll`, `input2.slice`, `insideRanges`, `match2[computed].toLowerCase`, `openTags.at`, `openTags.pop`, `openTags.push`, `removals.push`, `removals.sort`.

Alvos de atribuição ou incremento: `cursor`, `output2`.

SHA-256 do trecho: `b9be229692e50e1b9bdc36a7b770da035f0a18982cae31462da4755f93c9d839`.

### evaluation:540032

Chamadas escritas diretamente neste corpo: `INLINE_FORMATTING_TAGS.has`, `VOID_INLINE_FORMATTING_TAGS.has`, `codeSpanRanges`, `fencedBlockRanges`, `input2.includes`, `input2.matchAll`, `input2.slice`, `insideRanges`, `match2[computed].toLowerCase`, `openTags.at`, `openTags.pop`, `openTags.push`, `removals.push`, `removals.sort`.

Alvos de atribuição ou incremento: `cursor`, `output2`.

SHA-256 do trecho: `b9be229692e50e1b9bdc36a7b770da035f0a18982cae31462da4755f93c9d839`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
