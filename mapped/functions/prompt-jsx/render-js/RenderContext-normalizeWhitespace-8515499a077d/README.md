# `RenderContext.normalizeWhitespace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629531-629538](../../../../../reference/runtime/host-main.cjs#L629531-L629538) | `method` | não | `text3` |
| [evaluation:318548-318555](../../../../../reference/runtime/sand-eval-runner.cjs#L318548-L318555) | `method` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629531-629538](../../../../../reference/runtime/host-main.cjs#L629531-L629538) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:318548-318555](../../../../../reference/runtime/sand-eval-runner.cjs#L318548-L318555) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:629531

Chamadas escritas diretamente neste corpo: `.trim`, `text3.charCodeAt`, `text3.replace`, `text3.slice`.

Alvos de atribuição ou incremento: `newlineEnd`.

SHA-256 do trecho: `e79ac8e2d46e0be83124c7ff28c3d7a224371fef6a863adebf6d7871cbefc20d`.

### evaluation:318548

Chamadas escritas diretamente neste corpo: `.trim`, `text3.charCodeAt`, `text3.replace`, `text3.slice`.

Alvos de atribuição ou incremento: `newlineEnd`.

SHA-256 do trecho: `e79ac8e2d46e0be83124c7ff28c3d7a224371fef6a863adebf6d7871cbefc20d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
