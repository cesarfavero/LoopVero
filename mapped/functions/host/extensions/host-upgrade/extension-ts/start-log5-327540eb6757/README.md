# `start/log5`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/host-upgrade/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/host-upgrade/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:681837-681837](../../../../../../../reference/runtime/host-main.cjs#L681837-L681837) | `ArrowFunctionExpression` | não | `level, message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681837-681837](../../../../../../../reference/runtime/host-main.cjs#L681837-L681837) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:681837 usa retorno implícito de arrow function.

### host:681837

Chamadas escritas diretamente neste corpo: `context2.deps.telemetry.logs.reportHostLog`.

SHA-256 do trecho: `cc5ae64c39d68a80a3366baf1b924c5526bd12d60dd1fda372d8299a28d1d359`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
