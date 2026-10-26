# `SandCloudAgentManager.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538306-538335](../../../../../../../reference/runtime/host-main.cjs#L538306-L538335) | `method` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538306-538335](../../../../../../../reference/runtime/host-main.cjs#L538306-L538335) | 4 | 0 | 0 | 0 | 0 | 0 |

### host:538306

Chamadas escritas diretamente neste corpo: `createCloudAgentsClient`, `new CloudAgentArtifactCache`, `new CloudAgentCompletionPoller`, `new CloudAgentModelCatalogCache`, `new CloudAgentUpdatesStream`, `originUrlsOf`.

Alvos de atribuição ou incremento: `this.artifacts`, `this.backend`, `this.completionPoller`, `this.modelCatalog`, `this.options`, `this.originUrls`, `this.updatesStream`.

SHA-256 do trecho: `1baa20e17122f96a6d2a4fef65399ac71d1bb72752e1fee65d8a9b55df5c1d84`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
