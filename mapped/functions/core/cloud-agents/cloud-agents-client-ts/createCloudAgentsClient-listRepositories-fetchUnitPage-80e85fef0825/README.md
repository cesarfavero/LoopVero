# `createCloudAgentsClient/listRepositories/fetchUnitPage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513434-513453](../../../../../../reference/runtime/host-main.cjs#L513434-L513453) | `FunctionDeclaration` | sim | `unit, page` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513434-513453](../../../../../../reference/runtime/host-main.cjs#L513434-L513453) | 3 | 0 | 1 | 3 | 0 | 1 |

### host:513434

Chamadas escritas diretamente neste corpo: `dashboard.getInstallationRepos`, `new GetInstallationReposRequest`.

SHA-256 do trecho: `54457dc055fd25466628140adadb123ee30f8738cc6e7b486b9601980f6257f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
