# `getSandRootDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430906-430915](../../../../../reference/runtime/host-main.cjs#L430906-L430915) | `FunctionDeclaration` | não | `homeDir = (0, import_node_os.homedir)()` |
| [evaluation:530498-530507](../../../../../reference/runtime/sand-eval-runner.cjs#L530498-L530507) | `FunctionDeclaration` | não | `homeDir = (0, import_node_os8.homedir)()` |
| [state-worker:417-426](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L417-L426) | `FunctionDeclaration` | não | `homeDir = (0, import_node_os.homedir)()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430906-430915](../../../../../reference/runtime/host-main.cjs#L430906-L430915) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:530498-530507](../../../../../reference/runtime/sand-eval-runner.cjs#L530498-L530507) | 3 | 0 | 0 | 3 | 0 | 0 |
| [state-worker:417-426](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L417-L426) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:430906

Chamadas escritas diretamente neste corpo: `getSandProductionRootDir`, `getSandVariant`, `resolveSandDataRootOverride`, `resolveSandUserDataDir`.

SHA-256 do trecho: `f799b4744901836ce67d0543078ed47999fd368afd181f82632572c0c090b98b`.

### evaluation:530498

Chamadas escritas diretamente neste corpo: `getSandProductionRootDir`, `getSandVariant`, `resolveSandDataRootOverride`, `resolveSandUserDataDir`.

SHA-256 do trecho: `6877eb9366304e1c96e66deb34966f68be68a4e954378fbb6f73ac9bc68f7bd9`.

### state-worker:417

Chamadas escritas diretamente neste corpo: `getSandProductionRootDir`, `getSandVariant`, `resolveSandDataRootOverride`, `resolveSandUserDataDir`.

SHA-256 do trecho: `b9a41f2b57232962c0c8a09542d77342a21d91a7ab6a7f1155306f0e2f59ae6a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
