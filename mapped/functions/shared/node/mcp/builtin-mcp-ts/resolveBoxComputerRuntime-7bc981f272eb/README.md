# `resolveBoxComputerRuntime`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/builtin-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/builtin-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451454-451466](../../../../../../../reference/runtime/host-main.cjs#L451454-L451466) | `FunctionDeclaration` | não | `opts, env` |
| [evaluation:597058-597070](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597058-L597070) | `FunctionDeclaration` | não | `opts, env` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451454-451466](../../../../../../../reference/runtime/host-main.cjs#L451454-L451466) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597058-597070](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597058-L597070) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:451454

Chamadas escritas diretamente neste corpo: `env.SAND_BOX_COMPUTER_DOCKER_HOST.trim`, `env.SAND_BOX_COMPUTER_SHARED_CONTAINER.trim`, `hostOverrideRaw.toLowerCase`, `isTruthyFlag`.

SHA-256 do trecho: `1a743616198b3aef31ad88fccf65e61db4723845c9967f10678a12b9e18cf8e4`.

### evaluation:597058

Chamadas escritas diretamente neste corpo: `env.SAND_BOX_COMPUTER_DOCKER_HOST.trim`, `env.SAND_BOX_COMPUTER_SHARED_CONTAINER.trim`, `hostOverrideRaw.toLowerCase`, `isTruthyFlag`.

SHA-256 do trecho: `1a743616198b3aef31ad88fccf65e61db4723845c9967f10678a12b9e18cf8e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
