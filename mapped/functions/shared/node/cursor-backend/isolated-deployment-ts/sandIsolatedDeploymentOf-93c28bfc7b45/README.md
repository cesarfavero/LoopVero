# `sandIsolatedDeploymentOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/isolated-deployment.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451596-451625](../../../../../../../reference/runtime/host-main.cjs#L451596-L451625) | `FunctionDeclaration` | não | `env` |
| [evaluation:597142-597171](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597142-L597171) | `FunctionDeclaration` | não | `env` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451596-451625](../../../../../../../reference/runtime/host-main.cjs#L451596-L451625) | 3 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:597142-597171](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597142-L597171) | 3 | 0 | 0 | 2 | 2 | 0 |

### host:451596

Chamadas escritas diretamente neste corpo: `deploymentZoneOf`, `httpUrlOf`, `new IsolatedDeploymentConfigError`, `reachableOriginsOf`.

Alvos de lançamento explícito: `IsolatedDeploymentConfigError`.

SHA-256 do trecho: `fc6616b209440ca0f516a50ee38f154c43170992e2fb080bd422717cab47e31d`.

### evaluation:597142

Chamadas escritas diretamente neste corpo: `deploymentZoneOf`, `httpUrlOf`, `new IsolatedDeploymentConfigError`, `reachableOriginsOf`.

Alvos de lançamento explícito: `IsolatedDeploymentConfigError`.

SHA-256 do trecho: `c9181fd159283be6d51b1db681b6f82c1c34a517f608b8d98d2450a581c8a2f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
