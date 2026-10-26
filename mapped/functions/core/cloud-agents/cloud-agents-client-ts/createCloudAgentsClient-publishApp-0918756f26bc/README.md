# `createCloudAgentsClient/publishApp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513237-513252](../../../../../../reference/runtime/host-main.cjs#L513237-L513252) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513237-513252](../../../../../../reference/runtime/host-main.cjs#L513237-L513252) | 2 | 0 | 1 | 1 | 2 | 0 |

### host:513237

Chamadas escritas diretamente neste corpo: `appPublish.proposeAgentPublish`, `deps.getAppPublishClient`, `new Error`, `new ProposeAgentPublishRequest`, `publishAppDecisionOf`, `toSandCloudAgentPublishProposal`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `c131b2070b3e9bc4e7ae9eae8d003c8eaadd078ca8aadeac6d616bf7c79cd67f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
