# `mergeBotTemplateCatalogs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770801-770830](../../../../../../../../reference/runtime/host-main.cjs#L770801-L770830) | `FunctionDeclaration` | não | `starters, marketplace` |
| [evaluation:569896-569925](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569896-L569925) | `FunctionDeclaration` | não | `starters, marketplace` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770801-770830](../../../../../../../../reference/runtime/host-main.cjs#L770801-L770830) | 4 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:569896-569925](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569896-L569925) | 4 | 2 | 0 | 1 | 0 | 0 |

### host:770801

Chamadas escritas diretamente neste corpo: `listing.categories.map`, `merged.push`, `nameKey`, `names3.add`, `names3.has`, `new Set`, `plainMarketplaceText`, `shareIds.add`, `shareIds.has`, `starterNames.has`, `starterShareIds.has`, `starters.map`.

SHA-256 do trecho: `893443f57abcd8c4e28800db65c9541ab3b1b0ebfde1631e5af8665ea4fc95a4`.

### evaluation:569896

Chamadas escritas diretamente neste corpo: `listing.categories.map`, `merged.push`, `nameKey`, `names3.add`, `names3.has`, `new Set`, `plainMarketplaceText`, `shareIds.add`, `shareIds.has`, `starterNames.has`, `starterShareIds.has`, `starters.map`.

SHA-256 do trecho: `893443f57abcd8c4e28800db65c9541ab3b1b0ebfde1631e5af8665ea4fc95a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
