# `requireManifestName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702369-702377](../../../../../../../reference/runtime/host-main.cjs#L702369-L702377) | `FunctionDeclaration` | sim | `installPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702369-702377](../../../../../../../reference/runtime/host-main.cjs#L702369-L702377) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:702369

Chamadas escritas diretamente neste corpo: `new SandSkillPublishError`, `readManifestName`.

Alvos de lançamento explícito: `SandSkillPublishError`.

SHA-256 do trecho: `2b0586fd6569878ff97faa9e2e7de7506be9391ba9f2e9da0f34fda5f69712f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
