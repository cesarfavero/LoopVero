# `fillablePageOfUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727288-727295](../../../../../../../reference/runtime/host-main.cjs#L727288-L727295) | `FunctionDeclaration` | não | `url2` |
| [evaluation:561794-561801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561794-L561801) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727288-727295](../../../../../../../reference/runtime/host-main.cjs#L727288-L727295) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:561794-561801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561794-L561801) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:727288

Chamadas escritas diretamente neste corpo: `URL.parse`, `isLoopbackUserFormHost`.

SHA-256 do trecho: `63871b35a53e4c105a09c82c204e49f97ddac4608f99333313a6cd61c3593603`.

### evaluation:561794

Chamadas escritas diretamente neste corpo: `URL.parse`, `isLoopbackUserFormHost`.

SHA-256 do trecho: `a766553beb36d37af286ee45b49cbd5e5185116692c68c28d4efc6507751a8f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
