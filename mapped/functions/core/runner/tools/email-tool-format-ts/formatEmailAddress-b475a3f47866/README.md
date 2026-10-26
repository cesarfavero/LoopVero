# `formatEmailAddress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-tool-format.ts` · [README do módulo](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764141-764144](../../../../../../../reference/runtime/host-main.cjs#L764141-L764144) | `FunctionDeclaration` | não | `address` |
| [evaluation:557512-557515](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557512-L557515) | `FunctionDeclaration` | não | `address` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764141-764144](../../../../../../../reference/runtime/host-main.cjs#L764141-L764144) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557512-557515](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557512-L557515) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:764141

Chamadas escritas diretamente neste corpo: `address.name.trim`.

SHA-256 do trecho: `95ca0c87951bd23e49d2d1cf31ef12249d3ba188daa43eabeda5c7ee347beb45`.

### evaluation:557512

Chamadas escritas diretamente neste corpo: `address.name.trim`.

SHA-256 do trecho: `95ca0c87951bd23e49d2d1cf31ef12249d3ba188daa43eabeda5c7ee347beb45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
