# `formatInlineObject`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225614-225641](../../../../../reference/runtime/host-main.cjs#L225614-L225641) | `FunctionDeclaration` | não | `value, options2, colors, depth, seen, path33` |
| [evaluation:2102-2129](../../../../../reference/runtime/sand-eval-runner.cjs#L2102-L2129) | `FunctionDeclaration` | não | `value, options2, colors, depth, seen, path33` |
| [state-worker:21491-21518](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21491-L21518) | `FunctionDeclaration` | não | `value, options, colors, depth, seen, path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225614-225641](../../../../../reference/runtime/host-main.cjs#L225614-L225641) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:2102-2129](../../../../../reference/runtime/sand-eval-runner.cjs#L2102-L2129) | 4 | 0 | 0 | 4 | 0 | 0 |
| [state-worker:21491-21518](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21491-L21518) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:225614

Chamadas escritas diretamente neste corpo: `.map`, `Math.min`, `Object.entries`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`.

SHA-256 do trecho: `dc38b0b6a831bd93f94a15269b07f8e9a6c174db3d4118b59d081c55b5d2faac`.

### evaluation:2102

Chamadas escritas diretamente neste corpo: `.map`, `Math.min`, `Object.entries`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`.

SHA-256 do trecho: `c9f5e6b59888f696ad3bae2f8a0797b4c9fc98736bd0ba0d560cf89bbb50bf21`.

### state-worker:21491

Chamadas escritas diretamente neste corpo: `.map`, `Math.min`, `Object.entries`, `colors.dim`, `entries.slice`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`.

SHA-256 do trecho: `9f5fa7966de56649ec14fd67b3291004ba78c9253848f5ca5eae376f97eb7f41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
