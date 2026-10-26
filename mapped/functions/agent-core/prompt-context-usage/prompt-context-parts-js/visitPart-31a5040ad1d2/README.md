# `visitPart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476369-476384](../../../../../../reference/runtime/host-main.cjs#L476369-L476384) | `FunctionDeclaration` | não | `scope, value, categoryId, ranges, tagName2` |
| [evaluation:255679-255694](../../../../../../reference/runtime/sand-eval-runner.cjs#L255679-L255694) | `FunctionDeclaration` | não | `scope, value, categoryId, ranges, tagName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476369-476384](../../../../../../reference/runtime/host-main.cjs#L476369-L476384) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255679-255694](../../../../../../reference/runtime/sand-eval-runner.cjs#L255679-L255694) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:476369

Chamadas escritas diretamente neste corpo: `scope.visit`.

SHA-256 do trecho: `4333339753417ad61f63a5416391faefbcd01ba88c71245dbd1b829d76dd12e8`.

### evaluation:255679

Chamadas escritas diretamente neste corpo: `scope.visit`.

SHA-256 do trecho: `6853aa3d0a970124b6431ee1866f4020995d07457d9305244bf7f36e8ab796ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
