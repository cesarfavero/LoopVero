# `describePluginSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779805-779821](../../../../../../../reference/runtime/host-main.cjs#L779805-L779821) | `FunctionDeclaration` | não | `plugin, installed` |
| [evaluation:580043-580059](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580043-L580059) | `FunctionDeclaration` | não | `plugin, installed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779805-779821](../../../../../../../reference/runtime/host-main.cjs#L779805-L779821) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580043-580059](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580043-L580059) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:779805

Chamadas escritas diretamente neste corpo: `.join`, `describePluginIncludes`, `describePluginInstallState`, `describePluginSignIn`, `getDefaultMcpCustomInstruction`, `parts.join`, `parts.push`.

SHA-256 do trecho: `e236c5d0940c485ae1c522486ab9bd7b3440e07482e44109b80770c1605dff6f`.

### evaluation:580043

Chamadas escritas diretamente neste corpo: `.join`, `describePluginIncludes`, `describePluginInstallState`, `describePluginSignIn`, `getDefaultMcpCustomInstruction`, `parts.join`, `parts.push`.

SHA-256 do trecho: `e236c5d0940c485ae1c522486ab9bd7b3440e07482e44109b80770c1605dff6f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
