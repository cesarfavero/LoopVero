# `runCodeFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700059-700075](../../../../../../reference/runtime/host-main.cjs#L700059-L700075) | `FunctionDeclaration` | não | `text3` |
| [evaluation:513837-513853](../../../../../../reference/runtime/sand-eval-runner.cjs#L513837-L513853) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700059-700075](../../../../../../reference/runtime/host-main.cjs#L700059-L700075) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:513837-513853](../../../../../../reference/runtime/sand-eval-runner.cjs#L513837-L513853) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:700059

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `JSON.parse`, `failure3.data.stdio.filter`, `runCodeFailureSchema.safeParse`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `2596c78553f023df4b6f0978e7c8f6041a0e735c427a0b640add8a0771312e3c`.

### evaluation:513837

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `JSON.parse`, `failure3.data.stdio.filter`, `runCodeFailureSchema.safeParse`.

Alvos de atribuição ou incremento: `parsed`.

SHA-256 do trecho: `9250cf6e80d416eb143aeea7da4622b7c01dc81dd503cbce0fb36fc91d7c6893`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
