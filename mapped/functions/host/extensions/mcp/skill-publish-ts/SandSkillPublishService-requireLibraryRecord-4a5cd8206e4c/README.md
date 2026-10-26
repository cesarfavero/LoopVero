# `SandSkillPublishService.requireLibraryRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702306-702312](../../../../../../../reference/runtime/host-main.cjs#L702306-L702312) | `method` | não | `workflowId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702306-702312](../../../../../../../reference/runtime/host-main.cjs#L702306-L702312) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:702306

Chamadas escritas diretamente neste corpo: `new SandSkillPublishError`, `this.library.get`.

Alvos de lançamento explícito: `SandSkillPublishError`.

SHA-256 do trecho: `84f378f5d3cf8241a1f152f48dd703d420332017117139cf876b7eca495152c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
