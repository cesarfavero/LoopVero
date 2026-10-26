# `_SandAgentRunner.constructor/observeMcpCallSettled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593304-593318](../../../../../../reference/runtime/sand-eval-runner.cjs#L593304-L593318) | `ArrowFunctionExpression` | não | `_ctx, settlement` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593304-593318](../../../../../../reference/runtime/sand-eval-runner.cjs#L593304-L593318) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:593304

Chamadas escritas diretamente neste corpo: `boundedMcpToolName`, `mcpToolCallTarget`, `this.gates.driveTranslatorToolTags`, `this.observation.observeMcpCallSettled`.

SHA-256 do trecho: `1d256f4c0ed8baeff8d406ed00409f97bad3629a1da0fac2b2b0f0a8cd7f39dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
