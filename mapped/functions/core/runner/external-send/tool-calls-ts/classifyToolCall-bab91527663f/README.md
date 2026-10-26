# `classifyToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/tool-calls.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:539051-539053](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539051-L539053) | `FunctionDeclaration` | não | `toolName, args, resolveHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539051-539053](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539051-L539053) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539051

Chamadas escritas diretamente neste corpo: `MCP_INVOCATION_TOOL_NAMES.has`, `classifyMcpInvocation`, `classifyProviderKeyedTool`.

SHA-256 do trecho: `02d9b8e9debdbee27dc8a23ccc1043f1dbe1093c249a3305d007763659ca1257`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
