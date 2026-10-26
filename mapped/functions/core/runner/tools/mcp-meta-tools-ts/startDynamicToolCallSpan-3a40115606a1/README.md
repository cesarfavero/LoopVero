# `startDynamicToolCallSpan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761850-761863](../../../../../../../reference/runtime/host-main.cjs#L761850-L761863) | `FunctionDeclaration` | não | `ctx, toolName` |
| [evaluation:554124-554137](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554124-L554137) | `FunctionDeclaration` | não | `ctx, toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761850-761863](../../../../../../../reference/runtime/host-main.cjs#L761850-L761863) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554124-554137](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554124-L554137) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:761850

Chamadas escritas diretamente neste corpo: `createSpan`, `ctx.withName`, `disposable.span.setAttribute`, `getSpan2`.

SHA-256 do trecho: `3f8bcf383dd8ef6b88e565f3a192fd6057e3ed5717a27aad9ae69327afc4aa5e`.

### evaluation:554124

Chamadas escritas diretamente neste corpo: `createSpan`, `ctx.withName`, `disposable.span.setAttribute`, `getSpan2`.

SHA-256 do trecho: `3f8bcf383dd8ef6b88e565f3a192fd6057e3ed5717a27aad9ae69327afc4aa5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
