# `parseMemoryTypes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-type.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-type-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702583-702597](../../../../../../../reference/runtime/host-main.cjs#L702583-L702597) | `FunctionDeclaration` | não | `definitions` |
| [evaluation:535033-535047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535033-L535047) | `FunctionDeclaration` | não | `definitions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702583-702597](../../../../../../../reference/runtime/host-main.cjs#L702583-L702597) | 1 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:535033-535047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535033-L535047) | 1 | 1 | 0 | 1 | 1 | 0 |

### host:702583

Chamadas escritas diretamente neste corpo: `definitions.map`, `names3.add`, `names3.has`, `new Error`, `new Set`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `1bd7706c667519611fb4e61399de2af803fd9da45adfded50047ae53b3e2d277`.

### evaluation:535033

Chamadas escritas diretamente neste corpo: `definitions.map`, `names3.add`, `names3.has`, `new Error`, `new Set`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `53a74d1106ed665f4ff3201e547973c25dd751166e3d3f8b05bcf50e16983ee0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
