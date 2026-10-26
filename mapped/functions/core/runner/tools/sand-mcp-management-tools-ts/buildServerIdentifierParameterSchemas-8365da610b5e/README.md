# `buildServerIdentifierParameterSchemas`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779643-779678](../../../../../../../reference/runtime/host-main.cjs#L779643-L779678) | `FunctionDeclaration` | não | `mcpMetaToolNames` |
| [evaluation:579881-579916](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579881-L579916) | `FunctionDeclaration` | não | `mcpMetaToolNames` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779643-779678](../../../../../../../reference/runtime/host-main.cjs#L779643-L779678) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579881-579916](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579881-L579916) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779643

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.optional`, `.trim`, `accountLifecycleParameters.extend`, `external_exports2.object`, `external_exports2.string`, `serverIdParameters.extend`.

SHA-256 do trecho: `00df942c742d9edfe0074f122b49a5b982c85036c7c8d4d6b192edf0ee779078`.

### evaluation:579881

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.optional`, `.trim`, `accountLifecycleParameters.extend`, `external_exports3.object`, `external_exports3.string`, `serverIdParameters.extend`.

SHA-256 do trecho: `7c419de5aa6f1ee3c97aa6f7435e20313f609242137690ffad6ad44baf4e42bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
