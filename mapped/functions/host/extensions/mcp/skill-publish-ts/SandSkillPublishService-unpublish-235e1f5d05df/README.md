# `SandSkillPublishService.unpublish`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702203-702212](../../../../../../../reference/runtime/host-main.cjs#L702203-L702212) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702203-702212](../../../../../../../reference/runtime/host-main.cjs#L702203-L702212) | 0 | 0 | 3 | 1 | 0 | 0 |

### host:702203

Chamadas escritas diretamente neste corpo: `BigInt`, `new UnpublishPluginRequest`, `this.options.client.unpublishPlugin`, `this.requirePublishedPluginSkill`, `this.restoreToLibrary`, `this.syncBestEffort`.

SHA-256 do trecho: `825d1fa6e27eafa34f01019b5d351ad31503d526f05208ca50cf84a03e9a8e96`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
