# `hasExactKeys`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541276-541280](../../../../../../../reference/runtime/host-main.cjs#L541276-L541280) | `FunctionDeclaration` | não | `value, keys` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541276-541280](../../../../../../../reference/runtime/host-main.cjs#L541276-L541280) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:541276

Chamadas escritas diretamente neste corpo: `.sort`, `Object.keys`, `actual.every`.

SHA-256 do trecho: `21d12eaaa274be6c8a65c2c1f42b477f3cc7fa9673330662b9c935176557b3e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
