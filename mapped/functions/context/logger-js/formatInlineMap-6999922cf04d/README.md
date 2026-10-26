# `formatInlineMap`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225591-225613](../../../../../reference/runtime/host-main.cjs#L225591-L225613) | `FunctionDeclaration` | não | `value, options2, colors, depth, seen, path33` |
| [evaluation:2079-2101](../../../../../reference/runtime/sand-eval-runner.cjs#L2079-L2101) | `FunctionDeclaration` | não | `value, options2, colors, depth, seen, path33` |
| [state-worker:21468-21490](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21468-L21490) | `FunctionDeclaration` | não | `value, options, colors, depth, seen, path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225591-225613](../../../../../reference/runtime/host-main.cjs#L225591-L225613) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:2079-2101](../../../../../reference/runtime/sand-eval-runner.cjs#L2079-L2101) | 3 | 0 | 0 | 3 | 0 | 0 |
| [state-worker:21468-21490](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21468-L21490) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:225591

Chamadas escritas diretamente neste corpo: `.map`, `Array.from`, `Math.min`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.entries`.

SHA-256 do trecho: `2b51751317e32cd3752fd2718a1577e027cd7d67933998645cf5a50955b79416`.

### evaluation:2079

Chamadas escritas diretamente neste corpo: `.map`, `Array.from`, `Math.min`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.entries`.

SHA-256 do trecho: `2b51751317e32cd3752fd2718a1577e027cd7d67933998645cf5a50955b79416`.

### state-worker:21468

Chamadas escritas diretamente neste corpo: `.map`, `Array.from`, `Math.min`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.entries`.

SHA-256 do trecho: `17e28fb00258d8678a3e5996431a64331f235dae09b1e6aeff18c43840dc7483`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
