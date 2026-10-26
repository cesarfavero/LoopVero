# `readSkillFrontmatter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702343-702355](../../../../../../../reference/runtime/host-main.cjs#L702343-L702355) | `FunctionDeclaration` | não | `filePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702343-702355](../../../../../../../reference/runtime/host-main.cjs#L702343-L702355) | 1 | 0 | 0 | 1 | 1 | 1 |

### host:702343

Chamadas escritas diretamente neste corpo: `new SandSkillPublishError`, `parseSkillFile`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `parsed2`.

Alvos de lançamento explícito: `SandSkillPublishError`.

SHA-256 do trecho: `6c4bca53f9f75c5741327feb461c31fdeaa43a1ced9ebd67bb6954d41503d3c7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
