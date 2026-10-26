# `readCloudAgentPublishedApps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agent-publish-proposals.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-publish-proposals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:537824-537849](../../../../../../../reference/runtime/host-main.cjs#L537824-L537849) | `FunctionDeclaration` | sim | `client` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537824-537849](../../../../../../../reference/runtime/host-main.cjs#L537824-L537849) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:537824

Chamadas escritas diretamente neste corpo: `apps.map`, `classifyReadFailure`, `client.listApps`, `isPublishNotConfiguredError`, `new ListAppsRequest`.

SHA-256 do trecho: `bb1522eb7765f07cd1e944becb9192aaf17e23056e258fba43a85b72d58f97b2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
