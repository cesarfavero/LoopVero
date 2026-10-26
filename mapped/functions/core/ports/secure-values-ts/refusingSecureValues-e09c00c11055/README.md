# `refusingSecureValues`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/secure-values.ts` · [README do módulo](../../../../../modules/core/ports/secure-values-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724111-724122](../../../../../../reference/runtime/host-main.cjs#L724111-L724122) | `FunctionDeclaration` | não | `options2 = {}` |
| [evaluation:479400-479411](../../../../../../reference/runtime/sand-eval-runner.cjs#L479400-L479411) | `FunctionDeclaration` | não | `options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724111-724122](../../../../../../reference/runtime/host-main.cjs#L724111-L724122) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479400-479411](../../../../../../reference/runtime/sand-eval-runner.cjs#L479400-L479411) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:724111

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `66d0474c8b0ef996d408eff2f5cedf8de2176ca8906e0b6cf74e82a8a3bcb1bd`.

### evaluation:479400

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `66d0474c8b0ef996d408eff2f5cedf8de2176ca8906e0b6cf74e82a8a3bcb1bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
