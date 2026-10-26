# `createSandFrozenPromptTools/bind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt-tools.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586308-586318](../../../../../../reference/runtime/sand-eval-runner.cjs#L586308-L586318) | `FunctionExpression` | não | `tools, rowPromptDate` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586308-586318](../../../../../../reference/runtime/sand-eval-runner.cjs#L586308-L586318) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:586308

Chamadas escritas diretamente neste corpo: `frozenPrompt.tools.flatMap`, `new Set`, `tools.flatMap`, `tools.map`.

Alvos de atribuição ou incremento: `binding`.

SHA-256 do trecho: `744327233f8c3be9b19c3b8a8e06a6bff8b58fc64f053a583a87acabc8bdcb5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
