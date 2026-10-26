# `isHttpRateLimitError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620175-620191](../../../../../reference/runtime/host-main.cjs#L620175-L620191) | `FunctionDeclaration` | não | `error64` |
| [evaluation:304529-304545](../../../../../reference/runtime/sand-eval-runner.cjs#L304529-L304545) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620175-620191](../../../../../reference/runtime/host-main.cjs#L620175-L620191) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304529-304545](../../../../../reference/runtime/sand-eval-runner.cjs#L304529-L304545) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:620175

Chamadas escritas diretamente neste corpo: `new Set`, `queue.push`, `queue.shift`, `seen.add`, `seen.has`.

SHA-256 do trecho: `05e0913a79d2a0ca6e1d27a9eb22ef367515601581cb2f9a3d03404d1ea78cb7`.

### evaluation:304529

Chamadas escritas diretamente neste corpo: `new Set`, `queue.push`, `queue.shift`, `seen.add`, `seen.has`.

SHA-256 do trecho: `c81aa3c2e4356b057e8c4c47ef8c6ec38ac7d567eafa54699d5e8ebefe7229b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
