# `onHandlerFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-event-bus.ts` · [README do módulo](../../../../modules/host/host-event-bus-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786252-786256](../../../../../reference/runtime/host-main.cjs#L786252-L786256) | `ArrowFunctionExpression` | não | `topic, error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786252-786256](../../../../../reference/runtime/host-main.cjs#L786252-L786256) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:786252 usa retorno implícito de arrow function.

### host:786252

Chamadas escritas diretamente neste corpo: `errorLogTag`, `this.reportFailure`.

SHA-256 do trecho: `0ad1e0c4bcd0f1de6436144a8b917f3bf42b513a936f86afd7d0cca9acf101a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
