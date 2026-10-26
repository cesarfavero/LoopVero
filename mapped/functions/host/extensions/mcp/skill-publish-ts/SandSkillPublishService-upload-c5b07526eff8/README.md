# `SandSkillPublishService.upload`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702247-702295](../../../../../../../reference/runtime/host-main.cjs#L702247-L702295) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702247-702295](../../../../../../../reference/runtime/host-main.cjs#L702247-L702295) | 2 | 0 | 7 | 1 | 1 | 1 |

### host:702247

Chamadas escritas diretamente neste corpo: `args.description.trim`, `errorLogTag`, `errorMessage`, `new PublishPluginRequest`, `new SandSkillPublishError`, `new Uint8Array`, `packPluginArtifact`, `readManifestName`, `response.pluginId.toString`, `stageSkillDirForPublish`, `synthesizeSkillPluginDir`, `this.options.client.publishPlugin`, `this.options.log`, `this.options.reportEdgeFailed`.

Alvos de lançamento explícito: `SandSkillPublishError`.

SHA-256 do trecho: `f7f191d20bb190a490612d64a0df699410c71b4b61497b8b618f5879f5623582`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
