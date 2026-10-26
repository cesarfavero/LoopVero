# `parseBotTemplateRecipe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/bot-templates/bot-template-recipe.ts` · [README do módulo](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494783-494788](../../../../../../reference/runtime/host-main.cjs#L494783-L494788) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494783-494788](../../../../../../reference/runtime/host-main.cjs#L494783-L494788) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:494783

Chamadas escritas diretamente neste corpo: `.decode`, `JSON.parse`, `botTemplateSchema.parse`, `new BotTemplateRecipeRefused`, `new TextDecoder`.

Alvos de lançamento explícito: `BotTemplateRecipeRefused`.

SHA-256 do trecho: `e132857f54d2941ae9ac2e2c50d82f4706a2ab554010310bb8c6277b954f06ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
