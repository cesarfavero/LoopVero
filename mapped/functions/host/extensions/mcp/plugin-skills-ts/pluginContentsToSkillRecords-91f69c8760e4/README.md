# `pluginContentsToSkillRecords`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/plugin-skills.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701697-701732](../../../../../../../reference/runtime/host-main.cjs#L701697-L701732) | `FunctionDeclaration` | não | `plugins, publisherFacts = /* @__PURE__ */ new Map()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701697-701732](../../../../../../../reference/runtime/host-main.cjs#L701697-L701732) | 5 | 3 | 0 | 1 | 0 | 0 |

### host:701697

Chamadas escritas diretamente neste corpo: `clampSkillDescription`, `clampSkillName`, `getPluginDbId`, `new Set`, `pluginVersionOf`, `publisherFacts.get`, `records2.push`, `skillNameFromPath2`, `slugifySkillName`, `usedIds.add`, `usedIds.has`.

Alvos de atribuição ou incremento: `id`, `suffix`.

SHA-256 do trecho: `a7d7d11d36f9e7caea1a1c41a5d3fc45a71a16953d7faf9ed81ec23aad98f8a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
