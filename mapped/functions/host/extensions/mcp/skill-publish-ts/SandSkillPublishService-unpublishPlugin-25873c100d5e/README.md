# `SandSkillPublishService.unpublishPlugin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702216-702228](../../../../../../../reference/runtime/host-main.cjs#L702216-L702228) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702216-702228](../../../../../../../reference/runtime/host-main.cjs#L702216-L702228) | 0 | 1 | 3 | 1 | 0 | 0 |

### host:702216

Chamadas escritas diretamente neste corpo: `BigInt`, `new UnpublishPluginRequest`, `this.options.client.unpublishPlugin`, `this.ownPluginRecords`, `this.restoreToLibrary`, `this.syncBestEffort`.

Alvos de atribuição ou incremento: `restoredWorkflowId`.

SHA-256 do trecho: `40b53a41a78c5bccfc08251f978bb1b7722568a1a6ccb64e43737e516f3685a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
