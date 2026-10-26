# `buildCommunicateTool/serializeError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725241-725257](../../../../../../../reference/runtime/host-main.cjs#L725241-L725257) | `ArrowFunctionExpression` | não | `error64` |
| [evaluation:480212-480228](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480212-L480228) | `ArrowFunctionExpression` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725241-725257](../../../../../../../reference/runtime/host-main.cjs#L725241-L725257) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480212-480228](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480212-L480228) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725241

Chamadas escritas diretamente neste corpo: `buildErrorResult`, `encodeError`, `modelVisibleErrorMessage`, `new CommunicateUpdateToolCall`, `new ToolCall`.

SHA-256 do trecho: `08d38d392547863dadb03347120506ed2c01eb2c94b0224519f8705c6164fcf1`.

### evaluation:480212

Chamadas escritas diretamente neste corpo: `buildErrorResult`, `encodeError`, `modelVisibleErrorMessage`, `new CommunicateUpdateToolCall`, `new ToolCall`.

SHA-256 do trecho: `5af98a82c60f0340e1ccc1616696c11db81ab9b3a46cd2c571c1fe2b3fd0de2a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
