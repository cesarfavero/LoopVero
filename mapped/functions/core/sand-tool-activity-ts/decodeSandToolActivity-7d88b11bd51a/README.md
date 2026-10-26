# `decodeSandToolActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/tools/README.md).

**Módulo:** `core/sand-tool-activity.ts` · [README do módulo](../../../../modules/core/sand-tool-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719675-719691](../../../../../reference/runtime/host-main.cjs#L719675-L719691) | `FunctionDeclaration` | não | `currentStep` |
| [evaluation:526023-526039](../../../../../reference/runtime/sand-eval-runner.cjs#L526023-L526039) | `FunctionDeclaration` | não | `currentStep` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719675-719691](../../../../../reference/runtime/host-main.cjs#L719675-L719691) | 5 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:526023-526039](../../../../../reference/runtime/sand-eval-runner.cjs#L526023-L526039) | 5 | 0 | 0 | 4 | 0 | 1 |

### host:719675

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `descriptor`, `isSandToolName`.

Alvos de atribuição ou incremento: `payload`.

SHA-256 do trecho: `5c412edca4cedee19b01c1559c79dfade3400553df758abb746f9aa2459ba5f3`.

### evaluation:526023

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `descriptor`, `isSandToolName`.

Alvos de atribuição ou incremento: `payload`.

SHA-256 do trecho: `5c412edca4cedee19b01c1559c79dfade3400553df758abb746f9aa2459ba5f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
