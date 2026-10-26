# `capPreviewLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722143-722146](../../../../../../reference/runtime/host-main.cjs#L722143-L722146) | `FunctionDeclaration` | não | `line, maxChars = PREVIEW_LINE_MAX_CHARS` |
| [evaluation:540120-540123](../../../../../../reference/runtime/sand-eval-runner.cjs#L540120-L540123) | `FunctionDeclaration` | não | `line, maxChars = PREVIEW_LINE_MAX_CHARS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722143-722146](../../../../../../reference/runtime/host-main.cjs#L722143-L722146) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540120-540123](../../../../../../reference/runtime/sand-eval-runner.cjs#L540120-L540123) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:722143

Chamadas escritas diretamente neste corpo: `.trimEnd`, `boundedPrefix`.

SHA-256 do trecho: `7098e7b510556ef0d06f16178339fe510ddbcc17548c25fb477e40bc3d0c0f12`.

### evaluation:540120

Chamadas escritas diretamente neste corpo: `.trimEnd`, `boundedPrefix`.

SHA-256 do trecho: `7098e7b510556ef0d06f16178339fe510ddbcc17548c25fb477e40bc3d0c0f12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
