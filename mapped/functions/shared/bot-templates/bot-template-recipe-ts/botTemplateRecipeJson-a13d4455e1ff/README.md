# `botTemplateRecipeJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/bot-templates/bot-template-recipe.ts` · [README do módulo](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494777-494779](../../../../../../reference/runtime/host-main.cjs#L494777-L494779) | `FunctionDeclaration` | não | `template` |
| [evaluation:570284-570286](../../../../../../reference/runtime/sand-eval-runner.cjs#L570284-L570286) | `FunctionDeclaration` | não | `template` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494777-494779](../../../../../../reference/runtime/host-main.cjs#L494777-L494779) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570284-570286](../../../../../../reference/runtime/sand-eval-runner.cjs#L570284-L570286) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494777

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `withShippedClientRequiredTitle`.

SHA-256 do trecho: `81c3e5b345bcb3f24ac2f4d8931c703450892fe06492c2d6bc32b1b03c640458`.

### evaluation:570284

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `withShippedClientRequiredTitle`.

SHA-256 do trecho: `81c3e5b345bcb3f24ac2f4d8931c703450892fe06492c2d6bc32b1b03c640458`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
