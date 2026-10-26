# `SandPluginSkillsService.sync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/plugin-skills.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701987-702007](../../../../../../../reference/runtime/host-main.cjs#L701987-L702007) | `method` | sim | `trigger2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701987-702007](../../../../../../../reference/runtime/host-main.cjs#L701987-L702007) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:701987

Chamadas escritas diretamente neste corpo: `this.current`, `this.startPass`.

Alvos de atribuição ou incremento: `this.pending`, `this.pending.trigger`.

SHA-256 do trecho: `61f7c857198c1819712912a8dc41c9d7d6c5bd34d08bd81cbe0e1ce6c13c77b2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
