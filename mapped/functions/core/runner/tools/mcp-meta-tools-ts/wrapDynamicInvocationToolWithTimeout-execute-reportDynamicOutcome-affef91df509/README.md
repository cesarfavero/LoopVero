# `wrapDynamicInvocationToolWithTimeout/execute/reportDynamicOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554254-554266](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554254-L554266) | `ArrowFunctionExpression` | não | `outcome, error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554254-554266](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554254-L554266) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554254

Chamadas escritas diretamente neste corpo: `Math.round`, `callSpan.end`, `dynamicToolCallErrorClass`, `observeDynamicToolCall`, `performance.now`.

SHA-256 do trecho: `b952cd2947bb3f0eeed8e3d00c27c3285a34b775f4bd64e65bd9069eeb24cb64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
