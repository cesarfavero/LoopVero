# `createCloudAgentsClient/listArtifacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513256-513258](../../../../../../reference/runtime/host-main.cjs#L513256-L513258) | `FunctionDeclaration` | sim | `bcId, callOptions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513256-513258](../../../../../../reference/runtime/host-main.cjs#L513256-L513258) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:513256

Chamadas escritas diretamente neste corpo: `client`, `listCloudAgentArtifactRefs`.

SHA-256 do trecho: `31dc7f3f72361400aecfbc1defd8cad12e2464e3794d56169a70f6cb24447c71`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
