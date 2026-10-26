# `skillsRootRelativePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702378-702385](../../../../../../../reference/runtime/host-main.cjs#L702378-L702385) | `FunctionDeclaration` | não | `skillRelativePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702378-702385](../../../../../../../reference/runtime/host-main.cjs#L702378-L702385) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:702378

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `new SandSkillPublishError`, `segments.slice`, `withoutRoot.join`.

Alvos de lançamento explícito: `SandSkillPublishError`.

SHA-256 do trecho: `2b29579ef08b7e7c847001cf63af77de71ff3c975cf5fd4e719bae8e8ff94a95`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
