# `compactHeadAndTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693733-693749](../../../../../../reference/runtime/host-main.cjs#L693733-L693749) | `FunctionDeclaration` | não | `value, maxChars` |
| [evaluation:490969-490985](../../../../../../reference/runtime/sand-eval-runner.cjs#L490969-L490985) | `FunctionDeclaration` | não | `value, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693733-693749](../../../../../../reference/runtime/host-main.cjs#L693733-L693749) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:490969-490985](../../../../../../reference/runtime/sand-eval-runner.cjs#L490969-L490985) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:693733

Chamadas escritas diretamente neste corpo: `.trim`, `Math.ceil`, `Math.floor`, `Math.max`, `normalized.slice`, `value.replace`.

Alvos de atribuição ou incremento: `attempt`, `available`, `omittedChars`, `omittedLabel`.

SHA-256 do trecho: `16f0ad1ce85b91fda535494dea42047cdfa7fa9bd66efb848bf8b08d3dbb36f2`.

### evaluation:490969

Chamadas escritas diretamente neste corpo: `.trim`, `Math.ceil`, `Math.floor`, `Math.max`, `normalized.slice`, `value.replace`.

Alvos de atribuição ou incremento: `attempt`, `available`, `omittedChars`, `omittedLabel`.

SHA-256 do trecho: `16f0ad1ce85b91fda535494dea42047cdfa7fa9bd66efb848bf8b08d3dbb36f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
