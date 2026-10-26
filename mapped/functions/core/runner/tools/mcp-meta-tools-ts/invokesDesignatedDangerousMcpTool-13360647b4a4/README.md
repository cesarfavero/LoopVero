# `invokesDesignatedDangerousMcpTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554163-554176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554163-L554176) | `FunctionDeclaration` | não | `rawArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554163-554176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554163-L554176) | 2 | 0 | 0 | 2 | 0 | 1 |

### evaluation:554163

Chamadas escritas diretamente neste corpo: `.replaceAll`, `.toLowerCase`, `DESIGNATED_DANGEROUS_MCP_TOOL_NAMES.has`, `JSON.parse`, `MCP_INVOCATION_TOOL_NAMES2.has`, `invoked.trim`, `invokedToolNameOf`.

Alvos de atribuição ou incremento: `invoked`, `parsed`.

SHA-256 do trecho: `c51a1d805e7f82aba8149979e85f4f26d413ddf875faa912ba593d0760b46fb9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
