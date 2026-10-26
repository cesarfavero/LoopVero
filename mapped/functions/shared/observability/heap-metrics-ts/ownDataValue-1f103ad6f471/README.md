# `ownDataValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/heap-metrics.ts` · [README do módulo](../../../../../modules/shared/observability/heap-metrics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487536-487539](../../../../../../reference/runtime/host-main.cjs#L487536-L487539) | `FunctionDeclaration` | não | `value, key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487536-487539](../../../../../../reference/runtime/host-main.cjs#L487536-L487539) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:487536

Chamadas escritas diretamente neste corpo: `Object.getOwnPropertyDescriptor`.

SHA-256 do trecho: `9cd02177e96a793ea664564ac380247f2a20db35e1700902e82f8738c5c9807d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
