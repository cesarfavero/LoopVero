# `requireGettingStartedSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/bot-templates/bot-template-recipe.ts` · [README do módulo](../../../../../modules/shared/bot-templates/bot-template-recipe-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494725-494734](../../../../../../reference/runtime/host-main.cjs#L494725-L494734) | `FunctionDeclaration` | não | `template, ctx` |
| [evaluation:570232-570241](../../../../../../reference/runtime/sand-eval-runner.cjs#L570232-L570241) | `FunctionDeclaration` | não | `template, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494725-494734](../../../../../../reference/runtime/host-main.cjs#L494725-L494734) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:570232-570241](../../../../../../reference/runtime/sand-eval-runner.cjs#L570232-L570241) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:494725

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `template.skills.some`.

SHA-256 do trecho: `7f157dcc33edfc733f202cd95a6f104989d192a2bb221349e19d86c4c4cb91b8`.

### evaluation:570232

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `template.skills.some`.

SHA-256 do trecho: `d26e6169219fb73de5e5b587c4da2b853987853cec449f548fc0c1275e21068b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
