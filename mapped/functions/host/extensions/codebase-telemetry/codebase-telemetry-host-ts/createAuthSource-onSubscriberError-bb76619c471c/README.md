# `createAuthSource/onSubscriberError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/codebase-telemetry-host.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:540911-540911](../../../../../../../reference/runtime/host-main.cjs#L540911-L540911) | `ArrowFunctionExpression` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540911-540911](../../../../../../../reference/runtime/host-main.cjs#L540911-L540911) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:540911 usa retorno implícito de arrow function.

### host:540911

Chamadas escritas diretamente neste corpo: `logger132.error`.

SHA-256 do trecho: `b953914783c172771f17454d730e306d502f5402d9dc967751f663564616f194`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
