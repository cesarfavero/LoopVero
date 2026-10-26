# `nextIndexEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/plugin-skills.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701916-701945](../../../../../../../reference/runtime/host-main.cjs#L701916-L701945) | `FunctionDeclaration` | não | `loaded, previous` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701916-701945](../../../../../../../reference/runtime/host-main.cjs#L701916-L701945) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:701916

Chamadas escritas diretamente neste corpo: `.filter`, `carriedOver`, `loaded.plugins.flatMap`, `new Set`, `pluginContentsToSkillRecords`.

SHA-256 do trecho: `a7a0dd7f2a0e909c74c426f9a8350ab75edf070e856fa82cb28626ad118ed79e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
