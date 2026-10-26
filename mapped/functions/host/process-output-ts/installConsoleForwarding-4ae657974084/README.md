# `installConsoleForwarding`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/process-output.ts` · [README do módulo](../../../../modules/host/process-output-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:455770-455803](../../../../../reference/runtime/host-main.cjs#L455770-L455803) | `FunctionExpression` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455770-455803](../../../../../reference/runtime/host-main.cjs#L455770-L455803) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:455770

Chamadas escritas diretamente neste corpo: `wrap3`.

Alvos de atribuição ou incremento: `console.error`, `console.info`, `console.log`, `console.warn`.

SHA-256 do trecho: `297e1335f5ca824aa1bd668ab3b4f2eb1c85f17f75eea47d91b0f647aa74f3f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
