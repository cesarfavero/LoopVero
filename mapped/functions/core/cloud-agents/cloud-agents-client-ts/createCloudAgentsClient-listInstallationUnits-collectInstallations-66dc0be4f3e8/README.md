# `createCloudAgentsClient/listInstallationUnits/collectInstallations`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513337-513358](../../../../../../reference/runtime/host-main.cjs#L513337-L513358) | `FunctionDeclaration` | sim | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513337-513358](../../../../../../reference/runtime/host-main.cjs#L513337-L513358) | 3 | 1 | 1 | 1 | 0 | 1 |

### host:513337

Chamadas escritas diretamente neste corpo: `accessDenied.push`, `connected2.add`, `dashboard.getGithubInstallations`, `inlineUnits.push`, `installationsRequest`, `pagedUnits.push`, `unreachable3.add`.

SHA-256 do trecho: `8276ad31f19702f3c4e8bcdc67e32f732cc36a483962d61e6a8a48a9cd1bf5dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
