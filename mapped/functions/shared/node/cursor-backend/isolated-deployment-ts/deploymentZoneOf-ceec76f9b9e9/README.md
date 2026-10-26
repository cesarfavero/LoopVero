# `deploymentZoneOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/isolated-deployment.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451573-451577](../../../../../../../reference/runtime/host-main.cjs#L451573-L451577) | `FunctionDeclaration` | não | `backendUrl` |
| [evaluation:597119-597123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597119-L597123) | `FunctionDeclaration` | não | `backendUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451573-451577](../../../../../../../reference/runtime/host-main.cjs#L451573-L451577) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:597119-597123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597119-L597123) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:451573

Chamadas escritas diretamente neste corpo: `.join`, `.slice`, `.split`, `COMMERCIAL_DOMAINS.includes`, `isCommercialHostname`, `normalizedHostname`.

SHA-256 do trecho: `933d57ffe94428c7bac2ef6b80f8c98b7402186921d32a66f466204ce6fa556d`.

### evaluation:597119

Chamadas escritas diretamente neste corpo: `.join`, `.slice`, `.split`, `COMMERCIAL_DOMAINS.includes`, `isCommercialHostname`, `normalizedHostname2`.

SHA-256 do trecho: `19ac87ba2521cd09241671525a9b3720293aca11b4680afd8810ab3323f883cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
