# `SandSkillPublishService.publish`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702164-702186](../../../../../../../reference/runtime/host-main.cjs#L702164-L702186) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702164-702186](../../../../../../../reference/runtime/host-main.cjs#L702164-L702186) | 3 | 0 | 2 | 1 | 1 | 0 |

### host:702164

Chamadas escritas diretamente neste corpo: `Number.isInteger`, `new SandSkillPublishError`, `this.confirmPublishLanded`, `this.library.remove`, `this.options.log`, `this.requireLibraryRecord`, `this.upload`.

Alvos de lançamento explícito: `SandSkillPublishError`.

SHA-256 do trecho: `462ebb97f0113e4b4fcfb89d1c5047b8c6f75487a720894f744ab869eb4a3eef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
