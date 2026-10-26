# `searchBotTemplates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770788-770792](../../../../../../../../reference/runtime/host-main.cjs#L770788-L770792) | `FunctionDeclaration` | não | `templates, query2, limit3` |
| [evaluation:569883-569887](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569883-L569887) | `FunctionDeclaration` | não | `templates, query2, limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770788-770792](../../../../../../../../reference/runtime/host-main.cjs#L770788-L770792) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:569883-569887](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569883-L569887) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:770788

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.slice`, `.sort`, `queryTerms`, `templates.map`.

SHA-256 do trecho: `d98b2141a65a43eb8fcf531cc6954096c7d34600b2415d8cf267ed6bbb674c42`.

### evaluation:569883

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.slice`, `.sort`, `queryTerms`, `templates.map`.

SHA-256 do trecho: `d98b2141a65a43eb8fcf531cc6954096c7d34600b2415d8cf267ed6bbb674c42`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
