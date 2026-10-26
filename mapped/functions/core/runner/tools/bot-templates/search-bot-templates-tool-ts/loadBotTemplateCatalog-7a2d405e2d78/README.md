# `loadBotTemplateCatalog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770872-770885](../../../../../../../../reference/runtime/host-main.cjs#L770872-L770885) | `FunctionDeclaration` | sim | `ctx, marketplace` |
| [evaluation:569967-569980](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569967-L569980) | `FunctionDeclaration` | sim | `ctx, marketplace` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770872-770885](../../../../../../../../reference/runtime/host-main.cjs#L770872-L770885) | 2 | 0 | 1 | 3 | 1 | 1 |
| [evaluation:569967-569980](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569967-L569980) | 2 | 0 | 1 | 3 | 1 | 1 |

### host:770872

Chamadas escritas diretamente neste corpo: `listBotTemplateUseCases`, `marketplace.listListings`, `mergeBotTemplateCatalogs`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `99d97ae8ba5bcfc36ac220af3b65617c20d106126b5764cc2cfbf59be0214d91`.

### evaluation:569967

Chamadas escritas diretamente neste corpo: `listBotTemplateUseCases`, `marketplace.listListings`, `mergeBotTemplateCatalogs`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `fef1200895189fcdd0f6ed0c65a281fcc54d2096a1514c9107f4d0cddbf1180b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
