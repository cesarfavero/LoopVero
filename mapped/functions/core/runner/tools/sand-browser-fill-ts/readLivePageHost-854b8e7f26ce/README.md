# `readLivePageHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727299-727301](../../../../../../../reference/runtime/host-main.cjs#L727299-L727301) | `FunctionDeclaration` | sim | `ctx, runner` |
| [evaluation:561805-561807](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561805-L561807) | `FunctionDeclaration` | sim | `ctx, runner` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727299-727301](../../../../../../../reference/runtime/host-main.cjs#L727299-L727301) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:561805-561807](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561805-L561807) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:727299

Chamadas escritas diretamente neste corpo: `livePageHostOf`, `runner.run`.

SHA-256 do trecho: `2c641823b452d8068391c993d4590e81a35f06aef66d201236dc1b1ba8810aa7`.

### evaluation:561805

Chamadas escritas diretamente neste corpo: `livePageHostOf`, `runner.run`.

SHA-256 do trecho: `2c641823b452d8068391c993d4590e81a35f06aef66d201236dc1b1ba8810aa7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
