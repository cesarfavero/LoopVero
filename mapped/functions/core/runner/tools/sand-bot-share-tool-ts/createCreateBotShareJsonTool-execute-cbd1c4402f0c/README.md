# `createCreateBotShareJsonTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-bot-share-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-bot-share-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771207-771243](../../../../../../../reference/runtime/host-main.cjs#L771207-L771243) | `ArrowFunctionExpression` | sim | `ctx, recipe, shareDeps` |
| [evaluation:570441-570477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570441-L570477) | `ArrowFunctionExpression` | sim | `ctx, recipe, shareDeps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771207-771243](../../../../../../../reference/runtime/host-main.cjs#L771207-L771243) | 6 | 0 | 2 | 6 | 1 | 1 |
| [evaluation:570441-570477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570441-L570477) | 6 | 0 | 2 | 6 | 1 | 1 |

### host:771207

Chamadas escritas diretamente neste corpo: `botTemplateShareCreateInputFromRecipe`, `botTemplateShareRefusalToolResult`, `botTemplateShareToMessage`, `resolvedToolVisibility`, `shareDeps.emitShare`, `shareDeps.getShareScope`, `shareDeps.getSourceAgentId`, `shareDeps.getSourceAvatar`, `shareDeps.share.create`, `shareDeps.share.getShareScope`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `9f81d5168969688da763888490a959c3830353d2fe598167db104021d2278936`.

### evaluation:570441

Chamadas escritas diretamente neste corpo: `botTemplateShareCreateInputFromRecipe`, `botTemplateShareRefusalToolResult`, `botTemplateShareToMessage`, `resolvedToolVisibility`, `shareDeps.emitShare`, `shareDeps.getShareScope`, `shareDeps.getSourceAgentId`, `shareDeps.getSourceAvatar`, `shareDeps.share.create`, `shareDeps.share.getShareScope`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `abf2e80a870495c3228f352cf10839cf48240598b67c632ad8ab598f5c18d47b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
