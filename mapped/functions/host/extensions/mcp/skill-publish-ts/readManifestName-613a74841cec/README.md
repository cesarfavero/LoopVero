# `readManifestName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702356-702368](../../../../../../../reference/runtime/host-main.cjs#L702356-L702368) | `FunctionDeclaration` | sim | `pluginDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702356-702368](../../../../../../../reference/runtime/host-main.cjs#L702356-L702368) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:702356

Chamadas escritas diretamente neste corpo: `JSON.parse`, `manifest.name.trim`, `reportFallbackUnlessAbsent`.

SHA-256 do trecho: `6db0a1f358bca67f7a3a6a086c93e7e9d3d36e0e4b5217f729a9d14c0f5a9f3e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
