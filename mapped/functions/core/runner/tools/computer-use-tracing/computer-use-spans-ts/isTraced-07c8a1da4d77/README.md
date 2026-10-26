# `isTraced`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742974-742976](../../../../../../../../reference/runtime/host-main.cjs#L742974-L742976) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:515825-515827](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515825-L515827) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742974-742976](../../../../../../../../reference/runtime/host-main.cjs#L742974-L742976) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515825-515827](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515825-L515827) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742974

Chamadas escritas diretamente neste corpo: `ctx.get`, `getSpan2`.

SHA-256 do trecho: `229210e3f74beecc90628b907a1bb942adec8a588f0cee8209bc239da632622e`.

### evaluation:515825

Chamadas escritas diretamente neste corpo: `ctx.get`, `getSpan2`.

SHA-256 do trecho: `229210e3f74beecc90628b907a1bb942adec8a588f0cee8209bc239da632622e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
