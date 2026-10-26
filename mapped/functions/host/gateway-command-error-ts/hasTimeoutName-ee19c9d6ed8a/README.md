# `hasTimeoutName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-command-error.ts` · [README do módulo](../../../../modules/host/gateway-command-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489553-489565](../../../../../reference/runtime/host-main.cjs#L489553-L489565) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489553-489565](../../../../../reference/runtime/host-main.cjs#L489553-L489565) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:489553

Chamadas escritas diretamente neste corpo: `/TimeoutError$/.test`, `new Set`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `cbded7e1db55ba052a7b42b785ee2397ccf34416d19e571d7de9bce816db9f4c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
