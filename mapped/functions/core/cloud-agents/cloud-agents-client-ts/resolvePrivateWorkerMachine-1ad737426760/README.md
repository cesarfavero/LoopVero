# `resolvePrivateWorkerMachine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512790-512818](../../../../../../reference/runtime/host-main.cjs#L512790-L512818) | `FunctionDeclaration` | sim | `client, environment` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512790-512818](../../../../../../reference/runtime/host-main.cjs#L512790-L512818) | 5 | 0 | 1 | 2 | 3 | 0 |

### host:512790

Chamadas escritas diretamente neste corpo: `ambiguousWorkersNote`, `cloudAgentWorkerNameLabel`, `connectedWorkersNote`, `environment.name.trim`, `listConnectedPrivateWorkers`, `new SandCloudAgentLaunchError`, `resolveCloudAgentMachineTarget`.

Alvos de lançamento explícito: `SandCloudAgentLaunchError`.

SHA-256 do trecho: `37a842cbed6abc3414a16732d91d054187377ed51271d39ffa9a0d65f50900df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
