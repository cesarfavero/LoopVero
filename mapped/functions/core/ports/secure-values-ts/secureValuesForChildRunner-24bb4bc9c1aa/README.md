# `secureValuesForChildRunner`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/secure-values.ts` · [README do módulo](../../../../../modules/core/ports/secure-values-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:479412-479414](../../../../../../reference/runtime/sand-eval-runner.cjs#L479412-L479414) | `FunctionDeclaration` | não | `parent, childRequestSource` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479412-479414](../../../../../../reference/runtime/sand-eval-runner.cjs#L479412-L479414) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:479412

Chamadas escritas diretamente neste corpo: `refusingSecureValues`.

SHA-256 do trecho: `821d120ab65a93f826370f025742b9028fcae7f41582593fd82a10e78772f1d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
