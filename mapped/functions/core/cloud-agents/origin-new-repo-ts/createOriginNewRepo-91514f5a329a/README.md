# `createOriginNewRepo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-new-repo.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-new-repo-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513811-513849](../../../../../../reference/runtime/host-main.cjs#L513811-L513849) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513811-513849](../../../../../../reference/runtime/host-main.cjs#L513811-L513849) | 6 | 0 | 2 | 1 | 3 | 0 |

### host:513811

Chamadas escritas diretamente neste corpo: `.catch`, `args.callOptions`, `args.canProvisionUserNamespace`, `args.client.createRepoAndEnsureUserNamespace`, `args.client.getAuthorizedNamespaces`, `new CreateRepoRequest`, `new GetAuthorizedNamespacesRequest`, `new SandCloudAgentLaunchError`, `originGetStartedUrl`, `pickOriginNewRepoNamespace`, `response.repository.defaultBranch.trim`, `response.repository.identifier.name.trim`, `response.repository.identifier.org.trim`.

Alvos de lançamento explícito: `SandCloudAgentLaunchError`.

SHA-256 do trecho: `68fcedfe07e80fee4c4325a4075f8caed5ecb6045d39c5fadcf35d1c01b99001`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
