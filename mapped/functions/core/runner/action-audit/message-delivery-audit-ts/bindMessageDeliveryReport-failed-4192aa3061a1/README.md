# `bindMessageDeliveryReport/failed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/message-delivery-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/message-delivery-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754990-754993](../../../../../../../reference/runtime/host-main.cjs#L754990-L754993) | `ArrowFunctionExpression` | não | `error64, category = errorClassOf(error64)` |
| [evaluation:539218-539221](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539218-L539221) | `ArrowFunctionExpression` | não | `error63, category = errorClassOf(error63)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754990-754993](../../../../../../../reference/runtime/host-main.cjs#L754990-L754993) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539218-539221](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539218-L539221) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:754990

Chamadas escritas diretamente neste corpo: `settled`.

SHA-256 do trecho: `90106cd3e975feaab63a8535c02da71da4c32eec62c7d161803059acc99f6ab7`.

### evaluation:539218

Chamadas escritas diretamente neste corpo: `settled`.

SHA-256 do trecho: `098182f538f99135a490c4980c20217d0613def33ce376203c668d6ef797b238`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
