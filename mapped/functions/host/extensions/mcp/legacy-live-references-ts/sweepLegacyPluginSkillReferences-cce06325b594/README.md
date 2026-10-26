# `sweepLegacyPluginSkillReferences`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/legacy-live-references.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/legacy-live-references-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684791-684817](../../../../../../../reference/runtime/host-main.cjs#L684791-L684817) | `FunctionDeclaration` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684791-684817](../../../../../../../reference/runtime/host-main.cjs#L684791-L684817) | 2 | 0 | 1 | 3 | 0 | 1 |

### host:684791

Chamadas escritas diretamente neste corpo: `collectMaterializedSkillSourceUrls`, `deps.log`, `errorLogTag`, `fetchMarketplaceMcpPlugins`, `getPluginSkillsDir`, `marketplaceDashboardClientFor`, `readPluginSkillsCache`, `removeSkillLiveReferences`.

SHA-256 do trecho: `07c6c7d4901ceb65d192e5089aaa26ecb219c8b24e263623d8dec0de50a9739a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
