# `isErrorName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-fill-write-failure.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-write-failure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724149-724151](../../../../../../../../reference/runtime/host-main.cjs#L724149-L724151) | `FunctionDeclaration` | não | `name18` |
| [evaluation:560043-560045](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560043-L560045) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724149-724151](../../../../../../../../reference/runtime/host-main.cjs#L724149-L724151) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560043-560045](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560043-L560045) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724149

Chamadas escritas diretamente neste corpo: `ERROR_NAMES.has`.

SHA-256 do trecho: `9f6261ab2cd56a5e09563bce498494e4c76283481eca5cf48147a0352a96e8a2`.

### evaluation:560043

Chamadas escritas diretamente neste corpo: `ERROR_NAMES.has`.

SHA-256 do trecho: `9f6261ab2cd56a5e09563bce498494e4c76283481eca5cf48147a0352a96e8a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
