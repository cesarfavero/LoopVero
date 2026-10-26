# `describePluginServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779854-779866](../../../../../../../reference/runtime/host-main.cjs#L779854-L779866) | `FunctionDeclaration` | não | `detail, statuses` |
| [evaluation:580092-580104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580092-L580104) | `FunctionDeclaration` | não | `detail, statuses` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779854-779866](../../../../../../../reference/runtime/host-main.cjs#L779854-L779866) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580092-580104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580092-L580104) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:779854

Chamadas escritas diretamente neste corpo: `.join`, `detail.servers.map`.

SHA-256 do trecho: `4f4e0a162e5a120177b6f054ec654e4bf9d5334161e18a2015158dc25b6acc52`.

### evaluation:580092

Chamadas escritas diretamente neste corpo: `.join`, `detail.servers.map`.

SHA-256 do trecho: `4f4e0a162e5a120177b6f054ec654e4bf9d5334161e18a2015158dc25b6acc52`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
