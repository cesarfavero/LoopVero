# `start/sync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702496-702496](../../../../../../../reference/runtime/host-main.cjs#L702496-L702496) | `ArrowFunctionExpression` | sim | `trigger2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702496-702496](../../../../../../../reference/runtime/host-main.cjs#L702496-L702496) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:702496 usa retorno implícito de arrow function.

### host:702496

Chamadas escritas diretamente neste corpo: `.map`, `pluginSkills.sync`.

SHA-256 do trecho: `881a6501693d27d324d872647e839f9353b146b1e653546139bbfc2d31e88dfc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
