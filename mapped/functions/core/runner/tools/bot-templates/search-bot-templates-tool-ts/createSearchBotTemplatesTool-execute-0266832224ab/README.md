# `createSearchBotTemplatesTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770896-770901](../../../../../../../../reference/runtime/host-main.cjs#L770896-L770901) | `ArrowFunctionExpression` | sim | `ctx, args` |
| [evaluation:569991-569996](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569991-L569996) | `ArrowFunctionExpression` | sim | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770896-770901](../../../../../../../../reference/runtime/host-main.cjs#L770896-L770901) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:569991-569996](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569991-L569996) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:770896

Chamadas escritas diretamente neste corpo: `loadBotTemplateCatalog`, `renderBotTemplateSearch`.

SHA-256 do trecho: `64773a346276978d12a4d1bf57542e45e5e928f076a691d265bad5f98db576e0`.

### evaluation:569991

Chamadas escritas diretamente neste corpo: `loadBotTemplateCatalog`, `renderBotTemplateSearch`.

SHA-256 do trecho: `64773a346276978d12a4d1bf57542e45e5e928f076a691d265bad5f98db576e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
