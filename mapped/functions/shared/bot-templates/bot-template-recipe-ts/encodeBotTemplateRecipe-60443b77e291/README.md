# `encodeBotTemplateRecipe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/bot-templates/bot-template-recipe.ts` · [README do módulo](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494780-494782](../../../../../../reference/runtime/host-main.cjs#L494780-L494782) | `FunctionDeclaration` | não | `template` |
| [evaluation:570287-570289](../../../../../../reference/runtime/sand-eval-runner.cjs#L570287-L570289) | `FunctionDeclaration` | não | `template` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494780-494782](../../../../../../reference/runtime/host-main.cjs#L494780-L494782) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570287-570289](../../../../../../reference/runtime/sand-eval-runner.cjs#L570287-L570289) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494780

Chamadas escritas diretamente neste corpo: `.encode`, `Uint8Array.from`, `botTemplateRecipeJson`, `new TextEncoder`.

SHA-256 do trecho: `305a56b1b2c6a6ddcf857eca9283a1f491e9fdcbd0def556285dca5337899e2d`.

### evaluation:570287

Chamadas escritas diretamente neste corpo: `.encode`, `Uint8Array.from`, `botTemplateRecipeJson`, `new TextEncoder`.

SHA-256 do trecho: `305a56b1b2c6a6ddcf857eca9283a1f491e9fdcbd0def556285dca5337899e2d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
